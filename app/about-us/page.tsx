

import Footer from "../components/footer";


import AboutUs from "./about-us";
import AllservicesAbout from "./all-services";
import HomeHero from "./home-hero";
import { NavigationMenuDemo } from "../components/ul/Navbar";
import AboutHero from "./home-hero";
import AboutVisionPage from "./about-vision";
import CallNow from "./ul/call";
import FAQSection from "./ul/FAQSection";
import ContactButtons from "../components/ul/contact-buttons";

export default function Home() {
  return (
   <div>
    <NavigationMenuDemo/>

 <AboutHero/>
    <AllservicesAbout/>
    <AboutVisionPage/>
    <ContactButtons/>
    <FAQSection/>
    <Footer/>
   </div>
  );
}
