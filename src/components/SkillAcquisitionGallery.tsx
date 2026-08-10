import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  BadgeCheck,
  ShieldCheck,
  Search,
  BookOpen,
  Terminal,
  Video,
  FileCheck2,
  Briefcase,
  Users,
  X,
  ExternalLink,
  Layers,
  GraduationCap
} from 'lucide-react';

export interface DigitalBadge {
  id: string;
  title: string;
  category: 'Prompt & Automation' | 'Governance & Security' | 'Media Creation' | 'Reentry & Workforce';
  level: 'Fundamental' | 'Advanced' | 'Master Professional';
  icon: string;
  badgeGradient: string;
  borderColor: string;
  textColor: string;
  competencyMastered: string;
  courseModule: string;
  practicalSkills: string[];
  credentialCode: string;
  employerValue: string;
}

export const DIGITAL_BADGES: DigitalBadge[] = [
  {
    id: 'badge-prompt-spec',
    title: 'AI Prompt Engineering Specialist',
    category: 'Prompt & Automation',
    level: 'Advanced',
    icon: 'Terminal',
    badgeGradient: 'from-blue-600 via-indigo-600 to-sky-500',
    borderColor: 'border-blue-500/40',
    textColor: 'text-blue-400',
    competencyMastered: 'Mastery in constructing deterministic multi-step system prompts, few-shot context conditioning, anti-hallucination guardrails, and structured JSON output parsing for government administrative systems.',
    courseModule: 'Course 01 • Module 2: Advanced System Prompting & Guardrails',
    practicalSkills: [
      'Zero-shot & Few-shot prompt engineering',
      'System-level anti-hallucination constraints',
      'Structured JSON & XML output formatting',
      'Context window optimization & token budgeting'
    ],
    credentialCode: 'ACS-BADGE-PROMPT-2025',
    employerValue: 'Qualifies graduates for AI Operations Coordinator, Prompt Designer, and Administrative Automation Specialist roles.'
  },
  {
    id: 'badge-nist-auditor',
    title: 'NIST AI Governance Auditor',
    category: 'Governance & Security',
    level: 'Master Professional',
    icon: 'ShieldCheck',
    badgeGradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    competencyMastered: 'Comprehensive mastery of the NIST AI Risk Management Framework (RMF 1.0) and OMB M-24-10, verifying demographic fairness, algorithmic audit logging, and risk mitigation across public sector deployments.',
    courseModule: 'Course 04 • Module 3: NIST RMF & Executive AI Auditing',
    practicalSkills: [
      'NIST AI RMF 1.0 Govern/Map/Measure/Manage controls',
      'Demographic bias auditing & fairness testing',
      'OMB M-24-10 compliance checklist verification',
      'Audit log evaluation & AI impact assessment'
    ],
    credentialCode: 'ACS-BADGE-NIST-2025',
    employerValue: 'Prepares graduates for agency AI Compliance Officer, IT Quality Assurance, and Public Sector Risk Analyst roles.'
  },
  {
    id: 'badge-video-director',
    title: 'Generative 4K Video Producer',
    category: 'Media Creation',
    level: 'Advanced',
    icon: 'Video',
    badgeGradient: 'from-purple-600 via-pink-600 to-rose-500',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
    competencyMastered: 'Proficiency in end-to-end generative AI video creation: multi-scene prompt scripting, realistic voiceover synthesis, 4K resolution upscaling, and Section 508 closed captioning.',
    courseModule: 'Course 03 • Module 1 & 2: Generative Video & Audio Synthesis',
    practicalSkills: [
      'Generative video scene prompt composition',
      'Synthetic voice clone & audio mastering',
      '4K frame interpolation & resolution upscaling',
      'Automated Section 508 closed captioning'
    ],
    credentialCode: 'ACS-BADGE-MEDIA-2025',
    employerValue: 'Demonstrates readiness for Digital Media Producer, Public Relations Content Specialist, and Educational Media Developer positions.'
  },
  {
    id: 'badge-office-automation',
    title: 'Public Sector Office Automation Lead',
    category: 'Prompt & Automation',
    level: 'Fundamental',
    icon: 'FileCheck2',
    badgeGradient: 'from-sky-600 via-blue-600 to-indigo-500',
    borderColor: 'border-sky-500/40',
    textColor: 'text-sky-400',
    competencyMastered: 'Ability to automate high-volume administrative tasks: OCR document parsing, policy memo summarization, constituent correspondence drafting, and spreadsheet synthesis.',
    courseModule: 'Course 01 • Module 4: Administrative Workflow Automation',
    practicalSkills: [
      'OCR document scanning & structured extraction',
      'Policy document & legislative briefing synthesis',
      'Automated constituent email response drafting',
      'Excel & CSV data cleaning via natural language'
    ],
    credentialCode: 'ACS-BADGE-OFFICE-2025',
    employerValue: 'Ideal for Office Administrator, Executive Assistant, and Data Entry Specialist upskilling.'
  },
  {
    id: 'badge-reentry-navigator',
    title: 'Reentry Tech Transition Specialist',
    category: 'Reentry & Workforce',
    level: 'Advanced',
    icon: 'Briefcase',
    badgeGradient: 'from-amber-600 via-orange-600 to-yellow-500',
    borderColor: 'border-amber-500/40',
    textColor: 'text-amber-400',
    competencyMastered: 'Specialized competency in leveraging digital job search platforms, AI resume optimization, virtual interview simulation, and 72-hour community stabilization navigations.',
    courseModule: 'Course 02 • Module 1 & 2: Digital Transition & Employer Readiness',
    practicalSkills: [
      'ATS-friendly resume optimization with AI',
      'Simulated AI interview coaching & feedback',
      'WOTC tax credit documentation handling',
      '72-hour post-release stabilization planning'
    ],
    credentialCode: 'ACS-BADGE-REENTRY-2025',
    employerValue: 'Essential credential for Peer Reentry Navigators, Workforce Specialists, and Community Support Coordinators.'
  },
  {
    id: 'badge-wioa-analyst',
    title: 'WIOA Workforce Analytics Lead',
    category: 'Reentry & Workforce',
    level: 'Master Professional',
    icon: 'Users',
    badgeGradient: 'from-emerald-600 via-blue-600 to-indigo-600',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    competencyMastered: 'Expertise in workforce data modeling, career pathway mapping, skill gap analysis, and managing state Individual Training Accounts (ITAs) under WIOA Title I.',
    courseModule: 'Course 02 • Module 3: WIOA & Second Chance Grant Analytics',
    practicalSkills: [
      'WIOA Title I performance metric tracking',
      'Regional labor market AI demand forecasting',
      'Individual Training Account (ITA) subsidy management',
      'Grant outcome & retention report generation'
    ],
    credentialCode: 'ACS-BADGE-WIOA-2025',
    employerValue: 'Prepares professionals for Workforce Board Analytics Director and State Grant Administrator positions.'
  }
];

