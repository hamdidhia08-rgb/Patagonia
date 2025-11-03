'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Hero1() {
  const title = "Explore the Wonders of Turkey";
  const breadcrumbs = ["Home", "Travel Blog"];

  // Liste des images
  const images = [
    "/images/hero/img.jpg",
    "/images/hero/img1.jpg",
    "/images/hero/img2.jpg",
    "/images/hero/img3.jpg",
    "/images/hero/img4.jpg",
    "/images/hero/img5.jpg",
    "/images/1.webp",
  ];

  return (
    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      
      {/* Slider horizontal */}
      <div className="absolute inset-0 flex overflow-hidden">
        <motion.div
          className="flex gap-2"
          animate={{ x: ["0%", "-50%"] }} // défilement de moitié de la largeur totale
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {images.concat(images).map((src, index) => ( // on concat pour un défilement infini
            <div
              key={index}
              className="flex-shrink-0 w-[11%] aspect-square bg-cover bg-center "
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-black/20"></div> {/* overlay léger */}
      </div>

      {/* Contenu */}
      <div className="relative z-20 px-4">

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 drop-shadow-lg whitespace-nowrap">Awesome Travel <span className="text-stroke-white">Blog</span>
</h1>




        {/* Breadcrumbs style glass */}
        <nav className="inline-block px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm md:text-base">
          {breadcrumbs.map((item, index) => (
            <span key={index}>
              {index !== 0 && <span className="mx-2">›</span>}
              {index === 0 ? (
                <Link href="/" className="hover:underline">
                  {item}
                </Link>
              ) : (
                <span>{item}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Hero1
