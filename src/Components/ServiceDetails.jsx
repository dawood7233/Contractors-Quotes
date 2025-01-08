import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { allServices } from "./servicesData";

const ServiceDetails = () => {
  const location = useLocation();

  // Retrieve the service title from the state
  const title = location.state?.title || "Unknown Service";

  // Find the current service inputs
  const service = allServices.find((service) => service.title === title);

  // State for all form fields (including service-specific inputs)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    date: "",
    ...(service?.inputs?.reduce((acc, input) => {
      acc[input.question] = ""; // Add service-specific questions to formData
      return acc;
    }, {}) || {}),
    HomeOwner: "",
    PropertyType: "",
    PurchaseTimeFrame: "",
    BestTimeToCall: "",
    "Brief data about requirements": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log consolidated formData to the console
    console.log("Form Data Submitted:", formData);

    // Example API call with axios (if implemented)
    // axios.post("/api/submit", formData)
    //   .then(response => console.log("Success:", response))
    //   .catch(error => console.error("Error:", error));

    alert("Submitted successfully!");

    // Reset formData state
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      date: "",
      ...(service?.inputs?.reduce((acc, input) => {
        acc[input.question] = ""; // Reset service-specific inputs
        return acc;
      }, {}) || {}),
      HomeOwner: "",
      PropertyType: "",
      PurchaseTimeFrame: "",
      BestTimeToCall: "",
      "Brief data about requirements": "",
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      {/* Service Title Section */}
      <h1 className="text-4xl text-center pb-3">Get A {title} Consultation!</h1>
      {/* Service Image */}
      {service?.image && (
        <div className="text-center mb-6">
          <img
            src={service.image}
            alt={`${title} service`}
            className="mx-auto w-48 h-48 object-contain"
          />
        </div>
      )}
      {/* Service-Specific Inputs */}
      {service?.inputs && (
        <div className="p-6 max-w-5xl mx-auto mt-8">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.inputs.map((input, index) => (
                <div className="mb-4" key={index}>
                  <label className="block text-secondary font-medium mb-2">
                    {input.question}
                  </label>
                  <select
                    name={input.question}
                    value={formData[input.question] || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                    required
                  >
                    <option value="">Select an option</option>
                    {input.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </form>
        </div>
      )}
      <h1 className="text-4xl text-center pb-3">Tell Us More About You</h1>{" "}
      {/* Single Page Form */}
      <div className=" p-6 max-w-5xl mx-auto mt-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {/* First Name */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-secondary font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-secondary font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-secondary font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-secondary font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block text-secondary font-medium mb-2"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* City */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-secondary font-medium mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* State */}
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-secondary font-medium mb-2"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              >
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>

            {/* Zip Code */}
            <div className="mb-4">
              <label
                htmlFor="zipCode"
                className="block text-secondary font-medium mb-2"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Date */}
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-secondary font-medium mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>
          </div>
          <h1 className="text-4xl text-center pb-3">Few More Things</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <label
                htmlFor="HomeOwner"
                className="block text-secondary font-medium mb-2"
              >
                Home Owner:
              </label>
              <select
                name="Property Type?"
                value={formData["HomeOwner"]}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              >
                <option value="">Select an option</option>
                <option value="Commercial">Yes</option>
                <option value="Multi-Unit">No</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="mb-4">
              <label
                htmlFor="PropertyType"
                className="block text-secondary font-medium mb-2"
              >
                Property Type?
              </label>
              <select
                name="Property Type?"
                value={formData["PropertyType"]}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              >
                <option value="">Select an option</option>
                <option value="Commercial">Commercial</option>
                <option value="Multi-Unit">Multi-Unit</option>
                <option value="Residential">Residential</option>
              </select>
            </div>

            {/* Purchase Timeframe */}
            <div className="mb-4">
              <label
                htmlFor="PurchaseTimeFrame"
                className="block text-secondary font-medium mb-2"
              >
                Purchase TimeFrame
              </label>
              <select
                name="Purchase TimeFrame"
                value={formData["PurchaseTimeFrame"]}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              >
                <option value="">Select an option</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="3-4 weeks">3-4 weeks</option>
                <option value="5-6 weeks">5-6 weeks</option>
                <option value="7-8 weeks">7-8 weeks</option>
                <option value="Time Is Flexible">Time Is Flexible</option>
              </select>
            </div>

            {/* Best Time to Call */}
            <div className="mb-4">
              <label
                htmlFor="BestTimeToCall"
                className="block text-secondary font-medium mb-2"
              >
                What is the best time to call you?
              </label>
              <select
                name="What is the best time to call you?"
                value={formData["BestTimeToCall"]}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              >
                <option value="">Select an option</option>
                <option value="Anytime">Anytime</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            {/* Brief Description */}
            <div className="mb-4 col-span-2">
              <label
                htmlFor="Brief data about requirements"
                className="block text-secondary font-medium mb-2"
              >
                Tell us about your service requirement in brief
              </label>
              <textarea
                name="Tell us about your service requirement in brief"
                value={formData["Brief data about requirements"]}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                rows="4"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn  w-full bg-primary text-black transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
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
    </div>
  );
};

export default ServiceDetails;
