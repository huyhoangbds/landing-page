import { pageMetadata } from "@/lib/seo";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { FinancingSteps } from "@/components/financing/financing-steps";
import { LoanCalculator } from "@/components/financing/loan-calculator";
import styles from "@/components/financing/financing.module.css";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata("Trả góp xe VinFast", "Ước tính khoản vay mua xe VinFast: gốc, lãi, tiền trả hàng tháng và lịch trả nợ.", "/tra-gop");
export default function Financing() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = (type: string) =>
    parts.find((part) => part.type === type)?.value;
  const today = `${value("year")}-${value("month")}-${value("day")}`;
  return (
    <main id="main" className={`container ${styles.page}`}>
      <h1 className={styles.title}>TRẢ GÓP XE VINFAST</h1>
      <p className={styles.intro}>
        Đội ngũ tư vấn hỗ trợ tìm hiểu phương án trả góp phù hợp với nhu cầu và
        ngân sách của bạn.
      </p>
      <FinancingSteps />
      <LoanCalculator today={today} />
      <div className={styles.consultation}>
        <p>
          Khoản vay và lãi suất phụ thuộc thời điểm, hồ sơ và chính sách của tổ
          chức cho vay. Liên hệ để nhận thông tin cụ thể trước khi quyết định.
        </p>
        <QuoteButton intent="Tư vấn trả góp">Nhận tư vấn trả góp</QuoteButton>
      </div>
    </main>
  );
}
