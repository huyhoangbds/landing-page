import Image from "next/image";
import { Wallet, ChevronDown } from "lucide-react";
import { MotionButton } from "@/components/ui/motion-controls";
import { formatCurrency } from "@/lib/format";
import type { calculateLoan, LoanInput, LoanMethod } from "@/lib/loan-calculator";
import styles from "./financing.module.css";

type Props = {
  result: ReturnType<typeof calculateLoan> | null; method: LoanMethod;
  input: LoanInput; expanded: boolean; setExpanded: (expanded: boolean) => void;
};
export function LoanResult({ result, method, input, expanded, setExpanded }: Props) {
  return (<aside className={styles.result} aria-label="Kết quả tính khoản vay">
          <div className={styles.resultBrandRow}>
            <Wallet size={38} aria-hidden="true" />
            <div className={styles.resultBrand}>
              <Image src="/images/favicon-2792145j26027.png" alt="" width={44} height={44} />
              <span>Huy Hoàng<small>Ôtô VinFast</small></span>
            </div>
          </div>
          <span className={styles.resultLabel}>KHOẢN TRẢ DỰ KIẾN</span>
          {result ? (
            <>
              {method === "declining" ? (
                <div className={styles.paymentRange}>
                  <div>
                    <span>Tháng đầu</span>
                    <strong>{formatCurrency(result.firstPayment)}</strong>
                  </div>
                  <div>
                    <span>Tháng cuối</span>
                    <strong>{formatCurrency(result.lastPayment)}</strong>
                  </div>
                </div>
              ) : (
                <div className={styles.mainPayment}>
                  <span>Mỗi tháng</span>
                  <strong>{formatCurrency(result.regularPayment)}</strong>
                  <small>
                    Kỳ cuối: {formatCurrency(result.lastPayment)} (điều chỉnh làm tròn).
                  </small>
                </div>
              )}
              <dl>
                <div>
                  <dt>Tổng lãi phải trả</dt>
                  <dd>{formatCurrency(result.totalInterest)}</dd>
                </div>
                <div>
                  <dt>Tổng gốc + lãi</dt>
                  <dd>{formatCurrency(result.totalPayment)}</dd>
                </div>
                <div>
                  <dt>Tiền trả trước mua xe</dt>
                  <dd>{formatCurrency(result.upfront)}</dd>
                </div>
              </dl>
              {input.principal === 0 ? (
                <p>Bạn không cần vay với lựa chọn này.</p>
              ) : (
                <MotionButton
                  className={styles.detailsButton}
                  aria-expanded={expanded}
                  aria-controls="loan-schedule"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Ẩn lịch trả nợ" : "Xem chi tiết lịch trả nợ"}
                  <ChevronDown
                    size={18}
                    style={{
                      transform: expanded ? "rotate(180deg)" : undefined,
                    }}
                  />
                </MotionButton>
              )}
            </>
          ) : (
            <p className={styles.resultEmpty}>
              Hoàn thiện thông tin hợp lệ để xem kết quả.
            </p>
          )}
        </aside>);
}
