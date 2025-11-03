import React from 'react';
import Image from 'next/image';

interface PopularPost {
  id: number;
  title: string;
  imageUrl: string;
}

const popularPosts: PopularPost[] = [
  {
    id: 1,
    title: 'A One-day Trip Through Banyuwangi',
    imageUrl: '/images/bg/test.webp',
  },
  {
    id: 2,
    title: '7 Places You Would Like to Visit in Vang Vieng',
    imageUrl: '/images/Cappadoci.webp',
  },
  {
    id: 3,
    title: 'The Best Professional Travel',
    imageUrl: '/images/antalya.jpg',
  },
];

const MostPopular: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-gray-100 mt-5">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        Most Popular
      </h2>

      <div className="flex space-x-1 mb-6">
        <span className="w-8 h-1 bg-orange-200 block"></span>
        <span className="w-4 h-1 bg-orange-200 block"></span>
      </div>

      <div className="space-y-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="relative group rounded-lg overflow-hidden shadow-md bg-white">
            
            <div className="w-full h-48 relative">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <h3 className="text-white text-lg font-bold leading-snug">
                {post.title}
              </h3>
            </div>

            <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-white/70 flex items-center justify-center rounded-bl-lg z-10">
              <span className="font-bold text-lg md:text-xl text-orange-600">
                {post.id}
              </span>
            </div>

            <a href={`/posts/${post.id}`} aria-label={`Read more about ${post.title}`} className="absolute inset-0 z-20"></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
