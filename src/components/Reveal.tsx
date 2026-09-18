"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/** Fades an element in once it scrolls into view. */
export function Reveal({
  children,
  className = "",
  y = 0,
  delay = 0,
  amount = 0.4,
}: {
  children?: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: [0.44, 0, 0.56, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const color = useTransform(progress, [start, end], ["rgb(128, 128, 128)", "rgb(255, 255, 255)"]);
  return (
    <>
      <motion.span style={{ color }}>{word}</motion.span>{" "}
    </>
  );
}

/** Words brighten from grey to white as the paragraph scrolls through the viewport. */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
