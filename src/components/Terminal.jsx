import { useState, useRef, useEffect } from "react";
import "../styles/terminal.css";
import { useUI } from "../context/UIContext";

/* ===============================
   HELP TEXT
================================ */

const HELP_TEXT = `
Available commands:

help            Show this help
whoami          Show user
status          System status
profile         Open profile section
skills          Open skills section
experience      Open experience timeline
systems         Open systems overview
certifications  Open certifications
clear           Clear terminal
`;

/* ===============================
   TERMINAL COMPONENT
================================ */

export default function Terminal() {
  const { setActiveSection } = useUI();
  const [lines, setLines] = useState([
    "Type 'help' to list available commands.",
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  /* Auto-scroll */
  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [lines]);

  /* ===============================
     COMMAND HANDLER
  ================================ */

  const runCommand = () => {
    const cmd = input.trim().toLowerCase();
    let output = "";

    switch (cmd) {
      case "help":
        output = HELP_TEXT;
        break;

      case "whoami":
        output = "shubham";
        break;

      case "status":
        output = "SYSTEM: OPERATIONAL";
        break;

      case "profile":
        output = "Opening profile section...";
        setActiveSection("profile");
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        break;

      case "skills":
        output = "Opening skills section...";
        setActiveSection("skills");
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        break;

      case "experience":
        output = "Opening experience timeline...";
        setActiveSection("experience");
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        break;

      case "systems":
        output = "Opening selected projects...";
        setActiveSection("systems");
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;

      case "certifications":
        output = "Fetching certifications...";
        setActiveSection("certifications");
        document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
        break;

      case "clear":
        setLines([]);
        setInput("");
        return;

      case "":
        output = "";
        break;

      default:
        output = `Command not found: ${cmd}`;
    }

    setLines((prev) => [
      ...prev,
      `$ ${cmd}`,
      output && output.trim(),
    ]);
    setInput("");
  };

  /* ===============================
     RENDER
  ================================ */

  return (
    <div className="terminal">
      {/* ===== TOP BAR ===== */}
      <div className="terminal-topbar">
        <div className="terminal-dot dot-red" />
        <div className="terminal-dot dot-yellow" />
        <div className="terminal-dot dot-green" />
        <div className="terminal-title">shubham@resume:~</div>
      </div>

      {/* ===== BODY ===== */}
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, idx) => (
          <div
            key={idx}
            className={
              line?.startsWith("SYSTEM")
                ? "output output-success"
                : line?.startsWith("Command not found")
                ? "output output-error"
                : "output"
            }
          >
            {line}
          </div>
        ))}

        {/* ===== PROMPT ===== */}
        <div className="prompt-line">
          <span className="prompt-user">shubham</span>
          <span className="prompt-host">@resume</span>
          <span className="prompt-path">:~</span>
          <span className="prompt-symbol">$</span>

          <input
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runCommand()}
            aria-label="Enter a terminal command"
            autoComplete="off"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
