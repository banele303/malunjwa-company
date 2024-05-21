"use client"

import Image from "next/image";
import Link from "next/link";

import KitchenImage from "../../public/hero2.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function HomeHero() {
    const phoneNumber = '+27 83 300 0705';
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (

        <div className="relative h-screen">

            <div className="relative h-[60vh] md:h-[90vh] w-full">
                <Image quality={100} src={KitchenImage} alt="our hero construction image" className="brightness-50 md:h-[90vh] h-full w-full" />


                <div
                    className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8"
                >


                    <div className="">

                        <div className="px-[2rem]  mt-[1rem] md:mt-[6rem]">

                            <div className="grid grid-cols-1  gap-6 pt-[2rem] md:pt-[7rem] md:pl-[3rem] md:h-[580px]">
                                <motion.div
                                    initial={{ y: -500 }}
                                    animate={{ y: inView ? 0 : 0 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }} className="md:pl-[3rem]">
                                    <h1 className="text-2xl md:text-5xl pt-[5rem] md:pt-[1rem] leading-[5rem] text-slate-100 font-extrabold">
                                      We Help You With all Your Construction <br/><br/>Projects In One Roof
                                    </h1>
                                    <p className="text-xl md:text-2xl py-6   text-slate-200 font-extrabold">
                                    We Are trusted For Your Project
                                    </p>
                                    <div className="flex flex-col justify-start mt-6 px-4 md:px-[4rem] ml-[1rem] md:ml-[-4rem]">
                                        <button className="bg-blue-500 no-underline group w-[15rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                            </span>
                                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-4 px-1 ring-1 ring-white/10">
                                                <Link
                                                    href={`tel:${phoneNumber}`}
                                                    className="text-center mx-auto"
                                                >
                                                    FREE IN-HOME ESTIMATE
                                                </Link>
                                                <svg
                                                    fill="none"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    width="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                                        stroke="orange"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                        </button>
                                    </div>

                                </motion.div>
                                <div>

                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>


            <div>
            </div>
        </div>
    )
}