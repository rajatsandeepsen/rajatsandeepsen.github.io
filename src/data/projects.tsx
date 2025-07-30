import { Icons } from "@/components/icons";

interface Link {
	type: "Website" | "Source" | "Package";
	href: string;
	icon: JSX.Element;
}

interface Project {
	title: string;
	href: string;
	tweet: string;
	active: boolean;
	description: string;
	technologies: string[];
	links: Link[];
	image: string;
	video: string;
}

const insightProject = {
	title: "Insight - AI WhatsApp Agent",
	href: "https://github.com/rajatsandeepsen/insight",
	tweet: "",
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
		"Bun"
	],
	links: [
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/insight",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://opengraph.githubassets.com/534888812d0a5dbba644aa7b24086389a82f15d759c869e1198d0d5f852ee5dd/rajatsandeepsen/insight",
	video: "",
} satisfies Project;

const luttapiProject = {
	title: "LUTTAPI",
	tweet: "",
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
	image:
		"https://opengraph.githubassets.com/534888812d0a5dbba644aa7b24086389a82f15d759c869e1198d0d5f852ee5dd/rajatsandeepsen/LUTTAPI",
	video: "",
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
	image:
		"https://opengraph.githubassets.com/634238c544b468371bf9cd8b65058eb84bb8ad62c29f62eebcff6185253c9350/rajatsandeepsen/transactions",
	video: "",
} satisfies Project;

const newsRagProject = {
	title: "News RAG",
	tweet: "",
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
	image:
		"https://opengraph.githubassets.com/13626b6c9f167674ca0208983516a8f26e7bc9e7ed0be325da160c3e02b112ed/rajatsandeepsen/news-rag",
	video: "",
} satisfies Project;

const mcpMobileProject = {
	title: "MCP Mobile",
	tweet: "",
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
	image:
		"https://opengraph.githubassets.com/8e12bfefd962706588dc6fc5e2ff362f562b03e38414ce09f3d399ff190a93e3/rajatsandeepsen/mcp-mobile",
	video: "",
} satisfies Project;

const initiativeProject = {
	title: "Initiative",
	tweet: "",
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
	image:
		"https://repository-images.githubusercontent.com/785114711/bcafb694-cde9-45a1-9f87-62780e86b6c1",
	video: "",
} satisfies Project;

const openEditorProject = {
	title: "Open Editor",
	tweet: "",
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
	image:
		"https://opengraph.githubassets.com/fb5324f9d8345146277ee766cd6baa7199859059de35de3436a2872ce939f93b/rajatsandeepsen/open-editor",
	video: "",
} satisfies Project;

const sarvamAiSdkProject = {
	title: "Sarvam AI SDK",
	tweet: "",
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
			href: "https://github.com/rajatsandeepsen/sarvam-ai-sdk",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://repository-images.githubusercontent.com/993589005/2eb2d1b2-db3b-484c-8920-3397799b1380",
	video: "",
} satisfies Project;

