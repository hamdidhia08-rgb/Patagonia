import Navbar from '@/Components/Navbar/Nav';
import TopBar from '@/Components/TopBar/TopBar';
import React from 'react';
import BlogCard2 from '@/Components/Blog/BlogCard';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import WhatsappButtons from "@/Components/WhatsappButtons";
import { Inter } from "next/font/google";
import { Search } from "lucide-react";
import Hero_blog from '@/Components/Blog/Hero';

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen"> {/* Fond gris pour toute la page */}
      <TopBar />
      <Navbar/>
      <Hero_blog/>
<div className={`${inter.className} w-full mt-7 py-8`}>
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* Titre à gauche */}
    <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
      Latest Featured{" "}
      <span className="text-orange-600">Articles</span>
    </h2>


    {/* Search Input */}
    <div className="relative w-full md:w-64">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white w-full rounded-md border border-gray-300 py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
      />
      
      <Search
        className="bg-white absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
    </div>

  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Section blogs */}
        <div className="w-full">
          <BlogCard2 />
        </div>

      </div>

          {/* --- Pagination pro --- */}
<div className="mt-8 flex justify-center items-center space-x-2 text-sm ">
  {/* Bouton précédent */}
  <button
    aria-label="Previous page"
    title="Previous page"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100 hover:text-orange-600 transition"
  >
    <ChevronLeft size={18} />
  </button>

  {/* Pages */}
  <button className="h-9 w-9 rounded-full bg-orange-500 text-white font-semibold shadow-sm">
    1
  </button>
  <button className="h-9 w-9 rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100 hover:text-orange-600">
    2
  </button>
  <button className="h-9 w-9 rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100 hover:text-orange-600">
    3
  </button>

  <span className="mx-1 text-orange-400 font-semibold">...</span>

  <button className="h-9 w-9 rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100 hover:text-orange-600">
    10
  </button>

  {/* Bouton suivant */}
  <button
    aria-label="Next page"
    title="Next page"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400 bg-white text-orange-500 hover:bg-orange-100 hover:text-orange-600 transition"
  >
    <ChevronRight size={18} />
  </button>
</div> 

    <br /><br />
      <WhatsappButtons/>
  <ScrollToTopButton/>
    </div>
  );
}

export default Blog;
