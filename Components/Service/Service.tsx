// components/Service.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Interface des données ---
interface TourData {
  title: string;
  imageUrl: string;
  altText: string;
}

// --- Données statiques ---
const staticTourExamples: TourData[] = [
     {
    title: "Airport pickup service",
    imageUrl: "/images/service/image7.webp",
    altText: "La Mosquée Bleue à Istanbul",
  },
 
  {
    title: "Bosphorus Cruise Experience",
    imageUrl: "/images/service/image3.webp",
    altText: "Croisière sur le Bosphore à Istanbul",
  },
  {
    title: "Hagia sophia city tour",
    imageUrl: "/images/service/image3.jpg",
    altText: "Vue de l'Obélisque dans l'Hippodrome",
  },
  {
    title: "Adventure From Earth to Sky",
    imageUrl: "/images/service/image.avif",
    altText: "La Mosquée Bleue à Istanbul",
  },
    {
    title: "Breakfast with Flamingos",
    imageUrl: "/images/service/image1.webp",
    altText: "Vue de la Mosquée Hagia Sophia",
  },
    {
    title: "Exciting skydiving adventure",
    imageUrl: "/images/service/image8.jpg",
    altText: "Vue de la Mosquée Hagia Sophia",
  },
];

// --- Carte d’un tour ---
const TourCard: React.FC<TourData> = ({ title, imageUrl, altText }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl">
      <div className="relative h-80 w-full">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          priority
          unoptimized
          style={{ objectFit: "cover" }}
          className="transition duration-500 hover:scale-105"
        />
        {/* Masque noir plus léger */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4 rounded-md bg-orange-500 px-3 py-1 text-sm font-bold uppercase text-white shadow-md">
          30% OFF
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
          <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
          <Link href="/tour-details">
            <span className="cursor-pointer rounded-lg border border-white bg-transparent px-6 py-2 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-gray-800">
              View Tour
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- Section principale ---
const Service: React.FC = () => {
  return (
    <section className="bg-orange-50/70 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">
          Upto 30% For <span className="text-orange-600">Istanbul</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {staticTourExamples.map((tour, index) => (
            <TourCard
              key={index}
              title={tour.title}
              imageUrl={tour.imageUrl}
              altText={tour.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
