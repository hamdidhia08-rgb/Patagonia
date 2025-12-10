"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react"; // Pour l'icône de date
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
    <div className="flex items-start gap-4 cursor-pointer group">
        
        {/* Image du post */}
        {/* Note: Dans un environnement réel Next.js, vous devez configurer le domaine de l'image
           et définir les propriétés `width` et `height` ou utiliser `fill` si non connu. */}
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
             {/* Ceci est un placeholder, remplacez-le par votre composant Image si vous l'utilisez */}
            <Image
                src={imageSrc}
                alt={title}
                width={64} // 16 * 4 = 64px
                height={64} // 16 * 4 = 64px
                className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
            />
        </div>

        {/* Contenu du post */}
        <div className="flex flex-col pt-0.5">
            <h3 className="
                text-base 
                font-semibold 
                text-gray-800 
                leading-snug 
                group-hover:text-orange-600 
                transition duration-150
            ">
                {title}
            </h3>
            
            {/* Date */}
            <div className="flex items-center gap-1 mt-1 text-sm font-medium text-gray-500">
                <Calendar size={16} className="text-[#ff6d50]" />
                <span className="text-gray-500 font-normal">{date}</span>
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
      <div className="space-y-6">
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