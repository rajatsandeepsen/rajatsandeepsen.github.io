import { Icons } from "@/components/icons";

interface Link {
	type: "Website" | "Source" | "Package";
	href: string;
	icon: JSX.Element;
}

export interface Project {
	title: string;
	href: string;
	tweet?: string;
	active: boolean;
	description: string;
	technologies: string[];
	links: Link[];
	image?: string;
	video?: string;
}

const insightProject = {
	title: "Insight - AI WhatsApp Agent",
	href: "https://github.com/rajatsandeepsen/insight",
	tweet: "1879180232562983349",
	active: true,
	description:
		"Self-hostable AI enabled WhatsApp Agent. An open-source alternative to Zoko, featuring Docker support, Redis, and integration with Vercel AI SDK, Groq AI, and Llama3.",
	technologies: [
		"TypeScript",
		"JavaScript",
		"Docker",
		"Redis",
		"Vercel AI SDK",
		"Groq AI",
		"Llama3",
		"Bun",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/insight",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const luttapiProject = {
	title: "LUTTAPI",
	tweet: "1822760698109145533",
	href: "https://github.com/rajatsandeepsen/LUTTAPI",

	active: true,
	description:
		"Open-source alternative to Claude Artifact and V0, built for advanced document processing and AI interactions. Features include intelligent document handling and AI-powered processing capabilities.",
	technologies: [
		"Next.js",
		"TypeScript",
		"tRPC",
		"Drizzle",
		"Tailwind CSS",
		"NextAuth.js",
		"Prisma",
		"Bun",
	],
	links: [
		{
			type: "Website",
			href: "https://luttapi.vercel.app",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/LUTTAPI",
			icon: <Icons.github className="size-3" />,
		},
	],
	// image:
	// 	"https://repository-images.githubusercontent.com/802692703/0834cd1a-d86d-4bb8-a5c6-18358b57d104",
} satisfies Project;

const fileSphereProject = {
	title: "FileSphere.ai",
	tweet: "",
	href: "https://github.com/nexussjcet/filesphere.ai",

	active: true,
	description:
		"Your Smartest Productivity AI for File Management. Features include file reading, summarization, email sending, and conversion through natural language prompts. Built custom LAM (Language Action Model) implementation on top of LangChain.js.",
	technologies: [
		"Next.js",
		"TypeScript",
		"tRPC",
		"Drizzle",
		"LangChain.js",
		"Go",
		"Bun",
		"NextAuth.js",
		"Google Drive",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/nexussjcet/filesphere.ai",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://repository-images.githubusercontent.com/782896336/1de9d31e-58d8-49c9-ba9f-ea70ac68a93c",
	video: "",
} satisfies Project;

const transactionsProject = {
	title: "Transactions",
	href: "https://github.com/rajatsandeepsen/transactions",
	tweet: "1785190367022711208",
	active: true,
	description:
		"Just talk, Banking App will do stuff for you intelligently. A conversational banking interface that uses AI to understand and execute banking operations through natural language.",
	technologies: [
		"Next.js",
		"TypeScript",
		"tRPC",
		"Drizzle",
		"Tailwind CSS",
		"NextAuth.js",
		"Bun",
		"AI/ML",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/transactions",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const newsRagProject = {
	title: "News RAG",
	tweet: "1888209845871858037",
	href: "https://news-rag.vercel.app",

	active: false,
	description:
		"Multi-model enabled AI News App that won 5th prize in GenAI International Hackathon. Features include news summarization, sentiment analysis, and personalized recommendations using RAG architecture.",
	technologies: [
		"Next.js",
		"React",
		"TypeScript",
		"tRPC",
		"Drizzle",
		"Tailwind CSS",
		"Shadcn UI",
		"NextAuth.js",
		"Bun",
	],
	links: [
		{
			type: "Website",
			href: "https://news-rag.vercel.app",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/news-rag",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const mcpMobileProject = {
	title: "MCP Mobile",
	tweet: "1913983194464161829",
	href: "https://github.com/rajatsandeepsen/mcp-mobile",

	active: true,
	description:
		"Mobile client app for MCP (Model Control Program) built with React Native and modern technologies, featuring dark/light mode, AI SDK integration, and reusable components using NativeWind and shadcn-ui.",
	technologies: [
		"React Native",
		"TypeScript",
		"NativeWind",
		"Zustand",
		"Expo",
		"AI SDK",
		"Shadcn UI",
		"Bun",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/mcp-mobile",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const initiativeProject = {
	title: "Initiative",
	tweet: "1934410895419175243",
	href: "https://www.npmjs.com/package/initiative",

	active: true,
	description:
		"A Vercel AI-SDK extension that turns LLMs into agents capable of making multiple chained tool calls within a single inference. Features Zod schema-based tool creation and built-in safety evaluations.",
	technologies: [
		"TypeScript",
		"Vercel AI SDK",
		"Zod",
		"NPM Package",
		"LLM",
		"AI Agents",
	],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/initiative",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/initiative",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const openEditorProject = {
	title: "Open Editor",
	tweet: "2071622832170406151",
	href: "https://www.npmjs.com/package/open-editor-demo",

	active: true,
	description:
		"AI powered FFmpeg wrapper CLI for video generation using Google AI and Sarvam AI, with support for script generation, image creation, audio synthesis, and automated video rendering.",
	technologies: [
		"TypeScript",
		"FFmpeg",
		"Google AI SDK",
		"Sarvam AI",
		"Zod",
		"Bun",
		"CLI",
	],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/open-editor-demo",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/open-editor",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const sarvamAiSdkProject = {
	title: "Sarvam AI SDK",
	tweet: "1928774981552582677",
	href: "https://www.npmjs.com/package/sarvam-ai-sdk",

	active: true,
	description:
		"Built a TypeScript SDK for Sarvam AI's services with support for chat completion, text-to-speech, speech-to-text, and Indian language processing through Vercel's AI SDK.",
	technologies: [
		"TypeScript",
		"Node.js",
		"Vercel AI SDK",
		"NPM Package",
		"Zod",
		"Indian Languages",
	],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/sarvam-ai-sdk",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/sarvamai/sarvam-ai-sdk",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const mindEaseProject = {
	title: "MindEase",
	tweet: "1765842034261389417",
	href: "https://github.com/nexussjcet/mindease",

	active: true,
	description:
		"Personal WhatsApp bot AI that can remember and do healthcare-related tasks for you. Features include conversation memory, healthcare task management, and intelligent responses using Python and Jupyter notebooks.",
	technologies: [
		"Python",
		"Jupyter Notebook",
		"Prisma",
		"WhatsApp API",
		"AI/ML",
		"Healthcare",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/nexussjcet/mindease",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const interphaseProject = {
	title: "Interphase",
	tweet: "",
	href: "https://pypi.org/project/interphase",

	active: true,
	description:
		"Python Package for generating TypeScript interfaces with git submodule folder structure. Bridges backend and frontend development by facilitating sharing of types, example data, and API documentation.",
	technologies: [
		"Python",
		"TypeScript",
		"Git Submodules",
		"PyPI Package",
		"Type Generation",
		"Developer Tools",
	],
	links: [
		{
			type: "Package",
			href: "https://pypi.org/project/interphase",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/interphase",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://repository-images.githubusercontent.com/680398557/aad00547-0bf1-4cf4-8431-17de100325fb",
	video: "",
} satisfies Project;

const becknTypeScriptProject = {
	title: "Beckn SDKs (TypeScript + Python)",
	tweet: "1933135950160486776",
	href: "https://github.com/rajatsandeepsen/beckn-typescript",

	active: true,
	description:
		"Cross-language Beckn Protocol SDKs in TypeScript and Python, offering client/server tooling and package distribution for faster integrations.",
	technologies: [
		"TypeScript",
		"Python",
		"Beckn Protocol",
		"OpenAPI",
		"Next.js",
		"Express",
		"Hono",
		"Bun",
		"NPM Package",
		"PyPI",
	],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/beckn-typescript",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Package",
			href: "https://pypi.org/project/beckn-python/",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/beckn-typescript",
			icon: <Icons.github className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/beckn-python",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://repository-images.githubusercontent.com/982672021/6c1d8ade-b3d3-4b0d-bc76-35aa6f3bf0d7",
	video: "",
} satisfies Project;

const mcmdProject = {
	title: "MCMD",
	tweet: "2068614066768433388",
	href: "https://www.npmjs.com/package/mcmd",

	active: true,
	description:
		"A meta framework for building CLIs with file-based routing pattern inspired by Next.js, providing better DX for command-line tool development.",
	technologies: [
		"TypeScript",
		"Bun",
		"File-based Routing",
		"NPM Package",
		"Zod",
		"CLI Development",
	],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/mcmd",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/mcmd",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const betterAuth = {
	title: "Better-Auth Plugin For Zoho, Instagram & Snapchat",
	tweet: "2075032515480571915",
	href: "https://better-auth.com/docs/plugins/community-plugins",
	active: true,
	description:
		"Better-Auth plugin build on top of Zoho, Instagram & Snapchat OAuth Provider APIS",
	technologies: ["TypeScript", "better-auth"],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/better-auth-instagram",
			icon: <Icons.github className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/better-auth-zoho",
			icon: <Icons.github className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/better-auth-snapchat",
			icon: <Icons.github className="size-3" />,
		},
	],
	image: "",
	video: "",
} satisfies Project;

const betterChatsProject = {
	title: "better-chats",
	tweet: "2020200872945607064",
	href: "https://www.npmjs.com/package/better-chats",
	active: true,
	description:
		"TypeScript chat framework inspired by better-auth, with permissions, Hono handlers, and oRPC client support.",
	technologies: ["TypeScript", "Hono", "oRPC", "NPM Package", "Chat"],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/better-chats",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/manolo-in/better-chats",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const honoCfProject = {
	title: "hono-cf",
	tweet: "",
	href: "https://www.npmjs.com/package/hono-cf",
	active: true,
	description:
		"Hono wrapper with out-of-the-box Cloudflare support, including typed bindings for D1, R2, Hyperdrive, and cron handlers.",
	technologies: ["TypeScript", "Hono", "Cloudflare", "Wrangler", "NPM Package"],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/hono-cf",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/manolo-in/hono-cf",
			icon: <Icons.github className="size-3" />,
		},
	],
	image: "https://opengraph.githubassets.com/1/manolo-in/hono-cf",
} satisfies Project;

const sarvamTranslate = {
	title: "Translate any website using Sarvam AI",
	tweet: "2068611393159671896",
	href: "https://github.com/sarvam-ai/localize",
	active: true,
	description:
		"A CLI that Translate any website into 23 indian languages using Sarvam AI",
	technologies: ["TypeScript", "sarvam"],
	links: [
		{
			type: "Source",
			href: "https://github.com/sarvam-ai/localize",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const magicUiProject = {
	title: "Magic UI",
	tweet: "1809988588462866535",
	href: "https://magicui.design",

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
	image:
		"https://opengraph.githubassets.com/2022ba899a6233db241917aab0b8d549d9cb754265aa7b8cab28156ce20f3a98/magicuidesign/magicui",
	video: "https://cdn.magicui.design/bento-grid.mp4",
} satisfies Project;

const tedxSjcetProject = {
	title: "TEDx SJCET Website",
	tweet: "1882996937751933410",
	href: "https://tedx.sjcetpalai.ac.in",

	active: false,
	description:
		"Designed and developed the official website for TEDx SJCET with modern UI components and animations. Used SolidJS for better performance and bundle size optimization.",
	technologies: [
		"SolidJS",
		"TypeScript",
		"TailwindCSS",
		"Vite",
		"Motion One",
		"Bun",
	],
	links: [
		{
			type: "Website",
			href: "https://tedx.sjcetpalai.ac.in",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/TEDxSJCET/tedxsjcet.github.io",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const nexusSjcetProject = {
	title: "Nexus FOSSDAY Website",
	tweet: "1848590339176612159",
	href: "https://nexus.sjcetpalai.ac.in/fossday",

	active: true,
	description: "Built and maintained the website for the FOSSDAY event",
	technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
	links: [
		{
			type: "Website",
			href: "https://nexus.sjcetpalai.ac.in",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/nexussjcet/nexussjcet.github.io",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const voiceItProject = {
	title: "Voice It -  MultiMedia Comment Extension for VSCode",
	tweet: "1752374153363992925",
	href: "https://github.com/nexussjcet/voice-it",

	active: true,
	description:
		"VS Code and browser extension that enables multimedia comments (voice, image, GIF) with hover previews.",
	technologies: [
		"TypeScript",
		"Next.js",
		"TailwindCSS",
		"Turborepo",
		"PNPM Workspace",
		"VS Code Extension",
		"Browser Extension",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/nexussjcet/voice-it",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const asthraWebsiteProject = {
	title: "ASTHRA Web & Backend",
	tweet: "1950387359566172489",
	href: "https://asthra.sjcetpalai.ac.in",
	active: true,
	description:
		"Developed an event registration system for college tech fest with and dynamic content management.",
	technologies: [
		"Next.js",
		"TypeScript",
		"TailwindCSS",
		"Framer Motion",
		"tRPC",
		"next-auth",
		"drizzle",
		"PostgreSQL",
		"supabase",
		"Vercel",
	],
	links: [
		{
			type: "Website",
			href: "https://asthra.sjcetpalai.ac.in",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/AsthraSJCET",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const ieeeSjcetProject = {
	title: "IEEE SJCET Website",
	tweet: "",
	href: "https://ieee.sjcetpalai.ac.in",

	active: false,
	description:
		"Created responsive website for IEEE Student Branch with event showcase and member management system.",
	technologies: ["React", "JavaScript", "TailwindCSS", "Express.js", "MongoDB"],
	links: [
		{
			type: "Website",
			href: "https://ieee.sjcetpalai.ac.in",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/IEEESJCET/ieee-web",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const portfolioProject = {
	title: "Personal Portfolio",
	tweet: "1912295868088349039",
	href: "https://rajatsandeepsen.github.io",

	active: true,
	description:
		"Modern and minimalistic personal portfolio website with dark mode and responsive design.",
	technologies: [
		"Next.js",
		"TypeScript",
		"TailwindCSS",
		"Lucide Icons",
		"Shadcn UI",
	],
	links: [
		{
			type: "Website",
			href: "https://rajatsandeepsen.github.io",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/rajatsandeepsen.github.io",
			icon: <Icons.github className="size-3" />,
		},
	],
} satisfies Project;

const adsjcetProject = {
	title: "Official Website of ADSA SJCET Palai",
	tweet: "",
	href: "https://adsa.sjcetpalai.ac.in",
	active: true,
	description:
		"Official website for the Artificial Intelligence & Data Science Students Association at SJCET Palai. Built with Next.js, TypeScript, TailwindCSS, Framer Motion, and shadcn-ui. Deployed on Vercel.",
	technologies: [
		"Next.js",
		"TypeScript",
		"TailwindCSS",
		"Framer Motion",
		"shadcn-ui",
		"Vercel",
	],
	links: [
		{
			type: "Website",
			href: "https://adsa.sjcetpalai.ac.in",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/ADSJCET/web",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://repository-images.githubusercontent.com/701049580/cdd7b776-3cbd-414e-992f-9c2246079f1b",
	video: "",
} satisfies Project;

const scriptWriterProject = {
	title: "Script Writer",
	tweet: "",
	href: "https://scriptw.vercel.app",

	active: false,
	description:
		"In-Browser Jupyter Notebook Alternative for JavaScript that works without NodeJS kernel. Features include notebook management, code execution, and markdown support with VS Code-like experience.",
	technologies: [
		"Next.js",
		"React",
		"Bootstrap",
		"Prisma",
		"MySQL",
		"Next-Auth",
		"CodeMirror",
		"SASS",
	],
	links: [
		{
			type: "Website",
			href: "https://scriptw.vercel.app",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/scriptw",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://repository-images.githubusercontent.com/612582551/46cc05c8-3db1-4daa-9105-08b03ac286ad",
	video: "",
} satisfies Project;

const findMyCrushAppProject = {
	title: "FindMyCrush App - 1.7k Downloads",
	tweet: "2002815714428883152",
	href: "https://findmycrush.app",
	active: true,
	description:
		"Campus dating app for anonymous crush confessions and reveal-day matching, built with a React Native + Expo stack.",
	technologies: ["Expo", "React Native", "TailwindCSS"],
	links: [
		{
			type: "Website",
			href: "https://findmycrush.app",
			icon: <Icons.globe className="size-3" />,
		},
	],
} satisfies Project;

const ibnManoloAppProject = {
	title: "IBN Manolo",
	tweet: "",
	href: "https://ibn.manolo.in",
	active: true,
	description:
		"Investment app that lets retail business owners open stock options to people across India, with blockchain-backed records and UPI payments.",
	technologies: ["Expo", "React Native", "TailwindCSS", "Blockchain", "UPI"],
	links: [
		{
			type: "Website",
			href: "https://ibn.manolo.in",
			icon: <Icons.globe className="size-3" />,
		},
	],
} satisfies Project;

interface ProjectCategories {
	genAI: Project[];
	ML: Project[];
	tools: Project[];
	devOps: Project[];
	websites: Project[];
	app: Project[];
}

const heliosBrowserProject = {
	title: "Helios Browser",
	tweet: "1832341524148863408",
	href: "https://github.com/Milansuman/Helios-Browser",

	active: true,
	description:
		"Open source modular browser for developers, designers, and power users. Features workflow automation, modular extensions, and deep integration of developer tools. Built with C++ and Qt, optimized for productivity and extensibility.",
	technologies: [
		"C++",
		"Qt",
		"CMake",
		"QtWebEngine",
		"WebChannel",
		"WebSockets",
		"Qt Positioning",
		"HTML",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/Milansuman/Helios-Browser",
			icon: <Icons.github className="size-3" />,
		},
	],
	image: "",
	video: "",
} satisfies Project;

const betterStarterKitProject: Project = {
	title: "Better Starter Kit",
	href: "https://github.com/rajatsandeepsen/better-starter-kit",
	tweet: "1862111366355603921",
	active: true,
	description:
		"Better T3 Biome Bun Starter Kit with Next.js, TailwindCSS, Drizzle ORM (Postgres), oRPC, Shadcn-UI, and Better-Auth. Designed for rapid, scalable, and modern web app development with a batteries-included approach.",
	technologies: [
		"Next.js",
		"TailwindCSS",
		"Drizzle ORM",
		"PostgreSQL",
		"oRPC",
		"Shadcn-UI",
		"Better-Auth",
		"Bun",
		"Biome",
		"TypeScript",
		"Docker",
	],
	links: [
		{
			type: "Website",
			href: "https://github.com/rajatsandeepsen/better-starter-kit",
			icon: <Icons.globe className="size-3" />,
		},
	],
	image:
		"https://pbs.twimg.com/card_img/2072786509023813633/q8JuuUJf?format=png&name=900x900",
};

const dockerIntroProject: Project = {
	title: "Docker Intro",
	href: "https://github.com/rajatsandeepsen/docker-intro",
	tweet: "1765860725770047571",
	active: true,
	description:
		"Introductory Docker workshop project (ASTHRA) with a multi-service setup using Compose for teaching container fundamentals.",
	technologies: ["Docker", "Docker Compose", "JavaScript", "HTML", "CSS"],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/docker-intro",
			icon: <Icons.github className="size-3" />,
		},
		{
			type: "Website",
			href: "https://x.com/rajatsandeepsen/status/1765860725770047571?s=20",
			icon: <Icons.globe className="size-3" />,
		},
	],
};

const radarProject: Project = {
	title: "Radar",
	href: "https://github.com/rajatsandeepsen/radar",
	tweet: "1912558225972777207",
	active: true,
	description:
		"AI powered survilance tool that runs on edge with reduced usage of memory and GPU",
	technologies: [
		"Python",
		"FastAPI",
		"Computer Vision",
		"Postgres",
		"RAG",
		"LLMs",
		"TypeScript",
		"React"
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/radar",
			icon: <Icons.github className="size-3" />,
		},
	],
};

const sarvamSimpleProject: Project = {
	title: "Sarvam Simple",
	href: "https://github.com/sarvam-ai/simple",
	tweet: "2071482782505996730",
	active: true,
	description:
		"Serverless reference app showcasing Sarvam AI batch processing, speech-to-text, and document intelligence workflows.",
	technologies: [
		"Hono",
		"TypeScript",
		"Cloudflare Workers",
		"Serverless",
		"Batch Processing",
		"Speech-to-Text",
		"Document Intelligence",
	],
	links: [
		{
			type: "Website",
			href: "https://simple.sarvam.workers.dev",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/sarvam-ai/simple",
			icon: <Icons.github className="size-3" />,
		},
	],
};

const sarvamLangchainProject: Project = {
	title: "Sarvam LangChain JS",
	href: "https://github.com/sarvam-ai/langchain-js",
	tweet: "2071482786591236281",
	active: true,
	description:
		"TypeScript plugin integrating Sarvam AI with LangChain.js for building LLM pipelines and agent workflows.",
	technologies: ["TypeScript", "LangChain.js", "NPM Package", "LLM"],
	links: [
		{
			type: "Package",
			href: "https://npmjs.com/sarvam-langchain",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/sarvam-ai/langchain-js",
			icon: <Icons.github className="size-3" />,
		},
	],
};

const sarvamAdkProject: Project = {
	title: "Sarvam ADK JS",
	href: "https://github.com/sarvam-ai/adk-js",
	tweet: "2071482778345209903",
	active: true,
	description:
		"TypeScript plugin for integrating Sarvam AI with Google's ADK for agent and orchestration use-cases.",
	technologies: [
		"TypeScript",
		"Google ADK",
		"NPM Package",
		"Agent Development",
	],
	links: [
		{
			type: "Package",
			href: "https://npmjs.com/sarvam-adk",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/sarvam-ai/adk-js",
			icon: <Icons.github className="size-3" />,
		},
	],
};

const sarvamLocalizeDemoProject: Project = {
	title: "Sarvam Localize Demo",
	href: "https://github.com/sarvam-ai/localize-demo",
	tweet: "",
	active: true,
	description:
		"Demo website built using Sarvam web localization CLI to showcase multilingual website translation workflows.",
	technologies: ["TypeScript", "Localization", "i18n", "Vercel"],
	links: [
		{
			type: "Website",
			href: "https://sarvam-localize.vercel.app",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/sarvam-ai/localize-demo",
			icon: <Icons.github className="size-3" />,
		},
	],
	image: "https://opengraph.githubassets.com/1/sarvam-ai/localize-demo",
	video: "",
};

const aiMlProject: Project = {
	title: "AI-ML Workshop (as Guest Lecturer)",
	href: "https://github.com/rajatsandeepsen/AI-ML",
	tweet: "2066932011315654780",
	active: true,
	description:
		"Hands-on AI and Machine Learning internship training repository with practical notebooks and model-building exercises.",
	technologies: [
		"Python",
		"Jupyter Notebook",
		"Scikit-learn",
		"NumPy",
		"Pandas",
		"Matplotlib",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/AI-ML",
			icon: <Icons.github className="size-3" />,
		},
	],
};

const biomeMdProject: Project = {
	title: "biome-md",
	href: "https://github.com/rajatsandeepsen/biome-md",
	tweet: "2066847661429518730",
	active: true,
	description:
		"CLI that formats code blocks inside Markdown files using Biome for cleaner docs and consistent snippets.",
	technologies: ["TypeScript", "Node.js", "Biome", "CLI", "Markdown"],
	links: [
		{
			type: "Package",
			href: "https://npmjs.com/biome-md",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/biome-md",
			icon: <Icons.github className="size-3" />,
		},
	],
};

const portShipProject: Project = {
	title: "Port Agent",
	href: "https://github.com/rajatsandeepsen/port-ship",
	tweet: "2048264219687293219",
	active: true,
	description:
		"AI-powered dev tool for porting packages across programming languages and generating publishable outputs.",
	technologies: [
		"TypeScript",
		"Python",
		"AI",
		"Code Translation",
		"Bun",
		"Wrangler",
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/port-ship",
			icon: <Icons.github className="size-3" />,
		},
	],
};

export const ProjectData = {
	genAI: [
		sarvamAiSdkProject,
		sarvamTranslate,
		luttapiProject,
		heliosBrowserProject,
		fileSphereProject,
		transactionsProject,
		newsRagProject,
		mcpMobileProject,
		initiativeProject,
		openEditorProject,
		mindEaseProject,
		sarvamSimpleProject,
		sarvamLangchainProject,
		sarvamAdkProject,
		sarvamLocalizeDemoProject,
		insightProject,
	],
	ML: [radarProject, aiMlProject],
	tools: [
		sarvamAiSdkProject,
		sarvamAdkProject,
		sarvamTranslate,
		betterAuth,
		mcmdProject,
		interphaseProject,
		becknTypeScriptProject,
		biomeMdProject,
		betterChatsProject,
		honoCfProject,
		portShipProject,
		voiceItProject,
		initiativeProject,
		openEditorProject,
		magicUiProject,
		sarvamSimpleProject,
		sarvamLangchainProject,
	],
	devOps: [betterStarterKitProject, dockerIntroProject, insightProject],
	app: [findMyCrushAppProject, mcpMobileProject, ibnManoloAppProject],
	websites: [
		asthraWebsiteProject,
		luttapiProject,
		tedxSjcetProject,
		adsjcetProject,
		nexusSjcetProject,
		ieeeSjcetProject,
		portfolioProject,
		scriptWriterProject,
		// sarvamLocalizeDemoProject,
	],
} satisfies ProjectCategories;

export const AllProjectsData: Project[] = [
	luttapiProject,
	fileSphereProject,
	transactionsProject,
	newsRagProject,
	mcpMobileProject,
	initiativeProject,
	openEditorProject,
	sarvamAiSdkProject,
	mindEaseProject,
	heliosBrowserProject,
	mcmdProject,
	insightProject,
	interphaseProject,
	becknTypeScriptProject,
	magicUiProject,
	tedxSjcetProject,
	adsjcetProject,
	nexusSjcetProject,
	voiceItProject,
	asthraWebsiteProject,
	portfolioProject,
	scriptWriterProject,
	sarvamSimpleProject,
	sarvamLangchainProject,
	sarvamAdkProject,
	// sarvamLocalizeDemoProject,
	aiMlProject,
	biomeMdProject,
	findMyCrushAppProject,
	ibnManoloAppProject,
	betterChatsProject,
	honoCfProject,
	portShipProject,
	dockerIntroProject,
	radarProject,
];
