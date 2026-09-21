"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { img } from "@/lib/site";

export default function ContactVisualCarousel() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setShowCards((value) => !value), 10_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[973/365] w-full overflow-hidden">
      <Image
        src={img("Qzs4saIqR6C4xuhqQgqNQPUdxA.png")}
        alt="Arghya Sen"
        fill
        sizes="973px"
        className={`object-cover object-[center_78%] transition-opacity duration-700 ${showCards ? "opacity-0" : "opacity-100"}`}
        priority
      />
      <div
        className={`absolute inset-0 bg-[#0f0f0f] transition-opacity duration-700 ${showCards ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!showCards}
      >
        <Image src={img("sen-logo-card.png")} alt="Sen Studio logo" fill sizes="973px" className="object-contain" />
      </div>
    </div>
  );
}
