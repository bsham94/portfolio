import React from 'react';
import { Link } from 'react-scroll';
// import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ben Shamas
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Currently obssesed with building and designing responsive web applications with great user experiences.
        </p>
        <div>
            <Link to='work' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work
              </button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;