import { pageMetadata } from "@/lib/seo";
import colorData from "@/lib/data/car-colors.json";
import details from "@/lib/data/details.json";
import { DetailGallery } from "@/components/cars/detail-gallery";
import { DetailSummary } from "@/components/cars/detail-summary";
import { DetailSidebar } from "@/components/cars/detail-sidebar";
import styles from "@/components/cars/detail.module.css";
import { CarDetailSections } from "@/components/cars/car-detail-sections";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/lib/data/cars";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { CarCard } from "@/components/cars/car-card";
export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);
  if (!car) notFound();
  return pageMetadata(car.name, `Tìm hiểu ${car.name}: thiết kế, hình ảnh và thông tin chi tiết. ${car.price === null ? "Mẫu concept, giá bán chưa công bố." : "Tham khảo giá và phương án trả góp."} Tư vấn Huy Hoàng: 0941 610 797.`, `/xe/${slug}`, car.image);
}
export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) notFound();
  const photos = [{ src: car.image, label: "Tổng quan" }, ...details[car.slug].sections.filter(section => !section.image.includes("logo-")).map(section => ({ src: section.image, label: section.title }))];
  return (
    <main id="main" className={`container ${styles.page}`}>
      <nav className={styles.breadcrumb} aria-label="Đường dẫn"><Link href="/">Trang chủ</Link><span>/</span><Link href="/#dong-xe">Dòng xe</Link><span>/</span><span aria-current="page">{car.name}</span></nav>
      <div className={styles.overview}>
        <DetailGallery key={car.slug} name={car.name} images={photos} colors={car.slug in colorData ? colorData[car.slug as keyof typeof colorData].colors : []} />
        <DetailSummary name={car.name} price={car.price} />
      </div>
      <nav className={styles.supportLinks} aria-label="Hỗ trợ mua xe">
        <QuoteButton car={car.name} intent={car.price === null ? "Nhận thông tin" : "Báo giá"}>{car.price === null ? "Nhận thông tin" : "Nhận báo giá"} {car.name}</QuoteButton>
        <Link href="/bang-gia">Bảng giá xe →</Link>
        <Link href="/tra-gop">Tính trả góp →</Link>
      </nav>
      <div className={styles.contentGrid}>
        <CarDetailSections slug={car.slug} name={car.name} />
        <DetailSidebar slug={car.slug} name={car.name} />
      </div>
      <h2 className={styles.relatedTitle}>Khám phá thêm</h2>
      <div className="car-grid">
        {cars.filter(c => c.group === car.group && c.slug !== slug).slice(0, 3).map(c => <CarCard key={c.slug} car={c} />)}
      </div>
    </main>
  );
}
