import React, { useContext, useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { PhotosContext } from "./ImageApi";
import IconHeart from "./IconHeart";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(GlobalStateContext);
  const { photos: images } = useContext(PhotosContext);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    if (favorites.length > 0) {
      setShowFavorites(true);
    } else {
      setShowFavorites(false);
    }
  }, [favorites]);

  const handleFavoritesChange = (newFavorites) => {
    setFavorites(newFavorites);
  };

  return (
    <div>
      {showFavorites && <h2 className="border-bottom rounded m-4">Favorite</h2>}
      <div className="row">
        {images
          .filter((image) => favorites.includes(image.id))
          .map((image) => (
            <div key={image.id} className="col-md-4 col-sm-6 col-lg-3 p-2">
              <div className="card">
                <img src={image.src.large} alt={image.alt} />
                <div className="heart-icon">
                  <IconHeart
                    filled
                    onClick={() =>
                      handleFavoritesChange(
                        favorites.filter((i) => i !== image.id)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
