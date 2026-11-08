"use client";

import { useEffect, useRef } from "react";

const CURSOR_SIZE = 104;
const FOLLOW_SPEED = 0.2;

export default function CursorNoise() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursor || !supportsFinePointer.matches || reduceMotion.matches) return;

    let targetX = -CURSOR_SIZE;
    let targetY = -CURSOR_SIZE;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;
    let frameId = 0;

    const setVisibility = (visible: boolean) => {
      if (isVisible === visible) return;
      isVisible = visible;
      cursor.classList.toggle("cursor-noise--visible", visible);
    };

    const isPastLandingVideo = () => {
      const hero = document.getElementById("landing-video");
      return hero ? hero.getBoundingClientRect().bottom <= 0 : false;
    };

    const updateVisibility = () => setVisibility(isPastLandingVideo());

    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX - CURSOR_SIZE / 2;
      targetY = event.clientY - CURSOR_SIZE / 2;
      updateVisibility();
    };

    const animate = () => {
      currentX += (targetX - currentX) * FOLLOW_SPEED;
      currentY += (targetY - currentY) * FOLLOW_SPEED;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frameId = window.requestAnimationFrame(animate);
    };

    const hideCursor = () => setVisibility(false);
    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) hideCursor();
    };

    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("blur", hideCursor);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("blur", hideCursor);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={cursorRef} aria-hidden className="cursor-noise" />;
}
