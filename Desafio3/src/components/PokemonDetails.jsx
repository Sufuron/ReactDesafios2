import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";
import { types } from "./colors";

const PokemonDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const buttonColor = types.find(
    (type) =>
      details.types &&
      details.types.some((detailType) => detailType.type.name === type.type)
  )?.color;

  const handleClick = () => {
    navigate("/Pokemons");
  };

  useEffect(() => {
    setLoading(true);
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setTimeout(() => {
          setDetails(response.data);
          setLoading(false);
          setButtonVisible(true);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="row">
        {loading ? (
          <div className="col-12">
            {buttonVisible && (
              <button
                className="btn text-white m-5 w-50"
                onClick={handleClick}
                style={{ backgroundColor: buttonColor }}
              >
                Go Back!
              </button>
            )}
            <h2 className="border-bottom rounded-5 mt-5 pt-3 text-primary">
              Loading...
            </h2>
          </div>
        ) : (
          <div className="col-12">
            <button
              className="btn text-white m-5 w-50"
              onClick={handleClick}
              style={{ backgroundColor: buttonColor }}
            >
              Go Back!
            </button>
            <PokemonInfo details={details} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
