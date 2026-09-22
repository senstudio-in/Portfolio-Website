import type { Metadata } from "next";
import Image from "next/image";
import Pill from "@/components/Pill";
import SendButton from "@/components/SendButton";
import { Reveal } from "@/components/Reveal";
import { img } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const avatars = ["about-team-1.webp", "about-team-2.webp", "about-team-3.webp"];

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center bg-page">
      {/* Portrait + playlist */}
      <section className="flex w-full justify-center bg-[#0f0f0f] px-5 py-[115px] md:px-[60px]">
        <div className="flex w-full max-w-[1069px] flex-col items-center gap-[25px] md:flex-row md:items-start">
          <div className="relative aspect-[522/801] w-full max-w-[522px] overflow-hidden rounded-[25px] [contain:paint]">
            <Image
              src={img("about-portrait-animation.webp")}
              alt="Arghya Sen holding a Sen Studio card"
              fill
              unoptimized
              priority
              decoding="async"
              className="object-cover"
            />
          </div>

          <div className="flex w-full max-w-[522px] flex-col items-center gap-12">
            <div className="flex w-full justify-center pt-4">
              <Image
                src={img("arghya-signature-latest.png")}
                alt="Arghya Sen signature"
                width={180}
                height={104}
                className="h-[104px] w-[180px] object-contain"
              />
            </div>
            <p className="max-w-[418px] text-center text-[22px] leading-[1.3] text-white md:text-[26px]">
              Ever since i was a little boy, i knew i wanted to make the logo bigger and make it pop ;)
            </p>
            <iframe
              title="Sen Studio Radio — Apple Music playlist"
              src="https://embed.music.apple.com/in/playlist/idpl.u-r2yBDkPCR761gY4"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              loading="lazy"
              className="h-[523px] w-full overflow-hidden rounded-[10px] border-0 bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Title, video and "who we are" share one column so their edges line up */}
      <div className="flex w-full max-w-[1069px] flex-col gap-14 px-5 pb-[120px] pt-20 md:gap-16 md:px-0 md:pb-[156px] md:pt-[140px]">
        <Reveal y={30} className="flex flex-col gap-6">
          <Pill>About</Pill>
          <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
            <h1 className="font-inter-display text-[26px] font-medium leading-[1.2] tracking-[-0.6px] text-[#ccc] md:text-[30px]">
              Design that makes Sen(se).
            </h1>
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex shrink-0">
                {avatars.map((a, i) => (
                  <Image
                    key={a}
                    src={img(a)}
                    alt=""
                    width={56}
                    height={56}
                    className={`h-14 w-14 rounded-full border-2 border-page object-cover ${i > 0 ? "-ml-4" : ""}`}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <p className="font-inter-display text-[12px] leading-[19.2px] tracking-[0.48px] text-[#ccc]">
                  Studio · Est. 2026
                </p>
                <p className="font-inter-display text-[16px] leading-[20.8px] text-white">
                  Led by Arghya Sen · Bangalore
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 pt-4 md:grid-cols-2 md:items-end">
          <div className="flex max-w-[360px] flex-col gap-[18px] font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-white">
            <Pill>Who we are</Pill>
            <p>Small studio. Unreasonably high standards.</p>
            <p>Sen Studio is a Art Studio based in Bangalore. Founded by Arghya Sen</p>
          </div>
          <div className="md:justify-self-start">
            <SendButton href="/contact" label="Contact" />
          </div>
        </div>
      </div>
    </main>
  );
}
