"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchTourBar from "../SearchTourBar/SearchTourBar";

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
      className={`${barlowVariable} ${handVariable} absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-28 z-20`}
    >
      <div className="w-full max-w-3xl flex flex-col items-center">
        <p data-aos="fade-up" className="font-hand text-orange-400 text-3xl md:text-5xl leading-tight">
          Discover Turkey
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
        >
          Explore & Experience
        </h2>

        <h3
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md"
        >
          <span className="text-stroke-white">Adventure Awaits</span>
        </h3>
<p
  data-aos="fade-up"
  data-aos-delay="600"
  className="text-white text-sm md:text-base lg:text-lg opacity-95 max-w-xs sm:max-w-2xl"
>
  Turkey awaits you with unforgettable landscapes, a rich cultural soul, and moments filled with beauty
</p>


        {/* Masquer le SearchTourBar sur les écrans < md */}
        <div className="mt-5 md:mt-7 w-full hidden md:block">
          <SearchTourBar />
        </div>
      </div>
    </div>
  );
}
