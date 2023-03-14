import { useContext } from "react";
import { PhotosContext } from "../components/ImageApi";
import { useParams } from "react-router-dom";

const PhotoDetails = () => {
  const { photos } = useContext(PhotosContext);
  const { id } = useParams();
  const photo = photos.find((photo) => photo.id === parseInt(id, 10));

  return (
    <div>
      <h2>{photo.photographer}</h2>
      <img src={photo.src.original} alt={photo.photographer} />
    </div>
  );
};

export default PhotoDetails;
