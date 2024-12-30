import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20">
      <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Contact
        </h2>

        {/* Form */}
        <form>
          {/* Top Row: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:primary"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:primary"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:primary"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
