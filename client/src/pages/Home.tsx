/**
 * Institutional Precision — Advanced Creation Studio
 * Editorial enterprise software aesthetic: ink navy, warm paper, ACS vermilion;
 * asymmetric field-brief layout, dense uppercase Archivo display, precise Source Sans body.
 */
import { ArrowDownRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Note-to-action systems",
    body: "Convert scattered notes and conversations into accountable next steps, ready for review and follow-through.",
  },
  {
    number: "02",
    title: "Administrative clarity",
    body: "Create cleaner handoffs, organized records, and practical operating rhythms for busy teams.",
  },
  {
    number: "03",
    title: "Legal-assistant-friendly workflows",
    body: "Support case preparation and task organization with human-reviewed, responsible AI assistance.",
  },
];

const principles = [
  "Designed for responsible human review",
  "Built around real work, not feature theater",
  "Structured to grow with your operating needs",
];

const navItems = [
  { label: "Focus", target: "focus" },
  { label: "Approach", target: "approach" },
  { label: "Mission", target: "mission" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (target: string) => {
    scrollToSection(target);
    setMenuOpen(false);
  };

  return (
    <div className="acs-site min-h-screen overflow-x-hidden bg-[#f5f1e9] text-[#111c2b]">
      <header className="acs-header">
        <button className="acs-brand" onClick={() => scrollToSection("top")} aria-label="Back to top">
          <img className="acs-logo" src="/manus-storage/acs-logo_29844139.png" alt="Advanced Creation Studio mark" />
          <span className="acs-wordmark">
            <b>ADVANCED</b>
            <b>CREATION STUDIO</b>
          </span>
        </button>

        <nav className="acs-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.target} onClick={() => handleNavigate(item.target)}>{item.label}</button>
          ))}
        </nav>

        <button className="acs-inquiry-button" onClick={() => scrollToSection("contact")}>
          <span>Start a conversation</span>
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.2} />
        </button>

        <button className="acs-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <div className="acs-mobile-nav">
            {navItems.map((item) => (
              <button key={item.target} onClick={() => handleNavigate(item.target)}>{item.label}</button>
            ))}
            <button onClick={() => handleNavigate("contact")}>Start a conversation <ArrowUpRight size={17} /></button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="acs-hero" aria-labelledby="hero-heading">
          <div className="acs-rail" aria-hidden="true">
            <span>ACS</span>
            <i />
            <span>01 / 04</span>
          </div>

          <div className="acs-hero-copy">
            <p className="acs-kicker"><span>01</span> AI work systems for consequential work</p>
            <h1 id="hero-heading">TURN THE NOTE<br />INTO THE NEXT<br /><em>RIGHT ACTION.</em></h1>
            <p className="acs-hero-intro">Advanced Creation Studio builds clear, responsible AI workflow tools for teams that need less friction, better follow-through, and stronger operational foundations.</p>
            <div className="acs-hero-actions">
              <button className="acs-button-primary" onClick={() => scrollToSection("contact")}>
                Discuss a workflow <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <button className="acs-text-button" onClick={() => scrollToSection("focus")}>
                See our current focus <ArrowDownRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="acs-workflow-stage" aria-label="Workflow illustration showing a note being transformed into structured actions">
            <div className="acs-stage-image" />
            <div className="acs-specimen-label">CURRENT SPECIMEN <span>NOTE → ACTION</span></div>
            <div className="acs-input-card">
              <p className="acs-card-label">SOURCE NOTE</p>
              <p>“Benefits letter is due Friday. Need status, owner, and a clear follow-up.”</p>
              <div className="acs-cursor" aria-hidden="true" />
            </div>
            <div className="acs-arrow-marker" aria-hidden="true"><ArrowDownRight size={18} /></div>
            <div className="acs-action-card">
              <p className="acs-card-label">PRIORITIZED NEXT ACTIONS</p>
              <ul>
                <li><span>01</span> Confirm document status</li>
                <li><span>02</span> Assign a follow-up owner</li>
                <li><span>03</span> Prepare a Friday-ready summary</li>
              </ul>
              <div className="acs-card-status"><i /> HUMAN REVIEW READY</div>
            </div>
            <p className="acs-stage-caption">A practical layer between what gets recorded and what happens next.</p>
          </div>

          <div className="acs-hero-footnote"><span>BUILT FOR</span> OPERATORS · LEGAL SUPPORT · PUBLIC BENEFIT</div>
        </section>

        <section id="focus" className="acs-focus-section">
          <div className="acs-section-intro">
            <p className="acs-kicker"><span>02</span> Our current commercial focus</p>
            <h2>Practical intelligence,<br />built for the workday.</h2>
            <p>We are beginning with the high-value, behind-the-scenes work that keeps organizations moving: synthesizing information, surfacing commitments, and making handoffs usable.</p>
          </div>

          <div className="acs-capability-list">
            {capabilities.map((capability) => (
              <article className="acs-capability" key={capability.number}>
                <div className="acs-capability-number">{capability.number}</div>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </div>
                <ArrowUpRight className="acs-capability-arrow" size={19} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="acs-approach-section">
          <div className="acs-approach-visual">
            <img src="/manus-storage/acs-systems-detail_43620d81.jpg" alt="Abstract studio arrangement of paper, rules, and a red routing ribbon" />
            <div className="acs-visual-number">03</div>
          </div>
          <div className="acs-approach-copy">
            <p className="acs-kicker acs-kicker-light"><span>03</span> The working principle</p>
            <h2>THE SYSTEM SHOULD<br />MAKE THE NEXT STEP<br /><em>MORE POSSIBLE.</em></h2>
            <p>Our perspective is direct: responsible tools should reduce administrative friction without reducing human judgment. That means building with disciplined inputs, clear outputs, and the context people need to act with confidence.</p>
            <div className="acs-principles">
              {principles.map((principle) => <div key={principle}><Check size={15} strokeWidth={2.7} /> {principle}</div>)}
            </div>
          </div>
        </section>

        <section id="mission" className="acs-mission-section">
          <div className="acs-mission-image" />
          <div className="acs-mission-content">
            <p className="acs-kicker"><span>04</span> The long view</p>
            <h2>Commercially grounded.<br />Mission-led by design.</h2>
            <div className="acs-mission-body">
              <p>Advanced Creation Studio is being built for durable impact. The systems we develop today are part of a longer-term commitment to practical support for people navigating reentry after incarceration.</p>
              <p>We believe operational clarity, well-designed tools, and institutional partnerships can help create more stable pathways forward—without treating people as problems to be managed.</p>
            </div>
            <div className="acs-mission-rule"><span>MISSION HORIZON</span><b>Practical systems for stronger reentry outcomes.</b></div>
          </div>
        </section>

        <section id="contact" className="acs-contact-section">
          <div className="acs-contact-heading">
            <p className="acs-kicker"><span>CONTACT</span> BUILD WITH INTENTION</p>
            <h2>Let’s make the work<br /><em>more workable.</em></h2>
          </div>
          <div className="acs-contact-panel">
            <p>Whether you are exploring an internal workflow challenge, a partnership opportunity, or a contract-ready capability, we welcome a focused conversation.</p>
            <a className="acs-button-primary" href="mailto:hello@advancedcreation.studio?subject=Workflow%20conversation%20with%20Advanced%20Creation%20Studio">
              Start an inquiry <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <span className="acs-contact-note">Responses are scoped thoughtfully. No automated sales sequence.</span>
          </div>
        </section>
      </main>

      <footer className="acs-footer">
        <div className="acs-footer-brand"><img src="/manus-storage/acs-logo_29844139.png" alt="" /><span>ADVANCED CREATION STUDIO</span></div>
        <span>© {new Date().getFullYear()} ACS. BUILT FOR RESPONSIBLE FORWARD MOTION.</span>
        <button onClick={() => scrollToSection("top")}>BACK TO TOP <ArrowUpRight size={14} /></button>
      </footer>
    </div>
  );
}
