import React from "react";

const PokemonTypeButtons = ({ handleClick }) => {
  return (
    <div className="col-12">
      <button
        type="button"
        className="btn btn-secondary m-2"
        onClick={() => handleClick("ground")}
      >
        Ground
      </button>
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={() => handleClick("fire")}
      >
        Fire
      </button>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => handleClick("water")}
      >
        Water
      </button>
      <button
        type="button"
        className="btn btn-info m-2"
        onClick={() => handleClick("dragon")}
      >
        Dragon
      </button>
      <button
        type="button"
        className="btn btn-success m-2"
        onClick={() => handleClick("grass")}
      >
        Grass
      </button>
      <button
        type="button"
        className="btn btn-warning m-2"
        onClick={() => handleClick("electric")}
      >
        Electric
      </button>
      <button
        type="button"
        className="btn btn-light m-2"
        onClick={() => handleClick("flying")}
      >
        Flying
      </button>
    </div>
  );
};

export default PokemonTypeButtons;
