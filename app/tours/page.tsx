"use client";

import TourCard from "@/Components/Card/TourCard";
import FiltersSidebar from "@/Components/Filter/FiltersSidebar";
import HeroFilter from "@/Components/Hero/HeroFilter";
import Navbar from "@/Components/Navbar/Nav";
import TopBar from "@/Components/TopBar/TopBar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ToursPage() {
  return (
    <div className="bg-[#FBFBFB]">
      <TopBar />
      <Navbar />
      <HeroFilter />
      <div className="w-full bg-[#FBFBFB] max-w-[1400px] mx-auto px-0 py-10">

        <div className="flex gap-10">

          {/* LEFT — Filters */}
          <div className="w-[320px] flex-shrink-0">
            <FiltersSidebar />
          </div>

          {/* RIGHT — List of tours */}
          <div className="flex-1">
            {/* 👇 Ajouter la font Inter ici */}
            <div className={`${inter.className} flex items-center justify-between mb-6`}>
              <p className="text-gray-600 font-medium">14 tours found</p>

              <div className="flex items-center gap-4">
                <button className="text-gray-600 underline">Clear filter</button>

                <div className="border rounded-full px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 transition">
                  Sort by ▾
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
           <TourCard
            image="/images/cappadocia3.jpg"
            rating={5}
            reviews={1}
            location="Cappadocia"
            title="Hot Air Balloon Sunrise Experience"
            duration="3 – 5 hours"
            groupSize="0 – 12"
            description="Enjoy a breathtaking sunrise ride over the unique landscapes of Cappadocia with a guided tour."
            price={250}
          />

          <TourCard
            image="/images/sainte-sophie-2-1-1300x867.png"
            rating={4.8}
            reviews={2}
            location="Istanbul"
            title="Hagia Sophia & Blue Mosque Walking Tour"
            duration="4 – 6 hours"
            groupSize="0 – 20"
            description="Explore Istanbul's iconic landmarks, including Hagia Sophia and the Blue Mosque, on this guided walking tour."
            price={70}
          />


              <TourCard
                image="/images/Bodrum.webp"
                rating={4.7}
                reviews={35}
                location="Bodrum"
                title="Bodrum Castle & Marina Sightseeing Tour"
                duration="4 – 5 hours"
                groupSize="1 – 20"
                description="Explore the historical Bodrum Castle, enjoy the stunning views of the marina, and discover local culture on this half-day tour."
                price={60}
              />

              <TourCard
                image="/images/antalya.jpg"
                rating={4.9}
                reviews={50}
                location="Antalya"
                title="Antalya Old Town & Waterfalls Day Trip"
                duration="6 – 8 hours"
                groupSize="0 – 25"
                description="Visit the charming streets of Antalya’s Old Town, explore ancient landmarks, and enjoy the beautiful waterfalls nearby on this full-day tour."
                price={75}
              />
              <TourCard
              image="/images/pamukkale-2.jpg"
              rating={4.8}
              reviews={40}
              location="Pamukkale"
              title="Pamukkale & Hierapolis Ancient City Tour"
              duration="5 – 7 hours"
              groupSize="0 – 20"
              description="Explore the stunning white terraces of Pamukkale and the ancient ruins of Hierapolis. A perfect day trip to marvel at natural beauty and history."
              price={80}
            />

            <TourCard
              image="/images/Fethiye.jpg"
              rating={4.7}
              reviews={35}
              location="Fethiye"
              title="Fethiye Blue Lagoon & Ölüdeniz Beach Tour"
              duration="6 – 9 hours"
              groupSize="0 – 25"
              description="Relax at the famous Blue Lagoon, enjoy crystal-clear waters at Ölüdeniz Beach, and take in the breathtaking coastal scenery on this full-day tour."
              price={85}
            />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
