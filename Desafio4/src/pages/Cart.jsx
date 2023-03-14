import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../components/CartContext";

const Cart = () => {
  const { order, setOrder } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const calculateTotalPrice = (storedOrder) => {
    const total = Object.values(storedOrder).reduce(
      (total, pizza) => total + pizza.price * pizza.count,
      0
    );
    setTotalPrice(total);
  };

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order")) || {};
    setOrder(storedOrder);
  }, [setOrder]);

  useEffect(() => {
    calculateTotalPrice(order);
  }, [order]);

  const handleClearCart = () => {
    localStorage.removeItem("order");
    setOrder({});
    setTotalPrice(0);
  };

  const handleIncrement = (pizzaId) => {
    const newOrder = { ...order };
    newOrder[pizzaId].count++;
    setOrder(newOrder);
    localStorage.setItem("order", JSON.stringify(newOrder));
    calculateTotalPrice(newOrder);
  };

  const handleDecrement = (pizzaId) => {
    const newOrder = { ...order };
    if (newOrder[pizzaId].count > 1) {
      newOrder[pizzaId].count--;
    } else {
      delete newOrder[pizzaId];
    }
    setOrder(newOrder);
    localStorage.setItem("order", JSON.stringify(newOrder));
    calculateTotalPrice(newOrder);
  };

  const handlePayment = () => {
    if (Object.keys(order).length > 0) {
      setPaymentSuccess(true);
      handleClearCart();
      setTimeout(() => {
        setPaymentSuccess(false);
      }, 2000);
    }
  };

  return (
    <>
      {paymentSuccess && (
        <div className="alert alert-success text-center" role="alert">
          Payment successful!
        </div>
      )}
      {Object.keys(order).length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(order).map((pizza) => (
                <tr key={pizza.id}>
                  <td>
                    <img
                      src={pizza.img}
                      alt={pizza.name}
                      className="rounded"
                      style={{ width: "120px", height: "80px" }}
                    />
                  </td>
                  <td className="m-2 p-4">{pizza.name}</td>
                  <td className="m-2 p-4">
                    <button
                      className="rounded bg-danger text-white p-1 m-1"
                      onClick={() => handleDecrement(pizza.id)}
                    >
                      -
                    </button>
                    {pizza.count}
                    <button
                      className="rounded bg-success text-white p-1 m-1"
                      onClick={() => handleIncrement(pizza.id)}
                    >
                      +
                    </button>
                  </td>
                  <td className="m-2 p-4">{pizza.price * pizza.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5>Total: {totalPrice}</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={handleClearCart}>
              Clear Cart
            </button>
            <button className="btn btn-primary" onClick={handlePayment}>
              Go To Pay
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
