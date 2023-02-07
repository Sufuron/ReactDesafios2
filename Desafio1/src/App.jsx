import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar title="Desafio 1 React => React-Router." />
      
      <main className="text-center">
        <Home />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;
