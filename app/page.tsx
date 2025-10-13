import HeroSlider from "@/Components/Hero/Hero";
import Nav from "@/Components/Navbar/Nav";
import RecommendedSection from "@/Components/Pack/Pack";
import TopBar from "@/Components/TopBar/TopBar";
import TopDestinations from "@/Components/TopDestinations/TopDestinations";
import Image from "next/image";

export default function Home() {
  return (
 <>
 <TopBar/>
  <Nav/>
  <HeroSlider/>
  <TopDestinations/>
  <RecommendedSection/>
 </>
  );
}
