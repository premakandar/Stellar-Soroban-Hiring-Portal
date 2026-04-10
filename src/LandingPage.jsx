import "./LandingPage.css";

const highlights = [
  {
    title: "Freighter Wallet Login",
    body: "Connect with Freighter and sign operations without exposing private keys in your app.",
  },
  {
    title: "Hiring Workflow UI",
    body: "Post jobs, submit applications, hire candidates, and query job data from one dashboard.",
  },
  {
    title: "Soroban Integration Layer",
    body: "Stellar SDK helpers manage simulation, signing, and submit flow for testnet interactions.",
  },
];

const flow = [
  "Connect wallet with Freighter",
  "Post a job and define role details",
  "Applicants submit cover letters",
  "Employers close roles and hire candidates",
];

export default function LandingPage({ onEnterApp }) {
  return (
    <main className="landing-shell">
      <section className="landing-hero">
        <p className="landing-kicker">Stellar + Soroban + React</p>
        <h1>On-Chain Hiring Portal</h1>
        <p className="landing-copy">
          A web app prototype for decentralized hiring workflows. The dashboard is built for
          employers and applicants, while blockchain actions are routed through Soroban SDK
          helpers and Freighter signatures.
        </p>

        <div className="landing-stat-row" aria-label="project status highlights">
          <span className="landing-pill">React Dashboard Ready</span>
          <span className="landing-pill">Wallet Flow Integrated</span>
          <span className="landing-pill">Contract Alignment In Progress</span>
        </div>

        <div className="landing-actions">
          <button type="button" className="landing-btn-primary" onClick={onEnterApp}>
            Enter Dashboard
          </button>
          <a href="#features" className="landing-btn-ghost">
            Explore Architecture
          </a>
        </div>
      </section>

      <section id="features" className="landing-grid">
        {highlights.map((item) => (
          <article key={item.title} className="feature-card">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="landing-flow" aria-label="how it works">
        <h2>How The Experience Flows</h2>
        <ol>
          {flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="landing-note" aria-label="current project status">
        <h2>Current Build Status</h2>
        <p>
          The UI and JavaScript integration target a hiring contract API. The Rust contract in this
          repository currently exposes record-management methods, so end-to-end behavior depends on
          aligning those interfaces.
        </p>
      </section>
    </main>
  );
}
