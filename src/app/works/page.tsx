import type { Metadata } from "next";
import WorkCard, { UpcomingWorkCard } from "@/components/WorkCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work | Bangalore Art Direction & Visual Design Portfolio",
  description:
    "Selected art direction, visual design, branding and content work by Sen Studio, a Bangalore creative studio led by Arghya Sen.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <main className="flex w-full justify-center bg-[#0f0f0f] px-5 pb-[100px] pt-[106px] md:px-[78px]">
      <div className="grid w-full max-w-[1280px] grid-cols-1 min-[1920px]:max-w-[1740px] gap-x-5 gap-y-[60px] md:grid-cols-2">
        {projects.filter((p) => p.listed !== false).map((p, i) => (
          <Reveal key={p.slug} y={40} delay={(i % 2) * 0.1} amount={0.2}>
            <WorkCard project={p} aspect="630/467" priority={i < 2} />
          </Reveal>
        ))}
        <Reveal y={40} amount={0.2}>
          <UpcomingWorkCard title="LIV Golf" image="/images/liv-golf-cover.jpg" href="/works/liv-golf" />
        </Reveal>
        <Reveal y={40} delay={0.1} amount={0.2}>
          <UpcomingWorkCard title="Serie A & Mumbai Indians" image="/images/r5-cover.jpg" href="/works/syria-a" />
        </Reveal>
        <Reveal y={40} amount={0.2}>
          <UpcomingWorkCard
            title="Social Media Carousels"
            image="/images/social-media-carousels-cover.jpg"
            href="/works/social-media-carousels"
          />
        </Reveal>
      </div>
    </main>
  );
}
