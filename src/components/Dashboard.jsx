import "./../styles/dashboard.css";

function Metric({ label, value }) {
  return (
    <div className="metric">
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
    </div>
  );
}

function System({ title, desc, meta }) {
  return (
    <div className="system">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="meta">{meta}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <div className="dashboard-topbar">
        <div className="left">
          <span className="status-dot" />
          <span className="env">prod-cluster</span>
        </div>

        <div className="right">
          <span>uptime 99.9%</span>
          <span className="sep">|</span>
          <span>EMEA · APAC · US</span>
          <span className="sep">|</span>
          <span className="muted">refreshed 3s ago</span>
        </div>
      </div>

      <div className="dashboard-content">
        <header className="header">
          <h1>
            Shubham Kumar <span className="live">LIVE</span>
          </h1>
          <p className="subtitle">DevOps · SRE · Cloud Operations</p>
        </header>

        <section className="metrics">
          <Metric label="Availability" value="99.9%" />
          <Metric label="Incidents" value="200+" />
          <Metric label="Platforms" value="15+" />
          <Metric label="Toil Reduced" value="30%" />
        </section>

        <section className="systems">
          <System
            title="Identity & Access"
            desc="Azure AD · SSO · RBAC"
            meta="15+ SaaS · Global scope"
          />
          <System
            title="Observability"
            desc="ELK · Grafana · Apica"
            meta="Proactive detection & RCA"
          />
          <System
            title="Automation"
            desc="ServiceNow · REST · Power Apps"
            meta="Subscription & access flows"
          />
          <System
            title="eSign Platforms"
            desc="Adobe Sign · DocuSign"
            meta="Enterprise contract automation"
          />
        </section>

        <section className="timeline">
          <div>
            <strong>2022–Present</strong> · Capgemini · Volvo Cars
          </div>
          <div>
            <strong>2023</strong> · SAP data incidents resolved (20k+ users)
          </div>
        </section>
      </div>
    </div>
  );
}
