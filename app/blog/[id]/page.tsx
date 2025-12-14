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
import InfoImageBlock from '@/Components/Blog/InfoImageBlock'
import InfoImageBlock2 from '@/Components/Blog/InfoImageBlock2'
import CommentsBlock from '@/Components/Blog/CommentsBlock'
import GlobalTagsComponent from '@/Components/Blog/GlobalTagsComponent'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function page() {
  return (
    <div className={`${roboto.className}`}>
        <TopBar/>
        <Navbar/>
        <Hero_blog/>

        <div className="max-w-7xl mx-auto mt-15 px-4 sm:px-6 py-8 sm:py-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          
          {/* Partie gauche (augmentée légèrement) */}
          <div className="lg:flex-1 lg:max-w-2/3">
            <img 
              src="/images/izmir.jpg" 
              alt="DESCRIPTION_IMAGE" 
              className="w-full h-auto object-cover rounded-xl mb-8"
            />
            <BlogHeader/>
            <BlockquoteComponent/>
            <p className="text-gray-600 mt-7 leading-relaxed text-base">
              Nown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also electronic typesetting remaining 
              essentially unchanged. It was popularised in the with the release of Letraset sheets 
              containing an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries. Over the years, this classic 
              passage has become a standard reference for designers and typographers seeking a 
              balanced and readable block of text. Its structure and rhythm make it ideal for 
              demonstrating visual hierarchy, spacing, and overall layout in modern web design. 
              Despite technological evolution, its purpose and impact have remained timeless, 
              showing how thoughtful typography can elevate any digital experience.
            </p>
            {/* Liste thématique */}
              <div className="mt-10">
                <ul className="space-y-6">
                  
                  <li className="flex items-start gap-4">
                    {/* Boule alignée avec le titre */}
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                    
                    <div>
                      <h4 className="text-gray-800 font-semibold text-base leading-tight">
                        Timeless Typography
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        A refined typographic structure ensures long-term readability and
                        maintains visual harmony across modern digital layouts.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                    <div>
                      <h4 className="text-gray-800 font-semibold text-base leading-tight">
                        Balanced Visual Hierarchy
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        Proper spacing, alignment, and rhythm guide the reader naturally
                        through the content without cognitive overload.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                    <div>
                      <h4 className="text-gray-800 font-semibold text-base leading-tight">
                        Consistent Reading Experience
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        Maintaining consistency in font size and contrast strengthens user
                        engagement and improves long-form content consumption.
                      </p>
                    </div>
                  </li>

                </ul>
              </div>
              <p className="text-gray-600 mt-7 leading-relaxed text-base">
                Originally designed as a simple placeholder, this text has endured through
                centuries of typographic evolution. Its balanced structure and natural flow
                make it a reliable reference for designers seeking clarity, readability,
                and visual harmony in modern digital layouts.
              </p>

              <InfoImageBlock/>
              <InfoImageBlock2/>
              <CommentsBlock/>
          </div>

          {/* Partie droite (réduite légèrement) */}
          <div className="lg:w-[28%] flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-full max-w-[370px]">
              <SearchComponent/>
              <CategoriesComponent/>
              <RecentPostsComponent/>

              {/* Image à droite */}
              <div className="w-full max-w-sm bg-white rounded-xl mt-8 border border-gray-100 shadow-sm">
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
              <GlobalTagsComponent/>

            </div>
          </div>

        </div>
    </div>
  )
}
