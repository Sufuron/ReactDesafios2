import React from "react";
import { useNavigate } from "react-router-dom";
import pokeball from "../assets/img/pokeball.png";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Pokemons");
  };

  return (
    <div className="text-center my-5">
      <h1 className="my-3 mt-5">Welcome to the Pokemon world!</h1>
      <img
        src={pokeball}
        alt="Pokeball"
        style={{ width: "300px" }}
        onClick={handleClick}
        className={"pokemon-img"}
      />
      <br />
      <button
        className="btn btn-outline-secondary text-decoration-none text-white m-5 w-50"
        onClick={handleClick}
      >
        Want to Catch Pokemons?
      </button>
    </div>
  );
}

export default Home;
