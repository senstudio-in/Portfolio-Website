import Image from "next/image";
import CornerFrame from "../CornerFrame";
import PillButton from "../PillButton";
import { ScrollWords } from "../Reveal";
import { images } from "@/lib/site";

const bio =
  "Arghya Sen is a Bengaluru Based Artist, Originally From West Bengal. He Specializes in Visual Storytelling through multi-disciplinary Art Forms , Creating Content for Brands, Artists, and Creative Projects.";

export default function AboutBlurb() {
  return (
    <section aria-label="About" className="relative z-0 flex w-full flex-col items-center justify-center gap-[46px] px-5 py-[27px]">
      <div className="relative z-[3] flex w-full max-w-[1150px] flex-col items-center justify-center gap-8 py-[15px] lg:flex-row">
        <CornerFrame className="h-[450px] w-full max-w-[400px] shrink-0 rounded-[6px]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={images.aboutPortrait}
              alt="Arghya Sen"
              fill
              sizes="368px"
              className="object-cover"
            />
          </div>
        </CornerFrame>

        <div className="flex w-full flex-col gap-[45px] py-5 md:max-w-[640px] lg:max-w-[718px]">
          <div className="flex flex-col justify-center gap-[58px] overflow-hidden">
            <ScrollWords
              text={bio}
              className="text-left text-[22px] leading-[1.8] md:text-[26px]"
            />
            <div>
              <PillButton href="/about-us">More About Me</PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
