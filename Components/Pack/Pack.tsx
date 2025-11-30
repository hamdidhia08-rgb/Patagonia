"use client";

import Image from "next/image";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";
// Ajout de ArrowRight et Users
import { Star, MapPin, ArrowRight, Plane, Users } from "lucide-react"; 
import { motion } from "framer-motion";
import FloatingShapes from "../FloatingShapes";
import { useEffect } from "react"; // <-- pour AOS
import AOS from "aos";
import "aos/dist/aos.css";

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

// --- Type pour une Offre de Voyage ---
type TripOffer = {
  id: number;
  type: "Luxury" | "Adventure" | "Relaxation" | "Cultural";
  title: string;
  location: string;
  durationDays: number;
  imageSrc: string;
  avatarSrc: string; 
  rating: number; 
  reviewsCount: number; 
  pricePerPerson: string;
  hasHotSale: boolean;
};

// --- Données Fictives ---
const recommendationsData: TripOffer[] = [
  {
    id: 1,
    type: "Cultural",
    title: "Istanbul City Explorer",
    location: "Istanbul",
    durationDays: 4,
    imageSrc: "/images/istanbul.webp",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.8,
    reviewsCount: 102,
    pricePerPerson: "350",
    hasHotSale: true,
  },
  {
    id: 2,
    type: "Adventure",
    title: "Cappadocia Hot Air Balloon",
    location: "Cappadocia",
    durationDays: 3,
    imageSrc: "/images/cappadocia3.jpg",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.9,
    reviewsCount: 88,
    pricePerPerson: "420",
    hasHotSale: true,
  },
  {
    id: 3,
    type: "Luxury",
    title: "Romantic Honeymoon in Bodrum",
    location: "Bodrum",
    durationDays: 5,
    imageSrc: "/images/hm1.jpg",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 5.0,
    reviewsCount: 42,
    pricePerPerson: "950",
    hasHotSale: true,
  },
    {
    id: 4,
    type: "Relaxation",
    title: "Turkish Riviera Family Escape",
    location: "Antalya",
    durationDays: 7,
    imageSrc: "/images/famille.jpg",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.7,
    reviewsCount: 65,
    pricePerPerson: "680",
    hasHotSale: false,
  },
  {
    id: 5,
    type: "Cultural",
    title: "Ephesus Historical Tour",
    location: "Selçuk",
    durationDays: 2,
    imageSrc: "/images/ephesus.jpg",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.6,
    reviewsCount: 50,
    pricePerPerson: "220",
    hasHotSale: false,
  },
  {
    id: 6,
    type: "Adventure",
    title: "Pamukkale & Hot Springs Adventure",
    location: "Pamukkale",
    durationDays: 3,
    imageSrc: "/images/CAPP.jpg",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=48",
    rating: 4.8,
    reviewsCount: 72,
    pricePerPerson: "310",
    hasHotSale: true,
  },
];


