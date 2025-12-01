"use client";

import React from "react";
import Navbar from "@/Components/Navbar/Nav";
import TopBar from "@/Components/TopBar/TopBar";
import AboutTour from "@/Components/About/AboutTour";
import PriceCard from "@/Components/Card/PriceCard";
import Hero4 from "@/Components/Hero/Hero3";
import KeyFeaturesBar from "@/Components/Hero/Bar";
import PackageCard from "@/Components/Card/Packagecard";
import LocationCarousel from "@/Components/carrousel/LocationCarousel";
import TourHighlights from "@/Components/Autre/TourHighlights";
import TourItinerary from "@/Components/Autre/TourItinerary";
import DoiInthanonTour from "@/Components/DoiInthanonTour";
import CustomerReviews from "@/Components/CustomerReviews";
import WhatsappButtons from "@/Components/WhatsappButtons";
import ScrollToTopButton from "@/Components/ScrollToTopButton";

const Servie_detaille = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <DoiInthanonTour/>
      <KeyFeaturesBar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {/* Partie gauche (2/3) */}
        <div className="lg:col-span-2">
          <AboutTour />
        </div>

        {/* Partie droite (1/3) */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="w-full max-w-[370px]">
            <PriceCard />
          </div>
        </div>
      </div>

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Partie gauche (2/3) */}
        <div className="lg:col-span-2">
            <LocationCarousel/>
            <TourHighlights/>
            <TourItinerary/>
            <CustomerReviews/>
          
        </div>

        {/* Partie droite (1/3) */}
        <div className="flex justify-center lg:justify-end">
            {/* On force PriceCard à prendre toute la hauteur de AboutTour */}
            <div className="h-full w-full max-w-[370px]">
              <PackageCard/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Servie_detaille;
