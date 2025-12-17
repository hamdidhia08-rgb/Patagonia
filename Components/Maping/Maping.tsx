"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [41.0082, 28.9784] as [number, number];

const customIcon = L.icon({
  iconUrl: "/images/marker2.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

export default function Maping() {
  return (
    <MapContainer
      {...({
        center: position,
        zoom: 17,
        scrollWheelZoom: true,
        style: { height: "80vh", width: "100%" },
      } as any)}
    >
      <TileLayer
        {...({
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          attribution: "&copy; OpenStreetMap contributors",
        } as any)}
      />

      <Marker
        {...({
          position: position,
          icon: customIcon,
        } as any)}
      >
        <Popup>Istanbul, Turkey</Popup>
      </Marker>
    </MapContainer>
  );
}
