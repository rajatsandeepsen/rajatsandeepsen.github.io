import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { hackathons } from "@/data/hackathons";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="hackathons">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 1}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									Hackathons
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									HAAAAAACK
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Some of my small wins
								</p>
							</div>
						</div>
					</BlurFade>
					{hackathons.map((project, id) => (
						<BlurFade
							key={project.title + project.dates}
							delay={BLUR_FADE_DELAY * 15 + id * 0.05}
						>
							<HackathonCard {...project} />
						</BlurFade>
					))}
				</div>
			</section>
		</main>
	);
}
