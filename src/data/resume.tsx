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
      logoUrl: "/freelance-work.png", // Use a professional briefcase or "verified" icon
      start: "2024",
      end: "Present",
      description:
        "Architecting and deploying end-to-end web solutions for diverse clients. Key deliverables include an AI Voice Agent interface and high-conversion landing pages. Specialized in building responsive, accessible, and high-performance frontends using Next.js 15, Tailwind CSS, and Framer Motion to meet specific business objectives.",
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
    image: undefined, // ✅ ADD THIS
            video: "/cursorful-video-1770280798321.mp4", 
    },
    {
      title: "Deal Hunt — Automated Price Intelligence Tool",
      href: "https://deal-hunt-g7tf.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Built a full-stack price monitoring engine capable of bypassing anti-bot measures (Cloudflare/PerimeterX) using headless browser orchestration. Features include automated CRON jobs for price tracking, real-time email alerts via Nodemailer, and dynamic data visualization of price trends.",
      technologies: ["Next.js", "Puppeteer", "Cheerio", "MongoDB", "Bright Data", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://deal-hunt-g7tf.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
          image: undefined, // ✅ ADD THIS

      video: "/producthunt.mp4", 
    },
    {
      title: "AI Journey Planner — Generative Travel Engine",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Developed an intelligent itinerary generator utilizing the Google Gemini Pro LLM. Integrated Google Places API for real-time location data and high-quality imagery. Implemented structured prompt engineering to deliver context-aware travel suggestions based on budget, duration, and user persona.",
      technologies: ["React", "Google Gemini API", "Firebase Auth", "Google Places API", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
          video: undefined, // ✅ ADD THIS

      image: "/ai-travel-demo.png",
    },
    {
      title: "Elite Furniture — High-Fidelity 3D Experience",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "An immersive e-commerce concept pushing the boundaries of web-based 3D rendering. Leveraged Three.js for R3F (React Three Fiber) model loading and GSAP for complex scroll-triggered animation sequences. Optimized assets for 60FPS performance across mobile and desktop devices.",
      technologies: ["Three.js", "React Three Fiber", "GSAP", "TailwindCSS", "Vite"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/furniture-3d.png",
                video: undefined, // ✅ ADD THIS

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