// app/page.jsx (ou page.js)
"use client";

import MapComponent from '@/Components/Maping/Maping';
import Navbar from '@/Components/Navbar/Nav';
import TopBar from '@/Components/TopBar/TopBar';

import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar (espace pour côté gauche ou droite) */}
        <div className="w-1/4 bg-gray-100 p-4">
          {/* Tu peux mettre ici des filtres ou infos */}
          <h2>Sidebar</h2>
        </div>

        {/* Map */}
        <div className="flex-1">
          <MapComponent/>
        </div>
      </div>
    </div>
  );
}
