import { formatNumber } from "@/lib/format";
import type { LoanRow } from "@/lib/loan-calculator";
import styles from "./financing.module.css";

export function LoanSchedule({
  rows,
  totalInterest,
  totalPayment,
}: {
  rows: LoanRow[];
  totalInterest: number;
  totalPayment: number;
}) {
  return (
    <div
      className={styles.scheduleScroll}
      tabIndex={0}
      role="region"
      aria-label="Bảng lịch trả nợ, cuộn ngang để xem đủ cột"
    >
      <table className={styles.schedule}>
        <caption>
          Lịch trả nợ dự kiến · Đơn vị: VNĐ · Dư nợ là số tiền còn lại sau khi
          trả kỳ này
        </caption>
        <thead>
          <tr>
            <th scope="col">Kỳ</th>
            <th scope="col">Ngày trả</th>
            <th scope="col">Lãi suất (%/năm)</th>
            <th scope="col">Gốc trả</th>
            <th scope="col">Lãi trả</th>
            <th scope="col">Tổng trả</th>
            <th scope="col">Dư nợ còn lại</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.month}>
              <th scope="row">{row.month}</th>
              <td>{row.date.split("-").reverse().join("/")}</td>
              <td>{row.annualRate.toLocaleString("vi-VN")}%</td>
              <td>{formatNumber(row.principal)}</td>
              <td>{formatNumber(row.interest)}</td>
              <td>{formatNumber(row.payment)}</td>
              <td>{formatNumber(row.remaining)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={3}>
              Tổng cộng
            </th>
            <td>{formatNumber(totalPayment - totalInterest)}</td>
            <td>{formatNumber(totalInterest)}</td>
            <td>{formatNumber(totalPayment)}</td>
            <td>0</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
