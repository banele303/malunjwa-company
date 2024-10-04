import Image from "next/image";
import Link from "next/link";

import malunjwaImage from "../../public/electrical/system1.png"

export default function AboutUS() {
  const phoneNumber = '+27 83 300 0705';

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] py-[3rem] px-[2rem md:px-[4rem]  mt-[-14rem] md:mt-2">
         
        <section>
          { /* Owner Info */}

          <h3 className="text-[18px] font-bold py-4 md:text-[23px]">Transparency, Quality & Reliable Services!</h3>
          <p className="text-[16px] md:text-[17px] leading-8">Malunjwa and Company (Pty) Ltd, hereafter called "M&C" is a multi-purpose company and is taking up operations into different industries or sectors and seeks to use company divisions to separate its operations, hence is called a “one house, many rooms”. M&C was incorporated in the Republic of South Africa on 27 October 2015 (Company registration: 2015/377851/07) and its broad legal competences are diverse but primarily include:</p>
          </section>
        <section className="px-2 md:mt-[2rem]">

        <Image src={malunjwaImage} alt="malunjwa Image Here" width={500} height={200} className='h-[150px] md:h-[300px] object-cover rounded-lg' />
          { /* Owner Image */}
          </section>
    </div>
  )
}