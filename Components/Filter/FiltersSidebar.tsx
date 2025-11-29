"use client";

import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterGroup({ title, children, defaultOpen = true }: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${inter.className} flex items-center justify-between w-full text-left`}
      >
      <h3 className="text-lg font-medium text-black">{title}</h3>

        <ChevronUp
          className={`size-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <div
        className={`overflow-visible transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const tourTypes = ["Daily tour", "Group tour", "Package tour", "Private tour"];
const tourTypes2 = [
  "Cappadocia Balloon Ride",
  "Turkish Bath",
  "Bodrum Sailing Tour",
  "Turkish Cooking Class",
  "Antalya Waterfalls Hike",
];
const tourTypes3 = [
  "0 - 3 hours",
  "1 - 3 days",
  "12 - 15 hours",
  "15 - 18 hours",
  "18 - 21 hours",
];


export default function FiltersSidebar() {
  const initialMin = 0;
  const initialMax = 4500;
  
  const defaultMax = 3500; // <-- nouvelle valeur par défaut plus basse
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(defaultMax); // <-- utilise defaultMax ici

  const totalRange = initialMax - initialMin;
  const coloredStart = ((min - initialMin) / totalRange) * 100;
  const coloredWidth = ((max - min) / totalRange) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max);
    setMin(value);
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min);
    setMax(value);
  };

  return (
    <div className={`${inter.className} flex flex-col gap-6 p-6 border border-gray-200 rounded-xl bg-white`}>
      {/* PRICE RANGE */}
      <FilterGroup title="Price range" defaultOpen={true}>
        <div className="space-y-4 pt-1">
          <div className="relative w-full h-8 flex items-center">
            {/* Barre grise */}
            <div className="absolute left-0 w-full h-1 bg-gray-200 rounded-full top-1/2 -translate-y-1/2"></div>

            {/* Barre rouge */}
            <div
              className="absolute h-1 bg-red-500 rounded-full top-1/2 -translate-y-1/2"
              style={{ left: `${coloredStart}%`, width: `${coloredWidth}%` }}
            ></div>

            {/* Input range Min */}
            <input
              type="range"
              min={initialMin}
              max={initialMax}
              value={min}
              onChange={(e) => setMin(Math.min(Number(e.target.value), max))}
              className="absolute w-full h-8 appearance-none bg-transparent pointer-events-auto z-10"
              style={{
                WebkitAppearance: "none",
              }}
            />
            {/* Input range Max */}
            <input
              type="range"
              min={initialMin}
              max={initialMax}
              value={max}
              onChange={(e) => setMax(Math.max(Number(e.target.value), min))}
              className="absolute w-full h-8 appearance-none bg-transparent pointer-events-auto z-10"
              style={{
                WebkitAppearance: "none",
              }}
            />

            {/* Style des thumbs */}
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: white;
                border: 2px solid #d1d5db;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0,0,0,0.3);
                margin-top: -2px; /* pour centrer verticalement */
              }
              input[type="range"]::-moz-range-thumb {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: white;
                border: 2px solid #d1d5db;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0,0,0,0.3);
              }
              input[type="range"]::-ms-thumb {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: white;
                border: 2px solid #d1d5db;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0,0,0,0.3);
              }
            `}</style>
          </div>

          {/* Inputs Min/Max */}
          <div className="flex justify-between gap-4 pt-2">
            <div className="flex-1">
              <label className="text-gray-600 text-sm font-medium block mb-1">
                Min. price
              </label>
              <input
                type="number"
                value={min}
                onChange={handleMinChange}
                min={initialMin}
                max={initialMax}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 text-base font-medium focus:border-red-500 focus:ring-red-500 transition"
              />
            </div>
            <div className="flex-1">
              <label className="text-gray-600 text-sm font-medium block mb-1">
                Max. price
              </label>
              <input
                type="number"
                value={max}
                onChange={handleMaxChange}
                min={initialMin}
                max={initialMax}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 text-base font-medium focus:border-red-500 focus:ring-red-500 transition"
              />
            </div>
          </div>
        </div>
      </FilterGroup>

      <hr className="border-gray-200 my-4" />
      <FilterGroup title="Types" defaultOpen={true}>
        
        <div className="flex flex-col space-y-4 mt-5"> {/* plus d'espace entre les lignes */}
          {tourTypes.map((type) => (
            <label
              key={type}
              className="flex items-center text-gray-700 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded appearance-none 
                           checked:bg-orange-500 checked:border-transparent transition duration-150"
              />
              <span className="ml-3 text-sm text-gray-600 leading-relaxed">
                {type}
              </span>
            </label>
          ))}
        </div>
      </FilterGroup>
      <hr className="border-gray-200 my-4" />
     <FilterGroup title="Activities" defaultOpen={true}>
    <div className="flex flex-col space-y-4 mt-5"> {/* plus d'espace entre les lignes */}
        {tourTypes2.map((type) => (
        <label
            key={type}
            className="flex items-center text-gray-500 cursor-pointer select-none"
        >
            <input
            type="checkbox"
            className="w-5 h-5 border border-gray-300 rounded appearance-none 
                        checked:bg-orange-500 checked:border-transparent transition duration-150"
            />
            <span className="ml-3 text-sm text-gray-600 leading-relaxed">
            {type}
            </span>
        </label>
        ))}
    </div>
    </FilterGroup>

    <hr className="border-gray-200 my-4" />
     <FilterGroup title="Durations" defaultOpen={true}>
    <div className="flex flex-col space-y-4 mt-5"> {/* plus d'espace entre les lignes */}
        {tourTypes3.map((type) => (
        <label
            key={type}
            className="flex items-center text-gray-500 cursor-pointer select-none"
        >
            <input
            type="checkbox"
            className="w-5 h-5 border border-gray-300 rounded appearance-none 
                        checked:bg-orange-500 checked:border-transparent transition duration-150"
            />
            <span className="ml-3 text-sm text-gray-600 leading-relaxed">
            {type}
            </span>

        </label>
        ))}
    </div>
    </FilterGroup>
    </div>
  );
}
