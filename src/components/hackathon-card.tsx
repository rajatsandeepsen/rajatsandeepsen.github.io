import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { hackathons } from "@/data/hackathons";
import { TweetCard } from "./magicui/tweet-card-client";

export function HackathonCard({
	title,
	description,
	dates,
	location,
	image,
	tweet,
	prize,
	links,
}: (typeof hackathons)[number]) {
	return (
		<div className=" flex flex-col py-10 gap-5 justify-center items-center">
			<div className="flex gap-5 justify-between">
				<Avatar className="border size-12 bg-white rounded-full">
					<AvatarImage src={image} alt={title} className="object-contain" />
					<AvatarFallback>{title[0]}</AvatarFallback>
				</Avatar>
				<div className="flex flex-1 flex-col justify-start gap-1">
					<h1 className="font-semibold text-xl">{prize} Prize</h1>
					<h2 className="font-semibold">{title}</h2>
					<p className="text-sm text-muted-foreground">
						{location ?? "Online"} - {dates}
					</p>
					{description && (
						<span className="prose dark:prose-invert text-sm text-muted-foreground">
							{description}
						</span>
					)}
				</div>
			</div>
			<TweetCard id={tweet} className="overflow-hidden" />
			{links && links.length > 0 && (
				<div className="mt-2 flex flex-row flex-wrap items-start gap-2">
					{links?.map((link, idx) => (
						<Link href={link.href} key={idx}>
							<Badge key={idx} title={link.title} className="flex gap-2">
								{link.icon}
								{link.title}
							</Badge>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
