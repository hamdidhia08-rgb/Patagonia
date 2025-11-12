// KeyFeaturesBar.tsx
"use client";

import React from 'react';
import { Roboto } from 'next/font/google';
import { Check } from 'lucide-react';

// Définir la police
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Feature {
  id: number;
  iconSrc?: string; // Pour les images spéciales comme Carbon Neutral
  altText?: string;
  text: string;
  isRating?: boolean;
  rating?: number;
  totalReviews?: number;
}

const features: Feature[] = [
  { id: 1, text: 'No Booking Fee' },
  { id: 2, text: 'Best Price Ever' },
  { id: 3, text: '', isRating: true, rating: 4.5, totalReviews: 138 },
  { id: 4, text: '100% Carbon Neutral', iconSrc: '/images/icons/carbon-icon.svg', altText: 'Carbon Neutral' },
];

const KeyFeaturesBar: React.FC = () => {
  return (
    <div className="flex justify-center w-full bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="flex items-center space-x-6 md:space-x-10 px-4 max-w-7xl w-full justify-between">

        <div className="flex flex-wrap items-center space-x-4 md:space-x-6 lg:space-x-10">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`${roboto.className} flex items-center text-gray-700 text-sm font-medium whitespace-nowrap`}
            >
              {!feature.isRating && !feature.iconSrc ? (
                <>
                  {/* Icône Check pour les 3 premiers éléments */}
                  <Check className="w-4 h-4 text-green-600 mr-1.5" />
                  <span>{feature.text}</span>
                </>
              ) : feature.iconSrc ? (
                <>
                  {/* Image pour Carbon Neutral */}
                  <img 
                    src={feature.iconSrc}
                    alt={feature.altText}
                    className="w-4 h-4 mr-1.5 object-contain"
                  />
                  <span>{feature.text}</span>
                </>
              ) : (
                <div className="flex items-center">
                  {/* Étoiles pour la note */}
                  <img 
                    src="/images/icons/dhia.svg"
                    alt="Rating stars"
                    className="w-20 h-4 mr-2 object-contain"
                  />
                  <span className="font-bold text-green-600 mr-1.5">
                    ({feature.rating}/5)
                  </span>
                  <span className="text-gray-500 font-normal">
                    based on {feature.totalReviews} reviews
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bouton de partage */}
        <button 
          className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-150"
          aria-label="Share"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.88 12.025 9.427 11 10.15 11c.974 0 1.905.583 2.505 1.487.61.921.917 2.012.917 3.093s-.307 2.172-.917 3.093c-.6.904-1.53 1.487-2.504 1.487-.723 0-1.27-.975-1.467-2.342m14-5.32c.112-.767.243-1.6.38-2.434c.148-.873.238-1.583.238-2.228 0-2.455-1.725-4.47-4.142-4.47-2.41 0-4.133 2.015-4.133 4.47 0 .645.09 1.355.238 2.228c.137.834.268 1.667.38 2.434M6 18c0 1.258-.87 2.302-2.062 2.658C3.065 20.89 2 19.96 2 18.75c0-1.21.975-2.24 2.11-2.585C5.075 16.03 6 16.88 6 18z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default KeyFeaturesBar;
