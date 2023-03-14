import React from "react";
import { Link } from "react-router-dom";

const CartButton = ({ pizzaId }) => (
  <Link to={`/pizza/${pizzaId}`} className="btn btn-primary">
    See More
  </Link>
);

export default CartButton;
