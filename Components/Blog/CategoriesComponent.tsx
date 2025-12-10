"use client";

import React from "react";
// Pas besoin d'icônes Lucide spécifiques ici, juste du texte
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 400 pour le texte, 700 pour le titre
});

// Données des catégories
const categories = [
  { name: "Activity", count: 3 },
  { name: "Beach Tour", count: 1 },
  { name: "City Tour", count: 2 },
  { name: "Destinations", count: 4 },
  { name: "Flight", count: 2 },
  { name: "Hiking", count: 3 },
  { name: "Lifestyle", count: 3 },
  { name: "Travel River", count: 1 },
];

const CategoriesComponent: React.FC = () => {
  return (
    <div className={`
      ${roboto.className} 
      w-full max-w-sm 
      bg-white 
      rounded-xl 
      p-6 
      border-1
      shadow-sm 
      mt-5
    `}>
      {/* Titre "Categories" */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Categories
      </h2>

      {/* Liste des catégories (j'enlève le space-y-4 ici et le gère avec le padding des li) */}
      <ul>
        {categories.map((category, index) => (
          <li
            key={category.name}
            className={`
              flex 
              justify-between 
              items-center 
              cursor-pointer
              group
              py-3 
              border-b 
              border-gray-200 
              ${index === categories.length - 1 ? 'border-b-0 pb-0' : ''} 
              ${index === 0 ? 'pt-0' : ''} 
            `}
          >
            {/* Nom de la catégorie */}
            <span 
              className="
                text-base 
                text-gray-600 
                font-normal
                group-hover:text-violet-600 
                transition duration-150
              "
            >
              {category.name}
            </span>
            
            {/* Compteur (nombre d'articles/tours) */}
            <span 
              className="
                text-sm 
                font-medium 
                text-gray-500 
                group-hover:text-violet-600 
                transition duration-150
              "
            >
              ({category.count})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComponent;