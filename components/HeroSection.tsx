"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { scrollToSection } from "@/lib/hooks";

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/rajbahakdanyu", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/danyu-rajbahak",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:rajbahakdanyu@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden border-b border-ink"
    >
      {/* dot field background */}
      <div className="absolute inset-0 dot-field pointer-events-none" />

      {/* Top metadata bar */}
      <div className="absolute top-20 left-0 right-0 z-10 px-6 md:px-10">
        <div className="max-w-350 mx-auto flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
          <div className="flex items-center gap-3">
            <span>N° 01</span>
            <span className="text-ink/30">/</span>
            <span>Index</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>27°S 153°E</span>
            <span className="text-ink/30">/</span>
            <span>Brisbane, AU</span>
          </div>
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 pt-40 pb-24 will-change-[transform,opacity]"
      >
        <div className="max-w-350 w-full mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10 font-mono text-xs uppercase tracking-[0.25em] text-ink/70"
          >
            <span className="h-px w-10 bg-ink" />
            Portfolio
            <span className="text-accent">·</span>
            MMXXVI
          </motion.div>

          {/* Massive name */}
          <h1 className="display text-[clamp(4.5rem,15vw,16rem)] text-ink">
            <motion.span
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="block"
            >
              Danyu<span className="not-italic font-normal">.</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="block pl-[8vw] -mt-[0.08em]"
            >
              Rajbahak
            </motion.span>
          </h1>

          {/* Sub block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 grid md:grid-cols-12 gap-8 items-end"
          >
            {/* Description */}
            <div className="md:col-span-7 lg:col-span-6 border-l-2 border-ink pl-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-2">
                Full-Stack Engineer
              </p>
              <p className="text-lg md:text-xl text-ink leading-snug max-w-xl">
                I make software that's{" "}
                <span className="font-display italic">fast</span>,{" "}
                <span className="font-display italic">thoughtful</span>, and
                actually{" "}
                <span className="underline decoration-accent decoration-[3px] underline-offset-4">
                  goes live
                </span>
                . Right now I'm working on travel platforms over in Brisbane.
              </p>
            </div>

            {/* Actions */}
            <div className="md:col-span-5 lg:col-span-6 flex flex-col md:items-end gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="group inline-flex items-center gap-3 border-2 border-ink bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] hard-shadow-accent transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                  style={{ boxShadow: "6px 6px 0 0 var(--color-accent)" }}
                >
                  See the work
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-3 border-2 border-ink bg-paper text-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-ink hover:text-paper transition-colors duration-150"
                >
                  Say hello
                </button>
              </div>

              {/* Social bracket */}
              <div className="flex items-center gap-1 font-mono text-xs text-ink/70">
                <span className="text-ink/40">[</span>
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
                  <span key={href} className="flex items-center">
                    {i > 0 && <span className="mx-1 text-ink/30">·</span>}
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-7 w-7 items-center justify-center text-ink hover:text-accent transition-colors duration-150"
                    >
                      <Icon size={14} />
                    </a>
                  </span>
                ))}
                <span className="text-ink/40">]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator (bottom-left corner) */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-label="Scroll down"
        className="absolute bottom-6 left-6 md:left-10 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70 hover:text-ink transition-colors"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <FiArrowDown size={14} />
        </motion.span>
        Scroll
      </motion.button>
    </section>
  );
}
