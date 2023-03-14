import React, { createContext, useState, useEffect } from "react";

export const PhotosContext = createContext();

const PhotosContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = "kivOoRGbKQUvn8iW5pLMOmor4uCAM8mjNxuoDDaue6SrkK6WDmpSMfDd";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?per_page=40&page=${currentPage}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setPhotos(data.photos);
    };
    fetchData();
  }, [currentPage]);

  return (
    <PhotosContext.Provider value={{ photos, setCurrentPage }}>
      {props.children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
