import React from 'react'
import Silver from '../assets/Silver.png';

const Popular = () => {
  return (
    <div className='bg-green-900'>
      <div className='flex flex-col items-center gap-3 text-center mb-12 md:mb-28'>
        <h2 className='title'>Your Choice Plant</h2>
        <p className='max-w-2xl'>Follow instructions for more</p>
      </div>

      <div>
            {/* Card 1 */}
            <div>
                <img src={Silver} alt="popular_image" />
                <p>Eathtone</p>
                <h3>Boston</h3>
            </div>

      </div>

    </div>
  )
}

export default Popular
