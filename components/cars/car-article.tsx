import Image from "next/image";
import articles from "@/lib/data/car-articles.json";
import styles from "./detail.module.css";

type Article = {
  name: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    table: { headers: string[]; rows: string[][] } | null;
    image: string | null;
    caption: string | null;
  }[];
};
const data: Record<string, Article> = articles;

function ArticleBody({ article, prefix, showName }: { article: Article; prefix: string; showName: boolean }) {
  return <div className={styles.articleEdition} id={prefix}>
    {showName && <h2 className={styles.editionHeading}>{article.name}</h2>}
    <nav className={styles.contents} aria-label={`Mục lục ${article.name}`}>
      {article.sections.map((section, index) => <a key={section.id} href={`#${prefix}-${section.id}`}><span>{index + 1}.</span> {section.title}</a>)}
    </nav>
    {article.sections.map(section => <section className={styles.articleSection} id={`${prefix}-${section.id}`} key={section.id}>
      <h3>{section.title} {article.name}</h3>
      {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {section.table && <>
        {section.table.headers.length > 2 && <p className={styles.tableHint}>Đối chiếu trang bị theo từng phiên bản. Trên điện thoại, vuốt ngang để xem đầy đủ bảng.</p>}
        <div className={styles.articleTableScroll} role="region" aria-label={`Bảng thông số ${article.name}`} tabIndex={0}>
          <table className={`${styles.specTable} ${section.table.headers.length > 2 ? styles.comparisonTable : ''}`}>
            <caption>Thông số kỹ thuật {article.name}</caption>
            <thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead>
            <tbody>{section.table.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, i) => <td key={i}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </>}
      {section.image && <figure className={styles.articleFigure}>
        <Image src={section.image} alt={`${section.title} ${article.name}`} width={1200} height={800} sizes="(max-width: 767px) 95vw, 70vw" />
        <figcaption>{section.caption}</figcaption>
      </figure>}
    </section>)}
  </div>;
}

export function CarArticle({ slug, name }: { slug: string; name: string }) {
  const article = data[slug];
  if (!article) return null;
  const editions = slug === "vf-8" ? [article, data["vf-8-new"]] : [article];
  return <article className={styles.article}>
    <h2>Chi tiết {name}</h2>
    {editions.length > 1 && <div className={styles.editionPicker}>
      <p>Chọn thế hệ xe để xem thông tin và trang bị tương ứng:</p>
      <a href="#bai-vf-8">VF 8 Eco / Plus</a>
      <a href="#bai-vf-8-new">VF 8 Thế hệ mới</a>
    </div>}
    {editions.map((edition, i) => <ArticleBody key={edition.name} article={edition} prefix={`bai-${i === 1 ? 'vf-8-new' : slug}`} showName={editions.length > 1} />)}
    <p className={styles.articleDisclaimer}>Thông số và trang bị áp dụng theo từng phiên bản. Quãng đường theo NEDC/WLTP và thời gian sạc phụ thuộc điều kiện thử nghiệm, trạm sạc và cách sử dụng thực tế. Vui lòng liên hệ tư vấn để xác nhận cấu hình xe trước khi mua.</p>
  </article>;
}
