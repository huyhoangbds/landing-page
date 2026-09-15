"use client";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
export function MotionButton(props: HTMLMotionProps<"button">) {
  const reduced = useReducedMotion();
  return (
    <motion.button
      type="button"
      whileHover={reduced ? undefined : { y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 440, damping: 30 }}
      {...props}
    />
  );
}
export function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      className={className}
      whileHover={reduced ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      {children}
    </motion.article>
  );
}
