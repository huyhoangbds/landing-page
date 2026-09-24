import { formatNumber } from "@/lib/format";
import Image from "next/image";
import { site } from "@/lib/data/site";
import styles from "./pricing.module.css";

type PriceModel = {
  id: string;
  title: string;
  image: string;
  variants: { name: string; price: number | null }[];
};

export function ModelPriceSection({ car }: { car: PriceModel }) {
  const model = car.title.replace(/^VINFAST\s+/, "").replace(/\s+/g, "");
  return (
    <section
      id={car.id}
      className={styles.model}
      aria-labelledby={`${car.id}-title`}
    >
      <div className={styles.modelGrid}>
        <div className={styles.modelImage}>
          <h2 id={`${car.id}-title`}>{car.title}</h2>
          <div className={styles.modelVisual}>
            <span
              aria-hidden="true"
              className={styles.modelBackdrop}
              style={{ fontSize: `${Math.min(40, 150 / model.length)}cqw` }}
            >
              {model}
            </span>
            <Image
              src={car.image}
              alt={car.title}
              width={600}
              height={400}
              sizes="(max-width: 767px) 90vw, 360px"
            />
          </div>
        </div>
        <div className={styles.tableWrap}>
          {car.id === "gia_xe_vf_wild" && <p><strong>VF Wild chỉ từ 799 triệu đồng</strong> — đã bao gồm ưu đãi đặt cọc tiên phong giảm 61 triệu đồng.</p>}
          <table className={styles.table}>
            <caption className="sr-only">
              Giá từng phiên bản {car.title}, đơn vị VNĐ
            </caption>
            <thead>
              <tr>
                <th scope="col">MẪU XE</th>
                <th scope="col">
                  GIÁ TỪ <small>(VNĐ)</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {car.variants.map((variant) => (
                <tr key={variant.name}>
                  <th scope="row">{variant.name}</th>
                  <td>{variant.price === null ? "Chưa công bố" : formatNumber(variant.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <blockquote className={styles.modelNote}>
        {car.variants.every(v => v.price === null) ? "Mẫu concept, chưa có giá chính thức được xác minh. Để tìm hiểu " : "Giá trên là giá tham khảo từ của từng dòng xe. Giá cụ thể phụ thuộc phiên bản và ưu đãi áp dụng. Để nhận báo giá cho "}
        <strong>{car.title}</strong>, liên hệ tư vấn:{" "}
        <a href={`tel:${site.tel}`}>{site.phone}</a>.
      </blockquote>
    </section>
  );
}
