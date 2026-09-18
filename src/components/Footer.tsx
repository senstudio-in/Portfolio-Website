"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Marquee from "./Marquee";
import RollText from "./RollText";
import { Banner } from "./Header";
import { footerBannerText, navLinks, socialLinks } from "@/lib/site";

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
        <div className="flex items-center gap-[25px] md:pl-[50px]">
          <Link
            href="/"
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

        <div className="flex gap-16 lg:gap-[122px] xl:pl-[300px]">
          <div className="flex flex-col justify-center lg:gap-[10px]">
            <p className="mb-1 font-bogle text-[21px] uppercase leading-[25.2px] text-muted lg:mb-0">Navigations</p>
            {navLinks.map((l) => (
              <FooterLink key={l.label} href={l.href} label={l.label} />
            ))}
          </div>
          <div className="flex flex-col justify-center lg:gap-[10px]">
            <p className="mb-1 font-bogle text-[21px] uppercase leading-[25.2px] text-muted lg:mb-0">Socials</p>
            {socialLinks.map((l) => (
              <FooterLink key={l.label} href={l.href} label={l.label} external />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
      >
        <Marquee speed={90} gap={100}>
          <div className="flex items-center gap-[100px]">
            <p className="whitespace-nowrap font-bogle text-[clamp(96px,25.5vw,367px)] leading-[0.8] tracking-[0.01em] text-white">
              SEN STUDIO
            </p>
            <span className="block h-[clamp(20px,4.2vw,60px)] w-[clamp(20px,4.2vw,60px)] rounded-full bg-white" />
          </div>
        </Marquee>
      </motion.div>

      <Banner text={footerBannerText} />
    </footer>
  );
}
