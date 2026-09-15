import Link from "next/link";
import { ArrowUpRight, Gauge, FileText, Calculator } from "lucide-react";
import { QuoteButton } from "@/components/forms/consultation-dialog";
export function PurchaseSupportSection() {
  return (
    <section className="section container">
      <div className="section-heading centered">
        <span className="eyebrow">LUÔN SẴN SÀNG ĐỒNG HÀNH</span>
        <h2>Bước tiếp theo, để chúng tôi giúp bạn.</h2>
      </div>
      <div className="support-grid">
        <QuoteButton intent="Lái thử" className="support-card">
          <Gauge />
          <h3>Đăng ký lái thử</h3>
          <p>Trải nghiệm thực tế trước khi chọn chiếc xe của bạn.</p>
          <span>
            Đặt lịch ngay <ArrowUpRight size={18} />
          </span>
        </QuoteButton>
        <Link href="/bang-gia" className="support-card">
          <FileText />
          <h3>Bảng giá VinFast</h3>
          <p>Tham khảo giá các dòng xe trong một bảng tổng hợp.</p>
          <span>
            Xem bảng giá <ArrowUpRight size={18} />
          </span>
        </Link>
        <Link href="/tra-gop" className="support-card">
          <Calculator />
          <h3>Mua xe trả góp</h3>
          <p>Chủ động kế hoạch tài chính cho hành trình mới.</p>
          <span>
            Tìm hiểu thêm <ArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
}
