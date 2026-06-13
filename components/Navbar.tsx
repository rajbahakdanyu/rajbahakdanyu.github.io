"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/data";
import { scrollToSection, useActiveSection } from "@/lib/hooks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-ink"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-350 mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="group flex items-center gap-2.5"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center bg-ink text-paper font-display italic text-base leading-none">
            d
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink hidden sm:inline">
            Rajbahak<span className="text-accent">/</span>2026
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => scrollToSection(link.toLowerCase())}
                className={`group relative px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-150 ${
                  active === link.toLowerCase()
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span className="text-accent mr-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link}
                {active === link.toLowerCase() && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-ink"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Status pill (desktop) */}
        <a
          href="mailto:rajbahakdanyu@gmail.com"
          className="hidden md:inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-paper transition-colors duration-150"
        >
          <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Available
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-paper border-b border-ink overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map((link, i) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(link.toLowerCase());
                      setOpen(false);
                    }}
                    className="w-full flex items-baseline gap-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-ink border-b border-ink/15"
                  >
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
