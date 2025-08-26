import React, { useState } from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";
import { Download, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Viewapplication = () => {
  const [openRow, setOpenRow] = useState(null);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ✅ Table for medium+ screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">User Name</th>
                <th className="px-6 py-3">Job Title</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Resume</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {viewApplicationsPageData.map((applicant, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: "rgba(243,244,246,0.4)",
                  }}
                  className="border-b transition-all duration-300"
                >
                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4 flex items-center gap-3">
                    <motion.img
                      src={applicant.imgSrc}
                      alt={applicant.name}
                      className="w-10 h-10 rounded-full object-cover shadow"
                      whileHover={{ scale: 1.1 }}
                    />
                    <span className="font-medium">{applicant.name}</span>
                  </td>

                  <td className="px-6 py-4">{applicant.jobTitle}</td>
                  <td className="px-6 py-4">{applicant.location}</td>

                  <td className="px-6 py-4">
                    <motion.a
                      href={applicant.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Download size={18} /> Download
                    </motion.a>
                  </td>

                  <td className="px-6 py-4 relative">
                    <button
                      onClick={() =>
                        setOpenRow(openRow === index ? null : index)
                      }
                      className="p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <MoreVertical size={20} />
                    </button>

                    <AnimatePresence>
                      {openRow === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-6 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full px-4 py-2 text-left hover:bg-green-100 text-green-600"
                          >
                            Accept
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full px-4 py-2 text-left hover:bg-red-100 text-red-600"
                          >
                            Reject
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Card layout for small screens */}
        <div className="grid gap-4 md:hidden">
          {viewApplicationsPageData.map((applicant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-12 h-12 rounded-full object-cover shadow"
                  />
                  <div>
                    <p className="font-medium">{applicant.name}</p>
                    <p className="text-sm text-gray-500">
                      {applicant.jobTitle}
                    </p>
                  </div>
                </div>

                {/* Action Dropdown */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenRow(openRow === index ? null : index)
                    }
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <MoreVertical size={20} />
                  </button>

                  <AnimatePresence>
                    {openRow === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="w-full px-4 py-2 text-left hover:bg-green-100 text-green-600"
                        >
                          Accept
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="w-full px-4 py-2 text-left hover:bg-red-100 text-red-600"
                        >
                          Reject
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                📍 {applicant.location}
              </p>

              <motion.a
                href={applicant.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm"
              >
                <Download size={16} /> Download Resume
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div> 
    </div>
  );
};

export default Viewapplication; 
