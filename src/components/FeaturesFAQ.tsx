import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  ShieldCheck,
  FileCheck2,
  Building2,
  Lock,
  GraduationCap,
  Award,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Contracting & Procurement' | 'NIST & Compliance' | 'In-Facility & Delivery' | 'Funding & Grants';
  highlights?: string[];
}

export const FEATURE_FAQS: FAQItem[] = [
  {
    id: 'procurement-mechanisms',
    category: 'Contracting & Procurement',
    question: 'What contract mechanisms and procurement vehicles can agencies use to acquire ACS training and features?',
    answer: 'Advanced Creation Studio is a fully registered SAM.gov government vendor with an active CAGE code and primary NAICS codes for Educational Services (513199, 611430, 611710) and Custom Computer Programming (541511). Agencies can procure our courses, bootcamps, and software features via direct micro-purchases (under $10,000 threshold), simplified acquisition procedures (SAP), sole-source justification agreements, or as a subrecipient under state and federal workforce development grants.',
    highlights: ['Active SAM.gov & CAGE Registration', 'Micro-Purchase Eligible (<$10k)', 'Sole-Source & Subrecipient Compliant']
  },
  {
    id: 'nist-compliance',
    category: 'NIST & Compliance',
    question: 'Are your AI courses and tools aligned with the NIST AI Risk Management Framework (RMF 1.0)?',
    answer: 'Yes. All ACS AI course materials and AI software tools strictly adhere to the four pillars of the NIST AI Risk Management Framework (Govern, Map, Measure, Manage) and the Executive Order on Safe, Secure, and Trustworthy AI. We teach non-hallucinatory, deterministic prompt engineering, audit-friendly logging, source grounding, and demographic bias auditing to ensure government data sovereignty and public trust.',
    highlights: ['NIST AI RMF 1.0 Mapped', 'Zero-Data Retention Options', 'OMB AI Policy Compliant']
  },
  {
    id: 'facility-delivery',
    category: 'In-Facility & Delivery',
    question: 'Can bootcamps and classes be delivered inside secure correctional facilities or air-gapped environments?',
    answer: 'Absolutely. We offer flexible hybrid delivery models, including on-site instructor-led workshops inside state correctional facilities, community tech hubs, and agency headquarters. For secure environments without live internet access, ACS provides pre-configured, offline-capable AI sandbox kits and localized LMS learning packages that comply with Department of Corrections IT safety protocols.',
    highlights: ['In-Facility Instructor On-Site', 'Air-Gapped Offline Sandbox Kits', 'State DOC Security Vetted']
  },
  {
    id: 'grant-funding-wotc',
    category: 'Funding & Grants',
    question: 'Can agencies utilize WIOA, Second Chance Act, or federal grant funds to subsidize program costs?',
    answer: 'Yes. ACS programs are specifically structured to qualify for state and federal funding streams, including the Workforce Innovation and Opportunity Act (WIOA Title I), Second Chance Act Reentry Grants, DOJ Bureau of Justice Assistance (BJA) awards, and local Workforce Development Board allocations. Additionally, we assist employer partners in navigating Work Opportunity Tax Credits (WOTC) worth up to $9,600 per eligible returning citizen hire.',
    highlights: ['WIOA Title I Eligible', 'Second Chance Act Grant Friendly', 'WOTC Tax Credit Assistance']
  },
  {
    id: 'custom-curriculum',
    category: 'Contracting & Procurement',
    question: 'Can the curriculum be customized to incorporate our agency’s proprietary SOPs and workflows?',
    answer: 'Yes. For group cohorts of 10 or more participants, ACS instructional designers partner with your leadership team to integrate agency-specific forms, RFP templates, policy codes, and administrative workflows directly into the hands-on lab exercises. This ensures staff learn on the exact tools and documents they use every day.',
    highlights: ['Custom SOP Case Studies', 'Proprietary Prompt Libraries', 'Agency-Branded Courseware']
  },
  {
    id: 'credentials-certificates',
    category: 'NIST & Compliance',
    question: 'What official credentials, digital badges, or certificates do participants earn upon completion?',
    answer: 'Upon passing course assessments, graduates receive verifiable digital credentials (e.g., ACS Certified Public Sector Prompt Architect, ACS Government AI Ethics Officer). These credentials include tamper-proof metadata verifying the total training hours, NIST compliance units completed, and specific skill competencies mastered.',
    highlights: ['Tamper-Proof Digital Credentials', 'LinkedIn Verifiable Badges', 'Professional Development Units (PDUs)']
  }
];

export function FeaturesFAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('procurement-mechanisms');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const filteredFaqs = FEATURE_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      (faq.highlights && faq.highlights.some((h) => h.toLowerCase().includes(faqSearch.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-8 relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Government Contracting & Implementation FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Clear answers regarding procurement, NIST compliance, grant funding eligibility, and secure facility delivery.
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium relative z-10">
        <span className="text-slate-400 font-bold mr-1">Filter Topic:</span>
        {['All', 'Contracting & Procurement', 'NIST & Compliance', 'In-Facility & Delivery', 'Funding & Grants'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeCategory === cat
                ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/25'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4 relative z-10">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-slate-950/90 border-blue-500/80 ring-1 ring-blue-500/20 shadow-lg'
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl shrink-0 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {faq.category === 'Contracting & Procurement' && <Building2 className="w-4 h-4" />}
                    {faq.category === 'NIST & Compliance' && <ShieldCheck className="w-4 h-4" />}
                    {faq.category === 'In-Facility & Delivery' && <Lock className="w-4 h-4" />}
                    {faq.category === 'Funding & Grants' && <Award className="w-4 h-4" />}
                  </div>
                  <span>{faq.question}</span>
                </div>

                <div className="shrink-0 p-1 rounded-lg bg-slate-800/80 text-slate-400">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <p>{faq.answer}</p>

                    {faq.highlights && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {faq.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold"
                          >
                            <FileCheck2 className="w-3.5 h-3.5 text-blue-400" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-400 text-xs">
            No matching questions found for "{faqSearch}".
          </div>
        )}
      </div>

      {/* Bottom Trust Banner & Support CTA */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/40 shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">Have a Specific Procurement or Sole-Source Question?</div>
            <div className="text-slate-300">Our government contracting specialists can assist with SAM.gov CAGE details, sole-source justification letters, and grant proposals.</div>
          </div>
        </div>

        <a
          href="mailto:contracting@advancedcreationstudio.org"
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shrink-0 transition-all shadow-md shadow-blue-600/30 flex items-center gap-2"
        >
          <span>Contact Contracting Team</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
