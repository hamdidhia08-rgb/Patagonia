"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const hand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
});

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true, // simple et léger
    });
  }, []);

  return (
    <section
      className={`${barlow.variable} ${hand.variable} relative flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-20 bg-gradient-to-br`}
    >
      {/* IMAGE GAUCHE */}
      <div className="relative hidden lg:flex justify-center items-center w-full lg:w-1/2" data-aos="fade-right">
        <div className="relative w-[400px] h-[400px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] lg:w-[470px] lg:h-[470px]">
          <Image
            src="/images/about-img.png"
            alt="Couple on a boat"
            fill
            className="object-contain"
            priority
          />
          {/* Petite image flottante */}
          <div className="absolute -bottom-6 -left-6 w-80 h-80 sm:w-60 sm:h-70 animate-floating" data-aos="fade-up" data-aos-delay="200">
            <Image
              src="/images/autre/image-24.png"
              alt="Small Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* TEXTE DROITE */}
      <div className="lg:w-[60%] w-full mt-10 lg:mt-0 flex flex-col items-center lg:items-start text-gray-800 lg:pl-16">
        {/* Sous-titre */}
        <p className={`${hand.className} text-2xl sm:text-3xl text-orange-500 mb-2`} data-aos="fade-up">
          Wandering Souls
        </p>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3" data-aos="fade-up" data-aos-delay="100">
          Discover Your Next <br /> Adventure
        </h1>

        {/* Paragraphe */}
        <p className="text-gray-600 leading-relaxed max-w-xl mb-5" data-aos="fade-up" data-aos-delay="200">
          Whether you're planning a romantic honeymoon or a family vacation, our price section has got you covered. Start browsing today and find
          the perfect vacation package at a price that won't leave you feeling guilty.
        </p>

        {/* Lignes indicatrices avec animation fluide */}
        <div className="pt-2 space-y-5 w-full max-w-md">
          <div className="space-y-1" data-aos="fade-right" data-aos-delay="300">
            <p className="text-gray-700 font-medium tracking-wide">Organized Group Tour</p>
            <div className="relative w-full h-[5px] bg-gray-200 rounded-full overflow-hidden mt-2">
              <div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg animate-bar1"></div>
            </div>
          </div>

          <div className="space-y-1" data-aos="fade-right" data-aos-delay="400">
            <p className="text-gray-700 font-medium tracking-wide">Single Customized Trip</p>
            <div className="relative w-full h-[5px] bg-gray-200 rounded-full overflow-hidden mt-2">
              <div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg animate-bar2"></div>
            </div>
          </div>
        </div>

        {/* Bouton */}
        <button className="mt-8 px-10 py-3.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="500">
          MORE INFO
        </button>
      </div>

      {/* IMAGE FLOTTANTE BAS-DROITE */}
      <div className="hidden sm:block absolute top-10 right-20 w-44 h-44 lg:w-52 lg:h-52 animate-bounce-slow" data-aos="fade-up" data-aos-delay="600">
        <Image
          src="/images/ab3.webp"
          alt="Floating Icon"
          fill
          className="object-contain"
        />
      </div>

 
    </section>
  );
}
