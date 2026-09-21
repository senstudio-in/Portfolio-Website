import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ExpandableImage from "@/components/ExpandableImage";

export const metadata: Metadata = { title: "LIV Golf" };

export default function LivGolfPage() {
  const creatives = [
    { src: "/images/liv-golf-ripper.png", alt: "LIV Golf Orlando Ripper creative" },
    { src: "/images/liv-golf-cleeks.png", alt: "LIV Golf Orlando Cleeks creative" },
    { src: "/images/liv-golf-stinger.png", alt: "LIV Golf Orlando Stinger creative" },
  ];

  return (
    <main className="flex w-full flex-col items-center gap-[60px] bg-[#0f0f0f] px-5 pb-[100px] pt-[49px] font-inter md:px-[72px]">
      <header className="flex w-full max-w-[600px] flex-col items-center gap-[19px] text-center">
        <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">LIV GOLF</h1>
        <p className="text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#999]">
          A series of hero creatives featuring LIV Golf players, created via Engage Digital Partners.
        </p>
      </header>

      <section className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-3">
        {creatives.map((creative) => (
          <ExpandableImage key={creative.src} src={creative.src} alt={creative.alt} className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
            <Image src={creative.src} alt={creative.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </ExpandableImage>
        ))}
      </section>

      <p className="w-full max-w-[600px] text-[16px] leading-[25.6px] tracking-[-0.32px] text-white">
        The creative direction draws on cultural references and the character of each host location, connecting the campaign to where every event takes place. Each composition spotlights three key players from their teams, bringing the energy and identity of the tournament into focus.
      </p>

      <nav aria-label="More work" className="flex w-full max-w-[927px] flex-col items-start gap-4 text-[16px] leading-[25.6px] tracking-[-0.32px] text-white md:flex-row md:items-center md:justify-between md:gap-0">
        <Link href="/works/mlb-india" className="py-3 transition-opacity hover:opacity-60">
          ‹ MLB India
        </Link>
        <Link href="/works/syria-a" className="py-3 text-[20px] leading-[1.2] transition-opacity hover:opacity-60 md:text-[26px]">
          Serie A & Mumbai Indians ›
        </Link>
      </nav>
    </main>
  );
}
