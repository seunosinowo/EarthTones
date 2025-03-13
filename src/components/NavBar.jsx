import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-green-950 fixed w-full top-0 left-0 z-50'>
      <div className='container mx-auto flex items-center justify-between h-16 sm:h-20 px-4'>
        <div className='text-white font-bold sm:text-2xl md:text-3xl lg:text-4xl'>
          EarthTones
        </div>
        <button className='text-white lg:hidden' onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className='hidden lg:flex lg:gap-8'>
          <li><a href='#' className='nav-link text-white'>Home</a></li>
          <li><a href='#' className='nav-link text-white'>About</a></li>
          <li><a href='#' className='nav-link text-white'>Popular</a></li>
          <li><a href='#' className='nav-link text-white'>Review</a></li>
        </ul>
      </div>

      {/* <div className='absolute top-0 left-0 min-h-[80vh] w-full flex items-center justify-center duration-300'>
        <div className='absolute bottom-0 right-10 opacity-80'>
          <img src={upIcon} alt='leaf_image' className='w-36' />
        </div>
        <div className='absolute top-0 left-5 rotate-90 opacity-80'>
          <img src={downIcon} alt='leaf_image' className='w-36' />
        </div> */}


      {/* </div> */}

      {isOpen && (
        <div className='fixed left-0 top-16 w-full bg-green-200 p-12 flex flex-col justify-center items-center lg:hidden'>
          <ul className='space-y-6'>
            <li><a href='#' className='nav-link text-green-950'>Home</a></li>
            <li><a href='#' className='nav-link text-green-950'>About</a></li>
            <li><a href='#' className='nav-link text-green-950'>Popular</a></li>
            <li><a href='#' className='nav-link text-green-950'>Review</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
