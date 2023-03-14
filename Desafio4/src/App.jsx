import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext.jsx";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PizzaDetails from "./pages/PizzaDetails";
import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main className="text-center p-5 m-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
