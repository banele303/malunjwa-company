
"use client"
import { Phone, Mail, MapPin, } from 'lucide-react'
import Form from './form'

export default function ContactForm() {
    return (
        <section className="py-20 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='px-[2rem] md:px-[5rem]'>
                    <h2 className="text-2xl font-bold  mb-12 text-blue-600"> 24-Hour Emergency Plumbing Services</h2>
                    <p className="font-semibold text-start text-[18px] text-gray-800">We offer 24-hour emergency plumbing services and 30-minute response time to repair any and all plumbing issues.
                        <br />
                        <br />
                        If you have stopped up or clogged drains, our local plumbers will remove the clog and get your drains working again fast.
                    </p>

                    <div className="space-y-6 pt-5">
                        <div className="flex items-center">
                            <Phone className="w-6 h-6 text-blue-600 mr-2" />
                            <span>+27 83 946 2626</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-6 h-6 text-blue-600 mr-2" />
                            <span>office.malunjwa@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                            <span>43 Amanda Avenue Johanneburg south</span>
                        </div>
                    </div>


                </div>





                <div className="container mx-auto px-4">
                    <Form />

                </div>


            </div>

        </section>
    )
}