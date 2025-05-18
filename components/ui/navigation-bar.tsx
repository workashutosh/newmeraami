"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-5 z-50">
      <div className={`overflow-hidden ${isMobileMenuOpen ? 'rounded-t-[50px]' : 'rounded-[50px]'} md:rounded-[50px] md:mx-auto
        xl:w-4/5 2xl:w-[68%] bg-gray-100 shadow-md flex items-center shadow-blue-100
        justify-between py-3 px-3 md:px-8 mx-6`}
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

            <Link href="/about" className="hover:text-blue-500">
              About Us
            </Link>

            <Link href="/services" className="hover:text-blue-500">
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
            className="hidden md:block
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
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Contact Us
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden mx-6 bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out rounded-b-[50px] ${isMobileMenuOpen ? 'max-h-[400px] shadow-md shadow-blue-100' : 'max-h-0'}`}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          <Link 
            href={"/"} 
            className="text-gray-800 hover:text-blue-500 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-800 hover:text-blue-500 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            className="text-gray-800 hover:text-blue-500 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href={"/work"} 
            className="text-gray-800 hover:text-blue-500 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link 
            href={"/contact"} 
            className="text-gray-800 hover:text-blue-500 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 