"use client";

import React from 'react';
import Image from 'next/image';
import NavigationBar from '@/components/ui/navigation-bar';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Feature {
  title: string;
  description: string;
  caseStudy?: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: Feature[];
}

const mainServices = [
  {
    id: 1,
    title: "Digital Marketing & Advertising",
    description: "We shape digital campaigns that don't just get seen, they get results.",
    icon: "📈",
    features: [
      {
        title: "Paid Media (Google, Meta, LinkedIn Ads)",
        description: "Ads that speak the right language, to the right people, at the right time. Built for action, not just attention.",
        caseStudy: "Helped a retail brand achieve a 3.4x ROAS in 60 days."
      },
      {
        title: "SEO (On-page, Off-page, Local)",
        description: "We sculpt your online presence so your audience can find you first, and keep coming back.",
        caseStudy: "Boosted organic traffic by 120% for a local business in under 3 months."
      },
      {
        title: "Funnel Strategy & CRO",
        description: "Every touchpoint matters. We map and refine the customer journey to turn clicks into conversions."
      },
      {
        title: "Retargeting & Automation",
        description: "Don't lose what you've already earned. We bring back interested visitors with smart, timely follow-ups."
      }
    ]
  },
  {
    id: 2,
    title: "Branding & Identity",
    description: "Your brand is more than a logo. It's your story! we help you tell it beautifully.",
    icon: "🎨",
    features: [
      {
        title: "Brand Strategy & Naming",
        description: "We uncover what makes you unique, then name and position your brand to reflect its soul.",
        caseStudy: "Named and positioned 15+ startups across industries."
      },
      {
        title: "Visual Identity (Logo, Colors, Typography)",
        description: "Crafted elements that bring your brand's personality to life, from your logo to your letterhead."
      },
      {
        title: "Brand Voice & Messaging",
        description: "We help you speak in a voice that's authentically yours, across every touchpoint."
      },
      {
        title: "Collateral & Packaging",
        description: "Your brand deserves to be seen, held, and remembered. We design assets that make that happen."
      }
    ]
  },
  {
    id: 3,
    title: "Content & Copywriting",
    description: "Words are our clay! We write like people talk - just smarter!",
    icon: "✍️",
    features: [
      {
        title: "Website & Landing Page Copy",
        description: "Clear, compelling, and conversion-driven copy that guides visitors to act."
      },
      {
        title: "Blogs & SEO Content",
        description: "Thoughtful articles that aren't just keyword-filled fluff, but stories that build trust and authority."
      },
      {
        title: "Social Media Content",
        description: "We craft posts that stop the scroll and start conversations."
      },
      {
        title: "Email, Ads & Scriptwriting",
        description: "Whether it's inbox copy or a 30-second script, we distill your message into moments that matter."
      }
    ]
  },
  {
    id: 4,
    title: "Website & Online Presence",
    description: "Your website is your home online. Let's make it warm, fast, and unforgettable.",
    icon: "💻",
    features: [
      {
        title: "Website Design & Development",
        description: "Handcrafted websites that load fast, look great, and drive results across devices and audiences."
      },
      {
        title: "E-Commerce Setup",
        description: "From product discovery to checkout, we design every step for a smooth shopping experience."
      },
      {
        title: "Technical SEO",
        description: "We optimize the unseen layers so your site works beautifully for both people and search engines."
      },
      {
        title: "Reputation Management",
        description: "You deserve to be seen in the best light. We help you stay in control of your brand's online narrative."
      }
    ]
  },
  {
    id: 5,
    title: "PR & Influencer Marketing",
    description: "Great stories deserve a stage. We help you take the spotlight, and keep it.",
    icon: "🎯",
    features: [
      {
        title: "Press Releases & Media Coverage",
        description: "We pitch and place stories that show your brand at its best, in all the right places."
      },
      {
        title: "Influencer Partnerships",
        description: "We connect you with creators your audience trusts, amplifying your reach and reputation."
      },
      {
        title: "Campaign Planning & Promotion",
        description: "From concept to calendar, we design campaigns that feel seamless and stand out."
      },
      {
        title: "Online Reputation Building",
        description: "More than buzz, we build trust and authenticity, one mention at a time."
      }
    ]
  },
  {
    id: 6,
    title: "Analytics & Performance Tracking",
    description: "Craft meets clarity. Every decision we make is backed by insight.",
    icon: "📊",
    features: [
      {
        title: "Analytics Dashboards",
        description: "Live, human-friendly dashboards that show exactly how your marketing is performing."
      },
      {
        title: "Funnel & Campaign Reporting",
        description: "We track every step, from awareness to action, and share the story behind the numbers."
      },
      {
        title: "A/B Testing & Optimization",
        description: "Small changes, big impact. We test, learn, and improve continuously."
      },
      {
        title: "Strategy Reviews & Recommendations",
        description: "Your data deserves more than just reports. We turn it into clear, actionable next steps."
      }
    ]
  }
];

