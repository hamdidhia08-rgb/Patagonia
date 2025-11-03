import Hero1 from '@/Components/Hero/Hero1';
import Navbar from '@/Components/Navbar/Nav';
import TopBar from '@/Components/TopBar/TopBar';
import React from 'react';
import AboutBlog from '@/Components/Blog/AboutBlog';
import MostPopular from '@/Components/Blog/MostPopular';
import BlogCard from '@/Components/Blog/BlogCard';
import BlogCard2 from '@/Components/Blog/BlogCard';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import WhatsappButtons from "@/Components/WhatsappButtons";
const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen"> {/* Fond gris pour toute la page */}
      <TopBar />
      <Navbar />
      <Hero1 />

      {/* Container principal sous le Hero */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne principale pour les blogs */}
        <div className="lg:col-span-2 space-y-6">
        <BlogCard2/>

        </div>

        {/* Colonne droite */}
        <div className="space-y-6">
            <AboutBlog/>
            <MostPopular/>
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
