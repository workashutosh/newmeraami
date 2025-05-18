"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavigationBar from '@/components/ui/navigation-bar';

const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFBFF] to-white">
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 15px #22c55e; }
          50% { box-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e; }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
      <NavigationBar />
      
      {/* Hero Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              variants={fadeInUp}
              className="flex-1 space-y-6"
            >
              <div className="relative">
                <span className="absolute -left-4 top-0 w-1 h-12 bg-blue-500/20 rounded-full"></span>
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
                  Crafting Digital
                  <br />
                  <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Experiences</span>
            </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                We believe in the art of digital transformation. Every pixel, every interaction, every moment is crafted with purpose and precision. With our innovative approach, we've helped businesses transform their digital presence into compelling brand stories.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link 
                  href="/services" 
                  className="inline-block px-6 py-3 cursor-pointer bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-light transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Discover Services
                </Link>
                <Link 
                  href="#process" 
                  className="inline-block px-6 py-3 border border-gray-300 rounded-lg font-light hover:border-gray-900 transition-all duration-300 text-gray-900 hover:bg-gray-50"
                >
                  Our Process
                </Link>
            </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex-1 relative"
            >
              <div className="relative">
                {/* Abstract shapes background */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                {/* Main content */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3 bg-green-50/50 px-4 py-2 rounded-full">
          <div className="relative">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]"></div>
                        <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-[glow_2s_ease-in-out_infinite] blur-sm"></div>
                      </div>
                      <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        Ready to Transform
                      </span>
                    </div>
              <Image
                src="/logo/logo.webp"
                      width={100}
                      height={40}
                      alt="Meraami"
                      className="h-8 w-auto"
              />
            </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">Projects Completed</div>
                      <div className="text-lg font-medium text-gray-900">50+</div>
                    </div>
                    <div className="h-px bg-gray-100"></div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                      <div className="text-lg font-medium text-gray-900">95%</div>
                    </div>
                    <div className="h-px bg-gray-100"></div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">Support</div>
                      <div className="text-lg font-medium text-gray-900">24/7</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Fast Response Time</div>
                        <div className="text-xs text-gray-500">Average response within 2 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-white py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            variants={fadeInUp}
            className="relative inline-block mb-12"
          >
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-1 bg-blue-500/40 rounded-full"></span>
            <h2 className="text-3xl font-light text-center">
              Our <span className="font-medium">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Strategy",
                description: "Developing comprehensive brand strategies that position your business for success in the digital landscape.",
                features: ["Market Analysis", "Brand Positioning", "Identity Development"]
              },
              {
                title: "Digital Marketing",
                description: "Creating data-driven marketing campaigns that drive engagement and deliver measurable results.",
                features: ["Social Media", "Content Strategy", "SEO Optimization"]
              },
              {
                title: "Web Development",
                description: "Building responsive, user-friendly websites that combine aesthetics with functionality.",
                features: ["Custom Development", "UI/UX Design", "Performance Optimization"]
              },
              {
                title: "Content Creation",
                description: "Producing engaging content that tells your brand story and connects with your audience.",
                features: ["Copywriting", "Visual Design", "Video Production"]
              },
              {
                title: "Analytics & Insights",
                description: "Providing detailed analytics and actionable insights to optimize your digital presence.",
                features: ["Performance Tracking", "User Behavior", "ROI Analysis"]
              },
              {
                title: "Digital Consulting",
                description: "Offering expert guidance to help navigate the evolving digital landscape.",
                features: ["Strategy Sessions", "Tech Advisory", "Growth Planning"]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-center group-hover:text-gray-600 transition-colors">
                      <span className="mr-2 text-blue-400/40 group-hover:text-blue-500/60 transition-colors">◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            variants={fadeInUp}
            className="relative inline-block mb-12"
          >
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-1 bg-blue-500/40 rounded-full"></span>
            <h2 className="text-3xl font-light text-center">
              Our <span className="font-medium">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We begin with a deep dive into your business objectives, target audience, and competitive landscape. This phase involves extensive research and analysis to develop a tailored strategy.",
                points: [
                  "Business Analysis",
                  "Market Research",
                  "Goal Setting",
                  "Strategy Development"
                ]
              },
              {
                step: "02",
                title: "Creative Development",
                description: "Our creative team works to bring your vision to life through innovative design and compelling content that resonates with your audience and achieves your objectives.",
                points: [
                  "Concept Development",
                  "Design Iteration",
                  "Content Creation",
                  "Brand Alignment"
                ]
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the strategy with precision, ensuring every element is optimized for performance and aligned with your brand guidelines and business goals.",
                points: [
                  "Technical Setup",
                  "Quality Assurance",
                  "Performance Testing",
                  "Launch Preparation"
                ]
              },
              {
                step: "04",
                title: "Optimization & Growth",
                description: "We continuously monitor, analyze, and optimize your digital presence to ensure sustained growth and maximum return on investment.",
                points: [
                  "Performance Tracking",
                  "Data Analysis",
                  "Continuous Improvement",
                  "Growth Strategy"
                ]
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-extralight text-blue-400/20 group-hover:text-blue-500/30 transition-colors">
                    {process.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {process.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {process.points.map((point, idx) => (
                        <li key={idx} className="text-gray-500 text-sm flex items-center group-hover:text-gray-600 transition-colors">
                          <span className="mr-2 text-blue-400/40 group-hover:text-blue-500/60 transition-colors">◆</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-white py-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Client Satisfaction", detail: "Based on project feedback" },
              { number: "50+", label: "Projects Delivered", detail: "Across various industries" },
              { number: "15+", label: "Industry Awards", detail: "For design & innovation" },
              { number: "24/7", label: "Support", detail: "Round the clock assistance" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group text-center hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="text-3xl font-medium text-gray-900 mb-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-sm">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            variants={fadeInUp}
            className="relative inline-block mb-12"
          >
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-1 bg-blue-500/40 rounded-full"></span>
            <h2 className="text-3xl font-light text-center">
              Our <span className="font-medium">Team</span>
          </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "Design Studio",
                description: "Award-winning designers who transform concepts into captivating visual experiences.",
                expertise: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Visual Design"]
              },
              {
                role: "Strategy Team",
                description: "Strategic thinkers who craft data-driven solutions that deliver measurable results.",
                expertise: ["Market Analysis", "Campaign Strategy", "Performance Optimization", "Growth Hacking"]
              },
              {
                role: "Technical Artists",
                description: "Innovation architects who build seamless, cutting-edge digital experiences.",
                expertise: ["Web Development", "App Development", "System Architecture", "Tech Integration"]
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
              >
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {member.role}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="text-gray-500 text-sm flex items-center group-hover:text-gray-600 transition-colors">
                      <span className="mr-2 text-blue-400/40 group-hover:text-blue-500/60 transition-colors">◆</span>
                      {skill}
                    </div>
                  ))}
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 