"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STATS = [
  { k: "01", label: "Years in industry", value: "3+" },
  { k: "02", label: "Companies shipped at", value: "04" },
  { k: "03", label: "Countries worked in", value: "02" },
  { k: "04", label: "Cups of coffee", value: "∞" },
];

const FACTS = [
  ["Based", "Brisbane, Australia"],
  ["Origin", "Kathmandu, Nepal"],
  ["Stack", "TypeScript · React · Node · AWS"],
  ["Status", "Open to interesting work"],
];

export default function AboutSection() {
  return (
    <section id="about" className="relative border-b border-ink">
      {/* Section header bar */}
      <div className="border-b border-ink bg-paper-2">
        <div className="max-w-350 mx-auto px-6 md:px-10 py-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em]">
          <span>
            <span className="text-accent mr-2">02</span>About
          </span>
          <span className="text-ink/60 hidden sm:inline">
            Index · Bio · Numbers
          </span>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-y-16 gap-x-10"
        >
          {/* Headline */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <h2 className="display text-[clamp(2.75rem,6vw,5.5rem)] text-ink">
              I'd rather{" "}
              <span className="not-italic font-normal text-accent">build</span>{" "}
              a working
              <br />
              <span className="underline decoration-ink decoration-[3px] underline-offset-10">
                product
              </span>{" "}
              than a perfect pixel.
            </h2>
          </motion.div>

          {/* Quick facts */}
          <motion.dl
            variants={fadeInUp}
            className="lg:col-span-5 self-end border-y-2 border-ink divide-y divide-ink/15"
          >
            {FACTS.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-3 gap-4 py-3 font-mono text-sm"
              >
                <dt className="uppercase tracking-[0.18em] text-[11px] text-ink/60 self-center">
                  {k}
                </dt>
                <dd className="col-span-2 text-ink">{v}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Body copy */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 lg:col-start-1 space-y-5 text-ink/85 text-lg leading-relaxed max-w-2xl"
          >
            <p>
              Hey, I'm Danyu. I'm into the unglamorous parts of software. The
              bits nobody really tweets about, but everyone notices when they
              break at 2am.
            </p>
            <p>
              These days I'm mostly in React and TypeScript, building things on
              top of AWS Lambda for an internal travel platform. Before that it
              was microservices in Docker, then Flutter mobile apps, and a while
              back some Django work in Nepal.
            </p>
            <p className="text-ink/60 italic font-display text-xl">
              "Make it work first. Worry about pretty later."
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="mailto:rajbahakdanyu@gmail.com"
                className="inline-flex items-center gap-2 border-2 border-ink bg-ink text-paper px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-accent hover:border-accent transition-colors duration-150"
              >
                Say hello <FiArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/rajbahakdanyu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-ink bg-paper text-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-ink hover:text-paper transition-colors duration-150"
              >
                GitHub <FiArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Stats slab */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 grid grid-cols-2 border-2 border-ink bg-paper-2 self-start"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 2 ? "border-b-2" : ""} border-ink`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-3">
                  N°{stat.k}
                </p>
                <p className="display text-5xl md:text-6xl text-ink leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
