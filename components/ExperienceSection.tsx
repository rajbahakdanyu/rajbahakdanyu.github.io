"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative border-b border-ink">
      <div className="border-b border-ink bg-paper-2">
        <div className="max-w-350 mx-auto px-6 md:px-10 py-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em]">
          <span>
            <span className="text-accent mr-2">03</span>Experience
          </span>
          <span className="text-ink/60 hidden sm:inline">
            Career · 2019 → Present
          </span>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-y-12 gap-x-10 mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="display text-[clamp(2.75rem,6vw,5.5rem)] text-ink lg:col-span-8"
          >
            A handful of jobs across two countries.
            <br />
            Same{" "}
            <span className="not-italic font-normal text-accent">brain</span>{" "}
            throughout.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="lg:col-span-4 lg:self-end text-ink/70 text-base leading-relaxed border-l-2 border-ink pl-5 font-mono"
          >
            Started out writing Django for a small studio in Kathmandu. Now I'm
            pushing Lambdas at a travel group in Brisbane. The stack keeps
            changing. The way I work, mostly hasn't.
          </motion.p>
        </motion.div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t-2 border-ink"
        >
          {EXPERIENCE.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.title}`}
              variants={fadeInUp}
              className="group grid lg:grid-cols-12 gap-y-3 gap-x-6 py-8 border-b-2 border-ink relative"
            >
              {/* Index */}
              <div className="lg:col-span-1 font-mono text-xs uppercase tracking-[0.2em] text-ink/60 flex items-start gap-2">
                <span>{String(EXPERIENCE.length - i).padStart(2, "0")}</span>
                {i === 0 && (
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent status-dot mt-2" />
                )}
              </div>

              {/* Period */}
              <div className="lg:col-span-3 font-mono text-sm text-ink/80">
                <p className="uppercase tracking-[0.12em] text-[11px] text-ink/55 mb-1">
                  Period
                </p>
                {job.period}
                {job.location && (
                  <p className="text-[11px] text-ink/55 mt-1">{job.location}</p>
                )}
              </div>

              {/* Role + company */}
              <div className="lg:col-span-5">
                <h3 className="display text-3xl md:text-4xl text-ink leading-tight transition-colors duration-150 group-hover:text-accent">
                  {job.title}
                </h3>
                <p className="font-mono text-sm text-ink/70 mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-ink font-semibold uppercase tracking-widest text-xs">
                    {job.company}
                  </span>
                  {job.type && (
                    <span className="border border-ink/40 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-ink/70">
                      {job.type}
                    </span>
                  )}
                </p>
              </div>

              {/* Bullets */}
              {job.bullets && job.bullets.length > 0 && (
                <ul className="lg:col-span-3 space-y-2">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-ink/75 leading-relaxed flex gap-2"
                    >
                      <span className="text-accent shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
