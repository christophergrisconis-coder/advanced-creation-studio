/**
 * Institutional Precision — Advanced Creation Studio
 * Editorial enterprise software aesthetic: ink navy, warm paper, ACS vermilion;
 * asymmetric field-brief layout, dense uppercase Archivo display, precise Source Sans body.
 */
import { ArrowDownRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import { FormEvent, useState } from "react";

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
  { label: "Tools", target: "tools" },
  { label: "Approach", target: "approach" },
  { label: "Mission", target: "mission" },
];

const toolSuites = [
  {
    number: "01",
    label: "ACS SIGNAL / NOTE-TO-ACTION",
    title: "Make the handoff visible before it becomes a miss.",
    purpose: "A practical workflow for converting notes, transcripts, and intake material into a structured action map that people can review, assign, and move forward.",
    workflow: ["Locate commitments, questions, and dates", "Sort actions by urgency and owner", "Preserve source context for review"],
    outputs: ["Action maps", "Owner flags", "Follow-up summaries"],
    safeguard: "Built for accountable human review—not automated decision-making.",
  },
  {
    number: "02",
    label: "ACS CASEWORK / LEGAL SUPPORT",
    title: "Start legal-support work with a clearer case picture.",
    purpose: "A structured preparation layer for legal teams that need a usable view of matter context, documents, deadlines, questions, and next tasks before the work is handed off.",
    workflow: ["Organize matter facts and document lists", "Surface dates, missing items, and preparation tasks", "Create a review-ready work packet"],
    outputs: ["Matter summaries", "Task packets", "Deadline checklists"],
    safeguard: "Supports legal professionals and staff; it does not provide legal advice or make legal decisions.",
  },
];

