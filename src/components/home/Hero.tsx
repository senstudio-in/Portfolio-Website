"use client";

import { useRef, useState } from "react";
import PillButton from "../PillButton";

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  function moveCursor(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;

    const target = event.target as HTMLElement;
    if (target.closest("a, button")) {
      setCursorVisible(false);
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    cursorRef.current?.style.setProperty(
      "transform",
      `translate3d(${event.clientX - bounds.left}px, ${event.clientY - bounds.top}px, 0) translate(-50%, -50%)`,
    );
    setCursorVisible(true);
  }

  return (
    <section
      className="relative flex h-[clamp(520px,53vw,max(764px,85vh))] w-full cursor-none flex-col items-center justify-center overflow-clip"
      onPointerMove={moveCursor}
      onPointerLeave={() => setCursorVisible(false)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        ref={cursorRef}
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 z-[1] hidden h-24 w-24 bg-white mix-blend-difference transition-opacity duration-150 md:block ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative flex h-[min(500px,70%)] flex-col items-center justify-end">
        <PillButton href="/contact" className="z-[2] cursor-pointer">
          Let&apos;s Collaborate
        </PillButton>
      </div>
    </section>
  );
}
