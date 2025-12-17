"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, LogIn, Facebook, Twitter, Instagram } from "lucide-react";
import { FaYoutube, FaTiktok } from "react-icons/fa";

const LANGUAGES = [
  { code: "EN", label: "English", flag: "/images/Flags/english.png" },
  { code: "TR", label: "Türkçe", flag: "/images/flags/Flag_of_Turkey.svg.png" },
  { code: "FR", label: "Français", flag: "/images/flags/Flag_of_France.svg" },
  { code: "AR", label: "العربية", flag: "/images/flags/Flag_of_Saudi_Arabia.svg.webp" },
];

export default function TopBar() {
  const [openLang, setOpenLang] = useState(false);
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);

  const handleLangChange = (lang: typeof LANGUAGES[0]) => {
    setCurrentLang(lang);
    setOpenLang(false);

    // 👉 PLUS TARD : router.push(`/${lang.code.toLowerCase()}`)
  };

  return (
    <div className="bg-[#191f28] text-white text-[13px] w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1.5">

        {/* Gauche */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Daire 16, Esenyurt Istanbul
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} /> +90 538 507 39 47
          </span>
        </div>

        {/* Droite */}
        <div className="hidden md:flex items-center gap-5">

          <Link href="/Login" className="flex items-center gap-1 hover:text-yellow-400">
            <LogIn size={16} /> Sign in
          </Link>
          <Link href="/Register" className="hover:text-yellow-400">
            Register
          </Link>

          {/* Sélecteur langue PRO */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              aria-expanded={openLang}
              className="flex items-center gap-2 px-2 py-1 border border-gray-400 rounded-md hover:border-yellow-400 transition"
            >
              <Image src={currentLang.flag} alt={currentLang.code} width={20} height={14} />
              <span>{currentLang.code}</span>
            </button>

            {openLang && (
              <div className="absolute right-0 mt-1 bg-white text-black rounded-md shadow-lg min-w-[140px] z-200">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang)}
                    className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100 text-left"
                  >
                    <Image src={lang.flag} alt={lang.code} width={20} height={14} />
                    <span>{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-2">
            <Link href="#" className="hover:text-yellow-400"><Facebook size={16} /></Link>
            <Link href="#" className="hover:text-yellow-400"><Twitter size={16} /></Link>
            <Link href="#" className="hover:text-yellow-400"><Instagram size={16} /></Link>
            <Link href="#" className="hover:text-yellow-400"><FaYoutube size={16} /></Link>
            <Link href="#" className="hover:text-yellow-400"><FaTiktok size={16} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
