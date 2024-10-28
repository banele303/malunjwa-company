
"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Cog, Shield, Users, CheckCircle, Wrench, Cpu, Lightbulb, Thermometer, Activity, Wifi, Droplet, Truck, Maximize } from 'lucide-react'
import Image from 'next/image'
import Footer from '../components/footer'
import { NavigationMenuDemo } from '../components/ul/Navbar'

export default function EngineeringPage() {
  const [activeTab, setActiveTab] = useState("electrical")

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuDemo />
      {/* Hero Section */}
      <section className="relative  text-white">
        <div className="absolute inset-0">
          <Image
            src="/about-hero1.jpg"
            alt="Engineering background"
            layout="fill"
            objectFit="cover"

            className="brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Powering the Future with MALUNJWA Engineering
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Innovative solutions in Electrical and Mechanical Engineering
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About MALUNJWA Company</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                MALUNJWA Company is a leading engineering firm specializing in cutting-edge electrical and mechanical solutions. With decades of experience and a team of highly skilled engineers, we tackle complex challenges and deliver innovative results.
              </p>
              <p className="text-lg mb-4">
                Our commitment to excellence, sustainability, and client satisfaction sets us apart in the industry. We leverage the latest technologies and methodologies to ensure that every project we undertake is completed to the highest standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>50+</CardTitle>
                  <CardDescription>Years of Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>1000+</CardTitle>
                  <CardDescription>Projects Completed</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>200+</CardTitle>
                  <CardDescription>Expert Engineers</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>30+</CardTitle>
                  <CardDescription>Countries Served</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Engineering Services</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="electrical">Electrical Engineering</TabsTrigger>
              <TabsTrigger value="mechanical">Mechanical Engineering</TabsTrigger>
            </TabsList>
            <TabsContent value="electrical">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <Zap className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Power Systems Design</CardTitle>
                    <CardDescription>Efficient and reliable power distribution solutions</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Cpu className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Control Systems</CardTitle>
                    <CardDescription>Advanced automation and process control</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Lightbulb className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Lighting Design</CardTitle>
                    <CardDescription>Energy-efficient and aesthetic lighting solutions</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Electrical Protection</CardTitle>
                    <CardDescription>Safeguarding systems against electrical faults</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Activity className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Energy Management</CardTitle>
                    <CardDescription>Optimizing energy usage and efficiency</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Wifi className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Telecommunications</CardTitle>
                    <CardDescription>Design and implementation of communication networks</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="mechanical">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <Cog className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Machine Design</CardTitle>
                    <CardDescription>Custom machinery for various industries</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Thermometer className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>HVAC Systems</CardTitle>
                    <CardDescription>Efficient heating, ventilation, and air conditioning</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Wrench className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Maintenance & Repair</CardTitle>
                    <CardDescription>Comprehensive equipment care and optimization</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Droplet className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Fluid Systems</CardTitle>
                    <CardDescription>Design and optimization of hydraulic and pneumatic systems</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Truck className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Material Handling</CardTitle>
                    <CardDescription>Efficient systems for moving and storing materials</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Maximize className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Structural Analysis</CardTitle>
                    <CardDescription>Ensuring integrity and safety of mechanical structures</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Engineering Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="mb-4">
                At MALUNJWA Company, we believe in pushing the boundaries of what's possible. Our team of expert engineers combines cutting-edge technology with creative problem-solving to deliver innovative solutions that meet and exceed our clients' expectations.
              </p>
              <p>
                We stay at the forefront of industry trends and continuously invest in research and development to bring the latest advancements to our projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Engineering</h3>
              <p className="mb-4">
                Sustainability is at the core of our engineering philosophy. We design with the future in mind, incorporating eco-friendly practices and energy-efficient solutions into all our projects.
              </p>
              <p>
                Our commitment to sustainable engineering not only benefits the environment but also provides long-term cost savings and improved performance for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Smart Factory Automation</CardTitle>
                <CardDescription>Revolutionizing manufacturing with IoT and AI</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/plumbing.jpg" alt="HVAC System" width={400} height={200} className="mb-4 rounded-md max-height-[300px]" />
                <p>Implemented a state-of-the-art automation system, integrating IoT sensors and AI-driven process optimization, resulting in a 30% increase in productivity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Renewable Energy Integration</CardTitle>
                <CardDescription>Powering communities with clean energy</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/placeholder.svg" alt="HVAC System" width={400} height={200} className="mb-4" />
                <p>Designed and implemented a hybrid solar-wind power system for a remote community, providing reliable, sustainable energy and reducing carbon emissions by 5000 tons annually.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advanced HVAC Design</CardTitle>
                <CardDescription>Optimizing comfort and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/placeholder.svg" alt="HVAC System" width={400} height={200} className="mb-4" />
                <p>Developed a cutting-edge HVAC system for a large commercial complex, incorporating smart controls and energy recovery ventilation, resulting in 40% energy savings.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of industries does MALUNJWA Company serve?</AccordionTrigger>
              <AccordionContent>
                MALUNJWA Company serves a wide range of industries, including but not limited to manufacturing, energy, construction, infrastructure, telecommunications, and transportation. Our diverse expertise allows us to tackle complex engineering challenges across various sectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does MALUNJWA integrate sustainability into its projects?</AccordionTrigger>
              <AccordionContent>
                Sustainability is a core principle in all our projects. We incorporate energy-efficient designs, use eco-friendly materials when possible, and optimize systems to reduce resource consumption. Our team stays updated on the latest green technologies and sustainable practices to ensure we're always offering the most environmentally responsible solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can MALUNJWA handle both design and implementation of engineering projects?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer end-to-end engineering services. Our team can handle every phase of a project, from initial concept and design to implementation, testing, and ongoing maintenance. This comprehensive approach ensures seamless project execution and allows us to maintain high quality standards throughout the entire process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What sets MALUNJWA apart from other engineering firms?</AccordionTrigger>
              <AccordionContent>
                MALUNJWA Company stands out due to our innovative approach, multidisciplinary expertise, and commitment to sustainability. We combine cutting-edge technology with creative problem-solving to deliver unique solutions. Our team's diverse skills in both electrical and mechanical engineering allow us to tackle complex, integrated projects that other firms might struggle with.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Does MALUNJWA offer consulting services?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide expert consulting services in both electrical and mechanical engineering. Our consultants can assist with project planning, feasibility studies, system optimization, and technical audits. We work closely with clients to understand their needs and provide tailored advice to help them make informed decisions and achieve their goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Engineer Your Success?</h2>
          <p className="text-xl mb-8">Contact MALUNJWA Company today for innovative electrical and mechanical solutions.</p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}