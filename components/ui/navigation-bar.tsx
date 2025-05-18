"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavigationBar() {
  return (
    <div
      className="overflow-hidden rounded-[50px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-gray-100 shadow-md flex items-center shadow-blue-100
   justify-between py-3 px-3 md:px-8 mx-6"
    >
      <Link href={"/"}> 
        <Image
          src={"/logo/logo.webp"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[150px] h-12"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-500"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="hover:text-blue-500"
          >
            Services
          </Link>

          <Link href={"/work"} className="hover:text-blue-500">
            Our Work
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <Link
          href={"/contact"}
          className="
py-3 
px-6
text-lg 
hover:bg-[#abcbff]
hover:font-bold
border-2
border-black
text-white rounded-[50px]
bg-[#121212]
transition
duration-200
hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 