type InquiryFields = {
  name: string;
  email: string;
  organization: string;
  workflow: string;
  message: string;
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiry, setInquiry] = useState<InquiryFields>({ name: "", email: "", organization: "", workflow: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof InquiryFields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleNavigate = (target: string) => {
    scrollToSection(target);
    setMenuOpen(false);
  };

  const updateInquiry = (field: keyof InquiryFields, value: string) => {
    setInquiry((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof InquiryFields, string>> = {};

    if (!inquiry.name.trim()) nextErrors.name = "Please provide your name.";
    if (!inquiry.email.trim()) nextErrors.email = "Please provide an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) nextErrors.email = "Please enter a valid email address.";
    if (!inquiry.workflow) nextErrors.workflow = "Select the type of conversation you need.";
    if (inquiry.message.trim().length < 20) nextErrors.message = "Please share at least a sentence about the work you are exploring.";

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setFieldErrors({});
    setSubmitted(true);
    const emailSubject = encodeURIComponent(`Workflow conversation — ${inquiry.workflow}`);
    const emailBody = encodeURIComponent(
      `Name: ${inquiry.name}\nOrganization: ${inquiry.organization || "Not provided"}\nEmail: ${inquiry.email}\nConversation type: ${inquiry.workflow}\n\nWhat they are exploring:\n${inquiry.message}`,
    );
    window.setTimeout(() => {
      window.location.href = `mailto:hello@advancedcreation.studio?subject=${emailSubject}&body=${emailBody}`;
    }, 180);
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

        <section id="tools" className="acs-tools-section" aria-labelledby="tools-heading">
          <div className="acs-tools-heading">
            <div>
              <p className="acs-kicker"><span>TOOLS</span> Current capability direction</p>
              <h2 id="tools-heading">TWO PRACTICAL<br />SYSTEMS. <em>ONE CLEARER<br />WAY FORWARD.</em></h2>
            </div>
            <div className="acs-tools-aside">
              <p>These tools are designed as focused operating layers—not generic chat interfaces. They help teams move responsibly from recorded information to organized, reviewable work.</p>
              <a className="acs-download-link" href="/manus-storage/advanced-creation-studio-capability-brief_b4a75622.pdf" target="_blank" rel="noreferrer" download>
                <span>Download capability brief</span><ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="acs-tool-list">
            {toolSuites.map((tool) => (
              <article className="acs-tool-card" key={tool.number}>
                <div className="acs-tool-index"><span>{tool.number}</span><i /></div>
                <div className="acs-tool-main">
                  <p className="acs-tool-label">{tool.label}</p>
                  <h3>{tool.title}</h3>
                  <p>{tool.purpose}</p>
                  <div className="acs-tool-outputs">
                    {tool.outputs.map((output) => <span key={output}>{output}</span>)}
                  </div>
                </div>
                <div className="acs-tool-detail">
                  <p className="acs-detail-label">WORKFLOW LAYER</p>
                  <ol>
                    {tool.workflow.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
                  </ol>
                  <p className="acs-tool-safeguard"><Check size={15} strokeWidth={2.7} />{tool.safeguard}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="acs-tools-footer">
            <span>IMPLEMENTATION POSTURE</span>
            <p>Concept capability and partnership exploration underway. The right first engagement is scoped around a defined workflow, clear review standards, and practical operating outcomes.</p>
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
            <div className="acs-mission-bridge">
              <div><span>PRODUCT LOGIC</span><b>Clear intake, accountable handoffs, and visible next steps.</b></div>
              <ArrowDownRight aria-hidden="true" size={18} />
              <div><span>MISSION HORIZON</span><b>Practical continuity designed for stronger pathways forward.</b></div>
            </div>
            <div className="acs-mission-rule"><span>MISSION HORIZON</span><b>Practical systems for stronger reentry outcomes.</b></div>
          </div>
        </section>

        <section id="contact" className="acs-contact-section">
          <div className="acs-contact-heading">
            <p className="acs-kicker"><span>CONTACT</span> INQUIRY PROTOCOL</p>
            <h2>BEGIN WITH A<br /><em>SCOPED BRIEF.</em></h2>
            <div className="acs-contact-protocol">
              <span>01 / EXISTING INPUTS</span>
              <span>02 / REVIEW STANDARD</span>
              <span>03 / PRACTICAL OUTCOME</span>
            </div>
          </div>
          <div className="acs-contact-panel">
            <p>Tell us where a defined workflow is breaking down, what review standard the work must meet, and what a practical next step would make possible.</p>
            <form className="acs-inquiry-form" onSubmit={submitInquiry} noValidate>
              <div className="acs-form-grid">
                <label>
                  <span>Name <b>*</b></span>
                  <input value={inquiry.name} onChange={(event) => updateInquiry("name", event.target.value)} aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} autoComplete="name" />
                  {fieldErrors.name && <small id="name-error">{fieldErrors.name}</small>}
                </label>
                <label>
                  <span>Work email <b>*</b></span>
                  <input type="email" value={inquiry.email} onChange={(event) => updateInquiry("email", event.target.value)} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} autoComplete="email" />
                  {fieldErrors.email && <small id="email-error">{fieldErrors.email}</small>}
                </label>
              </div>
              <div className="acs-form-grid">
                <label>
                  <span>Organization</span>
                  <input value={inquiry.organization} onChange={(event) => updateInquiry("organization", event.target.value)} autoComplete="organization" />
                </label>
                <label>
                  <span>Conversation type <b>*</b></span>
                  <select value={inquiry.workflow} onChange={(event) => updateInquiry("workflow", event.target.value)} aria-invalid={Boolean(fieldErrors.workflow)} aria-describedby={fieldErrors.workflow ? "workflow-error" : undefined}>
                    <option value="">Select one</option>
                    <option value="Note-to-action workflow">Note-to-action workflow</option>
                    <option value="Legal-support workflow">Legal-support workflow</option>
                    <option value="Partnership or contract">Partnership or contract</option>
                    <option value="Other inquiry">Other inquiry</option>
                  </select>
                  {fieldErrors.workflow && <small id="workflow-error">{fieldErrors.workflow}</small>}
                </label>
              </div>
              <label className="acs-message-field">
                <span>What are you exploring? <b>*</b></span>
                <textarea rows={3} value={inquiry.message} onChange={(event) => updateInquiry("message", event.target.value)} aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "message-error" : undefined} placeholder="Tell us about the workflow, organization, or opportunity." />
                {fieldErrors.message && <small id="message-error">{fieldErrors.message}</small>}
              </label>
              <div className="acs-form-submit-row">
                <button className="acs-button-primary" type="submit">Prepare inquiry <ArrowUpRight size={18} aria-hidden="true" /></button>
                <span className="acs-form-helper">Opens a prefilled email after validation.</span>
              </div>
              {submitted && <p className="acs-form-success" role="status">Your inquiry is prepared. Your email application should open now.</p>}
            </form>
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
