"use client";

import { useEffect } from "react";
import AOS from "aos";
import SearchTourBar from "../SearchTourBar/SearchTourBar";
import { HeroBanner } from "./HeroBanner";

export default function HeroText({
  barlowVariable,
  handVariable,
}: {
  barlowVariable: string;
  handVariable: string;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
    });
  }, []);

  return (
   <div
  className={`${barlowVariable} ${handVariable} absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 z-20`}
>
  <div className="w-full max-w-3xl flex flex-col items-center">
    {/* Texte principal ultra-compact */}
    <p
      data-aos="fade-up"
      className="font-hand text-orange-400 text-4xl md:text-5xl leading-[1.1] mb-0"
    >
      Discover Turkey
    </p>

    <h2
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] drop-shadow-lg mb-0"
    >
      Explore & Experience
    </h2>

    {/* HeroBanner rapproché */}
    <HeroBanner />

    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-white text-sm md:text-base lg:text-lg opacity-95 max-w-xs sm:max-w-2xl leading-[1.3] mb-3"
    >
      Turkey awaits you with unforgettable landscapes, a rich cultural soul, and moments filled with beauty
    </p>

    <div className="mt-1 md:mt-2 w-full hidden md:block">
      <SearchTourBar />
    </div>
  </div>
</div>

  );
}
