import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Hammer, Shield, ThumbsUp, Wrench, Thermometer, Home,  Trash2, Zap, Droplets, ShowerHead, PenTool } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPlumbing() {
  return (
    <div className="">
    
  

      <main className="container mx-auto px-4 py-12 space-y-24">
       

        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2010, MONGAMElI Plumbing has been serving the community with top-notch plumbing services for over
              10 years. What started as a small family business has grown into a trusted name in the industry, known for
              our reliability, expertise, and customer-first approach.
            </p>
            <p className="text-gray-600">
              Our journey has been one of continuous learning and adaptation to new technologies, always with the goal of
              providing the best possible service to our clients.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/plumbing.jpg"
              alt="Neptune Plumbing team"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Our Values Section */}
        <section className="text-center space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <ThumbsUp className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Quality Service</h3>
                <p className="text-gray-600">We never compromise on the quality of our work.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Shield className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
                <p className="text-gray-600">Honesty and transparency in all our dealings.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Wrench className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Expertise</h3>
                <p className="text-gray-600">Continuous learning to stay at the forefront of our field.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Droplet className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Leak Detection and Repair</h3>
                <p className="text-gray-600 mt-2">
                  Using state-of-the-art technology to quickly locate and fix leaks, saving you water and money.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Hammer className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Pipe Installation and Replacement</h3>
                <p className="text-gray-600 mt-2">
                  Expert installation of new pipes and replacement of old or damaged ones for improved water flow.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <ShowerHead className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bathroom Plumbing</h3>
                <p className="text-gray-600 mt-2">
                  Installation and repair of toilets, sinks, showers, and bathtubs for a fully functional bathroom.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Thermometer className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Water Heater Services</h3>
                <p className="text-gray-600 mt-2">
                  Installation, repair, and maintenance of all types of water heaters, including tankless models.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Home className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Sewer Line Services</h3>
                <p className="text-gray-600 mt-2">
                  Cleaning, repair, and replacement of sewer lines to keep your home&apos;s waste system functioning properly.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PenTool className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Drain Cleaning</h3>
                <p className="text-gray-600 mt-2">
                  Professional drain cleaning services to clear clogs and prevent future blockages.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Trash2 className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Garbage Disposal Services</h3>
                <p className="text-gray-600 mt-2">
                  Installation, repair, and maintenance of garbage disposal units for efficient kitchen waste management.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Gas Line Services</h3>
                <p className="text-gray-600 mt-2">
                  Safe installation, repair, and maintenance of gas lines for appliances and heating systems.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Droplets className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Water Treatment Systems</h3>
                <p className="text-gray-600 mt-2">
                  Installation and maintenance of water softeners, filtration systems, and purification units.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button asChild className="mt-8">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Ready to Experience Top-Notch Plumbing Service?</h2>
          <p className="text-xl">
            Whether it&apos;s a small repair or a major installation, we&apos;re here to help. Contact us today!
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </main>

      
    </div>
  )
}