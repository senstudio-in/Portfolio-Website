"use client";

import Image from "next/image";
import { useState } from "react";

type ZoomableWorkImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ZoomableWorkImage({ src, alt, width, height }: ZoomableWorkImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-[4px] bg-[#151515] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label={`Expand ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 1292px, 100vw" className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]" />
        <span className="absolute bottom-4 right-4 rounded-full bg-black/55 px-4 py-2 text-[14px] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          View full carousel
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 p-4 md:p-8" role="dialog" aria-modal="true" aria-label={alt}>
          <div className="flex items-center justify-between gap-4 pb-4 text-white">
            <p className="text-[14px] md:text-[16px]">Scroll to explore the full carousel.</p>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-white px-4 py-1.5 text-[14px] text-black hover:bg-[#ddd]">Close</button>
          </div>
          <div className="flex-1 overflow-auto rounded-[4px] bg-[#111]">
            <Image src={src} alt={alt} width={width} height={height} unoptimized className="h-auto max-w-none" style={{ width: `${width}px` }} />
          </div>
        </div>
      )}
    </>
  );
}
