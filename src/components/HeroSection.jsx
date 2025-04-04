import React from 'react';
import cupLeaf from '../assets/cupLeaf.png';

const HeroSection = () => {
  return (
    <div className='py-20 md:py-24 container mx-auto' id='home'>
        {/* blob 1 */}
        <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        </div>

        {/* blob 2 */}
        <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0'>
        </div>

      <div className='flex flex-col items-center gap-5 lg:flex-row'>

        <div className='lg:w-1/2 space-y-5'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl mb-8 sm:w-full'>
            <span className='text-yellow-500'>Nature's positivity,</span> delivered {" "}
            <span className='text-yellow-500'>Connecting You {" "}</span> daily with {" "}
            <span className='text-yellow-500'>Nature's {" "}</span>Beauty
          </h1>

          <p className='text-slate-200 text-sm md:text-base lg:text-lg'>
            Nature has the power to transform our lives. By spending time outdoors 
            and connecting with the natural world, we can reduce stress, boost our 
            mood, and improve our overall well-being. Explore EarthTones to discover 
            the beauty and benefits of nature, and get inspired to make the most of
            every day, no matter the weather.
          </p>

          <div className='mt-7 flex flex-col gap-2 sm:flex-row'>
            <button className='btn'>
              <span>Get Inspired</span>{" "}
              <i className='ri-leaf-line'></i>
            </button>

            <button className='btn btn_outline hover:bg-yellow-500'>
              <span>Stay Updated</span>{" "}
              <i className='ri-leaf-line'></i>
            </button>
          </div>

          <div className='mt-4 space-x-4'>
            <a href="#">
              <i className="ri-twitter-x-line text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </a>

            <a href="#">
              <i className="ri-facebook-line text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </a>

            <a href="#">
              <i className="ri-instagram-line text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </a>

            <a href="#">
              <i className="ri-linkedin-box-fill text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </a>
          </div>
        </div>

        <div className='mt-5 w-full lg:w-1/2 relative'>
          <img src={cupLeaf} alt="" className='w-full h-auto' />

          {/* leaf area */}
          <div className='absolute top-10 right-0 opacity-30'>
            <i className='ri-leaf-line text-6xl text-yellow-500'></i>
          </div>

          {/* flower */}
          <div className='absolute bottom-9 left-0 opacity-30'>
            <i className='ri-flower-line text-6xl text-yellow-500'></i>
          </div>

          {/* Plant */}
          <div className='absolute top-10 left-5 opacity-30'>
            <i className='ri-plant-line text-6xl text-yellow-500'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;