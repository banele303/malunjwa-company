import Image from 'next/image'
import Link from 'next/link'

export default function AboutVisionPage() {
  return (
    <div className="bg-white min-h-screen">
    

      {/* Main Content */}
      <main className="container mx-auto px-8 py-8">
        
      

        {/* Vision and Mission */}
        <section className="mb-12 mt-[4rem]">
          <h2 className="text-2xl font-semibold mb-4">Vision and Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p>
                To be a leading provider of innovative ICT and Engineering solutions in South Africa and beyond, recognized for our excellence, integrity, and commitment to client satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p>
                To deliver high-quality, cost-effective ICT and Engineering solutions that empower our clients to achieve their business objectives and drive growth in their respective industries.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Excellence: We strive for the highest standards in everything we do.</li>
            <li>Innovation: We continuously seek new and better ways to serve our clients.</li>
            <li>Integrity: We conduct our business with honesty, transparency, and ethical practices.</li>
            <li>Client-Centric: We put our clients' needs at the forefront of our operations.</li>
            <li>Teamwork: We foster a collaborative environment that encourages creativity and growth.</li>
          </ul>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-4">
            At Malunjwa (Pty) Ltd, our success is driven by our talented and dedicated team of professionals. Our team members bring a wealth of experience and expertise in various fields of ICT and Engineering, ensuring that we can tackle even the most complex projects with confidence.
          </p>
          <p>
            We invest in continuous training and development for our staff, keeping them up-to-date with the latest technologies and industry best practices. This commitment to excellence allows us to provide our clients with innovative solutions that drive their businesses forward.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Malunjwa (Pty) Ltd?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expertise: Our team of skilled professionals brings years of experience in ICT and Engineering.</li>
            <li>Innovation: We stay at the forefront of technological advancements to provide cutting-edge solutions.</li>
            <li>Quality: We are committed to delivering high-quality services that exceed client expectations.</li>
            <li>Customer Focus: We work closely with our clients to understand their unique needs and provide tailored solutions.</li>
            <li>Reliability: Our track record speaks for itself - we deliver on our promises and meet deadlines.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Work with Us?</h2>
          <p className="mb-4">
            Contact Malunjwa (Pty) Ltd today to learn more about how we can help your business succeed through innovative ICT and Engineering solutions.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Contact Us
          </Link>
        </section>
      </main>

      {/* Footer */}
     
    </div>
  )
}