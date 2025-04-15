"use client"

import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const Gallary = () => {
  return (
    <>
      {/* <BlurFade delay={BLUR_FADE_DELAY}> */}
      {/* <Avatar className="size-40 border rounded-sm">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="rounded-sm">{DATA.initials}</AvatarFallback>
                </Avatar> */}
      <CirclingElementsDemo />
      {/* </BlurFade> */}
    </>
  );
}

export default Gallary;

import Image from "next/image";
import type React from "react";

import CirclingElements from "@/components/fancy/circling-elements";
import useScreenSize from "@/hooks/use-screen-size";

const exampleImages = [
  { url: "/gallary/kurtha.jpg" },
  { url: "/gallary/tedx.jpg" },
  { url: "/gallary/hand.jpg" },
  { url: "/gallary/beach.jpg" },
  { url: "/gallary/hoodie.jpg" },
  { url: "/gallary/iphone.jpg" },
  { url: "/gallary/light.jpg" },
  { url: "/gallary/suit.jpg" },
  { url: "/gallary/tea.jpg" },
  { url: "/gallary/watch.jpg" },
]

const CirclingElementsDemo: React.FC = () => {
  const screenSize = useScreenSize()

  return (
    <div className="w-full h-36 md:h-64 flex items-center justify-center relative">

      <CirclingElements
        radius={screenSize.lessThan("md") ? 80 : 160}
        duration={13}
        easing="linear"
        pauseOnHover={true}
        className="top-1/4 left-1/2 -translate-x-10 md:-translate-x-14"
      >
        {exampleImages.map((image, index) => (
          <div
            key={image.url}
            className="w-16 h-16 md:w-28 md:h-28 hover:scale-125 hover:-z-10 duration-200 ease-out cursor-pointer"
          >
            <BlurFade delay={BLUR_FADE_DELAY * index * 2}>
              <img src={image.url} loading="eager" alt={image.url} className="object-cover" />
            </BlurFade>
          </div>
        ))}
      </CirclingElements>
    </div>
  )
}
