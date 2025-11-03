'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero1() {
  const title = "Discover the Wonders of Turkey";
  const breadcrumbs = ["Accueil", "Patagonia Service"];

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] sm:h-[250px] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/autre/breadcrumb.jpg"
          alt="Hero background"
          fill
          className="object-cover scale-105 transition-transform duration-700 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/5"></div> {/* Overlay léger */}
      </div>

      {/* Contenu */}
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 drop-shadow-lg">
          {title}
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
  );
}

export default Hero1;