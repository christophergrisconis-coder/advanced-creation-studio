export interface CourseModule {
  number: number;
  title: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
}

export interface AICourse {
  id: string;
  title: string;
  subtitle: string;
  category: 'Prompting & Administration' | 'Media & Creative AI' | 'Agentic Automation' | 'Ethics & Governance' | 'Reentry & Vocational' | 'Data & Machine Learning';
  level: 'Foundational' | 'Intermediate' | 'Advanced' | 'Executive';
  duration: string;
  totalHours: number;
  format: string;
  certification: string;
  description: string;
  targetAudience: string;
  learningOutcomes: string[];
  modules: CourseModule[];
  iconName: string;
  badgeColor: string;
}

export const AI_COURSES: AICourse[] = [
  {
    id: 'prompt-eng-public-sector',
    title: 'Practical AI Prompt Engineering for Public Sector',
    subtitle: 'Deterministic, Audit-Friendly Prompting for Government Workflows',
    category: 'Prompting & Administration',
    level: 'Foundational',
    duration: '4 Weeks',
    totalHours: 16,
    format: 'Live Agency Masterclass & Interactive Sandbox',
    certification: 'ACS Certified Public Sector Prompt Architect',
    description: 'Empower agency staff to draft administrative memos, synthesize complex RFP requirements, summarize multi-page policy documents, and automate constituent responses while maintaining zero-hallucination guardrails and complete auditability.',
    targetAudience: 'Agency Directors, Policy Analysts, Administrative Staff, Procurement Officers',
    learningOutcomes: [
      'Master structured system instruction frameworks for consistent, repeatable AI outputs',
      'Construct automated RFP and grant proposal drafting templates with zero data leaks',
      'Implement multi-pass verification prompts to eliminate AI hallucinations',
      'Establish agency-wide prompt libraries and standard operating procedures (SOPs)'
    ],
    iconName: 'MessageSquareCode',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    modules: [
      {
        number: 1,
        title: 'Fundamentals of LLMs in Government Constraints',
        duration: '4 Hours',
        description: 'Understand modern AI architecture, tokenization, temperature controls, and privacy boundaries for public sector data.',
        keyTakeaways: ['LLM Architecture Basics', 'Data Privacy Guardrails', 'System vs User Prompts']
      },
      {
        number: 2,
        title: 'Structured Prompt Frameworks & Role-Based Prompting',
        duration: '4 Hours',
        description: 'Learn step-by-step techniques for instructing AI models to act as policy compliance checkers, legal reviewers, or technical editors.',
        keyTakeaways: ['Role Conditioning', 'Few-Shot Exemplars', 'Output Formatting (JSON/Markdown)']
      },
      {
        number: 3,
        title: 'Automated Memos, RFP & Grant Drafting',
        duration: '4 Hours',
        description: 'Build prompt templates for rapidly producing grant responses, executive briefs, and inter-agency memos.',
        keyTakeaways: ['Grant Proposal Synthesis', 'RFP Breakdown', 'Executive Summary Extraction']
      },
      {
        number: 4,
        title: 'Anti-Hallucination Verification & Audit Trails',
        duration: '4 Hours',
        description: 'Enforce strict fact-checking protocols, source citation constraints, and compliance documentation for all generated text.',
        keyTakeaways: ['Source Grounding', 'Fact-Checking Pass', 'Audit Logging & Archiving']
      }
    ]
  },
  {
    id: 'generative-ai-media',
    title: 'Generative AI Video & 4K Media Production',
    subtitle: '4K Storyboarding, Synthetic Voiceovers & Public Awareness Campaigns',
    category: 'Media & Creative AI',
    level: 'Intermediate',
    duration: '3 Weeks',
    totalHours: 12,
    format: 'Hands-on Production Studio & Keyframe Lab',
    certification: 'ACS Certified AI Media Director',
    description: 'Master the full pipeline of producing 4K government-grade awareness campaigns, scene timing storyboards, synthetic voiceovers, and visual assets using state-of-the-art Google Generative AI media tools.',
    targetAudience: 'Communications Directors, Media Production Teams, Public Information Officers',
    learningOutcomes: [
      'Generate 45-60 second agency video scripts with exact scene timing and audio direction',
      'Create photorealistic 4K keyframe visual assets and motion layers',
      'Integrate natural multi-lingual synthetic voiceovers and spatial audio soundscapes',
      'Ensure 100% GSA accessibility, subtitle compliance, and public sector branding'
    ],
    iconName: 'Clapperboard',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    modules: [
      {
        number: 1,
        title: 'Script Architecture & Narrative Pacing',
        duration: '3 Hours',
        description: 'Craft high-impact promotional video concepts designed to engage citizens and stakeholders within 60 seconds.',
        keyTakeaways: ['Hook Generation', 'Timed Pacing (5s-15s blocks)', 'Call-to-Action Design']
      },
      {
        number: 2,
        title: 'Visual Keyframes & Color Palette Direction',
        duration: '3 Hours',
        description: 'Utilize generative vision models to create scene keyframes, visual overlays, and color palettes matching agency branding.',
        keyTakeaways: ['Prompt-to-Image Generation', 'Brand Color Matching', 'Motion Layering']
      },
      {
        number: 3,
        title: 'Voiceover Synthesis & Spatial Audio Composition',
        duration: '3 Hours',
        description: 'Generate multi-accent, tone-accurate voiceovers and background score directions for emotional resonance.',
        keyTakeaways: ['TTS Voice Tuning', 'Audio Pacing', 'Subtitling & Closed Captions']
      },
      {
        number: 4,
        title: '4K Export, Accessibility & Compliance Masters',
        duration: '3 Hours',
        description: 'Finalize master video streams with embedded agency metadata, 508 accessibility compliance, and multi-platform distribution ratios.',
        keyTakeaways: ['508 Compliance', 'Metadata Tagging', 'Aspect Ratios (16:9, 9:16, 4:3)']
      }
    ]
  },
  {
    id: 'autonomous-agents-workflows',
    title: 'Autonomous AI Agents for Administrative Case Management',
    subtitle: 'Multi-Agent Systems for Automated Intake, Triage & Document Processing',
    category: 'Agentic Automation',
    level: 'Advanced',
    duration: '6 Weeks',
    totalHours: 24,
    format: 'Code Lab & Architecture Workshop',
    certification: 'ACS Autonomous Agent Workflow Specialist',
    description: 'Design and deploy multi-agent AI ecosystems capable of autonomously parsing constituent applications, cross-referencing eligibility databases, and generating automated status updates while keeping human oversight in the loop.',
    targetAudience: 'IT Directors, Software Engineers, Systems Architects, Operations Leads',
    learningOutcomes: [
      'Architect multi-agent coordination frameworks using Function Calling and Tools',
      'Build Retrieval-Augmented Generation (RAG) pipelines over complex policy documents',
      'Implement Human-in-the-Loop (HITL) safety checkpoints for high-stakes decisions',
      'Deploy agentic microservices with real-time logging and performance metrics'
    ],
    iconName: 'Cpu',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    modules: [
      {
        number: 1,
        title: 'Agentic Loops & Function Calling Architecture',
        duration: '4 Hours',
        description: 'Understand tool-use patterns, function schemas, stateful memory, and step-by-step task decomposition.',
        keyTakeaways: ['Function Calling Schema', 'Memory Persist', 'Task Decomposition']
      },
      {
        number: 2,
        title: 'RAG Pipelines over Government Policy PDF Repositories',
        duration: '4 Hours',
        description: 'Construct vector embeddings and semantic search pipelines over regulatory manuals and legal codes.',
        keyTakeaways: ['Vector Databases', 'Semantic Chunking', 'Hybrid Search (Keyword + Dense)']
      },
      {
        number: 3,
        title: 'Multi-Agent Collaboration & Specialization',
        duration: '4 Hours',
        description: 'Coordinate specialized sub-agents (e.g. Intake Agent, Verification Agent, Reporting Agent) to solve complex workflows.',
        keyTakeaways: ['Inter-Agent Messaging', 'Orchestration Rules', 'Conflict Resolution']
      },
      {
        number: 4,
        title: 'Human-in-the-Loop Safety Checkpoints',
        duration: '4 Hours',
        description: 'Establish mandatory approval triggers before automated agents execute external database updates or send citizen notices.',
        keyTakeaways: ['HITL Approval Gates', 'Confidence Thresholds', 'Fallback Logic']
      },
      {
        number: 5,
        title: 'Security, API Authentication & Rate Management',
        duration: '4 Hours',
        description: 'Harden API endpoints, manage credentials via Secret Managers, and throttle agent requests to prevent service overload.',
        keyTakeaways: ['OAuth / Service Accounts', 'Rate Limiting', 'Secret Management']
      },
      {
        number: 6,
        title: 'Production Deployment & Monitoring Dashboards',
        duration: '4 Hours',
        description: 'Monitor agent execution latency, token consumption, error rates, and user satisfaction metrics.',
        keyTakeaways: ['Telemetry Dashboards', 'Token Cost Tracking', 'SLAs & Uptime']
      }
    ]
  },
  {
    id: 'responsible-ai-ethics-governance',
    title: 'Responsible AI Ethics, Governance & Federal NIST Compliance',
    subtitle: 'NIST AI Risk Management Framework, Executive Orders & Bias Mitigation',
    category: 'Ethics & Governance',
    level: 'Executive',
    duration: '2 Weeks',
    totalHours: 8,
    format: 'Executive Seminar & Risk Audit Workshop',
    certification: 'ACS Government AI Ethics & Compliance Officer',
    description: 'Essential governance seminar for public sector leaders addressing Executive Orders on Safe AI, the NIST AI Risk Management Framework (RMF 1.0), algorithmic bias auditing, data sovereignty, and responsible procurement.',
    targetAudience: 'Agency Executive Leadership, Chief Risk Officers, General Counsel, CIOs',
    learningOutcomes: [
      'Implement the NIST AI Risk Management Framework (Govern, Map, Measure, Manage)',
      'Conduct algorithmic bias audits on citizen-facing evaluation software',
      'Establish Agency AI Governance Committees and standard risk registers',
      'Draft compliant data usage agreements and vendor procurement clauses'
    ],
    iconName: 'ShieldAlert',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    modules: [
      {
        number: 1,
        title: 'Federal Mandates, OMB Directives & Executive Orders',
        duration: '2 Hours',
        description: 'Deep dive into federal policies, GSA standards, OMB guidance on AI usage, and state-level legislation.',
        keyTakeaways: ['OMB Guidance', 'Executive Order Analysis', 'Federal Standards']
      },
      {
        number: 2,
        title: 'NIST AI Risk Management Framework (AI RMF 1.0)',
        duration: '2 Hours',
        description: 'Practical application of the four core pillars: Govern, Map, Measure, and Manage across public services.',
        keyTakeaways: ['Govern Pillar', 'Risk Mapping', 'Continuous Monitoring']
      },
      {
        number: 3,
        title: 'Algorithmic Fairness, Bias Auditing & Accessibility',
        duration: '2 Hours',
        description: 'Identify demographic disparities in predictive models and enforce fairness constraints in social programs.',
        keyTakeaways: ['Disparity Metrics', 'Bias Mitigation Algorithms', '508 Digital Inclusion']
      },
      {
        number: 4,
        title: 'Vendor Procurement Clause Architecture & Oversight',
        duration: '2 Hours',
        description: 'Draft strict contractual terms for AI vendors regarding model ownership, training data lineage, and audit rights.',
        keyTakeaways: ['Data Lineage Clause', 'Vendor Audit Rights', 'IP Protection']
      }
    ]
  },
  {
    id: 'ai-reentry-upskilling',
    title: 'AI Literacy & Vocational Upskilling for Reentry Candidates',
    subtitle: 'Empowering Returning Citizens with Modern Digital & AI Workplace Skills',
    category: 'Reentry & Vocational',
    level: 'Foundational',
    duration: '8 Weeks',
    totalHours: 32,
    format: 'In-Facility & Community Tech Bootcamp',
    certification: 'ACS Workplace AI Literacy Certificate',
    description: 'Specially designed vocational training program for justice-involved individuals entering the modern workforce. Teaches practical AI productivity tools, professional communication, digital literacy, and tech-assisted job seeking.',
    targetAudience: 'Correctional Education Staff, Reentry Navigators, Workforce Program Coordinators',
    learningOutcomes: [
      'Master basic computer navigation and safe, responsible AI productivity software',
      'Use AI tools to draft resumes, practice job interviews, and write cover letters',
      'Develop digital communication skills required for modern office and field environments',
      'Earn industry-recognized ACS AI Literacy credentials for immediate employment advantage'
    ],
    iconName: 'GraduationCap',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    modules: [
      {
        number: 1,
        title: 'Digital Workplace Foundations & AI Overview',
        duration: '8 Hours',
        description: 'Hands-on introduction to modern workplace software, browser navigation, and basic AI concept awareness.',
        keyTakeaways: ['Computer Operating Basics', 'What is AI?', 'Safe Digital Practices']
      },
      {
        number: 2,
        title: 'AI Tools for Daily Office & Technical Productivity',
        duration: '8 Hours',
        description: 'Utilize AI assistants to compose emails, check grammar, organize spreadsheets, and format documents.',
        keyTakeaways: ['Email Drafting Assistants', 'Spreadsheet Formatting', 'Task Management']
      },
      {
        number: 3,
        title: 'AI-Enhanced Career Launch & Mock Interviewing',
        duration: '8 Hours',
        description: 'Interactive simulations using voice and text AI to practice job interviews, refine resume bullets, and highlight transferable skills.',
        keyTakeaways: ['Resume Builder', 'Mock AI Interview Simulation', 'Transferable Skill Mapping']
      },
      {
        number: 4,
        title: 'Workplace Ethics, Digital Security & Continuous Growth',
        duration: '8 Hours',
        description: 'Build long-term digital habits, workplace ethics, cybersecurity hygiene, and career progression planning.',
        keyTakeaways: ['Cyber Hygiene', 'Workplace Professionalism', 'Career Ladder Planning']
      }
    ]
  },
  {
    id: 'predictive-analytics-ml',
    title: 'Predictive AI Analytics & Public Impact Modeling',
    subtitle: 'Data Modeling for Recidivism Forecasting, SROI & Resource Allocation',
    category: 'Data & Machine Learning',
    level: 'Advanced',
    duration: '5 Weeks',
    totalHours: 20,
    format: 'Interactive Data Lab & Jupyter Notebook Sandbox',
    certification: 'ACS Public Impact Data Analyst',
    description: 'Rigorous technical training for government data teams on building machine learning models that analyze program efficacy, forecast recidivism rates, optimize budget allocations, and calculate Social Return on Investment (SROI).',
    targetAudience: 'Data Analysts, Economists, Budget Directors, Program Evaluators',
    learningOutcomes: [
      'Clean and structure public sector longitudinal datasets without compromising privacy',
      'Train supervised machine learning models for risk stratification and resource allocation',
      'Build dynamic visualization dashboards using D3.js and Recharts for decision-makers',
      'Quantify Social Return on Investment (SROI) with audit-ready econometric formulas'
    ],
    iconName: 'BarChart3',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    modules: [
      {
        number: 1,
        title: 'Public Sector Data Engineering & Anonymization',
        duration: '4 Hours',
        description: 'Clean messy agency records, handle missing data, and apply k-anonymity protocols.',
        keyTakeaways: ['Data Preprocessing', 'Privacy Anonymization', 'ETL Pipelines']
      },
      {
        number: 2,
        title: 'Supervised Learning for Outcome Stratification',
        duration: '4 Hours',
        description: 'Train logistic regression, random forests, and gradient boosting models on historical program data.',
        keyTakeaways: ['Classification Models', 'Feature Importance', 'ROC-AUC Evaluation']
      },
      {
        number: 3,
        title: 'Econometric SROI & Cost-Benefit Quantification',
        duration: '4 Hours',
        description: 'Calculate direct taxpayer savings from reduced incarceration, increased tax revenue, and lowered court costs.',
        keyTakeaways: ['SROI Formula', 'Cost Avoidance Modeling', 'Fiscal Impact Reports']
      },
      {
        number: 4,
        title: 'Interactive Dashboard Design for Executive Leadership',
        duration: '4 Hours',
        description: 'Translate complex data pipelines into intuitive, real-time visual dashboards for legislative hearings.',
        keyTakeaways: ['D3/Recharts Integration', 'Executive Drill-Downs', 'Exportable Reports']
      },
      {
        number: 5,
        title: 'Model Validation, Drift Monitoring & Governance',
        duration: '4 Hours',
        description: 'Establish continuous model monitoring to detect data drift, degradation, or unexpected demographic skew.',
        keyTakeaways: ['Model Drift Audit', 'Recalibration Protocols', 'Final Capstone Presentation']
      }
    ]
  }
];

export const AI_INDUSTRY_STATS = [
  { label: 'Classes & Bootcamps', value: '12+', detail: 'Tailored for Public Sector' },
  { label: 'Agency Participants', value: '1,400+', detail: 'Trained & Certified' },
  { label: 'Average Completion Rate', value: '96.2%', detail: 'Hands-on Lab Model' },
  { label: 'Federal & State Compliance', value: '100%', detail: 'NIST & GSA Aligned' }
];
