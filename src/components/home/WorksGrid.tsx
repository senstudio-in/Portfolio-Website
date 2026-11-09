"use client";

import { motion } from "motion/react";
import WorkCard, { MoreProjectsCard } from "../WorkCard";
import { projects } from "@/lib/projects";

// Change this ordered list whenever the homepage selection should change.
const homepageProjectSlugs = ["sevilla-fc", "tgif", "sports-podcast", "icc-cricket", "olive"];

export default function WorksGrid() {
  const homepageProjects = homepageProjectSlugs.flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });

  return (
    <motion.section
      aria-label="Selected work"
      className="relative flex w-full flex-col items-center gap-20 overflow-clip px-5 md:px-0"
      initial={{ opacity: 0.001, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 130, damping: 30, mass: 0.1, delay: 1 }}
    >
      <div className="grid w-full max-w-[1442px] grid-cols-1 gap-x-5 gap-y-[60px] py-10 md:max-[1199px]:grid-cols-[repeat(2,minmax(0,611px))] md:max-[1199px]:justify-center md:max-[1199px]:px-[99px] md:py-[60px] min-[1200px]:max-w-[2200px] min-[1200px]:grid-cols-[repeat(3,minmax(0,1fr))] min-[1200px]:gap-x-6 min-[1200px]:gap-y-[72px] min-[1200px]:px-[clamp(48px,6vw,160px)]">
        {homepageProjects.map((p, i) => (
          <WorkCard
            key={p.slug}
            project={p}
            displayTitle={p.slug === "tgif" ? "Travellers' Guide to India" : undefined}
            priority={i < 2}
          />
        ))}
        <MoreProjectsCard />
      </div>
    </motion.section>
  );
}
