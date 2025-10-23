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

interface Post {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  commentsCount: number;
}

const featuredPost: Post = {
  id: 1,
  date: "April 7, 2023",
  title: "Turkish Minister of Tourism to Al Jazeera Net",
  excerpt: "The global tourism sector is witnessing intense competition, particularly in the Mediterranean basin, the most attractive destination for tourists, where competition is fierce among countries. In recent years, Turkey has achieved significant strides in this direction, transforming itself into one of the world's leading tourism hubs, ranking third in the Mediterranean and Europe and fourth globally.",
  imageUrl: "/images/news/minister-of-turizm-1758545612.webp",
  author: "Sarah Dubois",
  authorImageUrl: "/images/user/user4.jpg",
  commentsCount: 15,
};

const sidePosts: Post[] = [
  {
    id: 2,
    date: "April 7, 2023",
    title: "4 Turkish villages among the best",
    excerpt: "The villages included in the list of Best Tourist Villages for 2025 announced by the United Nations World Tourism Organization are Ak Yaka in Muğla Province, Barbaros in Izmir, Anitli in Mardin, and Öcagız Castle in Antalya.",
    imageUrl: "/images/news/img.jpg",
    author: "Alex Martin",
    authorImageUrl: "/images/user/user1.png",
    commentsCount: 8,
  },
  {
    id: 3,
    date: "April 7, 2023",
    title: "Must-See Landmarks in Europe",
    excerpt: "Discover the iconic landmarks that make Europe one of the world's most popular travel destinations for every adventurer.",
    imageUrl: "/images/Fethiye.jpg",
    author: "Alex Martin",
    authorImageUrl: "/images/user/user2.jpg",
    commentsCount: 22,
  },
  {
    id: 4,
    date: "April 7, 2023",
    title: "Traveling on a Budget",
    excerpt: "Practical advice for travelers who want to see the world without breaking the bank. Tips and tricks for affordable exploration.",
    imageUrl: "/images/pamukkale-2.jpg",
    author: "Alex Martin",
    authorImageUrl: "/images/user/user3.jpg",
    commentsCount: 5,
  },
  {
    id: 5,
    date: "April 7, 2023",
    title: "Explore the Wonders of Wildlife",
    excerpt: "Must-see destinations and experiences, including wildlife safaris and deep cultural experiences with locals.",
    imageUrl: "/images/antalya.jpg",
    author: "Alex Martin",
    authorImageUrl: "/images/user.jpg",
    commentsCount: 3,
  },
];

// --- 4. Sub-Component: SidePostCard (modifié) ---
const SidePostCard: React.FC<{ post: Post }> = ({ post }) => (
  <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
    {/* Image du post */}
    <div className="w-5/12 aspect-[3/2] relative rounded-lg overflow-hidden flex-shrink-0 shadow-md">
      <Image
        src={post.imageUrl}
        alt={post.title}
        layout="fill"
        objectFit="cover"
        className="transition duration-300 hover:scale-105"
      />
    </div>

    {/* Contenu du post */}
    <div className="w-7/12">
      <div className="text-xs text-gray-500 font-medium mb-1 flex items-center space-x-3">
        {/* Date */}
        <span className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#f1a435]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{post.date}</span>
        </span>

        <span className="text-gray-300">•</span>

        {/* Nombre de commentaires */}
        <span className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#f1a435]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
            />
          </svg>
          <span>{post.commentsCount}</span>
        </span>
      </div>

      {/* Titre */}
      <h3 className="font-bold text-lg leading-tight mb-1 text-black hover:text-orange-600 transition duration-200 cursor-pointer">
        {post.title}
      </h3>

      {/* Extrait */}
      <p className="text-gray-600 text-sm line-clamp-2 mb-1">{post.excerpt}</p>

      {/* Bouton Read More (légèrement remonté) */}
      <button className="text-orange-600 text-sm font-semibold hover:underline -mt-1 block">
        Read More →
      </button>
    </div>
  </div>
);


// --- 5. Main Component ---
const BlogLayout: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white">
      <p className={`${hand.className} text-center text-orange-500 text-lg md:text-3xl mb-2`}>
        Latest Insights
      </p>
      <h2 className={`${barlow.variable} font-barlow text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8`}>
        Explore Our Blog Articles and Stay Updated
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* --- Featured Post --- */}
        <div className="lg:col-span-7">
          <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden shadow-xl mb-4">
            <Image
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">{featuredPost.title}</h2>

            {/* Date, Comments, et Auteur rapprochés */}
            <div className="flex items-center space-x-4 text-sm font-medium text-gray-600 mb-4">
              {/* Auteur */}
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={featuredPost.authorImageUrl} alt={featuredPost.author} layout="fill" objectFit="cover" />
                </div>
                <span className="font-semibold text-gray-800">{featuredPost.author}</span>
              </div>

              <span className="text-gray-300">•</span>
              <span className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#f1a435]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{featuredPost.date}</span>
              </span>

              <span className="text-gray-300">•</span>
              <span className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#f1a435]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
                </svg>
                <span>{featuredPost.commentsCount} Comments</span>
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>

            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded transition duration-200 shadow-md">
              Read More
            </button>
          </div>
        </div>

        {/* --- Side Posts --- */}
        <div className="lg:col-span-5 border-t lg:border-t-0 pt-6 lg:pt-0">
          {sidePosts.map((post) => (
            <SidePostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
