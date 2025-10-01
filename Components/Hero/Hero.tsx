"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import { Just_Another_Hand } from "next/font/google";
import { Play } from "lucide-react"; // Icône Play

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
    { id: 1, img: "/images/slide2.jpg" },
    { id: 2, img: "/images/Slide.jpg" },
  
    { id: 3, img: "/images/slide4.jpg" },
  ];

  return (
    <section className="relative w-full h-[calc(118vh-117px)] pt-[117px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Image plein écran */}
            <Image
              src={slide.img}
              alt={`Slide ${slide.id}`}
              fill
              priority
              className="object-cover object-center"
              quality={95}
            />

            {/* Masque gauche */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

            {/* Texte à gauche */}
            <div
              className={`${barlow.variable} ${hand.variable} font-barlow absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-28`}
            >
              <div className="max-w-2xl text-left space-y-3">
                <p className="font-hand text-yellow-400 text-3xl md:text-5xl">
                  Discover Turkey
                </p>

                <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                  Explore Istanbul & Cappadocia
                </h2>

                <h3 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  Adventure Awaits
                </h3>

                <p className="text-white text-base md:text-lg leading-snug opacity-95 max-w-xl">
                  From the bustling streets of Istanbul to the magical landscapes of Cappadocia, enjoy an unforgettable Turkish journey with comfort and style.
                </p>

                <button className="mt-4 px-6 md:px-8 py-2 md:py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Bouton vidéo amélioré */}
            <div className="absolute bottom-20 right-40">
              <button
                className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white/60 
                bg-white/10 backdrop-blur-md text-white shadow-lg transition-all duration-300 
                hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] group"
              >
                <Play size={32} className="transition-transform group-hover:scale-110" />
                
                {/* Halo animé */}
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
