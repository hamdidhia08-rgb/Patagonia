"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Heart, Image as ImageIcon, ChevronLeft, ChevronRight, X , MapPin } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const images = [
  "/images/Service/images.avif",
  "/images/Service/image8.jpg",
  "/images/Service/image7.webp",
  "/images/Service/image2.jpg",
  "/images/Service/image9.webp",
];

export default function DoiInthanonTour() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className={`${roboto.variable} font-sans w-full max-w-7xl mx-auto px-5 py-10`}>
    {/* Breadcrumb */}
<div className="flex flex-wrap items-center text-sm text-gray-500 gap-1 sm:gap-2 mb-3">
  <Link href="/" className="hover:underline whitespace-nowrap">Home</Link>
  <span className="whitespace-nowrap">/</span>
  <span className="truncate sm:whitespace-normal">
    Hagia Sophia & Blue Mosque Walking Tour
  </span>
</div>


    <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
  <div>
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Hagia Sophia & Blue Mosque Walking Tour
    </h1>
    <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm sm:text-base">
      <span className="text-red-500 font-semibold">★ 4.8</span>
      <span>(2 reviews)</span>
      <MapPin size={16} className="text-gray-400" />
      <span className="text-gray-600">Istanbul, Turkey</span>
    </div>
  </div>

  <div className="flex items-center gap-2 md:gap-3">
    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
      <Share2 size={20} />
    </button>

    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
      <Heart size={20} />
    </button>
  </div>
</div>


      {/* Images Grid */}
     <div className="grid grid-cols-1 md:grid-cols-[57%_43%] gap-2 mt-8">
  {/* Main Image */}
  <div className="relative cursor-pointer rounded-xl overflow-hidden" onClick={() => openModal(0)}>
    <Image
      src={images[0]}
      alt="Main Tour"
      width={1200}
      height={700}
      className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-xl transform transition duration-300 hover:scale-105 md:hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-40 transition rounded-xl"></div>
  </div>

  {/* Right Images */}
  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-64 sm:h-80 md:h-[420px]">
    {images.slice(1).map((src, i) => (
      <div key={i} className="relative cursor-pointer rounded-xl overflow-hidden" onClick={() => openModal(i + 1)}>
        <Image
          src={src}
          alt={`Right ${i + 1}`}
          width={700}
          height={420}
          className="w-full h-full object-cover rounded-xl transform transition duration-300 hover:scale-105 md:hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-40 transition rounded-xl"></div>
        {i === 3 && (
          <button
            className="
              absolute bottom-2 left-1/2 -translate-x-1/2
              bg-white/80 backdrop-blur-sm 
              text-black/80 font-semibold 
              px-3 py-1 rounded-lg 
              hover:bg-white/90 transition
              flex items-center gap-1
              text-xs sm:text-sm
              whitespace-nowrap">
            <ImageIcon size={16} />
            All Photos
          </button>

        )}
      </div>
    ))}
  </div>
</div>


      {/* Modal */}
{isModalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    onClick={closeModal}
  >
    <div
      className="relative max-w-4xl w-full mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Bouton close */}
      <button
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 sm:p-2 transition"
        onClick={closeModal}
      >
        <X size={24} />
      </button>

      {/* Image fixe avec même taille pour toutes */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Modal ${currentIndex}`}
          width={1200}  // width fixe pour Next.js Image
          height={700}  // height fixe pour Next.js Image
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 sm:p-2 text-white bg-black/30 rounded-r-full hover:bg-black/50 transition"
        onClick={prevImage}
      >
        <ChevronLeft size={30} />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 sm:p-2 text-white bg-black/30 rounded-l-full hover:bg-black/50 transition"
        onClick={nextImage}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  </div>
)}

    </section>
  );
}
