"use client";

import React from "react";
import { Mail } from "lucide-react";

interface NewsletterSectionProps {}

const NewsletterSection: React.FC<NewsletterSectionProps> = () => {
  return (
   <section
  className="relative w-full bg-cover bg-center bg-fixed bg-[url('/images/mask_group-1.webp')]"
>

      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl mx-auto py-24 px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Travel Community</h2>
        <p className="text-lg md:text-xl mb-8">
          Travel Tips, promotions and special deals. <br />
          Directly to your inbox.
        </p>

        {/* Formulaire d'inscription */}
        <form className="flex flex-row justify-center w-full max-w-sm sm:max-w-md mx-auto gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 rounded-l-lg border-none outline-none text-gray-900 bg-white text-sm sm:text-base"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-1 sm:gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-r-lg text-sm sm:text-base transition"
          >
            <Mail size={16} />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
