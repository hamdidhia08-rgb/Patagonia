"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  LogIn,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { FaYoutube, FaTiktok } from "react-icons/fa";

export default function TopBar() {
  const [openLang, setOpenLang] = useState(false);

  return (
    <div className="bg-[#26263e] text-white text-[13px] md:text-[14px] w-full z-50">
      <div className="max-w-7xl  mx-auto flex justify-center md:justify-between items-center px-4 py-1.5">
        {/* ➤ Gauche */}
        <div className="flex flex-row flex-wrap items-center gap-4 text-center md:text-left justify-center md:justify-start">
          <span className="flex items-center gap-2">
            <MapPin size={16} />Daire 16, Esenyurt Istanbul
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} /> +90 538 507 39 47
          </span>
        </div>

        {/* ➤ Droite */}
        <div className="hidden md:flex items-center gap-5">
          {/* Login / Register */}
          <Link
            href="#"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <LogIn size={16} /> Sign in
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition">
            Register
          </Link>

          {/* Sélecteur langue */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-2 px-2 py-0.5 border border-gray-400 rounded-md hover:border-yellow-400 transition text-[13px]"
            >
              <Image
                src="/images/Flags/english.png"
                alt="EN"
                width={20}
                height={14}
              />
              <span>EN</span>
            </button>

            {openLang && (
              <div className="absolute right-0 mt-1 bg-white text-black rounded-md shadow-lg min-w-[120px] z-50 text-[13px]">
                <button className="flex items-center gap-2 px-3 py-1.5 w-full hover:bg-gray-100">
                  <Image src="/flags/fr.png" alt="FR" width={20} height={14} /> FR
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 w-full hover:bg-gray-100">
                  <Image src="/flags/sa.png" alt="AR" width={20} height={14} /> AR
                </button>
              </div>
            )}
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-2">
            <Link href="#" className="hover:text-yellow-400 transition">
              <Facebook size={16} />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <Twitter size={16} />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <Instagram size={16} />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FaYoutube size={16} />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FaTiktok size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
