"use client";
import { CarMenu } from "./car-menu";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, ArrowUpRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { MobileMenu } from "./mobile-menu";
import { MotionButton } from "@/components/ui/motion-controls";
import { useRef, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { site } from "@/lib/data/site";
const links = [
  ["/#dong-xe", "DÒNG XE"],
  ["/#uu-dai", "ƯU ĐÃI"],
  ["/bang-gia", "BẢNG GIÁ"],
  ["/tra-gop", "TRẢ GÓP"],
  ["/#lien-he", "LIÊN HỆ"],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  function closeMenu() {
    setOpen(false);
    menuButton.current?.focus();
  }
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <MapPin size={13} /> Huy Hoàng Ôtô VinFast, Hà Nội
          </span>
          <a href={`tel:${site.tel}`}>
            Tư vấn & lái thử: {site.phone} <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Huy Hoàng Ôtô VinFast - Trang chủ"
          >
            <Image
              src="/images/favicon-2792145j26027.png"
              alt=""
              width={44}
              height={44}
            />
            <span>
              Huy Hoàng<small>Ôtô VinFast</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            <Link href="/">TRANG CHỦ</Link>
            <CarMenu />
            {links.slice(1).map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a className="button small header-hotline" href={`tel:${site.tel}`}>
              Hotline: {site.phone}
            </a>
            <MotionButton
              ref={menuButton}
              className="icon-button mobile-menu-button"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </MotionButton>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && <MobileMenu links={links} onClose={closeMenu} />}
        </AnimatePresence>
      </header>
    </>
  );
}
