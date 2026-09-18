"use client";

import { motion } from "motion/react";
import WorkCard from "../WorkCard";
import { projects } from "@/lib/projects";

export default function WorksGrid() {
  return (
    <motion.section
      aria-label="Selected work"
      className="relative flex w-full flex-col items-center gap-20 overflow-clip px-5 md:px-0"
      initial={{ opacity: 0.001, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 130, damping: 30, mass: 0.1, delay: 1 }}
    >
      <div className="grid w-full max-w-[1442px] grid-cols-1 gap-x-5 gap-y-[60px] py-10 md:grid-cols-[repeat(2,minmax(0,611px))] md:justify-center md:px-[99px] md:py-[100px] min-[1920px]:max-w-none min-[1920px]:grid-cols-[repeat(2,minmax(0,860px))]">
        {projects.map((p) => (
          <WorkCard key={p.slug} project={p} />
        ))}
      </div>
    </motion.section>
  );
}
