import React from "react";
import bgImage from "../assets/images/home.svg"; 

export default function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center flex flex-col md:flex-row justify-between items-center px-8 py-20 relative"
      id="home"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">Consultation,<br />Design & Marketing</h1>
      </div>
      <div className="md:w-1/3 w-full mt-10 md:mt-0 bg-slate-700 p-6 rounded shadow-xl z-10">
        <h2 className="text-lg text-slate-50 font-semibold mb-4">Get a Free Consultation</h2>
        <form className="space-y-3 ">
          <input className="w-full border border-gray-500  text-slate-50 p-2 rounded" placeholder="Full Name" />
          <input className="w-full border border-gray-500  text-slate-50 p-2 rounded" placeholder="Email Address" />
          <input className="w-full border border-gray-500   text-slate-50 p-2 rounded" placeholder="Phone Number" />
          <textarea className="w-full border border-gray-500  text-slate-50 p-2 rounded" rows="3" placeholder="Your Message"></textarea>
          <button className="bg-orange-500 text-white px-4 py-2 w-full rounded hover:bg-orange-600">Send Request</button>
        </form>
      </div>
    </section>
  );
}