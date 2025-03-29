import React from 'react'

const Services = () => {
  return (
    <div className='bg-white text-green-900 py-20 w-full'>
      <div className='container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

      {/* Card 1 */}
      <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
        
        <div className='flex items-start flex-col'>

        <div className='flex items-center gap-3 mb-5'>
            <i className='ri-sun-line text-3xl md:text-4xl lg:text-5xl'></i>
            <p className='md:text-lg font-bold'>
                Nature <br />
                Care
            </p>
        </div>

            <div className='flex items-center w-full flex-col'>
                <p className='md:text-lg flex flex-row items-center w-full font-exo-2'>
                    Start your nature journey today and discover a world of serenity 
                    and wonder. Begin your path to a healthier, happier you, surrounded 
                    by the beauty of nature
                </p>
            </div>

        </div>
      </div>

      {/* Card 2 */}
      <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
        
        <div className='flex items-start flex-col'>

        <div className='flex items-center gap-3 mb-5'>
            <i className='ri-earth-line md:text-4xl lg:text-5xl'></i>
            <p className='md:text-lg font-bold'>
                Sustainable <br />
                Future
            </p>
        </div>

            <div className='flex items-center w-full flex-col'>
                <p className='md:text-lg flex flex-row items-center w-full font-exo-2'>
                Join the movement towards a greener tomorrow and be part of a community that's passionate about making a difference. Together, let's create a more sustainable future for all
                </p>
            </div>

        </div>
      </div>

      {/* Card 3 */}
      <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
        
        <div className='flex items-start flex-col'>

        <div className='flex items-center gap-3 mb-5'>
            <i className='ri-heart-line text-3xl md:text-4xl lg:text-5xl'></i>
            <p className='md:text-lg font-bold'>
                Love <br />
                Nature
            </p>
        </div>

            <div className='flex items-center w-full flex-col'>
                <p className='md:text-lg flex flex-row items-center w-full font-exo-2'>
                Share your love for nature and inspire change in those around you. By spreading awareness and appreciation for the natural world, we can work together to protect it for generations to come
                </p>
            </div>

        </div>
      </div>

      {/* Card 4 */}
      <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
        
        <div className='flex items-start flex-col'>

        <div className='flex items-center gap-3 mb-5'>
            <i className='ri-truck-line text-3xl md:text-4xl lg:text-5xl'></i>
            <p className='md:text-lg font-bold'>
                Positive <br />
                Action
            </p>
        </div>

            <div className='flex items-center w-full flex-col'>
                <p className='md:text-lg flex flex-row items-center w-full font-exo-2'>
                Take the first step towards a more sustainable future and make a positive impact on the environment. Every small action counts, and together we can create a better world for all
                </p>
            </div>

        </div>
      </div>

      {/* Card 5 */}
      <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
        
        <div className='flex items-start flex-col'>

        <div className='flex items-center gap-3 mb-5'>
            <i className='ri-flower-line text-3xl md:text-4xl lg:text-5xl'></i>
            <p className='md:text-lg font-bold'>
                Bloom <br />
                With Us
            </p>
        </div>

            <div className='flex items-center w-full flex-col'>
                <p className='md:text-lg flex flex-row items-center w-full font-exo-2'>
                Get ready to bloom with EarthTones and unlock a world of natural beauty and wonder. Join our community and discover the latest tips, tricks, and inspiration for living a more sustainable lifestyle
                </p>
            </div>

        </div>
      </div>

      </div>
    </div>
  )
}

export default Services
