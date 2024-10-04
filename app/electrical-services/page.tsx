import Image from 'next/image'
import { Metadata } from 'next'
import { Phone, Mail, MapPin, Zap, Shield, Clock, Plug, Lightbulb, Wifi } from 'lucide-react'
import ServiceCard from './ServiceCard'
import TestimonialCard from './TestimonialCard'
import { NavigationMenuDemo } from '../components/ul/Navbar'
import ElectricalServices from './electrical-services'
import CallNow from '../about-us/ul/call'
import Footer from '../components/footer'
import FAQSection from '../about-us/ul/FAQSection'
import ElectricHero from './electrical-hero'
import BCallOut from '../components/bottom-call-out'



export const metadata: Metadata = {
    title: 'Malunjwa Electrical Services - Expert Electrical Solutions in South Africa',
    description: 'Malunjwa offers professional electrical services including installations, repairs, and maintenance for residential and commercial properties across South Africa.',
}

export default function Home() {
    const services = [
        { icon: Zap, title: "Electrical Installations", description: "Complete wiring solutions for new constructions and renovations" },
        { icon: Plug, title: "Repairs and Maintenance", description: "Quick and efficient repairs for all electrical issues" },
        { icon: Shield, title: "Safety Inspections", description: "Comprehensive electrical safety audits and certifications" },
        { icon: Clock, title: "24/7 Emergency Services", description: "Round-the-clock support for urgent electrical problems" },
        { icon: Plug, title: "Power Points & Switches", description: "Installation and repair of power points and switches" },
        { icon: Lightbulb, title: "Lighting Solutions", description: "Energy-efficient lighting installations and upgrades" },
        { icon: Wifi, title: "Data & Network Cabling", description: "Structured cabling for data and network systems" },
    ]

    const testimonials = [
        { name: "John D.", comment: "Excellent service! The team was professional and completed the job quickly." },
        { name: "Sarah M.", comment: "I'm impressed with their attention to detail. Highly recommended!" },
        { name: "Michael R.", comment: "Fast response time and great workmanship. Will use them again!" },
    ]

    return (
        <>
            <NavigationMenuDemo />
            <main className="min-h-screen bg-gray-50">
                <ElectricHero />


                <ElectricalServices />




                <section id="services" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">About Malunjwa Electrical Services</h2>
                            <p className="text-gray-600 mb-8">
                                Malunjwa Electrical Services is your trusted partner for all electrical needs in South Africa. With years of experience, our team of certified electricians is committed to delivering top-quality workmanship and exceptional customer service. We specialize in both residential and commercial electrical services, ensuring that your property is safe, efficient, and up to code.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">500+</div>
                                    <div className="text-gray-600">Happy Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">1000+</div>
                                    <div className="text-gray-600">Projects Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">24/7</div>
                                    <div className="text-gray-600">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>
                </section>
                <FAQSection />
                <BCallOut/>
                <Footer />
                <CallNow />
            </main>

        </>
    )
}