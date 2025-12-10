"use client";

import React from "react";
import { Search } from "lucide-react"; // Importez l'icône Search de Lucide React
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // 400 pour le texte d'entrée, 700 pour le titre
});

const SearchComponent: React.FC = () => {
  return (
    // Conteneur principal: centré à droite ou selon la mise en page
    // J'ai utilisé 'max-w-xs' pour limiter sa largeur et 'ml-auto' pour le placer à droite si dans un conteneur plus large.
    <div className={`
      ${roboto.className} 
      w-full max-w-sm 
      bg-white 
      rounded-xl 
      p-6 
      border-1
      shadow-sm 
      ml-auto 
    `}>
      {/* Titre "Search" */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Search
      </h2>

      {/* Barre de recherche */}
      <div className="relative">
        <input
          type="text"
          placeholder="Type here..."
          className="
            w-full 
            py-3 
            pl-4 
            pr-10 // Espace pour l'icône à droite
            text-base 
            text-gray-700
            bg-gray-50 // Couleur de fond légèrement grise
            border 
            border-gray-200 
            rounded-lg 
            focus:outline-none 
            focus:border-orange-500 // Bordure violette au focus
            focus:ring-1 
            focus:ring-orange-500
            transition duration-150
          "
        />
        
        {/* Icône de recherche (Loupe) */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <Search 
            size={20} 
            className="text-[#ff6d50]  transition duration-150" 
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;