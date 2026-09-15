import { Phone, ArrowUp, MessageCircle } from "lucide-react";
import { QuoteButton } from "@/components/forms/consultation-dialog";
import { site } from "@/lib/data/site";
export function ContactBar() {
  return (
    <aside className="contact-bar" aria-label="Liên hệ nhanh">
      <a href={`tel:${site.tel}`}>
        <Phone size={20} />
        <span>Gọi tư vấn</span>
      </a>
      <QuoteButton>
        <MessageCircle size={20} />
        <span>Nhận báo giá</span>
      </QuoteButton>
      <a href="#top" aria-label="Về đầu trang">
        <ArrowUp size={20} />
      </a>
    </aside>
  );
}
