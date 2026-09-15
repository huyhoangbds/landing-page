import { siteUrl, indexable } from "@/lib/seo";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ZaloButton } from "@/components/layout/zalo-button";
import { ContactBar } from "@/components/layout/contact-bar";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteUrl,
  robots: { index: indexable, follow: indexable },
  icons: { icon: "/images/favicon-2792145j26027.png" },
  title: {
    default: "Huy Hoàng Ôtô VinFast | Khởi đầu hành trình xanh",
    template: "%s | Huy Hoàng Ôtô VinFast",
  },
  description:
    "Khám phá các dòng xe VinFast, tham khảo bảng giá và đặt lịch lái thử tại Huy Hoàng Ôtô VinFast.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body id="top">
        <Providers>
          <a href="#main" className="skip-link">
            Đến nội dung chính
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ContactBar />
          <ZaloButton />
        </Providers>
      </body>
    </html>
  );
}
