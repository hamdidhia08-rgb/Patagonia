"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";
import { Play } from "lucide-react";
import SearchTourBar from "../SearchTourBar/SearchTourBar";

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
    { id: 1, desktopImg: "/images/bg/125.png", mobileImg: "/images/bg/125.png" },
    { id: 2, desktopImg: "/images/bg/cruise-banner.png", mobileImg: "/images/bg/cruise-banner.png" },
    
    
  ];

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
<Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop
  pagination={{ clickable: true }}
  className="custom-swiper w-full h-full" // <-- ici on remet custom-swiper
>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <Image
              src={slide.desktopImg}
              alt={`Slide ${slide.id}`}
              fill
              priority
              sizes="100vw"
              quality={100}
              className="hidden md:block object-cover object-center"
            />
            <Image
              src={slide.mobileImg}
              alt={`Slide mobile ${slide.id}`}
              fill
              priority
              sizes="100vw"
              quality={100}
              className="block md:hidden object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>

            <div
              className={`${barlow.variable} ${hand.variable} absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-28`}
            >
              <div className="w-full max-w-3xl flex flex-col items-center">
                <p className="font-hand text-orange-400 text-3xl md:text-5xl leading-tight">
                  Discover Turkey
                </p>
                <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                  Explore & Experience
                </h2>
                <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
                  Adventure Awaits
                </h3>
                <p className="text-white text-sm md:text-base lg:text-lg leading-snug opacity-95">
                  From the bustling streets of Istanbul to the magical landscapes of Cappadocia, enjoy an unforgettable Turkish journey.
                </p>
                <div className="mt-4 md:mt-6 w-full">
                  <SearchTourBar />
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute bottom-20 right-16">
              <button
                title="Play video"
                className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white/60 
                  bg-white/10 backdrop-blur-md text-white shadow-lg transition-transform duration-300 
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
