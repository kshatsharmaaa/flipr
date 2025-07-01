
import React from "react";
import footerBg from "../assets/images/Rectangle.svg"; // Your actual background image
import logo from "../assets/images/logo.svg";



export default function Footer() {
  return (
    <footer className="w-full text-white">
      {/* Banner CTA */}
      <div
        className="bg-cover bg-center px-8 py-24 text-center opacity"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 max-w-2xl mx-auto">
          Learn more about our listing process, as well as our additional staging and design work.
        </h2>
        <button className="bg-white text-gray-800 px-6 py-2 rounded font-medium hover:bg-gray-100">
          LEARN MORE
        </button>
      </div>

      {/* Main footer navigation */}
      <div className="bg-blue-600 px-6 py-6 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        <div className="text-sm text-gray-200 ">
          Subscribe us
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3 py-2 rounded text-gray-300 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100">
            Subscribe
          </button>
        </form>
        </div>
      </div>

      
      <div className="bg-gray-900 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400 order-2 md:order-1">© {new Date().getFullYear()} Real Trust</p>
        <div className="order-1 md:order-2 mb-4 md:mb-0">
          <img src={logo} alt="Real Trust Logo" className="h-6" />
        </div>
        <div className="flex gap-4 order-3">
          <img src="../assets/facebook-icon.svg" alt="fb" className="w-5 h-5" />
          <img src="../assets/twitter-icon.svg" alt="twitter" className="w-5 h-5" />
          <img src="../assets/instagram-icon.svg" alt="insta" className="w-5 h-5" />
          <img src="../assets/linkedin-icon.svg" alt="linkedin" className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}
