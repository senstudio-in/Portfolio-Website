import type { Metadata } from "next";
import Link from "next/link";
import ZoomableWorkImage from "@/components/ZoomableWorkImage";

export const metadata: Metadata = { title: "Social Media Carousels" };

export default function SocialMediaCarouselsPage() {
  return (
    <main className="flex w-full flex-col items-center gap-[72px] bg-[#0f0f0f] px-5 pb-[100px] pt-[80px] md:px-[72px]">
      <header className="flex w-full max-w-[760px] flex-col items-center gap-4 text-center">
        <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">Social Media Carousels</h1>
        <p className="text-[18px] leading-[28px] text-[#999]">Instagram carousels that showcase creative work.</p>
      </header>

      <section className="flex w-full max-w-[1292px] flex-col gap-5">
        <ZoomableWorkImage src="/images/carousel-arjun-display.jpg" alt="Arjun Kalra Instagram carousel" width={3840} height={600} />
        <ZoomableWorkImage src="/images/carousel-johnson-display.png" alt="Johnson Instagram carousel" width={3840} height={800} />
      </section>

      <section className="flex w-full max-w-[1292px] flex-col gap-5">
        <div className="flex w-full max-w-[600px] flex-col gap-2">
          <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[40px]">A social post to showcase work</h2>
          <p className="text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#999]">
            A LinkedIn post designed to bring selected work, collaborators and campaign highlights together in one clear visual story.
          </p>
        </div>
        <ZoomableWorkImage src="/images/linkedin-work-showcase.png" alt="LinkedIn work showcase post" width={3000} height={2000} />
      </section>

      <nav aria-label="More work" className="flex w-full max-w-[927px] items-center text-[20px] leading-[1.2] text-white md:text-[26px]">
        <Link href="/works" className="py-3 transition-opacity hover:opacity-60">‹ All work</Link>
      </nav>
    </main>
  );
}
