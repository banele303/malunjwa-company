
import HomeHero from "./components/home-hero";
import AboutUS from "./components/about-us";
import Allservices from "./components/all-services";
import BCallOut from "./components/bottom-call-out";
import Footer from "./components/footer";

import { NavigationMenuDemo } from "./components/ul/Navbar";
import { HomeHeroTwo } from "./components/ul/home-hero";
import CallNow from "./about-us/ul/call";
import FAQSection from "./about-us/ul/FAQSection";
import ContactButtons from "./components/ul/contact-buttons";

export default function Home() {
  return (
   <div className="">
    <NavigationMenuDemo/>
    <HomeHeroTwo/>
    <AboutUS/>
    <Allservices/>
    <BCallOut/>
    <ContactButtons/>
    <FAQSection/>
    <Footer/>
   </div>
  );
}
