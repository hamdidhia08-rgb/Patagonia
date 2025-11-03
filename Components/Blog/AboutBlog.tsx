import React from 'react';
import Image from 'next/image';

const AboutBlog: React.FC = () => {
  return (
    <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-lg p-6 md:p-6 border border-gray-100">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
        About Patagonia Tourisme
      </h2>

      <div className="flex space-x-1 mb-4">
        <span className="w-8 h-1 bg-orange-200 block"></span>
        <span className="w-8 h-1 bg-orange-200 block"></span>
        <span className="w-4 h-1 bg-orange-200 block"></span>
      </div>

      <p className="text-lg md:text-xl font-semibold text-orange-600 mb-2">
        Discover Turkey with Us
      </p>

      <p className="text-gray-700 text-base mb-6">
        Patagonia Tourisme offers personalized travel services and unforgettable tours across Turkey.
      </p>

      <div className="w-full h-auto overflow-hidden rounded-md">
        <Image
          src="/images/hero/sidebar.jpg"
          alt="Beautiful view of Turkey for travel and tourism"
          width={400}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default AboutBlog;
