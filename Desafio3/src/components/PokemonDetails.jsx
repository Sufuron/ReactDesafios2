import React, { useState, useEffect } from "react";
import Axios from "axios";
import PokemonInfo from "./PokemonInfo";

const PokemonDetails = ({ pokemon, onGoBack, showButtons = true }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Axios.get(pokemon.pokemon.url)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pokemon]);

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="row">
        {showButtons && (
          <div className="col-12">
            <button
              type="button"
              className="btn btn-secondary mb-5"
              onClick={onGoBack}
              style={{ backgroundColor: "#f5b7b1" }}
            >
              Go back
            </button>
          </div>
        )}
        <PokemonInfo details={details} />
      </div>
    </div>
  );
};

export default PokemonDetails;
