import React, { useEffect, useState, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import { motion } from "framer-motion";
import { JobCategories, JobLocations } from "../assets/assets";

const Addjob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Senior Level");
  const [salary, setSalary] = useState("");
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Type here...",
        modules: {
          toolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }]],
        },
      });
    }
  }, []);

  return (
    <motion.form
      className="max-w-3xl mx-auto p-8  rounded-xl  space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Job Title */}
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Job Title</label>
        <input
          type="text"
          placeholder="Type here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Job Description</label>
        <div
          ref={editorRef}
          className="w-full border border-gray-300 rounded-md min-h-[120px] p-2 focus:outline-none"
        ></div>
      </div>

      {/* Category + Location + Level (inline layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Category */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Job Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobCategories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Job Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobLocations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Job Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
      </div>

      {/* Salary */}
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Salary</label>
        <input
          type="number"
          placeholder="0"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-35 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        className="w-20 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        ADD
      </motion.button>
    </motion.form>
  );
};

export default Addjob;
