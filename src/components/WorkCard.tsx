import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function WorkCard({
  project,
  displayTitle,
  showTag = false,
  aspect = "611/453",
  priority = false,
}: {
  project: Project;
  displayTitle?: string;
  showTag?: boolean;
  aspect?: string;
  priority?: boolean;
}) {
  const title = displayTitle ?? project.title;

  return (
    <Link href={`/works/${project.slug}`} className="group flex flex-col gap-3 [perspective:1200px]">
      <div className="flex items-center justify-between gap-6">
        <h3
          className={`font-bogle uppercase leading-6 text-white ${
            displayTitle ? "whitespace-nowrap text-[clamp(12px,1.8vw,20px)]" : "text-[20px]"
          }`}
        >
          {title}
        </h3>
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
          priority={priority}
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

export function MoreProjectsCard({ aspect = "611/453" }: { aspect?: string }) {
  return (
    <Link
      href="/works"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View more projects in a new tab"
      className="group flex flex-col gap-3 [perspective:1200px]"
    >
      <div className="flex items-center justify-between gap-6">
        <h3 className="font-bogle text-[20px] uppercase leading-6 text-white">More Projects</h3>
      </div>
      <div
        className="relative flex items-center justify-center overflow-clip rounded-[2px] border border-white/15 bg-[#161616]"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src="/images/more-projects-cover.jpg"
          alt="A montage of Sen Studio projects"
          fill
          sizes="(min-width: 768px) 611px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/25" />
        <span className="relative z-[8] rounded-[4px] bg-white px-4 py-[6px] font-condensed text-[16px] font-medium leading-4 text-black transition-all duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] translate-y-2 group-hover:translate-y-0 group-hover:scale-105">
          View all projects
        </span>
      </div>
    </Link>
  );
}

export function UpcomingWorkCard({
  title,
  image,
  href,
  aspect = "630/467",
}: {
  title: string;
  image?: string;
  href?: string;
  aspect?: string;
}) {
  const card = (
    <article className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-6">
        <h3 className="font-bogle text-[20px] uppercase leading-6 text-white">{title}</h3>
      </div>
      <div
        className="relative flex items-center justify-center overflow-clip rounded-[2px] border border-white/15 bg-[radial-gradient(circle_at_50%_40%,#262626,transparent_58%),#101010]"
        style={{ aspectRatio: aspect }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className="font-bogle text-center text-[clamp(24px,4vw,44px)] uppercase leading-none text-white/80 transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[1.06]">{title}</span>
        )}
        {href && (
          <span className="absolute z-[8] rounded-[4px] bg-black/20 px-4 py-[6px] font-condensed text-[16px] font-medium leading-4 text-white opacity-0 backdrop-blur-[10px] transition-all duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
            View project
          </span>
        )}
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className="group block">
      {card}
    </Link>
  ) : (
    card
  );
}
