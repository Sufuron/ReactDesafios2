import React, { useState, useEffect } from "react";
import Axios from "axios";
import PokemonList from "./PokemonList";
import PokemonTypeButtons from "./PokemonTypeButtons";
import PokemonDetails from "./PokemonDetails";

const PokemonApi = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonType, setPokemonType] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonType) return;

    setLoading(true);
    Axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`)
      .then((response) => {
        setTimeout(() => {
          setPokemon(response.data.pokemon.slice(0, 900));
          setError(false);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [pokemonType]);

  const handleClick = (type) => {
    setPokemonType(type);
  };

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleGoBack = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container my-5 text-black">
      <div className="row">
        <PokemonTypeButtons handleClick={handleClick} />
      </div>
      {error ? (
        <div className="row">
          <div className="col-12">
            <p>Type not found!</p>
          </div>
        </div>
      ) : loading ? (
        <div className="row">
          <div className="col-12">
            <h2 className="loading-text">Loading...</h2>
          </div>
        </div>
      ) : selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} onGoBack={handleGoBack} />
      ) : pokemon.length ? (
        <PokemonList pokemon={pokemon} onPokemonSelect={handlePokemonSelect}/>
      ) : null}
    </div>
  );
};

export default PokemonApi;
