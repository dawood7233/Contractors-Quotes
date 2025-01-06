import React from "react";

const OurWork = () => {
  const projects = [
    {
      title: "Solar Panel Installation",
      description:
        "High-quality solar panel installation for residential and commercial properties.",
      image: "/Solar work.jpg",
    },
    {
      title: "Roofing",
      description:
        "Durable and weather-resistant roofing solutions tailored to your needs.",
      image: "/roofing.jpg",
    },
    {
      title: "Window Replacement",
      description:
        "Energy-efficient window replacements to enhance your home's comfort.",
      image: "/Window Work.jpg",
    },
    {
      title: "Exterior Painting",
      description:
        "Professional exterior painting services to make your property stand out.",
      image: "/painter.jpg",
    },
  ];

  return (
    <div className="bg-base-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm text-center px-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
