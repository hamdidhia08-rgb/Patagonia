"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Crée un marker personnalisé avec ton image
const customIcon = L.icon({
  iconUrl: "/images/marker2.png", // chemin vers ton image
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

export default function MapComponent() {
  const position: [number, number] = [41.0082, 28.9784]; // Istanbul

  return (
    <MapContainer
      // @ts-ignore
      center={position}
      // @ts-ignore
      zoom={17}
      style={{ height: "80vh", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        // @ts-ignore
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* @ts-ignore permet à TypeScript d’accepter la prop icon */}
      {/* <Marker> avec icon personnalisé */}
      {/* @ts-ignore */}
      <Marker position={position} icon={customIcon}>
        <Popup>Istanbul, Turkey</Popup>
      </Marker>
    </MapContainer>
  );
}
