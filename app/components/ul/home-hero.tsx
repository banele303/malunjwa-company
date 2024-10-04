'use client'

import NumberTicker from "@/components/magicui/number-ticker";

import { GoogleReviews } from "./googlereviews";



export function HomeHeroTwo() {
    return (
        <div className="flex pt-[2rem] justify-center items-center py-[2rem] relative h-[60vh] min-h-[400px] w-full overflow-hidden px-[2rem] ">

            <div className="">
                <GoogleReviews />
<h1 className="text-xl md:text-4xl 
       font-semibold
       
        mx-auto 
       leading-[4rem]
        relative
       
         bg-clip-text
          text-transparent pt-3 bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    <span className="mt-[2rem] text-yellow-500"> Malunjwa Construction Projects</span>
                </h1>

                <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
                    <div className="">
                        <h1 className="text-2xl font-medium text-gray-600 ">
                            TRUSTED | DEDICATED WORK
                        </h1>

                        <div className="flex my-6 gap-x-5 w-full">
                            <div>
                                <h1 className="text-blue-500 text-3xl md:text-5xl">
                                    <NumberTicker value={100} /> +
                                    <p className="text-gray-500 text-sm md:text-md">
                                        Happy Clients
                                    </p>
                                </h1>
                            </div>

                            <div className="w-px bg-gray-300 self-stretch"></div>

                            <div className="flex-1 min-w-0">
                                <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                                    <NumberTicker value={50} /> +
                                    <p className="text-gray-500 text-sm md:text-md">
                                        Projects Completed
                                    </p>
                                </h1>
                            </div>






                            
                        </div>
                    </div>
                </div>
            </div>



            <div></div>



        </div>
    );
}