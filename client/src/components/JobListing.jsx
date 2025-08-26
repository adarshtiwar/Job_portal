import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {
  const { isSearch, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Filter logic
  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategory.length === 0 || selectedCategory.some((cat) => job.category.includes(cat));
    const matchesLocation = (job) =>
      selectedLocation.length === 0 || selectedLocation.some((loc) => job.location.includes(loc));
    const matchesTitle = (job) =>
      searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job) =>
      searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter((job) => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job));

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategory, selectedLocation, searchFilter]);

  // Pagination
  const jobsPerPage = 6;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  // Checkbox handlers
  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location) ? prev.filter((loc) => loc !== location) : [...prev, location]
    );
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-8">
      {/* Toggle Button for Mobile */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className={`w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md transition-all duration-300 ${showFilters ? "block" : "hidden"} lg:block`}>
          {/* Search Filters Active */}
          {isSearch && (searchFilter.title || searchFilter.location) && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Current search</h3>
              <div className="flex flex-wrap gap-3 text-sm">
                {searchFilter.title && (
                  <span className="flex items-center gap-2 bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1.5 rounded-full">
                    {searchFilter.title}
                    <img
                      onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))}
                      src={assets.cross_icon}
                      alt="Remove title"
                      className="w-4 h-4 cursor-pointer"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="flex items-center gap-2 bg-red-100 text-red-800 border border-red-200 px-3 py-1.5 rounded-full">
                    {searchFilter.location}
                    <img
                      onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))}
                      src={assets.cross_icon}
                      alt="Remove location"
                      className="w-4 h-4 cursor-pointer"
                    />
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4">Search by Categories</h4>
            <ul className="space-y-3">
              {JobCategories.map((category, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    className="w-4 h-4"
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategory.includes(category)}
                  />
                  <label htmlFor={category} className="text-gray-600 text-sm">
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-medium mb-4">Search by Location</h4>
            <ul className="space-y-3">
              {JobLocations.map((location, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={location}
                    value={location}
                    className="w-4 h-4"
                    onChange={() => handleLocationChange(location)}
                    checked={selectedLocation.includes(location)}
                  />
                  <label htmlFor={location} className="text-gray-600 text-sm">
                    {location}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Job Cards */}
        <section className="w-full lg:w-3/4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2" id="job-list">
            Latest Jobs
          </h3>
          <p className="mb-6 text-gray-500">Get your desired job from top companies</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          {/* Pagination */}
          {filteredJobs.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <img src={assets.left_arrow_icon} alt="Previous" className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <img src={assets.right_arrow_icon} alt="Next" className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default JobListing;
