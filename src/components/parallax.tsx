"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, { FloatingElement } from "./fancy/parallax-floating";
import BlurFade from "./magicui/blur-fade";
import { ClientTweetCard } from "./magicui/tweet";

// Replace with actual tweet IDs you want to display
const tweetIds = [
    "1856152667724054620",
    "1922425100881571946",
    "1840679930503311743",
    "1807949683521638853",
    "1670403281435385856",
    "1769291193580392736",
    "1790796743069270253",
    "1790796743069270254",
];

const BLUR_FADE_DELAY = 0.04;

export const Preview = () => {
    const [scope, animate] = useAnimate();

    return (
        <div
            className="flex w-full h-lvh  relative justify-center items-center overflow-hidden"
            ref={scope}
        >
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 16}>
                    <div className="space-y-3">
                        {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                        </div> */}
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Tweet & Explore
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I got serious tweeting addictions
                        </p>
                    </div>
                </BlurFade>
            </div>
            <Floating sensitivity={-1} className="overflow-hidden">
                <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[0]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={1} className="top-[10%] left-[32%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[1]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={2} className="top-[2%] left-[53%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[2]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={1} className="top-[0%] left-[83%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[3]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={1} className="top-[40%] left-[2%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[4]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={2} className="top-[70%] left-[77%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[5]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={4} className="top-[73%] left-[15%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[6]} />
                    </div>
                </FloatingElement>
                <FloatingElement depth={1} className="top-[80%] left-[50%]">
                    <div className="floating-tweet max-w-96">
                        <ClientTweetCard id={tweetIds[7]} />
                    </div>
                </FloatingElement>
            </Floating>
        </div>
    );
};

export default Preview;
