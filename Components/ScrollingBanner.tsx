"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function ScrollingBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current || !contentRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      const count = Math.ceil((containerWidth * 3) / contentWidth); 
      setCopies(count);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const item = (
    <div className="flex items-center gap-12 px-6">
      <span className="text-white text-[12px] font-[700] tracking-wide">
        FREE SHIPPING ON ORDERS OF $40 OR MORE
      </span>
      <Star className="w-[14px] h-[14px] text-white " />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full bg-[#8a1111] h-12 flex items-center"
    >
      <div
        className={`flex animate-marquee whitespace-nowrap will-change-transform ${inter.className}`}
      >
        {[...Array(copies)].map((_, i) => (
          <div ref={i === 0 ? contentRef : null} key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
