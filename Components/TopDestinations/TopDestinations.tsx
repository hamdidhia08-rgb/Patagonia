"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import { Just_Another_Hand } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

type Destination = {
  name: string;
  tours: number;
  image: string;
};

const destinations: Destination[] = [
  { name: "Istanbul", tours: 23, image: "/images/mosque.jpg" },
  { name: "Cappadocia", tours: 16, image: "/images/cappadocia.avif" },
  { name: "Antalya", tours: 10, image: "/images/antalya.jpg" },
  { name: "Pamukkale", tours: 13, image: "/images/pamukkale-2.jpg" },
  { name: "Éphèse", tours: 10, image: "/images/ephesus.jpg" },
  { name: "Fethiye", tours: 2, image: "/images/Fethiye.jpg" },
];

export default function TopDestinations() {
  return (
    <section className="pt-5 pb-0 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 mt-20 relative">
        {/* Title */}
        <div className="relative mb-16">
       {/* Image gauche */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-52 h-12 hidden md:block">
  <Image
    src="/images/home2-offer-banner-vector.svg"
    alt="Left Icon"
    width={108}
    height={108}
    className="animate-bounce-slow object-contain"
  />
</div>

{/* Image droite */}
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 h-28 flex items-center justify-center animate-spin-slow hidden md:flex">
  <Image
    src="/images/home2-package-slider-vector2.svg"
    alt="Right Icon"
    width={70}
    height={70}
    className="object-contain block"
  />
</div>


          <h2
            className={`${barlow.className} text-3xl md:text-4xl font-bold text-gray-900 text-center`}
          >
            Top destinations in Turkey
          </h2>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 25 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 35 },
              1280: { slidesPerView: 5, spaceBetween: 40 },
            }}
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center mt-10">
                  <div className="relative w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden mb-4 shadow-lg group">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      width={350}
                      height={350}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/20"></div>
                  </div>
                  <h3
                    className={`${barlow.className} font-semibold text-lg md:text-xl text-gray-900`}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-medium">
                    {dest.tours} Tours
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         {/* Custom Navigation Buttons légèrement décalés à l’extérieur */}
<button
  aria-label="Previous slide"
  title="Previous slide"
  className="custom-prev absolute -left-15 top-1/2 -translate-y-1/2 z-90 
            bg-gray-200 text-gray-700 rounded-full shadow-sm 
            w-9 h-9 flex items-center justify-center 
            hover:bg-gray-300 hover:shadow-md 
            transition-all duration-200"
>
  <ChevronLeft className="w-5 h-5" />
</button>

<button
  aria-label="Next slide"
  title="Next slide"
  className="custom-next absolute -right-15 top-1/2 -translate-y-1/2 z-60 
            bg-gray-200 text-gray-700 rounded-full shadow-sm 
            w-9 h-9 flex items-center justify-center 
            hover:bg-gray-300 hover:shadow-md 
            transition-all duration-200"
>
  <ChevronRight className="w-5 h-5" />
</button>

        </div>
      </div>
      <br /><br /><br />
    </section>
  );
}
