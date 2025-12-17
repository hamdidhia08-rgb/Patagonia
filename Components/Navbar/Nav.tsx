"use client";

import { memo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Inter } from "next/font/google";

/* Lazy load MobileDrawer (gros gain perf) */
const MobileDrawer = dynamic(() => import("./MobileDrawer"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <header
        className={`w-full bg-white shadow-sm py-4 ${inter.className} relative z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" prefetch className="flex items-center -mt-2">
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
            <Link href="/" prefetch className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="/Service" prefetch className="hover:text-orange-400 transition">
              Services
            </Link>
            <Link href="/tours" prefetch className="hover:text-orange-400 transition">
              Travel & Tours
            </Link>
            <Link href="/blog" prefetch className="hover:text-orange-400 transition">
              Blogs
            </Link>
            <Link
              href="/Airport_service"
              prefetch
              className="hover:text-orange-400 transition"
            >
              Airport service
            </Link>
            <Link href="/contact" prefetch className="hover:text-orange-400 transition">
              Contact
            </Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            <Link
              href="/favorites"
              prefetch={false}
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition"
            >
              <Heart size={20} />
            </Link>

            <Link
              href="/checkout"
              prefetch={false}
              className="relative w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 text-[10px] w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center shadow">
                2
              </span>
            </Link>

            <Link
              href="/Login"
              prefetch={false}
              className="hidden ml-5 sm:flex items-center gap-2 bg-orange-500 text-white px-4 py-[6px] rounded-md font-medium shadow hover:bg-orange-600 transition"
            >
              <User size={18} /> Login
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={openDrawer}
              className="md:hidden w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
    </>
  );
}

export default memo(Navbar);
