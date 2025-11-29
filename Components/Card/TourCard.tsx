"use client";

import Image from "next/image";
import { Star, Heart, Clock, Users } from "lucide-react";
import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// ✅ Interface pour corriger les erreurs TS
interface TourCardProps {
  image: string;
  rating: number;
  reviews: number;
  location: string;
  title: string;
  duration: string;
  groupSize: string;
  description: string;
  price: number;
}

export default function TourCard({
  image,
  rating,
  reviews,
  location,
  title,
  duration,
  groupSize,
  description,
  price,
}: TourCardProps) {

const router = useRouter();
     const handleViewTour = () => {
    router.push(`/tours/2`);
  };
   
  return (
    <div
      className={`${inter.className} w-full border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition overflow-hidden flex`}
    >
      {/* LEFT IMAGE */}
      <div className="relative w-64 h-52 flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />

        <button className="absolute top-3 right-3 bg-white size-9 rounded-full shadow-sm flex items-center justify-center">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

    {/* MIDDLE CONTENT — description normale */}
<div className="flex flex-col pt-5 px-4 py-4 flex-grow space-y-1.5 leading-relaxed">

  {/* Rating + Location */}
  <div className="flex items-center gap-2 text-gray-600 text-sm">
    <Star className="w-4 h-4 text-red-500 fill-red-500" />
    <span className="font-medium">{rating}</span>
    <span className="text-gray-400">({reviews})</span>
    <span>•</span>
    <span>{location}</span>
  </div>

  {/* Title */}
  <h2 className="text-base font-medium text-gray-900 mt-1">
    {title}
  </h2>

  {/* Icons */}
  <div className="flex items-center gap-6 text-gray-500 text-sm mt-2">
    <div className="flex items-center gap-1">
      <Clock className="w-4 h-4" />
      <span>{duration}</span>
    </div>

    <div className="flex items-center gap-1">
      <Users className="w-4 h-4" />
      <span>{groupSize}</span>
    </div>
  </div>

  {/* Description juste en dessous */}
    <p className="text-gray-500 text-sm mt-2 line-clamp-2 max-w-[500px]">
    {description}
    </p>

</div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col justify-between items-center px-5 py-4 min-w-[150px] border-l border-gray-200">

        {/* PRICE */}
        <div className="flex items-baseline justify-center gap-1 mt-6 text-center text-gray-700">
          <span className="text-sm text-gray-500">from</span>
          <p className="text-xl font-medium text-gray-900">${price}</p>
          <span className="text-sm text-gray-500">/person</span>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3 mt-4 w-full items-center">
          <button onClick={handleViewTour} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition w-full">
            View tour
          </button>

          <button className="border border-gray-300 hover:bg-gray-100 px-5 py-2 rounded-full font-medium text-gray-700 transition flex items-center justify-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                d="M3 11l19-9-9 19-2-8-8-2z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View maps
          </button>
        </div>
      </div>
    </div>
  );
}
