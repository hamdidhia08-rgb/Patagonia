"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: "/images/10863973.png",  // ton icône ronde
  iconSize: [40, 40],               // largeur et hauteur du cercle
  iconAnchor: [20, 40],             // point de la map qui correspond au bas du marker
  popupAnchor: [0, -40],            // position du popup par rapport au marker
});

const MapCard: React.FC = () => {
  const position: [number, number] = [41.0082, 28.9784]; // Istanbul

  return (
    <div className="max-w-md w-full mt-8 h-full p-6 bg-white rounded-lg shadow-sm flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Our Location</h2>
      <div className="flex-1">
        <MapContainer
          // @ts-ignore
          center={position}
          // @ts-ignore
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-64 rounded-lg"
        >
          <TileLayer
            // @ts-ignore
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* @ts-ignore */}
          <Marker position={position} icon={customIcon}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapCard;
