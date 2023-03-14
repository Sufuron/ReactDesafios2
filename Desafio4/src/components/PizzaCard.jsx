import CartButton from "./CartButton";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const PizzaCard = ({ pizza }) => {
  const { order, setOrder } = useContext(CartContext);

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
    <div className="card m-1">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="card-img-top"
        style={{ width: "320px", height: "220px" }}
      />
      <div className="card-body">
        <h5 className="card-title border-bottom">{pizza.name}</h5>
        <ul>
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text border-top border-bottom rounded-5">
          Price: {pizza.price}
        </p>
        <div className="d-flex justify-content-between">
          <CartButton pizzaId={pizza.id} />
          <button className="btn btn-danger" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
