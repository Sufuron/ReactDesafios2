import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isScaled, setIsScaled] = useState(false);

  const handleImageScale = () => {
    setIsScaled(!isScaled);
  };

  return (
    <div className="container my-5">
      <h2
        className={`text-center text-success border-bottom pb-2 mb-3 ${
          isScaled ? "move-up" : ""
        }`}
      >
        Welcome to Our Image Bank!
      </h2>
      <p className={`text-justify mt-3 ${isScaled ? "move-up" : ""}`}>
        Our image bank is a collection of high-quality, royalty-free images that
        you can use for personal or commercial projects. Browse through our
        diverse collection and find the perfect image for your project.
      </p>
      <img
        className="img-home"
        src="img/naturepic.jpg"
        alt="Home"
        onMouseEnter={handleImageScale}
        onMouseLeave={handleImageScale}
      />
      <br />
      <div className={`${isScaled ? "move-down" : ""}`}>
        <NavLink
          to="/Photos"
          className="btn btn-outline-secondary"
        >
          <h5 className="text-justify text-center text-info mt-1">
            Browse Our Image Collection
          </h5>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
