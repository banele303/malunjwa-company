"use client"
import Link from "next/link"
import { Phone } from 'lucide-react'

export default function CallNow() {
    return (
        <div>
            <div className="fixed mt-[4rem] md:mt-[20rem] top-20 right-5 z-30">
                <Link
                    href={"/meeting"}
                    className="
                        flex
                        items-center
                        justify-center
                        py-2
                        px-5
                        text-lg
                        font-semibold
                        text-white
                        bg-gradient-to-r
                        from-orange-700
                        to-orange-900
                        rounded-md
                        shadow-lg
                        transition
                        duration-300
                        ease-in-out
                        transform
                        hover:scale-105
                        hover:from-orange-600
                        hover:to-orange-800
                    "
                >
                    <Phone className="mr-3 text-blue-800" />
                    Call Now: +27 63 199 5124
                </Link>
            </div>
        </div>
    )
}
