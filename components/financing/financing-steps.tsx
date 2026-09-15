import styles from "./financing.module.css";
export function FinancingSteps() {
  return (
    <div className={styles.steps}>
      {[
        [
          "01",
          "Chọn chiếc xe",
          "Xác định mẫu xe, phiên bản và khoản trả trước dự kiến.",
        ],
        [
          "02",
          "Nhận tư vấn khoản vay",
          "Tìm hiểu hồ sơ, kỳ hạn, lãi suất và điều kiện từ đơn vị cho vay.",
        ],
        [
          "03",
          "Hoàn thiện thủ tục",
          "Xác nhận phương án tài chính, ký hồ sơ và hẹn lịch nhận xe.",
        ],
      ].map(([number, title, text]) => (
        <article key={number} className={styles.step}>
          <span>{number}</span>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
