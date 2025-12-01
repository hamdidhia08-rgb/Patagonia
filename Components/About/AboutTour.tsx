"use client";

import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AboutTour: React.FC = () => {
  return (
    <div className={`${roboto.className} flex flex-col gap-6 pt-5`}>
      {/* Title & Description */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          About Tour Package
        </h2>
        <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
          Istanbul, the city where East meets West, and its surrounding region
          offer a perfect blend of history, culture, and vibrant life. Whether
          you’re exploring iconic landmarks like Hagia Sophia and the Blue
          Mosque, savoring traditional Turkish cuisine, or cruising along the
          Bosphorus, this region has something for every traveler.
        </p>
      </div>

      {/* Info Box */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <InfoItem
          icon="/images/icons/svgviewer-output.svg"
          label="Accomodation"
          value="5 Star Hotel"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (1).svg"
          label="Meals"
          value="Breakfast & Dinner"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (2).svg"
          label="Transportation"
          value="Taxi, Car"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (3).svg"
          label="Group Size"
          value="10-20"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (4).svg"
          label="Language"
          value="English, Spanish"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (5).svg"
          label="Animal"
          value="Cat, Pet only"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (6).svg"
          label="Age Range"
          value="18-45 (Year)"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (7).svg"
          label="Season"
          value="Winter Season"
        />
        <InfoItem
          icon="/images/icons/svgviewer-output (8).svg"
          label="Category"
          value="Adventure"
        />
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 mt-1">
    <div className="flex-shrink-0 pt-2">
      <Image
        src={icon}
        alt={label}
        width={26}
        height={26}
        className="opacity-80"
      />
    </div>

    <div className="flex flex-col items-start">
      <span className="text-gray-700 text-xs sm:text-sm">{label}</span>
      <p className="font-medium text-gray-900 text-sm sm:text-base">{value}</p>
    </div>
  </div>
);

export default AboutTour;
