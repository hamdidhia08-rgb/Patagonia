"use client";

import React from "react";

const MapCard = () => {
  return (
    <div className="max-w-md w-full mt-8 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Our Location
      </h2>

      {/* Map simple */}
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          title="Istanbul Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.90%2C40.95%2C29.10%2C41.10&layer=mapnik"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      {/* Lien */}
      <a
        href="https://www.openstreetmap.org/#map=12/41.0082/28.9784"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-sm text-blue-600 hover:underline"
      >
        View on map
      </a>
    </div>
  );
};

export default MapCard;
