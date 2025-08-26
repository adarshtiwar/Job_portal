import React, { useState } from 'react';
import moment from 'moment';
import { assets, jobsApplied } from '../assets/assets.js';

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <div className="container px-4 2xl:px-20 mx-auto my-12">
      {/* Resume Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Resume</h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {isEdit ? (
            <>
              <label
                htmlFor="resumeUpload"
                className="cursor-pointer flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-md border hover:bg-gray-200 transition"
              >
                <input
                  type="file"
                  id="resumeUpload"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => setResume(e.target.files[0])}
                />
                <img
                  src={assets.profile_upload_icon}
                  alt="Upload Resume"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 font-medium">Upload PDF</span>
              </label>

              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <a
                href={resume ? URL.createObjectURL(resume) : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Resume
              </a>

              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-600 border border-gray-300 rounded-md px-5 py-2 hover:bg-gray-100 transition"
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      {/* Jobs Applied Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Jobs You've Applied For</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-4 py-3">Company</th>
                <th className="text-left px-4 py-3">Job Title</th>
                <th className="text-left px-4 py-3">Location</th>
                <th className="text-left px-4 py-3">Applied On</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplied.map((job, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img src={job.logo} alt="logo" className="w-6 h-6 rounded" />
                    <span className="font-medium text-gray-800">{job.company}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{job.title}</td>
                  <td className="px-4 py-3 text-gray-700">{job.location}</td>
                  <td className="px-4 py-3 text-gray-700">{moment(job.date).format('ll')}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.status === 'Accepted'
                          ? 'bg-green-100 text-green-700'
                          : job.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
              {jobsApplied.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-gray-500">
                    No jobs applied yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applications;
