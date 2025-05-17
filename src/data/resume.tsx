import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajat Sandeep",
  initials: "Rajat",
  url: "https://rajat.club",
  location: "Thodupuzha, Kerala 🇮🇳",
  locationLink: "https://www.google.com/maps/place/thodupuzha",
  description:
    "Freelancer (aka kinda jobless)",
  summary:
    "DevOps - Full Stack Dev - AI Engineer",
  avatarUrl: "https://github.com/rajatsandeepsen.png",
  languages: [
    "English",
    "Malayalam",
    "Typescript",
    "Python",
    "SQL"
  ],
  libraries: [
    "React",
    "TailwindCSS",
    "TensorFlow",
    "React-Native",
    "openCV",
    "Tkinder",
  ],
  frameworks: [
    "Next.js",
    "FastAPI",
    "DrizzleORM",
    "Expo",
    "tRPC",
    "Node.js",
  ],
  tools: [
    "Turborepo",
    "Docker",
    "GitHub Actions",
    "PostgresSQL",
    "Redis",
    "Figma",
  ],
  platforms: ["Cloudflare", "Vercel", "HuggingFace", "GitHub", "VPS"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rajatsandeepsen1839@gmail.com",
    tel: "919846101882",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajatsandeepsen",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rajatsandeepsen",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rajatsandeepsen",
        icon: Icons.x,

        navbar: true,
      },
      bluesky: {
        name: "Bluesky",
        url: "https://bsky.app/profile/rajat.club",
        icon: Icons.bluesky,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  volenteer: [
    {
      company: "Startup Bootcamp (IEDC)",
      href: "https://iedc.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "Chief Technology Officer",
      logoUrl: "https://github.com/iedc-sjcet.png",
      start: "Jun 2022",
      end: "Mar 2025",
      description:
        "Managed techical team & Worked on the development of IEDC Website & Infrastructure.",
    },
    {
      company: "The Nexus Project",
      href: "https://nexus.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "FOSS Lead",
      logoUrl: "https://github.com/nexussjcet.png",
      start: "Sep 2023",
      end: "Dec 2024",
      description:
        "Restarted the FOSS community at SJCET. Conducted workshops and events to promote open source development.",
    },
    {
      company: "GDSC SJCET",
      href: "https://gdsc.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "TensorFlow & Web Lead",
      logoUrl: "https://github.com/GDSC-SJCET.png",
      start: "Sep 2022",
      end: "Jul 2024",
      description:
        "Conducted workshops and events to promote Google technologies & AI",
    },
    {
      company: "IEEE SJCET",
      href: "https://ieee.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "Web Developer",
      logoUrl: "https://github.com/IEEESJCET.png",
      start: "Jun 2022",
      end: "Jun 2023",
      description:
        "Worked on the development of IEEE SJCET Website.",
    },
    {
      company: "UI Path SJCET",
      href: "https://uipath.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "Technical Lead",
      logoUrl: "https://github.com/UiPathSJCET.png",
      start: "Feb 2023",
      end: "Dec 2023",
      description:
        "Conducted workshops and events to promote RPA & AI",
    },
  ],

  work: [
    {
      company: "Manolo Pvt Ltd.",
      href: "https://manolo.in",
      badges: [],
      location: "Hybrid",
      title: "Chief Technology Officer",
      logoUrl: "https://github.com/manolo-in.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Co-founded the company and worked on the development of the Product, ShowMyAds",
    },
    {
      company: "FIDE - Beckn Protocol",
      href: "https://becknprotocol.io",
      badges: [],
      location: "Hybrid",
      title: "GenAI Developer (Intern)",
      logoUrl: "https://github.com/beckn.png",
      start: "May 2025",
      end: "May 2025",
      description:
        "Published language specific client packages and built Agentic Server for new DEG project",
    },
    {
      company: "Gtech Mulearn",
      href: "https://mulearn.org",
      badges: [],
      location: "Remote",
      title: "Frontend Developer (Intern)",
      logoUrl: "https://github.com/gtech-mulearn.png",
      start: "Jun 2023",
      end: "Dec 2023",
      description:
        "Worked on the frontend of the Gtech Mulearn website.",
    },
    {
      company: "ASTHRA - The Tech Fest",
      href: "https://asthra.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "Lead Backend Developer",
      logoUrl: "https://github.com/AsthraSJCET.png",
      start: "Feb 2024",
      end: "Mar 2025",
      description:
        "Worked on the development of the backend of the ASTHRA website.",
    },
    {
      company: "TEDx SJCET",
      href: "https://tedx.sjcetpalai.ac.in/",
      badges: [],
      location: "Hybrid",
      title: "Designer & Frontend Developer",
      logoUrl: "https://github.com/TEDxSJCET.png",
      start: "Jan 2025",
      end: "Feb 2025",
      description:
        "Worked on the development of the frontend of the tedx website.",
    },
  ],
  education: [
    {
      school: "St. Joseph's College of Engineering and Technology, Palai",
      href: "https://www.sjcetpalai.ac.in/",
      degree: "Btech in Artificial Intelligence & Data Science, Minor in Robotics",
      logoUrl: "https://sjcetpalai.ac.in/wp-content/uploads/2019/01/SJCET-LOGO-Orginal-1200x1161.png",
      start: "2021",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