// --- Composant des Boutons de Catégorie (Inchangé) ---
const CategoryButtons: React.FC<{ activeCategory: string }> = ({ activeCategory }) => {
  const categories = ["Hotel", "Tour", "Activity", "Rental", "Car"];
  return (
    <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          // Couleur du bouton de catégorie mise à jour en orange
          className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
            category === activeCategory
              ? "bg-orange-600 text-white shadow-lg"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// --- Composant de la Carte de Recommandation (Final) ---
const RecommendationCard: React.FC<{ data: TripOffer }> = ({ data }) => {
  const { title, location, durationDays, imageSrc, pricePerPerson, hasHotSale, rating, reviewsCount, avatarSrc, type } = data;

  // Fonction pour afficher les étoiles (couleur jaune/orange pour le rating)
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${ 
          // Changement de la couleur des étoiles remplies au 'yellow-500' pour correspondre à l'orange
          i < Math.round(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300 fill-gray-300"
        }`}
      />
    ));
  };

  return (
    // Style de la carte: Compact et Pro
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full border border-gray-100 transition-shadow duration-300">
      
      {/* SECTION IMAGE (h-48) */}
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, 33vw"
          className="rounded-t-xl"
        />
        {/* 'Hot Sale!' Badge */}
        {hasHotSale && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 uppercase">
            Hot Sale!
          </div>
        )}

        {/* Avatar (en bas à droite de l'image) */}
        <div className="absolute bottom-[-16px] right-4 z-20">
          <Image
            src={avatarSrc}
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full border-2 border-white object-cover shadow-md"
          />
        </div>
      </div>

      {/* SECTION CONTENU PRINCIPAL (p-3, pt-5) */}
      <div className="p-3 pt-5">
        
        {/* Type de Voyage (Couleur passée à l'orange) */}
        <div className="flex items-center text-xs text-orange-600 font-semibold mb-1 uppercase tracking-wider">
            <Plane className="h-3 w-3 mr-1" />
            {type} Trip
        </div>

        {/* Titre */}
        <h3 className={`text-xl font-bold text-gray-900 mb-2 ${barlow.className}`}>
          {title}
        </h3>

        {/* Localisation et Durée (Taille réduite à text-sm) */}
        <div className="flex items-center text-gray-600 mb-3 text-sm">
            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
            <span className="font-medium">{location}</span>
            {/* Flèche double, plus fine pour l'élégance */}
            <span className="mx-2 text-base text-gray-500">↔</span> 
            <span className="font-medium">{durationDays} Days</span>
        </div>

        {/* Ligne Séparatrice */}
        <div className="border-t border-gray-200 my-3"></div>

        {/* SECTION PRIX & BOOKING (Bouton Orange clair + plus petit) */}
          <div className="flex justify-between items-center">
            
            {/* Bouton "Book Now" modifié */}
            <button
              className={`flex items-center justify-center 
                bg-orange-600 hover:bg-orange-500 text-white 
                font-semibold py-1.5 px-3 rounded-md 
                shadow-md transition-colors duration-200 
                text-sm ${barlow.className} tracking-wider`}
            >
              Book Now <ArrowRight className="h-4 w-4 ml-1 stroke-[1.5]" />
            </button>

            {/* Bloc Prix (inchangé) */}
            <div className="text-right">
              <p className="text-sm text-gray-600">Per Person</p>
              <p className="text-3xl font-extrabold text-gray-900">${pricePerPerson}</p>
            </div>
          </div>

        
        {/* Ligne Séparatrice du bas */}
        <div className="border-t border-gray-200 my-3"></div>

        {/* SECTION REVIEW & Group Rates */}
        <div className="flex justify-between items-center text-sm">
            {/* Etoiles et Note */}
            <div className="flex items-center space-x-1">
                <div className="flex items-center">
                    {renderStars(rating)}
                </div>
                <span className="font-bold text-gray-800">{rating.toFixed(1)}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">
                    {reviewsCount} Reviews
                </span>
            </div>

            {/* Group rates available */}
            <div className="text-gray-500 flex items-center">
                <Users className="h-4 w-4 mr-1 text-gray-400" />
                <span className="text-xs">Group rates available</span>
            </div>
        </div>
        
      </div>
    </div>
  );
};

// --- Composant Principal (Mise à jour des boutons de catégorie) ---
const RecommendedSection: React.FC = () => {
   useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // animation qu'une seule fois
    });
  }, []);
  return (
    <div className="relative w-full">

      {/* --- IMAGE GAUCHE (vertical center) --- */}
      <Image
        src="/images/bg-03.png"
        alt="Left Decoration"
        width={180}
        height={220}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-0"
      />

      {/* --- IMAGE DROITE (vertical center) --- */}
<Image
  src="/images/image-03.png"
  alt="Right Decoration"
  width={240}
  height={240}
  className="hidden md:block absolute -right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
/>


      <section className={`py-12 px-4 md:px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100 ${barlow.className}`}>
<div className="relative w-full flex flex-col items-center justify-center mb-8 overflow-visible z-20">

  {/* === FORMES ANIMÉES AUTOUR DU TITRE === */}
  
  <FloatingShapes/>


  {/* Sous-titre */}
  <p data-aos="fade-up" className={`${hand.className}  text-center text-orange-600 text-lg md:text-4xl mb-2`}>
    Discover our top picks
  </p>

  {/* Titre principal */}
  <h2  data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-3xl font-bold text-center text-gray-800 relative z-10">
    Recommended for you with the best deals and experiences
  </h2>
  </div>


      {/* Boutons de catégories */}
        <div data-aos="fade-up" data-aos-delay="200">
          <CategoryButtons activeCategory="Tour" />
        </div>

      <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full justify-items-center">
          {recommendationsData.map((data) => (
            <RecommendationCard key={data.id} data={data} />
          ))}
        </div>
      </div>

      {/* Ligne décorative + bouton Voir Plus */}
      <div className="mt-10 flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
        <div className="w-24 h-1 bg-gray-400 rounded mb-4"></div>
        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition">
          Voir Plus
        </button>
      </div>
    </section>
    </div>
  );
};

export default RecommendedSection;