import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="text-center p-5 m-5 bgdegre text-white">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
