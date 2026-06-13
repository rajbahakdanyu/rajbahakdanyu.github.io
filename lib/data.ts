import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiDocker,
  SiGit,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { TbFlame, TbTestPipe } from "react-icons/tb";

export const NAV_LINKS = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

export interface ExperienceItem {
  title: string;
  company: string;
  type?: string;
  period: string;
  location?: string;
  bullets?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Full Stack Engineer",
    company: "Flight Centre Travel Group",
    type: "Full-time",
    period: "Nov 2024 – Present",
    location: "Brisbane, Australia · Hybrid",
    bullets: [
      "Working on full-stack features across the internal travel booking platforms in React, TypeScript and AWS Lambda.",
      "Sit inside a cross-functional team where I help push cloud-native stuff out the door each sprint.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "DLTx Labs",
    type: "Full-time",
    period: "Nov 2023 – Oct 2024",
    location: "Brisbane, Australia · Hybrid",
    bullets: [
      "Built and shipped containerised microservices in Docker, then load-tested them so things didn't fall over under traffic.",
      "Was hands-on across the whole stack: React on the front, Node.js APIs in the middle, cloud bits at the back.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Code Himalaya",
    type: "Full-time",
    period: "Aug 2021 – Jun 2022",
    location: "Kathmandu, Nepal · On-site",
    bullets: [
      "Built cross-platform mobile apps in Flutter, hooking them up to NoSQL databases and REST APIs (a lot of Postman fiddling).",
    ],
  },
  {
    title: "Django Developer",
    company: "4 Space Technology",
    type: "Internship",
    period: "Nov 2020 – Feb 2021",
    location: "Kathmandu, Nepal · Remote",
    bullets: [
      "My first proper dev gig. Wrote back-end features in Django and a fair bit of jQuery on top, helping ship client work over a four-month internship.",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Freelance",
    type: "Freelance",
    period: "Jun 2019 – Oct 2019",
    bullets: [
      "Took on a few freelance Laravel gigs and built custom back-ends for whatever clients needed.",
    ],
  },
];

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const SKILLS: Skill[] = [
  // Languages & Frameworks
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Hono", icon: TbFlame, color: "#E36002" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  // Styling
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  // Cloud & Infrastructure
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  // Testing
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Playwright", icon: TbTestPipe, color: "#2EAD33" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  gradient: string;
  number: string;
}

export const PROJECTS: Project[] = [
  // {
  //   title: "AI Travel Itinerary Planner",
  //   description:
  //     "Natural language trip planning app that generates multi-day travel itineraries using AI, with saved trips, shareable links, and Redis-cached responses for performance.",
  //   tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "OpenAI"],
  //   github: "https://github.com/rajbahakdanyu/ai-trip-planner",
  //   live: "#",
  //   gradient: "from-violet-600 to-indigo-600",
  //   number: "01",
  // },
  // {
  //   title: "Real-time Event Booking Platform",
  //   description:
  //     "Full-stack event booking platform with real-time seat availability via SignalR, Stripe checkout, JWT auth, and an admin panel — powered by an ASP.NET Core API and a Next.js frontend.",
  //   tags: ["ASP.NET Core", "SignalR", "Next.js", "PostgreSQL", "Docker"],
  //   github: "https://github.com/rajbahakdanyu",
  //   live: "#",
  //   gradient: "from-pink-600 to-rose-600",
  //   number: "02",
  // },
  // {
  //   title: "URL Shortener & Analytics",
  //   description:
  //     "High-performance URL shortening service with click tracking, referrer and geo analytics, QR code generation, and rate limiting — built with ASP.NET Core Minimal APIs and Redis.",
  //   tags: ["ASP.NET Core", "Redis", "Next.js", "PostgreSQL", "AWS"],
  //   github: "https://github.com/rajbahakdanyu",
  //   live: "#",
  //   gradient: "from-emerald-600 to-teal-600",
  //   number: "03",
  // },
  // {
  //   title: "Job Application Tracker",
  //   description:
  //     "Kanban-style job application tracker with resume uploads, interview scheduling with reminders, response rate analytics, and CSV export — built with ASP.NET Core and Entity Framework.",
  //   tags: ["ASP.NET Core", "EF Core", "Next.js", "PostgreSQL", "Docker"],
  //   github: "https://github.com/rajbahakdanyu",
  //   live: "#",
  //   gradient: "from-amber-600 to-orange-600",
  //   number: "04",
  // },
];

export interface ConnectItem {
  icon: IconType;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

export const CONNECT: ConnectItem[] = [
  {
    icon: FiMail,
    title: "Email",
    description: "rajbahakdanyu@gmail.com",
    href: "mailto:rajbahakdanyu@gmail.com",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    href: "https://linkedin.com/in/danyu-rajbahak",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    description: "Check out my code",
    href: "https://github.com/rajbahakdanyu",
    gradient: "from-gray-400 to-slate-500",
  },
];
