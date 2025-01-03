import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import ServiceDetails from "./Components/ServiceDetails";
import PrivacyPloicy from "./Pages/PrivacyPolicy"
import arrowImage from "/Arrow.png"; 
import CaliforniaPrivacyNotice from "./Pages/CaliforniaPrivacyNotice";
import UserTerms from "./Pages/UserTerms"

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll event to show or hide the button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Navbar data={{ Services }} />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services data={{}} />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/services/form" element={<ServiceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacyPolicy" element={<PrivacyPloicy />} />
          <Route path="/californiaPrivacy" element={<CaliforniaPrivacyNotice />} />
          <Route path="/userTerms" element={<UserTerms />} />
        </Routes>
      </div>
      <Footer />

      {/* Scroll-to-top button */}
      {showScroll && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 cursor-pointer z-50"
        >
          <img
            src={arrowImage}
            alt="Go to top"
            className="w-12 h-12 bg-black rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-bounce"
          />
        </div>
      )}
    </Router>
  );
}

export default App;
