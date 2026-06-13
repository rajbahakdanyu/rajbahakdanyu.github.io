"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CONNECT } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="relative border-b border-ink bg-paper-2">
      <div className="border-b border-ink bg-paper">
        <div className="max-w-350 mx-auto px-6 md:px-10 py-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em]">
          <span>
            <span className="text-accent mr-2">06</span>Contact
          </span>
          <span className="text-ink/60 hidden sm:inline">
            Mail · Networks · Reply within 24h
          </span>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-6 md:px-10 py-24 md:py-36 relative">
        {/* dot field */}
        <div className="absolute inset-0 dot-field pointer-events-none opacity-50" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid lg:grid-cols-12 gap-y-14 gap-x-10 items-end"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-2">
              <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Available
            </p>
            <h2 className="display text-[clamp(3rem,9vw,9rem)] text-ink leading-[0.88]">
              Let's
              <br />
              <span className="not-italic font-normal underline decoration-accent decoration-[6px] underline-offset-14">
                build
              </span>{" "}
              something.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 border-l-2 border-ink pl-5 font-mono text-sm text-ink/80 leading-relaxed"
          >
            Got an idea, a project, or just want to nerd out about something?
            Send me a note. I read everything, and I'll actually write back.
          </motion.div>

          {/* Connect channels */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-12 grid sm:grid-cols-3 gap-px bg-ink border-2 border-ink"
          >
            {CONNECT.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group bg-paper p-6 hover:bg-accent transition-colors duration-150 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <item.icon size={22} className="text-ink" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 group-hover:text-ink/70">
                      {item.title}
                    </p>
                    <p className="font-mono text-sm text-ink mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <FiArrowUpRight
                  size={18}
                  className="text-ink/60 group-hover:text-ink transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
