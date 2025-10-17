"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";
import { Play } from "lucide-react";

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
    {
      id: 1,
      desktopImg: "/images/Slide.jpg",
      mobileImg: "/images/Slide.jpg",
    },
  ];

  return (
    <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden z-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="custom-swiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Image desktop */}
            <Image
              src={slide.desktopImg}
              alt={`Slide ${slide.id}`}
              fill
              priority
              sizes="100vw"
              quality={100}
              className="hidden md:block object-cover object-center"
            />

            {/* Image mobile */}
            <Image
              src={slide.mobileImg}
              alt={`Slide mobile ${slide.id}`}
              fill
              priority
              sizes="100vw"
              quality={100}
              className="block md:hidden object-cover object-center"
            />

            {/* Masque gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

            {/* Texte */}
            <div
              className={`${barlow.variable} ${hand.variable} font-barlow absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-28`}
            >
              <div className="w-full max-w-4xl text-left space-y-2">
                <p className="font-hand text-yellow-400 text-3xl md:text-5xl leading-snug">
                  Discover Turkey
                </p>
                <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] drop-shadow-lg">
                  Explore & Experience
                </h2>
                <h3 className="text-yellow-400 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] drop-shadow-md">
                  Adventure Awaits
                </h3>
                <p className="text-white text-base md:text-lg leading-snug opacity-95 max-w-xl">
                  From the bustling streets of Istanbul to the magical landscapes
                  of Cappadocia, enjoy an unforgettable Turkish journey.
                </p>

                <button className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Bouton vidéo seulement desktop */}
            <div className="hidden md:block absolute bottom-[18%] right-50">
              <button
                className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white/60 
                  bg-white/10 backdrop-blur-md text-white shadow-lg transition-all duration-300 
                  hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] group"
              >
                <Play size={32} className="transition-transform group-hover:scale-110" />
                <span className="absolute inset-0 rounded-full border border-white/40 animate-ping"></span>
                <span className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
