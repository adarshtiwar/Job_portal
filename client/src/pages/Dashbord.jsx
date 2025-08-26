import React from "react";
import { assets } from "../assets/assets";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Recruiter dashboard header */}
      <header className="shadow bg-white py-4">
        <div className="w-full px-5 flex justify-between items-center">
          
          <img onClick={()=>navigate('/')}
            className="w-32 sm:w-40 cursor-pointer"
            src={assets.logo}
            alt="Company Logo"
          />

          {/* User Info pinned to extreme right */}
          <div className="flex items-center gap-4">
            <p className="text-md font-semibold text-gray-700">Welcome, Adarsh</p>

            {/* Company Icon + Dropdown */}
            <div className="relative group">
              <img
                src={assets.company_icon}
                alt="Company Icon"
                className="w-10 h-10 rounded-full border border-gray-200 cursor-pointer"
              />

              {/* Dropdown (only visible on hover of company icon) */}
              <ul className="absolute top-12 right-0 bg-white shadow-lg rounded-md py-2 w-28 hidden group-hover:block">
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-700">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

     <div className="flex items-start">
      <div className="inline-block min-h-screen border-2">
        <ul className="flex flex-col items-start pt-4 text-gray-800">
          <NavLink className={({isActive})=>  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashbord/add-job'}>
          <img src={assets.add_icon} alt="" />
          <p>Add Job</p>
          </NavLink>
            <NavLink className={({isActive})=>  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashbord/manage-job'}>
          <img src={assets.home_icon} alt="" />
          <p> Manage Jobs</p>
          </NavLink>
            <NavLink className={({isActive})=>  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashbord/view-application'}>
          <img src={assets.person_tick_icon} alt="" />
          <p>View Application</p>
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet/>
      </div>

     </div>
    </div>
  );
};

export default Dashbord;
