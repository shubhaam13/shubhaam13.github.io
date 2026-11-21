import { useEffect, useRef, useState } from "react";
import "./../styles/dashboard.css";

const skillGroups = [
  ["Cloud & identity", "Microsoft Azure · AWS · Google Cloud Platform · Microsoft Entra ID · IAM · SSO · RBAC · MFA"],
  ["Platform & delivery", "Kubernetes (fundamentals) · Docker · Terraform (fundamentals) · Linux · Bash · Azure DevOps · GitHub Actions · Jenkins · Argo CD · CI/CD"],
  ["Monitoring & observability", "ELK Stack (Elasticsearch, Logstash, Kibana) · Grafana · Apica · Dynatrace · log analysis · dashboards · alert management"],
  ["IT service reliability", "Incident, problem and change management · root cause analysis · SLA management · ServiceNow ITSM"],
  ["Automation & APIs", "REST APIs · webhooks · Postman · Power Apps · Power Automate · third-party integrations · workflow automation"],
  ["Programming & scripting", "Java · Python · JavaScript · HTML · CSS · Shell scripting · SQL / Oracle"],
];

const education = [
  { years: "2026 — 2028", degree: "M.Tech, Cloud Computing", school: "Birla Institute of Technology and Science, Pilani (BITS Pilani)", detail: "Work Integrated Learning Programme (WILP)" },
  { years: "2018 — 2022", degree: "Bachelor of Engineering, Computer Science and Engineering", school: "Visvesvaraya Technological University (VTU), Bengaluru", detail: "" },
];

const credentials = ["Azure Administrator Associate (AZ-104)", "AWS Certified Cloud Practitioner (CLF-C02)", "Google Cloud Digital Leader", "Azure Fundamentals (AZ-900)"];

