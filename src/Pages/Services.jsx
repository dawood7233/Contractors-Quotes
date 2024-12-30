import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Building Drawings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🖊️", // Replace with your icon or image path
    },
    {
      id: 2,
      title: "Painting Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🎨", // Replace with your icon or image path
    },
    {
      id: 3,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 4,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 5,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 6,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 7,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 8,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 9,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 10,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 11,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 12,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
    {
      id: 13,
      title: "Repairing Constructions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔧", // Replace with your icon or image path
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-white shadow-md hover:shadow-lg rounded-lg p-6 text-center"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services
