import AboutUS from "../components/about-us";
import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
import AboutHero from "./about-us";
import AboutUs from "./about-us";
import AllservicesAbout from "./all-services";
import HomeHero from "./home-hero";

export default function Home() {
  return (
   <div>
    <Navbar/>
<HomeHero/>
    <AboutHero/>
    <AllservicesAbout/>
    <Footer/>
   </div>
  );
}
