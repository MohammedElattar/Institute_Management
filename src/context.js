import React, { useContext, useState } from "react";

const Context = React.createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
