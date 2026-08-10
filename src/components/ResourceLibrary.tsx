import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Download,
  Search,
  Filter,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Info,
  X,
  FileCheck2,
  Sparkles,
  Building2,
  Clock,
  Layers,
  Award
} from 'lucide-react';

export interface ResourceDocument {
  id: string;
  title: string;
  category: 'NIST & Security' | 'Procurement & SAM.gov' | 'Reentry & Recidivism' | 'AI Training & Workforce' | 'Workforce & Grants';
  docType: 'Whitepaper' | 'Implementation Guide' | 'Procurement Toolkit' | 'Research Brief' | 'Compliance Matrix';
  documentId: string;
  publishDate: string;
  pageCount: number;
  fileSize: string;
  summary: string;
  topics: string[];
  tableOfContents: string[];
  targetAudience: string;
  complianceRef: string;
}

export const RESOURCE_DOCUMENTS: ResourceDocument[] = [
  {
    id: 'nist-ai-rmf-guide',
    title: 'NIST AI Risk Management Framework (RMF 1.0) Public Sector Implementation Guide',
    category: 'NIST & Security',
    docType: 'Implementation Guide',
    documentId: 'ACS-PUB-NIST-2025-V1',
    publishDate: 'January 2025',
    pageCount: 28,
    fileSize: '4.2 MB',
    summary: 'A step-by-step technical and operational manual for state and federal agency CIOs implementing generative AI models in compliance with OMB M-24-10 and NIST AI RMF 1.0.',
    topics: ['NIST AI RMF 1.0', 'OMB M-24-10', 'Bias Auditing', 'Prompt Guardrails', 'Executive Oversight'],
    tableOfContents: [
      '1. Executive Order 14110 & OMB M-24-10 Mandates Summary',
      '2. The Four NIST Pillars: Govern, Map, Measure, Manage',
      '3. Technical Architectures for Zero-Data Retention Server Proxying',
      '4. Demographic Bias & Algorithmic Impact Assessment Protocols',
      '5. Continuous Audit Trail & Logging Checklists for Agency IT Teams'
    ],
    targetAudience: 'Agency CIOs, CTOs, Chief AI Officers, Compliance Auditors',
    complianceRef: 'NIST AI RMF 1.0 • OMB M-24-10 • FAR 39'
  },
  {
    id: 'recidivism-roi-whitepaper',
    title: '2025 National Recidivism Reduction & AI Vocational Training Economic Impact Report',
    category: 'Reentry & Recidivism',
    docType: 'Whitepaper',
    documentId: 'ACS-RES-RECIDIVISM-2025',
    publishDate: 'February 2025',
    pageCount: 42,
    fileSize: '6.8 MB',
    summary: 'Audited 3-year longitudinal study analyzing the fiscal and social impact of pre-release AI literacy and technical office automation bootcamps across state correctional facilities.',
    topics: ['Recidivism Reduction', 'Taxpayer Cost Avoidance', 'Pre-Release Tech Training', 'Wage Growth'],
    tableOfContents: [
      '1. Multi-State Baseline vs. ACS Reentry Cohort Analysis',
      '2. 3-Year Cumulative Recidivism Comparison (19.6% vs 62.8%)',
      '3. Taxpayer Cost Savings Calculations ($36,100 / Graduate Net)',
      '4. Post-Release Employment Retention & Hourly Wage Liftoff Curves',
      '5. Employer Network Integration & 72-Hour Rapid Stabilization'
    ],
    targetAudience: 'State DOC Secretaries, Legislative Budget Committees, Reentry Directors',
    complianceRef: 'Second Chance Act Grants • WIOA Title I'
  },
  {
    id: 'sam-procurement-toolkit',
    title: 'SAM.gov & Micro-Purchase Direct Procurement Toolkit for State & Federal Agencies',
    category: 'Procurement & SAM.gov',
    docType: 'Procurement Toolkit',
    documentId: 'ACS-PROC-SAM-2025',
    publishDate: 'December 2024',
    pageCount: 16,
    fileSize: '2.1 MB',
    summary: 'Sole-source justification templates, CAGE code mapping (9K8B2), NAICS code breakdowns, and micro-purchase threshold ordering guidelines for simplified contracting.',
    topics: ['SAM.gov CAGE 9K8B2', 'Sole-Source Justification', 'FAR 52.212-3', 'Micro-Purchases'],
    tableOfContents: [
      '1. Vendor Overview & CAGE/UEI Verification Summary',
      '2. Primary NAICS Codes Breakdown (513199, 611430, 611710, 541511)',
      '3. FAR 13.106-1 Single-Source Justification Template Language',
      '4. Subrecipient Agreement Models for State Workforce Grants',
      '5. Standard Purchase Order & Credit Card Cardholder Checklists'
    ],
    targetAudience: 'Contracting Officers, Contracting Officer Representatives (CORs), Procurement Directors',
    complianceRef: 'CAGE Code: 9K8B2 • UEI: ACS-8902-FED • FAR Part 13'
  },
  {
    id: 'public-sector-ai-bootcamp-syllabus',
    title: 'Public Sector AI Literacy & Office Automation Master Curriculum Standard',
    category: 'AI Training & Workforce',
    docType: 'Compliance Matrix',
    documentId: 'ACS-EDU-SYLLABUS-2025',
    publishDate: 'January 2025',
    pageCount: 34,
    fileSize: '3.9 MB',
    summary: 'Comprehensive 12-week courseware breakdown, lab exercises, assessment rubrics, and industry certificate standards for public sector employee upskilling.',
    topics: ['Generative AI Bootcamps', 'Prompt Engineering', 'Document Automation', '4K Video Scripting'],
    tableOfContents: [
      '1. Module 1: Prompt Engineering for Administrative Automation',
      '2. Module 2: Document Processing, OCR, & Policy Synthesis',
      '3. Module 3: Generative 4K Video Production for Agency Communications',
      '4. Module 4: Responsible AI Ethics & Data Privacy Standards',
      '5. Capstone Project Rubric & Industry Certification Standards'
    ],
    targetAudience: 'Workforce Board Directors, HR & Training Officers, Higher Ed Partners',
    complianceRef: 'WIOA Sec. 134 • Industry Skill Framework 2025'
  },
  {
    id: 'wotc-second-chance-playbook',
    title: 'Work Opportunity Tax Credit (WOTC) & Second Chance Act Subrecipient Playbook',
    category: 'Workforce & Grants',
    docType: 'Research Brief',
    documentId: 'ACS-GRANT-WOTC-2025',
    publishDate: 'November 2024',
    pageCount: 22,
    fileSize: '3.1 MB',
    summary: 'Guide for employer partners and agency grantees on unlocking up to $9,600 in WOTC tax credits per qualified justice-involved hire while leveraging federal grant funds.',
    topics: ['WOTC Tax Credits', 'Second Chance Act', 'Employer Incentives', 'Wage Retention'],
    tableOfContents: [
      '1. IRS Form 8850 & ETA Form 9061 Filing Workflows',
      '2. Target Group Qualifications: Returning Citizens & Veterans',
      '3. Stackable Tax Incentives & Local Municipal Offsets',
      '4. Employer Partner Network Setup & Documentation Verification',
      '5. Case Studies on Private Sector Hiring Partner ROI'
    ],
    targetAudience: 'Grant Managers, Reentry Employment Specialists, Enterprise Hiring Partners',
    complianceRef: 'IRS Section 51 • DOJ BJA Second Chance Grant'
  },
  {
    id: 'section-508-vpat-report',
    title: 'Section 508 & WCAG 2.1 AA Digital Accessibility & VPAT Compliance Report',
    category: 'NIST & Security',
    docType: 'Compliance Matrix',
    documentId: 'ACS-ACC-508-VPAT-2025',
    publishDate: 'January 2025',
    pageCount: 19,
    fileSize: '2.5 MB',
    summary: 'Detailed Voluntary Product Accessibility Template (VPAT 2.4) evaluating Advanced Creation Studio digital portals and AI video delivery platforms against GSA accessibility guidelines.',
    topics: ['Section 508', 'WCAG 2.1 AA', 'Screen Reader Accessibility', 'Closed Captioning'],
    tableOfContents: [
      '1. Summary Table of Conformance (VPAT 2.4 Rev)',
      '2. Chapter 3: Functional Performance Criteria Assessment',
      '3. Chapter 5: Software & Digital Content Specifications',
      '4. Closed Captioning Standards for AI 4K Generated Video',
      '5. Keyboard Navigation & Assistive Technology Test Results'
    ],
    targetAudience: 'GSA Accessibility Officers, Digital Experience (DX) Directors',
    complianceRef: '36 CFR Part 1194 • WCAG 2.1 AA'
  }
];

