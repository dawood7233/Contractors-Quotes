import React from "react";
import { useNavigate } from "react-router-dom";

const Services = ({ visibleServices }) => {
  const navigate = useNavigate();

  const allServices = [
    {
      id: 1,
      title: "Solar",
      description: "Detailed building plans.",
      icon: "🖊️",
    },
    {
      id: 2,
      title: "Painting Constructions",
      description: "Painting services.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Repairing Constructions",
      description: "Construction repairs.",
      icon: "🔧",
    },
    {
      id: 4,
      title: "Plumbing Services",
      description: "Fixing water systems.",
      icon: "🚿",
    },
    {
      id: 5,
      title: "Electrical Installations",
      description: "Electrical setup.",
      icon: "💡",
    },
    {
      id: 6,
      title: "Roofing Services",
      description: "Roof repair and installation.",
      icon: "🏠",
    },
    {
      id: 7,
      title: "Interior Design",
      description: "Custom interiors.",
      icon: "🛋️",
    },
    {
      id: 8,
      title: "Landscaping",
      description: "Outdoor designs.",
      icon: "🌳",
    },
    {
      id: 9,
      title: "HVAC Installations",
      description: "Heating and cooling systems.",
      icon: "❄️",
    },
    {
      id: 10,
      title: "Flooring Solutions",
      description: "Quality flooring.",
      icon: "🪵",
    },
    {
      id: 11,
      title: "Custom Furniture",
      description: "Tailored furniture.",
      icon: "🪑",
    },
    {
      id: 12,
      title: "General Contracting",
      description: "Overall project management.",
      icon: "🔨",
    },
    {
      id: 13,
      title: "Renovations",
      description: "Complete renovations.",
      icon: "🏗️",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h1 className="font-bold text-4xl text-center pt-10 pb-10">
        Our Offered Services
      </h1>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, visibleServices).map((service) => (
            <div
              key={service.id}
              className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                className="btn btn-primary"
                onClick={() =>
                  navigate(`/services/${service.id}`, {
                    state: { title: service.title },
                  })
                }
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        {visibleServices < allServices.length && (
          <div className="text-center mt-8">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/services")}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
