import React, { useContext } from "react";
import { PhotosContext } from "../components/ImageApi";
import IconHeart from "../components/IconHeart";
import { GlobalStateContext } from "../components/GlobalStateContext";

const Photos = () => {
  const { photos } = useContext(PhotosContext);
  const { favorites, setFavorites } = useContext(GlobalStateContext);

  const handleFavoriteClick = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="row">
      {photos.map((photo) => (
        <div key={photo.id} className="col-md-4 col-sm-6 col-lg-3 p-2">
          <div className="card">
            <img src={photo.src.large} alt={photo.alt} />
            <div className="heart-icon">
              <IconHeart
                filled={favorites.includes(photo.id)}
                onClick={() => handleFavoriteClick(photo.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
