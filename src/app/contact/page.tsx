import type { Metadata } from "next";
import Image from "next/image";
import Pill from "@/components/Pill";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col items-center bg-page px-5 pb-[100px] pt-[130px] md:px-8">
      <section className="flex w-full max-w-[1376px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-[18px]">
          <Pill color="bg-brand">Get in touch</Pill>
          <h1 className="max-w-[420px] font-inter text-[40px] font-bold leading-[44px] tracking-[-1.6px] text-white">
            Got ideas? Let’s turn them into something real
          </h1>
        </div>

        <div className="flex w-full flex-col gap-3 rounded-[14px] bg-brand p-8 md:max-w-[843px] md:p-10">
          <Image src={img("lotus-logo.png")} alt="" width={45} height={35} className="h-[35px] w-[45px] object-contain" />
          <a href="tel:+918928768546" className="mt-3 w-fit py-2 font-inter-display text-[16px] leading-[20.8px] text-white hover:underline lg:py-0">
            +91 8928768546
          </a>
          <a
            href="mailto:senstudio.in@gmail.com"
            className="w-fit break-all py-2 font-inter-display text-[22px] font-medium leading-[28.6px] tracking-[-0.44px] text-white hover:underline lg:py-0"
          >
            senstudio.in@gmail.com
          </a>
          <p className="font-inter-display text-[16px] leading-[20.8px] text-white">
            12th Cross Rd, GM Palya, CV Raman Nagar, Bangalore
          </p>
        </div>
      </section>

      <div className="mt-[18px] h-px w-full max-w-[1376px] bg-[rgba(90,98,113,0.5)]" />

      <Reveal y={40} amount={0.1} className="mt-[58px] w-full max-w-[973px]">
        <div className="overflow-hidden rounded-[37px]">
          <div className="relative aspect-[973/365] w-full">
            <Image src={img("Qzs4saIqR6C4xuhqQgqNQPUdxA.png")} alt="Arghya Sen" fill sizes="973px" className="object-cover object-[center_78%]" priority />
          </div>
          <div className="flex flex-col items-center gap-10 bg-[rgba(90,98,113,0.5)] px-5 pb-12 pt-8 md:px-[54px]">
            <h2 className="font-bogle text-[64px] uppercase leading-none tracking-[-0.04em] text-white md:text-[96px]">
              Contact
            </h2>
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </main>
  );
}
