import Image from "next/image";
import Marquee from "../Marquee";
import { images } from "@/lib/site";

export default function ClientLogos() {
  return (
    <section aria-label="Clients" className="flex w-full flex-col gap-10 px-5 py-[60px] md:px-10">
      <div className="edge-fade flex h-[100px] items-center overflow-hidden p-[10px]">
        <Marquee speed={60} className="w-full">
          <Image
            src={images.clientStrip}
            alt="ICC, Sevilla FC, Real Madrid, Ather, Goal, WTF, Chelsea FC, MLB, LIV Golf and more"
            width={2090}
            height={87}
            className="h-[87px] w-[2090px] max-w-none"
          />
        </Marquee>
      </div>
    </section>
  );
}
