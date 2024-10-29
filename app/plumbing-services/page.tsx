
import Image from 'next/image'
import Footer from '../components/footer'
import { NavigationMenuDemo } from '../components/ul/Navbar'
import AboutPlumbing from './about-plumbing';
import HomeHero from './home-hero';
import SecondSection from './second-section';
import PlumbingServices from './plumbing-services';
import Testimonials from './testimonials';
import ContactCTA from './cta';
import ContactForm from './contact';
import ContactButtons from '../components/ul/contact-buttons';


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
<NavigationMenuDemo/>
<HomeHero/>
<AboutPlumbing/>
<SecondSection/>
<PlumbingServices/>
<Testimonials/>
<ContactCTA/>
<ContactForm/>
<ContactButtons/>
<Footer/>
    </div>
  );
}