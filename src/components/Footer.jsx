import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white text-left p-5 grid grid-cols-1 md:grid-cols-3 gap-5 pt-11">

      {/* About Us */}
      <div className="flex flex-col items-left">
        <h3 className="text-lg font-semibold text-[#27ae60] uppercase mb-3">About Us</h3>
        <p className="text-sm text-left">
          EarthTones inspires a deeper connection with nature, promoting well-being and sustainability. We provide eco-friendly solutions and resources for a greener tomorrow. Join our community to cultivate a healthier relationship between humans and the environment.
        </p>
      </div>

      {/* Menu Links*/}
      <div className="flex flex-col items-left">
        <h3 className="text-lg font-semibold text-[#27ae60] uppercase mb-3">Menu</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#home" className="text-white hover:text-[#27ae60] transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-[#27ae60] transition-colors duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-[#27ae60] transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-[#27ae60] transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col items-start space-y-3">
        <h3 className="text-lg font-semibold text-[#27ae60] uppercase mb-3">Contact Us</h3>
        <p className="text-sm">Phone: +234 8110541803</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-facebook-line text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-twitter-x-line text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-instagram-line text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
