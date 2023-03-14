import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import pizzas from "../components/pizzas.json";
import { CartContext } from "../components/CartContext";

const PizzaDetails = () => {
  const { order, setOrder } = useContext(CartContext);
  const { id } = useParams();
  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <h2>Pizza not found</h2>;
  }

  const handleAddToCart = () => {
    let newOrder = { ...order };
    if (!newOrder[pizza.id]) {
      newOrder[pizza.id] = { ...pizza, count: 1 };
    } else {
      newOrder[pizza.id].count++;
    }
    setOrder(newOrder);
    localStorage.setItem("order", JSON.stringify(newOrder));
  };

  return (
    <div className="container mt-5 bgdegre p-2">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            className="rounded img-fluid"
            alt={pizza.name}
          />
        </div>
        <div className="col-md-6">
          <h2>
            <b>{pizza.name}</b>
          </h2>
          <p>{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h5>Price: {pizza.price}</h5>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/" className="btn btn-secondary">
              Go back
            </Link>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
