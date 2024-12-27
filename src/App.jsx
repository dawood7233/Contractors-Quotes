import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
