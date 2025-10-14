"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Définition du type pour une image
interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

// Propriétés du composant
interface ImageGallerySliderProps {
  images: GalleryImage[];
}

// Les images que vous souhaitez afficher
const initialImages: GalleryImage[] = [
  { id: 1, url: '/images/pexels-abdullahalmallah-6825002 - Copie.jpg', alt: 'Femme marchant sur une jetée' },
  { id: 2, url: '/images/cappadocia.avif', alt: 'Bateau de croisière en Grèce' },
  { id: 3, url: '/images/slider/pexels-yunusemresahinoglu-7524272.jpg', alt: 'Bungalow sur l eau' },
  { id: 4, url: '/images/slider/pexels-ozgomz-7529416 (1).jpg', alt: 'Statue de la Liberté avec skyline' },
  { id: 5, url: '/images/slider/pexels-suat-inan-672106106-32678933.jpg', alt: 'Randonneurs en montagne' },
  { id: 6, url: '/images/slider/pexels-sinan-aslan-1844393508-34287418.jpg', alt: 'Bungalow sur l eau (bis)' },
  { id: 7, url: '/images/slider/pexels-yanastyazh-2156475522-34244793.jpg', alt: 'sur l eau (bis)' },

];

/**
 * Composant de slider de galerie d'images utilisant Swiper et l'effet Coverflow.
 */
const ImageGallerySlider: React.FC<ImageGallerySliderProps> = ({ images = initialImages }) => {
  return (
    <div className="w-full py-12 px-4 bg-white">
      {/* Conteneur pour le slider. La hauteur doit être définie, soit ici, soit via le style global ou d'autres classes. */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // Ajustez le nombre de slides visibles pour votre design
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0, // Rotation des slides non centrales (0 pour un effet plus droit)
          stretch: 0,
          depth: 100, // Profondeur des slides (perspective)
          modifier: 2.5, // Multiplicateur pour profondeur et taille
          slideShadows: true, // Active l'ombre de la slide
        }}
        // Les flèches de navigation (précédent/suivant)
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        // La pagination sous forme de points
        pagination={{ 
            clickable: true,
            // Pour aligner la pagination et les flèches comme dans l'exemple
            el: '.swiper-pagination-custom',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet bg-gray-400 w-2 h-2 rounded-full mx-1 inline-block transition-all duration-300',
            bulletActiveClass: 'bg-indigo-600 !w-4',
        }}
        // Modules à inclure
        modules={[EffectCoverflow, Pagination, Navigation]}
        // Classe Tailwind pour limiter la largeur sur de grands écrans
        className="mySwiper w-full max-w-7xl h-[400px] md:h-[500px]" 
      >
        {images.map((image) => (
          <SwiperSlide 
            key={image.id}
            // Style de la slide : ajustez cette largeur pour contrôler l'aspect
            // Ici, 40% de la largeur du conteneur Swiper pour 3-5 slides visibles
            className="!w-[40%] md:!w-[30%] lg:!w-[25%] shadow-xl rounded-lg overflow-hidden"
          >
            {/* Utilisation de next/image ou un simple tag img avec des classes Tailwind */}
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* --- Contrôles Personnalisés --- */}
        {/* Swiper génère les flèches, mais nous les personnalisons avec des classes Tailwind et des icônes */}
        <div className="flex justify-center items-center mt-8 space-x-8">
            {/* Flèche Gauche */}
            <button className="swiper-button-prev p-2 text-2xl text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                &larr; {/* Flèche gauche */}
            </button>
            
            {/* Conteneur de la pagination */}
            <div className="swiper-pagination-custom !relative !bottom-auto !top-auto"></div>

            {/* Flèche Droite */}
            <button className="swiper-button-next p-2 text-2xl text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                &rarr; {/* Flèche droite */}
            </button>
        </div>
        {/* --- Fin des Contrôles Personnalisés --- */}

      </Swiper>
    </div>
  );
};

export default ImageGallerySlider;