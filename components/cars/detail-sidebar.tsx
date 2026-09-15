import Image from "next/image";
import Link from "next/link";
import { cars, formatPrice } from "@/lib/data/cars";
import { site } from "@/lib/data/site";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import styles from "./detail.module.css";
export function DetailSidebar({ slug, name }: { slug: string; name: string }) {
  return <aside className={styles.sidebar}>
    <div className={styles.adviser}><h2>Tư vấn {name}</h2><p>{slug === "vf-wild" ? "Tìm hiểu mẫu bán tải concept VF Wild." : "Nhận thông tin phiên bản, giá xe và ưu đãi phù hợp."}</p><a href={`tel:${site.tel}`}>{site.phone}</a><QuoteButton car={name} intent={slug === "vf-wild" ? "Nhận thông tin" : "Báo giá"}>{slug === "vf-wild" ? "Nhận thông tin" : "Nhận báo giá xe"}</QuoteButton><Link href="/tra-gop">Tính khoản vay trả góp →</Link></div>
    <div className={styles.otherCars}><h2>Các dòng xe khác</h2>{cars.filter(car => car.slug !== slug).map(car => <Link href={`/xe/${car.slug}`} key={car.slug}>
      <Image src={car.image} alt="" width={120} height={80} sizes="100px" /><span>{car.name}<strong>{formatPrice(car.price)}</strong></span>
    </Link>)}</div>
  </aside>;
}
