import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import upIcon from '../assets/greenleaf.png';
// import downIcon from '../assets/widerleaf.png';
import Logo from '../assets/Logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#'},
    { name: 'About', href: '#'},
    { name: 'Popular', href: '#'},
    { name: 'Review', href: '#'}
  ]

  return (
    <nav className='bg-green-950 fixed w-full top-0 left-0 z-50 text-white tracking-tight'>
      <div className='container mx-auto flex items-center justify-between h-16 sm:h-20 px-4'>

        <div className='text-white font-bold sm:text-2xl md:text-3xl lg:text-4xl flex justify-center items-center'>
          <img src={Logo} alt="Logo" className='w-16' />
          <h1>EarthTones</h1>
        </div>

        <button className='text-white lg:hidden' onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* navLinks
        nav-link text-white hover:text-yellow-500 */}

        <ul className='hidden lg:flex lg:gap-8'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} 
              className='nav-link text-white hover:text-yellow-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className='top-0 left-0 min-h-[80vh] w-full flex items-center justify-center duration-300'>
        <div className='absolute bottom-0 right-10 opacity-80'>
          <img src={upIcon} alt='leaf_image' className='w-36' />
        </div>
        <div className='absolute top-0 left-5 mt-20 rotate-90 opacity-80'>
          <img src={downIcon} alt='leaf_image' className='w-36' />
        </div>
       </div> */}

      {isOpen && (
        <div className='fixed left-0 top-16 w-full bg-slate-200 p-12 flex flex-col justify-center items-center lg:hidden'>
          <ul className='space-y-6 text-green-950'>
            {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} 
              className='nav-link hover:underline'>{link.name}</a>
            </li>
          ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