const mindEaseProject = {
	title: "MindEase",
	tweet: "",
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
	image:
		"https://opengraph.githubassets.com/143b68d6ee6fb8f8ec2e406f00a9cf2490087dd1b868e5007dbd737b87c84fec/nexussjcet/mindease",
	video: "",
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
	title: "Beckn TypeScript",
	tweet: "",
	href: "https://www.npmjs.com/package/beckn-typescript",

	active: true,
	description:
		"A TypeScript implementation of Beckn Protocol providing client and server tools, with support for Next.js, Express, and Hono frameworks. Built as a wrapper around OpenAPI TypeScript Client.",
	technologies: [
		"TypeScript",
		"OpenAPI",
		"Next.js",
		"Express",
		"Hono",
		"Bun",
		"NPM Package",
	],
	links: [
		{
			type: "Package",
			href: "https://www.npmjs.com/package/beckn-typescript",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/beckn-typescript",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://opengraph.githubassets.com/7873f39ddedf2144a32993f45b93e87a8b96909ddbfe14ea17e8c9844f1cb45f/rajatsandeepsen/beckn-typescript",
	video: "",
} satisfies Project;

const mcmdProject = {
	title: "MCMD",
	tweet: "",
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
	image:
		"https://repository-images.githubusercontent.com/1007413292/ed201418-3220-400a-a2e8-dcc43925bac1",
	video: "",
} satisfies Project;

const magicUiProject = {
	title: "Magic UI",
	tweet: "",
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
		"https://opengraph.githubassets.com/71b5d8c2acc6497464a3784950b6e9f8a153490abcf8457a34a8287ed98c46a2/magicuidesign/magicui",
	video: "https://cdn.magicui.design/bento-grid.mp4",
} satisfies Project;

const tedxSjcetProject = {
	title: "TEDx SJCET Website",
	tweet: "",
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
	image:
		"https://repository-images.githubusercontent.com/530770134/3b41c566-3d26-49c5-9915-eb8b0b596dca",
	video: "",
} satisfies Project;

const iedcSjcetProject = {
	title: "IEDC SJCET Website",
	tweet: "",
	href: "https://iedc.sjcetpalai.ac.in",

	active: true,
	description:
		"Built and maintained the Innovation and Entrepreneurship Development Cell website with focus on student startups and event management.",
	technologies: [
		"Next.js",
		"TypeScript",
		"TailwindCSS",
		"Framer Motion",
		"tRPC",
		"Drizzle ORM",
	],
	links: [
		{
			type: "Website",
			href: "https://iedc.sjcetpalai.ac.in",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/iedc-sjcet/iedc-web",
			icon: <Icons.github className="size-3" />,
		},
	],
	image: "https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png",
	video: "",
} satisfies Project;

const asthraWebsiteProject = {
	title: "ASTHRA Website",
	tweet: "",
	href: "https://asthra.sjcetpalai.ac.in",

	active: true,
	description:
		"Developed the frontend for college tech fest with event registration system and dynamic content management.",
	technologies: [
		"Next.js",
		"TypeScript",
		"TailwindCSS",
		"Framer Motion",
		"tRPC",
		"Clerk Auth",
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
	image: "https://avatars.githubusercontent.com/u/117535918?s=280&amp;v=4",
	video: "",
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
	image: "https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png",
	video: "",
} satisfies Project;

const portfolioProject = {
	title: "Personal Portfolio",
	tweet: "",
	href: "https://rajat.club",

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
			href: "https://rajat.club",
			icon: <Icons.globe className="size-3" />,
		},
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/rajatsandeepsen.github.io",
			icon: <Icons.github className="size-3" />,
		},
	],
	image:
		"https://opengraph.githubassets.com/68364903649cfbc6451ad45802ac0c39f80f30c59f45215740aabe2204ebb504/rajatsandeepsen/rajatsandeepsen.github.io",
	video: "",
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
	image: "",
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

interface ProjectCategories {
	genAI: Project[];
	ML: Project[];
	tools: Project[];
	devOps: Project[];
	backend: Project[];
	frontend: Project[];
}

const heliosBrowserProject = {
	title: "Helios Browser",
	tweet: "",
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
	image:
		"https://opengraph.githubassets.com/29f8b7f2e6e2e1b1e7e1a2c7e2e1b7f2e6e2e1b1e7e1a2c7e2e1b7f2e6e2e1b1/Milansuman/Helios-Browser",
	video: "",
} satisfies Project;

const betterStarterKitProject: Project = {
	title: "Better Starter Kit",
	href: "https://github.com/rajatsandeepsen/better-starter-kit",
	tweet:
		"A modern starter kit for full-stack apps with Next.js, TailwindCSS, Drizzle ORM (Postgres), oRPC, Shadcn-UI, Better-Auth, Bun, and Biome. 🚀",
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
		{
			type: "Source",
			href: "https://github.com/rajatsandeepsen/better-starter-kit",
			icon: <Icons.github className="size-3" />,
		},
	],
	image: "/rajat.png",
	video: "",
};

export const ProjectData = {
	genAI: [
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
		insightProject,
	],
	ML: [],
	tools: [
		mcmdProject,
		interphaseProject,
		becknTypeScriptProject,
		initiativeProject,
		sarvamAiSdkProject,
		openEditorProject,
		magicUiProject,
	],
	devOps: [betterStarterKitProject, insightProject],
	backend: [asthraWebsiteProject, heliosBrowserProject],
	frontend: [
		luttapiProject,
		tedxSjcetProject,
		adsjcetProject,
		// iedcSjcetProject,
		asthraWebsiteProject,
		// ieeeSjcetProject,
		portfolioProject,
		scriptWriterProject,
	],
} satisfies ProjectCategories;

export const AllProjectsData = [
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
	// iedcSjcetProject,
	asthraWebsiteProject,
	// ieeeSjcetProject,
	portfolioProject,
	scriptWriterProject,
];
