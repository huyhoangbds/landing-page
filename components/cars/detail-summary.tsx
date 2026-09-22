import { Check, Phone } from "lucide-react";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { site, priceNote } from "@/lib/data/site";
import { formatPrice } from "@/lib/data/cars";
import styles from "./detail.module.css";
export function DetailSummary({ name, price }: { name: string; price: number | null }) {
  const isWild = name === "VinFast VF Wild";
  return <div className={styles.summary}>
    {isWild && <span className="eyebrow">BÁN TẢI ĐIỆN · REEV</span>}
    <h1>{name}</h1>
    <div className={styles.price}><span>{isWild ? "Chỉ từ" : "Giá từ"}</span><strong>{formatPrice(price)}</strong></div>
    <p className={styles.note}>{isWild ? "Giá chỉ từ 799 triệu đồng đã bao gồm ưu đãi đặt cọc tiên phong giảm 61 triệu đồng từ giá niêm yết 860 triệu đồng. Giá niêm yết màu bạc (nâng cao): 872 triệu đồng. Liên hệ để xác nhận điều kiện áp dụng." : priceNote}</p>
    <div className={styles.offers}>
      <h2>ƯU ĐÃI KHI MUA XE VINFAST</h2>
      <ul>
        {isWild && <li><Check size={16} aria-hidden="true" /><strong>Đặt cọc tiên phong giảm 61 triệu đồng (đã tính trong giá từ 799 triệu).</strong></li>}
        {["Miễn 100% lệ phí trước bạ.", "Sạc pin miễn phí tới năm 2029.", "Hỗ trợ vay tới 85%, lãi suất thấp.", "Quà tặng phụ kiện ngay khi mua.", "Liên hệ kiểm tra màu xe và hồ sơ giao ngay."].map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
      <p>Liên hệ để xác nhận ưu đãi áp dụng cho mẫu xe và thời điểm mua.</p>
    </div>
    <a className={styles.hotline} href={`tel:${site.tel}`}><Phone size={21} /><span>Tư vấn {site.name}<strong>{site.phone}</strong></span></a>
    <div className={styles.actions}><QuoteButton car={name}>Yêu cầu báo giá</QuoteButton><QuoteButton car={name} intent="Lái thử" className="button outline">Đăng ký lái thử</QuoteButton></div>
  </div>;
}
