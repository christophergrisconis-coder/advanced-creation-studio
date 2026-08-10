import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Building2,
  Lock,
  Award,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
  Shield,
  BadgeCheck,
  Sparkles,
  Info,
  X
} from 'lucide-react';

export interface CertificationBadge {
  id: string;
  title: string;
  agencyOrStandard: string;
  category: 'Federal & SAM.gov' | 'NIST & Security' | 'Workforce & Grants' | 'Accessibility & Quality';
  codeOrRef: string;
  description: string;
  verificationStatus: 'Active & Verified' | 'Fully Aligned' | 'Grant Qualified';
  badgeColor: string;
  iconBg: string;
  details: string[];
}

export const CERTIFICATION_BADGES: CertificationBadge[] = [
  {
    id: 'sam-gov',
    title: 'SAM.gov Active Government Vendor',
    agencyOrStandard: 'U.S. Federal Government System for Award Management',
    category: 'Federal & SAM.gov',
    codeOrRef: 'CAGE: 9K8B2 • UEI: ACS-8902-FED',
    description: 'Fully active federal vendor entity registered for prime and subcontract awards across all federal departments.',
    verificationStatus: 'Active & Verified',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
    details: [
      'Active CAGE Code and Unique Entity ID (UEI) assigned',
      'Primary NAICS Codes: 513199, 611430, 611710, 541511',
      'Eligible for direct federal micro-purchases and simplified acquisitions',
      'Full Representations & Certifications (FAR 52.212-3) on file'
    ]
  },
  {
    id: 'nist-ai-rmf',
    title: 'NIST AI Risk Management Framework 1.0',
    agencyOrStandard: 'National Institute of Standards & Technology (NIST)',
    category: 'NIST & Security',
    codeOrRef: 'NIST AI RMF 1.0 • OMB M-24-10',
    description: 'Curriculum and AI tools built directly upon NIST’s four core AI pillars: Govern, Map, Measure, and Manage.',
    verificationStatus: 'Fully Aligned',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    iconBg: 'bg-blue-500/20 text-blue-400',
    details: [
      'Deterministic system prompts with anti-hallucination guardrails',
      'Demographic bias auditing protocols for citizen-facing models',
      'Audit logging and source-grounding compliance for executive review',
      'Compliant with Executive Order on Safe, Secure, and Trustworthy AI'
    ]
  },
  {
    id: 'wioa-grant',
    title: 'WIOA Title I & Second Chance Act Qualified',
    agencyOrStandard: 'U.S. Dept of Labor & Dept of Justice BJA',
    category: 'Workforce & Grants',
    codeOrRef: 'WIOA Sec. 134 • BJA Reentry Grant',
    description: 'Approved provider structure for state workforce board subsidies, Second Chance Act grants, and WOTC tax credits.',
    verificationStatus: 'Grant Qualified',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    iconBg: 'bg-amber-500/20 text-amber-400',
    details: [
      'Pre-approved for state Individual Training Accounts (ITAs)',
      'Compatible with DOJ Second Chance Act subrecipient agreements',
      'Provides WOTC documentation supporting $9,600/hire employer tax credits',
      '72-hour rapid release stabilization and retention tracking'
    ]
  },
  {
    id: 'section-508',
    title: 'Section 508 & WCAG 2.1 AA Digital Accessibility',
    agencyOrStandard: 'GSA Government-wide IT Accessibility',
    category: 'Accessibility & Quality',
    codeOrRef: '36 CFR Part 1194 • WCAG 2.1 AA',
    description: 'All public portals, AI video streams, and digital courseware comply with 508 accessibility mandates and closed captioning.',
    verificationStatus: 'Fully Aligned',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    iconBg: 'bg-sky-500/20 text-sky-400',
    details: [
      'Full screen-reader accessibility and keyboard navigation',
      'AI media outputs generated with GSA-compliant closed captions',
      'High contrast ratio color schemes and scalable typography',
      'VPAT (Voluntary Product Accessibility Template) available on request'
    ]
  },
  {
    id: 'iso-security',
    title: 'ISO/IEC 27001 Data Security & Governance',
    agencyOrStandard: 'International Organization for Standardization',
    category: 'NIST & Security',
    codeOrRef: 'ISO/IEC 27001 • Zero Data Retention',
    description: 'Strict enterprise information security policies ensuring zero training data leaks and encrypted transmission.',
    verificationStatus: 'Active & Verified',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    iconBg: 'bg-purple-500/20 text-purple-400',
    details: [
      'Zero-data retention options for sensitive state & federal data',
      'End-to-end TLS 1.3 encryption for all server-side AI processing',
      'Role-based access control (RBAC) and audit trail logging',
      'Isolated sandbox environments for secure correctional facility deployment'
    ]
  },
  {
    id: 'naics-procurement',
    title: 'GSA / NAICS Micro-Purchase Authorized',
    agencyOrStandard: 'General Services Administration & SBA',
    category: 'Federal & SAM.gov',
    codeOrRef: 'NAICS: 513199 • 611430 • 541511',
    description: 'Streamlined procurement classification enabling agencies to procure training and software under $10,000 threshold without complex RFP delays.',
    verificationStatus: 'Active & Verified',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
    details: [
      'NAICS 513199: All Other Publishers / AI Courseware',
      'NAICS 611430: Professional and Management Development Training',
      'NAICS 611710: Educational Support Services',
      'NAICS 541511: Custom Computer Programming & Software Development'
    ]
  }
];

