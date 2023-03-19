import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <GlobalStateContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
