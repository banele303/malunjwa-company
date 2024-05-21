import Image from "next/image";
import { Navbar } from "./components/navbar";
import HomeHero from "./components/home-hero";
import AboutUS from "./components/about-us";
import Allservices from "./components/all-services";
import BCallOut from "./components/bottom-call-out";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HomeHero/>
    <AboutUS/>
    <Allservices/>
    <BCallOut/>
    <Footer/>
   </div>
  );
}
