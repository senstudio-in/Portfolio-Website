import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function WorkCard({
  project,
  showTag = false,
  aspect = "611/453",
}: {
  project: Project;
  showTag?: boolean;
  aspect?: string;
}) {
  return (
    <Link href={`/works/${project.slug}`} className="group flex flex-col gap-3 [perspective:1200px]">
      <div className="flex items-center justify-between gap-6">
        <h3 className="font-bogle text-[20px] uppercase leading-6 text-white">{project.title}</h3>
        {showTag && project.tag && (
          <span className="shrink-0 bg-white px-[2px] py-[2px] text-[16px] font-medium leading-4 text-black">
            {project.tag}
          </span>
        )}
      </div>
      <div
        className="relative flex items-center justify-center overflow-clip rounded-[2px]"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 611px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[1.06]"
        />
        <span className="relative z-[8] rounded-[4px] bg-black/20 px-4 py-[6px] font-condensed text-[16px] font-medium leading-4 text-white opacity-0 backdrop-blur-[10px] transition-all duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
          View project
        </span>
      </div>
    </Link>
  );
}
