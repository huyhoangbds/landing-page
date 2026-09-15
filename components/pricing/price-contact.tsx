import { Phone, Gift } from "lucide-react";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { site } from "@/lib/data/site";
import styles from "./pricing.module.css";
export function PriceContact() {
  return (
    <section className={styles.contact} aria-labelledby="price-contact-title">
      <Gift size={30} aria-hidden="true" />
      <h2 id="price-contact-title">{site.name} — Ưu đãi & phụ kiện</h2>
      <p>Hỗ trợ vay tới 85%, lãi suất thấp.</p>
      <a className={styles.contactPhone} href={`tel:${site.tel}`}>
        <Phone size={20} /> Hotline: {site.phone}
      </a>
      <QuoteButton>Nhận báo giá lăn bánh</QuoteButton>
    </section>
  );
}
