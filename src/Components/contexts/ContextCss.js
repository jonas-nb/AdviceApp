import React, { useState, createContext } from "react";

export const ContextStyle = createContext();

export const StyleStorage = ({ children }) => {
  const [btnState, setBtnState] = useState(false);
  const [adviceState, setAdviceState] = useState(true);

  return (
    <ContextStyle.Provider
      value={{ btnState, setBtnState, adviceState, setAdviceState }}
    >
      {children}
    </ContextStyle.Provider>
  );
};
