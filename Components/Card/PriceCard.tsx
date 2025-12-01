"use client";

import { CheckCircle, Info } from "lucide-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"; 
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const PriceCard: React.FC = () => {
    const router = useRouter(); 

  const handleCheckAvailability = () => {
    router.push("/checkout"); 
  };
  return (
    <div
      className={`${roboto.className} bg-[#f7faff] rounded-2xl p-6 sm:p-7 w-full max-w-[370px] shadow-md relative text-gray-800`}
    >
      {/* Badge -10% */}
      <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
        10% Off
      </div>

      {/* Point bleu */}
      <div className="w-3 h-3 bg-blue-400 rounded-full mb-4"></div>

      {/* Prix */}
      <p className="text-gray-600 text-sm font-medium mb-2">Starting From</p>
      <div className="flex flex-wrap items-baseline mb-4 gap-x-1">
        <span className="text-gray-400 line-through text-lg">$899</span>
        <span className="text-3xl font-bold text-gray-900">$800</span>
        <span className="text-gray-600 text-sm sm:text-base">/per person</span>
      </div>

      {/* Garanties */}
      <ul className="space-y-3 mb-6">
        <li className="flex items-center gap-2 text-gray-700">
          <CheckCircle size={18} className="text-blue-500" />
          <span>Money Back Guarantee.</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <CheckCircle size={18} className="text-blue-500" />
          <span>Your Safety is Our Top Priority.</span>
        </li>
      </ul>

      {/* Boutons */}
      <div className="space-y-3">
        {/* Bouton principal */}
        <button
          className="w-full bg-[#ff6d50] 
            text-white font-semibold py-2.5 rounded-lg shadow-md 
            hover:shadow-lg hover:scale-[1.02] active:scale-[0.99]
            transition-all duration-200 ease-in-out flex items-center justify-center gap-2 text-sm"
            onClick={handleCheckAvailability}
        >
          Check Availability <span className="text-base">↗</span>
        </button>

        {/* Bouton WhatsApp */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg 
          transition flex items-center justify-center gap-2 text-sm shadow-sm"
        >
          <Image
            src="/images/Watsupp_icon.png"
            alt="WhatsApp"
            width={18}
            height={18}
            className="object-contain"
          />
          Order on WhatsApp
        </button>

        {/* Bouton secondaire */}
        <button
          className="w-full border border-gray-300 text-blue-600 font-semibold py-2.5 rounded-lg 
          hover:bg-blue-50 transition flex items-center justify-center gap-2 text-sm"
        >
          Submit an Enquiry <span className="text-base">↗</span>
        </button>
      </div>

      {/* Bonus */}
      <div className="flex items-center text-gray-600 text-sm mt-5">
        <Info size={16} className="mr-2 text-gray-500" />
        <span>Bonus Activity Included – Limited Time!</span>
      </div>
    </div>
  );
};

export default PriceCard;
