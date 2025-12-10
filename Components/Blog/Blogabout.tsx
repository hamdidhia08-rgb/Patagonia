"use client";

import React from "react";
import { User, Calendar, Clock } from "lucide-react"; // Importez les icônes de Lucide React
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // Ajout de 900 pour le titre principal
});

// Composant pour un seul élément d'information (icône + texte)
interface ArticleMetaItemProps {
  icon: React.ReactNode;
  text: string;
}

const ArticleMetaItem: React.FC<ArticleMetaItemProps> = ({ icon, text }) => (
  <div className={`flex items-center gap-1.5 text-sm font-medium text-gray-700`}>
    {/* Conteneur de l'icône avec une couleur violette similaire */}
    <div className="text-[#ff6d50] flex items-center justify-center h-5 w-5">
      {icon}
    </div>
    <span className="text-gray-600 font-normal">{text}</span>
  </div>
);

// Composant principal qui affiche l'en-tête de l'article
const BlogHeader: React.FC = () => {
  return (
    <div className={`${roboto.className} flex flex-col gap-3 py-5`}>
      {/* Informations de l'article (Auteur, Date, Temps de lecture) */}
      <div className="flex flex-wrap items-center gap-4">
        <ArticleMetaItem
          icon={<User size={18} />} // Icône User
          text="By Tourex"
        />
        <ArticleMetaItem
          icon={<Calendar size={18} />} // Icône Calendar
          text="7th Sep, 2025"
        />
        <ArticleMetaItem
          icon={<Clock size={18} />} // Icône Clock
          text="1 Mins Read"
        />
      </div>

      {/* Titre principal */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
        Safest Destinations For Solo Female Travelers
      </h1>

      {/* Description / Premier paragraphe */}
      <p className="text-gray-600 mt-2 leading-relaxed text-base">
        Welcome To Realar Residence, Where Sustainability Meets Comfort In Every Corner. In This Blog Post, We Are Explore The Green Innovations Seamlessly Integrated Into The Fabric.When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
      </p>
    </div>
  );
};

export default BlogHeader;