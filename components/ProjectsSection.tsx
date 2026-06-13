"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import {
  SiD3,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROJECTS } from "@/lib/data";

const TAG_ICONS: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Stripe: SiStripe,
  "OpenAI API": SiOpenai,
  "Socket.io": SiSocketdotio,
  "D3.js": SiD3,
};

export default function ProjectsSection() {
  const hasProjects = PROJECTS.length > 0;

  return (
    <section id="projects" className="relative border-b border-ink">
      <div className="border-b border-ink bg-paper-2">
        <div className="max-w-350 mx-auto px-6 md:px-10 py-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em]">
          <span>
            <span className="text-accent mr-2">05</span>Work
          </span>
          <span className="text-ink/60 hidden sm:inline">
            Selected · {String(PROJECTS.length).padStart(2, "0")} ·{" "}
            {hasProjects ? "Live" : "In studio"}
          </span>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-y-10 gap-x-10 mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="display text-[clamp(2.75rem,6vw,5.5rem)] text-ink lg:col-span-8"
          >
            Selected{" "}
            <span className="not-italic font-normal text-accent">work</span>.
            <br />
            New things on the bench.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="lg:col-span-4 lg:self-end text-ink/70 text-base leading-relaxed border-l-2 border-ink pl-5 font-mono"
          >
            Side projects I'm tinkering with on the weekends. Some AI stuff,
            some real-time things, plus the unsexy plumbing nobody really wants
            to write.
          </motion.p>
        </motion.div>

        {hasProjects ? (
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="border-t-2 border-ink"
          >
            {PROJECTS.map((project) => (
              <motion.li
                key={project.title}
                variants={fadeInUp}
                className="group grid lg:grid-cols-12 gap-y-4 gap-x-6 py-10 border-b-2 border-ink relative transition-colors hover:bg-paper-2"
              >
                {/* Huge index */}
                <div className="lg:col-span-2">
                  <p className="display text-7xl md:text-8xl text-ink leading-none transition-colors group-hover:text-accent">
                    {project.number}
                  </p>
                </div>

                {/* Title & description */}
                <div className="lg:col-span-6">
                  <h3 className="display text-3xl md:text-4xl text-ink leading-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-ink/75 text-base leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="lg:col-span-3 flex flex-wrap gap-2 content-start">
                  {project.tags.map((tag) => {
                    const Icon = TAG_ICONS[tag];
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 border border-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink"
                      >
                        {Icon && <Icon size={11} />}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="lg:col-span-1 flex lg:flex-col gap-2 lg:items-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper text-ink hover:bg-ink hover:text-paper transition-colors duration-150"
                  >
                    <FiGithub size={15} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="inline-flex h-10 w-10 items-center justify-center border-2 border-ink bg-ink text-paper hover:bg-accent hover:border-accent transition-colors duration-150"
                  >
                    <FiArrowUpRight size={16} />
                  </a>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        ) : (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-2 border-ink bg-paper-2 p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 dot-field pointer-events-none" />
            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 mb-6">
                [ Status: Currently cooking ]
              </p>
              <p className="display text-5xl md:text-7xl text-ink leading-[0.95]">
                Working on a fresh{" "}
                <span className="not-italic font-normal text-accent">
                  batch
                </span>
                .
              </p>
              <p className="mt-8 text-ink/70 max-w-lg mx-auto">
                Got four ideas I'm chipping away at right now: an AI itinerary
                planner, a real-time event booking thing, a URL shortener with
                proper analytics, and a job-application tracker. Email me if you
                want a sneak peek before they're done.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
                <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Drop / 2026
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/rajbahakdanyu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-ink bg-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            <FiGithub size={14} />
            All repos on GitHub
            <FiArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
