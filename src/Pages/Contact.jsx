import React from "react";
import { useNavigate } from "react-router-dom";


const Contact = () => {
const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-20">
      {/* Hero Section */}
       <div className="text-black text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us </h1>
      </div>
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg mb-8">
        
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#1f2020] mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#1f2020] mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm text-[#1f2020] mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm text- mb-1 text-[#1f2020]">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-primary text-black font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Get Started Section */}
      <div className="bg-gradient-to-r from-amber-500 to-[#1f2020] text-black py-16 px-6 w-full">
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

export default Contact;
