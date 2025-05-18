"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import CaseStudiesSection from '@/components/ui/case-studies-section';
import React, { useState, useEffect } from 'react';
import NavigationBar from '@/components/ui/navigation-bar';

const services = [
  {
    title: "Analytics & Performance Tracking",
    description: "We speak fluent data. Get clear insights, a smarter strategy, and better results.",
    color: "bg-gray-50",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "Branding & Identity",
    description: "This isn't just a logo. It's your edge, your vibe, your story, brought to life.",
    color: "bg-gray-50",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "Content & Copywriting",
    description: "We write like people talk! but smarter. SEO-friendly, scroll-stopping stuff that sells.",
    color: "bg-gray-50",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "Digital Marketing & Advertising",
    description: "Clicks are cute - conversions are better. PPC, SEO, funnels, we've got you covered.",
    color: "bg-gray-50",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "PR & Influencer Marketing",
    description: "Let's make sure the right people are talking about you and saying the right things.",
    color: "bg-gray-50",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "Website & Online Presence",
    description: "Websites that look great, load fast, and don't make users rage-click away.",
    color: "bg-gray-50",
    hoverColor: "hover:bg-gray-100"
  }
];

// Custom component for animated text
const AnimatedTimeText = () => {
  const variations = ['Time', 'Day', 'Month', 'Year'];
  const [currentVariation, setCurrentVariation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start animation sequence
      setIsVisible(false);
      setTranslateY(20); // Move down
      
      setTimeout(() => {
        setCurrentVariation((prev) => (prev + 1) % variations.length);
        setTranslateY(-20); // Prepare to move up
        
        // Fade in and move to original position
        setTimeout(() => {
          setIsVisible(true);
          setTranslateY(0);
        }, 300);
      }, 300);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-blue-500">
      Delivered On Time. Every{' '}
      <span 
        className={`
          inline-block
          transition-all 
          duration-300 
          ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        {variations[currentVariation]}
      </span>
    </span>
  );
};

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Element
        name="top"
      >
        <NavigationBar />
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            At Meraami, we build digital strategies that actually fit your business, not someone else's 
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[26px] hover:font-bold
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Let's Get to Work
            </Link>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Industries catered 
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-2xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-xs text-wrap md:text-md">
                      You can be the next one
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/logo.webp",
                    name: "Logo",
                  },
                  {
                    logo: "/logo/logo.webp",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>
      {/* <TargetShootAnimation /> */}

            {/* New About Us Section */}
            <Element name="about">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto py-2">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-medium text-center md:text-left">
                Handcrafted Marketing, 
                <br />
                <AnimatedTimeText />
              </h1>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We don&apos;t do one-size-fits-all. Every brand is different, so we never serve the same solution twice.
                </p>
                <p>
                  From startups trying to make some noise to established names ready to scale, we build custom strategies that hit hard, move fast, and show up right when you need them.
                </p>
                <p className="font-semibold text-black">
                  No fluff. No delays. Just marketing that gets you noticed (and gets results).
                </p>
              </div>
            </div>
            
            <div className="relative">
              <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                <Image
                  src={"/logo/logo.webp"}
                  width={10000}
                  height={10000}
                  className="w-full rounded-lg shadow-lg"
                  alt="Meraami About Us"
                />
              </BoxReveal>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </Element>

      <section className="w-full bg-[#fafafa] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
            Why <span className="text-blue-600">Meraami</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-6 py-4 text-left font-semibold w-1/3">What You Need</th>
                  <th className="px-6 py-4 text-left font-semibold w-1/3">Typical Agency</th>
                  <th className="px-6 py-4 text-left font-semibold w-1/3">Meraami</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    need: "Fast, efficient onboarding",
                    typical: "2-3 week delays to kick things off",
                    meraami: "We start within 48 hours, no delays"
                  },
                  {
                    need: "Real, actionable strategy",
                    typical: "Long, unreadable strategy docs",
                    meraami: "Strategic voice notes that make sense, fast"
                  },
                  {
                    need: "Momentum and fast results",
                    typical: "\"Results take time\" excuses",
                    meraami: "We build momentum within weeks, not months"
                  },
                  {
                    need: "Personalized brand voice",
                    typical: "One logo, 3 colours, and a prayer",
                    meraami: "We create full brand personality kits with depth"
                  },
                  {
                    need: "Quick, clear communication",
                    typical: "2-week email responses (maybe)",
                    meraami: "We respond fast (within 24 hours BD), clearly, and never ghost"
                  },
                  {
                    need: "Unlimited revisions",
                    typical: "Extra revisions billed sneakily",
                    meraami: "We're not done until it's perfect"
                  },
                  {
                    need: "Commitment after the invoice",
                    typical: "Big promises in pitch calls",
                    meraami: "You get the same energy after the invoice is paid"
                  }
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      hover:bg-blue-50 
                      transition-colors 
                      duration-300
                    `}
                  >
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 font-medium">{row.need}</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-600">{row.typical}</td>
                    <td className="px-6 py-4 border-b border-gray-200 font-semibold text-blue-600">{row.meraami}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fafafa] py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center relative">
            <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Clients Say Things Like...
            </h2>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic text-gray-700 mb-6 md:px-10">
                &quot;Meraami just gets it. Everything felt custom-built for us, because it was.&quot;
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center">
                  <p className="font-semibold text-lg text-blue-600">
                    Ms. Ann Matthews
                  </p>
                  <p className="text-gray-500">
                    CEO, Fresh US
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="
                    inline-block 
                    px-8 
                    py-3 
                    text-base 
                    bg-blue-500 
                    text-white 
                    rounded-full 
                    hover:bg-blue-600 
                    transition 
                    duration-300 
                    shadow-md
                    hover:shadow-lg
                  "
                >
                  Read More Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Element name="services">
        {/* Services section removed and moved to ShootingStarsAndStarsBackgroundDemo */}
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>

          </div>

        </main>
      </Element>

      

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.webp"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with Meraami for over 2 years and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="w-full mt-2 bg-[#121212] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-500/10 opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
              <span className="relative">
                Meet the <span className="text-blue-500">Meraami</span> Team
                <span className="absolute -right-10 -top-4 text-6xl opacity-20 text-blue-500">
                  ★
                </span>
              </span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-300 text-xl leading-relaxed">
              <p className="animate-gradient-text bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                We&apos;re a crew of marketers, strategists, designers, writers, and data nerds, all united by one mission: to craft remarkable digital experiences.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Why We Do What We Do",
                reasons: [
                  "Because we believe marketing should feel as good as it performs.",
                  "Because you deserve an agency that treats your business like its own.",
                  "Because the world doesn't need more noise — it needs brands that truly stand out."
                ],
                bgColor: "bg-gradient-to-br from-blue-900/50 to-blue-500/50",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "What Drives Us Forward",
                reasons: [
                  "Innovation over imitation",
                  "Relationships over transactions",
                  "Craftsmanship over shortcuts",
                  "Impact over impressions"
                ],
                bgColor: "bg-gradient-to-br from-purple-900/50 to-purple-500/50",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((section, index) => (
              <div 
                key={index}
                className={`
                  ${section.bgColor}
                  rounded-2xl 
                  p-8 
                  shadow-2xl 
                  backdrop-blur-lg 
                  border 
                  border-white/10 
                  transform 
                  transition-all 
                  duration-300 
                  hover:-translate-y-2
                  hover:shadow-3xl
                `}
              >
                <div className="flex items-center mb-6 space-x-4">
                  <div>{section.icon}</div>
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {section.reasons.map((reason, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start space-x-3 text-gray-200"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/about"
              className="
                inline-block 
                px-12 
                py-4 
                text-lg 
                bg-blue-600 
                text-white 
                rounded-full 
                hover:bg-blue-700 
                transition 
                duration-300 
                shadow-2xl 
                hover:shadow-blue-500/50
                transform 
                hover:-translate-y-1
                relative 
                overflow-hidden
                before:absolute 
                before:inset-0 
                before:bg-white 
                before:opacity-0 
                hover:before:opacity-10 
                before:transition 
                before:duration-300
              "
            >
              Dive Deeper into Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Add Case Studies Section */}
      <CaseStudiesSection />

    </div>
  );
}
