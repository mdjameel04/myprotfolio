import { Icons } from "@/components/icons"
import {
  HomeIcon,
  FileCode,
  Layers,
  Braces,
  Atom,
  Code,
  Server,
} from "lucide-react"

import {
  Database,
  GitBranch,
  Network,
  Boxes,
  KeyRound,
  Send,
  Cloud,
  Plug,
  Monitor,
} from "lucide-react"

export const DATA = {
  /* ===================== BASIC INFO ===================== */
  name: "Jameel",
  initials: "MJ",
  url: "https://jameel.com",
  location: "Hyderabad, Telangana, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
 description:
    "Design Engineer & Full-Stack Developer. I bridge the gap between complex engineering and intuitive UI.",
  summary:
    "A results-driven Software Developer specializing in high-performance web applications. I focus on building scalable systems with React, Next.js, and TypeScript. Beyond just writing code, I am passionate about UI/UX engineering, performance optimization, and creating developer tools that accelerate workflow. Currently dedicated to open-source contributions and mastering system design.",
  avatarUrl: "/Gemini_Generated_Image_whq31cwhq31cwhq3.png",

  /* ===================== SKILLS ===================== */
skills: [
  /* ---------- Frontend ---------- */
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Layers },
  { name: "Tailwind CSS", icon: Layers },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: Code },
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: Code },

  /* ---------- State Management ---------- */
  { name: "Redux", icon: Boxes },
  { name: "Redux Toolkit", icon: Boxes },
  { name: "Recoil", icon: Boxes },

  /* ---------- Backend ---------- */
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Network },
  { name: "REST APIs", icon: Network },
  { name: "Socket.IO", icon: Network },

  /* ---------- Databases ---------- */
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "SQL", icon: Database },

  /* ---------- ORM / Tools ---------- */
  { name: "Prisma", icon: Database },
  { name: "Mongoose", icon: Database },

  /* ---------- Auth & APIs ---------- */
  { name: "JWT Authentication", icon: KeyRound },
  { name: "OAuth", icon: KeyRound },

  /* ---------- Dev Tools ---------- */
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "Postman", icon: Send },
  { name: "Vercel", icon: Cloud },

  /* ---------- Other ---------- */
  { name: "Python", icon: Code },
  { name: "API Integration", icon: Plug },
  { name: "Responsive Design", icon: Monitor },
],

  /* ===================== NAVBAR ===================== */
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  /* ===================== CONTACT ===================== */
  contact: {
    email: "jameeltony67@gmail.com",
    tel: "+91 7013684532",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mdjameel04",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-jameel-850100334/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/home",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:jameeltony67@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

 /* ===================== WORK ===================== */
work: [
  {
    company: "Freelance Software Development",
    href: "#",
    badges: ["Remote", "Client-Facing"],
    location: "Hyderabad, India",
    title: "Full-Stack Web Developer",
    logoUrl: "/freelance-work.png",
    start: "2024",
    end: "Present",
    description:
      "Architecting and deploying end-to-end web solutions for diverse clients. Key deliverables include an AI Voice Agent interface and high-conversion landing pages. Specialized in building responsive, accessible, and high-performance frontends using Next.js 15, Tailwind CSS, and Framer Motion to meet specific business objectives.",
    projects: [
      {
        title: "Casa Mobilia",
        href: "https://www.casamobilia.in/",
        image: "/Screenshot 2026-11-05 181121.png",
      },
      {
        title: "SocialKira",
        href: "https://socialkira.io/",
        image: "/Screenshot 2026-11-05 180653.png",
      },
      {
        title: "Cove",
        href: "https://usecove.com/",
        image: "/1742926329818.jpg",
      },
    ],
  },
  {
    company: "Independent Technical Research & Open Source",
    href: "https://github.com/mdjameel04",
    badges: ["Self-Directed", "Engineering"],
    location: "Remote",
    title: "Software Engineer & Researcher",
    logoUrl: "/terminal-icon.png",
    start: "Jan 2024",
    end: "Present",
    description:
      "Dedicated 1500+ hours to mastering advanced system design and full-stack architecture. Successfully engineered production-grade tools including 'NexUI' (a high-performance component library) and 'Deal Hunt' (an automated price-tracking engine). Focused on deep-level implementation of Headless Browser Orchestration, Anti-bot bypass techniques, and complex state management.",
  },
],

  /* ===================== EDUCATION ===================== */
  education: [
    {
      school: "Dr. B. R. Ambedkar Degree College",
      href: "#",
      degree: "Bachelor’s Degree",
      logoUrl: "/Dr.B.Ambedkar-College-Baghlingampally-Hyderabad.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Sri Chaitanya Junior College",
      href: "#",
      degree: "Intermediate",
      logoUrl: "/sri-chaitanya-junior-college-chanda-nagar-hyderabad-colleges-g2tsgxdeqb.avif",
      start: "2019",
      end: "2021",
    },
    {
      school: "Little Angels Grammar High School",
      href: "#",
      degree: "Secondary Education",
      logoUrl: "/unnamed.jpg",
      start: "—",
      end: "2019",
    },
  ],

  /* ===================== PROJECTS ===================== */
projects: [
  // 1. NexUI — same as before
  {
    title: "NexUI — Production-Ready Component Library",
    href: "https://nexui-web.vercel.app/",
    dates: "Jan 2025 - Present",
    active: true,
    description:
      "Engineered a high-performance UI library focusing on Developer Experience (DX). Implemented atomic design principles to provide 50+ pre-built, accessible components that reduce frontend development time by 70%. Optimized for zero-runtime CSS and seamless Framer Motion integration.",
    technologies: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "Lucide Icons"],
    links: [
      {
        type: "Live Demo",
        href: "https://nexui-web.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/mdjameel04/nexui",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: undefined,
    video: "/cursorful-video-1770280798321.mp4",
  },
  
  // 2. PrepForge
  {
    title: "PrepForge — AI-Powered Frontend Interview Prep",
    href: "https://prep-forge-xg2q.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Built an interview-prep platform for frontend developers covering JavaScript, React and Next.js with 150+ curated questions. Features a Learn Mode with detailed answers, MCQ + written-explanation practice sessions, instant AI feedback with per-question scores, weak-area detection, and saved session history to track progress over time.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Convex", "Clerk", "AI APIs"],
    links: [
      {
        type: "Website",
        href: "https://prep-forge-xg2q.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/10b8c466-02b8-42db-83f3-66c68a34cddb.gif",
  },

  // 3. webxaiStudio Portfolio
  {
    title: "webxaiStudio — Digital Design Studio Portfolio",
    href: "https://myportfolio-v2-seven.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Designed and developed a high-performance agency portfolio showcasing websites, SaaS platforms, e-commerce stores and web applications. Features animated project showcase, services breakdown, FAQ, and contact section, with a 100 PageSpeed score and smooth GSAP and Framer Motion interactions.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Framer Motion", "shadcn/ui"],
    links: [
      {
        type: "Website",
        href: "https://myportfolio-v2-seven.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/3871cf60-e75d-47bc-b962-264b2f22e5cf.gif",
  },

  // 4. DevPilot — video removed, new image
  {
    title: "DevPilot — AI-Powered Developer Platform",
    href: "https://devpilot-lemon.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Built a landing page and product showcase for an AI developer platform offering AI code reviews, a codebase Q&A assistant, security scanning and performance insights. Includes a realistic pull-request dashboard preview with AI findings, a GitHub-connect workflow section, and Free, Pro and Team pricing tiers with monthly/yearly toggle.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "GitHub Integration", "LLM APIs"],
    links: [
      {
        type: "Website",
        href: "https://devpilot-lemon.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    video: "/cursorful-video-1793881512595.mp4",
  },

  // 5. AI SaaS Starter Kit — video same
  {
    title: "AI SaaS Starter Kit — Production-Ready Next.js Boilerplate",
    href: "https://ai-sass-starter-kit.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Shipped a paid Next.js 15 starter kit that lets developers launch an AI SaaS in days. Comes pre-wired with Clerk authentication, a Convex real-time database, a plug-and-play AI API route, a daily credits system with deduction logic, a shadcn/ui dashboard, and a conversion-focused landing page, sold at one-time Starter and Pro pricing.",
    technologies: ["Next.js 15", "TypeScript", "TailwindCSS", "Convex", "Clerk", "shadcn/ui"],
    links: [
      {
        type: "Website",
        href: "https://ai-sass-starter-kit.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: undefined,
    video: "/cursorful-video-1793879667479.mp4",
  },

  // 6. ErazeAI (remove-bg) — video same
  {
    title: "ErazeAI — AI Background Remover",
    href: "https://remove-bg-flax.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Developed an AI background removal SaaS that turns an uploaded image into a pixel-perfect cutout in about 3 seconds. Features a custom background editor (solid, gradient, image), transparent PNG downloads, privacy-first processing, and credit-based Free, Starter and Pro pricing with authentication and usage tracking.",
    technologies: ["Next.js", "TailwindCSS", "Convex", "Clerk", "Remove.bg API"],
    links: [
      {
        type: "Website",
        href: "https://remove-bg-flax.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    video: "/cursorful-video-1793879659481.mp4",
  },

  // 7. ImageFlow — video same
  {
    title: "ImageFlow — AI Image Generation Platform",
    href: "https://image-flow-sand.vercel.app/",
    dates: "2025",
    active: true,
    description:
      "Built an AI image generator that turns text prompts into stunning visuals in under 5 seconds. Supports 20+ art styles, multiple aspect ratios up to 4K, inpainting and mask-based editing, and a Free and Pro subscription model, serving a creator-focused audience.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Convex", "Clerk", "AI Image APIs"],
    links: [
      {
        type: "Website",
        href: "https://image-flow-sand.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    video: "/cursorful-video-1793879530461.mp4",
  },
],
  /* ===================== HACKATHONS (DEFAULT – UNCHANGED) ===================== */
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      links: [],
    },
    {
      title: "Global AI Hackathon",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a Python-based emotion recognition system using computer vision and machine learning.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      links: [],
    },
  ],
} as const