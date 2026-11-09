import Image from "next/image";
import { Fragment } from "react";
import { Reveal } from "../Reveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      aria-label="Services"
      className="flex w-full flex-col justify-center gap-[27px] px-5 pb-[105px] pt-[26px] md:max-[1199px]:px-10 min-[1200px]:px-[clamp(48px,6vw,144px)]"
    >
      <h2 className="text-center text-[28px] font-bold leading-none tracking-[-0.04em] text-white md:text-[36px]">SERVICES</h2>

      <div className="flex flex-col items-center justify-center gap-[21px] overflow-clip min-[1200px]:mx-auto min-[1200px]:w-full min-[1200px]:max-w-[1800px]">
        {services.map((s, i) => (
          <Fragment key={s.title}>
            {i > 0 && <Reveal className="h-px w-full bg-[#222]" />}
            <Reveal className="w-full max-w-[1120px] min-[1200px]:max-w-none">
              <div className="flex flex-col gap-5 lg:max-[1199px]:h-[100px] lg:flex-row lg:items-center lg:justify-between lg:max-[1199px]:gap-8 min-[1200px]:h-[120px] min-[1200px]:gap-10">
                <div className="flex items-center gap-6 md:max-[1199px]:gap-10 lg:max-[1199px]:w-[720px] lg:shrink lg:max-[1199px]:gap-[65px] min-[1200px]:w-[calc(100%-500px)] min-[1200px]:gap-[72px]">
                  <span className="w-5 text-center font-space-mono text-[14px] uppercase leading-[19.6px] tracking-[-0.2px] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-clip md:max-[1199px]:h-[100px] md:max-[1199px]:w-[100px] min-[1200px]:h-[115px] min-[1200px]:w-[115px]">
                    <Image src={s.image} alt="" fill sizes="(min-width: 1200px) 115px, 100px" className="object-cover" />
                  </div>
                  <h2 className="font-bogle text-[28px] uppercase leading-none text-white md:max-[1199px]:text-[39px] lg:max-[1199px]:w-[300px] min-[1200px]:w-[360px] min-[1200px]:text-[46px]">
                    {s.title}
                  </h2>
                </div>
                <p className="text-[16px] leading-[20.8px] tracking-[-0.1px] text-white/75 md:max-[1199px]:pl-[166px] lg:max-[1199px]:w-[400px] lg:shrink-0 lg:pl-0 min-[1200px]:w-[460px] min-[1200px]:text-[18px] min-[1200px]:leading-[25px]">
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
