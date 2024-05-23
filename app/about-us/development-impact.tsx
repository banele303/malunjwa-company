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

function DevelopmentImpact() {
    return (
        <div className='mt-5 px-[2rem] md:px-[6rem]'>

            <div className='py-[3rem] md:pt-[3rem]'>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3'>DEVELOPMENT IMPACT</h3>
                <p className='text-[17px] leading-7'> M&C has the potential to provide employment to a number employees depending on the number of projects available. This will indirectly provide income to over 200 or more other dependents since a single worker supports approximately six other dependents statically. Notwithstanding the above, M&C will also indirectly spur growth in the country through subcontracting ancillary services and other specialized works.
                </p>

                <h3 className='text-[17px] font-bold md:text-[20px] py-3'>DEVELOPMENT IMPACT</h3>
                <p className='text-[17px] leading-7'> All of our themes have supporting behaviours. The application of these behaviours ensures that together we achieve alignment of policy, process and actions, which we regard as key to realizing our target of zero harm.
                </p>
               <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
<div>


</div>
               </section>

                <ul>
                    <li>To achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become a company-based solution, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation - sky is the limit and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak</li>
                    <br />

                    <li>To strive and improve a better everyday life for our people, even if it meant stepping away from the comfort zone</li>

                    <br />
                    <li>To achieve controlled growth while maintaining stability</li>
                    <br />

                    <li>To create a pleasant work environment that can be enjoyed by our employees and clients</li>

                </ul>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3 leading-7 pt-[4rem] text-orange-400'>MANAGEMENT TEAM</h3>
                <p className='text-[17px]'>The company is run by honest and able team with various experience and knowledge gained through educating themselves to identify a gap in the South African market. The directors use their own discretion and innovation to serve a market where there is a demand for M&C services.
                </p>
                <h3 className='text-[19px] font-bold md:text-[26px] text-orange-800 py-3 leading-7 mt-[4rem]'>OUR PRINCIPLES</h3>
                <h3 className='text-[19px] font-bold md:text-[23px]  py-3 leading-7 mt-[1rem]'>Integrity</h3>
                <p className='text-[17px]'>We aspire to the highest standards of ethical behaviour that demonstrate honesty, fairness and trustworthiness.
                </p>
                <h3 className='text-[19px] font-bold md:text-[23px]  py-3 leading-7 mt-[1rem]'>Transparency</h3>
                <p className='text-[17px]'>All stakeholders can expect that information to which they are entitled is accurate, complete, relevant and timely and presented in such a way as not to mislead. References of completed projects used by our marketing team during market presentations shall in no way seek to misrepresent our capabilities.
                </p>
                <h3 className='text-[19px] font-bold md:text-[23px]  py-3 leading-7 mt-[1rem]'>Corporate Citizenship</h3>
                <p className='text-[17px]'>We embrace cultural diversity, accept our environmental responsibilities and are sensitive to our local communities.
                </p>



            </div>





        </div>
    );
}

export default DevelopmentImpact;