import Image from "next/image";
import styles from "./detail.module.css";

export function WildArticle() {
  return <article className={styles.article}>
    <h2>Chi tiết xe bán tải VinFast VF Wild</h2>
    <nav className={styles.contents} aria-label="Mục lục VF Wild">
      <a href="#wild-overview">Tổng quan</a><a href="#wild-design">Thiết kế</a><a href="#wild-specs">Thông số concept</a><a href="#wild-status">Giá và mở bán</a>
    </nav>
    <section id="wild-overview"><h2>Bán tải điện cỡ trung</h2><p>VF Wild ra mắt dưới dạng xe ý tưởng tại CES 2024, ngày 09/01/2024. Đây là mẫu bán tải đầu tiên được VinFast công bố.</p></section>
    <section id="wild-design"><h2>Thiết kế và không gian linh hoạt</h2><p>VinFast hợp tác với Gomotiv (Úc) phát triển thiết kế. Bản concept có cửa sổ trời toàn cảnh, gương chiếu hậu điện tử và khoang chở hàng mở rộng nhờ cơ cấu gập hàng ghế sau.</p>
      <Image src="/images/vf-wild/design.jpg" alt="Thiết kế VinFast VF Wild bản concept tại CES 2024" width={1600} height={900} sizes="(max-width: 899px) 95vw, 70vw" />
    </section>
    <section id="wild-specs"><h2>Thông số bản concept</h2><table className={styles.specTable}><caption>Thông số do VinFast giới thiệu tại CES 2024</caption><tbody>
      <tr><th scope="row">Chiều dài</th><td>5.324 mm</td></tr>
      <tr><th scope="row">Chiều rộng</th><td>1.997 mm</td></tr>
      <tr><th scope="row">Chiều dài khoang chở hàng</th><td>1.524–2.438 mm khi mở rộng</td></tr>
    </tbody></table><p>Thông số trên thuộc xe ý tưởng, không phải cấu hình thương mại được cam kết.</p></section>
    <section id="wild-status"><h2>Giá bán và thời điểm mở bán</h2><p>Cập nhật 14/09/2026: chưa xác minh được công bố chính thức về giá, lịch giao xe, pin, quãng đường hoặc màu sơn thương mại. Website tiếp nhận nhu cầu tìm hiểu, không xác nhận đặt cọc hay lịch lái thử VF Wild.</p></section>
    <p className="fine-print">Nguồn: <a className="text-link" href="https://vinfastauto.com/vn_vi/vinfast-gioi-thieu-mau-xe-y-tuong-dong-ban-tai-dien-vf-wild" target="_blank" rel="noreferrer">Thông cáo giới thiệu VF Wild của VinFast</a>. Ảnh minh họa bản concept.</p>
  </article>;
}
