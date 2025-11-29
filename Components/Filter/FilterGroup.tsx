'use client';

import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Inter } from "next/font/google";

// 👇 Import de la font Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function FilterGroup({
  title,
  children,
  defaultOpen = true,
}: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${inter.className} w-full`}> {/* applique Inter sur tout le composant */}
      
      {/* En-tête avec titre et icône de bascule */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left py-3"
      >
        {/* Titre avec font Inter, taille et espacement conservés */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
          {title}
        </h3> 
        <ChevronUp
          className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {/* Contenu du filtre, affiché ou caché */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
