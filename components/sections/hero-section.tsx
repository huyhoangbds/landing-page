"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-controls";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { banners } from "@/lib/data/banners";
const descriptions = [
  "Ưu đãi xe máy điện VinFast",
  "Vận hành thoải mái, an tâm hành trình",
  "VinFast MPV 7 – trải nghiệm gia đình",
  "Giải pháp xe điện kinh doanh",
  "Lên đời xe điện VinFast",
];
export function HeroSection() {
  const [slide, setSlide] = useState(1);
  const [requested, setRequested] = useState(1);
  const requestRef = useRef(1);
  const [mountedSlides, setMountedSlides] = useState(() => new Set([1]));
  const loaded = useRef(new Set<number>());
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const interacting = hovered || focused;
  useEffect(() => {
    if (paused || interacting || reduced) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      const next = (requestRef.current + 1) % banners.length;
      requestRef.current = next;
      setRequested(next);
      setMountedSlides(previous => new Set([...previous, next]));
      if (loaded.current.has(next)) setSlide(next);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reduced]);

  function select(index: number) {
    requestRef.current = index;
    setRequested(index);
    setMountedSlides(previous => new Set([...previous, index]));
    if (loaded.current.has(index)) setSlide(index);
  }

  return (
    <section className="hero hero-banner" aria-label="Chương trình nổi bật"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="banner-wrap">
        <div className="banner-image">
          {banners.map((banner, index) => mountedSlides.has(index) ? (
            <motion.div
              key={banner}
              className="banner-slide"
              initial={false}
              animate={{ opacity: slide === index ? 1 : 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: "easeInOut" }}
              aria-hidden={slide !== index}
              style={{ pointerEvents: slide === index ? "auto" : "none" }}
            >
              <Image
                src={banner}
                alt={descriptions[index]}
                width={1920}
                height={1080}
                priority={index === 1}
                loading={
                  index === 1
                    ? undefined
                    : requested === index
                      ? "eager"
                      : "lazy"
                }
                sizes="100vw"
                quality={90}
                onLoad={() => {
                  loaded.current.add(index);
                  if (requestRef.current === index) setSlide(index);
                }}
                onError={() => {
                  if (requestRef.current === index) {
                    requestRef.current = slide;
                    setRequested(slide);
                  }
                }}
              />
            </motion.div>
          ) : null)}
          <div className="banner-controls">
            {!reduced && <MotionButton
              aria-label={paused ? "Tự động chuyển banner" : "Tạm dừng banner"}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </MotionButton>}
            <MotionButton
              aria-label="Banner trước"
              onClick={() =>
                select(
                  (requestRef.current + banners.length - 1) % banners.length,
                )
              }
            >
              <ChevronLeft size={19} />
            </MotionButton>
            <span aria-live={paused || interacting || reduced ? "polite" : "off"}>
              0{slide + 1} / 0{banners.length}
            </span>
            <MotionButton
              aria-label="Banner tiếp theo"
              onClick={() => select((requestRef.current + 1) % banners.length)}
            >
              <ChevronRight size={19} />
            </MotionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