export default function Dashboard({ onOpenTerminal }) {
  const videoRef = useRef(null);
  const instagramUrl = "https://www.instagram.com/shubham_13Kumar/";
  const [videoState, setVideoState] = useState("loading");
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    const attempt = video.play();
    if (attempt?.then) attempt.then(() => setVideoState("playing")).catch(() => setVideoState("blocked"));
  }, []);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    video.muted = false;
    setMuted(false);
    video.play().then(() => setVideoState("playing")).catch(() => setVideoState("blocked"));
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return <>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Shubham Kumar home">SK<span>.</span></a><nav className="navigation-glass" aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#projects">Work</a></nav><a className="header-contact hire-link" href="mailto:shubhamkr.cloud@gmail.com?subject=Hiring%20inquiry%20for%20Shubham%20Kumar&body=Hi%20Shubham%2C%0A%0AI%E2%80%99d%20like%20to%20discuss%20a%20role%20with%20you.">Hire me <span>↗</span></a></header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><p className="eyebrow hero-kicker"><span className="availability-dot"/> CLOUD ENGINEERING · PLATFORM OPERATIONS · SRE</p><h1><span>Shubham</span><em>Kumar.</em></h1><p className="hero-role">Cloud &amp; Platform Operations <span>·</span> DevOps <span>·</span> SRE</p><p className="hero-description">I’m a reliability and cloud operations professional with nearly four years supporting enterprise platforms through Capgemini. I lead global digital identity services and am pursuing an M.Tech in Cloud Computing at BITS Pilani.</p><div className="hero-actions"><a className="button button-explore" href="#experience">Explore my work <span>↗</span></a><a className="button button-primary" href="mailto:shubhamkr.cloud@gmail.com?subject=Hiring%20inquiry%20for%20Shubham%20Kumar&body=Hi%20Shubham%2C%0A%0AI%E2%80%99d%20like%20to%20discuss%20a%20role%20with%20you.">Hire me <span>↗</span></a><a className="button button-quiet" href="mailto:shubhamkr.cloud@gmail.com?subject=Resume%20request%20for%20Shubham%20Kumar">Request resume <span>↗</span></a><button className="button button-quiet" onClick={onOpenTerminal}>Open terminal <span>›_</span></button></div><div className="hero-contact"><a href="mailto:shubhamkr.cloud@gmail.com">Email me</a><span>Bengaluru, India</span></div></div>
        <div className="hero-media" role="group" aria-label="Introduction video">
          <video ref={videoRef} className="intro-video" src="/videos/shubham-intro.mp4" autoPlay muted={muted} loop={false} playsInline controls preload="metadata" aria-label="Shubham Kumar's 10-second introduction video" onPlay={() => setVideoState("playing")} onEnded={() => setVideoState("ended")} onError={() => setVideoState("error")}>Your browser does not support embedded video.</video>
          {(videoState === "blocked" || videoState === "ended" || videoState === "playing") && <div className="hero-media-control">{videoState === "blocked" || videoState === "ended" ? <button className="sound-toggle" type="button" onClick={playVideo}>{videoState === "ended" ? "Play again" : "Play with sound"}</button> : <button className="sound-toggle" type="button" onClick={toggleMute} aria-pressed={muted}>{muted ? "Unmute" : "Mute"}</button>}</div>}
        </div>
      </section>

      <section className="section-wrap about-section" id="about"><div className="section-heading"><p className="eyebrow">PROFILE</p><h2>Keeping important platforms dependable.</h2></div><div className="about-copy"><p>Cloud operations and site reliability professional with nearly four years of experience supporting business-critical enterprise platforms across EMEA, the US and APAC.</p><p>I serve as global lead and subject-matter expert for eSign and Digital Identity services, overseeing integrations across 20+ enterprise applications. My work spans production reliability, incident response, root cause analysis, monitoring and operational automation.</p><p>Alongside platform operations, I contribute to a Python-based cloud-native occupancy analytics platform using Azure storage, Kubernetes and Argo CD. I’m pursuing an M.Tech in Cloud Computing at BITS Pilani to deepen my cloud architecture and engineering practice.</p></div></section>

      <section className="section-wrap experience-section" id="experience">
        <div className="section-heading"><p className="eyebrow">EXPERIENCE</p><h2>Operations at enterprise scale.</h2></div>
        <article className="experience-card">
          <aside className="experience-meta"><div className="experience-date">DEC 2022 — PRESENT</div><p>Analyst <span>→</span> Senior Analyst <span>→</span> Associate Consultant</p></aside>
          <div className="experience-content">
            <h3>Associate Consultant <span>· Capgemini</span></h3>
            <p className="experience-title">Enterprise platform operations · Bengaluru, India</p>
            <p className="experience-summary">Supporting business-critical services for global teams through reliability engineering, digital identity, cloud analytics and application delivery.</p>
            <div className="impact-grid"><div><strong>~99.9%</strong><span>service availability</span></div><div><strong>25%</strong><span>faster troubleshooting</span></div><div><strong>30%</strong><span>less manual effort</span></div><div><strong>10k+</strong><span>employees supported</span></div></div>
            <div className="experience-focus-grid">
              <section className="experience-focus"><h4>Service reliability</h4><ul><li>Sustained approximately 99.9% availability across 13+ platforms.</li><li>Improved monitoring and runbooks, cutting troubleshooting time by 25%.</li></ul><div className="tech-tags" aria-label="Technology stack"><span>Azure</span><span>ELK</span><span>Grafana</span><span>Apica</span><span>ServiceNow</span></div></section>
              <section className="experience-focus"><h4>Identity &amp; access</h4><ul><li>Led global signing and identity services across 20+ integrations.</li><li>Supported secure access for 3,000+ users and mentored five engineers.</li></ul><div className="tech-tags" aria-label="Technology stack"><span>Azure AD</span><span>SSO</span><span>IAM</span><span>RBAC</span><span>REST APIs</span></div></section>
              <section className="experience-focus"><h4>Cloud analytics</h4><ul><li>Contributed to a Python-based workplace analytics platform with automated deployment, dashboards and alerts.</li></ul><div className="tech-tags" aria-label="Technology stack"><span>Python</span><span>Azure Storage</span><span>Kubernetes</span><span>Argo CD</span><span>Grafana</span></div></section>
              <section className="experience-focus"><h4>Application delivery</h4><ul><li>Supported employee time, attendance and payroll workflows for 10,000+ people, helping deliver on-time salary processing.</li></ul><div className="tech-tags" aria-label="Technology stack"><span>Java</span><span>JSP</span><span>SQL / Oracle</span></div></section>
            </div>
          </div>
        </article>
      </section>

      <section className="section-wrap skills-section" id="skills"><div className="section-heading"><p className="eyebrow">TOOLS &amp; PRACTICE</p><h2>Technical skills</h2><p className="section-intro">A practical toolkit across cloud platforms, reliability, delivery and automation.</p></div><div className="skill-list">{skillGroups.map(([title, detail], index) => <article className="skill-row" key={title}><span className="skill-index">0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>

      <section className="section-wrap education-section" id="education"><div className="section-heading"><p className="eyebrow">EDUCATION</p><h2>Building deeper cloud expertise.</h2></div><div className="education-list">{education.map((item) => <article className="education-card glass-card" key={item.degree}><div className="education-years">{item.years}</div><div><h3>{item.degree}</h3><p>{item.school}</p>{item.detail && <span className="education-detail">{item.detail}</span>}</div><span className="education-mark" aria-hidden="true">↗</span></article>)}</div></section>

      <section className="section-wrap projects-section" id="projects"><div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Outcomes backed by hands-on engineering.</h2></div><div className="project-grid"><article className="project-card"><p className="eyebrow">CLOUD · ANALYTICS</p><h3>Workplace analytics platform</h3><p>Turned workplace data into an operational analytics service with monitored, repeatable cloud deployments.</p><div className="tech-tags project-tech" aria-label="Technology stack"><span>Python</span><span>Azure Storage</span><span>Kubernetes</span><span>Argo CD</span><span>Grafana</span></div></article><article className="project-card"><p className="eyebrow">IDENTITY · INTEGRATIONS</p><h3>Enterprise identity services</h3><p>Supported global digital signing and access workflows across 20+ integrations and 3,000+ users.</p><div className="tech-tags project-tech" aria-label="Technology stack"><span>Azure AD</span><span>SSO</span><span>IAM</span><span>RBAC</span><span>REST APIs</span></div></article><article className="project-card"><p className="eyebrow">APPLICATION DELIVERY</p><h3>Workforce systems</h3><p>Maintained employee time and payroll workflows at scale, contributing to 100% on-time salary processing.</p><div className="tech-tags project-tech" aria-label="Technology stack"><span>Java</span><span>JSP</span><span>SQL / Oracle</span><span>10,000+ employees</span></div></article></div></section>

      <section className="section-wrap credentials-section" id="certifications"><div className="section-heading"><p className="eyebrow">CERTIFICATIONS</p><h2>Ongoing learning.</h2></div><div className="credential-list">{credentials.map((credential) => <span key={credential}>{credential}</span>)}</div></section>
    </main><footer className="site-footer section-wrap" id="contact"><span>Shubham Kumar <i>·</i> Cloud &amp; Platform Operations</span><nav className="social-links" aria-label="Social and contact links">
      <a className="social-icon-link" href="https://linkedin.com/in/shubhaam13" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.7 8.6h3v11.8h-3zM9 8.6h2.9v1.6h.1a3.2 3.2 0 0 1 2.9-1.8c3.1 0 3.7 2 3.7 4.6v7.4h-3v-6.6c0-1.6 0-3-1.8-3s-2.1 1.4-2.1 2.9v6.7H9z"/></svg></a>
      <a className="social-icon-link" href="https://github.com/shubhaam13" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.6 3.9 1.8.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.2 11.2 0 0 0 12 .9Z"/></svg></a>
      {instagramUrl && <a className="social-icon-link" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="icon-fill" cx="17.7" cy="6.5" r="1"/></svg></a>}
      <a className="social-icon-link email-icon" href="mailto:shubhamkr.cloud@gmail.com" aria-label="Email Shubham" title="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.8" y="4.5" width="18.4" height="15" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg></a>
    </nav><a className="footer-hire" href="mailto:shubhamkr.cloud@gmail.com?subject=Hiring%20inquiry%20for%20Shubham%20Kumar">Hire me ↗</a></footer>
  </>;
}
