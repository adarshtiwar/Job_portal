import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const {setShowReacuter}=useContext(AppContext)

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to='/'>
      <div className="w-36">
        <img src={assets.logo} alt="Logo" className="w-full" />
      </div>
      </Link>
      

      {/* Middle Section: Desktop */}
      <div className="hidden md:flex items-center gap-6">
        {user ? (
          <>
            <Link to="/Applications" className="text-blue-600 hover:underline">
              Applied Jobs
            </Link>
            <p className="text-gray-600">|</p>
            <p className="text-gray-700 font-semibold">
              Hi, {user.firstName} {user.lastName}
            </p>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <button onClick={e=>setShowReacuter(true)} className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition duration-300"
            >
              Login
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-8 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-6">
          {user ? (
            <>
              <Link to="/Applications" className="text-blue-600 hover:underline">
                Applied Jobs
              </Link>
              <p className="text-gray-700 font-semibold">
                Hi, {user.firstName} {user.lastName}
              </p>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <button onClick={e=>setShowReacuter(true)} className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Recruiter Login
              </button>
              <button
                onClick={() => openSignIn()}
                className="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition duration-300"
              >
                Login
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
