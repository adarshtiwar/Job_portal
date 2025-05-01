import React from 'react';
import { assets } from '../assets/assets';

const JobCard = ({ job }) => {
  if (!job) return null;

  return (
    <div className="transform-gpu transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-md p-5 border border-gray-200 h-full flex flex-col justify-between">
        
        {/* Company Icon */}
        <div className="flex justify-center mb-4">
          <img
            src={assets.company_icon}
            alt="Company"
            className="w-12 h-12 rounded-xl object-cover"
          />
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold text-gray-800 text-center mb-2">{job?.title || 'Job Title'}</h4>

        {/* Details */}
        <div className="flex justify-center gap-2 text-gray-500 text-xs mb-4">
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">{job?.location || 'Location'}</span>
          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">{job?.level || 'Level'}</span>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 text-sm mb-5"
          dangerouslySetInnerHTML={{
            __html: job?.description?.slice(0, 150) + '...',
          }}
        ></p>

        {/* Buttons */}
        <div className="flex justify-between gap-2 mt-auto">
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition">
            Apply Now
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
