'use client';

import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      className="relative w-full flex items-stretch justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Conteneur principal */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch justify-between">

 {/* Partie gauche : Texte avec padding */}
<div className="text-black max-w-2xl space-y-6 md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10 md:py-0">
  <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
    Explore Our Exclusive{" "}
    <span className="text-orange-500">Travel Packages</span>
  </h2>
  <p className="text-xl text-gray-700">
    Discover the perfect journey tailored for you. From breathtaking landscapes to unique cultural experiences, our travel packages ensure unforgettable memories and seamless adventures.
  </p>

  {/* Pourcentage des packages */}
  <div className="flex items-center space-x-3 text-gray-800 text-lg font-medium">
    <span className="text-orange-500 font-bold">95%</span>
    <span>of our travelers love our packages!</span>
  </div>

  <Link
    href="/about"
    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-xl transition-all w-fit text-lg"
  >
    Learn More →
  </Link>
</div>


{/* Shape : chevauche légèrement l'image de droite */}
<div className="hidden md:block absolute top-0 left-[50%] w-[120px] h-full z-20">
  <Image
    src="/images/bg/shape.svg"
    alt="Separator Shape"
    fill
    className="object-cover"
  />
</div>



        {/* Partie droite : Image pleine hauteur */}
        <div className="relative md:w-1/2 h-[600px] overflow-hidden">
          <Image
            src="/images/bg/1.png"
            alt="About Us"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
