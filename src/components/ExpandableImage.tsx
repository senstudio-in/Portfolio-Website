"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Preserves an image's inline layout and opens a detailed view on click. */
export default function ExpandableImage({ src, alt, children, className = "", style }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={`Open ${alt} in full screen`}
        className={`${className} block cursor-zoom-in border-0 bg-transparent p-0 text-left`}
        style={style}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[88vh] w-[92vw] max-w-[1600px]" onClick={(event) => event.stopPropagation()}>
            <Image src={src} alt={alt} fill unoptimized sizes="92vw" className="object-contain" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 m-3 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
