"use client"
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import Image from "next/image"



export default function SecondSection() {
    return (

        <div>

            
            <h3
                className="
           text-2xl md:text-4xl my-6 md:my-10 md:text-center px-[2rem] font-extrabold text-blue-500">

                Your Trusted Plumbing Experts
            </h3>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto my-[3rem]">

                <div className="max-auto mx-[2rem] md:ml-[4rem]">

                    <h3
                        className="
           text-[16px]  my-6 md:my-10  text-bold text-gray-500"
                    >
                        With years of experience and a commitment to excellence, we&apos;re here to solve all your plumbing needs.
                        <br />
                        <br />

                        Our team of skilled professionals is dedicated to providing top-quality plumbing services for both residential and commercial properties. We use the latest technology and techniques to ensure efficient and long-lasting solutions.
                        <br />
                        <br />

                        From minor repairs to major installations, we handle every job with the same level of care and attention to detail. Our goal is to exceed your expectations and leave you with a plumbing system that works flawlessly.



                    </h3>
                    <p
                        className="
           text-[16px] my-6 md:my-10  text-gray-500"
                    >
                        Our expertise lies in delivering a high level of pest management, creating pest-free environments conducive to comfortable living and peak performance. By eliminating diseases associated with pests, we ensure that residents can live comfortably and employees can perform at their optimum level.
                    </p>


                </div>
                <div className="relative md:mt-[5rem] pt-5 px-[2rem] h-[30vh] md:h-[30vh] md:min-h-[300px] md:w-[600px] overflow-hidden">
                    <Image
                        src={"/geyser2.jpg"}
                        width={1920}
                        height={1080}
                        priority
                        alt="plumbing Image"
                        className="object-cover object-center rounded-md"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,

                        }}
                    />
                </div>
            </section>

            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] pt-[14rem]",
                )}
            />
        </div>
    )
}