"use client";

import Link from "next/link";
import Image from "next/image";
import Marquee from "./Marquee";
import RollText from "./RollText";
import { Banner } from "./Header";
import { footerBannerText, navLinks } from "@/lib/site";

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="15" r="1" />
        <path
          transform="translate(1.011 0.988)"
          d="M6.989 8.012c0 3.866 3.134 7 7 7M4.989 20.212c4.719 3.079 11.001 2.095 14.552-2.28 3.551-4.375 3.222-10.726-.762-14.71C14.794-.762 8.443-1.092 4.068 2.459-.307 6.01-1.291 12.293 1.789 17.012l-.8 4Z"
        />
      </g>
    </svg>
  );
}

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex h-10 w-fit items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-white/60 lg:h-[26px]"
    >
      <RollText
        align="start"
        className="text-[16px] font-medium uppercase leading-[25.6px] tracking-[-0.32px] text-white"
      >
        {label}
      </RollText>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-0 flex w-full flex-col items-center gap-[54px] overflow-clip bg-black">
      <div className="flex w-full flex-col gap-12 px-[25px] py-[49px] md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex flex-col gap-6 md:pl-[50px]">
          <div className="flex flex-col gap-6 md:flex-row md:gap-[64px]">
            <div className="flex flex-col gap-6">
          <div className="flex items-center gap-[25px]">
            <Link
              href="https://wa.me/918928768546"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group relative flex h-[63px] w-[66px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-whatsapp outline-none transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95"
            >
              <span className="grid h-6 w-6 overflow-hidden">
                <WhatsAppGlyph className="h-6 w-6 text-white transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:-translate-y-full" />
                <WhatsAppGlyph className="h-6 w-6 translate-y-full text-white transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:translate-y-0" />
              </span>
            </Link>
            <div className="font-bogle text-[17px] uppercase leading-[20.4px] text-muted">
              <p>unlock conversations</p>
              <p>&amp; designs</p>
            </div>
          </div>
          <div className="flex items-center gap-[25px]">
            <Link
              href="https://www.instagram.com/senstudio.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              className="group relative flex h-[63px] w-[66px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] outline-none transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(214,54,143,0.55)] focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95"
            >
              <Image
                src="/images/instagram-gradient-background.png"
                alt=""
                fill
                sizes="66px"
                className="object-cover"
              />
              <span className="relative z-[1] grid h-6 w-6 overflow-hidden">
                <Image
                  src="/images/instagram-white-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:-translate-y-full"
                />
                <Image
                  src="/images/instagram-white-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:translate-y-0"
                />
              </span>
            </Link>
            <p className="font-bogle text-[17px] uppercase leading-[20.4px] text-muted">Slide in my DMs!</p>
          </div>
            </div>
            <div className="flex flex-col gap-6">
          <div className="flex items-center gap-[25px]">
            <Link
              href="https://x.com/senstudio_in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="group relative flex h-[63px] w-[66px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-white outline-none transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(255,255,255,0.35)] focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95"
            >
              <span className="relative z-[1] grid h-6 w-6 overflow-hidden">
                <Image
                  src="/images/x-white-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain invert transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:-translate-y-full"
                />
                <Image
                  src="/images/x-white-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 translate-y-full object-contain invert transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:translate-y-0"
                />
              </span>
            </Link>
            <p className="font-bogle text-[17px] uppercase leading-[20.4px] text-muted">I mostly don&apos;t use it.</p>
          </div>
          <div className="flex items-center gap-[25px]">
            <Link
              href="https://www.linkedin.com/in/arghyasen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative flex h-[63px] w-[66px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] outline-none transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(14,118,168,0.55)] focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95"
            >
              <Image src="/images/linkedin-background.png" alt="" fill sizes="66px" className="object-cover" />
              <span className="relative z-[1] grid h-6 w-6 overflow-hidden">
                <Image
                  src="/images/linkedin-white-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:-translate-y-full"
                />
                <Image
                  src="/images/linkedin-white-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 translate-y-full object-contain transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] [grid-area:1/1] group-hover:translate-y-0"
                />
              </span>
            </Link>
            <p className="max-w-[220px] font-bogle text-[17px] uppercase leading-[20.4px] text-muted">Sometimes when I&apos;m bored, I use it.</p>
          </div>
            </div>
          </div>
        </div>

        <div className="md:pr-[50px]">
          <div className="flex flex-col justify-center lg:gap-[10px]">
            <p className="mb-1 font-bogle text-[21px] uppercase leading-[25.2px] text-muted lg:mb-0">Navigations</p>
            {navLinks.filter((l) => l.href !== "/").map((l) => (
              <FooterLink key={l.label} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <Marquee speed={90} gap={100}>
          <div className="flex items-center gap-[100px]">
            <p className="whitespace-nowrap font-bogle text-[clamp(96px,25.5vw,367px)] leading-[0.8] tracking-[0.01em] text-white">
              SEN STUDIO
            </p>
            <Image
              src="/images/lotus-logo.png"
              alt=""
              width={60}
              height={60}
              className="h-[clamp(20px,4.2vw,60px)] w-[clamp(20px,4.2vw,60px)] object-contain"
            />
          </div>
        </Marquee>
      </div>

      <Banner text={footerBannerText} />
    </footer>
  );
}
