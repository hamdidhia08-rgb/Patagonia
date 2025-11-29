// components/CustomerReviews.tsx

import { Star } from 'lucide-react';
import React from 'react';

// --- Données Statiques (extraites de l'image) ---
const STATIC_OVERALL_RATING = 4.5;
const STATIC_TOTAL_REVIEWS = 1;

// Utilisation d'un objet simple pour les scores
const STATIC_SUMMARY = {
  Guide: 5.0,
  Service: 5.0,
  Transportation: 5.0,
  Organization: 3.0,
};

// Fonction utilitaire pour obtenir la largeur de la barre de progression en pourcentage
const getPercentageWidth = (score: number): string => {
  // Calcule le pourcentage (max 100%)
  const percentage = Math.min((score / 5) * 100, 100);
  return `${percentage}%`;
};

// Le composant n'a plus besoin de props, on utilise donc React.FC sans générique
const CustomerReviews: React.FC = () => {
  // Convertir le résumé en un tableau pour un rendu facile
  // Utilisation d'Object.entries pour itérer sur les paires clé/valeur
  const summaryArray = Object.entries(STATIC_SUMMARY);

  return (
    <div className="max-w-6xl mx-auto bg-white">
      {/* Titre */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        Customer reviews
      </h2>

      {/* Conteneur principal - Utilise grid pour les colonnes */}
      <div className="border border-gray-200 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Colonne 1: Évaluation globale */}
        <div className="p-6 md:p-8 flex flex-col justify-start md:justify-center border-b md:border-b-0 md:border-r border-gray-100">
          <h3 className="text-lg font-normal mb-3 text-gray-700">
            Overall rating
          </h3>
          <div className="flex items-center space-x-2">
            {/* Icône étoile rouge avec Lucide React */}
            <Star className="w-6 h-6 text-orange-500 fill-orange-500 flex-shrink-0" />
            <p className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-none">
              {STATIC_OVERALL_RATING.toFixed(1)}<span className="text-gray-500 text-2xl">/5</span>
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            ({STATIC_TOTAL_REVIEWS} review)
          </p>
        </div>

        {/* Colonne 2: Résumé des évaluations */}
        <div className="p-6 md:p-8">
          <h3 className="text-lg font-normal mb-4 text-gray-700">
            Review summary
          </h3>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {summaryArray.map(([key, score]) => (
              <div key={key} className="flex flex-col">
                {/* Libellé et score */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">{key}</span>
                  <span className="text-sm font-medium text-gray-900">{score.toFixed(1)}/5</span>
                </div>
                
                {/* Barre de progression */}
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-orange-500 rounded-full"
                    style={{ width: getPercentageWidth(score) }} // Utilisation de la fonction utilitaire
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;