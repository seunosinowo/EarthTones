import React from 'react'

const NavBar = () => {
  return (
    <div id='navbar' className='bg-green-950 fixed w-full top-0 left-0 z-50'>
        <nav className='container items-center justify-between h-16 sm:h-20'>
            <div className='sm:text-2xl md:text-3xl lg:text-4xl'>EarthTones</div>

            <div className='absolute top-0 left-0 min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm items-center justify-center duration-300'>
                <ul>
                    <li><a href='#' className='/nav'>Home</a></li>
                    <li><a href='#' className='/nav'>About</a></li>
                    <li><a href='#' className='/nav'>Popular</a></li>
                    <li><a href='#' className='/nav'>Review</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar