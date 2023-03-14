import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const { order, setOrder } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order")) || {};
    setOrder(storedOrder);
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem("order");
    setOrder({});
  };

  return (
    <nav className="text-center text-white d-flex justify-content-between">
      <ul>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white m-2"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white"
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
      <div className="d-flex align-items-center">
        <Link
          to="/cart"
          className="btn btn-success text-white btn-outline-secondary m-2"
        >
          Cart ({Object.keys(order).length})
        </Link>
        {location.pathname !== "/cart" && (
          <button className="btn btn-danger m-2" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
