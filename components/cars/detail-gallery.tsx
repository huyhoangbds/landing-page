"use client";
import { LoadingState } from "@/components/ui/loading-state";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "./detail.module.css";

export type ExteriorColor = { code: string; name: string; image: string; swatch: string };
export function DetailGallery({ name, images, colors = [] }: {
  name: string;
  images: { src: string; label: string }[];
  colors?: ExteriorColor[];
}) {
  const [selected, setSelected] = useState(0);
  const [loaded, setLoaded] = useState<string | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const color = colors[selected];
  const src = color?.image ?? images[0].src;
  const change = (index: number) => {
    setSelected((index + colors.length) % colors.length);
    setFailed(null);
  };
  return <div className={styles.gallery}>
    <div className={styles.exteriorViewer}>
      <span className={styles.exteriorLabel}>NGOẠI THẤT {name.toUpperCase()}</span>
      <div className={styles.exteriorImage} aria-busy={loaded !== src && failed !== src}>
        <Image key={src} src={src} alt={`${name} — ${color?.name ?? "Ngoại thất"}`} width={1300} height={750} sizes="(max-width: 899px) 95vw, 50vw" priority={selected === 0}
          onLoad={() => setLoaded(src)} onError={() => setFailed(src)} />
        {loaded !== src && failed !== src && <div className="image-loading-overlay"><LoadingState compact label="Đang tải ảnh xe…" /></div>}
        {failed === src && <span className={styles.imageStatus} role="status">Không tải được ảnh. Vui lòng chọn lại màu khác.</span>}
      </div>
      {colors.length > 0 && <>
        <p className={styles.colorName} aria-live="polite">{color.name}</p>
        <div className={styles.colorControls}>
          <button className={styles.colorArrow} type="button" aria-label="Màu trước" onClick={() => change(selected - 1)}><ChevronLeft size={20} /></button>
          <div className={styles.swatches} role="group" aria-label={`Chọn màu ngoại thất ${name}`}>
            {colors.map((item, i) => <button key={item.code} type="button" tabIndex={selected === i ? 0 : -1}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                const next = event.key === "Home" ? 0 : event.key === "End" ? colors.length - 1 : (i + (event.key === "ArrowRight" ? 1 : -1) + colors.length) % colors.length;
                change(next);
                event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
              }} aria-label={item.name} title={item.name} aria-pressed={selected === i} onClick={() => change(i)}>
              <Image src={item.swatch} alt="" width={36} height={36} sizes="36px" />
            </button>)}
          </div>
          <button className={styles.colorArrow} type="button" aria-label="Màu tiếp theo" onClick={() => change(selected + 1)}><ChevronRight size={20} /></button>
        </div>
      </>}
    </div>
    <p className={styles.colorNote}>{name === "VinFast VF Wild" ? "Ảnh bản concept; màu sơn và trang bị thương mại chưa được xác nhận." : colors.length ? "Màu sắc và trang bị có thể khác theo phiên bản, ánh sáng và màn hình. Liên hệ để xác nhận màu xe sẵn có." : "Liên hệ tư vấn để xem bảng màu ngoại thất và xác nhận màu xe sẵn có."}</p>
  </div>;
}
