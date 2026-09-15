"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { cars } from "@/lib/data/cars";
import styles from "./car-menu.module.css";

export function CarMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = mobile ? "mobile-car-list" : "desktop-car-list";
  return <div className={mobile ? styles.mobile : styles.root}
    onMouseEnter={() => { if (!mobile && window.matchMedia("(hover: hover)").matches) setOpen(true); }}
    onMouseLeave={(event) => {
      if (!mobile && !event.currentTarget.contains(document.activeElement)) setOpen(false);
    }}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    onKeyDown={(event) => { if (event.key === "Escape") { event.stopPropagation(); setOpen(false); trigger.current?.focus(); } }}>
    <button ref={trigger} type="button" className={styles.trigger} aria-expanded={open} aria-controls={id} onKeyDown={(event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setOpen(true);
        requestAnimationFrame(() => document.getElementById(id)?.querySelector<HTMLAnchorElement>("a")?.focus());
      }
    }} onClick={() => setOpen(!open)}>
      DÒNG XE <ChevronDown size={15} style={{ transform: open ? "rotate(180deg)" : undefined }} />
    </button>
    <div id={id} className={styles.panel} hidden={!open}>
      <div className={styles.grid}>
        {cars.map(car => <Link prefetch={false} key={car.slug} href={`/xe/${car.slug}`} onClick={() => { setOpen(false); onNavigate?.(); }} className={styles.car}>
          <Image src={car.image} alt="" width={240} height={150} sizes={mobile ? "40vw" : "(max-width: 1100px) 20vw, 180px"} />
          <span>{car.name}</span>
        </Link>)}
      </div>
    </div>
  </div>;
}
