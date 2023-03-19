import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import FavoritesPage from "./pages/FavoritesPage";
import GlobalStateProvider from "./components/GlobalStateContext";
import PhotosContextProvider from "./components/ImageApi";

const App = () => {
  return (
    <GlobalStateProvider>
      <PhotosContextProvider>
        <Navbar />
        <main className="text-center p-5 m-5 bgdegre text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </PhotosContextProvider>
    </GlobalStateProvider>
  );
};

export default App;
