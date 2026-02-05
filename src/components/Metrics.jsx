import React, { useContext } from "react";
import { SystemContext } from "../context/SystemContext";

/**
 * Fake sparkline data (Grafana-style)
 * Kept minimal & believable
 */
const SPARKS = {
  availability: "0,18 10,16 20,17 30,15 40,16 50,14 60,15 70,13 80,14 90,12 100,13",
  incidents: "0,10 10,14 20,12 30,18 40,16 50,22 60,18 70,20 80,17 90,19 100,16",
  platforms: "0,20 20,18 40,18 60,18 80,18 100,18",
  toil: "0,22 10,20 20,19 30,17 40,15 50,14 60,13 70,12 80,11 90,10 100,9",
};

export default function Metrics() {
  const { state } = useContext(SystemContext);

  return (
    <div className="metrics">
      <Metric
        label="Availability"
        value="99.9%"
        spark={SPARKS.availability}
        active={state.highlightedMetric === "availability"}
        color="#22c55e"
      />

      <Metric
        label="Incidents"
        value="200+"
        spark={SPARKS.incidents}
        active={state.highlightedMetric === "incidents"}
        color="#f97316"
      />

      <Metric
        label="Platforms"
        value="15+"
        spark={SPARKS.platforms}
        active={state.highlightedMetric === "platforms"}
        color="#38bdf8"
      />

      <Metric
        label="Toil Reduced"
        value="30%"
        spark={SPARKS.toil}
        active={state.highlightedMetric === "toil"}
        color="#a78bfa"
      />
    </div>
  );
}

function Metric({ label, value, spark, active, color }) {
  return (
    <div className={`metric ${active ? "active" : ""}`}>
      <div className="metric-top">
        <span className="metric-label">{label}</span>
        <span className="metric-value">{value}</span>
      </div>

      {/* Fake Grafana sparkline */}
      <svg
        className="sparkline"
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
      >
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={spark}
        />
      </svg>
    </div>
  );
}
