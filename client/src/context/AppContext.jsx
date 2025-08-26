import { createContext, useState, useEffect } from "react";
import { jobsData } from "../assets/assets.js"; // Assuming it's exported as `jobsData`

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: ""
  });

  const [isSearch, setIsSearch] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [showReacruter, setShowReacuter] = useState(false);

  useEffect(() => {
    // Load jobs initially
    setJobs(jobsData);
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearch,
    setIsSearch,
    jobs,
    setJobs,
    showReacruter,
    setShowReacuter
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