export function SkillAcquisitionGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBadgeModal, setActiveBadgeModal] = useState<DigitalBadge | null>(null);

  const filteredBadges = DIGITAL_BADGES.filter((badge) => {
    const matchesCategory = selectedCategory === 'All' || badge.category === selectedCategory;
    const matchesSearch =
      badge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      badge.competencyMastered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      badge.courseModule.toLowerCase().includes(searchQuery.toLowerCase()) ||
      badge.practicalSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-8 h-8 text-white" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-white" />;
      case 'Video':
        return <Video className="w-8 h-8 text-white" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-8 h-8 text-white" />;
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-white" />;
      case 'Users':
        return <Users className="w-8 h-8 text-white" />;
      default:
        return <Award className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Gallery Banner */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Skill Mastery & Micro-Credentials</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skill Acquisition & Digital Badging Gallery
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore the verifiable digital badges and core competencies earned by students upon completing specific AI training modules. Every badge maps directly to public sector and enterprise hiring standards.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 space-y-1 shrink-0">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4" />
              <span>Verifiable Micro-Credentials</span>
            </div>
            <div className="text-[11px] text-slate-400">Open Badges 2.0 & LinkedIn Compatible</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search digital badges by title, skill, or competency (e.g. Prompting, NIST, 4K Video)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {['All', 'Prompt & Automation', 'Governance & Security', 'Media Creation', 'Reentry & Workforce'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? 'All Badges' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Badges Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBadges.map((badge) => (
          <div
            key={badge.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between space-y-5 group relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Badge Visual Crest / Emblem Header */}
              <div className="flex items-center justify-between">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${badge.badgeGradient} p-0.5 shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-950/80 backdrop-blur-xs rounded-[14px] flex items-center justify-center">
                    {renderBadgeIcon(badge.icon)}
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border bg-slate-100 dark:bg-slate-800 ${badge.borderColor} ${badge.textColor}`}>
                  {badge.level}
                </span>
              </div>

              {/* Title & Module Tag */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-slate-400">
                  {badge.credentialCode}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {badge.title}
                </h3>
                <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400">
                  {badge.courseModule}
                </div>
              </div>

              {/* Competency Summary */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {badge.competencyMastered}
              </p>

              {/* Practical Skills List */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Core Skills Mastered:
                </span>
                <ul className="space-y-1">
                  {badge.practicalSkills.slice(0, 3).map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inspect Badge Button */}
            <button
              onClick={() => setActiveBadgeModal(badge)}
              className="pt-4 border-t border-slate-100 dark:border-slate-800 w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Inspect Credential & Mastery Specification</span>
            </button>
          </div>
        ))}
      </div>

      {filteredBadges.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <Award className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">No digital badges match your search</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try resetting your search query or selecting a different skill category above.
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

      {/* BADGE INSPECTION MODAL */}
      <AnimatePresence>
        {activeBadgeModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6 my-8"
            >
              <button
                onClick={() => setActiveBadgeModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header Badge Display */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeBadgeModal.badgeGradient} p-0.5 shadow-xl shrink-0`}>
                  <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center">
                    {renderBadgeIcon(activeBadgeModal.icon)}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      {activeBadgeModal.credentialCode}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${activeBadgeModal.borderColor} ${activeBadgeModal.textColor}`}>
                      {activeBadgeModal.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {activeBadgeModal.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400">
                    Earned via: <span className="text-slate-200">{activeBadgeModal.courseModule}</span>
                  </div>
                </div>
              </div>

              {/* Competency & Mastery Breakdown */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>Competency Mastered Specification</span>
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {activeBadgeModal.competencyMastered}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified Practical Skillsets</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {activeBadgeModal.practicalSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-1.5 text-xs">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span>Employer & Public Sector Career Impact</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {activeBadgeModal.employerValue}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-400">
                  OpenBadges 2.0 • ISO Credential Standard Compliant
                </span>

                <button
                  onClick={() => setActiveBadgeModal(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
