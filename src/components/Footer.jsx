import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white text-left p-5 grid grid-cols-1 md:grid-cols-3 gap-5 pt-11">

      {/* About Us Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold">About Us</h3>
        <p className="text-sm text-justify">
          EarthTones inspires a deeper connection with nature, promoting well-being and sustainability. We provide eco-friendly solutions and resources for a greener tomorrow. Join our community to cultivate a healthier relationship between humans and the environment.
        </p>
      </div>

      {/* Menu Links Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold">Menu</h3>
        <ul className="list-none p-0">
          <li className="mb-2">
            <a href="#home" className="text-[#27ae60] hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-[#27ae60] hover:text-white transition-colors duration-300">
              Services
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p className="text-sm">Phone: +234 8110541803</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-900 hover:text-white transition-colors duration-300">
            <i className="ri-facebook-fill text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-900 hover:text-white transition-colors duration-300">
            <i className="ri-twitter-fill text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-900 hover:text-white transition-colors duration-300">
            <i className="ri-instagram-fill text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full col-span-3 mt-5 border-t border-gray-700 pt-3 bg-green-950 items-center justify-center">
        <p className="text-sm text-center items-center justify-center flex w-full">
          &copy; {currentYear} EarthTones. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
