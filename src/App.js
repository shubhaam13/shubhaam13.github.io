import Terminal from "./components/Terminal";
import Dashboard from "./components/Dashboard";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-layout">
      <aside className="terminal-pane">
        <Terminal />
      </aside>

      <main className="dashboard-pane">
        <Dashboard />
      </main>
    </div>
  );
}
