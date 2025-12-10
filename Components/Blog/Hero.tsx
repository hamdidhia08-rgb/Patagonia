'use client'

import React from 'react'
import Image from 'next/image'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Hero_blog() {
  const title = "Discover the Wonders of Turkey";

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/h3-hero-bg-2.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center transition-none"
          priority
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-4">
        <h1
          className={`${inter.className} text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 drop-shadow-lg`}
        >
          {title}
        </h1>

        {/* Orange Line Under Title */}
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-5 rounded-full"></div>

        {/* Simple Breadcrumb Text */}
        <p className={`${inter.className} text-xs sm:text-sm md:text-base text-white/90`}>
          Home / Blog news
        </p>
      </div>
    </div>
  );
}

export default Hero_blog;
