import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 pt-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-400 to-secondary  text-black text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
      </div>

      {/* Why Us Section */}
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <p className="text-secondary text-lg leading-relaxed text-center">
          Thecontractornow is an innovative way for you to connect with home
          service providers nearby. Finding the right home contractor according
          to your needs and budget can be a daunting task. We make it easy for
          home owners to connect with multiple qualified professionals in their
          area. Able to compare services and budgets and make inform decisions.
          This all can be achieved by few clicks by filling the form. What
          thecontractornow helps you with? - To find the right Professional near
          you - It saves you time as you do not have to find different
          contractors through extensive searches. - Compare multi quotations and
          make the right decision. - Find the right professional and get the job
          done
        </p>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-secondary mb-8 hover:text-[#ffb000] transition duration-300">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Step 1 */}
            <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md hover:bg-[#ffae00de] transition duration-500 cursor-pointer">
              <div className="text-6xl text-amber-300 mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">
                Complete The Short Form
              </h3>
              <p className="text-secondary">
                Answer a few easy questions regarding your project needs to get
                matched with the services you require.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md hover:bg-[#ffae00de] transition duration-500 cursor-pointer">
              <div className="text-6xl text-amber-300 mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">
                Find Home Service Professionals
              </h3>
              <p className="text-secondary">
                Get a competitive quote from a contractor in your area!
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md hover:bg-[#ffae00de] transition duration-500 cursor-pointer">
              <div className="text-6xl text-amber-300 mb-4">🏠</div>
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
          <button
            className="btn px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-gray-100"
            onClick={() => navigate("/services")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
