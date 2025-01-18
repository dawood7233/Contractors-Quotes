import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ServiceDetails from "./Components/ServiceDetails";
import PrivacyPloicy from "./Pages/PrivacyPolicy";
import CaliforniaPrivacyNotice from "./Pages/CaliforniaPrivacyNotice";
import UserTerms from "./Pages/UserTerms";
import AutoScroll from "./Components/AutoScroll";
import ScrollUpButton from "./Components/scrollUpButton";

function App() {
  return (
    <Router>
      <Navbar data={{ Services }} />
      <AutoScroll />
      <ScrollUpButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:title" element={<ServiceDetails />} />
        <Route path="/privacyPolicy" element={<PrivacyPloicy />} />
        <Route path="/californiaPrivacy" element={<CaliforniaPrivacyNotice />} />
        <Route path="/userTerms" element={<UserTerms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
