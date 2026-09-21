import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SlotImage from "@/components/SlotImage";
import ExpandableImage from "@/components/ExpandableImage";
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
          {para.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) return <strong key={j}>{part.slice(2, -2)}</strong>;
            if (part.startsWith("*") && part.endsWith("*")) return <em key={j}>{part.slice(1, -1)}</em>;
            return part;
          })}
        </p>
      ))}
    </div>
  );
}

function InlineEmphasis({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}

export default async function WorkPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev =
    slug === "mlb-india"
      ? { slug: "world-horse-racing", title: "World Horse Racing" }
      : slug === "syria-a"
        ? { slug: "liv-golf", title: "LIV Golf" }
        : projects[index - 1];
  const next =
    slug === "world-horse-racing"
      ? { slug: "mlb-india", title: "MLB India" }
      : slug === "mlb-india"
        ? { slug: "liv-golf", title: "LIV Golf" }
        : slug === "syria-a"
          ? { slug: "social-media-carousels", title: "Social Media Carousels" }
        : projects[index + 1];
  const [b1, b2, b3, b4] = project.banners;
  const isTGIF = project.slug === "tgif";
  const isRealMadrid = project.slug === "real-madrid";
  const isRootsToBoots = project.slug === "sports-podcast";
  const isICC = project.slug === "icc-cricket";
  const isChelsea = project.slug === "olive";
  const isMLB = project.slug === "mlb-india";
  const isR5 = project.slug === "syria-a";
  const isWorldHorseRacing = project.slug === "world-horse-racing";
  const suppressEmptyBanners = isRealMadrid || isRootsToBoots || isICC || isMLB || isR5 || isWorldHorseRacing;
  const hasCompactLead = project.slug === "sevilla-fc" || isTGIF || isRealMadrid || isRootsToBoots || isICC || isChelsea || isMLB || isR5;
  const hasLargeWorkNav = project.slug === "sevilla-fc" || isTGIF || isRealMadrid || isRootsToBoots || isICC || isChelsea || isMLB || isR5 || isWorldHorseRacing;

  return (
    <main className={`flex w-full flex-col items-center bg-[#0f0f0f] px-5 pb-[100px] pt-[49px] font-inter md:px-[72px] ${isWorldHorseRacing ? "gap-[60px]" : "gap-[100px]"}`}>
      <header
        className={`flex w-full flex-col items-center text-center ${
          isTGIF ? "max-w-[900px] gap-[14px] pb-5" : isWorldHorseRacing ? "max-w-[600px] gap-[19px] pb-0" : "max-w-[600px] gap-[19px] pb-[51px]"
        }`}
      >
        <h1
          className={`font-bold leading-[1.1] tracking-[-0.04em] text-white ${
            isTGIF ? "whitespace-nowrap text-[clamp(15px,4vw,46px)]" : "text-[40px] md:text-[56px]"
          }`}
        >
          {project.title}
        </h1>
        <div
          className={`flex flex-col text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#999] ${
            isTGIF || isRootsToBoots ? "gap-0" : "gap-[18px]"
          }`}
        >
          {!isTGIF &&
            project.subtitle.split("\n").map((line) => (
              <p key={line}>
                {line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                  part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
                )}
              </p>
            ))}
          {project.meta && <p>{project.meta}</p>}
          {project.partner && <p className="text-[20px] leading-[28px]"><InlineEmphasis text={project.partner} /></p>}
        </div>
      </header>

      <Reveal className={`flex w-full justify-center ${hasCompactLead ? "-mt-[75px]" : ""}`} amount={0.1}>
        <SlotImage slot={project.lead} alt={project.title} priority />
      </Reveal>

      {project.preIntro && (
        <Reveal className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={project.preIntro} alt={`${project.title} — Women’s Super League celebration`} />
        </Reveal>
      )}

      {project.birthdayGallery && (
        <div className="grid w-full max-w-[1292px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {project.birthdayGallery.map((image, i) => (
            <Reveal key={image.src} className="flex w-full justify-center" amount={0.1}>
              <SlotImage slot={image} alt={`${project.title} — birthday creative ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      )}

      {project.behindTheScenes && (
        <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
          {project.behindTheScenes.map((image, i) => (
            <Reveal key={image.src} className="flex w-full justify-center" amount={0.1}>
              <SlotImage slot={image} alt={`${project.title} — behind the scenes ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      )}

      {project.intro && <Paragraphs text={project.intro} className={`w-full max-w-[600px] ${body}`} />}

      {isICC ? (
        <section className="flex w-full max-w-[1292px] flex-col gap-5">
          {project.gallery.slice(0, 2).map((g, i) => (
            <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
              <SlotImage slot={g} alt={`${project.title} — image ${i + 1}`} />
            </Reveal>
          ))}
          <Reveal className="flex w-full justify-center" amount={0.1}>
            <SlotImage slot={project.gallery[2]} alt={`${project.title} — Virat Kohli creative`} />
          </Reveal>
          <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
            {project.gallery.slice(3, 5).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — featured player ${i + 1}`} />
              </Reveal>
            ))}
          </div>
          <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
            {project.gallery.slice(5, 7).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — WTC captain ${i + 1}`} />
              </Reveal>
            ))}
          </div>
          <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
            {project.gallery.slice(7, 9).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — T20 captain ${i + 1}`} />
              </Reveal>
            ))}
          </div>
          <Reveal className="flex w-full justify-center" amount={0.1}>
            <SlotImage slot={project.gallery[9]} alt={`${project.title} — House Stark creative`} />
          </Reveal>
        </section>
      ) : isChelsea ? (
        <>
          <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-3">
            {project.gallery.slice(0, 3).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — India creative ${i + 1}`} />
              </Reveal>
            ))}
          </div>
          <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
            {project.gallery.slice(3, 5).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — festival creative ${i + 1}`} />
              </Reveal>
            ))}
          </div>
          <Reveal className="flex w-full justify-center" amount={0.1}>
            <SlotImage slot={project.gallery[5]} alt={`${project.title} — matchday designs`} />
          </Reveal>
          <div className="grid w-full max-w-[1292px] grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {project.gallery.slice(6).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — virtual tour creative ${i + 1}`} />
              </Reveal>
            ))}
          </div>
        </>
      ) : isRootsToBoots ? (
        <section className="flex w-full max-w-[1292px] flex-col gap-5">
          <Reveal className="flex w-full justify-center" amount={0.1}>
            <SlotImage slot={project.gallery[0]} alt={`${project.title} — animated introduction`} />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {project.gallery.slice(1, 3).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — portrait thumbnail ${i + 1}`} />
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5">
            {project.gallery.slice(3).map((g, i) => (
              <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={g} alt={`${project.title} — landscape thumbnail ${i + 1}`} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : isRealMadrid ? (
        <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
          {project.gallery.map((g, i) => (
            <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
              <SlotImage slot={g} alt={`${project.title} — image ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      ) : (
        project.gallery.map((g, i) => (
          <Reveal key={i} className="flex w-full justify-center" amount={0.1}>
            <SlotImage slot={g} alt={`${project.title} — image ${i + 1}`} />
          </Reveal>
        ))
      )}

      {!isChelsea && (suppressEmptyBanners ? [b1, b2].filter((b) => b.src) : [b1, b2]).map((b, i) => (
        <Reveal key={`b${i}`} className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={b} alt={`${project.title} — banner ${i + 1}`} />
        </Reveal>
      ))}

      {project.episode3 && (
        <Reveal className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={project.episode3} alt={`${project.title} — Hyderabad episode 3 thumbnail`} />
        </Reveal>
      )}

      {project.legends && (
        <section className="flex w-full max-w-[1292px] flex-col gap-5">
          <h2 className="font-bebas text-[33px] leading-none tracking-[-0.66px] text-white">{project.legends.heading}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {project.legends.images.map((image, i) => (
              <Reveal key={image.src} className="flex w-full justify-center" amount={0.1}>
                <SlotImage slot={image} alt={`${project.title} — Indian legend ${i + 1}`} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {!isChelsea && !isTGIF && (project.process ? (
        <section
          className={`flex w-full flex-col items-center gap-10 py-[100px] text-center ${
            project.slug === "tgif" ? "max-w-[860px]" : "max-w-[927px] md:flex-row md:items-center md:gap-[100px] md:text-left"
          }`}
        >
          <h2
            className={`font-bebas leading-none tracking-[-0.66px] text-white ${
              project.slug === "tgif" ? "text-[48px] md:text-[72px]" : "text-[33px] md:w-[227px] md:shrink-0"
            }`}
          >
            {project.process.heading}
          </h2>
          <Paragraphs
            text={project.process.body}
            className={`${body} ${project.slug === "tgif" ? "w-full max-w-[760px] items-center text-center" : "md:w-[600px]"}`}
          />
        </section>
      ) : suppressEmptyBanners ? null : (
        <div aria-hidden className="h-[200px]" />
      ))}

      {!isChelsea && (project.slug === "sevilla-fc" ? (
        <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
          {[b3, b4].map((b, i) => (
            <Reveal key={`b${i + 2}`} className="flex w-full justify-center" amount={0.1}>
              <SlotImage slot={b} alt={`${project.title} — banner ${i + 3}`} />
            </Reveal>
          ))}
        </div>
      ) : (
        (suppressEmptyBanners ? [b3, b4].filter((b) => b.src) : [b3, b4]).map((b, i) => (
          <Reveal key={`b${i + 2}`} className="flex w-full justify-center" amount={0.1}>
            <SlotImage slot={b} alt={`${project.title} — banner ${i + 3}`} />
          </Reveal>
        ))
      ))}

      {isTGIF && project.process && (
        <section className="flex w-full max-w-[860px] flex-col items-center gap-10 py-[100px] text-center">
          <h2 className="font-bebas text-[48px] leading-none tracking-[-0.66px] text-white md:text-[72px]">
            {project.process.heading}
          </h2>
          <Paragraphs text={project.process.body} className={`${body} w-full max-w-[760px] items-center text-center`} />
        </section>
      )}

      {project.slug === "tgif" && (
        <div className="grid w-full max-w-[887px] grid-cols-2 gap-4 md:grid-cols-3">
          {project.grid.map((src, i) => (
            <ExpandableImage key={src} src={src} alt={`${project.title} — creative ${i + 1}`} className="relative aspect-[285/200] w-full overflow-hidden rounded-[8px] bg-[#eee]">
              <Image src={src} alt="" fill quality={90} sizes="285px" decoding="async" className="object-cover" />
            </ExpandableImage>
          ))}
        </div>
      )}

      {project.continuation && (
        <section className="flex w-full flex-col items-center gap-[72px] py-8">
          <div className="flex w-full max-w-[600px] flex-col items-center gap-4 text-center">
            <h2 className="text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">
              {project.continuation.title}
            </h2>
            <p className="text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#999]">{project.continuation.subtitle}</p>
            {project.continuation.credit && (
              <p className="text-[20px] leading-[28px] tracking-[-0.2px] text-[#999]"><InlineEmphasis text={project.continuation.credit} /></p>
            )}
          </div>

          <div className="grid w-full max-w-[1292px] grid-cols-1 gap-5 md:grid-cols-2">
            {project.continuation.featured.map((src, i) => (
              <ExpandableImage key={src} src={src} alt={`${project.title} — featured creative ${i + 1}`} className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={src}
                  alt={`${project.title} — featured creative ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </ExpandableImage>
            ))}
          </div>

          <p className={`w-full max-w-[600px] ${body}`}>{project.continuation.description}</p>

          <div className="grid w-full max-w-[1292px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {project.continuation.gallery.map((src, i) => (
              <ExpandableImage key={src} src={src} alt={`${project.title} — matchday creative ${i + 1}`} className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px]">
                <Image
                  src={src}
                  alt={`${project.title} — matchday creative ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </ExpandableImage>
            ))}
          </div>
        </section>
      )}

      {project.testimonials && (
        <section className="flex w-full max-w-[600px] flex-col gap-8 py-8">
          {project.testimonials.map((testimonial) => (
            <blockquote key={testimonial.attribution} className="flex flex-col gap-3 border-l border-white/30 pl-5">
              <p className={`${body} whitespace-pre-line`}>“{testimonial.quote}”</p>
              <footer className="text-[14px] leading-[22px] text-[#999]">{testimonial.attribution}</footer>
            </blockquote>
          ))}
        </section>
      )}

      {!isChelsea && project.quote && <p className={`mt-4 w-full max-w-[600px] ${body}`}>{project.quote}</p>}

      {!isChelsea && project.final.src && (
        <Reveal className="flex w-full justify-center" amount={0.1}>
          <SlotImage slot={project.final} alt={`${project.title} — closing image`} />
        </Reveal>
      )}

      {project.trophyTour && (
        <section className="flex w-full max-w-[1292px] flex-col gap-8 py-8">
          <h2 className="text-center text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">ICC Trophy Tour</h2>
          <ExpandableImage src={project.trophyTour[3]} alt="ICC Trophy Tour — Pakistan" className="relative mx-auto aspect-square w-full max-w-[900px] overflow-hidden rounded-[8px] bg-[#151515]">
            <Image
              src={project.trophyTour[3]}
              alt="ICC Trophy Tour — Pakistan"
              fill
              quality={90}
              sizes="(min-width: 1024px) 900px, 100vw"
              decoding="async"
              className="object-contain"
            />
          </ExpandableImage>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {project.trophyTour.filter((_, i) => i !== 3).map((src, i) => (
              <ExpandableImage
                key={src}
                src={src}
                alt={`ICC Trophy Tour creative ${i + 1}`}
                className={`relative w-full overflow-hidden rounded-[6px] bg-[#151515] ${i < 3 ? "aspect-square" : "aspect-[4/5]"}`}
              >
                <Image
                  src={src}
                  alt={`ICC Trophy Tour creative ${i + 1}`}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  decoding="async"
                  className="object-contain"
                />
              </ExpandableImage>
            ))}
          </div>
        </section>
      )}

      <nav aria-label="More work" className={`flex w-full flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-0 ${hasLargeWorkNav ? "max-w-[927px]" : "max-w-[600px]"} ${body}`}>
        {prev ? (
          <Link href={`/works/${prev.slug}`} className="py-3 transition-opacity hover:opacity-60">
            ‹ {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/works/${next.slug}`}
            className={`py-3 transition-opacity hover:opacity-60 ${hasLargeWorkNav ? "text-[20px] leading-[1.2] md:text-[26px]" : ""}`}
          >
            {next.title} ›
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
