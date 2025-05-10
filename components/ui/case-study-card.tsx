import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export interface CaseStudyProps {
  id: number;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  detailLink?: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  id,
  company,
  industry,
  challenge,
  solution,
  results,
  detailLink
}) => {
  return (
    <div 
      className="
        bg-white 
        rounded-2xl 
        shadow-lg 
        border 
        border-gray-100 
        p-8 
        space-y-6 
        transform 
        transition-all 
        duration-300 
        hover:scale-[1.02] 
        hover:shadow-xl
      "
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold text-blue-600">{company}</h3>
          <p className="text-gray-500 text-sm">{industry}</p>
        </div>
        <div className="text-right">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            Case Study #{id}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Results</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        {detailLink && (
          <Link 
            href={detailLink} 
            className="
              flex 
              items-center 
              gap-2 
              text-blue-600 
              hover:text-blue-800 
              transition 
              duration-300
            "
          >
            View Details <ExternalLink className="w-4 h-4" />
          </Link>
        )}
        
        <span className="text-sm text-gray-400 italic">Coming Soon</span>
      </div>
    </div>
  );
};

export default CaseStudyCard; 