"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TourData {
  title: string;
  imageUrl: string;
  altText: string;
}

const staticTourExamples: TourData[] = [
  {
    title: "Airport Pickup Service",
    imageUrl: "/images/Service/image7.webp",
    altText: "Airport pickup luxury car",
  },
  {
    title: "Bosphorus Cruise Experience",
    imageUrl: "/images/Service/image3.webp",
    altText: "Croisière sur le Bosphore à Istanbul",
  },
  {
    title: "Hagia Sophia City Tour",
    imageUrl: "/images/Service/image3.jpg",
    altText: "Visite de Hagia Sophia",
  },
  {
    title: "Adventure From Earth to Sky",
    imageUrl: "/images/Service/image.avif",
    altText: "Aventure en montgolfière",
  },
  {
    title: "Breakfast with Flamingos",
    imageUrl: "/images/Service/image1.webp",
    altText: "Petit-déjeuner avec des flamants roses",
  },
  {
    title: "Exciting Skydiving Adventure",
    imageUrl: "/images/autre/tour-package-img22.jpg",
    altText: "Saut en parachute",
  },
  {
    title: "Spa & Massage",
    imageUrl: "/images/Service/image9.webp",
    altText: "Détente spa et massage",
  },
  {
    title: "Forest Horse Riding Tour",
    imageUrl: "/images/Service/image10.jpg",
    altText: "Randonnée à cheval en forêt",
  },
  {
    title: "Luxury Yacht Rental",
    imageUrl: "/images/Service/yacht.webp",
    altText: "Croisière privée en yacht",
  },
  {
    title: "Private Chef Experience",
    imageUrl: "/images/Service/chef.webp",
    altText: "Chef privé à domicile",
  },
  {
    title: "Hot Air Balloon Ride",
    imageUrl: "/images/Service/image10.webp",
    altText: "Vol en montgolfière",
  },
  {
    title: "Traditional Turkish Hammam",
    imageUrl: "/images/Service/image11.webp",
    altText: "Expérience hammam turc",
  },
  {
    title: "Luxury Car Rental",
    imageUrl: "/images/Service/car.webp",
    altText: "Location de voiture de luxe",
  },
  {
    title: "City Night Tour",
    imageUrl: "/images/Service/night.webp",
    altText: "Visite nocturne de la ville",
  },
  {
    title: "Traditional Cooking Class",
    imageUrl: "/images/Service/cooking.webp",
    altText: "Cours de cuisine traditionnelle",
  },
  {
    title: "Desert Safari Experience",
    imageUrl: "/images/Service/desert.webp",
    altText: "Aventure safari dans le désert",
  },
];

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
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute top-4 left-4 rounded-md bg-orange-500 px-3 py-1 text-sm font-bold uppercase text-white shadow-md">
          30% OFF
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
          <h3 className="mb-3 text-xl font-semibold text-white drop-shadow-md">
            {title}
          </h3>
          <Link href="/Service/1">
            <span className="cursor-pointer rounded-lg border border-white bg-transparent px-6 py-2 text-sm font-medium text-white transition duration-300 ">
              View Service
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Service_Liste: React.FC = () => {
  return (
    <section className="bg-orange-50/70 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">
          Up to 30% Off on{" "}
          <span className="text-orange-600">Services</span>
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

        {/* --- Pagination pro --- */}
        <div className="mt-12 flex justify-center items-center space-x-2 text-sm">
            <button
            aria-label="Previous page"
            title="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400 text-orange-500 hover:bg-orange-100 hover:text-orange-600 transition"
            >
            <ChevronLeft size={20} />
            </button>

          <button className="h-10 w-10 rounded-full bg-orange-500 text-white font-semibold shadow-md">
            1
          </button>
          <button className="h-10 w-10 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-100 hover:text-orange-600">
            2
          </button>
          <button className="h-10 w-10 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-100 hover:text-orange-600">
            3
          </button>

          <span className="mx-1 text-orange-400">...</span>

          <button className="h-10 w-10 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-100 hover:text-orange-600">
            10
          </button>

            <button
            aria-label="Next page"
            title="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400 text-orange-500 hover:bg-orange-100 hover:text-orange-600 transition"
            >
            <ChevronRight size={20} />
            </button>

        </div>
      </div>
    </section>
  );
};

export default Service_Liste;
