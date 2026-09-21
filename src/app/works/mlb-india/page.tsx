import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "MLB India" };

export default function MlbIndiaPage() {
  return (
    <main className="flex min-h-[70vh] w-full flex-col items-center gap-[60px] bg-[#0f0f0f] px-5 pb-[100px] pt-[49px] font-inter md:px-[72px]">
      <header className="flex w-full max-w-[600px] flex-col items-center gap-[19px] text-center">
        <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">MLB India</h1>
      </header>

      <nav aria-label="More work" className="flex w-full max-w-[927px] items-center justify-between text-[16px] leading-[25.6px] tracking-[-0.32px] text-white">
        <Link href="/works/liv-golf" className="py-3 transition-opacity hover:opacity-60">
          ‹ LIV GOLF
        </Link>
        <span />
      </nav>
    </main>
  );
}
