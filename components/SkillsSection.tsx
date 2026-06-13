"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SKILLS } from "@/lib/data";

export default function SkillsSection() {
  // Duplicate for seamless loop
  const ticker = [...SKILLS, ...SKILLS];

  return (
    <section
      id="skills"
      className="relative border-b border-ink bg-ink text-paper"
    >
      <div className="border-b border-paper/15">
        <div className="max-w-350 mx-auto px-6 md:px-10 py-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper">
          <span>
            <span className="text-accent mr-2">04</span>Stack
          </span>
          <span className="text-paper/60 hidden sm:inline">
            Tools · Languages · Infrastructure
          </span>
        </div>
      </div>

      <div className="py-24 md:py-32">
        <div className="max-w-350 mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-12 gap-y-10 gap-x-10 mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="display text-[clamp(2.75rem,6vw,5.5rem)] text-paper lg:col-span-8 leading-[0.95]"
            >
              The{" "}
              <span className="not-italic font-normal underline decoration-accent decoration-[4px] underline-offset-10">
                tools
              </span>{" "}
              I reach for,
              <br />
              in roughly that order.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="lg:col-span-4 lg:self-end text-paper/70 text-base leading-relaxed border-l-2 border-paper/40 pl-5 font-mono"
            >
              Frameworks come and go — patterns stay. These are the ones I've
              earned my scars with, day in, day out.
            </motion.p>
          </motion.div>
        </div>

        {/* Marquee ticker — full bleed */}
        <div className="marquee relative overflow-hidden border-y-2 border-paper py-6">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            {ticker.map((skill, i) => (
              <div
                key={`${skill.name}-${i < SKILLS.length ? "a" : "b"}`}
                className="flex items-center gap-4 font-display italic text-5xl md:text-6xl text-paper"
              >
                <skill.icon
                  size={42}
                  style={{ color: skill.color }}
                  className="not-italic"
                />
                <span>{skill.name}</span>
                <span className="text-accent not-italic font-normal text-3xl">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills as labelled chips */}
        <div className="max-w-350 mx-auto px-6 md:px-10 mt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-paper/15 border-2 border-paper"
          >
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="group flex items-center gap-3 bg-ink p-4 hover:bg-paper hover:text-ink transition-colors duration-150 cursor-default"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-paper/45 group-hover:text-ink/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <skill.icon
                  size={20}
                  style={{ color: skill.color }}
                  className="shrink-0"
                />
                <span className="font-mono text-sm text-paper group-hover:text-ink truncate">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
