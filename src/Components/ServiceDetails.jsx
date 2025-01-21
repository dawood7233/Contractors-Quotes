import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { allServices } from "./servicesData";

const ServiceDetails = () => {
  const { title } = useParams(); // Extract the service title from the route params
  const location = useLocation(); // Access location state
  const decodedTitle = decodeURIComponent(title); // Decode the URL-encoded title
  const service = allServices.find(
    (service) => service.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  // Get the passed zip code from location state
  const passedZipCode = location.state?.zipCode || "";

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-12 pt-24 text-center">
        <h1 className="text-3xl text-red-500">Service Not Found</h1>
        <p className="text-gray-600">
          Please check the URL or select a valid service.
        </p>
      </div>
    );
  }

  const [showError, setShowError] = useState(false);
  
  // Initialize form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: passedZipCode,
    ...service.inputs.reduce((acc, input) => {
      acc[input.question] = ""; // Add service-specific questions to formData
      return acc;
    }, {}),
    HomeOwner: "",
    PropertyType: "",
    PurchaseTimeFrame: "",
    BestTimeToCall: "",
    "Brief data about requirements": "",
    agreement: false,
    affid: "",
    rid: "",
    tid: "",
    url: "",
    start: "",
    min: "",
    ipAddress: "",
    userAgent: "",
  });

  // Update formData.url when the location changes
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      url: window.location.href, // Update with the current URL
    }));
  }, [location.pathname]); // Re-run whenever the path changes

  // Fetch and set initial parameters on component mount
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setFormData((prevData) => ({
          ...prevData,
          ipAddress: data.ip,
        }));
      })
      .catch((error) => console.error("Failed to fetch IP address:", error));

    setFormData((prevData) => ({
      ...prevData,
      userAgent: navigator.userAgent,
    }));

    const urlParams = new URLSearchParams(window.location.search);
    const affid = urlParams.get("affid") || "";
    const rid = urlParams.get("rid") || "";
    const tid = urlParams.get("tid") || "";

    setFormData((prevData) => ({
      ...prevData,
      affid,
      rid,
      tid,
      url: window.location.href,
    }));

    const start = new Date().getTime();
    const min = Math.floor(start / 60000);
    setFormData((prevData) => ({
      ...prevData,
      start,
      min,
    }));
  }, []);

  // Add TrustedForm script dynamically
  useEffect(() => {
    const trustedFormScript = document.createElement("script");
    trustedFormScript.type = "text/javascript";
    trustedFormScript.async = true;
    trustedFormScript.src =
      (document.location.protocol === "https:" ? "https" : "http") +
      "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" +
      new Date().getTime() +
      Math.random();

    const trustedFormNoscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.src = "https://api.trustedform.com/ns.gif";
    trustedFormNoscript.appendChild(img);

    document.body.appendChild(trustedFormScript);
    document.body.appendChild(trustedFormNoscript);

    return () => {
      if (document.body.contains(trustedFormScript)) {
        document.body.removeChild(trustedFormScript);
      }
      if (document.body.contains(trustedFormNoscript)) {
        document.body.removeChild(trustedFormNoscript);
      }
    };
  }, []);

  // Add LeadiD script dynamically
  useEffect(() => {
    const leadiDScript = document.createElement("script");
    leadiDScript.id = "LeadiDscript_campaign";
    leadiDScript.type = "text/javascript";
    leadiDScript.async = true;
    leadiDScript.src =
      "//create.lidstatic.com/campaign/402848de-d8aa-7158-923b-a6a24e7956dc.js?snippet_version=2";

    const leadiDNoscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.src =
      "//create.leadid.com/noscript.gif?lac=0F8580E1-10B6-A5AB-B0DF-1A2B8CF787AF&lck=402848de-d8aa-7158-923b-a6a24e7956dc&snippet_version=2";
    leadiDNoscript.appendChild(img);

    document.body.appendChild(leadiDScript);
    document.body.appendChild(leadiDNoscript);

    return () => {
      if (document.body.contains(leadiDScript)) {
        document.body.removeChild(leadiDScript);
      }
      if (document.body.contains(leadiDNoscript)) {
        document.body.removeChild(leadiDNoscript);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check zip code validity
    // const isZipCodeValid = (zip) => /^\d{5}$/.test(zip);
    // if (
    //   !isZipCodeValid(formData["current zip code?"]) ||
    //   !isZipCodeValid(formData["moving zip code?"])
    // ) {
    //   alert("Please enter valid 5-digit zip codes.");
    //   return;
    // }

    if (!formData.agreement) {
      setShowError(true);
      return;
    }

    setShowError(false);

    // Prepare data for submission
    const requestBody = JSON.stringify(formData);

    try {
      const response = await fetch(
        "https://demo.pingtreesystems.com/lead/direct_post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Correct header for JSON payload
          },
          body: requestBody,
          mode: "no-cors", // No-CORS mode for limited browser handling
        }
      );

      // Note: response.ok and response.json() won't work in no-cors mode.
      console.log("Request sent. Check server for response handling.");
      alert(
        "Form submitted successfully (but no server response is accessible due to CORS)."
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      ...(service?.inputs?.reduce((acc, input) => {
        acc[input.question] = "";
        return acc;
      }, {}) || {}),
      HomeOwner: "",
      PropertyType: "",
      PurchaseTimeFrame: "",
      BestTimeToCall: "",
      "Brief data about requirements": "",
      agreement: false,
      affid: formData.affid,
      rid: formData.rid,
      tid: formData.tid,
      url: formData.url,
      start: formData.start,
      min: formData.min,
      ipAddress: formData.ipAddress,
      userAgent: formData.userAgent,
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      {/* Service Title Section */}
      <div className="flex items-center justify-center gap-4 pb-2">
        <h1 className="text-3xl">Get A {title} Consultation!</h1>
        {/* Service Image */}
        {service?.image && (
          <img
            src={service.image}
            alt={`${title} service`}
            className="w-20 h-20 object-contain"
          />
        )}
      </div>
      {/* Service-Specific Inputs */}
      {service?.inputs && (
        <div className="max-w-4xl mx-auto mt-2">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service?.inputs.map((input, index) => (
                <div className="mb-4" key={index}>
                  <label className="block text-secondary font-medium mb-2">
                    {input.question}
                  </label>
                  {input.options ? (
                    <select
                      name={input.question} // Use the question as the key
                      value={formData[input.question] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                      required
                    >
                      <option value="">Select an option</option>
                      {input.options.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : input.type === "date" ? (
                    <input
                      type="date"
                      name={input.question} // Use the question as the key
                      value={formData[input.question] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                      required
                    />
                  ) : (
                    <input
                      type="text"
                      name={input.question} // Use the question as the key
                      value={formData[input.question] || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                      required={input.question
                        .toLowerCase()
                        .includes("zip code")}
                      placeholder={
                        input.question.toLowerCase().includes("zip code")
                          ? "Enter 5-digit zip code"
                          : ""
                      }
                      pattern={
                        input.question.toLowerCase().includes("zip code")
                          ? "\\d{5}"
                          : undefined
                      }
                      title={
                        input.question.toLowerCase().includes("zip code")
                          ? "Must be 5 digits"
                          : undefined
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </form>
        </div>
      )}
      <h1 className="text-3xl text-center pb-2">Tell Us More About You</h1>{" "}
      {/* Single Page Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {/* First Name */}
            <div className="mb-1">
              <label
                htmlFor="firstName"
                className="block text-secondary font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-secondary font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-secondary font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>
            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-secondary font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;

                  // Allow only numeric input and limit to 5 characters
                  if (/^\d{0,10}$/.test(value)) {
                    handleChange(e); // Update the form data if valid
                  }
                }}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
              {formData.phone.length > 11 && (
                <p className="text-red-600 text-sm mt-1">
                  Phone num must not exceed 10 digits.
                </p>
              )}
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block text-secondary font-medium"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* City */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-secondary font-medium"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
            </div>

            {/* State */}
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-secondary font-medium"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
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
                className="block text-secondary font-medium"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={(e) => {
                  const value = e.target.value;

                  // Allow numeric input but limit it to 5 digits
                  if (/^\d*$/.test(value)) {
                    setFormData((prevData) => ({
                      ...prevData,
                      zipCode: value.slice(0, 5), // Limit the value to 5 characters
                    }));
                  }
                }}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                required
              />
              {formData.zipCode.length > 5 && (
                <p className="text-red-600 text-sm mt-1">
                  Zip Code must not exceed 5 digits.
                </p>
              )}
            </div>
          </div>
          {/* Wrapper for the form */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl text-center mb-7">Few More Things</h1>

            {/* Wrapper for responsive two-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Home Owner */}
              <div className="mb-4">
                <label
                  htmlFor="HomeOwner"
                  className="block text-secondary font-medium"
                >
                  Home Owner:
                </label>
                <select
                  name="HomeOwner"
                  value={formData["HomeOwner"]}
                  onChange={handleChange}
                  className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Property Type */}
              <div className="mb-4">
                <label
                  htmlFor="PropertyType"
                  className="block text-secondary font-medium"
                >
                  Property Type?
                </label>
                <select
                  name="PropertyType"
                  value={formData["PropertyType"]}
                  onChange={handleChange}
                  className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
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
                  className="block text-secondary font-medium"
                >
                  Purchase TimeFrame
                </label>
                <select
                  name="PurchaseTimeFrame"
                  value={formData["PurchaseTimeFrame"]}
                  onChange={handleChange}
                  className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
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
                  className="block text-secondary font-medium"
                >
                  What is the best time to call you?
                </label>
                <select
                  name="BestTimeToCall"
                  value={formData["BestTimeToCall"]}
                  onChange={handleChange}
                  className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Anytime">Anytime</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            {/* Full width input for brief description */}
            <div className="mb-4">
              <label
                htmlFor="Brief data about requirements"
                className="block text-secondary font-medium"
              >
                Tell us about your service requirements in brief
              </label>
              <textarea
                name="Brief data about requirements"
                value={formData["Brief data about requirements"]}
                onChange={handleChange}
                className="w-full px-4 py-0.5 border-b-2 border-[#1f2020] rounded-md focus:outline-none focus:ring focus:primary resize-none"
                rows="2"
                required
              />
            </div>

            {/* Checkbox for agreement */}
            <div className="mb-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={(e) =>
                    setFormData({ ...formData, agreement: e.target.checked })
                  }
                  className={`mt-1 ${
                    !formData.agreement && showError ? "border-red-500" : ""
                  }`}
                />
                <span className="text-sm text-secondary">
                  By clicking GET YOUR QUOTE, I agree to the Terms of Service
                  and Privacy Policy, I authorize home improvement companies,
                  their contractors, and partner companies to contact me about
                  home improvement offers by phone calls and text messages to
                  the number I provided. I authorize that these marketing
                  communications may be delivered to me using an automatic
                  telephone dialing system or by prerecorded message. I
                  understand that my consent is not a condition of purchase, and
                  I may revoke that consent at any time. Mobile and data charges
                  may apply. California Residents.
                </span>
              </label>
              {!formData.agreement && showError && (
                <p className="text-red-500 text-sm mt-2">
                  Please check the box to proceed.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn w-full bg-primary text-black transition duration-300"
                onClick={(e) => {
                  if (!formData.agreement) {
                    e.preventDefault(); // Prevent submission
                    setShowError(true); // Show error message
                  } else {
                    setShowError(false); // Clear error message
                  }
                }}
              >
                Submit
              </button>
            </div>
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
