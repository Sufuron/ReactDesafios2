import React, { useState, useEffect } from "react";
import pizzas from "../components/pizzas.json";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  const [pizzaList, setPizzaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPizzaList(pizzas);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap mx-5">
      {isLoading ? (
        <h1 className="w-100 text-center">Loading...</h1>
      ) : (
        pizzaList.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))
      )}
    </div>
  );
};

export default Home;
