"use client";

import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const tags = [
  "#Travel",
  "#Voyage",
  "#Turkey",
  "#Türkiye",
  "#Istanbul",
  "#Izmir",
  "#Antalya",
  "#Cappadocia",
  "#Medical",
  "#Dental Care",
  "#Travel Agency",
  "#Holiday Deals",
  "#Cultural Trips",
  "#Beach Escape",
];

const GlobalTagsComponent: React.FC = () => {
  return (
    <div
      className={`
        ${roboto.className}
        w-full 
        max-w-sm 
        bg-white 
        rounded-xl 
        p-6 
        shadow-sm 
        border border-gray-100
        ml-auto
        mt-8
      `}
    >
      {/* Titre */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Popular Tags
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="
              px-4 
              py-1.5 
              text-sm 
              rounded-lg 
              bg-orange-100 
              text-orange-600 
              font-medium 
              cursor-pointer
              hover:bg-orange-200
              transition
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GlobalTagsComponent;
