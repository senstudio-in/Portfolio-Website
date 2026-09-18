import Image from "next/image";
import PillButton from "../PillButton";
import { images } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex h-[clamp(520px,53vw,max(764px,85vh))] w-full flex-col items-center justify-center overflow-clip">
      <Image
        src={images.heroGif}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative flex h-[min(500px,70%)] flex-col items-center justify-end">
        <PillButton href="/contact" className="z-[2]">
          Let&apos;s Collaborate
        </PillButton>
      </div>
    </section>
  );
}
