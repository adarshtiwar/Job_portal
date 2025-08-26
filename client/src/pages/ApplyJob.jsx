import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ApplyJob = () => {
  const { id } = useParams();
  const { jobs } = useContext(AppContext);
  const job = jobs.find(j => j._id === id);

  if (!job) {
    return (
      <div className="text-center text-red-500 mt-20 text-lg animate-pulse">
        🚫 Job not found.
      </div>
    );
  }

  const {
    title,
    location,
    level,
    companyId,
    salary,
    description,
    date,
  } = job;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Convert plain description into structured HTML with ordered lists
  const enhancedDescription = description
    .replace(/<h3>\s*Key Responsibilities\s*<\/h3>/gi, '<h3>Key Responsibilities</h3><ol class="list-decimal pl-6 space-y-1">')
    .replace(/<h3>\s*Skills Required\s*<\/h3>/gi, '</ol><h3>Skills Required</h3><ol class="list-decimal pl-6 space-y-1">')
    .concat('</ol>');

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-purple-100 py-12 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-10">

        {/* Job Header */}
        <div className="relative group bg-white/70 backdrop-blur-lg border border-white/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <img
              src={companyId?.image}
              alt="Company"
              className="w-20 h-20 rounded-2xl object-cover shadow-lg border border-gray-200"
            />
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">{title}</h1>
              <div className="flex flex-wrap gap-3 mt-2 text-sm">
                <span className="bg-slate-100 text-gray-700 px-3 py-1 rounded-full">{companyId?.name}</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{location}</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{level}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">💰 ${salary / 1000}k</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition transform">
              Apply Now
            </button>
            <p className="text-xs text-gray-500 mt-2">📅 Posted on {formattedDate}</p>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white/90 backdrop-blur-lg border border-white/30 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-10 transition duration-300 hover:shadow-2xl space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
              📝 <span>Job Description</span>
            </h2>
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed 
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2 
              [&>h3]:text-xl [&>h3]:text-indigo-700 [&>h3]:mt-6"
            dangerouslySetInnerHTML={{ __html: enhancedDescription }}
          />
          <div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition transform">
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplyJob;
