"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

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

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface ImageGallerySliderProps {
  images?: GalleryImage[];
}

const initialImages: GalleryImage[] = [
  { id: 1, url: "/images/slider/pexels-yanastyazh-2156475522-34244793.jpg", alt: "Femme marchant sur une jetée" },
  { id: 2, url: "/images/830008420-1740-1740-w.jpg", alt: "Bateau de croisière en Grèce" },
  { id: 3, url: "/images/slider/pexels-yunusemresahinoglu-7524272.jpg", alt: "Bungalow sur l'eau" },
  { id: 4, url: "/images/slider/pexels-ozgomz-7529416 (1).jpg", alt: "Statue de la Liberté avec skyline" },
  { id: 5, url: "/images/slider/pexels-suat-inan-672106106-32678933.jpg", alt: "Randonneurs en montagne" },
  { id: 6, url: "/images/slider/pexels-sinan-aslan-1844393508-34287418.jpg", alt: "Bungalow sur l'eau (bis)" },
  { id: 7, url: "/images/cappadocia.avif", alt: "Cappadocia paysage" },
];

const ImageGallerySlider: React.FC<ImageGallerySliderProps> = ({ images = initialImages }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* --- Titre --- */}
      <div className="text-center mb-10">
        <p className={`${hand.className} text-[#f1a435] text-2xl md:text-3xl mb-2`}>Our Beautiful Moments</p>
        <h2 className={`${barlow.variable} font-barlow text-2xl md:text-4xl font-bold text-gray-800`}>
          Explore Our Travel Gallery
        </h2>
        <div className="w-20 h-1 bg-[#f1a435] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* --- Galerie Swiper --- */}
      {mounted && (
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          }}
          navigation
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper max-w-6xl mx-auto"
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 15 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={image.id}
              className={`transition-all duration-500 ${
                index === Math.floor(images.length / 2) ? "scale-110 z-20" : "scale-90 z-10"
              }`}
            >
              <div
                onClick={() => setSelectedImage(image)}
                className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* --- Pop-up --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] transition-all duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-[90%] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[85vh] transition-transform duration-500"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
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
