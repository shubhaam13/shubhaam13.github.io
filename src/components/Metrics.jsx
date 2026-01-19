import React, { useContext } from "react";
import { SystemContext } from "../context/SystemContext";

export default function Metrics() {
  const { state } = useContext(SystemContext);

  return (
    <div className="metrics">
      <Metric label="Availability" value="99.9%" active={state.highlightedMetric==="availability"} />
      <Metric label="Incidents" value="200+" />
      <Metric label="Platforms" value="15+" />
      <Metric label="Toil Reduced" value="30%" />
    </div>
  );
}

function Metric({ label, value, active }) {
  return (
    <div className={`metric ${active ? "active" : ""}`}>
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  );
}
