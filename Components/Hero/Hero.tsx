"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import { Just_Another_Hand } from "next/font/google";

// Fonts
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

export default function HeroSlider() {
  const slides = [
    { id: 1, img: "/images/slide.avif" },
    { id: 2, img: "/images/Slide2.jpg" },
    { id: 3, img: "/images/slide3.jpg" },
  ];

  return (
    <section className="relative w-full h-[calc(118vh-117px)] pt-[117px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background image */}
            <Image
              src={slide.img}
              alt={`Slide ${slide.id}`}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay dégradé gauche -> droite */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            {/* Block texte (à gauche) */}
            <div
              className={`${barlow.variable} ${hand.variable} font-barlow absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-28`}
            >
              <div className="max-w-xl text-left space-y-1">
                {/* Petit texte cursive jaune */}
                <p className="font-hand text-yellow-400 text-3xl md:text-5xl">
                  Discover Turkey
                </p>

                {/* Ligne blanche */}
                <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                  Explore Istanbul & Cappadocia
                </h2>

                {/* Ligne jaune */}
                <h3 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  Adventure Awaits
                </h3>

                {/* Description */}
                <p className="text-white text-base md:text-lg leading-snug opacity-95 max-w-md">
                  From the bustling streets of Istanbul to the magical landscapes of Cappadocia, enjoy an unforgettable Turkish journey with comfort and style.
                </p>

                {/* Bouton CTA */}
                <button className="mt-4 px-6 md:px-8 py-2 md:py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
