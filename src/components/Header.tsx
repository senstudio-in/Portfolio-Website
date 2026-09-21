"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Marquee from "./Marquee";
import { bannerText, images, navLinks } from "@/lib/site";

// Home is reached through the logo, so the header skips it.
const headerLinks = navLinks.filter((l) => l.href !== "/");

export function Banner({ text }: { text: string }) {
  return (
    <motion.div
      className="relative z-[2] flex h-[26px] w-full items-center bg-brand"
      initial={{ opacity: 0.001, y: -26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 258, damping: 75, mass: 1 }}
    >
      <Marquee speed={40} className="w-full">
        <p className="whitespace-pre font-inter text-[11px] leading-[13.2px] tracking-[0.99px] text-white">
          {text}
        </p>
      </Marquee>
    </motion.div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <nav
        aria-label="Primary"
        className="flex w-full flex-col items-center gap-[29px] bg-ink pb-[37px]"
      >
        <Banner text={bannerText} />

        <div className="flex h-[17px] w-full items-center justify-between px-5 md:justify-evenly md:px-0">
          <Link href="/" className="flex items-center" aria-label="Sen Studio home">
            <Image
              src={images.logo}
              alt=""
              width={50}
              height={39}
              priority
              className="h-[39px] w-[50px] object-cover"
            />
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {headerLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group relative flex flex-col items-center gap-[2px] overflow-hidden py-3 lg:py-0"
                >
                  <span className="text-[14px] font-semibold uppercase leading-[16.8px] text-white">
                    {l.label}
                  </span>
                  <span className="absolute bottom-3 left-0 h-px w-full lg:bottom-0 -translate-x-[101%] bg-white transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-0" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative -mr-2 h-11 w-11 md:hidden"
          >
            <span
              className={`absolute left-2 h-[2px] w-7 bg-white transition-all duration-300 ${open ? "top-[21px] rotate-45" : "top-[15px]"}`}
            />
            <span
              className={`absolute left-2 h-[2px] w-7 bg-white transition-all duration-300 ${open ? "top-[21px] -rotate-45" : "top-[27px]"}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }}
              className="flex w-full flex-col items-center gap-5 overflow-hidden md:hidden"
            >
              {headerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 font-bogle text-[28px] uppercase text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
