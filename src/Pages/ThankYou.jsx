import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-6">Your form has been successfully submitted.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
