"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/rajbahakdanyu", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/danyu-rajbahak",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:rajbahakdanyu@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper border-t border-paper/15">
      <div className="max-w-350 mx-auto px-6 md:px-10 py-8 grid sm:grid-cols-3 gap-6 items-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
        <p>© {new Date().getFullYear()} D. Rajbahak</p>
        <p className="sm:text-center">
          Hand-built · Next.js · Tailwind v4 · 2026
        </p>
        <div className="flex items-center gap-4 sm:justify-end">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-paper/70 hover:text-accent transition-colors duration-150"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
