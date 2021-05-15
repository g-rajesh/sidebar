import React, { useState, useContext, useReducer } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showsidebar, setshowsidebar] = useState(false);
  const [showmodal, setshowmodal] = useState(false);
  const [showlinks1, setShowLinks1] = useState(false);
  const [showlinks2, setShowLinks2] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showsidebar,
        showmodal,
        setshowmodal,
        setshowsidebar,
        showlinks1,
        showlinks2,
        setShowLinks1,
        setShowLinks2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
