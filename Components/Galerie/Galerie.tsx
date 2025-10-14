"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface ImageGallerySliderProps {
  images?: GalleryImage[];
}

const initialImages: GalleryImage[] = [
  { id: 1, url: "/images/pexels-abdullahalmallah-6825002 - Copie.jpg", alt: "Femme marchant sur une jetée" },
  { id: 2, url: "/images/cappadocia.avif", alt: "Bateau de croisière en Grèce" },
  { id: 3, url: "/images/slider/pexels-yunusemresahinoglu-7524272.jpg", alt: "Bungalow sur l eau" },
  { id: 4, url: "/images/slider/pexels-ozgomz-7529416 (1).jpg", alt: "Statue de la Liberté avec skyline" },
  { id: 5, url: "/images/slider/pexels-suat-inan-672106106-32678933.jpg", alt: "Randonneurs en montagne" },
  { id: 6, url: "/images/slider/pexels-sinan-aslan-1844393508-34287418.jpg", alt: "Bungalow sur l eau (bis)" },
  { id: 7, url: "/images/slider/pexels-yanastyazh-2156475522-34244793.jpg", alt: "sur l eau (bis)" },
];

const ImageGallerySlider: React.FC<ImageGallerySliderProps> = ({ images = initialImages }) => {
  return (
    <div className="w-full py-12 px-4 bg-white">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper w-full max-w-7xl"
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 10 },
          640: { slidesPerView: 1.3, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className="shadow-xl rounded-lg overflow-hidden !w-[90%] sm:!w-[70%] md:!w-[40%] lg:!w-[25%]"
          >
            <div className="relative w-full h-60 sm:h-72 md:h-[400px] lg:h-[500px]">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Contrôles uniquement */}
        <div className="flex justify-center items-center mt-8 space-x-8">
          <button className="swiper-button-prev p-2 text-2xl text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            &larr;
          </button>
          <button className="swiper-button-next p-2 text-2xl text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            &rarr;
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageGallerySlider;
