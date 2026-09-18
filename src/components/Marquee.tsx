"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";

type Props = {
  children: ReactNode;
  /** pixels per second */
  speed?: number;
  gap?: number;
  className?: string;
  trackClassName?: string;
  direction?: "left" | "right";
};

/**
 * Seamless horizontal ticker. Renders the item enough times to cover the
 * viewport twice, then loops the track by exactly one item width + gap.
 */
export default function Marquee({
  children,
  speed = 60,
  gap = 0,
  className = "",
  trackClassName = "",
  direction = "left",
}: Props) {
  const itemRef = useRef<HTMLLIElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [copies, setCopies] = useState(3);
  const x = useMotionValue(0);

  useLayoutEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setItemWidth(w);
      if (w > 0) setCopies(Math.max(2, Math.ceil((window.innerWidth * 2) / (w + gap)) + 1));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [gap]);

  useAnimationFrame((_, delta) => {
    const loop = itemWidth + gap;
    if (!loop) return;
    const step = (speed * delta) / 1000;
    let next = x.get() + (direction === "left" ? -step : step);
    if (next <= -loop) next += loop;
    if (next > 0) next -= loop;
    x.set(next);
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.ul
        className={`flex w-max items-center ${trackClassName}`}
        style={{ x, gap }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <li key={i} ref={i === 0 ? itemRef : undefined} aria-hidden={i > 0} className="shrink-0">
            {children}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
