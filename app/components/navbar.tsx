"use client";

import Link from "next/link";


export function Navbar() {
  return (
    
    <div className="navbar bg-base-100 pt-10">
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost text-xl"> Malunjwa Company</Link>
    </div>
    <div className="flex-none ">
      <ul className="menu menu-horizontal px-1 mt-[-2rem]  text-[17px]">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">About US</Link></li>
        
      
        <li>
          <details>
            <summary>
            Services
            </summary>
            <ul className="bg-base-100 z-20 rounded-t-none mx-[-6rem]  text-[15px]">
            <li><Link href="/about-us">Electrical Works</Link></li>
            <li><Link href="/about-us">Mechanical Works</Link></li>
            <li><Link href="/about-us">General Building</Link></li>
            <li><Link href="/about-us">Street Linghts</Link></li>
            <li><Link href="/about-us">Civil Works</Link></li>
            <li><Link href="/about-us">General Works</Link></li>
             
            </ul>
          </details>
        </li>
        <li  className="pl-[3rem] mt-[-.5rem]">
        <div className="flex flex-col justify-start  px-2 ">
                    <button className="bg-blue-400 no-underline group w-[8rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6 text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-md bg-blue-400 py-1 px-1 ring-1 ring-white/10">
                        <Link
                          href={`tel:`}
                          className="text-center mx-auto"
                        >
                       CALL Now
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
        </li>
      </ul>
    </div>
  </div>
   
  );
}