import BlockquoteComponent from '@/Components/Blog/BlockquoteComponent'
import BlogHeader from '@/Components/Blog/Blogabout'
import CategoriesComponent from '@/Components/Blog/CategoriesComponent'
import Hero_blog from '@/Components/Blog/Hero'
import RecentPostsComponent from '@/Components/Blog/RecentPostsComponent'
import SearchComponent from '@/Components/Blog/SearchComponent'
import Navbar from '@/Components/Navbar/Nav'
import TopBar from '@/Components/TopBar/TopBar'
import React from 'react'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // Ajout de 900 pour le titre principal
});

export default function page() {
  return (
    <div className={`${roboto.className}`}>
        <TopBar/>
        <Navbar/>
        <Hero_blog/>
        <div className="max-w-7xl mx-auto mt-15 px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {/* Partie gauche (2/3) */}
        <div className="lg:col-span-2">
          <img 
                src="/images/izmir.jpg" 
                alt="DESCRIPTION_IMAGE" 
                className="w-full h-auto object-cover rounded-xl mb-8"
            />
          <BlogHeader/>
          <BlockquoteComponent/>
                {/* Description / Premier paragraphe */}
          <p className="text-gray-600 mt-7 leading-relaxed text-base">

            Nown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also electronic typesetting remaining 
            essentially unchanged. It was popularised in the with the release of Letraset sheets 
            containingn an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centurie. 
            Over the years, this classic passage has become a standard reference for designers 
            and typographers seeking a balanced and readable block of text. Its structure and 
            rhythm make it ideal for demonstrating visual hierarchy, spacing, and overall layout 
            in modern web design. Despite technological evolution, its purpose and impact have 
            remained timeless, showing how thoughtful typography can elevate any digital experience.
          </p>

        </div>

        {/* Partie droite (1/3) */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="w-full max-w-[370px]">
            <SearchComponent/>
            <CategoriesComponent/>
            <RecentPostsComponent/>
        {/* Image à droite */}
        <div
          className="
            w-full
            max-w-sm
            bg-white
            rounded-xl
            mt-8
            border border-gray-100
            shadow-sm
          "
        >
          <div className="relative w-full">
            <img
              src="/images/blog-sidebar-ads.jpg"
              alt="Blog Image"
              className="w-full h-auto object-cover rounded-lg"
            />

            {/* Bouton BOOK NOW */}
            <button
              className="
                absolute 
                bottom-20 
                left-1/2 
                -translate-x-1/2 
                bg-gray-100 
                text-gray-700 
                text-m 
                font-medium 
                px-10 
                py-3 
                rounded-[6px] 
                shadow-lg
                hover:bg-gray-100
                transition
              "
            >
              Book Now
            </button>
          </div>
        </div>


          </div>
        </div>
      </div>
    </div>
  )
}
