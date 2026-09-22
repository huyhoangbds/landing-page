import type { LoanInput } from "@/lib/loan-calculator";
import { formatCurrency } from "@/lib/format";
import styles from "./financing.module.css";

type Props = {
  price: string; loan: string; months: string; rate: string; subsequentRate: string; setSubsequentRate: (value: string) => void; date: string;
  input: LoanInput; ratio: number; error: string | null;
  changePrice: (value: string) => void; setLoan: (value: string) => void;
  setMonths: (value: string) => void; setRate: (value: string) => void; setDate: (value: string) => void;
};
export function LoanFields({ price, loan, months, rate, subsequentRate, setSubsequentRate, date, input, ratio, error, changePrice, setLoan, setMonths, setRate, setDate }: Props) {
  return (<div className={styles.fields}>
          <div className={styles.field}>
            <label htmlFor="vehicle-price">
              Giá trị xe<small>Nhập giá xe dự kiến mua</small>
            </label>
            <div>
              <div className={styles.inputBox}>
                <input
                  id="vehicle-price"
                  type="text"
                  inputMode="numeric"
                  value={price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  onChange={(e) => changePrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
                />
                <span>VNĐ</span>
              </div>
              <small className={styles.amountHint}>
                {Number.isFinite(input.vehiclePrice)
                  ? formatCurrency(input.vehiclePrice)
                  : "Nhập giá trị xe"}
              </small>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="loan-amount">
              Số tiền vay
              <small>
                Nhập số tiền hoặc kéo tỷ lệ vay (tối đa 85% trong mô phỏng).
              </small>
            </label>
            <div>
              <label className={styles.ratioLabel} htmlFor="loan-ratio">
                Tỷ lệ vay{" "}
                <strong>
                  {ratio.toLocaleString("vi-VN", { maximumFractionDigits: 1 })}%
                </strong>
              </label>
              <input
                className={styles.slider}
                aria-label="Tỷ lệ vay theo giá trị xe"
                id="loan-ratio"
                type="range"
                min={0}
                max={85}
                step={1}
                value={ratio}
                disabled={
                  !Number.isSafeInteger(input.vehiclePrice) ||
                  input.vehiclePrice <= 0 ||
                  input.vehiclePrice > 20000000000
                }
                onChange={(e) =>
                  setLoan(
                    String(
                      Math.floor(
                        (input.vehiclePrice * Number(e.target.value)) / 100,
                      ),
                    ),
                  )
                }
              />
              <div className={styles.rangeEnds}>
                <span>0%</span>
                <span>85%</span>
              </div>
              <div className={styles.inputBox}>
                <input
                  id="loan-amount"
                  type="text"
                  inputMode="numeric"
                  value={loan.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  onChange={(e) => setLoan(e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
                />
                <span>VNĐ</span>
              </div>
              <small className={styles.amountHint}>
                {Number.isFinite(input.principal)
                  ? formatCurrency(input.principal)
                  : "Nhập số tiền vay"}
              </small>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="loan-months">
              Thời gian vay<small>Từ 1 đến 120 tháng</small>
            </label>
            <div className={styles.inputBox}>
              <input
                id="loan-months"
                type="number"
                min={1}
                max={120}
                step={1}
                inputMode="numeric"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />
              <span>Tháng</span>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="loan-rate">
              Lãi suất năm đầu<small>Cố định trong 12 tháng đầu (%/năm)</small>
            </label>
            <div className={styles.inputBox}>
              <input
                id="loan-rate"
                type="number"
                min={0}
                max={100}
                step="any"
                inputMode="decimal"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <span>%/năm</span>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="loan-subsequent-rate">Lãi suất từ năm thứ hai<small>Mức thả nổi dự kiến từ tháng 13, dùng để mô phỏng</small></label>
            <div className={styles.inputBox}>
              <input id="loan-subsequent-rate" type="number" min={0} max={100} step="any" inputMode="decimal" value={subsequentRate} onChange={(event) => setSubsequentRate(event.target.value)} />
              <span>%/năm</span>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="loan-date">Ngày giải ngân</label>
            <div className={styles.inputBox}>
              <input
                id="loan-date"
                type="date"
                min="2000-01-01"
                max="2100-12-31"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
        </div>);
}
