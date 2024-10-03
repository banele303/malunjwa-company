import Image from 'next/image';
import Link from 'next/link';
import malunjwaImage from "../../public/construction.jpg"
import motion from 'framer-motion';
import React from 'react';
const businessList = [
    {
        title: "House Renovation",
        id: 1,
        Image: "/about-hero.jpg",
    },
    {
        title: "Electrical",
        id: 2,
        Image: "/electrical.jpg",
    },
    {
        title: "Plumbing",
        id: 3,
        Image: "/plumbing.jpg",
    },
    {
        title: "Construction",
        id: 4,
        Image: "/construction.jpg",

    },
    {
        title: "Civil Works",
        id: 5,
        Image: "/elctrical.jpg",
    },
    {
        title: "Roofing",
        id: 6,
        Image: "/roof.jpg",
    },
];

function AllservicesAbout() {
    return (
        <div className='mt-5 px-[2rem] md:px-[2rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='py-[3rem] md:pt-[3rem] '>
                    <h3 className='text-[17px] font-bold md:text-[20px] py-3'>WHO WE ARE</h3>
                    <p className='text-[15px] leading-7'> M&C is an established local and sustainable business, operating off its own cash flow. Most of our experiences have been gained through being hired as subcontractor by different contractors to execute a wide array of construction projects and now, we have decided to create direct relationship with clients, to offer them a more personalized service and more efficient costs. We have been working in this concept and we have developed extensive knowledge that could transform our concept into a success story. We believe can provide solutions and value creations to our clients.
                        <br />
                        <br />
                        Our technical teams are responsible, qualified, fully trained, experienced and inducted at every site. Stringent employment and medical checks are in place for all our technical teams including, supervisors, team leaders and managers. All staff are trained to comply with company policy, Workplace Health and Safety and safe work place methods.
                        <br />
                        <br />

                        Also, M&C collaborates with a number of specialists, such as qualified structural engineers, architects, building surveyors, designers, electricians, plumbers, gas installers and many others to ensure all clients&apos; needs are met. Moreover, we continuously look for new products and enhance our services to serve our customers better
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








                </div>


                <div className='pt-[2rem] md:pt-[16rem]'>
                    <Image src={malunjwaImage} alt="malunjwa Image Here" width={500} height={200} className='h-[150px] md:h-[300px] object-cover rounded-lg' />
                </div>
            </div>





            
           

            <section style={{ position: 'relative', width: '100%', height: '100%' }}>
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    }}
  />
  <Image
    src="/building1.jpg"
    alt="Construction site with cranes and workers at sunset"
    width={1920}
    height={1080}
    priority
    className="object-cover object-center rounded-md"
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      filter: 'brightness(20%)', // Darken the image
    }}
  />
  <div style={{ position: 'relative', zIndex: 1, padding: '30px' }}>

    <h1 className="mb-4 text-2xl font-bold text-orange-400  md:text-4xl lg:text-4xl pt-[2rem]">
      Building Tomorrow, Today
    </h1>
    <p className='text-[17px] text-slate-300'>
      The company is run by an honest and able team with various experiences and knowledge gained through educating themselves to identify a gap in the South African market. The directors use their own discretion and innovation to serve a market where there is a demand for M&C services.
    </p>
    <h3 className='text-[19px] font-bold md:text-[26px] text-orange-800 py-3 leading-7 mt-[4rem]'>OUR PRINCIPLES</h3>
    <h3 className='text-[19px] font-bold md:text-[23px] py-3 leading-7 mt-[1rem] text-orange-800'>Integrity</h3>
    <p className='text-[17px] text-slate-300'>
      We aspire to the highest standards of ethical behaviour that demonstrate honesty, fairness, and trustworthiness.
    </p>
    <h3 className='text-[19px] font-bold md:text-[23px] py-3 leading-7 mt-[1rem] text-orange-800'>Transparency</h3>
    <p className='text-[17px] text-slate-300'>
      All stakeholders can expect that information to which they are entitled is accurate, complete, relevant, and timely and presented in such a way as not to mislead. References of completed projects used by our marketing team during market presentations shall in no way seek to misrepresent our capabilities.
    </p>
    <h3 className='text-[19px] font-bold md:text-[23px] py-3 leading-7 mt-[1rem] text-orange-800'>Corporate Citizenship</h3>
    <p className='text-[17px] text-slate-300 pb-[2rem]'>
      We embrace cultural diversity, accept our environmental responsibilities, and are sensitive to our local communities.
    </p>
  </div>
</section>










            <h2 className='font-bold text-[22px] py-9 md:text-[35px] text-center'>WE PROVIDE THE BEST CONSTRUCTION SERVICES</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div key={business.id} className='shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out'>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[150px] md:h-[200px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.title}</h2>
                            <h2 className='font-bold text-lg'>{business.title}</h2>
                            <button className="bg-blue-500 no-underline group w-[9rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-slate-300 inline-block">
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



        </div>
    );
}

export default AllservicesAbout;