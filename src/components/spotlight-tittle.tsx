import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function SpotlightPreview() {
    const words = [
      {
        text: "Potencia",
      },
      {
        text: "tu",
      },
      {
        text: "negocio",
      },
      {
        text: "con",
      },
      {
        text: "Maria Software .",
        className: "text-blue-500 dark:text-blue-500",
      },
    ];
  
  
  return (

    <div className="h-[15rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <TypewriterEffect words={words} />
        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
        Potencia tu Marketing y Ventas con la Plataforma
          copy.
        </p>
      </div>
    </div>
  );
}
