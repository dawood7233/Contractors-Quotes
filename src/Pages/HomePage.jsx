import React, { useState } from "react";
import OurWork from "../Components/OurWork";
import Services from "./Services";

const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const projectTypes = [
    "Solar",
    "Windows",
    "Roofing",
    "HVAC",
    "Painting",
    "Plumbing",
    "Gutters",
    "Home Security",
    "Kitchen",
    "Siding",
    "Bathroom",
    "Fencing",
    "Flooring",
  ];

  const handleSelect = (type) => {
    setSelectedProject(type);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      {/* Background video */}
      <video
        className="w-full h-auto"
        src="/workers.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Quote Input Section */}
      <div className="absolute top-80 left-64 w-96 bg-[#1f2020] shadow-xl z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div className="card-body space-y-4">
          {/* Dropdown Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Choose Project Type"
              value={selectedProject}
              readOnly
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="input input-bordered w-full cursor-pointer"
            />
            {isDropdownOpen && (
              <ul className="absolute top-12 left-0 w-full bg-[#2c2c2c] rounded-md shadow-lg z-20 max-h-64 overflow-y-auto">
                {projectTypes.map((type, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-[#383838] hover:text-[#ffb000] cursor-pointer text-white"
                    onClick={() => handleSelect(type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Zip Code Input */}
          <input
            type="text"
            placeholder="Zip Code"
            className="input input-bordered w-full"
          />

          {/* Button */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Quote</button>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="pt-0">
        <Services visibleServices={6} />
      </div>

      {/* Our Projects Section */}
      <OurWork />

      {/* Get Started Section */}
      <div className="bg-gradient-to-r from-amber-500 to-[#1f2020] text-black py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6">
            Let us connect you with the right professionals to make your project
            a success.
          </p>
          <button className="btn px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
