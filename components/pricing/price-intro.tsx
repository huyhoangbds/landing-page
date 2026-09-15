import Image from "next/image";
import { Flame, Phone, ArrowUpRight } from "lucide-react";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { site } from "@/lib/data/site";
import prices from "@/lib/data/prices.json";
import styles from "./pricing.module.css";

export function PriceIntro() {
  return (
    <>
      <a className={styles.hotline} href={`tel:${site.tel}`}>
        <Flame aria-hidden="true" />
        Liên hệ {site.phone} để nhận báo giá tốt!
        <Flame aria-hidden="true" />
      </a>
      <section className={styles.intro} aria-labelledby="price-offers-title">
        <h2 id="price-offers-title">
          Ưu đãi mua xe VinFast <span>— Quà tặng hấp dẫn</span>
        </h2>
        <p className={styles.introNote}>
          Gọi {site.phone} để được tư vấn phiên bản và chương trình phù hợp.
        </p>
        <div className={styles.introGrid}>
          <nav aria-label="Mục lục bảng giá xe">
            <ol>
              {prices.map((car) => (
                <li key={car.id}>
                  <a href={`#${car.id}`}>
                    Giá xe {car.title.replace(/^VINFAST /, "VinFast ")}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className={styles.introCar}>
            <Image
              src="/images/vinfast-vf8-98yirhq.png"
              alt="VinFast VF8"
              width={600}
              height={400}
              sizes="(max-width: 767px) 90vw, 520px"
              priority
            />
            <div className={styles.actions}>
              <a className="button" href={`tel:${site.tel}`}>
                <Phone size={17} /> {site.phone}
              </a>
              <QuoteButton className="button outline">
                Đặt xe ngay <ArrowUpRight size={17} />
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
