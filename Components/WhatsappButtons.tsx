"use client";

import React, { useEffect, useState } from "react";

const WhatsappButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsapp = () => {
    const phone = "+905385073947";
    const message = encodeURIComponent("Hello !");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Bouton WhatsApp avec image */}
      <button
        onClick={openWhatsapp}
        aria-label="Contact via WhatsApp"
        className="fixed bottom-28 right-8 z-250 bg-[#25D366] p-3 rounded-full shadow-xl hover:bg-[#1ebe5b] transition-all duration-300 flex items-center justify-center"
      >
        <img
          src="/images/Watsupp_icon.png" 
          alt="WhatsApp"
          className="w-9 h-9"
        />
      </button>
    </>
  );
};

export default WhatsappButtons;
