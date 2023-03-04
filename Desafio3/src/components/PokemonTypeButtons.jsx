import React from "react";
import { types } from "./colors";

const PokemonTypeButtons = ({ handleClick }) => {
  return (
    <div className="col-12">
      {types.map(({ type, color }) => (
        <button
          key={type}
          type="button"
          className="btn text-white btn-outline-secondary rounded-4 m-2"
          onClick={() => handleClick(type)}
          style={{ backgroundColor: color }}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeButtons;
