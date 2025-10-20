import About from "@/Components/About/About";
import BlogLayout from "@/Components/Blog/Blog";
import ImageGallerySlider from "@/Components/Galerie/Galerie";
import HeroSlider from "@/Components/Hero/Hero";
import Nav from "@/Components/Navbar/Nav";
import NewsletterSection from "@/Components/NewsletterSection/NewsletterSection";
import RecommendedSection from "@/Components/Pack/Pack";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import Service from "@/Components/Service/Service";
import TopBar from "@/Components/TopBar/TopBar";
import TopDestinations from "@/Components/TopDestinations/TopDestinations";
import WhatsappButtons from "@/Components/WhatsappButtons";
import Image from "next/image";

export default function Home() {
  return (
 <>
 <TopBar/>
  <Nav/>
  <HeroSlider/>
  <TopDestinations/>

  <RecommendedSection/>
  <NewsletterSection/>
  <Service/>
  <ImageGallerySlider/>
    <About/>
   <div className="py-12">
      <BlogLayout />
    </div>
  <WhatsappButtons/>
  <ScrollToTopButton/>
 </>
  );
}
