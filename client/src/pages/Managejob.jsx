import React from 'react';
import { manageJobsData } from '../assets/assets';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

// Custom keyframes (add to your global css, e.g., index.css or tailwind.config.js)
const CustomStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px);}
      to { opacity: 1; transform: translateY(0);}
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 0px #3b82f6; }
      50% { box-shadow: 0 0 24px #3b82f6; }
    }
    .hover\\:animate-glow:hover {
      animation: glow 1s infinite;
    }
    @keyframes bounceIn {
      0% { transform: scale(0.85);}
      60% { transform: scale(1.07);}
      100% { transform: scale(1);}
    }
    .animate-bounceIn {
      animation: bounceIn 0.7s;
    }
  `}</style>
);

const Managejob = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-6">
      <CustomStyles />
      <div className="bg-white rounded-2xl shadow-xl overflow-x-auto animate-fadeIn">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900">
              <th className="font-semibold p-4 text-left">#</th>
              <th className="font-semibold p-4 text-left">Job Title</th>
              <th className="font-semibold p-4 text-left">Date</th>
              <th className="font-semibold p-4 text-left">Location</th>
              <th className="font-semibold p-4 text-left">Applications</th>
              <th className="font-semibold p-4 text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className={`even:bg-blue-50 odd:bg-white transition-transform duration-700 hover:animate-glow
                  hover:scale-[1.015] hover:shadow-lg animate-bounceIn`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <td className="p-4 font-semibold">{index + 1}</td>
                <td className="p-4 font-medium">{job.title}</td>
                <td className="p-4">{moment(job.date).format('ll')}</td>
                <td className="p-4">{job.location}</td>
                <td className="p-4">{job.application}</td>
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="accent-blue-500 w-5 h-5 transition-transform duration-200 hover:scale-110 focus:scale-110"
                    defaultChecked={job.visible}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate('/dashbord/add-job')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg text-white font-semibold px-8 py-3 rounded-xl transition-transform duration-200 hover:scale-105 animate-bounceIn mt-8 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          Post New Job
        </button>
      </div>
    </div>
  );
};

export default Managejob;
