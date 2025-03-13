import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import upIcon from '../assets/greenleaf.png';
import downIcon from '../assets/widerleaf.png';

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
        <button
          className='text-white sm:hidden'
          onClick={toggleMenu}
        >
          
        </button>
        <ul className={`absolute top-16 left-0 w-full bg-green-950 flex flex-col items-center gap-6 py-4 transition-transform duration-300 sm:static sm:flex-row sm:w-auto sm:gap-8 sm:py-0 ${isOpen ? 'translate-y-0' : '-translate-y-full sm:translate-y-0'}`}>
          <li><a href='#' className='nav-link'>Home</a></li>
          <li><a href='#' className='nav-link'>About</a></li>
          <li><a href='#' className='nav-link'>Popular</a></li>
          <li><a href='#' className='nav-link'>Review</a></li>
        </ul>
      </div>

        <div className="lg:hidden md: flex flex-col justify-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X/> : <Menu/>}
          </button>
        </div> 
              
      <div className='absolute top-0 left-0 min-h-[80vh] w-full flex items-center justify-center duration-300'>
        <div className='absolute bottom-0 right-10 opacity-80'>
          <img src={upIcon} alt='leaf_image' className='w-36' />
        </div>
        <div className='absolute top-0 left-5 rotate-90 opacity-80'>
          <img src={downIcon} alt='leaf_image' className='w-36' />
        </div>


      </div>

      {isOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li><a href='#' className='nav-link'>Home</a></li>
              <li><a href='#' className='nav-link'>About</a></li>
              <li><a href='#' className='nav-link'>Popular</a></li>
              <li><a href='#' className='nav-link'>Review</a></li>
            </ul>
            <div className="flex space-x-6">
              
            </div>

          </div>
        )}
    </nav>
  );
};

export default NavBar;