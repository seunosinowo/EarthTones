import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const FootLinks = [
    { name: 'Home', href: '#home'},
    { name: 'Forecast', href: '#forecast'},
    { name: 'Services', href: '#services'},
    { name: 'Popular', href: '#popular'},
    { name: 'Newsletter', href: '#news'},
  ]

  return (
    <footer className="bg-green-900 text-white text-left p-5 grid grid-cols-1 md:grid-cols-3 gap-5 pt-11">

      {/* About Us */}
      <div className="flex flex-col items-left">
        <h3 className="text-lg font-semibold text-yellow-500 uppercase mb-3">About Us</h3>
        <p className="text-sm text-left">
          EarthTones inspires a deeper connection with nature, promoting well-being and sustainability. We provide eco-friendly solutions and resources for a greener tomorrow. Join our community to cultivate a healthier relationship between humans and the environment.
        </p>
      </div>

      {/* Menu Links*/}
      <div className="flex flex-col items-left">
        <h3 className="text-lg font-semibold text-yellow-500 uppercase mb-3">Menu</h3>
        <ul className="grid grid-cols-2 gap-4">
          {FootLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-white hover:text-yellow-500 transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col items-start space-y-3">
        <h3 className="text-lg font-semibold text-yellow-500 uppercase mb-3">Contact Us</h3>

        <div className="flex space-x-4 mt-2 justify-start items-start">
          
          <a href="#" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-twitter-x-line text-2xl"></i>
          </a>

          <a href="#" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-facebook-line text-2xl"></i>
          </a>

          <a href="#" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-instagram-line text-2xl"></i>
          </a>

          <a href="#" className="text-slate-100 hover:text-yellow-500 duration-300 cursor-pointer">
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
