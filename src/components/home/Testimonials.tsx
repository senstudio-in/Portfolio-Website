"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";
import { images, testimonials } from "@/lib/site";

const STAR =
  "M9.538 1.61c.171-.411.753-.411.924 0l2.066 4.967a.5.5 0 0 0 .422.307l5.362.43c.444.035.623.589.286.878l-4.086 3.5a.5.5 0 0 0-.161.496l1.248 5.233c.103.432-.367.774-.747.542l-4.591-2.804a.5.5 0 0 0-.522 0l-4.591 2.804c-.379.232-.85-.11-.747-.542l1.248-5.233a.5.5 0 0 0-.161-.496l-4.086-3.5c-.337-.289-.158-.843.286-.878l5.363-.43a.5.5 0 0 0 .421-.307Z";

function Stars() {
  return (
    <svg viewBox="0 0 116 20" className="h-5 w-[116px]" aria-label="5 out of 5 stars" role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={STAR} transform={`translate(${i * 24} 0)`} fill="#f5f5f5" />
      ))}
    </svg>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 17 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowBtn =
    "flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark outline-none transition-[background-color,opacity,transform] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] enabled:hover:bg-brand-card enabled:active:scale-95 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:cursor-default disabled:opacity-30";

  return (
    <section aria-label="Testimonials" className="flex w-full max-w-[1122px] flex-col gap-14 px-5 md:px-10 xl:px-0">
      <Reveal y={30} className="flex flex-col gap-6">
        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-[17px] overflow-x-auto overscroll-x-contain"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="w-[85%] shrink-0 snap-start md:w-[calc((100%-17px)/2)] lg:w-[calc((100%-34px)/3)]"
            >
              <article className="flex h-full min-h-[256px] flex-col justify-between gap-6 rounded-[12px] bg-brand-card p-6">
                <div className="flex w-full flex-col gap-6">
                  <Stars />
                  <p className="text-left font-inter-display text-[16px] leading-[20.8px] text-white">
                    {t.quote}
                  </p>
                </div>
                <div className="flex w-full items-center gap-[10px]">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-center overflow-hidden">
                    <p className="font-inter-display text-[12px] leading-[19.2px] tracking-[0.48px] text-white">
                      {t.name}
                    </p>
                    <p className="font-inter-display text-[13px] leading-[18.2px] text-[#9c9c9c]">
                      {t.company}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => page(-1)}
            disabled={atStart}
            className={arrowBtn}
          >
            <Image src={images.arrowLeft} alt="" width={40} height={40} />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => page(1)}
            disabled={atEnd}
            className={arrowBtn}
          >
            <Image src={images.arrowRight} alt="" width={40} height={40} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