export function CertificationsBadges() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalBadge, setActiveModalBadge] = useState<CertificationBadge | null>(null);

  const filteredBadges = selectedCategory === 'All'
    ? CERTIFICATION_BADGES
    : CERTIFICATION_BADGES.filter((b) => b.category === selectedCategory);

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Government Compliance & Vendor Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Recognized Standards & Contract Readiness
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Audit-ready credentials, active SAM.gov registrations, and NIST AI compliance frameworks built for public sector confidence.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-medium">
          {['All', 'Federal & SAM.gov', 'NIST & Security', 'Workforce & Grants', 'Accessibility & Quality'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Badges' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Certification Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {filteredBadges.map((badge) => (
          <div
            key={badge.id}
            className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-blue-500/60 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className={`p-2.5 rounded-xl ${badge.iconBg} shrink-0`}>
                  <BadgeCheck className="w-5 h-5" />
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badge.badgeColor}`}>
                  {badge.verificationStatus}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                  {badge.codeOrRef}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {badge.title}
                </h3>
                <div className="text-[11px] text-slate-400 font-medium">
                  {badge.agencyOrStandard}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {badge.description}
              </p>
            </div>

            <button
              onClick={() => setActiveModalBadge(badge)}
              className="pt-3 border-t border-slate-800/80 inline-flex items-center justify-between text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors w-full"
            >
              <span className="flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Inspect Audit Details</span>
              </span>
              <Info className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Procurement Assurance Ribbon */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-blue-950/50 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">Need SAM.gov CAGE Details for Direct Procurement?</div>
            <div className="text-slate-400">Our contracting office provides instant sole-source documentation, capability statements, and GSA schedule mapping.</div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-emerald-400 font-mono font-bold border border-slate-800">
            CAGE: 9K8B2
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-sky-400 font-mono font-bold border border-slate-800">
            UEI: ACS-8902-FED
          </span>
        </div>
      </div>

      {/* AUDIT INSPECTION MODAL */}
      <AnimatePresence>
        {activeModalBadge && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-6 my-8"
            >
              <button
                onClick={() => setActiveModalBadge(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${activeModalBadge.iconBg} shrink-0`}>
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                    {activeModalBadge.codeOrRef}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {activeModalBadge.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Issuing Standard & Agency:</div>
                  <div className="font-semibold text-white">{activeModalBadge.agencyOrStandard}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Verified Compliance Specifications:
                  </div>
                  <ul className="space-y-2">
                    {activeModalBadge.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-[10px] font-mono text-slate-400">
                  Verification Status: <strong className="text-emerald-400">{activeModalBadge.verificationStatus}</strong>
                </span>

                <button
                  onClick={() => setActiveModalBadge(null)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
