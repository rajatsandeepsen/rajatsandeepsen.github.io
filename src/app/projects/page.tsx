import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectData } from "@/data/projects";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	const projects = Object.entries(ProjectData);
	const allProject = projects.flatMap(([_, projects]) => projects);
	const categories = projects.map((p) => p[0]);

	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="projects">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 1}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									Projects & Contributions
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Let me cook
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Here are some of my contributions & projects that I cooked.
								</p>
							</div>
						</div>
					</BlurFade>
					<Tabs defaultValue="all" className="max-w-[800px] mx-auto">
						<BlurFade delay={BLUR_FADE_DELAY * 2}>
							<TabsList className="mb-5">
								<TabsTrigger value="all">All</TabsTrigger>
								{categories.map((c) => (
									<TabsTrigger className="capitalize" key={c} value={c}>
										{c}
									</TabsTrigger>
								))}
							</TabsList>
						</BlurFade>
						<TabsContent className="flex flex-col gap-5" value="all">
							{allProject.map((project, id) => (
								<BlurFade
									key={project.title}
									delay={BLUR_FADE_DELAY * 3 + id * 0.05}
								>
									<ProjectCard
										href={project.href}
										key={project.title}
										title={project.title}
										description={project.description}
										tweet={project.tweet}
										tags={project.technologies}
										image={project.image}
										video={project.video}
										links={project.links}
									/>
								</BlurFade>
							))}
						</TabsContent>
						{projects.map((c) => (
							<TabsContent
								className="flex flex-col gap-5"
								key={"project" + c[0]}
								value={c[0]}
							>
								{c[1].map((project, id) => (
									<BlurFade
										key={project.title}
										delay={BLUR_FADE_DELAY * 3 + id * 0.05}
									>
										<ProjectCard
											href={project.href}
											key={project.title}
											title={project.title}
											description={project.description}
											tweet={project.tweet}
											tags={project.technologies}
											image={project.image}
											video={project.video}
											links={project.links}
										/>
									</BlurFade>
								))}
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>
		</main>
	);
}
