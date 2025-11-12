"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // icônes
import 'swiper/css';
import 'swiper/css/navigation';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Location {
  id: number;
  name: string;
  days: number;
  imageSrc: string;
}

const locations: Location[] = [
  { id: 1, name: 'Loire Valley', days: 1, imageSrc: '/images/antalya.jpg' },
  { id: 2, name: 'Southern France', days: 1, imageSrc: '/images/antalya-2708343_1280.jpg' },
  { id: 3, name: 'Louvre Museum', days: 3, imageSrc: '/images/830008420-1740-1740-w.jpg' },
  { id: 4, name: 'Eiffel Tower', days: 1, imageSrc: '/images/cappadocia3.jpg' },
  { id: 5, name: 'Mont Saint-Michel', days: 2, imageSrc: '/images/Fethiye.jpg' },
];

const LocationCard: React.FC<Location> = ({ name, days, imageSrc }) => (
  <div className="flex flex-col cursor-pointer group">
    <div className="
      w-full
      h-40
      rounded-2xl
      overflow-hidden
      shadow-lg
      transition
      duration-300
      group-hover:shadow-xl
    ">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition duration-300">
        {name}
      </h3>
      <p className="text-gray-500 text-sm mt-1">
        ({String(days).padStart(2, '0')} Days)
      </p>
    </div>
  </div>
);

const LocationCarousel: React.FC = () => {
  return (
    <section className={`${roboto.className} bg-white` }>
      <h2 className="text-2xl font-bold text-gray-900 mb-10  ">
        Explore Locations
      </h2>

      <div className="relative mx-auto max-w-7xl">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }}
          loop={false}
        >
          {locations.map((location) => (
            <SwiperSlide key={location.id} style={{ width: '350px' }}>
              <LocationCard {...location} />
            </SwiperSlide>
          ))}
        </Swiper>

      {/* Flèche de Navigation Gauche */}
<button
  className="
    swiper-button-prev-custom
    absolute
    top-[30%]
    left-[-20px]
    z-10
    bg-white      // fond gris clair
    p-3
    rounded-full
    shadow-md
    hover:shadow-lg
    transition
    duration-300
    border border-gray-100
    w-10 h-10 flex items-center justify-center
  "
  aria-label="Précédent"   // accessibilité
  title="Précédent"
>
  <ChevronLeft size={24} className="text-gray-700" />
</button>

{/* Flèche de Navigation Droite */}
<button
  className="
    swiper-button-next-custom
    absolute
    top-[30%]
    right-[-20px]
    z-10
    bg-white       // fond gris clair
    p-3
    rounded-full
    shadow-md
    hover:shadow-lg
    transition
    duration-300
    border border-gray-200
    w-10 h-10 flex items-center justify-center
  "
  aria-label="Suivant"   // accessibilité
  title="Suivant"
>
  <ChevronRight size={24} className="text-gray-700" />
</button>

      </div>
    </section>
  );
};

export default LocationCarousel;
