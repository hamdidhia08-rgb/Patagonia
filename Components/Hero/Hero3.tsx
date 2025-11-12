'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function HeroImages() {
  const images = [
    "/images/activite/image1.webp",
    "/images/activite/image2.webp",
    "/images/activite/image3.webp",
    "/images/hero/img3.jpg",
    "/images/hero/img4.jpg",
  ]

  return (
    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        slidesPerView={3}     
        spaceBetween={8}      
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
              <div className="absolute inset-0 "></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Flèches personnalisées */}
        <div className="swiper-button-prev w-8 h-8 bg-white rounded-full flex items-center justify-center absolute top-[50%] -translate-y-1/2 left-2 z-20">
          <ChevronLeft size={18} className="text-black" />
        </div>
        <div className="swiper-button-next w-8 h-8 bg-white rounded-full flex items-center justify-center absolute top-[50%] -translate-y-1/2 right-2 z-20">
          <ChevronRight size={18} className="text-black" />
        </div>
      </Swiper>
    </div>
  )
}

export default HeroImages
