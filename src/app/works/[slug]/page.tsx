import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SlotImage from "@/components/SlotImage";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title } : {};
}

const body = "text-[16px] leading-[25.6px] tracking-[-0.32px] text-white";

function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <div className={`flex flex-col gap-[25.6px] ${className}`}>
      {text.split("\n\n").map((para, i) => (
        <p key={i}>
          {para.split(/(\*[^*]+\*)/g).map((part, j) =>
            part.startsWith("*") && part.endsWith("*") ? <em key={j}>{part.slice(1, -1)}</em> : part,
          )}
        </p>
      ))}
    </div>
  );
}

export default async function WorkPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const [b1, b2, b3, b4] = project.banners;

  return (
    <main className="flex w-full flex-col items-center gap-[100px] bg-[#0f0f0f] px-5 pb-[100px] pt-[49px] font-inter md:px-[72px]">
      <header className="flex w-full max-w-[600px] flex-col items-center gap-[19px] pb-[51px] text-center">
        <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">
          {project.title}
        </h1>
        <div className="flex flex-col gap-[18px] text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#999]">
          <p>{project.subtitle}</p>
          <p>{project.meta}</p>
        </div>
      </header>

      <Reveal className="flex w-full justify-center" amount={0.1}>
        <SlotImage slot={project.lead} alt={project.title} priority />
      </Reveal>

      <Paragraphs text={project.intro} className={`w-full max-w-[600px] ${body}`} />

      {project.gallery.map((g, i) => (
        <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={g} alt={`${project.title} — image ${i + 1}`} />
        </Reveal>
      ))}

      {[b1, b2].map((b, i) => (
        <Reveal key={`b${i}`} className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={b} alt={`${project.title} — banner ${i + 1}`} />
        </Reveal>
      ))}

      {project.process ? (
        <section className="flex w-full max-w-[927px] flex-col gap-8 py-[100px] md:flex-row md:items-center md:gap-[100px]">
          <h2 className="font-bebas text-[33px] leading-none tracking-[-0.66px] text-white md:w-[227px] md:shrink-0">
            {project.process.heading}
          </h2>
          <Paragraphs text={project.process.body} className={`md:w-[600px] ${body}`} />
        </section>
      ) : (
        <div aria-hidden className="h-[200px]" />
      )}

      {[b3, b4].map((b, i) => (
        <Reveal key={`b${i + 2}`} className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={b} alt={`${project.title} — banner ${i + 3}`} />
        </Reveal>
      ))}

      <div className="grid w-full max-w-[887px] grid-cols-2 gap-4 md:grid-cols-3">
        {project.grid.map((src, i) => (
          <div key={i} className="relative aspect-[285/200] overflow-hidden rounded-[8px] bg-[#eee]">
            <Image src={src} alt="" fill sizes="285px" className="object-cover" />
          </div>
        ))}
      </div>

      {project.quote && <p className={`mt-4 w-full max-w-[600px] ${body}`}>{project.quote}</p>}

      <Reveal className="flex w-full justify-center" amount={0.1}>
        <SlotImage slot={project.final} alt={`${project.title} — closing image`} />
      </Reveal>

      <nav aria-label="More work" className={`flex w-full max-w-[600px] items-center justify-between ${body}`}>
        {prev ? (
          <Link href={`/works/${prev.slug}`} className="py-3 transition-opacity hover:opacity-60">
            ‹ {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/works/${next.slug}`} className="py-3 transition-opacity hover:opacity-60">
            {next.title} ›
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
