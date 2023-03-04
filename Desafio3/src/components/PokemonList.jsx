import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon, onPokemonSelect }) => {
  return (
    <div className="row mt-5">
      {pokemon.map((p) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={p.pokemon.name}>
          <div className="card bg-text m-2">
            <Link to={`/pokemon/${p.pokemon.url.split("/")[6]}`} className="text-decoration-none">
              <div
                className="card-header d-flex align-items-center justify-content-center"
                onClick={() => onPokemonSelect(p)}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    p.pokemon.url.split("/")[6]
                  }.png`}
                  alt={p.pokemon.name}
                  style={{ width: "150px", height: "150px" }}
                  className={"card-img-top"}
                />
              </div>
              <p className="p-pokemon">ID: {p.pokemon.url.split("/")[6]}</p>
              <div className="card-body border-design-card">
                <h5 className="card-title text-center card-img-top nombre-pokemon text-white">
                  {p.pokemon.name}
                </h5>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;

