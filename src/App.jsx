import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/navbar.jsx";
import Footer from "./pages/footer/footer.jsx";
import Pricing from "./pages/pricing/pricing.jsx";
import Contact from "./pages/contact/contact.jsx";
import Skills from "./pages/skills/skills.jsx";
import Home from "./pages/home/home.jsx";
import Projects from "./pages/projects/project.jsx";
import "./App.css";

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
