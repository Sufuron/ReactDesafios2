import React, { useState, useEffect } from "react";
import IconHeart from "../components/IconHeart";
import Favorites from "../components/Favorites";

const ImageApi = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY =
        "kivOoRGbKQUvn8iW5pLMOmor4uCAM8mjNxuoDDaue6SrkK6WDmpSMfDd";
      try {
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
        setTotalPages(Math.ceil(data.total_results / 40));
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorites = (id) => {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((i) => i !== id)
        : [...favorites, id]
    );
  };

  const handleFavoritesChange = (favoriteImages) => {
    setFavorites(favoriteImages);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const start = currentPage - 2;
  const end = currentPage + 2;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    start > 0 ? start : 0,
    end <= totalPages ? end : totalPages
  );

  return (
    <div className="container mb-5">
      {error && <div className="alert alert-danger">{error.message}</div>}
      <div className="d-flex justify-content-center mt-3">
        {currentPage > 1 && (
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => changePage(currentPage - 1)}
          >
            Prev
          </button>
        )}
        {pages.map((page) => (
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
        {currentPage < totalPages && (
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => changePage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
      <Favorites
              favorites={favorites}
              images={images}
              onFavoritesChange={handleFavoritesChange}
            />
            <h1 className="border-bottom rounded m-5">Image Bank</h1>
      <div className="row">
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
    </div>
  );
};

export default ImageApi;
