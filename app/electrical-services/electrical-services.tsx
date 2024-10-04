import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ElectricalServices() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-2">Electrical services</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>

            <p className="text-center mb-12">
                Easy Electrical and Plumbing offer a range of electrician services, electrical
                installations, maintenance and repairs, provided by our professional electricians,
                emergency electricians and 24 hour electricians in Pretoria and Centurion.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <Image
                        src="/elctrical.jpg"
                        alt="Elctrical panel"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Electrical Installation</h2>
                    <p className="mb-4">
                        Easy Electrical provide a list of electrical installations services, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mb-6">
                        <li>DB WIRING</li>
                        <li>HOUSE TUBING</li>
                        <li>HOUSE WIRING</li>
                        <li>PLUGS AND SWITCHES INSTALLATION</li>
                        <li>APPLIANCES INSTALLATIONS</li>
                    </ul>
                    <Button className="w-full md:w-auto">Get Quote | Book Service →</Button>
                </div>
            </div>







            <div className="flex flex-col md:flex-row gap-8 pt-10">
                <div className="md:w-1/3">
                    <Image
                        src="/electrical/motorgate.png"
                        alt="Elctrical panel"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Gate Motor Installation and Maintenance</h2>
                    <p className="text-gray-600 mb-4">If you need assistance with Gate Motors, Easy Electrical can assist you with:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        <li>GATE MOTORS INSTALLATIONS</li>
                        <li>GATE MOTORS SERVICES</li>
                    </ul>
                    <Button className="w-full md:w-auto">Get Quote | Book Service →</Button>
                </div>
            </div>








            <div className="flex flex-col md:flex-row gap-8 pt-10">
                <div className="md:w-1/3">
                    <Image
                        src="/electrical/generator.png"
                        alt="Elctrical panel"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Generator Installation</h2>
                    <p className="text-gray-600 mb-4">When it comes to Generators Easy Electrical can assist you with:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        <li>GENERATORS INSTALLATIONS</li>
                        <li>GENERATORS SERVICES</li>

                        <li>CHANGE OVER SWITCHES INSTALLATIONS</li>
                        <li>CHANGE OVER SWITCHES RELOCATING</li>
                    </ul>
                    <Button className="w-full md:w-auto">Get Quote | Book Service →</Button>
                </div>
            </div>









            <div className="flex flex-col md:flex-row gap-8 pt-10">
                <div className="md:w-1/3">
                    <Image
                        src="/electrical/system1.png"
                        alt="Elctrical panel"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Electric Repair And Maintanance</h2>
                    <p className="text-gray-600 mb-4">Malunjwa  provide a variety of electrical maintenance services, including but not limited to:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-6">








                        <li>STOVE REPAIRS</li>
                        <li>WASHING MACHINE REPAIRS</li>
                        <li>DISH WASHER REPAIRS</li>
                        <li>MICRO WAVE REPAIRS</li>

                       
                        <li>POWER TRIPPING</li>
                        <li>POWER FAILURE</li>
                        <li>LOW VOLTAGE</li>
                        <li>FAULT FINDING</li>
                        <li>BURNED CABLES</li>
                        <li>REPLACEMENT OF PLUGS AND LIGHT SWITCHES</li>



                    </ul>
                    <Button className="w-full md:w-auto">Get Quote | Book Service →</Button>
                </div>
            </div>

















        </div>
    )
}