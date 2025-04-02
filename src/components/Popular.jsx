import React from 'react'
import Silver from '../assets/Silver.png';
import whiteB from '../assets/whiteB.png';
import Gold from '../assets/Gold.png';
import cup from '../assets/cup.png';

const Popular = () => {
  return (
    <div className='bg-green-900' id='popular'>
      <div className='flex flex-col items-center gap-3 text-center mb-48 md:mb-48'>
        <h2 className='title mt-24'>Explore the Harmony of Nature and Lifestyle</h2>
        <p className='max-w-2xl'>Find your ideal plant match based on your lifestyle and preferences</p>
      </div>

      <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-24'>
            {/* Card 1 */} 
            <div className='popular_card bg-green-950 p-10 pt-24 rounded-lg relative'>
                <img src={Silver} alt="popular_image" 
                className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                <p className='italic mb-5'>A beautiful, earthy planter that adds warmth to any space.</p>
                <h3>Terra Cotta Plant</h3>
            

            <div className='text-yellow-500 py-3 text-xs'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            

            <div className='flex items-center justify-between'>
              <p className='text-xl'></p>

              <button className='bg-yellow-500 px-2 py-1'>
                <i class="ri-heart-2-fill"></i>
              </button>
            </div>

            </div>

            {/* Card 2 */} 
            <div className='popular_card bg-green-950 p-10 pt-24 rounded-lg relative'>
                <img src={whiteB} alt="popular_image" 
                className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                <p className='italic mb-5'>A low-maintenance succulent that captures the freshness of the ocean.</p>
                <h3>Ocean Breeze</h3>
            

            <div className='text-yellow-500 py-3 text-xs'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            

            <div className='flex items-center justify-between'>
              <p className='text-xl'></p>

              <button className='bg-yellow-500 px-2 py-1'>
                <i class="ri-heart-2-fill"></i>
              </button>
            </div>

            </div>

            {/* Card 3 */} 
            <div className='popular_card bg-green-950 p-10 pt-24 rounded-lg relative'>
                <img src={Gold} alt="popular_image" 
                className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                <p className='italic mb-5'>A lush, green plant that brings the serenity of the forest floor to your home.</p>
                <h3>Forest Floor</h3>
            

            <div className='text-yellow-500 py-3 text-xs'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            

            <div className='flex items-center justify-between'>
              <p className='text-xl'></p>

              <button className='bg-yellow-500 px-2 py-1'>
                <i class="ri-heart-2-fill"></i>
              </button>
            </div>

            </div>

            {/* Card 4 */} 
            <div className='popular_card bg-green-950 p-10 pt-24 rounded-lg relative'>
                <img src={cup} alt="popular_image" 
                className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                <p className='italic mb-5'>A vibrant, flowering plant that captures the charm and beauty of a mountain meadow.</p>
                <h3>Mountain Meadow</h3>
            

            <div className='text-yellow-500 py-3 text-xs'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            

            <div className='flex items-center justify-between'>
              <p className='text-xl'></p>

              <button className='bg-yellow-500 px-2 py-1'>
                <i class="ri-heart-2-fill"></i>
              </button>
            </div>

            </div>
      </div>

    </div>
  )
}

export default Popular
