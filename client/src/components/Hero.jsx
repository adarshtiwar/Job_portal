import React from 'react';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Hero = () => {
    const {setSearchFilter, setIsSearch} = useContext(AppContext)
    const titleRef = React.useRef(null)
    const locationRef = React.useRef(null)
    const handleSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearch(true)
        
        
    }

  return ( <div>
    <section className="mt-1.5 bg-gradient-to-r from-purple-800 to-purple-950 h-90 flex items-center justify-center ml-10 mr-10 rounded-4xl shadow-lg relative overflow-hidden">
      <div className="text-center px-4 h-1/2 flex flex-col justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          Over 10,000+ jobs to apply
        </h1>
        <p className="text-purple-200 text-sm md:text-base mb-8">
          Your Next Big Career Move Starts Right Here – Explore The Best Job Opportunities
          <br />
          And Take The First Step Toward Your Future!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          <div className="flex items-center bg-white rounded-md px-4 py-2 w-72">
           <img src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="ml-2 w-full focus:outline-none"
            ref={titleRef}/>
          </div>

       
          <div className="flex items-center bg-white rounded-md px-4 py-2 w-72">
           <img src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="ml-2 w-full focus:outline-none"
             ref={locationRef}/>
          </div>

          
          <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>
    <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
    <p className='text-xl font-semibold text-gray-800'>Trusted by</p>
    <div className='flex space-x-8'>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-24 hover:scale-105 transition-all duration-300' />
        <img src={assets.accenture_logo} alt="Accenture" className='w-24 hover:scale-105 transition-all duration-300' />
        <img src={assets.walmart_logo} alt="Walmart" className='w-24 hover:scale-105 transition-all duration-300' />
        <img src={assets.adobe_logo} alt="Adobe" className='w-24 hover:scale-105 transition-all duration-300' />
        <img src={assets.amazon_logo} alt="Amazon" className='w-24 hover:scale-105 transition-all duration-300' />
    </div>
</div>

    </div>
  );
};

export default Hero;
