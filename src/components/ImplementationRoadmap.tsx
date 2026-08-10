import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Users,
  Server,
  Briefcase,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  FileText,
  Download,
  Sparkles,
  Award,
  Lock,
  Building2,
  Check,
  AlertCircle
} from 'lucide-react';

export interface DeploymentPhase {
  id: string;
  stepNumber: number;
  timeframe: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  accentBorder: string;
  glowColor: string;
  overview: string;
  responsibleParties: string[];
  keyMilestones: {
    title: string;
    description: string;
    complianceRef?: string;
  }[];
  agencyDeliverables: string[];
  riskMitigation: string;
  leadershipFocus: string;
  itSecurityFocus: string;
  programOfficerFocus: string;
}

export const IMPLEMENTATION_PHASES: DeploymentPhase[] = [
  {
    id: 'phase-1-assessment',
    stepNumber: 1,
    timeframe: 'Weeks 1–4',
    title: 'Stakeholder Alignment & Infrastructure Staging',
    subtitle: 'Needs Assessment, SAM.gov Contracting & Zero-Data Server Setup',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    accentBorder: 'border-blue-500',
    glowColor: 'from-blue-600/20 to-indigo-600/20',
    overview: 'Establish formal inter-agency steering committee, complete SAM.gov micro-purchase or sole-source contract execution under CAGE Code 9K8B2, and deploy air-gapped or proxy-secured zero-data retention AI servers.',
    responsibleParties: ['Agency CIO / CTO', 'State DOC Secretary', 'ACS Implementation Lead', 'Procurement Officer'],
    keyMilestones: [
      {
        title: 'FAR Part 13 & SAM.gov Contract Finalization',
        description: 'Execute contract utilizing CAGE 9K8B2 and NAICS 513199/611430 sole-source justification templates.',
        complianceRef: 'FAR 13.106-1 • SAM.gov Active'
      },
      {
        title: 'Zero-Data Retention Architecture Setup',
        description: 'Configure localized Express proxy endpoints ensuring no participant input data is stored or used for model training.',
        complianceRef: 'OMB M-24-10 • Zero-Data Mandate'
      },
      {
        title: 'Cohort Eligibility & Screening Protocol',
        description: 'Establish criteria for pre-release participants within 6-12 months of release date.',
        complianceRef: 'Second Chance Act Sec. 101'
      }
    ],
    agencyDeliverables: [
      'Approved Agency Security Architecture Sign-off',
      'Initial Cohort Enrollment Roster (50–250 participants)',
      'Baseline Recidivism Metric Benchmark Report'
    ],
    riskMitigation: 'Hardware isolated behind facility firewalls; all AI queries proxied via encrypted server channels without outbound personal data exposure.',
    leadershipFocus: 'Secure legislative budget approvals and establish multi-department memorandum of understanding (MOU).',
    itSecurityFocus: 'Audit zero-data proxy endpoints and verify Section 508 accessibility compliance.',
    programOfficerFocus: 'Select facility education classrooms and schedule initial inmate orientation sessions.'
  },
  {
    id: 'phase-2-onboarding',
    stepNumber: 2,
    timeframe: 'Weeks 5–8',
    title: 'Staff Certification & NIST Governance Setup',
    subtitle: 'Correctional Educator Bootcamps & Compliance Verification',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    accentBorder: 'border-emerald-500',
    glowColor: 'from-emerald-600/20 to-teal-600/20',
    overview: 'Train facility education instructors, peer navigators, and IT staff through intensive train-the-trainer workshops while implementing NIST AI Risk Management Framework 1.0 audit logging.',
    responsibleParties: ['Facility Education Directors', 'Instructional Officers', 'Compliance Auditors', 'ACS Training Specialists'],
    keyMilestones: [
      {
        title: 'Train-the-Trainer Certification Bootcamp',
        description: '30-hour intensive courseware training for correctional teachers on prompt engineering and document processing.',
        complianceRef: 'ACS-EDU-SYLLABUS-2025'
      },
      {
        title: 'NIST AI RMF 1.0 Audit Logging Activation',
        description: 'Deploy real-time logging systems tracking prompt usage, output safety, and demographic bias guardrails.',
        complianceRef: 'NIST AI RMF 1.0 (Govern/Map)'
      },
      {
        title: 'Offline Workstation Sync & Testing',
        description: 'Verify classroom hardware functionality across secure local networks with zero external browser risk.',
        complianceRef: 'State DOC IT Policy 2025'
      }
    ],
    agencyDeliverables: [
      'Certified Correctional AI Educator Badges (10–25 Officers)',
      'NIST AI RMF Compliance Audit Log Baseline',
      'Classroom Hardware Readiness Checklist'
    ],
    riskMitigation: 'Educators receive complete master controls and live override switches during classroom instruction.',
    leadershipFocus: 'Review preliminary audit trails to ensure complete compliance with state executive AI orders.',
    itSecurityFocus: 'Conduct penetration testing on classroom proxy connections.',
    programOfficerFocus: 'Equip classrooms with curriculum workbooks and student login credentials.'
  },
  {
    id: 'phase-3-bootcamp',
    stepNumber: 3,
    timeframe: 'Weeks 9–16',
    title: '12-Week AI Vocational Bootcamp Launch',
    subtitle: 'Hands-on AI Literacy, Office Automation & Media Production',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    accentBorder: 'border-purple-500',
    glowColor: 'from-purple-600/20 to-pink-600/20',
    overview: 'Launch active 12-week instruction covering prompt engineering, administrative document automation, and generative 4K video scripting. Students complete practical capstone projects and earn verifiable digital badges.',
    responsibleParties: ['Pre-release Participants', 'Correctional Educators', 'ACS Industry Mentors', 'Case Managers'],
    keyMilestones: [
      {
        title: 'Module 1–2: Prompt Engineering & Guardrails',
        description: 'Mastering structured JSON prompts, few-shot conditioning, and administrative document synthesis.',
        complianceRef: 'Badge: AI Prompt Specialist'
      },
      {
        title: 'Module 3–4: Office Automation & Generative 4K Video',
        description: 'Creating professional agency presentations, video scripts, and spreadsheet workflows using AI tools.',
        complianceRef: 'Badge: Office Automation Lead'
      },
      {
        title: 'Mid-Term Competency & Micro-Credential Issuance',
        description: 'Evaluation of student portfolio projects against industry standards with digital badge awards.',
        complianceRef: 'WIOA Title I Industry Skill Standard'
      }
    ],
    agencyDeliverables: [
      '100% Student Portfolio Verification',
      'Digital Skill Badging Certificates Issued',
      'Mid-Program Participant Retention Report (>95% Goal)'
    ],
    riskMitigation: 'All student prompt outputs pass through automated safety filters before rendering.',
    leadershipFocus: 'Host facility site visits for state legislators and workforce development board directors.',
    itSecurityFocus: 'Monitor bandwidth usage and proxy server response latency.',
    programOfficerFocus: 'Track daily attendance, assignment submission, and student participation metrics.'
  },
  {
    id: 'phase-4-reentry',
    stepNumber: 4,
    timeframe: 'Weeks 17–20',
    title: '72-Hour Rapid Reentry & Employer Matching',
    subtitle: 'WOTC Tax Credit Integration, Resume Optimization & Job Placement',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    accentBorder: 'border-amber-500',
    glowColor: 'from-amber-600/20 to-orange-600/20',
    overview: 'Transition graduating cohort into active job placement pipelines within 72 hours of release. Connect employer partners with up to $9,600 in WOTC tax credits per qualified hire.',
    responsibleParties: ['Reentry Navigators', 'Hiring Network Partners', 'Workforce Board Directors', 'Parole Officers'],
    keyMilestones: [
      {
        title: 'AI Resume Optimization & Virtual Mock Interviews',
        description: 'Generative interview feedback sessions and tailored resume creation for regional employer vacancies.',
        complianceRef: 'WOTC IRS Form 8850 Match'
      },
      {
        title: 'WOTC Tax Credit Automated Processing',
        description: 'Provide employer partners with pre-certified tax incentive paperwork unlocking $2,400–$9,600 per hire.',
        complianceRef: 'IRS Section 51 • ETA Form 9061'
      },
      {
        title: '72-Hour Rapid Stabilization Deployment',
        description: 'Assisting graduates with immediate housing vouchers, mobile device access, transit passes, and job reporting.',
        complianceRef: 'Second Chance Reentry Playbook'
      }
    ],
    agencyDeliverables: [
      '30-Day Post-Release Employment Placement Report (>85% Target)',
      'Employer WOTC Tax Credit Processing Documentation',
      'Individual Career Pathway Plans (ICPP)'
    ],
    riskMitigation: 'Peer Reentry Navigators provide daily check-ins during the critical first 14 days post-release.',
    leadershipFocus: 'Celebrate community graduation ceremonies and publish regional job creation press releases.',
    itSecurityFocus: 'Migrate participant portfolios to secure mobile-accessible graduate portals.',
    programOfficerFocus: 'Coordinate transport to employer job interviews and verify 30-day wage retention.'
  },
  {
    id: 'phase-5-scaling',
    stepNumber: 5,
    timeframe: 'Months 6–12+',
    title: 'Longitudinal Tracking, ROI Reporting & Statewide Expansion',
    subtitle: '3-Year Recidivism Monitoring & Legislative Budget Expansion',
    badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    accentBorder: 'border-sky-500',
    glowColor: 'from-sky-600/20 to-blue-600/20',
    overview: 'Conduct audited 3-year longitudinal monitoring comparing cohort recidivism against state baselines, quantifying taxpayer cost avoidance, and scaling program to additional regional correctional facilities.',
    responsibleParties: ['Legislative Budget Committee', 'State DOC Evaluation Unit', 'ACS Data Science Team'],
    keyMilestones: [
      {
        title: '6-Month & 12-Month Employment Retention Audit',
        description: 'Auditing sustained wage growth and job retention across manufacturing, IT, and administrative sectors.',
        complianceRef: 'WIOA Sec. 134 Performance'
      },
      {
        title: 'Taxpayer Cost Avoidance Calculation',
        description: 'Quantifying net institutional savings ($36,100 per graduate) derived from avoided re-incarceration.',
        complianceRef: 'ACS-RES-RECIDIVISM-2025'
      },
      {
        title: 'Statewide Facility Expansion Rollout',
        description: 'Replicating proven model across 5–10 state correctional facilities and county detention centers.',
        complianceRef: 'State Appropriation Expansion'
      }
    ],
    agencyDeliverables: [
      'Annual Legislative Impact & Cost Avoidance Report',
      'Peer-Reviewed 3-Year Recidivism Comparison Study',
      'Statewide Multi-Facility Expansion Plan'
    ],
    riskMitigation: 'Continuous data syncing with state workforce databases ensures transparent long-term tracking.',
    leadershipFocus: 'Present economic ROI findings to governor and legislative budget committees for recurring funding.',
    itSecurityFocus: 'Perform annual security re-assessment and model framework updates.',
    programOfficerFocus: 'Onboard senior graduates as peer mentors for incoming cohorts.'
  }
];

