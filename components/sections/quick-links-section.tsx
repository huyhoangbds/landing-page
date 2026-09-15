import Link from "next/link";
import { FileText, Calculator, CarFront, ArrowUpRight } from "lucide-react";
import { QuoteButton } from "@/components/forms/consultation-dialog";
export function QuickLinksSection() {
  return (
    <section className="container quick-links quick-links-featured" aria-label="Hỗ trợ nhanh">
      <QuoteButton className="quick-link">
        <FileText />
        <span>
          <small>TƯ VẤN RIÊNG CHO BẠN</small>Yêu cầu báo giá
        </span>
        <ArrowUpRight />
      </QuoteButton>
      <Link className="quick-link" href="/bang-gia">
        <CarFront />
        <span>
          <small>KHÁM PHÁ CÁC DÒNG XE</small>Bảng giá VinFast
        </span>
        <ArrowUpRight />
      </Link>
      <Link className="quick-link" href="/tra-gop">
        <Calculator />
        <span>
          <small>SỞ HỮU XE DỄ DÀNG</small>Giải pháp trả góp
        </span>
        <ArrowUpRight />
      </Link>
    </section>
  );
}
