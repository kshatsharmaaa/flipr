// --- components/Testimonials.jsx ---
import React from "react";
import sharonImg from "../assets/images/Ellipse 28.svg";
import johnImg from "../assets/images/Ellipse 29.svg";
import lilyImg from "../assets/images/Ellipse 31.svg";
import priyaImg from "../assets/images/Ellipse 33.svg";
import carlosImg from "../assets/images/Ellipse 35.svg";
import shapeTopRight from "../assets/shapes/Ellipse 24-1.svg";
import shapeBottomLeft from "../assets/shapes/Ellipse 25-1.svg";

const testimonials = [
  {
    name: "Sharon Clark",
    role: "Home Seller",
    text: "They made the process stress-free and the marketing was top-notch.",
    image: sharonImg
  },
  {
    name: "John Lopez",
    role: "Seller",
    text: "I loved the design suggestions. My home sold in 3 days!",
    image: johnImg
  },
  {
    name: "Lily",
    role: "Seller",
    text: "Real Trust delivered more than expected! Highly recommended.",
    image: lilyImg
  },
  {
    name: "Priya Menon",
    role: "Property Owner",
    text: "Their strategies helped me sell faster and at a great price!",
    image: priyaImg
  },
  {
    name: "Carlos Rivera",
    role: "Client",
    text: "Top-notch service and excellent attention to detail.",
    image: carlosImg
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-8 py-20 bg-white text-gray-800 overflow-hidden"
    >
      <img
        src={shapeTopRight}
        alt="shape"
        className="absolute top-0 right-0 w-28 md:w-44 opacity-80"
      />
      <img
        src={shapeBottomLeft}
        alt="shape"
        className="absolute bottom-0 left-0 w-24 md:w-36 opacity-70"
      />
      <h2 className="text-3xl font-bold text-center mb-14">Happy Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 z-10 relative">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-100"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-300 shadow"
            />
            <p className="text-sm italic mb-4">“{t.text}”</p>
            <p className="font-semibold text-lg">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
