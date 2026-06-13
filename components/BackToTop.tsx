"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 border-2 border-ink bg-paper px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink hard-shadow hover:bg-ink hover:text-paper transition-colors duration-150"
        >
          <FiArrowUp size={13} /> Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
