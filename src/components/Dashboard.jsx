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
          <span className="env">prod-Currently buit in Progress</span>
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

      <section className="actions">
  <a
    href="https://drive.google.com/file/d/1kGNH0HzNNReX8OiDfXHL0ACrZ_rmaVnm/view?usp=sharing"
    className="btn primary"
    download
  >
    Download CV
  </a>

  <a
    href="https://www.linkedin.com/in/shubhaam13"
    target="_blank"
    rel="noreferrer"
    className="btn secondary"
  >
    LinkedIn Profile
  </a>

    <a
    href="https://github.com/shubhaam13"
    target="_blank"
    rel="noreferrer"
    className="btn tertiary"
  >
    Github
  </a>


</section>

        <section className="metrics">
          <Metric label="Availability" value="99.9%" />
          <Metric label="Incidents" value="P2/P3" />
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
  <h2>Experience</h2>

  <div className="timeline-item">
    <div className="time">Dec 2022 – Present</div>
    <div className="content">
      <strong>Associate Consultant</strong> · Capgemini  
      <div className="meta">Client: Volvo Cars · Sweden | Bengaluru, India</div>

      <ul>
        <li>
          Role progression: Software Engineer → Senior Software Engineer → Associate Consultant
        </li>
        <li>
          Owned production operations for identity, observability, automation, and eSign platforms
        </li>
        <li>
          Supported global users across EMEA, APAC, and US regions
        </li>
        <li>
          Acted as primary offshore owner for multiple Tier-1 enterprise applications
        </li>
        <li>
          Resolved SAP data incidents impacting 20k+ users
        </li>
        <li>
          Performed log analysis using ELK Stack and delivered RCA to stakeholders
        </li>
                <li>
          Automated ServiceNow workflows and subscription access flows
        </li>
        <li>
          Reduced manual operational toil by ~30% through API-driven automation
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="cert-projects">
  <div className="certs">
    <h2>Certifications</h2>
    <ul>
      <li>Microsoft Azure Administrator (AZ-104)</li>
      <li>Microsoft Azure Fundamentals (AZ-900)</li>
      <li>Google Cloud Digital Leader</li>
    </ul>
  </div>

  <div className="projects">
    <h2>Key Projects</h2>

    <div className="project">
      <strong>Enterprise eSign Automation Platform</strong>
      <p>
        Automated Adobe Sign & DocuSign workflows using ServiceNow,
        REST APIs, webhooks and PowerApps.
      </p>
    </div>

    <div className="project">
      <strong>Production Observability Stack</strong>
      <p>
        ELK + Grafana dashboards with proactive alerting and RCA
        across 15+ SaaS platforms.
      </p>
    </div>

    <div className="project">
      <strong>Identity & Access Operations</strong>
      <p>
        Azure AD SSO, RBAC, group-based access control for global users.
      </p>
    </div>
  </div>
</section>


      </div>
    </div>
  );
}
