import React from 'react';
import Link from 'next/link';
import CaseStudyCard, { CaseStudyProps } from './case-study-card';

const CASE_STUDIES: CaseStudyProps[] = [
  {
    id: 1,
    company: 'Fresh US',
    industry: 'Food & Beverage',
    challenge: 'Break into the local organic market',
    solution: 'Full digital launch, SEO, paid ads, influencer buzz',
    results: [
      '150% more traffic',
      '3X sales',
      'Local media features'
    ],
    detailLink: '/case-studies/fresh-us'
  },
  {
    id: 2,
    company: 'Ecomly',
    industry: 'E-Commerce',
    challenge: 'Scale conversions on a tight budget',
    solution: 'Funnel revamp, product page optimization, retargeting',
    results: [
      '2.5X conversion rate',
      '60% retention boost',
      '40% lower CPA'
    ],
    detailLink: '/case-studies/ecomly'
  },
  {
    id: 3,
    company: 'LuxGlow',
    industry: 'Beauty & Skincare',
    challenge: 'Connect with Gen Z and rebrand',
    solution: 'Bold rebranding, micro-influencer strategy, viral social campaigns',
    results: [
      '+200K social followers',
      '5 viral campaigns',
      '35% sales growth'
    ],
    detailLink: '/case-studies/luxglow'
  },
  {
    id: 4,
    company: 'GreenWorks',
    industry: 'Sustainability Tech',
    challenge: 'Build credibility in a competitive niche',
    solution: 'PR, thought leadership, website overhaul',
    results: [
      '3 national features',
      '400% lead increase'
    ],
    detailLink: '/case-studies/greenworks'
  }
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-blue-50/10 to-blue-100/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="
            text-4xl 
            md:text-5xl 
            font-light 
            tracking-tight 
            text-gray-800 
            mb-6 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-br 
            from-gray-800 
            via-blue-900 
            to-blue-700
          ">
            Our Success Stories
          </h2>
          <p className="
            text-xl 
            text-gray-600 
            max-w-3xl 
            mx-auto 
            opacity-80
          ">
            Real brands, real transformations. See how we turn challenges into opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/case-studies"
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
              duration-500 
              shadow-xl 
              hover:shadow-blue-500/50
              transform 
              hover:-translate-y-2
              relative 
              z-10
              group
              font-medium
              tracking-wide
            "
          >
            <span className="relative flex items-center">
              Explore All Case Studies
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 