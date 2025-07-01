
import React from "react";
import project1 from "../assets/images/pexels-brett-sayles-2881232-1.svg";
import project2 from "../assets/images/pexels-brett-sayles-2881232-3.svg";
import project3 from "../assets/images/pexels-brett-sayles-2881232-3.svg";
import project4 from "../assets/images/pexels-brett-sayles-2881232.svg";
import project5 from "../assets/images/pexels-fauxels-3182834.svg";

const projects = [
  {
    title: "Modern Staging",
    image: project1,
  },
  {
    title: "Classic Interior",
    image: project2,
  },
  {
    title: "Minimal Living",
    image: project3,
  },
  {
    title: "Luxury Suite",
    image: project4,
  },
  {
    title: "Open Concept",
    image: project5,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Projects</h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Browse through some of our most loved work in consultation, staging, and real estate marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="text-md font-semibold text-gray-700 text-center">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
