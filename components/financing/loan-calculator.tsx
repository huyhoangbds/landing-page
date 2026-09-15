"use client";
import { useState } from "react";
import { LoanFields } from "./loan-fields";
import { LoanResult } from "./loan-result";
import { Calculator } from "lucide-react";
import {
  calculateLoan,
  validateLoan,
  type LoanInput,
  type LoanMethod,
} from "@/lib/loan-calculator";
import { LoanSchedule } from "./loan-schedule";
import styles from "./financing.module.css";
const parseNumericInput = (value: string) =>
  value.trim() === "" ? NaN : Number(value);
const methods = [
  { id: "declining", label: "Dư nợ giảm dần" },
  { id: "fixed", label: "Trả hàng tháng cố định" },
] as const;
export function LoanCalculator({ today }: { today: string }) {
  const [method, setMethod] = useState<LoanMethod>("declining");
  const [price, setPrice] = useState("600000000");
  const [loan, setLoan] = useState("420000000");
  const [months, setMonths] = useState("60");
  const [rate, setRate] = useState("7.5");
  const [date, setDate] = useState(today);
  const [expanded, setExpanded] = useState(false);
  const input: LoanInput = {
    vehiclePrice: parseNumericInput(price),
    principal: parseNumericInput(loan),
    months: parseNumericInput(months),
    annualRate: parseNumericInput(rate),
    startDate: date,
    method,
  };
  const error = validateLoan(input);
  const result = error ? null : calculateLoan(input);
  const ratio =
    Number.isFinite(input.vehiclePrice) &&
    input.vehiclePrice > 0 &&
    Number.isFinite(input.principal)
      ? Math.max(0, Math.min(85, (input.principal / input.vehiclePrice) * 100))
      : 0;
  function changePrice(value: string) {
    const previousPrice = parseNumericInput(price),
      nextPrice = parseNumericInput(value),
      currentPrincipal = parseNumericInput(loan);
    const fraction =
      previousPrice > 0 && Number.isFinite(currentPrincipal)
        ? Math.max(0, Math.min(0.85, currentPrincipal / previousPrice))
        : 0.7;
    setPrice(value);
    if (Number.isSafeInteger(nextPrice) && nextPrice > 0 && nextPrice <= 20_000_000_000)
      setLoan(String(Math.floor(nextPrice * fraction)));
  }
  return (
    <section
      className={styles.calculator}
      aria-labelledby="loan-calculator-title"
    >
      <div className={styles.calculatorHeading}>
        <span>
          <Calculator size={24} />
        </span>
        <div>
          <h2 id="loan-calculator-title">Tính khoản vay mua xe</h2>
          <p>Điều chỉnh thông tin để ước tính gốc và lãi phải trả.</p>
        </div>
      </div>
      <div
        role="tablist"
        aria-label="Phương thức trả nợ"
        className={styles.tabs}
      >
        {methods.map((item, index) => (
          <button
            type="button"
            role="tab"
            id={`loan-tab-${item.id}`}
            aria-selected={method === item.id}
            aria-controls="loan-panel"
            tabIndex={method === item.id ? 0 : -1}
            key={item.id}
            onClick={() => setMethod(item.id)}
            onKeyDown={(event) => {
              if (
                ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
              ) {
                event.preventDefault();
                const target =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? 1
                      : 1 - index;
                setMethod(methods[target].id);
                document
                  .getElementById(`loan-tab-${methods[target].id}`)
                  ?.focus();
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        id="loan-panel"
        role="tabpanel"
        aria-labelledby={`loan-tab-${method}`}
        className={styles.calculatorGrid}
      >
        <LoanFields {...{price, loan, months, rate, date, input, ratio, error, changePrice, setLoan, setMonths, setRate, setDate}} />
        <LoanResult {...{result, method, input, expanded, setExpanded}} />
      </div>
      <p className={styles.assumptions}>
        {method === "declining"
          ? "Gốc chia đều theo kỳ; lãi tính trên dư nợ đầu kỳ."
          : "Tổng gốc và lãi gần như cố định mỗi tháng; tỷ trọng gốc tăng và lãi giảm dần."}{" "}
        Lãi tháng = lãi năm / 12, giả định lãi suất không đổi suốt kỳ vay. Kỳ
        đầu sau một tháng giải ngân; ngày cuối tháng được điều chỉnh nếu cần. Số
        tiền làm tròn đến đồng. Kết quả tham khảo, chưa gồm phí, bảo hiểm và
        thay đổi lãi suất; lịch thực tế của ngân hàng có thể dùng số ngày thực
        tế.
      </p>
      <div id="loan-schedule">
        {expanded && result && input.principal > 0 && (
          <LoanSchedule
            rows={result.rows}
            totalInterest={result.totalInterest}
            totalPayment={result.totalPayment}
          />
        )}
      </div>
    </section>
  );
}
