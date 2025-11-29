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
          className="object-cover  transition-transform duration-700 "
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-0 md:px-0 flex flex-col items-start justify-center space-y-4">
        
        {/* Titres */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight drop-shadow-lg">
            {mainTitle}
          </h1>
          <p className="text-base md:text-lg font-light text-gray-100 drop-shadow-lg hidden md:block">
            {subHeading}
          </p>
        </div>

        {/* Barre de Recherche */}
        <div className="flex w-full max-w-4xl bg-white shadow-xl rounded-2xl md:rounded-full overflow-hidden h-12 md:h-14">
          
          <div className="flex flex-1 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Where */}
            <div className="flex items-center space-x-2.5 px-3 flex-1 min-w-0 h-full">
              <MapPin className="w-5 h-5 text-gray-800" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-800 leading-none">Where</p>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="text-sm md:text-base font-normal text-gray-800 focus:outline-none w-full bg-transparent p-0 h-6 md:h-7"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-2.5 px-3 flex-1 min-w-0 h-full">
              <Calendar className="w-5 h-5 text-gray-800" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-800 leading-none">Date</p>
                <input
                  type="text"
                  placeholder="Select dates"
                  className="text-sm md:text-base font-normal text-gray-800 focus:outline-none w-full bg-transparent p-0 h-6 md:h-7"
                />
              </div>
            </div>

            {/* Who */}
            <div className="flex items-center space-x-2.5 px-3 flex-1 min-w-0 h-full">
              <Users className="w-5 h-5 text-gray-800" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-800 leading-none">Who</p>
                <input
                  type="text"
                  placeholder="Number of guests"
                  className="text-sm md:text-base font-normal text-gray-800 focus:outline-none w-full bg-transparent p-0 h-6 md:h-7"
                />
              </div>
            </div>

          </div>

          {/* Bouton Recherche */}
          <button className="flex items-center justify-center h-full px-4 md:px-6 bg-orange-500 hover:bg-orange-600 transition duration-150 rounded-b-2xl md:rounded-full md:rounded-l-none">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroFilter;
