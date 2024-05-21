import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const businessList = [
    {
        title: "House Renovation",
        id: 1,
        Image: "/hero.png",
    },
    {
        title: "Bathroom Remodeling",
        id: 2,
        Image: "/hero.png",
    },
    {
        title: "Painting",
        id: 3,
        Image: "/hero.png",
    },
    {
        title: "Paving",
        id: 4,
        Image: "/hero.png",

    },
    {
        title: "Kitchen Remodeling",
        id: 5,
        Image: "/hero.png",
    },
    {
        title: "Roofing",
        id: 6,
        Image: "/hero.png",
    },
];

function Allservices() {
    return (
        <div className='mt-5 px-[2rem] md:px-[6rem]'>
            <h2 className='font-bold text-[22px] py-9 md:text-[35px] text-center'>WE PROVIDE THE BEST CONSTRUCTION SERVICES</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div key={business.id} className='shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out'>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[150px] md:h-[200px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.title}</h2>
                            <h2 className='font-bold text-lg'>{business.title}</h2>
                            <button className="bg-blue-500 no-underline group w-[9rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-1 px-1 ring-1 ring-white/10">
                                    <Link
                                        href="/house-remodeling"
                                        className="text-center mx-auto"
                                    >
                                        Learn More
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
                    </div>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                    ))
                }
            </div>
            <div className='py-[3rem] md:pt-[3rem]'>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3'>Vision Statement</h3>
                <p className='text-[17px] leading-7'> Success requires visions… and a little bit of luck.
                    Our vision is
                </p>
                <br />

                <ul>
                    <li>To achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become a company-based solution, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation - sky is the limit and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak</li>
                    <br />

                    <li>To strive and improve a better everyday life for our people, even if it meant stepping away from the comfort zone</li>

                    <br />
                    <li>To achieve controlled growth while maintaining stability</li>
                    <br />

                    <li>To create a pleasant work environment that can be enjoyed by our employees and clients</li>

                </ul>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3 leading-7 pt-[4rem] text-orange-400'>Mission Statement</h3>
                <p className='text-[17px]'>M&C has a mission to improve a better everyday life for people, even if it meant stepping away from the comfort zone to assist clients with various implementations of their projects, and we have confidence in our ability to generate the consensus and commitments necessary to succeed. We are prepared to stand behind our recommendations and to assist our clients with obtaining appropriate approvals to proceed.
                </p>
                <h3 className='text-[19px] font-bold md:text-[26px] text-orange-800 py-3 leading-7 mt-[4rem]'>B-BBEE</h3>
                <p className='text-[17px]'>M&C is committed to Broad-Based Black Economic Empowerment (B-BBEE), with a comprehensive strategy that aims to achieve meaningful representation of black people at ownership and employment level. This includes complying with the Black Empowerment Legislation, identifying and appointing B- BBEE compliant suppliers, engaging in projects to transfer skills to previously disadvantaged individuals and partnering with emerging black providers.
                </p>
                


            </div>


        </div>
    );
}

export default Allservices;