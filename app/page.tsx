import BlogLayout from "@/Components/Blog/Blog";
import ImageGallerySlider from "@/Components/Galerie/Galerie";
import HeroSlider from "@/Components/Hero/Hero";
import Nav from "@/Components/Navbar/Nav";
import RecommendedSection from "@/Components/Pack/Pack";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
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
  <ImageGallerySlider/>
   <div className="py-12">
      <BlogLayout />
    </div>
  <WhatsappButtons/>
  <ScrollToTopButton/>
 </>
  );
}
