// BlogCardVertical.tsx
import React from 'react';
import Image from 'next/image';
import { Calendar, MessageCircle, Heart, Share2 } from 'lucide-react';

const BlogCardVertical: React.FC = () => {
  const blogs = [
    {
      title: "Les merveilles de la Cappadoce",
      date: "15 Octobre 2025",
      excerpt: "Survolez les cheminées de fées et découvrez des villages troglodytes uniques en Cappadoce. Profitez des paysages lunaires et des montgolfières au lever du soleil pour des souvenirs inoubliables.",
      imageUrl: "/images/bg/1.png",
      author: { name: "Dhia Hamdi", avatar: "/images/user/user1.png" },
      comments: 12,
      likes: 45,
      postLink: "/blog/1"
    },
    {
      title: "Découvrir la Turquie : Voyage",
      date: "3 Novembre 2025",
      excerpt: "La Turquie offre un mélange fascinant de culture, d'histoire et de paysages à couper le souffle.",
      imageUrl: "/images/bg/Bodrum-White-Houses.jpg",
      author: { name: "Amira Ben", avatar: "/images/user/user1.png" },
      comments: 8,
      likes: 32,
      postLink: "/blog/2"
    },
    {
      title: "Istanbul : Entre culture et modernité",
      date: "28 Septembre 2025",
      excerpt: "Explorez la métropole entre mer et mosquées, où chaque coin raconte une histoire fascinante.",
      imageUrl: "/images/bg/Istanbul-Mosque.jpg",
      author: { name: "Khaled Salah", avatar: "/images/user/user1.png" },
      comments: 20,
      likes: 50,
      postLink: "/blog/3"
    },
    {
      title: "Les secrets historiques d’Ephèse",
      date: "5 Juillet 2025",
      excerpt: "Découvrez les ruines antiques d’Ephèse et plongez dans l’histoire fascinante de cette cité légendaire.",
      imageUrl: "/images/ephesus.jpg",
      author: { name: "Leyla Öztürk", avatar: "/images/user/user1.png" },
      comments: 10,
      likes: 27,
      postLink: "/blog/5"
    },
    {
      title: "Les plages paradisiaques d’Antalya",
      date: "12 Août 2025",
      excerpt: "Profitez du soleil et des eaux turquoise des magnifiques plages d’Antalya.",
      imageUrl: "/images/bg/Antalya-5-scaled.jpg",
      author: { name: "Selim Kara", avatar: "/images/user/user1.png" },
      comments: 15,
      likes: 38,
      postLink: "/blog/4"
    },
    {
      title: "New Tram Line Inaugurated in Izmir",
      date: "December 22, 2025",
      excerpt: "The city of Izmir has inaugurated a new tram line aimed at improving urban mobility. The project seeks to reduce road traffic and provide residents with a modern, eco-friendly, and accessible transportation system.",
      imageUrl: "/images/izmir.jpg",
      author: { name: "Nesrin Yılmaz", avatar: "/images/user/user1.png" },
      comments: 18,
      likes: 41,
      postLink: "/blog/6"
    }

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden 
                     hover:shadow-xl transition-all hover:-translate-y-1"
        >

          {/* Image */}
          <div className="relative w-full h-56">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col">

            <h2 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h2>

            {/* USER LEFT | DATE RIGHT */}
            <div className="flex items-center justify-between mb-4 text-gray-500 text-sm">
              <div className="flex items-center">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={26}
                  height={26}
                  className="rounded-full mr-2"
                />
                <span>{blog.author.name}</span>
              </div>

              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{blog.date}</span>
              </div>
            </div>

            {/* DESCRIPTION - 2 LIGNES */}
            <p className="text-gray-700 text-sm mb-6 line-clamp-2">
              {blog.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-gray-500 text-sm mb-6">

              {/* Likes + Comments + Share */}
              <div className="flex items-center gap-4">
                
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {blog.comments}
                </div>

                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {blog.likes}
                </div>

                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">
                  <Share2 className="w-4 h-4" />
                </div>

              </div>

            </div>

            {/* Button */}
            <a
              href={blog.postLink}
              className="w-full text-center px-6 py-2 text-white font-semibold rounded-lg shadow-md 
                         hover:scale-[1.03] transition-transform"
              style={{
                background: 'linear-gradient(90deg, #FF7E5F 0%, #FEB47B 100%)',
              }}
            >
              See More
            </a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardVertical;
