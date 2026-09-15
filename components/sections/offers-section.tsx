import { OfferMonthTitle } from "./offer-month-title";
import {
  BadgeCheck,
  Zap,
  Banknote,
  Landmark,
  CarFront,
  Gift,
} from "lucide-react";
import { MotionCard } from "@/components/ui/motion-controls";
import { Reveal } from "@/components/ui/reveal";
const offers = [
  [BadgeCheck, "Ưu đãi trước bạ", "Miễn 100% lệ phí trước bạ."],
  [Zap, "An tâm sạc pin", "Sạc pin miễn phí tới năm 2029."],
  [Banknote, "Ưu đãi tiền mặt", "Chính sách riêng theo dòng xe và thời điểm mua."],
  [Landmark, "Tài chính linh hoạt", "Hỗ trợ vay tới 85%, lãi suất thấp."],
  [CarFront, "Sẵn xe và hồ sơ", "Giao ngay."],
  [Gift, "Quà tặng", "Quà tặng phụ kiện ngay khi mua."],
] as const;
export function OffersSection() {
  return (
    <section id="uu-dai" className="section offers-section">
      <div className="container">
        <div className="offers-featured">
          <span className="offers-hot" aria-label="Ưu đãi HOT">HOT!</span>
        <Reveal>
          <div className="section-heading centered">
            <OfferMonthTitle initialMonth={new Intl.DateTimeFormat("en-US", { month: "numeric", timeZone: "Asia/Ho_Chi_Minh" }).format(new Date())} />
          </div>
        </Reveal>
        <div className="offers-grid">
          {offers.map(([Icon, title, desc]) => (
            <Reveal key={title}>
              <MotionCard className="offer">
                <span className="offer-icon">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div className="offer-copy">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </MotionCard>
            </Reveal>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
