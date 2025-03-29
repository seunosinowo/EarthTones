import React from 'react'

const Services = () => {
  return (
    <div className='bg-white text-green-900 py-20 w-full'>
      <div className='container w-full'>

      {/* Card 1 */}
      <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300'>
        
        <div className='flex items-start flex-col'>

        <div className='flex items-center gap-3 '>
            <i className='ri-truck-line text-3xl md:text-4xl lg:text-5xl'></i>
            <p className='md:text-lg font-bold'>
                Fast <br />
                Delivery
            </p>
        </div>

            <div className='flex items-center w-full flex-col'>
                <p className='md:text-lg flex flex-row items-center w-full font-lobster'>
                    Lorem Lorem Lorem Lorem Lorem Lorem 
                    Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
            </div>

        </div>
      </div>

      </div>
    </div>
  )
}

export default Services
