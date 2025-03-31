import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative'>
        <div className='container text-white absolute top-0 right-0 left-0 -translate-y-1/2'>
        <div className='bg-green-950 px-10 pt-5 pb-10 space-y-5 mt-12 rounded-md'>
            <h3><span className='text-yellow-500'>Subscribe</span> to our newsletter
            </h3>

            <div className='flex flex-col md:flex-row gap-3 md:gap-1'>
                <input type = "email" placeholder='Your Email address'
                className='w-full px-5 text-green-900 rounded-md outline-none'/>
                <button className='flex items-center justify-center bg-green-900 px-5 py-1 rounded-md hover:opacity-80 duration-300 gap-2'>
                    <span>Subscribe</span>
                    <i className='ri-send-plane-2-fill'></i>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter
