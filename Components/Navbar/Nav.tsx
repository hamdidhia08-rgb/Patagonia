"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, Mail } from "lucide-react";
import { Barlow_Condensed } from "next/font/google";

// Font Barlow Condensed
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Tours", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`${barlow.variable} font-barlow w-full fixed top-0 left-0 bg-white backdrop-blur-md shadow-sm z-50`}
    >
<div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={210}
              height={60}
              priority
            />
          </Link>
        </div>
{/* Nav items centrés */}
<ul className="hidden md:flex gap-5 font-medium text-black flex-1 justify-center text-[21px]">
  {navLinks.map((link, idx) => (
    <li
      key={idx}
      className="hover:text-yellow-300 transition-colors px-2 py-2"
    >
      <Link href={link.href} className="font-medium">
        {link.name}
      </Link>
    </li>
  ))}
</ul>



        {/* Section droite */}
        <div className="hidden md:flex items-center gap-6">
          {/* Icônes agrandies */}
          <div className="flex gap-4">
            <button
              aria-label="Search"
              className="p-4 rounded-full bg-[#eaeaea] hover:bg-gray-300 transition"
            >
              <Search className="w-5 h-5 text-black" />
            </button>
            <button
              aria-label="Contact by email"
              className="p-4 rounded-full bg-[#eaeaea] hover:bg-gray-300 transition"
            >
              <Mail className="w-5 h-5 text-black" />
            </button>
          </div>

{/* Let’s Build + Email + EXPLORE TRIP */}
<div className="flex items-center gap-6">
  <div className="text-left">
    <p className="font-bold text-lg text-black leading-snug">Let’s Build!</p>
    <a
      href="mailto:infor@company.com"
      className="text-base font-medium text-black hover:text-yellow-500 transition -mt-1 block"
    >
      infor@company.com
    </a>
  </div>

  <Link
    href="#"
    className="px-4 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-yellow-500 hover:text-black transition w-36 text-center"
  >
    EXPLORE TRIP
  </Link>
</div>


          {/* Bouton jaune */}
          <button
            aria-label="Other action"
            className="hidden md:flex p-3 rounded-full bg-[#fad71b] hover:bg-gray-300 transition ml-2"
          >
            <Menu size={24} className="text-black" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#fad71b] text-black shadow z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 animate-slide-down">
          <ul className="flex flex-col gap-4 font-semibold text-black">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="mt-4 inline-block w-full text-center px-4 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-yellow-500 hover:text-black transition"
          >
            EXPLORE TRIP
          </Link>
        </div>
      )}
    </nav>
  );
}
