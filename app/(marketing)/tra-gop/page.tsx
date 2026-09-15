import { pageMetadata } from "@/lib/seo";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { FinancingSteps } from "@/components/financing/financing-steps";
import { ClientLoanCalculator } from "@/components/financing/client-loan-calculator";
import styles from "@/components/financing/financing.module.css";

export const metadata = pageMetadata("Trả góp xe VinFast", "Ước tính khoản vay mua xe VinFast: gốc, lãi, tiền trả hàng tháng và lịch trả nợ.", "/tra-gop");
export default function Financing() {
  return (
    <main id="main" className={`container ${styles.page}`}>
      <h1 className={styles.title}>TRẢ GÓP XE VINFAST</h1>
      <p className={styles.intro}>
        Đội ngũ tư vấn hỗ trợ tìm hiểu phương án trả góp phù hợp với nhu cầu và
        ngân sách của bạn.
      </p>
      <FinancingSteps />
      <ClientLoanCalculator />
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
