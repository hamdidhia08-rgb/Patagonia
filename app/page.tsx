"use client";

import { useEffect, useState } from "react";

import About from "@/Components/About/About";
import AboutSection from "@/Components/About/AboutSection";
import BlogLayout from "@/Components/Blog/Blog";
import Footer from "@/Components/Footer/Footer";
import ImageGallerySlider from "@/Components/Galerie/Galerie";
import HeroSlider from "@/Components/Hero/Hero";
import TopDestinations from "@/Components/TopDestinations/TopDestinations";
import RecommendedSection from "@/Components/Pack/Pack";
import NewsletterSection from "@/Components/NewsletterSection/NewsletterSection";
import Service from "@/Components/Service/Service";
import WhatsappButtons from "@/Components/WhatsappButtons";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import Preloader from "@/Components/Preloader/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (you can increase to 1500ms or remove timeout)
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <HeroSlider />
      <About />
      <TopDestinations />
      <RecommendedSection />
      <NewsletterSection />
      <Service />
      <AboutSection />
      <ImageGallerySlider />

      <div className="py-12">
        <BlogLayout />
      </div>
      
      <Footer />
      <WhatsappButtons />
      <ScrollToTopButton />
    </>
  );
}
