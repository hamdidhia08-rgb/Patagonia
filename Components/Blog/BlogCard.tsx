// BlogCard.tsx
import React from 'react';
import Image from 'next/image';
import { Calendar, MessageCircle, Heart } from 'lucide-react';

const BlogCard2: React.FC = () => {
const blogs = [
  {
    title: "Les merveilles de la Cappadoce",
    date: "15 Octobre 2025",
    excerpt: "Survolez les cheminées de fées et découvrez des villages troglodytes uniques en Cappadoce. Profitez des paysages lunaires et des montgolfières au lever du soleil pour des souvenirs inoubliables.",
    imageUrl: "/images/bg/1.png",
    author: {
      name: "Dhia Hamdi",
      avatar: "/images/user/user1.png",
    },
    comments: 12,
    likes: 45,
    postLink: "/blog/1"
  },
  {
    title: "Découvrir la Turquie : Voyage",
    date: "3 Novembre 2025",
    excerpt: "La Turquie offre un mélange fascinant de culture, d'histoire et de paysages à couper le souffle. Explorez les marchés animés, goûtez à la cuisine locale et laissez-vous séduire par l'accueil chaleureux des habitants.",
    imageUrl: "/images/bg/Bodrum-White-Houses.jpg",
    author: {
      name: "Amira Ben",
      avatar: "/images/user/user1.png",
    },
    comments: 8,
    likes: 32,
    postLink: "/blog/2"
  },
  {
    title: "Istanbul : Entre culture et modernité",
    date: "28 Septembre 2025",
    excerpt: "Explorez la métropole entre mer et mosquées, où chaque coin raconte une histoire fascinante. Découvrez le mélange unique de tradition et de modernité à travers ses ruelles, ses monuments et ses cafés typiques.",
    imageUrl: "/images/bg/Istanbul-Mosque.jpg",
    author: {
      name: "Khaled Salah",
      avatar: "/images/user/user1.png",
    },
    comments: 20,
    likes: 50,
    postLink: "/blog/3"
  },
  {
    title: "Les secrets historiques d’Ephèse",
    date: "5 Juillet 2025",
    excerpt: "Découvrez les ruines antiques d’Ephèse et plongez dans l’histoire fascinante de cette cité légendaire. Admirez le théâtre antique, la bibliothèque et les temples qui racontent des siècles de civilisations.",
    imageUrl: "/images/ephesus.jpg",
    author: {
      name: "Leyla Öztürk",
      avatar: "/images/user/user1.png",
    },
    comments: 10,
    likes: 27,
    postLink: "/blog/5"
  },
  {
    title: "Les plages paradisiaques d’Antalya",
    date: "12 Août 2025",
    excerpt: "Profitez du soleil et des eaux turquoise des magnifiques plages d’Antalya, parfaites pour des vacances inoubliables. Détendez-vous sur le sable fin, explorez les criques cachées et découvrez la beauté naturelle de la côte turque.",
    imageUrl: "/images/bg/Antalya-5-scaled.jpg",
    author: {
      name: "Selim Kara",
      avatar: "/images/user/user1.png",
    },
    comments: 15,
    likes: 38,
    postLink: "/blog/4"
  }
];


  return (
    <div className="space-y-8">
      {blogs.map((blog, index) => (
        <div
  key={index}
  className="flex flex-col md:flex-row max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100
             h-auto md:h-80"
>
  <div className="w-full md:w-2/5 relative h-56 md:h-full flex-shrink-0">
    <Image
      src={blog.imageUrl}
      alt={blog.title}
      fill
      style={{ objectFit: 'cover' }}
      className="rounded-t-xl md:rounded-l-xl md:rounded-t-none"
    />
  </div>

  <div className="w-full md:w-3/5 p-4 md:p-6 flex flex-col">
    {/* Contenu principal */}
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{blog.title}</h2>

      <p className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
        {blog.date}
      </p>

      <p className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
        <Image
          src={blog.author.avatar}
          alt={blog.author.name}
          width={24}
          height={24}
          className="rounded-full mr-1 md:mr-2"
        />
        {blog.author.name}
      </p>

      <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-3 md:line-clamp-4">
        {blog.excerpt}
      </p>
    </div>

    {/* Footer */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-500 text-xs md:text-sm mt-2 md:mt-4 gap-2 md:gap-0">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-1">
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
          {blog.comments} Comments
        </div>
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3 md:w-4 md:h-4" />
          {blog.likes} Likes
        </div>
      </div>

      <a
        href={blog.postLink}
        className="px-6 py-2 text-white font-semibold rounded-lg shadow-md hover:scale-[1.03] transition-transform mt-2 md:mt-0"
        style={{
          background: 'linear-gradient(90deg, #FF7E5F 0%, #FEB47B 100%)',
        }}
      >
        See More
      </a>
    </div>
  </div>
</div>

      ))}
    </div>
  );
};

export default BlogCard2;
