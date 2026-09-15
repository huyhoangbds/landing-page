import Image from "next/image";
import Link from "next/link";
import { policies } from "@/lib/data/policies";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data/site";

export function SiteFooter() {
  return (
    <footer id="lien-he" className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">HẸN GẶP BẠN TẠI SHOWROOM</span>
            <h2>Huy Hoàng Ôtô VinFast</h2>
            <p>Luôn giữ vững những cam kết với khách hàng.</p>
          </div>
          <a className="button" href={`tel:${site.tel}`}>
            Kết nối với chúng tôi <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Thông tin liên hệ</h3>
            <a href={site.maps} target="_blank" rel="noreferrer">
              <MapPin size={18} />
              {site.address}
            </a>
            <a href={`tel:${site.tel}`}>
              <Phone size={18} />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={18} />
              {site.email}
            </a>
            <a
              href={site.maps}
              target="_blank"
              rel="noreferrer"
            >
              Chỉ đường đến showroom ↗
            </a>
          </div>
          <div>
            <h3>Thông tin đại lý tham khảo</h3>
            <p>VINFAST VG SƠN ĐỒNG</p>
            <p>Công ty TNHH Tân Phong - Lại Yên</p>
            <p>MST: 0104571417</p>
            <p>
              Địa chỉ: Lô 18, Cụm Công nghiệp Lại Yên, Xã Sơn Đồng (hoặc Huyện
              Hoài Đức), Thành phố Hà Nội.
            </p>
            <p>
              Đơn vị phân phối: Công ty TNHH Kinh doanh Thương mại và Dịch vụ
              VinFast · MST 0108926276.
            </p>
          </div>
          <div>
            <h3>Chính sách & quy định</h3>
            {Object.entries(policies).map(([slug, policy]) => (
              <Link key={slug} href={`/chinh-sach/${slug}`}>
                {policy.title}
              </Link>
            ))}
            <p className="fine-print">
              Chính sách áp dụng cho website cá nhân Huy Hoàng.
            </p>
          </div>
          <div>
            <h3>Chứng nhận của đại lý</h3>
            <a
              href="/images/chung-nhan-vinfast-vg-son-dong.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/chung-nhan-vinfast-vg-son-dong.jpg"
                alt="Giấy chứng nhận đại lý VinFast VG Sơn Đồng – Công ty TNHH Tân Phong – Lại Yên"
                width={1587}
                height={2400}
                sizes="120px"
                className="certificate"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