export function ResourceLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDocModal, setActiveDocModal] = useState<ResourceDocument | null>(null);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const filteredDocs = RESOURCE_DOCUMENTS.filter((doc) => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.documentId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSimulatedDownload = (doc: ResourceDocument) => {
    // Create a simulated text blob to download
    const blobContent = `===================================================================
ADVANCED CREATION STUDIO - PUBLIC SECTOR RESOURCE LIBRARY
DOCUMENT TITLE: ${doc.title}
DOCUMENT ID: ${doc.documentId}
PUBLISH DATE: ${doc.publishDate} | PAGES: ${doc.pageCount} | SIZE: ${doc.fileSize}
COMPLIANCE REF: ${doc.complianceRef}
TARGET AUDIENCE: ${doc.targetAudience}
===================================================================

EXECUTIVE SUMMARY:
${doc.summary}

TABLE OF CONTENTS:
${doc.tableOfContents.map((item) => ` - ${item}`).join('\n')}

KEY TOPICS & COMPLIANCE KEYWORDS:
${doc.topics.join(', ')}

===================================================================
SAM.GOV VENDOR DETAILS:
CAGE Code: 9K8B2 | UEI: ACS-8902-FED
Web: https://advancedcreationstudio.com
Contracting Email: gov@advancedcreationstudio.com
===================================================================
`;

    const blob = new Blob([blobContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.documentId}_Executive_Brief.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccessMessage(`Downloaded executive packet for "${doc.title}".`);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 3500);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Public Sector Knowledge Base & Whitepaper Library</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Government AI Resource & Compliance Library
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Download peer-reviewed whitepapers, NIST AI RMF compliance matrices, SAM.gov procurement toolkits, and audited economic ROI studies designed for agency leadership.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 space-y-1 shrink-0">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>All Documents Publicly Accessible</span>
            </div>
            <div className="text-[11px] text-slate-400">PDF & Plain-text executive downloads ready</div>
          </div>
        </div>

        {/* Success toast notification */}
        <AnimatePresence>
          {downloadSuccessMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 relative z-10"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{downloadSuccessMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search resources by title, keyword (e.g., NIST, CAGE, WIOA, Recidivism)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {['All', 'NIST & Security', 'Procurement & SAM.gov', 'Reentry & Recidivism', 'AI Training & Workforce'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? 'All Publications' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between space-y-5 group"
          >
            <div className="space-y-3">
              {/* Top Meta Header */}
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
                  {doc.docType}
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  {doc.fileSize} • {doc.pageCount} Pages
                </span>
              </div>

              {/* Title & Document ID */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-sky-500 dark:text-sky-400">
                  {doc.documentId}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {doc.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {doc.summary}
              </p>

              {/* Topic Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {doc.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <button
                onClick={() => setActiveDocModal(doc)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Preview Details</span>
              </button>

              <button
                onClick={() => handleSimulatedDownload(doc)}
                className="py-2 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Brief</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDocs.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">No documents match your query</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try resetting your search query or selecting a different category filter above.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* INSPECTION PREVIEW MODAL */}
      <AnimatePresence>
        {activeDocModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6 my-8"
            >
              <button
                onClick={() => setActiveDocModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
                    {activeDocModal.docType}
                  </span>
                  <span className="font-mono text-sky-400 font-bold">
                    {activeDocModal.documentId}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeDocModal.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span>Published: {activeDocModal.publishDate}</span>
                  <span>•</span>
                  <span>Length: {activeDocModal.pageCount} Pages</span>
                  <span>•</span>
                  <span>Format: PDF / Text ({activeDocModal.fileSize})</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400">
                    Executive Summary:
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {activeDocModal.summary}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400">
                    Table of Contents Preview:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    {activeDocModal.tableOfContents.map((tocItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{tocItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Target Audience:</div>
                    <div className="text-slate-200 font-medium">{activeDocModal.targetAudience}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Compliance Benchmark:</div>
                    <div className="text-emerald-400 font-mono font-bold">{activeDocModal.complianceRef}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400 font-mono">
                  Vendor CAGE: 9K8B2 | SAM.gov Active
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveDocModal(null)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      handleSimulatedDownload(activeDocModal);
                      setActiveDocModal(null);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Executive Brief</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
