import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Highlight {
  id: number;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    title: 'Cappadocia Hot Air Balloon',
    description: 'Experience breathtaking views of the unique rock formations.',
  },
  {
    id: 2,
    title: 'Istanbul Hagia Sophia',
    description: 'Visit the iconic Hagia Sophia and marvel at its stunning architecture .',
  },
  {
    id: 3,
    title: 'Pamukkale Thermal Pools',
    description: 'Relax in the natural thermal pools with striking white terraces.',
  },
  {
    id: 4,
    title: 'Turkish Cuisine Tour',
    description: 'Savor authentic Turkish dishes, from kebabs to baklava, in local eateries.',
  },
  {
    id: 5,
    title: 'Bosphorus Sunset Cruise',
    description: 'Enjoy a romantic cruise along the Bosphorus with spectacular views.',
  },
];

const TourHighlights: React.FC = () => {
  return (
    <div className={`${roboto.className} py-6 mt-8` }>
      
      {/* Titre de la section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Highlights of the Turkey Tour
      </h2>

      {/* Conteneur principal */}
      <div className="
        p-6 md:p-8 
        border 
        border-gray-200 
        rounded-xl 
        shadow-sm    
        bg-white
      ">
        <ul className="space-y-6">
          {highlights.map((item) => (
            <li key={item.id} className="flex items-start">
              
              {/* Icône de la tique */}
              <CheckCircle 
                className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" 
              />
              
              {/* Contenu du point fort */}
              <p className="text-gray-700 text-base leading-relaxed"> {/* texte plus petit */}
                <span className="font-medium">{item.title}</span> – {item.description} {/* font-weight réduit */}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourHighlights;
