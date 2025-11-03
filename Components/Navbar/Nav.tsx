"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, Mail } from "lucide-react";
import { Barlow_Condensed } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Tours", href: "#" },
    { name: "Service", href: "/Service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav className={`${barlow.variable} font-barlow w-full bg-white shadow-sm relative z-30`}>
        <div className="max-w-[1420px] mx-auto flex justify-between items-center px-4 py-5">
          {/* Logo */}
          <div className="flex-shrink-0 relative bottom-1">
            <Link href="/" className="flex items-center">
              <div className="md:block hidden">
                <Image src="/images/logoi.png" alt="Logo" width={160} height={120} priority />
              </div>
              <div className="md:hidden block">
                <Image src="/images/logoi.png" alt="Logo" width={120} height={80} priority />
              </div>
            </Link>
          </div>

          {/* Nav items desktop */}
          <ul className="hidden md:flex gap-5 font-medium text-black flex-1 justify-center text-[21px]">
            {navLinks.map((link, idx) => (
              <li key={idx} className="hover:text-orange-400 transition-colors px-2 py-2">
                <Link href={link.href} className="font-medium">{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Section droite desktop */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex gap-4">
              <button aria-label="Search" className="p-4 rounded-full bg-[#eaeaea] hover:bg-gray-300 transition">
                <Search className="w-5 h-5 text-black" />
              </button>
              <button aria-label="Contact by email" className="p-4 rounded-full bg-[#26263e] hover:bg-gray-300 transition">
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-left">
                <p className="font-bold text-lg text-black leading-snug">Let’s Build!</p>
                <a href="mailto:info@Patagonia.com" className="text-base font-medium text-black hover:text-yellow-500 transition -mt-1 block">
                  info@Patagonia.com
                </a>
              </div>

              <Link href="#" className="px-4 py-3     bg-gradient-to-r from-orange-400 to-orange-600
    hover:from-orange-500 hover:to-orange-700
    text-white font-bold rounded-md shadow  transition w-36 text-center">
                EXPLORE TRIP
              </Link>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button aria-label="Search" className="p-3 rounded-full w-12 h-12 bg-[#eaeaea] hover:bg-gray-300 transition">
              <Search className="w-5 h-5 text-black" />
            </button>

            <button aria-label={isOpen ? "Close menu" : "Open menu"} className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fad71b] text-black shadow" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fond flou */}
            <motion.div
              className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 max-w-full bg-white shadow-2xl z-50 p-6 flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Menu</h2>
                <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-[#fad71b] hover:bg-yellow-500 transition">
                  <X className="text-black" />
                </button>
              </div>

              <ul className="flex flex-col gap-4 font-semibold text-black text-lg">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-yellow-500 transition-colors py-2" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href="#" className="mt-auto inline-block w-full text-center px-4 py-3 bg-black text-white font-bold rounded-md shadow-lg hover:bg-yellow-500 hover:text-black transition">
                EXPLORE TRIP
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
