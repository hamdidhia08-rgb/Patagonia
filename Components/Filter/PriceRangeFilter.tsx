"use client";

import React, { useState } from "react";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
}

export default function PriceRangeFilter({
  minPrice: initialMin,
  maxPrice: initialMax,
}: PriceRangeFilterProps) {
  // State pour les valeurs du slider
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);

  // Calcule la largeur de la section colorée (rouge dans l'image)
  const totalRange = initialMax - initialMin;
  const coloredStart = ((min - initialMin) / totalRange) * 100;
  const coloredWidth = ((max - min) / totalRange) * 100;

  // Handler pour mettre à jour les inputs
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMin(Math.min(value, max));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMax(Math.max(value, min));
  };

  return (
    <div className="space-y-4">
      {/* Slider de prix simulé */}
      <div className="relative h-2 w-full">
        {/* Piste de base (gris) */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full bg-gray-200 rounded-full"></div>

        {/* Piste de prix sélectionnée (rouge) */}
        {/* On utilise un div pour simuler le remplissage coloré basé sur les pourcentages */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-red-500 rounded-full"
          style={{
            left: `${coloredStart}%`,
            width: `${coloredWidth}%`,
          }}
        ></div>

        {/* Poignée Min (Thumb) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 size-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer"
          style={{ left: `${coloredStart}%`, transform: 'translate(-50%, -50%)' }}
        ></div>

        {/* Poignée Max (Thumb) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 size-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer"
          style={{ left: `${coloredStart + coloredWidth}%`, transform: 'translate(-50%, -50%)' }}
        ></div>
        
        {/* Notes: 
        1. Pour un VRAI slider, vous utiliseriez l'input range HTML natif avec les 
           classes d'apparence personnalisées de Tailwind (ex: `appearance-none`) 
           ou une librairie dédiée.
        2. Les valeurs min/max du slider seraient gérées par l'état.
        3. J'utilise ici un simple `div` pour la démonstration visuelle exacte de l'image.
        */}
      </div>

      {/* Inputs Min/Max */}
      <div className="flex justify-between gap-4 pt-2">
        {/* Input Min */}
        <div className="flex-1">
          <label className="text-gray-600 text-sm font-medium block mb-1">
            Min. price
          </label>
          <div className="relative">
            <input
              type="number"
              value={min}
              onChange={handleMinChange}
              min={initialMin}
              max={initialMax}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 text-base font-medium focus:border-red-500 focus:ring-red-500 transition"
            />
            {/* Si vous voulez le symbole $ à l'intérieur de l'input */}
            {/* <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span> */}
          </div>
        </div>

        {/* Input Max */}
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
  );
}