import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <UIContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
