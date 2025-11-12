"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Plane,
  Send,
  Car,
  Ship,
  Utensils,
  Hotel,
  Activity,
} from "lucide-react";
import { Roboto } from "next/font/google";

// --- Import et configuration de la police ---
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// --- Types TypeScript pour les données ---
interface ActivityDetail {
  transport: string;
  activities: string;
  meals: string;
  accommodation: string;
  accommodationLink: string;
}

interface TourDay {
  day: string;
  title: string;
  description: string;
  details: ActivityDetail | null;
}

// --- Données factices de l'itinéraire ---
const itineraryData: TourDay[] = [
  {
    day: "Day-01",
    title: "Eiffel Tower – The symbol of France",
    description:
      "The Eiffel Tower is the heart of Paris and offers a variety of exciting activities for visitors. As like, climb the Eiffel Tower, take the elevator to the summit, sunset & night view, picnic at champ de mars & bike tour around the Eiffel Tower.",
    details: {
      transport: "Car, Flight, Boat",
      activities: "Climb the Eiffel Tower, Sunset & night view, Bike tour.",
      meals: "Brakefast, Launch, Snacks",
      accommodation: "Rajonikanto Hotel",
      accommodationLink: "#",
    },
  },
  {
    day: "Day-02",
    title: "Louvre Museum – Home of the Mona Lisa",
    description:
      "Explore the world's largest art museum and a historic monument in Paris. Marvel at masterpieces like the Mona Lisa and the Venus de Milo.",
    details: null,
  },
  {
    day: "Day-03",
    title: "Notre-Dame – Iconic Gothic Cathedral",
    description:
      "Visit the world-famous medieval Catholic cathedral known for its French Gothic architecture.",
    details: null,
  },
];

// --- Sous-composant pour un seul jour ---
const TourDayItem: React.FC<{ day: TourDay }> = ({ day }) => {
  const [isOpen, setIsOpen] = useState(day.day === "Day-01");

  const toggleOpen = () => setIsOpen(!isOpen);

  const renderDetails = (details: ActivityDetail) => (
    <div className="mt-4 p-4 border-t border-gray-100 space-y-3">
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        {day.description}
      </p>

      <DetailLine icon={Plane} label="Transport" value={details.transport} />
      <DetailLine icon={Activity} label="Activities" value={details.activities} />
      <DetailLine
        icon={Utensils}
        label="Meals"
        value={details.meals.replace("Brakefast", "Breakfast")}
      />
      <div className="flex items-start text-sm">
        <Hotel className="w-4 h-4 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <div className="font-semibold text-gray-900 w-24 flex-shrink-0">
          Accommodation
        </div>
        <div className="text-gray-700 font-normal">
          : {details.accommodation}
          <a
            href={details.accommodationLink}
            className="text-blue-600 hover:text-blue-800 font-medium ml-4"
          >
            View Hotel
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`border-b ${
        isOpen ? "border-blue-100" : "border-gray-200"
      } last:border-b-0`}
    >
      <button
        onClick={toggleOpen}
        className={`w-full flex items-center justify-between p-4 transition-colors ${
          isOpen ? "bg-blue-50 text-blue-800" : "hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center text-left">
          <MapPin className="w-5 h-15 mr-3 text-gray-900 flex-shrink-0" />
          <span className="font-semibold text-gray-900">{day.day}</span>
          <span className="ml-4 font-medium text-gray-800">{day.title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 ml-4 transition-transform ${
            isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
          }`}
        />
      </button>

      {isOpen && day.details && <div className="p-4 bg-white">{renderDetails(day.details)}</div>}
      {isOpen && !day.details && (
        <div className="p-4 bg-white">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {day.description}
          </p>
        </div>
      )}
    </div>
  );
};

// Sous-composant utilitaire
const DetailLine: React.FC<{ icon: any; label: string; value: string }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="flex items-start text-sm">
    <Icon className="w-4 h-4 text-blue-500 mr-4 mt-1 flex-shrink-0" />
    <div className="font-semibold text-gray-900 w-24 flex-shrink-0">{label}</div>
    <div className="text-gray-700 font-normal">: {value}</div>
  </div>
);

// --- Composant principal ---
const TourItinerary: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpandAll = () => setIsExpanded(!isExpanded);

  return (
    <div className={`max-w-3xl bg-white rounded-lg mt-10 ${roboto.className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Tour Itinerary</h2>
        <button
          onClick={toggleExpandAll}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          {isExpanded ? "Collapse All -" : "Expand All +"}
        </button>
      </div>

  <div className="flex items-center p-3 rounded-md mb-6 mt-8">
  <div className="bg-[#1781fe] w-10 h-10 flex items-center justify-center rounded-full mr-2">
    <Send className="w-5 h-5 text-white rotate-45" />
  </div>
  <span className="text-lg font-semibold text-gray-800">
    Paris, France{" "}
    <span className="ml-3 font-normal text-sm text-gray-600">
      (Departure: 8:00 am – 8:30 am)
    </span>
  </span>
</div>


      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {itineraryData.map((day, index) => (
          <TourDayItem key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default TourItinerary;
