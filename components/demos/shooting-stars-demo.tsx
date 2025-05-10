import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "/icons/analytics.svg",
    title: "Analytics & Performance Tracking",
    description: "We speak fluent data. Get clear insights, a smarter strategy, and better results.",
  },
  {
    icon: "/icons/design.svg",
    title: "Branding & Identity",
    description: "This isn't just a logo. It's your edge, your vibe, your story, brought to life.",
  },
  {
    icon: "/icons/team.svg",
    title: "Content & Copywriting",
    description: "We write like people talk! but smarter. SEO-friendly, scroll-stopping stuff that sells.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Digital Marketing & Advertising",
    description: "Clicks are cute - conversions are better. PPC, SEO, funnels, we've got you covered.",
  },
  {
    icon: "/icons/support.svg",
    title: "PR & Influencer Marketing",
    description: "Let's make sure the right people are talking about you and saying the right things.",
  },
  {
    icon: "/icons/fast.svg",
    title: "Website & Online Presence",
    description: "Websites that look great, load fast, and don't make users rage-click away.",
  }
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our Services.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We transform digital challenges into strategic opportunities.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* New Service Bundles Section */}
      <div className="mt-20 w-full max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Ready-to-Roll Service Bundles
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Brand Foundry",
              subtitle: "For startups and businesses building their brand from the ground up",
              services: [
                "Brand Strategy & Naming",
                "Visual Identity (Logo, Colors, Typography)",
                "Website Design & Development",
                "Foundational Copywriting (Website & Messaging)"
              ],
              color: "bg-blue-900/50 border-blue-600"
            },
            {
              title: "Growth Engine",
              subtitle: "For growing brands looking to scale reach and conversions",
              services: [
                "Paid Media Campaigns (Meta, Google, LinkedIn)",
                "Funnel Strategy & CRO",
                "Retargeting & Automation",
                "Analytics Dashboard & Performance Tracking"
              ],
              color: "bg-purple-900/50 border-purple-600"
            },
            {
              title: "Local Impact",
              subtitle: "For service providers, clinics, and stores looking to dominate local search & visibility",
              services: [
                "Local SEO Optimization",
                "Google Business Profile Setup & Management",
                "Website & Landing Page Copy",
                "Reputation Management & Reviews Strategy"
              ],
              color: "bg-green-900/50 border-green-600"
            },
            {
              title: "Content Catalyst",
              subtitle: "For brands that want to grow organically and stay top-of-mind",
              services: [
                "Blogs & SEO Articles",
                "Social Media Content",
                "Email Campaigns & Automation",
                "Campaign Reporting & A/B Testing"
              ],
              color: "bg-pink-900/50 border-pink-600"
            }
          ].map((bundle, index) => (
            <div 
              key={index} 
              className={`
                ${bundle.color}
                rounded-2xl 
                p-8 
                border 
                shadow-2xl 
                backdrop-blur-lg 
                transition-all 
                duration-300 
                hover:-translate-y-2
                hover:shadow-3xl
              `}
            >
              <h4 className="text-2xl font-bold text-white mb-2">{bundle.title}</h4>
              <p className="text-gray-300 mb-6">{bundle.subtitle}</p>
              <ul className="space-y-4">
                {bundle.services.map((service, idx) => (
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
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Each bundle is fully customizable because no two brands are the same. Let&apos;s craft something unique for you.
          </p>
          <Link
            href="/contact"
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
            "
          >
            Meet Your Meraami Team
          </Link>
        </div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
