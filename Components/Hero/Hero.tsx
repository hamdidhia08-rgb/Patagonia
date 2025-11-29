"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";
import { Play, Phone, Menu, User,ShoppingCart } from "lucide-react";
import HeroText from "./HeroText";
import AOS from "aos";

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

export default function HeroSlider() {
  const slides = [
    { id: 1, img: "/images/bg/h3-hero-bg-3.jpg" },
    { id: 2, img: "/images/bg/h3-hero-bg-5.jpg" },
    { id: 3, img: "/images/bg/h3-hero-bg-4.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      AOS.refresh();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[96.5vh] overflow-hidden">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-40">
        <nav className="w-full h-[90px] px-4 sm:px-6 md:px-16 lg:px-28 flex justify-between items-center bg-transparent">
          <h1 className="MONLOGO text-white text-3xl font-bold tracking-wide">PATAGONIA</h1>

          {/* Menu Desktop avec LINK */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium text-lg">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <Link href="/Service" className="hover:text-orange-400 transition">Services</Link>
            <Link href="/tours" className="hover:text-orange-400 transition">Tours</Link>
            <Link href="/blog" className="hover:text-orange-400 transition">Blogs</Link>
            <Link href="/about" className="hover:text-orange-400 transition">About</Link>
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3 text-white">
            {/* Call Us */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-transparent border border-white flex items-center justify-center backdrop-blur-sm">
                <Phone size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold text-sm sm:text-base ">+90 538 507 39 47</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-white/50 text-sm sm:text-base">|</span>
              <select
                aria-label="Language selector"
                defaultValue="en"
                className="bg-transparent text-white text-xs sm:text-base outline-none cursor-pointer"
              >
                <option value="en" className="text-black text-sm sm:text-base">English</option>
                <option value="ar" className="text-black text-sm sm:text-base">العربية</option>
                <option value="fr" className="text-black text-sm sm:text-base">Français</option>
              </select>
            </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative w-10 h-10 rounded-full bg-white/10 border border-white/30 
            flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition"
          >
            <ShoppingCart size={20} className="text-white opacity-90" />

            {/* Badge */}
            <span
              className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] 
              w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg"
            >
              2
            </span>
          </Link>


            {/* Login */}
<button className="hidden sm:flex px-4 sm:px-5 py-1 sm:py-2 rounded-full bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition backdrop-blur-sm flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
  <User size={16} className="sm:mr-1" /> Login
</button>

            {/* Mobile Menu */}
            <button aria-label="Open menu" className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center backdrop-blur-sm md:hidden">
              <Menu size={22} />
            </button>
          </div>

        </nav>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          data-aos="fade-in"
        >
          <Image
            src={slide.img}
            alt={`Slide ${slide.id}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center animate-zoomHero"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-transparent z-20"></div>

      {/* Hero Text */}
      <HeroText barlowVariable={barlow.variable} handVariable={hand.variable} />

      {/* Video Button Desktop */}
      <div className="hidden md:flex absolute bottom-20 right-16 z-30">
        <button
          aria-label="Play video"
          className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white/60 
          bg-white/10 backdrop-blur-md text-white shadow-lg transition-transform duration-300 
          hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] group"
        >
          <Play size={32} className="transition-transform group-hover:scale-110" />
          <span className="absolute inset-0 rounded-full border border-white/40 animate-ping"></span>
          <span className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></span>
        </button>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 w-full z-20">
        <Image
          src="/images/dhia.svg"
          alt="Bottom shape"
          width={1920}
          height={200}
          className="w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
