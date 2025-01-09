import React, { useState } from "react";
import Services from "./Services";
import { allServices } from "../Components/servicesData";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [zipCode, setZipCode] = useState(""); // State for Zip Code input
  const navigate = useNavigate();

  const projectTypes = allServices.map((service) => ({
    title: service.title,
    id: service.id, // Include ID for navigation
  }));

  // Handle selection from dropdown
  const handleSelect = (type) => {
    setSelectedProject(type);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Handle navigation on Get Quote button click
  const handleGetQuote = () => {
    const selectedService = projectTypes.find(
      (service) => service.title === selectedProject
    );
    if (selectedService) {
      navigate(`/services/${selectedService.id}`, {
        state: { title: selectedService.title, zipCode: zipCode || null },
      });
    } else {
      alert("Please select a valid project type.");
    }
  };

  return (
    <div className="relative">
      {/* Background video */}
      <video
        className="w-full h-auto pt-16 sm:pt-0" // Added padding-top for mobile view
        src="/workers.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Animated Text Overlay for Mobile View */}
      {/* <div className="inset-0 flex items-center justify-center sm:hidden z-20">
        <h1 className="text-black text-center text-2xl sm:text-4xl font-bold animate-bounce">
          Your one stop shop for your home services needs
        </h1>
      </div> */}

      {/* Quote Input Section */}
      <div className="absolute top-80 left-64 w-96 bg-[rgba(31,32,32,0.7)] hover:shadow-[2px_4px_6px_rgba(255,174,0,1)] z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl sm:block hidden">
        <div className="card-body space-y-4">
          {/* Dropdown Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Choose Project Type"
              value={selectedProject}
              readOnly
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="input input-bordered w-full cursor-pointer pr-10"
            />
            {/* Dropdown Arrow Icon */}
            <span
              className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {isDropdownOpen && (
              <ul className="absolute top-12 left-0 w-full bg-[#2c2c2c] rounded-md shadow-lg z-20 max-h-64 overflow-y-auto">
                {projectTypes.map((type) => (
                  <li
                    key={type.id}
                    className="px-4 py-2 hover:bg-[#383838] hover:text-[#ffb000] cursor-pointer text-white"
                    onClick={() => handleSelect(type.title)}
                  >
                    {type.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Zip Code Input */}
          <input
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="input input-bordered w-full"
          />

          {/* Button */}
          <div className="card-actions justify-end">
            <button
              className="btn w-full bg-[#ffb000] hover:bg-[#ffa600] text-black font-semibold"
              onClick={handleGetQuote}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="pt-0">
        <Services visibleServices={6} />
      </div>

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
          <button
            className="btn px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            onClick={() => navigate("/services")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
