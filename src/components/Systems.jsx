import React, { useContext } from "react";
import { SystemContext } from "../context/SystemContext";

export default function Systems() {
  const { state } = useContext(SystemContext);

  return (
    <div className="systems">
      <Card title="Identity & Access" id="identity-access" focused={state.focusedSystem} />
      <Card title="Observability" id="observability" focused={state.focusedSystem} />
      <Card title="Automation" id="automation" focused={state.focusedSystem} />
      <Card title="eSign Platforms" id="esign-platforms" focused={state.focusedSystem} />
    </div>
  );
}

function Card({ title, id, focused }) {
  return (
    <div className={`system-card ${focused===id ? "focused" : ""}`}>
      <h3>{title}</h3>
    </div>
  );
}
