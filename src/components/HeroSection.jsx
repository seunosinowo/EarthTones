import React from 'react'

const HeroSection = () => {
  return (
    <div id='Herosection' className='py-20 md:py-24 container mx-auto ms-11'>
        <div>
            <div>
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl mb-8 w-full'>
                        <span className='text-yellow-500'>Nature's positivity,</span> delivered  {" "} 
                        <span className='text-yellow-500'>Connecting You</span> daily with {" "}
                        <span className='text-yellow-500'>Nature's</span>Beauty
                    </h1>

                    <p>
                        Nature has the power to transform our lives. By spending time outdoors 
                        and connecting with the natural world, we can reduce stress, boost our 
                        mood, and improve our overall well-being. Explore EarthTones to discover 
                        the beauty and benefits of nature, and get inspired to make the most of
                        every day, no matter the weather.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;