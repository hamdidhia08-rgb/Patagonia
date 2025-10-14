"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const WhatsappButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsapp = () => {
    const phone = "+905377671027";
    const message = encodeURIComponent("Bonjour !");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Bouton WhatsApp */}
      <button
        onClick={openWhatsapp}
        aria-label="Contact via WhatsApp"
        className="fixed bottom-28 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebe5b] transition-all duration-300"
      >
        <MessageCircle size={24} />
      </button>

 
    </>
  );
};

export default WhatsappButtons;
