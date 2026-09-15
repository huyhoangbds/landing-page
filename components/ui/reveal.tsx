"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  // SSR content stays visible; only the first viewport entry gets a short reveal.
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduced ? { opacity: 1, y: 0 } : { y: [18, 0], opacity: [0.65, 1] }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.48,
        delay: reduced ? 0 : Math.min(delay, 0.15),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
