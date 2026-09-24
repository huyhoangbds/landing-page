import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero hero-banner" aria-label="Chương trình xe VinFast tháng 9">
      <div className="banner-wrap">
        <Image className="homepage-banner" src="/images/banner-september-2026-v2.webp"
          alt="Xe Ôtô VinFast tháng 9 — chọn xe phù hợp, bắt đầu hành trình mới"
          width={1672} height={941} sizes="100vw" priority />
      </div>
    </section>
  );
}
