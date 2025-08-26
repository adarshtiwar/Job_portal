// import React from 'react';
// import { assets } from '../assets/assets';
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { Link, useNavigate } from 'react-router-dom'

// const Hero = () => {
//     const {setSearchFilter, setIsSearch} = useContext(AppContext)
//     const titleRef = React.useRef(null)
//     const locationRef = React.useRef(null)
//     const handleSearch = () => {
//         setSearchFilter({
//             title: titleRef.current.value,
//             location: locationRef.current.value
//         })
//         setIsSearch(true)
        
        
//     }
// const navigate =useNavigate()
//   return ( <div>
//     <section className="mt-1.5 bg-gradient-to-r from-purple-800 to-purple-950 h-90 flex items-center justify-center ml-10 mr-10 rounded-4xl shadow-lg relative overflow-hidden">
//       <div className="text-center px-4 h-1/2 flex flex-col justify-center">
//         <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
//           Over 10,000+ jobs to apply
//         </h1>
//         <p className="text-purple-200 text-sm md:text-base mb-8">
//           Your Next Big Career Move Starts Right Here – Explore The Best Job Opportunities
//           <br />
//           And Take The First Step Toward Your Future!
//         </p>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
//           <div className="flex items-center bg-white rounded-md px-4 py-2 w-72">
//            <img src={assets.search_icon} alt="" />
//             <input
//               type="text"
//               placeholder="Search for jobs"
//               className="ml-2 w-full focus:outline-none"
//             ref={titleRef}/>
//           </div>
// <button onClick={()=>navigate('/dashbord')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">Explore All Jobs

// </button>
       
//           <div className="flex items-center bg-white rounded-md px-4 py-2 w-72">
//            <img src={assets.location_icon} alt="" />
//             <input
//               type="text"
//               placeholder="Location"
//               className="ml-2 w-full focus:outline-none"
//              ref={locationRef}/>
//           </div>

          
//           <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//     <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
//     <p className='text-xl font-semibold text-gray-800'>Trusted by</p>
//     <div className='flex space-x-8'>
//         <img src={assets.microsoft_logo} alt="Microsoft" className='w-24 hover:scale-105 transition-all duration-300' />
//         <img src={assets.accenture_logo} alt="Accenture" className='w-24 hover:scale-105 transition-all duration-300' />
//         <img src={assets.walmart_logo} alt="Walmart" className='w-24 hover:scale-105 transition-all duration-300' />
//         <img src={assets.adobe_logo} alt="Adobe" className='w-24 hover:scale-105 transition-all duration-300' />
//         <img src={assets.amazon_logo} alt="Amazon" className='w-24 hover:scale-105 transition-all duration-300' />
//     </div>
// </div>

//     </div>
//   );
// };

// export default Hero;

import React, { useContext, useRef, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// Inline custom styles for animation
const CustomStyles = () => (
  <style>{`
    @keyframes heroFadeIn {
      from {opacity:0; transform:translateY(40px);}
      to {opacity:1; transform:translateY(0);}
    }
    .animate-heroFadeIn {
      animation: heroFadeIn 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
    }
    @keyframes slideInUp {
      from { opacity:0; transform:translateY(30px);}
      to { opacity:1; transform:translateY(0);}
    }
    .animate-slideInUp {
      animation: slideInUp 1s cubic-bezier(0.4,0,0.2,1) forwards;
    }
    @keyframes iconBounce {
      0% { transform: scale(1);}
      40% { transform: scale(1.12);}
      100% { transform: scale(1);}
    }
    .hover\\:animate-iconBounce:hover {
      animation: iconBounce 0.5s;
    }
  `}</style>
);

// Counter Component for Animated Number
const AnimatedCounter = ({ end = 10000, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const start = 0;
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return (
    <span>{count.toLocaleString()}+</span>
  );
};

const Hero = () => {
  const { setSearchFilter, setIsSearch } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearch(true);
  };

  return (
    <div>
      <CustomStyles />
      <section className="mt-4 bg-gradient-to-r from-purple-800 to-purple-950 sm:h-80 flex items-center justify-center mx-2 sm:mx-10 rounded-3xl shadow-xl relative overflow-hidden animate-heroFadeIn">
        <div className="w-full text-center px-2 sm:px-8 py-6 flex flex-col justify-center items-center animate-slideInUp">
          {/* Animated headline: number counts up */}
          <h1 className="text-white text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 flex flex-row items-center justify-center">
            <AnimatedCounter end={10000} duration={1200} /> jobs to apply
          </h1>
          <p className="text-purple-200 text-xs sm:text-base mb-6">
            Your Next Big Career Move Starts Right Here – Explore The Best Job Opportunities
            <br className="hidden sm:block" />
            And Take The First Step Toward Your Future!
          </p>
          {/* Responsive search bar group */}
          <div className="w-full max-w-3xl flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mx-auto">
            {/* Job Title Input */}
            <div className="flex items-center bg-white rounded-md px-3 py-2 flex-1 drop-shadow-md">
              <img src={assets.search_icon} alt="" className="w-5" />
              <input
                type="text"
                placeholder="Search for jobs"
                className="ml-2 w-full focus:outline-none text-sm"
                ref={titleRef}
              />
            </div>
            {/* Location Input */}
            <div className="flex items-center bg-white rounded-md px-3 py-2 flex-1 drop-shadow-md">
              <img src={assets.location_icon} alt="" className="w-5" />
              <input
                type="text"
                placeholder="Location"
                className="ml-2 w-full focus:outline-none text-sm"
                ref={locationRef}
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition-transform duration-200 hover:scale-105"
          >
            Search
          </button>
        </div>
      </section>
      {/* Trusted by section */}
      <div className="flex flex-col items-center justify-center mt-8 sm:mt-10 space-y-4 animate-heroFadeIn">
        <p className="text-md sm:text-xl font-semibold text-gray-700">
          Trusted by
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 sm:w-24 hover:animate-iconBounce transition-all duration-300" />
          <img src={assets.accenture_logo} alt="Accenture" className="w-20 sm:w-24 hover:animate-iconBounce transition-all duration-300" />
          <img src={assets.walmart_logo} alt="Walmart" className="w-20 sm:w-24 hover:animate-iconBounce transition-all duration-300" />
          <img src={assets.adobe_logo} alt="Adobe" className="w-20 sm:w-24 hover:animate-iconBounce transition-all duration-300" />
          <img src={assets.amazon_logo} alt="Amazon" className="w-20 sm:w-24 hover:animate-iconBounce transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

