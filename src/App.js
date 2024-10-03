import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Careers from "./Pages/Careers/Careers";
import Events from "./Pages/Events";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
