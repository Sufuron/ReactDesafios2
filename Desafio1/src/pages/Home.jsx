import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mb-5">
      <h2 className="text-center text-success border-bottom pb-2 mb-3">
        Welcome to our website!
      </h2>
      <p className="text-justify mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
        tortor velit. Sed fringilla neque vel tempor pellentesque. Sed in
        eleifend odio, id malesuada erat. In euismod vestibulum tortor, eu
        rhoncus lacus facilisis id. Nam tempor fringilla diam, at posuere nisi
        malesuada id. Sed blandit dolor vel egestas bibendum. Integer
        pellentesque.
      </p>
      <img
        className="mb-3 rounded-5"
        src="/src/assets/img/dragon.png"
        alt="Home"
      />
      <br />
      <NavLink
        to="/About"
        className="btn btn-outline-secondary text-decoration-none text-white"
      >
        <p className="text-center text-info">
          Do you want to kill some DRAGONS? <br /> Click Here!!
        </p>
      </NavLink>
    </div>
  );
};

export default Home;
