"use client";

import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const MapTour: React.FC = () => {
  return (
    <div className={`${roboto.className} flex flex-col gap-6 pt-5`}>
      {/* Titre */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Explore Istanbul
        </h2>
        <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
          Discover the beautiful city of Istanbul, where East meets West.
        </p>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200">
        <iframe
          title="Istanbul Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.53469854673!2d28.95342825869895!3d41.008238903657224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba418cbe40f7%3A0x400af0f66104820!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1701493200000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapTour;
