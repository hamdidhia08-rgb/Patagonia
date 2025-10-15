"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// --- Définition des Polices ---
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

// --- Types ---
interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface ImageGallerySliderProps {
  images?: GalleryImage[];
}

// --- Données par défaut ---
const initialImages: GalleryImage[] = [
  { id: 1, url: "/images/pexels-abdullahalmallah-6825002 - Copie.jpg", alt: "Femme marchant sur une jetée" },
  { id: 2, url: "/images/slider/pexels-yanastyazh-2156475522-34244793.jpg", alt: "Bateau de croisière en Grèce" },
  { id: 3, url: "/images/slider/pexels-yunusemresahinoglu-7524272.jpg", alt: "Bungalow sur l eau" },
  { id: 4, url: "/images/slider/pexels-ozgomz-7529416 (1).jpg", alt: "Statue de la Liberté avec skyline" },
  { id: 5, url: "/images/slider/pexels-suat-inan-672106106-32678933.jpg", alt: "Randonneurs en montagne" },
  { id: 6, url: "/images/slider/pexels-sinan-aslan-1844393508-34287418.jpg", alt: "Bungalow sur l eau (bis)" },
  { id: 7, url: "/images/cappadocia.avif", alt: "sur l eau (bis)" },
];

// --- Composant principal ---
const ImageGallerySlider: React.FC<ImageGallerySliderProps> = ({ images = initialImages }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="relative w-full py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* --- Titre principal --- */}
      <div className="text-center mb-12">
        <p className={`${hand.className} text-[#f1a435] text-2xl md:text-4xl mb-2`}>Our Beautiful Moments</p>
        <h2 className={`${barlow.variable} font-barlow text-3xl md:text-5xl font-bold text-gray-800`}>
          Explore Our Travel Gallery
        </h2>
        <div className="w-24 h-1 bg-[#f1a435] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* --- Swiper Galerie --- */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper max-w-7xl mx-auto"
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 10 },
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
        }}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className="!w-[80%] sm:!w-[60%] md:!w-[40%] lg:!w-[30%] transition-all duration-500"
          >
            <div
              onClick={() => setSelectedImage(image)}
              className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl group cursor-pointer transition-all duration-500"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Boutons navigation stylés */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center gap-10 mt-10 z-10">
          <button className="swiper-button-prev bg-white/80 hover:bg-white text-gray-700 hover:text-indigo-600 backdrop-blur-md rounded-full shadow-lg p-3 transition-all duration-300">
            &larr;
          </button>
          <button className="swiper-button-next bg-white/80 hover:bg-white text-gray-700 hover:text-indigo-600 backdrop-blur-md rounded-full shadow-lg p-3 transition-all duration-300">
            &rarr;
          </button>
        </div>
      </Swiper>

      {/* --- Pop-up d’image plein écran --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] transition-all duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-[90%] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[90vh] transition-transform duration-500"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallerySlider;
