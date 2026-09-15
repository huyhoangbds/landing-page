export const dynamicParams = false;
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { policies, policyUpdated } from "@/lib/data/policies";
import { site } from "@/lib/data/site";
import styles from "./policy.module.css";
export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!Object.prototype.hasOwnProperty.call(policies, slug)) notFound();
  return pageMetadata(policies[slug].title, policies[slug].description, `/chinh-sach/${slug}`);
}
export default async function Policy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!Object.prototype.hasOwnProperty.call(policies, slug)) notFound();
  const policy = policies[slug];
  return <main id="main" className={`container ${styles.page}`}>
    <Link className="text-link" href="/">← Trang chủ</Link>
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2>Chính sách website</h2>
        <nav aria-label="Các trang chính sách">{Object.entries(policies).map(([key, item]) => <Link href={`/chinh-sach/${key}`} key={key} aria-current={key === slug ? "page" : undefined}>{item.title}</Link>)}</nav>
        <p>Người phụ trách: Huy Hoàng</p>
        <a href={`tel:${site.tel}`}>{site.phone}</a>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </aside>
      <article className={styles.article}>
        <span className="eyebrow">WEBSITE CÁ NHÂN · TƯ VẤN XE VINFAST</span>
        <h1>{policy.title}</h1>
        <p className={styles.updated}>Cập nhật: {policyUpdated}</p>
        <p className={styles.intro}>{policy.description}</p>
        <nav className={styles.contents} aria-label="Mục lục chính sách">{policy.sections.map((section, index) => <a href={`#muc-${index + 1}`} key={section.heading}>{index + 1}. {section.heading}</a>)}</nav>
        {policy.sections.map((section, index) => <section id={`muc-${index + 1}`} key={section.heading}>
          <h2>{index + 1}. {section.heading}</h2>
          {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </section>)}
        <div className={styles.contact}><strong>Cần trao đổi về chính sách hoặc thông tin của bạn?</strong><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.tel}`}>{site.phone}</a></div>
      </article>
    </div>
  </main>;
}
