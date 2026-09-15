"use client";
import { CarMenu } from "./car-menu";
import Link from "next/link";
import { motion, useIsPresent, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/data/site";
export function MobileMenu({
  links,
  onClose,
}: {
  links: string[][];
  onClose: () => void;
}) {
  const reduced = useReducedMotion();
  const present = useIsPresent();
  return (
    <motion.nav
      id="mobile-nav"
      className="mobile-nav"
      aria-label="Điều hướng điện thoại"
      inert={!present}
      initial={{ opacity: 0, y: reduced ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduced ? 0 : -6 }}
      transition={{ duration: reduced ? 0 : 0.2 }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }
      }}
    >
      <Link href="/" onClick={onClose}>TRANG CHỦ</Link>
      <CarMenu mobile onNavigate={onClose} />
      {links.slice(1).map(([href, label], i) => (
        <motion.div
          key={href}
          initial={{ opacity: 0, x: reduced ? 0 : -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduced ? 0 : 0.18,
            delay: reduced ? 0 : i * 0.025,
          }}
        >
          <Link onClick={onClose} href={href}>
            {label}
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      ))}
      <a href={`tel:${site.tel}`} onClick={onClose}>
        <Phone size={17} />
        Hotline: {site.phone}
      </a>
    </motion.nav>
  );
}
