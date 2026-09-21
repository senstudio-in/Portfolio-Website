import PillButton from "../PillButton";

export default function Hero() {
  return (
    <section className="relative flex h-[clamp(520px,53vw,max(764px,85vh))] w-full flex-col items-center justify-center overflow-clip">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="relative flex h-[min(500px,70%)] flex-col items-center justify-end">
        <PillButton href="/contact" className="z-[2]">
          Let&apos;s Collaborate
        </PillButton>
      </div>
    </section>
  );
}
