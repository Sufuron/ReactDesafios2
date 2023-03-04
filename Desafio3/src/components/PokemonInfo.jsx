import React from "react";

const PokemonInfo = ({ details }) => {
  return (
    <div className="col-12">
      <div className="card m-2 bg-text">
        <div className="card-header">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`}
            alt={details.name}
            style={{ width: "250px", height: "250px" }}
            className={"card-img-top"}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-center border-bottom rounded-5">
            {details.name}
          </h2>
          <p className="card-text border-bottom rounded-5">
            <strong>Height:</strong> {details.height}
          </p>
          <p className="card-text border-bottom rounded-5">
            <strong>Weight:</strong> {details.weight}
          </p>
          <p className="card-text border-bottom rounded-5">
            <strong>Abilities:</strong>{" "}
            {details.abilities
              ? details.abilities.map((a) => a.ability.name).join(", ")
              : ""}
          </p>
          <p className="card-text border-bottom rounded-5">
            <strong>Types:</strong>{" "}
            {details.types
              ? details.types.map((t) => t.type.name).join(", ")
              : ""}
          </p>
          <p className="card-text border-bottom rounded-5">
            <strong>Attack:</strong>{" "}
            {details.stats ? details.stats[4].base_stat : ""}
          </p>
          <p className="card-text border-bottom rounded-5">
            <strong>Defense:</strong>{" "}
            {details.stats ? details.stats[3].base_stat : ""}
          </p>
          <p className="card-text border-bottom rounded-5">
            <strong>HP:</strong>{" "}
            {details.stats ? details.stats[5].base_stat : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
