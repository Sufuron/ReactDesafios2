import React, { useState, useEffect } from "react";
import IconHeart from "../components/IconHeart";

const ImageApi = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY =
        "kivOoRGbKQUvn8iW5pLMOmor4uCAM8mjNxuoDDaue6SrkK6WDmpSMfDd";
      const response = await fetch(
        `https://api.pexels.com/v1/curated?per_page=40&page=${currentPage}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setImages(data.photos);
    };
    fetchData();
  }, [currentPage]);

  const handleFavorites = (id) => {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((i) => i !== id)
        : [...favorites, id]
    );
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-center mt-3">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`btn btn-outline-secondary mx-2 ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="row img-api">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 col-sm-6 col-lg-3 p-2">
            <div className="card">
              <img src={image.src.large} alt={image.alt} />
              <div className="heart-icon">
                <IconHeart
                  filled={favorites.includes(image.id)}
                  onClick={() => handleFavorites(image.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`btn btn-outline-secondary mx-2 ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageApi;
