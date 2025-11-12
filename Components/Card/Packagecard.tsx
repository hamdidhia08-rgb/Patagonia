import React from 'react';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

interface GuideProfile {
  id: number;
  imageSrc: string;
  altText: string;
}

const guideProfiles: GuideProfile[] = [
  { id: 1, imageSrc: '/images/user/user1.png', altText: 'Guide Profile 1' },
  { id: 2, imageSrc: '/images/user/user2.jpg', altText: 'Guide Profile 2' },
  { id: 3, imageSrc: '/images/user/user4.jpg', altText: 'Guide Profile 3' },
];

const PackageCard: React.FC = () => {
  return (
    // FIX 1: J'ai utilisé l'élément conteneur principal (div) comme élément parent unique
    // pour corriger l'erreur 2657.
    <div className="
      p-8 
      md:p-12 
      max-w-md 
      mx-auto 
      rounded-3xl 
      bg-[#E5F7EB]
      shadow-xl
    ">
      
      {/* FIX 2: Correction de la syntaxe de la balise <h2>. 
          L'erreur 2322, 1003 et 1002 venait probablement d'une tentative de props non valide
          ou d'une chaîne non terminée dans le className. */}
      <h2 className="
        text-2xl 
        md:text-3xl 
        font-serif 
        italic 
        text-gray-900 
        mb-2
      ">
        Customize
      </h2>
      <h2 className="
        text-3xl 
        md:text-3xl 
        font-bold 
        text-gray-900 
        mb-8
      ">
        Travel Package!
      </h2>

      <div className="space-y-4 mb-10">
        <div className="flex items-center text-gray-800">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
          <span className="text-lg">Make Your Favourite Package</span>
        </div>
        
        <div className="flex items-center text-gray-800">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
          <span className="text-lg">Enjoy Your Trip</span>
        </div>
      </div>

      <div className="flex items-center mb-10">
        
        <div className="flex -space-x-3 mr-4">
          {guideProfiles.map((profile, index) => (
            <div 
              key={profile.id}
              className={`
                w-10 h-10 
                rounded-full 
                border-2 border-white 
                overflow-hidden 
                shadow-md
                relative 
              `}
              style={{ 
                  zIndex: guideProfiles.length - index,
                  marginLeft: index > 0 ? '-0.75rem' : '0',
              }}
            >
              <img 
                src={profile.imageSrc} 
                alt={profile.altText} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>

        <p className="text-gray-800 font-semibold text-lg">
          <span className="font-bold">45+</span> Guide Await <br className="sm:hidden" /> to Help You
        </p>
      </div>

      <button 
        className="
          w-full 
          flex 
          items-center 
          justify-center 
          px-8 
          py-4 
          text-lg 
          font-semibold 
          text-white 
          bg-gray-900 
          rounded-xl 
          shadow-lg 
          hover:bg-gray-700 
          transition 
          duration-300
        "
      >
        Customize Package 
        <ArrowUpRight className="w-5 h-5 ml-2" />
      </button>
      
    </div>
  );
};

export default PackageCard;