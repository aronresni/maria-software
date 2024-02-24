import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function SpotlightPreview() {
    const words = [
      {
        text: "Boost",
      },
      {
        text: "your",
      },
      {
        text: "apps",
      },
      {
        text: "with",
      },
      {
        text: "Maria.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ];
  
  
  return (

    <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <TypewriterEffect words={words} />
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
}
