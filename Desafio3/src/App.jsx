import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PokemonDetails from "./components/PokemonDetails"

import Home from "./pages/Home"
import Pokemons from "./pages/Pokemons"
import Contact from "./pages/Contact"

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="text-center p-5 m-5 bgdegre text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
