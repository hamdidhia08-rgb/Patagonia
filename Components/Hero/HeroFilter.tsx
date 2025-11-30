'use client'

import React from 'react'
import Image from 'next/image'
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function HeroFilter() {
  const mainTitle = "Tours & Trips";
  const subHeading = "Explorez des destinations exceptionnelles en toute liberté.";

  return (
    <div className={`relative w-full h-52 md:h-68 flex items-center overflow-hidden ${inter.className}`}>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bghero.png"
          alt="Hero background"
          fill
          className="object-cover transition-transform duration-700"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="
        relative z-20 w-full max-w-[1400px] mx-auto 
        px-0 md:px-0 
        flex flex-col 
        justify-center 
        space-y-4
        items-center md:items-start
      ">
        
        {/* Titres */}
        <div className="w-full flex flex-col items-center md:items-start">
          
          {/* Titre */}
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight drop-shadow-lg text-center md:text-left">
            {mainTitle}
          </h1>

          {/* Sous-titre mobile → centré */}
            <p className="text-sm font-light text-gray-200 drop-shadow-lg block md:hidden text-center mt-3
              max-w-[85%] mx-auto px-1">
              {subHeading}
            </p>

          {/* Sous-titre desktop → aligné à gauche */}
          <p className="text-base md:text-lg font-light text-gray-100 drop-shadow-lg hidden md:block">
            {subHeading}
          </p>
        </div>

        {/* Barre de Recherche → cachée en mobile */}
        <div className="hidden md:flex w-full max-w-4xl bg-white shadow-xl rounded-full overflow-hidden h-14">
          
          <div className="flex flex-1 divide-x divide-gray-100">
            
            {/* Where */}
            <div className="flex items-center space-x-2.5 px-4 flex-1">
              <MapPin className="w-5 h-5 text-gray-800" />
              <div>
                <p className="text-xs font-medium text-gray-800">Where</p>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="text-base text-gray-800 bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-2.5 px-4 flex-1">
              <Calendar className="w-5 h-5 text-gray-800" />
              <div>
                <p className="text-xs font-medium text-gray-800">Date</p>
                <input
                  type="text"
                  placeholder="Select dates"
                  className="text-base text-gray-800 bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Who */}
            <div className="flex items-center space-x-2.5 px-4 flex-1">
              <Users className="w-5 h-5 text-gray-800" />
              <div>
                <p className="text-xs font-medium text-gray-800">Who</p>
                <input
                  type="text"
                  placeholder="Number of guests"
                  className="text-base text-gray-800 bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

          </div>

          {/* Bouton Recherche */}
          <button className="flex items-center justify-center h-full px-6 bg-orange-500 hover:bg-orange-600 transition">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default HeroFilter;
