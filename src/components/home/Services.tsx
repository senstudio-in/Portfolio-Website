import Image from "next/image";
import { Fragment } from "react";
import { Reveal } from "../Reveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      aria-label="Services"
      className="flex w-full flex-col justify-center gap-[27px] px-5 pb-[105px] pt-[26px] md:px-10"
    >
      <h2 className="text-center text-[28px] font-bold leading-none tracking-[-0.04em] text-white md:text-[36px]">SERVICES</h2>

      <div className="flex flex-col items-center justify-center gap-[21px] overflow-clip">
        {services.map((s, i) => (
          <Fragment key={s.title}>
            {i > 0 && <Reveal className="h-px w-full bg-[#222]" />}
            <Reveal className="w-full max-w-[1120px]">
              <div className="flex flex-col gap-5 lg:h-[100px] lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="flex items-center gap-6 md:gap-10 lg:w-[720px] lg:shrink lg:gap-[65px]">
                  <span className="w-5 text-center font-space-mono text-[14px] uppercase leading-[19.6px] tracking-[-0.2px] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-clip md:h-[100px] md:w-[100px]">
                    <Image src={s.image} alt="" fill sizes="100px" className="object-cover" />
                  </div>
                  <h2 className="font-bogle text-[28px] uppercase leading-none text-white md:text-[39px] lg:w-[300px]">
                    {s.title}
                  </h2>
                </div>
                <p className="text-[16px] leading-[20.8px] tracking-[-0.1px] text-white/75 md:pl-[166px] lg:w-[400px] lg:shrink-0 lg:pl-0">
                  {s.description}
                </p>
              </div>
            </Reveal>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
