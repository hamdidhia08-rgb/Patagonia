import Image from 'next/image';
import React from 'react';
import { Barlow_Condensed, Just_Another_Hand } from 'next/font/google';

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
// --- 1. Typescript Types ---

interface Post {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

// --- 2. Mock Data ---
// NOTE: Remplacez les chemins d'images par les vôtres (ex: /images/santorini.jpg)
// ou utilisez des URLs externes.

const featuredPost: Post = {
  id: 1,
  date: "April 7, 2023",
  title: "Plan the Perfect Vacation",
  excerpt: "Planning a vacation can be overwhelming, but this post offers a step-by-step guide to help readers create a comprehensive travel itinerary. From choosing a destination to booking accommodations and activities, readers will learn how to plan a stress-free and enjoyable trip.",
  imageUrl: "/images/slide6.jpg", // Santorini style
};

const sidePosts: Post[] = [
  {
    id: 2,
    date: "April 7, 2023",
    title: "Discover the Hidden",
    excerpt: "Benefits of traveling alone, from the freedom to discover new places with new friends.",
  imageUrl: "/images/cappadocia.avif", // Santorini style
  },
  {
    id: 3,
    date: "April 7, 2023",
    title: "Must-See Landmarks",
    excerpt: "Iconic landmarks that make Europe one of the world's most popular travel destinations.",
    imageUrl: "/images/Fethiye.jpg", // Santorini style
  },
  {
    id: 4,
    date: "April 7, 2023",
    title: "Traveling on a Budget",
    excerpt: "Practical advice for travelers who want to see the world without breaking the bank.",
    imageUrl: "/images/pamukkale-2.jpg", // Santorini style
  },
  {
    id: 5,
    date: "April 7, 2023",
    title: "Explore the Wonders",
    excerpt: "Must-see destinations and experiences, including wildlife and cultural experiences.",
  imageUrl: "/images/antalya.jpg", // Santorini style
  },
  
  
];

// --- 3. Sub-Component: SidePostCard ---

const SidePostCard: React.FC<{ post: Post }> = ({ post }) => (
  <div className="flex items-start space-x-4 mb-6">
    {/* Image container: augmenter un peu la largeur */}
    <div className="w-3/6 aspect-[5/3] relative rounded-lg overflow-hidden flex-shrink-0">
      <Image
        src={post.imageUrl}
        alt={post.title}
        layout="fill"
        objectFit="cover"
        className="transition duration-300 hover:scale-105"
      />
    </div>

    {/* Content container */}
    <div className="w-2/5">
      {/* Date badge */}
      <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-2 py-0.5 rounded mb-1">
        {post.date}
      </div>
      {/* Titre en noir */}
      <h3 className="font-bold text-base leading-snug mb-0.5 text-black">{post.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
    </div>
  </div>
);


// --- 4. Main Component: BlogLayout ---

const BlogLayout: React.FC = () => {
  return (
    // Max width and center alignment for the whole layout
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white">
     
{/* Sous-titre et titre général pour la section Blog */}
<p className={`${hand.className} text-center text-[#f1a435] text-lg md:text-3xl mb-2`}>
  Latest Insights
</p>
<h2 className={`${barlow.variable} font-barlow text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8`}>
  Explore Our Blog Articles and Stay Updated
</h2>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* --- Featured Post (Left Column) --- */}
        <div className="lg:col-span-2">
          
          {/* Main Image Container */}
          <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-xl mb-4">
            <Image
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              layout="fill"
              objectFit="cover"
              // Adjust priority if this image is above the fold
              priority 
            />
          </div>

          {/* Featured Post Content */}
          <div className="max-w-3xl">
            {/* Date badge: dark style */}
            <div className="inline-block bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
              {featuredPost.date}
            </div>
            
            <h2 className="text-4xl font-extrabold mb-4 text-black">{featuredPost.title}</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
                {featuredPost.excerpt}
            </p>

            {/* Read More Button: teal style */}
            <button className="bg-[#fdc700] hover:bg-[#fdc700] text-black font-bold py-2 px-4 rounded transition duration-200">
              Read More
            </button>
          </div>
        </div>

        {/* --- Side Posts (Right Column) --- */}
        <div className="lg:col-span-1 border-t lg:border-t-0 pt-6 lg:pt-0">
          {sidePosts.map((post) => (
            <SidePostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;