"use client";

import Image from "next/image";
import { useState } from "react";

/** Poster with a Play pill; swaps to the YouTube embed on click. */
export default function VideoPoster({ poster, youtubeId }: { poster: string; youtubeId: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative flex aspect-[1296/672] w-full items-center justify-center overflow-hidden rounded-[12px] bg-[rgba(200,182,236,0.05)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title="Sen Studio showreel"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          <Image src={poster} alt="" fill sizes="(min-width: 1440px) 1296px, 100vw" className="rounded-[15px] object-cover" />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative flex h-[68px] w-[240px] items-center gap-4 rounded-full bg-black/45 p-2 backdrop-blur-md transition-transform duration-300 hover:scale-105"
          >
            <span className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-white">
              <svg viewBox="0 0 24 24" className="ml-[2px] h-5 w-5" aria-hidden>
                <path d="M7 4.5v15l12-7.5-12-7.5Z" fill="#0f0f0f" />
              </svg>
            </span>
            <span className="font-inter-display text-[18px] font-medium leading-[23.4px] tracking-[-0.36px] text-white">
              Play
            </span>
          </button>
        </>
      )}
    </div>
  );
}
