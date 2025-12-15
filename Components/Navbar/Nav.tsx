"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Heart, Menu } from "lucide-react"; // Ajout de Menu
import { Inter } from "next/font/google";
import MobileDrawer from "./MobileDrawer"; // Import du drawer

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <header className={`w-full bg-white shadow-sm py-4 ${inter.className} relative z-50`}>
  <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center -mt-2">
            <Image
              src="/images/logoi.png"
              alt="Patagonia Logo"
              width={140}
              height={60}
              priority
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-7 text-black font-medium">
            <Link href="/" className="flex items-center gap-1 hover:text-orange-400 transition">Home</Link>
            <Link href="/Service" className="flex items-center gap-1 hover:text-orange-400 transition">Services</Link>
            <Link href="/tours" className="flex items-center gap-1 hover:text-orange-400 transition">Tours</Link>
            <Link href="/blog" className="flex items-center gap-1 hover:text-orange-400 transition">Blogs</Link>
            <Link href="/about" className="flex items-center gap-1 hover:text-orange-400 transition">About</Link>
            <Link href="/contact" className="flex items-center gap-1 hover:text-orange-400 transition">Contact</Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            {/* Heart Icon */}
            <Link
              href="/favorites"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition"
            >
              <Heart size={20} />
            </Link>

            {/* Cart Icon + Badge */}
            <Link
              href="/checkout"
              className="relative w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 text-[10px] w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center shadow">
                2
              </span>
            </Link>

            {/* LOGIN Button */}
            <Link
              href="/login"
              className="hidden ml-5 sm:flex items-center gap-2 bg-orange-500 text-white px-4 py-[6px] rounded-md font-medium shadow hover:bg-orange-600 transition"
            >
              <User size={18} className="text-white" /> Login
            </Link>

            {/* MENU ICON MOBILE */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
