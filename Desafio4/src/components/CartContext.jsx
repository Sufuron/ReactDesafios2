import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem("order")) || {}
  );

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <CartContext.Provider value={{ order, setOrder }}>
      {children}
    </CartContext.Provider>
  );
};
