"use client";

import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";
import { Star, Heart, MapPin } from "lucide-react";

// --- Définition des Polices ---
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const hand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
});

// --- Type pour une Recommandation ---
type Recommendation = {
  id: number;
  type: "Hotel" | "Tour" | "Activity" | "Rental" | "Car";
  title: string;
  location: string;
  imageSrc: string;
  avatarSrc: string;
  rating: number;
  reviewsCount: number;
  ratingText: string;
  pricePerNight: string;
};

// --- Données Fictives ---
const recommendationsData: Recommendation[] = [
  {
    id: 1,
    type: "Hotel",
    title: "Istanbul Grand Hotel",
    location: "Istanbul",
    imageSrc: "/images/imag1 (1).jpg",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 5,
    reviewsCount: 3,
    ratingText: "Excellent",
    pricePerNight: "200.00",
  },
  {
    id: 2,
    type: "Hotel",
    title: "Cappadocia Cave Suites",
    location: "Cappadocia",
    imageSrc: "/images/cappadocia3.jpg",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 5,
    reviewsCount: 2,
    ratingText: "Excellent",
    pricePerNight: "185.00",
  },
  {
    id: 3,
    type: "Hotel",
    title: "Bodrum Paradise Hotel",
    location: "Bodrum",
    imageSrc: "/images/image2.jpg",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.8,
    reviewsCount: 3,
    ratingText: "Excellent",
    pricePerNight: "180.00",
  },
  {
    id: 4,
    type: "Hotel",
    title: "Antalya Beach Resort",
    location: "Antalya",
    imageSrc: "/images/830008420-1740-1740-w.jpg",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.7,
    reviewsCount: 5,
    ratingText: "Très Bien",
    pricePerNight: "220.00",
  },
  {
    id: 5,
    type: "Hotel",
    title: "Izmir Sea View Hotel",
    location: "Izmir",
    imageSrc: "/images/MTY5MDM3MzA4ODUzMg.jpg",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.6,
    reviewsCount: 4,
    ratingText: "Très Bien",
    pricePerNight: "190.00",
  },
  {
    id: 6,
    type: "Hotel",
    title: "Pamukkale Thermal Hotel",
    location: "Pamukkale",
    imageSrc: "/images/605501047.jpg",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.9,
    reviewsCount: 6,
    ratingText: "Exceptionnel",
    pricePerNight: "210.00",
  },
];

// --- Composant des Boutons de Catégorie ---
const CategoryButtons: React.FC<{ activeCategory: string }> = ({ activeCategory }) => {
  const categories = ["Hotel", "Tour", "Activity", "Rental", "Car"];
  return (
    <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
            category === activeCategory
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// --- Composant de la Carte de Recommandation ---
const RecommendationCard: React.FC<{ data: Recommendation }> = ({ data }) => {
  const { title, location, imageSrc, avatarSrc, rating, reviewsCount, ratingText, pricePerNight } = data;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="hover:scale-[1.03] transition-transform duration-500 ease-in-out"
        />
        <div className="absolute top-4 right-4 bg-white/70 p-2 rounded-full backdrop-blur-sm z-10">
          <Heart className="h-5 w-5 text-red-500 fill-red-500" />
        </div>
        <div className="absolute bottom-[-16px] right-4 z-20">
          <Image
            src={avatarSrc}
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>

      <div className="p-4 pt-6">
        {/* Sous-titre */}
        <p className={`${hand.className} text-lg md:text-xl font-medium text-[#f1a435] mb-1`}>Top Choice</p>
        {/* Titre */}
        <h3 className={`text-lg md:text-xl font-semibold text-gray-800 mb-1 ${barlow.className}`}>
          {title} - Experience the best stay in town!
        </h3>

        <p className="text-sm text-gray-500 mb-4 flex items-center">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </p>

        {/* Ligne décorative */}
        <div className="border-t-2 border-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 my-4"></div>

        {/* Notes et Prix */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-gray-700">
              <span>({ratingText})</span>
              <span>({reviewsCount} reviews)</span>
            </div>
          </div>

          <div className="bg-[#f99304] text-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-base font-bold tracking-wide">€{pricePerNight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Composant Principal ---
const RecommendedSection: React.FC = () => {
  return (
    <section className={`py-12 px-4 md:px-8 bg-gray-100 ${barlow.className}`}>
      {/* Sous-titre général */}
      <p className={`${hand.className} text-center text-[#f1a435] text-lg md:text-4xl mb-2`}>
        Discover our top picks
      </p>
      {/* Titre principal */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        Recommended for you with the best deals and experiences
      </h2>

      <CategoryButtons activeCategory="Hotel" />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full justify-items-center">
          {recommendationsData.map((data) => (
            <RecommendationCard key={data.id} data={data} />
          ))}
        </div>
      </div>

      {/* Ligne décorative + bouton Voir Plus */}
      <div className="mt-10 flex flex-col items-center">
        <div className="w-24 h-1 bg-gray-400 rounded mb-4"></div>
        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition">
          Voir Plus
        </button>
      </div>
    </section>
  );
};

export default RecommendedSection;