const serviceBundles = [
  {
    title: "Brand Foundry",
    description: "For startups and businesses building their brand from the ground up.",
    services: [
      "Brand Strategy & Naming",
      "Visual Identity (Logo, Colors, Typography)",
      "Website Design & Development",
      "Foundational Copywriting (Website & Messaging)"
    ]
  },
  {
    title: "Growth Engine",
    description: "For growing brands looking to scale reach and conversions.",
    services: [
      "Paid Media Campaigns (Meta, Google, LinkedIn)",
      "Funnel Strategy & CRO",
      "Retargeting & Automation",
      "Analytics Dashboard & Performance Tracking"
    ]
  },
  {
    title: "Local Impact",
    description: "For service providers, clinics, and stores looking to dominate in local search & visibility.",
    services: [
      "Local SEO Optimization",
      "Google Business Profile Setup & Management",
      "Website & Landing Page Copy",
      "Reputation Management & Reviews Strategy"
    ]
  },
  {
    title: "Content Catalyst",
    description: "For brands that want to grow organically and stay top-of-mind.",
    services: [
      "Blogs & SEO Articles",
      "Social Media Content",
      "Email Campaigns & Automation",
      "Campaign Reporting + A/B Testing"
    ]
  }
];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        group
        bg-white 
        rounded-3xl 
        p-12 
        shadow-xl 
        hover:shadow-2xl 
        transition-all 
        duration-500 
        border 
        border-gray-100
        relative
        overflow-hidden
        hover:border-blue-100/50
      "
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/0 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center gap-8 mb-10">
          <motion.div
            variants={iconVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
          >
            <span className="text-6xl">{service.icon}</span>
          </motion.div>
          <motion.h2
            variants={featureVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            {service.title}
          </motion.h2>
        </div>
        <motion.p
          variants={featureVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 mb-16 max-w-3xl leading-relaxed"
        >
          {service.description}
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {service.features.map((feature: Feature, featureIndex: number) => (
            <motion.div
              key={featureIndex}
              variants={featureVariants}
              transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
              className="
                group/card
                bg-gradient-to-br 
                from-gray-50 
                via-white 
                to-gray-50
                rounded-2xl 
                p-8 
                hover:shadow-lg 
                transition-all 
                duration-300
                border
                border-gray-100
                hover:border-blue-100
                relative
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover/card:from-blue-700 group-hover/card:to-purple-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                {feature.caseStudy && (
                  <Link 
                    href="/case-studies" 
                    className="
                      inline-flex 
                      items-center 
                      gap-2 
                      text-blue-500 
                      hover:text-purple-600 
                      font-medium
                      group/link
                    "
                  >
                    <span>View Case Study</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-white to-[#f3f4f6]">
      <NavigationBar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-blue-50 opacity-50 pattern-grid-lg"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0] 
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [180, 0, 180]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          />
        </motion.div>
        <div className="container mx-auto px-6 py-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 leading-tight"
              >
                Our Services
              </motion.h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6 text-xl text-slate-700 leading-relaxed mt-12"
            >
              <motion.p variants={fadeInUp} className="text-2xl font-light text-slate-800">
                At Meraami, we don't just deliver services — we architect digital excellence.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-slate-600">
                Each solution is meticulously crafted, data-driven, and infused with creative innovation to elevate your brand's digital presence.
              </motion.p>
              <motion.p variants={fadeInUp} className="font-medium bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Ready to transform your digital landscape?
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-12
                  px-12
                  py-6
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-purple-500
                  text-white
                  rounded-full
                  text-lg
                  font-medium
                  hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)]
                  hover:translate-y-[-2px]
                  transition-all
                  duration-300
                  relative
                  overflow-hidden
                  before:absolute
                  before:inset-0
                  before:bg-gradient-to-r
                  before:from-blue-500
                  before:via-purple-500
                  before:to-blue-500
                  before:translate-x-[-100%]
                  before:animate-[shimmer_2s_infinite]
                  before:opacity-70
                  before:blur-xl
                "
              >
                <span className="relative z-10">Book Your Strategy Session</span>
                <motion.svg
                  whileHover={{ x: 5 }}
                  className="w-6 h-6 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Services */}
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="space-y-32"
        >
          {mainServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Service Bundles */}
        <div className="mt-48">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Service Bundles
              </h2>
            </div>
            <p className="text-xl text-slate-600">
              Expertly curated service packages designed to deliver maximum impact for your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {serviceBundles.map((bundle, index) => (
              <div 
                key={index} 
                className="
                  group
                  bg-white 
                  rounded-3xl 
                  p-12
                  shadow-xl 
                  hover:shadow-2xl 
                  transition-all 
                  duration-500
                  border
                  border-gray-100
                  hover:border-blue-100/50
                  relative
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{bundle.title}</h3>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed">{bundle.description}</p>
                  <ul className="space-y-5">
                    {bundle.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-4 text-slate-700 group/item">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg group-hover/item:text-indigo-600 transition-colors duration-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-48">
          <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 rounded-3xl p-20 max-w-5xl mx-auto text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Ready to Elevate Your<br />Digital Presence?
              </h2>
              <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to create something extraordinary that sets your brand apart in the digital landscape.
              </p>
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-12
                  py-6
                  bg-white
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  rounded-full
                  text-lg
                  font-bold
                  hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]
                  hover:translate-y-[-2px]
                  transition-all
                  duration-300
                  border-2
                  border-white/20
                  backdrop-blur-sm
                "
              >
                <span>Start Your Journey</span>
                <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 