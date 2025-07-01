import React from "react";
import logo from "../assets/images/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-md bg-white z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8" />
        <span className="text-xl font-bold text-gray-800"></span>
      </div>
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 text-sm">Admin</button>
    </nav>
  );
}