export function ImplementationRoadmap() {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('phase-1-assessment');
  const [perspectiveFilter, setPerspectiveFilter] = useState<'all' | 'leadership' | 'itSecurity' | 'programOfficer'>('all');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const selectedPhase = IMPLEMENTATION_PHASES.find((p) => p.id === selectedPhaseId) || IMPLEMENTATION_PHASES[0];

  const handleDownloadRoadmapBlueprint = () => {
    const textContent = `===================================================================
ADVANCED CREATION STUDIO - PUBLIC SECTOR IMPLEMENTATION BLUEPRINT
GOVERNMENT AI-DRIVEN RECIDIVISM PROGRAM DEPLOYMENT ROADMAP
CAGE CODE: 9K8B2 | UEI: ACS-8902-FED
===================================================================

PROGRAM SUMMARY:
A 5-stage turnkey deployment framework for state and federal correctional agencies to deploy secure, NIST AI RMF 1.0 compliant vocational training and rapid 72-hour reentry programs.

-------------------------------------------------------------------
PHASE 1: ${IMPLEMENTATION_PHASES[0].title} (${IMPLEMENTATION_PHASES[0].timeframe})
-------------------------------------------------------------------
Overview: ${IMPLEMENTATION_PHASES[0].overview}
Key Milestones:
${IMPLEMENTATION_PHASES[0].keyMilestones.map((m) => ` - ${m.title}: ${m.description} [${m.complianceRef}]`).join('\n')}
Agency Deliverables:
${IMPLEMENTATION_PHASES[0].agencyDeliverables.map((d) => ` * ${d}`).join('\n')}

-------------------------------------------------------------------
PHASE 2: ${IMPLEMENTATION_PHASES[1].title} (${IMPLEMENTATION_PHASES[1].timeframe})
-------------------------------------------------------------------
Overview: ${IMPLEMENTATION_PHASES[1].overview}
Key Milestones:
${IMPLEMENTATION_PHASES[1].keyMilestones.map((m) => ` - ${m.title}: ${m.description} [${m.complianceRef}]`).join('\n')}

-------------------------------------------------------------------
PHASE 3: ${IMPLEMENTATION_PHASES[2].title} (${IMPLEMENTATION_PHASES[2].timeframe})
-------------------------------------------------------------------
Overview: ${IMPLEMENTATION_PHASES[2].overview}
Key Milestones:
${IMPLEMENTATION_PHASES[2].keyMilestones.map((m) => ` - ${m.title}: ${m.description} [${m.complianceRef}]`).join('\n')}

-------------------------------------------------------------------
PHASE 4: ${IMPLEMENTATION_PHASES[3].title} (${IMPLEMENTATION_PHASES[3].timeframe})
-------------------------------------------------------------------
Overview: ${IMPLEMENTATION_PHASES[3].overview}
Key Milestones:
${IMPLEMENTATION_PHASES[3].keyMilestones.map((m) => ` - ${m.title}: ${m.description} [${m.complianceRef}]`).join('\n')}

-------------------------------------------------------------------
PHASE 5: ${IMPLEMENTATION_PHASES[4].title} (${IMPLEMENTATION_PHASES[4].timeframe})
-------------------------------------------------------------------
Overview: ${IMPLEMENTATION_PHASES[4].overview}
Key Milestones:
${IMPLEMENTATION_PHASES[4].keyMilestones.map((m) => ` - ${m.title}: ${m.description} [${m.complianceRef}]`).join('\n')}

===================================================================
CONTRACTING & DEPLOYMENT ASSISTANCE:
Email: gov@advancedcreationstudio.com
Web: https://advancedcreationstudio.com
SAM.gov Active Vendor • NAICS 513199, 611430, 611710, 541511
===================================================================
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ACS_Government_AI_Implementation_Blueprint_2025.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Turnkey Agency Deployment Lifecycle</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI Recidivism Program Implementation Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              An interactive 5-phase operational timeline for state DOC secretaries, agency CIOs, and workforce directors to deploy NIST AI RMF 1.0 compliant reentry bootcamps from contract sign-off to 3-year longitudinal ROI scaling.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <button
              onClick={handleDownloadRoadmapBlueprint}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Agency Blueprint</span>
            </button>
            {downloadSuccess && (
              <span className="text-[11px] font-mono text-emerald-400 text-center animate-fadeIn">
                ✓ Downloaded Implementation Packet
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Role-Based Perspective Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-500" />
          <span>Role Focus Filter:</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'All Operations' },
            { id: 'leadership', label: 'Agency Leadership & DOC Secretaries' },
            { id: 'itSecurity', label: 'CIO, IT & NIST Security Teams' },
            { id: 'programOfficer', label: 'Facility Education & Reentry Officers' }
          ].map((role) => (
            <button
              key={role.id}
              onClick={() => setPerspectiveFilter(role.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                perspectiveFilter === role.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Timeline Stepper Bar */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Deployment Duration: Weeks 1 – Months 12+</span>
          </span>
          <span>Click a phase below to inspect details</span>
        </div>

        {/* Horizontal Timeline Connector (Desktop/Tablet) */}
        <div className="relative">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
            {IMPLEMENTATION_PHASES.map((phase) => {
              const isSelected = phase.id === selectedPhaseId;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhaseId(phase.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 relative group ${
                    isSelected
                      ? 'bg-slate-950 border-emerald-500 text-white ring-2 ring-emerald-500/30 shadow-xl scale-[1.02]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                        isSelected
                          ? phase.badgeColor
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      STEP 0{phase.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{phase.timeframe}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-xs sm:text-sm leading-snug line-clamp-2 text-white">
                      {phase.title}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                    <span className={isSelected ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                      {isSelected ? '● Active Phase' : 'Inspect'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-emerald-400' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Phase Deep Dive Specification */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhase.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-6 relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${selectedPhase.glowColor} rounded-full blur-3xl pointer-events-none`} />

          {/* Phase Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-bold border ${selectedPhase.badgeColor}`}>
                  Phase {selectedPhase.stepNumber} • {selectedPhase.timeframe}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Operational Milestone Roadmap
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedPhase.title}
              </h3>

              <p className="text-xs sm:text-sm text-sky-400 font-medium">
                {selectedPhase.subtitle}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 shrink-0 font-mono text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Responsible Leads:</span>
              <div className="flex flex-wrap gap-1 pt-1">
                {selectedPhase.responsibleParties.map((party, pIdx) => (
                  <span key={pIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                    {party}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Executive Phase Summary */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10 space-y-2">
            <div className="font-bold text-white uppercase text-xs tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Phase Overview & Operational Strategy</span>
            </div>
            <p>{selectedPhase.overview}</p>
          </div>

          {/* Role Perspective Focus Callouts (If Filter Active) */}
          {perspectiveFilter !== 'all' && (
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-xs text-slate-200 space-y-1 relative z-10 animate-fadeIn">
              <div className="font-bold text-blue-400 flex items-center gap-2 text-xs uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>
                  {perspectiveFilter === 'leadership' && 'Agency Leadership Action Items:'}
                  {perspectiveFilter === 'itSecurity' && 'IT & NIST Security Action Items:'}
                  {perspectiveFilter === 'programOfficer' && 'Facility Education & Reentry Action Items:'}
                </span>
              </div>
              <p className="text-slate-200 font-medium leading-relaxed">
                {perspectiveFilter === 'leadership' && selectedPhase.leadershipFocus}
                {perspectiveFilter === 'itSecurity' && selectedPhase.itSecurityFocus}
                {perspectiveFilter === 'programOfficer' && selectedPhase.programOfficerFocus}
              </p>
            </div>
          )}

          {/* Key Operational Milestones Grid */}
          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Phase Milestones & Compliance Benchmarks</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedPhase.keyMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>Milestone 0{idx + 1}</span>
                    {milestone.complianceRef && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                        {milestone.complianceRef}
                      </span>
                    )}
                  </div>
                  <h5 className="font-bold text-sm text-sky-300">
                    {milestone.title}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Agency Deliverables & Risk Mitigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 text-xs">
            {/* Deliverables */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="font-bold uppercase text-emerald-400 tracking-wider text-[11px] flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Required Agency Deliverables:</span>
              </h5>
              <ul className="space-y-1.5 text-slate-300 font-medium">
                {selectedPhase.agencyDeliverables.map((deliv, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk Mitigation */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="font-bold uppercase text-amber-400 tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Security & Risk Mitigation Safeguard:</span>
              </h5>
              <p className="text-slate-300 leading-relaxed">
                {selectedPhase.riskMitigation}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
