import { pageMetadata } from "@/lib/seo";
import { PriceIntro } from "@/components/pricing/price-intro";
import { ModelPriceSection } from "@/components/pricing/model-price-section";
import { PriceContact } from "@/components/pricing/price-contact";
import { PurchaseSupportSection } from "@/components/sections/purchase-support-section";
import { site, priceNote } from "@/lib/data/site";
import prices from "@/lib/data/prices";
import styles from "@/components/pricing/pricing.module.css";

export const metadata = pageMetadata("Bảng giá xe VinFast", "Bảng giá các phiên bản xe VinFast. Liên hệ Huy Hoàng 0941 610 797 để nhận tư vấn giá và ưu đãi.", "/bang-gia");
export default function Prices() {
  return (
    <main id="main">
      <article className={`container ${styles.page}`}>
        <h1 className={styles.title}>Bảng giá xe VinFast tại {site.name}</h1>
        <PriceIntro />
        <p className={styles.priceNote}>{priceNote} Đơn vị: VNĐ.</p>
        {prices.map((car) => (
          <ModelPriceSection key={car.id} car={car} />
        ))}
        <PriceContact />
      </article>
      <PurchaseSupportSection />
    </main>
  );
}
