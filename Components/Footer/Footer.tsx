"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Barlow_Condensed, Just_Another_Hand } from "next/font/google";

// --- Polices ---
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

const Footer: React.FC = () => {
  return (
    <footer
      className={`relative text-white py-24 overflow-hidden ${barlow.variable} ${hand.variable}`}
    >
      {/* --- Image de fond --- */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
      />

      {/* --- Masque bleu foncé (style "océan") --- */}
      <div className="absolute inset-0 bg-[#021E3F]/85 mix-blend-multiply"></div>

      {/* --- Contenu principal --- */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-100">
        {/* Bloc gauche — Slogan */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight mb-4">
            Travel beyond your imagination,
            <br /> with <span className="text-sky-400">Patagonia Tourism!</span>
          </h2>
          <p className="text-gray-300 text-lg mt-3">
            Discover unforgettable journeys, curated for your comfort and adventure.
          </p>
        </div>

        {/* Bloc central — Adresse */}
        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide text-white">
            Address
          </h4>
          <ul className="space-y-2">
            <li>Newista evleri B blok</li>
            <li>Daire 16, Esenyurt / Istanbul</li>
            <li>Turkey</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="hover:text-orange-400 transition-all"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition-all"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition-all"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Bloc droit — Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide text-white">
            Contact
          </h4>

          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/icon_contact/whatsapp-icon.svg"
                alt="WhatsApp"
                width={40}
                height={40}
                className="rounded-full bg-white/10 p-2"
              />
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="font-semibold text-lg text-white">
                  +90 545 533 865
                </p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/icon_contact/mail-icon.svg"
                alt="Mail"
                width={40}
                height={40}
                className="rounded-full bg-white/10 p-2"
              />
              <div>
                <p className="text-sm text-gray-400">Mail Us</p>
                <p className="font-semibold text-lg text-white">
                  info@patagonia.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/icon_contact/call-icon.svg"
                alt="Phone"
                width={40}
                height={40}
                className="rounded-full bg-white/10 p-2"
              />
              <div>
                <p className="text-sm text-gray-400">More Inquiry</p>
                <p className="font-semibold text-lg text-white">
                  +90 546 453 345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bande inférieure --- */}
      <div className="relative mt-16 bg-[#010d1e]/95 backdrop-blur-sm py-5 border-t border-white/10">
        <p className="text-center text-gray-300 text-base tracking-wide">
          © {new Date().getFullYear()} <span className="text-orange-400">Patagonia Tourism</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
