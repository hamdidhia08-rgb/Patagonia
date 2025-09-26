import HeroSlider from "@/Components/Hero/Hero";
import Nav from "@/Components/Navbar/Nav";
import TopBar from "@/Components/TopBar/TopBar";
import Image from "next/image";

export default function Home() {
  return (
 <>
 <TopBar/>
  <Nav/>
  <HeroSlider/>
 </>
  );
}
