import { useEffect, useRef, useState } from "react";
import Dashboard from "./components/Dashboard";
import Terminal from "./components/Terminal";
import TawkChat from "./components/TawkChat";
import "./styles/App.css";

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (terminalOpen && !dialog.open) dialog.showModal();
    if (!terminalOpen && dialog.open) dialog.close();
  }, [terminalOpen]);

  return <div className="site-shell">
    <Dashboard onOpenTerminal={() => setTerminalOpen(true)} />
    <TawkChat />
    <dialog className="terminal-dialog" ref={dialogRef} aria-labelledby="terminal-heading" onClose={() => setTerminalOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) setTerminalOpen(false); }}>
      <div className="terminal-dialog-heading"><div><p className="eyebrow">INTERACTIVE PROFILE</p><h2 id="terminal-heading">Terminal</h2></div><button className="icon-button" onClick={() => setTerminalOpen(false)} aria-label="Close terminal">×</button></div>
      <Terminal />
    </dialog>
  </div>;
}
