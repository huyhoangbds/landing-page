import { WildArticle } from "./wild-article";
import articles from "@/lib/data/car-articles.json";
import { CarArticle } from "./car-article";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import details from "@/lib/data/details.json";
import styles from "./detail.module.css";
export function CarDetailSections({ slug, name }: { slug: keyof typeof details; name: string }) {
  if (slug === "vf-wild") return <WildArticle />;
  if (slug in articles) return <CarArticle slug={slug} name={name} />;
  const detail = details[slug];
  const sections = detail.sections.filter(section => !section.image.includes("logo-"));
  return <article className={styles.article}>
    <h2>Chi tiết {name}</h2>
    <nav className={styles.contents} aria-label="Mục lục thông tin xe">
      {sections.map((section, i) => <a href={`#detail-${i}`} key={section.title}>{section.title}</a>)}
    </nav>
    {sections.map((section, i) => <section id={`detail-${i}`} key={section.title}>
      <Reveal><h2>{section.title} {name}</h2>
        <Image src={section.image} alt={`${section.title} ${name}`} width={1200} height={800} sizes="(max-width: 767px) 95vw, 70vw" />
      </Reveal>
    </section>)}
    <p className="fine-print">Hình ảnh và thông số tham khảo từ <a href={detail.source} target="_blank" rel="noreferrer" className="text-link">trang giới thiệu {name}</a>. Trang bị thay đổi theo phiên bản; quãng đường và tốc độ sạc phụ thuộc điều kiện sử dụng. Liên hệ tư vấn để xác nhận cấu hình trước khi mua.</p>
  </article>;
}
