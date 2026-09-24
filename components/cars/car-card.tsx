import { MotionCard } from "@/components/ui/motion-controls";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { type Car, formatPrice } from "@/lib/data/cars";
import { site } from "@/lib/data/site";
import { QuoteButton } from "@/components/forms/consultation-dialog";
const homeImages: Record<string, { src: string; color: string }> = {
  "vf-6": { src: "/images/colors/vf-6/CE18.webp", color: "trắng" },
  "vf-7": { src: "/images/colors/vf-7/CE2Q.webp", color: "đỏ" },
  "limo-green": { src: "/images/colors/limo-green/CE18.webp", color: "trắng" },
  "vf-9": { src: "/images/colors/vf-9/CE11.webp", color: "đen" },
};

export function CarCard({ car, showcase = false }: { car: Car; showcase?: boolean }) {
  const homeImage = showcase ? homeImages[car.slug] : undefined;
  const model = car.slug === "vf-8-all-new" ? "VF8" : car.name.replace(/^VinFast\s+/, "").replace(/\s+/g, "");
  return (
    <MotionCard className={showcase ? "car-card car-card-showcase" : "car-card"}>
      <Link
        href={`/xe/${car.slug}`}
        className={`car-image${showcase && car.slug === "vf-wild" ? " car-image-wild" : ""}`}
        aria-label={`Khám phá ${car.name}`}
      >
        {showcase && <span aria-hidden="true" className={`car-model-backdrop${model.length > 5 ? " car-model-long" : model.length > 3 ? " car-model-wide" : ""}`}>{model}</span>}
        <Image
          src={homeImage?.src ?? car.image}
          alt={homeImage ? `${car.name} màu ${homeImage.color}` : car.name}
          width={700}
          height={420}
          sizes="(max-width: 639px) 95vw, (max-width: 1023px) 48vw, 31vw"
        />
        {showcase && ["vf-wild", "vf-8-all-new"].includes(car.slug) ? <span className="car-new-badge">New</span> : <span className="car-arrow">
          <ArrowUpRight size={20} />
        </span>}
      </Link>
      <div className="car-info">
        <span className="car-category">
          {car.price === null ? "BÁN TẢI ĐIỆN · CONCEPT" : car.group === "passenger" ? "XE ĐIỆN CÁ NHÂN" : "XE ĐIỆN KINH DOANH"}
        </span>
        <h3>
          <Link href={`/xe/${car.slug}`}>{car.name}</Link>
        </h3>
        <div className="price-row">
          <span>{car.slug === "vf-wild" ? "Chỉ từ" : car.price === null ? "Giá bán" : "Giá tham khảo từ"}</span>
          <strong>{formatPrice(car.price)}</strong>
        </div>
        <div className="car-actions">
          <QuoteButton car={car.name} intent={car.price === null ? "Nhận thông tin" : "Báo giá"} className="button">
            {car.price === null ? "Nhận thông tin" : "Nhận ưu đãi"} <ArrowUpRight size={16} />
          </QuoteButton>
          <a
            href={`tel:${site.tel}`}
            className="icon-button"
            aria-label={`Gọi tư vấn ${car.name}`}
          >
            <Phone size={19} />
          </a>
        </div>
      </div>
    </MotionCard>
  );
}
