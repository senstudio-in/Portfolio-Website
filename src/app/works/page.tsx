import type { Metadata } from "next";
import WorkCard from "@/components/WorkCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorksPage() {
  return (
    <main className="flex w-full justify-center bg-[#0f0f0f] px-5 pb-[100px] pt-[106px] md:px-[78px]">
      <div className="grid w-full max-w-[1280px] grid-cols-1 min-[1920px]:max-w-[1740px] gap-x-5 gap-y-[60px] md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} y={40} delay={(i % 2) * 0.1} amount={0.2}>
            <WorkCard project={p} showTag aspect="630/467" />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
