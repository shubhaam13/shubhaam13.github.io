import React, { createContext, useState } from "react";

export const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [state, setState] = useState({
    cwd: "~",
    focusedSystem: null,
    highlightedMetric: null
  });

  return (
    <SystemContext.Provider value={{ state, setState }}>
      {children}
    </SystemContext.Provider>
  );
}
