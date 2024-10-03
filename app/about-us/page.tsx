
import AboutUS from "../components/about-us";
import Footer from "../components/footer";
import { Navbar } from "../components/navbar";

import AboutUs from "./about-us";
import AllservicesAbout from "./all-services";
import HomeHero from "./home-hero";
import { NavigationMenuDemo } from "../components/ul/Navbar";
import AboutHero from "./home-hero";
import AboutVisionPage from "./about-vision";

export default function Home() {
  return (
   <div>
    <NavigationMenuDemo/>

 <AboutHero/>
    <AllservicesAbout/>
    <AboutVisionPage/>
    <Footer/>
   </div>
  );
}
