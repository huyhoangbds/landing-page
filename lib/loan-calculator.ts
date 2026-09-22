export type LoanMethod = "declining" | "fixed";
export type LoanInput = {
  vehiclePrice: number;
  principal: number;
  months: number;
  annualRate: number;
  subsequentAnnualRate?: number;
  startDate: string;
  method: LoanMethod;
};
export type LoanRow = {
  annualRate: number;
  month: number;
  date: string;
  opening: number;
  principal: number;
  interest: number;
  payment: number;
  remaining: number;
};
export function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return (
    Number.isFinite(date.getTime()) &&
    date.toISOString().slice(0, 10) === value &&
    Number(value.slice(0, 4)) >= 2000 &&
    Number(value.slice(0, 4)) <= 2100
  );
}
export function paymentDate(start: string, offset: number): string {
  const [year, month, day] = start.split("-").map(Number);
  const target = new Date(Date.UTC(year, month - 1 + offset, 1));
  const last = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0),
  ).getUTCDate();
  target.setUTCDate(Math.min(day, last));
  return target.toISOString().slice(0, 10);
}
export function validateLoan(input: LoanInput): string | null {
  if (
    !Number.isSafeInteger(input.vehiclePrice) ||
    input.vehiclePrice <= 0 ||
    input.vehiclePrice > 20_000_000_000
  )
    return "Nhập giá trị xe từ 1 đến 20 tỷ đồng, không có phần lẻ.";
  if (
    !Number.isSafeInteger(input.principal) ||
    input.principal < 0 ||
    input.principal > Math.floor(input.vehiclePrice * 0.85)
  )
    return "Số tiền vay phải từ 0 đến 85% giá trị xe.";
  if (!Number.isInteger(input.months) || input.months < 1 || input.months > 120)
    return "Thời gian vay phải là số nguyên từ 1 đến 120 tháng.";
  if (
    !Number.isFinite(input.annualRate) ||
    input.annualRate < 0 ||
    input.annualRate > 100
  )
    return "Nhập lãi suất từ 0 đến 100%/năm.";
  if (input.subsequentAnnualRate !== undefined && (!Number.isFinite(input.subsequentAnnualRate) || input.subsequentAnnualRate < 0 || input.subsequentAnnualRate > 100))
    return "Nhập lãi suất từ năm thứ hai trong khoảng 0 đến 100%/năm.";
  if (!validDate(input.startDate))
    return "Chọn ngày giải ngân hợp lệ trong khoảng năm 2000–2100.";
  if (input.method !== "declining" && input.method !== "fixed")
    return "Chọn phương thức trả nợ hợp lệ.";
  return null;
}
export function calculateLoan(input: LoanInput) {
  const error = validateLoan(input);
  if (error) throw new Error(error);
  const { principal, months, annualRate, method, startDate } = input;
  const rate = annualRate / 1200;
  const regularPayment = Math.round(
    rate === 0
      ? principal / months
      : (principal * rate) / -Math.expm1(-months * Math.log1p(rate)),
  );
  const rows: LoanRow[] = [];
  let remaining = principal;
  let currentPayment = regularPayment;
  for (let month = 1; month <= months && principal > 0; month++) {
    const opening = remaining;
    const rowAnnualRate = month <= 12 ? annualRate : (input.subsequentAnnualRate ?? annualRate);
    const monthlyRate = rowAnnualRate / 1200;
    if (month === 13 && rowAnnualRate !== annualRate) {
      const remainingMonths = months - 12;
      currentPayment = Math.round(monthlyRate === 0 ? opening / remainingMonths : opening * monthlyRate / -Math.expm1(-remainingMonths * Math.log1p(monthlyRate)));
    }
    const interest = Math.round(opening * monthlyRate);
    const installment =
      method === "declining"
        ? Math.round((principal * month) / months) -
          Math.round((principal * (month - 1)) / months)
        : Math.max(0, currentPayment - interest);
    const repaid = month === months ? opening : Math.min(opening, installment);
    remaining = opening - repaid;
    rows.push({
      annualRate: rowAnnualRate,
      month,
      date: paymentDate(startDate, month),
      opening,
      principal: repaid,
      interest,
      payment: repaid + interest,
      remaining,
    });
  }
  const totalInterest = rows.reduce((sum, row) => sum + row.interest, 0);
  return {
    rows,
    totalInterest,
    totalPayment: principal + totalInterest,
    upfront: input.vehiclePrice - principal,
    firstPayment: rows[0]?.payment ?? 0,
    lastPayment: rows.at(-1)?.payment ?? 0,
    regularPayment: principal === 0 ? 0 : regularPayment,
  };
}
