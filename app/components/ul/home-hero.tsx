'use client'

import Image from 'next/image'
import NumberTicker from "@/components/magicui/number-ticker"
import { GoogleReviews } from "./googlereviews"

export function HomeHeroTwo() {
    return (
        <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
           
            <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
            <div className="relative z-1 flex justify-center bg-gray-900 items-center h-full px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <GoogleReviews />
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-yellow-400">Malunjwa Construction Projects</span>
                    </h1>

                    <div className="mb-10 items-start">
                        <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">
                            TRUSTED | DEDICATED WORK
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
                            <div className="text-center">
                                <h3 className="text-blue-400 text-3xl md:text-5xl font-bold">
                                    <NumberTicker value={100} />+
                                </h3>
                                <p className="text-gray-300 text-sm md:text-lg mt-2">
                                    Happy Clients
                                </p>
                            </div>

                            <div className="hidden sm:block w-px h-16 bg-gray-400 self-center"></div>

                            <div className="text-center">
                                <h3 className="text-blue-400 text-3xl md:text-5xl font-bold">
                                    <NumberTicker value={50} />+
                                </h3>
                                <p className="text-gray-300 text-sm md:text-lg mt-2">
                                    Projects Completed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}