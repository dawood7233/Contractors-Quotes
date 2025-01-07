import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-400 to-secondary  text-black text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
      </div>

      {/* Why Us Section */}
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Our products include a wide selection of quality services. We aim to
          deliver innovation with the addition of reliability and assurance of cost
          effectiveness. One important aspect about us is that project management
          is one of our specialties. We pay close attention to our customers and
          clients with a 24/7 contactable schedule.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-secondary mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Complete The Short Form</h3>
              <p className="text-gray-600">
                Answer a few easy questions regarding your project needs to get
                matched with the services you require.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">
                Find Home Service Professionals
              </h3>
              <p className="text-secondary">
                Get a competitive quote from a contractor in your area!
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="text-6xl  mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Local Pro In Your Area</h3>
              <p className="text-secondary">
                Enter your project details, and we will match you with the best
                local contractors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-amber-500 to-[#1f2020] text-black py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6">
            Let us connect you with the right professionals to make your project
            a success.
          </p>
          <button className="btn px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-gray-100" onClick={()=>navigate('/services/form')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
