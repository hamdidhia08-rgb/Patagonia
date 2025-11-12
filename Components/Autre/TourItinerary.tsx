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

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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

interface CityItinerary {
  city: string;
  days: TourDay[];
}

const cityData: CityItinerary[] = [
  {
    city: "Istanbul",
    days: [
      {
        day: "Day-01",
        title: "Hagia Sophia & Blue Mosque",
        description:
          "Explore Istanbul's iconic landmarks, visiting Hagia Sophia and the Blue Mosque. Take a stroll in Sultanahmet Square.",
        details: {
          transport: "Walk, Tram",
          activities: "Visit Hagia Sophia, Blue Mosque, Sultanahmet Square",
          meals: "Breakfast, Lunch, Dinner",
          accommodation: "Sultanahmet Hotel",
          accommodationLink: "#",
        },
      },
      {
        day: "Day-02",
        title: "Bosphorus Cruise & Spice Market",
        description:
          "Enjoy a scenic cruise along the Bosphorus and explore the colorful Spice Market.",
        details: {
          transport: "Boat, Walk",
          activities: "Bosphorus cruise, Spice Market shopping",
          meals: "Breakfast, Lunch",
          accommodation: "Sultanahmet Hotel",
          accommodationLink: "#",
        },
      },
      {
        day: "Day-03",
        title: "Topkapi Palace & Grand Bazaar",
        description:
          "Visit Topkapi Palace, home of Ottoman sultans, and shop for souvenirs at the Grand Bazaar.",
        details: {
          transport: "Walk, Tram",
          activities: "Topkapi Palace tour, Grand Bazaar shopping",
          meals: "Breakfast, Lunch, Dinner",
          accommodation: "Sultanahmet Hotel",
          accommodationLink: "#",
        },
      },
      {
        day: "Day-04",
        title: "Asian Side & Maiden's Tower",
        description:
          "Take a ferry to the Asian side of Istanbul and visit the iconic Maiden's Tower.",
        details: {
          transport: "Ferry, Walk",
          activities: "Ferry ride, Visit Maiden's Tower, Street food tasting",
          meals: "Breakfast, Lunch",
          accommodation: "Sultanahmet Hotel",
          accommodationLink: "#",
        },
      },
    ],
  },
  {
    city: "Antalya",
    days: [
      {
        day: "Day-01",
        title: "Old Town Kaleici",
        description:
          "Walk through Antalya's historical old town, visiting ancient gates, narrow streets and quaint shops.",
        details: {
          transport: "Walk",
          activities: "Explore Kaleici, Hadrian's Gate, Marina walk",
          meals: "Breakfast, Lunch, Dinner",
          accommodation: "Antalya Beach Resort",
          accommodationLink: "#",
        },
      },
      {
        day: "Day-02",
        title: "Duden Waterfalls & Beach Relaxation",
        description:
          "Visit the famous Duden Waterfalls and spend the afternoon relaxing on Antalya’s beautiful beaches.",
        details: {
          transport: "Car",
          activities: "Duden Waterfalls, Beach relaxation, Swimming",
          meals: "Breakfast, Lunch",
          accommodation: "Antalya Beach Resort",
          accommodationLink: "#",
        },
      },
      {
        day: "Day-03",
        title: "Aspendos & Perge Ancient Ruins",
        description:
          "Explore the well-preserved Roman theater of Aspendos and visit the ancient city of Perge.",
        details: {
          transport: "Car",
          activities: "Aspendos Theater, Perge ruins visit",
          meals: "Breakfast, Lunch",
          accommodation: "Antalya Beach Resort",
          accommodationLink: "#",
        },
      },
     
    
    ],
  },
  {
    city: "Cappadocia",
    days: [
      {
        day: "Day-01",
        title: "Göreme Open Air Museum",
        description:
          "Visit the Göreme Open Air Museum, famous for its rock-cut churches and frescoes.",
        details: {
          transport: "Car, Walk",
          activities: "Explore Göreme Open Air Museum, Fairy Chimneys",
          meals: "Breakfast, Lunch, Dinner",
          accommodation: "Cappadocia Cave Suites",
          accommodationLink: "#",
        },
      },
      {
        day: "Day-02",
        title: "Hot Air Balloon Ride",
        description:
          "Experience sunrise over Cappadocia with a hot air balloon ride, enjoying breathtaking landscapes.",
        details: {
          transport: "Balloon, Car",
          activities: "Hot air balloon flight, Photography",
          meals: "Breakfast, Lunch",
          accommodation: "Cappadocia Cave Suites",
          accommodationLink: "#",
        },
      },
     
      
    ],
  },
];


const TourDayItem: React.FC<{ day: TourDay }> = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const renderDetails = (details: ActivityDetail) => (
    <div className="mt-4 p-4 border-t border-gray-100 space-y-3">
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        {day.description}
      </p>

      <DetailLine icon={Plane} label="Transport" value={details.transport} />
      <DetailLine icon={Activity} label="Activities" value={details.activities} />
      <DetailLine icon={Utensils} label="Meals" value={details.meals} />
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

const TourItinerary: React.FC = () => {
  return (
    <div className={`max-w-3xl bg-white rounded-lg mt-10 ${roboto.className}`}>
      {cityData.map((cityItem, cityIndex) => (
        <div key={cityIndex} className="mb-12">
          {/* City Header */}
          <div className="flex items-center p-3 rounded-md mb-6 mt-8">
            <div className="bg-[#1781fe] w-10 h-10 flex items-center justify-center rounded-full mr-2">
              <Send className="w-5 h-5 text-white rotate-45" />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {cityItem.city}{" "}
              <span className="ml-3 font-normal text-sm text-gray-600">
                (Departure: 9:00 am – 9:30 am)
              </span>
            </span>
          </div>

          {/* City itinerary */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {cityItem.days.map((day, dayIndex) => (
              <TourDayItem key={dayIndex} day={day} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourItinerary;
