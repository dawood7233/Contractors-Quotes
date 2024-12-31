import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  // Retrieve the service title from the state
  const title = location.state?.title || "Unknown Service";

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      <h1 className="text-4xl font-bold text-center">Service Details: {title}</h1>
    </div>
  
  );
};

export default ServiceDetails;
