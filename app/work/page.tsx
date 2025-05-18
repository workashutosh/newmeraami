"use client";

import React from 'react';
import Link from 'next/link';
import NavigationBar from '@/components/ui/navigation-bar';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-white to-[#f3f4f6]">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            We've Shaped Brands You Know - Yours Could Be Next.
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From ambitious startups to rising stars, we've helped brands like Fresh US, Ecomly, and LuxGlow break through the noise and carve their place in the market.
            Every project is handcrafted, every result earned. Ready to join the list?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#121212] rounded-[50px] hover:bg-[#abcbff] hover:text-black transition duration-300"
          >
            Tell Us What You're Building →
          </Link>
        </section>

        {/* Case Study Preview Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Here's a glimpse of how we help brands grow. Want the full story? Download the case study below.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fresh US Case Study */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Fresh US | Food & Beverage</h3>
              <div className="mb-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="text-gray-700">Break into the local organic market</p>
                <p className="font-semibold mt-4 mb-2">Solution:</p>
                <p className="text-gray-700">Full digital launch, SEO, paid ads, influencer buzz</p>
                <p className="font-semibold mt-4 mb-2">Results:</p>
                <p className="text-gray-700">150% more traffic, 3X sales, local media features</p>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-100">
                  View Detailed Case Study
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Note: This is a sample case to illustrate our sustainability approach. Full case study coming soon.
              </p>
            </div>

            {/* Ecomly Case Study */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ecomly | E-Commerce</h3>
              <div className="mb-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="text-gray-700">Scale conversions on a tight budget</p>
                <p className="font-semibold mt-4 mb-2">Solution:</p>
                <p className="text-gray-700">Funnel revamp, product page optimization, retargeting</p>
                <p className="font-semibold mt-4 mb-2">Results:</p>
                <p className="text-gray-700">2.5X conversion rate, 60% retention boost, 40% lower CPA</p>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-100">
                  View Detailed Case Study
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Note: This is a sample case to illustrate our sustainability approach. Full case study coming soon.
              </p>
            </div>

            {/* Mid-Page CTA Banner */}
            <div className="md:col-span-2 bg-[#121212] text-white p-12 rounded-2xl text-center my-8">
              <h2 className="text-3xl font-bold mb-4">Your brand has big potential. Let's unlock it.</h2>
              <p className="mb-6 text-lg">We're ready to craft your next success story, on time, on brand, and on point.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-white text-black rounded-[50px] hover:bg-[#abcbff] transition duration-300"
              >
                Start Your Project
              </Link>
            </div>

            {/* LuxGlow Case Study */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">LuxGlow | Beauty & Skincare</h3>
              <div className="mb-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="text-gray-700">Connect with Gen Z and rebrand</p>
                <p className="font-semibold mt-4 mb-2">Solution:</p>
                <p className="text-gray-700">Bold rebranding, micro-influencer strategy, viral social campaigns</p>
                <p className="font-semibold mt-4 mb-2">Results:</p>
                <p className="text-gray-700">+200K social followers, 5 viral campaigns, 35% sales growth</p>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-100">
                  View Detailed Case Study
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Note: This is a sample case to illustrate our sustainability approach. Full case study coming soon.
              </p>
            </div>

            {/* GreenWorks Case Study */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">GreenWorks | Sustainability Tech</h3>
              <div className="mb-6">
                <p className="font-semibold mb-2">Challenge:</p>
                <p className="text-gray-700">Build credibility in a competitive niche</p>
                <p className="font-semibold mt-4 mb-2">Solution:</p>
                <p className="text-gray-700">PR, thought leadership, website overhaul</p>
                <p className="font-semibold mt-4 mb-2">Results:</p>
                <p className="text-gray-700">3 national features, 400% lead increase</p>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-100">
                  View Detailed Case Study
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Note: This is a sample case to illustrate our sustainability approach. Full case study coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-gray-100 p-16 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8">Let's create something extraordinary together.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#121212] rounded-[50px] hover:bg-[#abcbff] hover:text-black transition duration-300"
          >
            Start Your Project →
          </Link>
        </section>
      </div>
    </div>
  );
} 