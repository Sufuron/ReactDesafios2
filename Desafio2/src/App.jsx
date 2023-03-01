import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Favorites from "./components/Favorites";
import Home from "./pages/Home";
import ImageApi from "./pages/ImageApi";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="text-center p-5 m-5 bgdegre text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imageapi" element={<ImageApi />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};


export default App;
