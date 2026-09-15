import { pageMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/hero-section";
import { QuickLinksSection } from "@/components/sections/quick-links-section";
import { OffersSection } from "@/components/sections/offers-section";
import { PassengerCarsSection } from "@/components/sections/passenger-cars-section";
import { CommercialCarsSection } from "@/components/sections/commercial-cars-section";
import { PurchaseSupportSection } from "@/components/sections/purchase-support-section";


export const metadata = pageMetadata("Huy Hoàng Ôtô VinFast | Tư vấn xe và bảng giá", "Khám phá các dòng xe VinFast, giá tham khảo, màu ngoại thất và tính trả góp. Liên hệ Huy Hoàng: 0941 610 797.", "/");

export default function Home() {
  return (
    <main id="main">
      <h1 className="sr-only">Huy Hoàng Ôtô VinFast — Tư vấn xe, bảng giá và trả góp</h1>
      <HeroSection />
      <OffersSection />
      <QuickLinksSection />
      <PassengerCarsSection />
      <CommercialCarsSection />
      <PurchaseSupportSection />
    </main>
  );
}
