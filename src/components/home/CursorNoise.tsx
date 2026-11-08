"use client";

import { useEffect, useRef } from "react";

const CURSOR_SIZE = 130;
const FOLLOW_SPEED = 0.1;

export default function CursorNoise() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursor || !supportsFinePointer.matches || reduceMotion.matches) return;

    const landingVideo = document.getElementById("landing-video");

    let targetX = -CURSOR_SIZE;
    let targetY = -CURSOR_SIZE;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;
    let frameId = 0;
    let pointerPosition: { x: number; y: number } | null = null;

    const setVisibility = (visible: boolean) => {
      if (isVisible === visible) return;
      isVisible = visible;
      cursor.classList.toggle("cursor-glow--visible", visible);
    };

    const isOutsideLandingVideo = () => {
      if (!pointerPosition) return false;

      const elementUnderPointer = document.elementFromPoint(
        pointerPosition.x,
        pointerPosition.y,
      );

      return !elementUnderPointer?.closest("#landing-video");
    };

    const updateVisibility = () => setVisibility(isOutsideLandingVideo());

    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX - CURSOR_SIZE / 2;
      targetY = event.clientY - CURSOR_SIZE / 2;
      pointerPosition = { x: event.clientX, y: event.clientY };
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
    const handleLandingVideoEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") setVisibility(false);
    };
    const handleLandingVideoLeave = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.relatedTarget) {
        setVisibility(true);
      }
    };

    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("blur", hideCursor);
    landingVideo?.addEventListener("pointerenter", handleLandingVideoEnter);
    landingVideo?.addEventListener("pointerleave", handleLandingVideoLeave);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("blur", hideCursor);
      landingVideo?.removeEventListener("pointerenter", handleLandingVideoEnter);
      landingVideo?.removeEventListener("pointerleave", handleLandingVideoLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={cursorRef} aria-hidden className="cursor-glow" />;
}
