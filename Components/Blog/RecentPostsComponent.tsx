"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react"; 
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Poids pour le texte et le titre
});

// Données des articles récents (simulées)
const recentPosts = [
  { 
    title: "Safest Destinations for Solo", 
    date: "7 Sep, 2025", 
    imageSrc: "/images/Bodrum.webp" // À remplacer par vos chemins d'images réels
  },
  { 
    title: "Three of the Best Day", 
    date: "7 Sep, 2025", 
    imageSrc: "/images/izmir.jpg"
  },
  { 
    title: "This Spanish city is a", 
    date: "7 Sep, 2025", 
    imageSrc: "/images/cappadocia3.jpg"
  },
  { 
    title: "Change your place and get", 
    date: "7 Sep, 2025", 
    imageSrc: "/images/istanbul.webp"
  },
];

// Composant pour un seul article récent
interface PostItemProps {
    title: string;
    date: string;
    imageSrc: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, imageSrc }) => (
  <div className="flex items-center gap-4 cursor-pointer group py-4">
    
    {/* Image */}
    <div className="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={96}
        height={64}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Contenu */}
    <div className="flex flex-col justify-center">
      <h3 className="
        text-[15px]
        font-semibold
        text-gray-800
        leading-snug
        group-hover:text-orange-600
        transition-colors
      ">
        {title}
      </h3>

      {/* Date */}
      <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
        <Calendar size={15} className="text-[#ff6d50]" />
        <span className="font-normal">{date}</span>
      </div>
    </div>
  </div>
);



const RecentPostsComponent: React.FC = () => {
  return (
    <div className={`
      ${roboto.className} 
      w-full max-w-sm 
      bg-white 
      rounded-xl 
      mt-8
      p-6 
      border border-gray-100 // Bordure légère ajoutée ici
      shadow-sm // Ombre réduite (shadow-sm ou shadow-md)
    `}>
      {/* Titre "Recent Posts" */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Recent Posts
      </h2>

      {/* Liste des articles récents */}
<div className="divide-y divide-gray-100">
        {recentPosts.map((post, index) => (
          <PostItem 
            key={index}
            title={post.title}
            date={post.date}
            imageSrc={post.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPostsComponent;