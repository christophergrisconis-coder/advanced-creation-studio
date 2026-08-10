import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AI_COURSES, AICourse, AI_INDUSTRY_STATS } from '../data/coursesData';
import { VideoStudio } from './VideoStudio';
import { FeaturesFAQ, FEATURE_FAQS, FAQItem } from './FeaturesFAQ';
import { ResourceLibrary, RESOURCE_DOCUMENTS, ResourceDocument } from './ResourceLibrary';
import { SkillAcquisitionGallery } from './SkillAcquisitionGallery';
import {
  Sparkles,
  GraduationCap,
  Clapperboard,
  Compass,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Building2,
  MessageSquareCode,
  Cpu,
  ShieldAlert,
  BarChart3,
  ChevronDown,
  ChevronUp,
  X,
  Send,
  Users,
  Target,
  FileText,
  HelpCircle,
  Download,
  Layers,
  ChevronRight
} from 'lucide-react';

export function FeaturesPortal() {
  const [activeSubTab, setActiveSubTab] = useState<'catalog' | 'video-engine' | 'advisor' | 'resources' | 'badges'>('catalog');
  
  // Global Search State across Courses, Resources, and FAQs
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [globalSearchCategory, setGlobalSearchCategory] = useState<'all' | 'courses' | 'resources' | 'faqs'>('all');
  const [expandedGlobalFaqId, setExpandedGlobalFaqId] = useState<string | null>(null);

  // Course Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Expanded Course Details State
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('prompt-eng-public-sector');
  
  // Modal State for Enrolling / Requesting Syllabus
  const [selectedEnrollCourse, setSelectedEnrollCourse] = useState<AICourse | null>(null);
  const [enrollAgencyName, setEnrollAgencyName] = useState<string>('');
  const [enrollContactEmail, setEnrollContactEmail] = useState<string>('');
  const [enrollEstimatedSeats, setEnrollEstimatedSeats] = useState<number>(15);
  const [enrollNotes, setEnrollNotes] = useState<string>('');
  const [enrollSuccess, setEnrollSuccess] = useState<boolean>(false);

  // Skill Advisor State
  const [advisorRole, setAdvisorRole] = useState<string>('agency-director');

  // Compute Global Cross-Portal Search Results
  const trimmedGlobalQuery = globalSearchQuery.trim().toLowerCase();
  
  const matchedCourses = trimmedGlobalQuery.length > 0
    ? AI_COURSES.filter((course) => {
        const matchTitle = course.title.toLowerCase().includes(trimmedGlobalQuery);
        const matchDesc = course.description.toLowerCase().includes(trimmedGlobalQuery);
        const matchCat = course.category.toLowerCase().includes(trimmedGlobalQuery);
        const matchAudience = course.targetAudience.toLowerCase().includes(trimmedGlobalQuery);
        const matchModules = course.modules.some(
          (m) => m.title.toLowerCase().includes(trimmedGlobalQuery) || m.description.toLowerCase().includes(trimmedGlobalQuery)
        );
        return matchTitle || matchDesc || matchCat || matchAudience || matchModules;
      })
    : [];

  const matchedResources = trimmedGlobalQuery.length > 0
    ? RESOURCE_DOCUMENTS.filter((doc) => {
        const matchTitle = doc.title.toLowerCase().includes(trimmedGlobalQuery);
        const matchSummary = doc.summary.toLowerCase().includes(trimmedGlobalQuery);
        const matchCategory = doc.category.toLowerCase().includes(trimmedGlobalQuery);
        const matchDocType = doc.docType.toLowerCase().includes(trimmedGlobalQuery);
        const matchDocId = doc.documentId.toLowerCase().includes(trimmedGlobalQuery);
        const matchTopics = doc.topics.some((t) => t.toLowerCase().includes(trimmedGlobalQuery));
        const matchToc = doc.tableOfContents.some((toc) => toc.toLowerCase().includes(trimmedGlobalQuery));
        return matchTitle || matchSummary || matchCategory || matchDocType || matchDocId || matchTopics || matchToc;
      })
    : [];

  const matchedFaqs = trimmedGlobalQuery.length > 0
    ? FEATURE_FAQS.filter((faq) => {
        const matchQuestion = faq.question.toLowerCase().includes(trimmedGlobalQuery);
        const matchAnswer = faq.answer.toLowerCase().includes(trimmedGlobalQuery);
        const matchCat = faq.category.toLowerCase().includes(trimmedGlobalQuery);
        const matchHighlights = faq.highlights?.some((h) => h.toLowerCase().includes(trimmedGlobalQuery));
        return matchQuestion || matchAnswer || matchCat || matchHighlights;
      })
    : [];

  const totalGlobalMatches = matchedCourses.length + matchedResources.length + matchedFaqs.length;

  const handleSimulatedDownloadFromSearch = (doc: ResourceDocument) => {
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
  };

  // Course Icon Resolver
  const renderCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-6 h-6" />;
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  // Filtered Courses
  const filteredCourses = AI_COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSuccess(true);
    setTimeout(() => {
      setEnrollSuccess(false);
      setSelectedEnrollCourse(null);
      setEnrollAgencyName('');
      setEnrollContactEmail('');
      setEnrollNotes('');
    }, 2800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 py-6"
    >
      {/* Primary Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-900 to-indigo-950/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Industry Education & Media Features Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Government AI Training, Bootcamps &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Creative Production Features
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Advanced Creation Studio equips government agencies, workforce boards, and public sector professionals with NIST-aligned AI industry training, hands-on bootcamps, and 4K generative media production features.
          </p>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
            {AI_INDUSTRY_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs font-semibold text-sky-400">{stat.label}</div>
                <div className="text-[10px] text-slate-400">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL SEARCH BAR */}
      <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-3.5 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Search className="w-4 h-4 text-blue-400" />
            <span>Global Features & Knowledge Base Search</span>
          </div>
          {globalSearchQuery && (
            <button
              onClick={() => setGlobalSearchQuery('')}
              className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 self-end sm:self-auto transition-colors"
            >
              <X className="w-3.5 h-3.5 text-slate-400" />
              <span>Clear Global Search</span>
            </button>
          )}
        </div>

        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={globalSearchQuery}
            onChange={(e) => setGlobalSearchQuery(e.target.value)}
            placeholder="Search across all AI courses, downloadable whitepapers, SAM.gov resources & FAQs (e.g. NIST, CAGE, Prompt Engineering)..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
          />
          {globalSearchQuery && (
            <button
              onClick={() => setGlobalSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Quick Search Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-[11px] font-medium text-slate-400 shrink-0">Popular Topics:</span>
          {[
            'NIST RMF 1.0',
            'SAM.gov CAGE',
            'Prompt Engineering',
            'Recidivism ROI',
            'WIOA Grants',
            '4K Video Studio'
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => setGlobalSearchQuery(tag)}
              className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800/80 text-[11px] font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* GLOBAL SEARCH RESULTS DISPLAY (Active when query is non-empty) */}
      {globalSearchQuery.trim().length > 0 ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-6 animate-fadeIn">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Global Search Results
                </h2>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono text-xs font-bold">
                  {totalGlobalMatches} {totalGlobalMatches === 1 ? 'Match' : 'Matches'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Showing live results for <strong className="text-sky-300">"{globalSearchQuery}"</strong> across Courses, Whitepapers & FAQs.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {[
                { id: 'all', label: `All (${totalGlobalMatches})` },
                { id: 'courses', label: `AI Lessons (${matchedCourses.length})` },
                { id: 'resources', label: `Whitepapers (${matchedResources.length})` },
                { id: 'faqs', label: `FAQs (${matchedFaqs.length})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setGlobalSearchCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    globalSearchCategory === tab.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* NO RESULTS STATE */}
          {totalGlobalMatches === 0 && (
            <div className="p-10 text-center space-y-3 bg-slate-950 rounded-2xl border border-slate-800">
              <Search className="w-8 h-8 text-slate-500 mx-auto" />
              <h3 className="text-base font-bold text-white">No cross-portal matches found</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                We couldn't find any lessons, whitepapers, or FAQs matching "{globalSearchQuery}". Try adjusting your keywords or clearing the search.
              </p>
              <button
                onClick={() => setGlobalSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                Clear Search & View All Portals
              </button>
            </div>
          )}

          {/* 1. MATCHED AI COURSES & LESSONS */}
          {(globalSearchCategory === 'all' || globalSearchCategory === 'courses') && matchedCourses.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>AI Courses & Training Lessons ({matchedCourses.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">
                          {course.category}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          {course.duration} ({course.totalHours} hrs)
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {course.description}
                      </p>

                      <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-3 font-mono">
                        <span>Modules: {course.modules.length}</span>
                        <span>•</span>
                        <span>Level: {course.level}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-emerald-400 font-bold truncate max-w-[200px]">
                        {course.certification}
                      </span>
                      <button
                        onClick={() => {
                          setActiveSubTab('catalog');
                          setExpandedCourseId(course.id);
                          setGlobalSearchQuery('');
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                      >
                        <span>View Syllabus</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. MATCHED WHITEPAPERS & RESOURCES */}
          {(globalSearchCategory === 'all' || globalSearchCategory === 'resources') && matchedResources.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Whitepapers & Procurement Toolkits ({matchedResources.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedResources.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 font-bold border border-purple-500/20">
                          {doc.docType}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          {doc.fileSize} • {doc.pageCount} Pages
                        </span>
                      </div>

                      <div className="text-[10px] font-mono text-sky-400 font-bold">
                        {doc.documentId}
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {doc.summary}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {doc.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px]">
                            #{topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">
                        {doc.complianceRef}
                      </span>
                      <button
                        onClick={() => handleSimulatedDownloadFromSearch(doc)}
                        className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Brief</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. MATCHED FAQS & CONTRACTING TOPICS */}
          {(globalSearchCategory === 'all' || globalSearchCategory === 'faqs') && matchedFaqs.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Procurement & Technical FAQs ({matchedFaqs.length})</span>
              </div>

              <div className="space-y-3">
                {matchedFaqs.map((faq) => {
                  const isExpanded = expandedGlobalFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
                    >
                      <button
                        onClick={() => setExpandedGlobalFaqId(isExpanded ? null : faq.id)}
                        className="w-full text-left flex items-start justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-sky-300 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 text-[10px] font-bold border border-sky-500/20 shrink-0">
                            {faq.category}
                          </span>
                          <span>{faq.question}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="pt-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800 space-y-2">
                          <p>{faq.answer}</p>
                          {faq.highlights && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {faq.highlights.map((hl, hIdx) => (
                                <span
                                  key={hIdx}
                                  className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold"
                                >
                                  ✓ {hl}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : null}

      {/* Sub-Navigation Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <button
          onClick={() => setActiveSubTab('catalog')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'catalog'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>AI Classes & Lesson Catalog</span>
        </button>

        <button
          onClick={() => setActiveSubTab('video-engine')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'video-engine'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Clapperboard className="w-4 h-4 text-sky-400" />
          <span>AI 4K Video & Script Studio</span>
        </button>

        <button
          onClick={() => setActiveSubTab('advisor')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'advisor'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Role-Based AI Learning Advisor</span>
        </button>

        <button
          onClick={() => setActiveSubTab('resources')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'resources'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span>Resource & Compliance Library</span>
        </button>

        <button
          onClick={() => setActiveSubTab('badges')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubTab === 'badges'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Skill Acquisition & Digital Badges</span>
        </button>
      </div>

      {/* SUB-TAB 1: AI CLASSES & LESSON CATALOG */}
      {activeSubTab === 'catalog' && (
        <div className="space-y-6">
          {/* Controls Bar: Filters & Search */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search AI courses, modules, topics..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Level Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Level:
                </span>
                {['All', 'Foundational', 'Intermediate', 'Advanced', 'Executive'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedLevel === lvl
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-500 mr-1">Category:</span>
              {[
                'All',
                'Prompting & Administration',
                'Media & Creative AI',
                'Agentic Automation',
                'Ethics & Governance',
                'Reentry & Vocational',
                'Data & Machine Learning'
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full font-medium transition-colors border ${
                    selectedCategory === cat
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                      : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;
              return (
                <div
                  key={course.id}
                  className={`rounded-3xl bg-white dark:bg-slate-900 border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                    isExpanded
                      ? 'border-blue-500 ring-1 ring-blue-500/30 dark:ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="p-6 space-y-4">
                    {/* Header Badge & Level */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${course.badgeColor}`}>
                        {course.category}
                      </span>

                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                        {course.level} • {course.duration}
                      </span>
                    </div>

                    {/* Course Title */}
                    <div className="space-y-1">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0">
                          {renderCourseIcon(course.iconName)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                            {course.title}
                          </h3>
                          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                            {course.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Learning Outcomes Preview */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Key Learning Outcomes:
                      </div>
                      <ul className="space-y-1.5">
                        {course.learningOutcomes.slice(0, isExpanded ? 4 : 2).map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expanded Modules Section */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Detailed Course Curriculum ({course.modules.length} Modules):
                          </span>
                          <span className="text-slate-500 font-mono">{course.totalHours} Total Hours</span>
                        </div>

                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
                          {course.modules.map((mod) => (
                            <div
                              key={mod.number}
                              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 space-y-1.5 text-xs"
                            >
                              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                                <span>
                                  Module {mod.number}: {mod.title}
                                </span>
                                <span className="text-[10px] font-mono text-blue-500">{mod.duration}</span>
                              </div>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                                {mod.description}
                              </p>
                              <div className="flex flex-wrap gap-1 pt-1">
                                {mod.keyTakeaways.map((takeaway, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] text-slate-700 dark:text-slate-300 font-mono"
                                  >
                                    • {takeaway}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Certification Info */}
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                          <Award className="w-4 h-4 shrink-0" />
                          <span><strong>Credential Earned:</strong> {course.certification}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Collapse Syllabus</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>View Full Curriculum</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedEnrollCourse(course)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/25"
                    >
                      <span>Enroll / Request Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">No Matching AI Courses Found</h4>
              <p className="text-xs text-slate-500">Try adjusting your category, level, or search query filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedLevel('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: AI 4K VIDEO & SCRIPT STUDIO */}
      {activeSubTab === 'video-engine' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Clapperboard className="w-5 h-5 text-sky-400 shrink-0" />
              <span>
                <strong>Integrated Feature:</strong> AI Video Generation & Promotional Script Engine. Create 4K public awareness videos and agency storyboards.
              </span>
            </div>
          </div>
          <VideoStudio />
        </div>
      )}

      {/* SUB-TAB 3: ROLE-BASED LEARNING ADVISOR */}
      {activeSubTab === 'advisor' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl space-y-6">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>Tailored Public Sector AI Roadmap</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              AI Skill Path Advisor for Agency Leadership
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Select your agency role or leadership objective to generate a customized AI upskilling roadmap for your team.
            </p>
          </div>

          {/* Role Selection Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { id: 'agency-director', label: 'Agency Executive / Director', icon: Building2, desc: 'Strategy, NIST AI Governance & Cost Reduction' },
              { id: 'reentry-director', label: 'Reentry & Workforce Director', icon: Users, desc: 'Vocational AI Literacy & 90-Day Employment' },
              { id: 'comms-director', label: 'Public Info & Media Lead', icon: Clapperboard, desc: 'Generative 4K Video & Public Awareness' },
              { id: 'procurement-officer', label: 'Procurement & Contracting', icon: ShieldCheck, desc: 'Auditability, RFP Prompts & Vendor Oversight' },
              { id: 'it-architect', label: 'IT & Enterprise Data Lead', icon: Cpu, desc: 'Autonomous Agents, RAG Pipelines & Security' },
            ].map((role) => {
              const IconComp = role.icon;
              const isSelected = advisorRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setAdvisorRole(role.id)}
                  className={`p-4 rounded-2xl border text-left transition-all space-y-2 ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500 shadow-md'
                      : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <IconComp className={`w-5 h-5 ${isSelected ? 'text-sky-400' : 'text-slate-400'}`} />
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <div className="text-sm font-bold">{role.label}</div>
                  <div className="text-[11px] text-slate-400">{role.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Recommended Curriculum Output Box */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
              <span className="text-sky-400 font-bold uppercase tracking-wider">
                RECOMMENDED AI CURRICULUM ROADMAP
              </span>
              <span className="text-slate-400">NIST AI RMF 1.0 Compliant</span>
            </div>

            {advisorRole === 'agency-director' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Executive AI Leadership & Governance Track
                  </h4>
                  <p className="text-xs text-slate-300">
                    Designed for executive decision-makers needing clear governance frameworks, compliance strategies, and high-ROI administrative automation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold">Step 1: Seminar</span>
                    <h5 className="font-bold text-white text-sm">Responsible AI Ethics, Governance & NIST Compliance</h5>
                    <p className="text-slate-400 text-[11px]">2 Weeks (8 Hours) • Executive Seminar</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold">Step 2: Masterclass</span>
                    <h5 className="font-bold text-white text-sm">Practical AI Prompt Engineering for Public Sector</h5>
                    <p className="text-slate-400 text-[11px]">4 Weeks (16 Hours) • Staff Prompt Architecture</p>
                  </div>
                </div>
              </div>
            )}

            {advisorRole === 'reentry-director' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Reentry & Vocational Tech Upskilling Track
                  </h4>
                  <p className="text-xs text-slate-300">
                    Empowers correctional education staff and returning citizens with modern workplace AI literacy and direct employment preparation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold">Step 1: Core Bootcamp</span>
                    <h5 className="font-bold text-white text-sm">AI Literacy & Vocational Upskilling for Reentry</h5>
                    <p className="text-slate-400 text-[11px]">8 Weeks (32 Hours) • In-Facility & Community</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold">Step 2: Practical Lab</span>
                    <h5 className="font-bold text-white text-sm">Practical AI Prompt Engineering for Administrative Roles</h5>
                    <p className="text-slate-400 text-[11px]">4 Weeks (16 Hours) • Office Productivity</p>
                  </div>
                </div>
              </div>
            )}

            {advisorRole === 'comms-director' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Generative Media & Public Outreach Track
                  </h4>
                  <p className="text-xs text-slate-300">
                    Accelerates public awareness campaign creation with 4K AI video generation, synthetic voiceovers, and dynamic storyboards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-sky-400 font-bold">Step 1: Studio Class</span>
                    <h5 className="font-bold text-white text-sm">Generative AI Video & 4K Media Production</h5>
                    <p className="text-slate-400 text-[11px]">3 Weeks (12 Hours) • 4K Video Production Studio</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold">Step 2: Messaging</span>
                    <h5 className="font-bold text-white text-sm">Practical AI Prompt Engineering for Creative Teams</h5>
                    <p className="text-slate-400 text-[11px]">4 Weeks (16 Hours) • Scripting & Storytelling</p>
                  </div>
                </div>
              </div>
            )}

            {advisorRole === 'procurement-officer' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Procurement, Contract Audit & Compliance Track
                  </h4>
                  <p className="text-xs text-slate-300">
                    Focuses on contract readiness, deterministic RFP analysis, vendor clause drafting, and zero-hallucination verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold">Step 1: Foundation</span>
                    <h5 className="font-bold text-white text-sm">Practical AI Prompt Engineering for RFP Analysis</h5>
                    <p className="text-slate-400 text-[11px]">4 Weeks (16 Hours) • Audit-Friendly Prompts</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold">Step 2: Governance</span>
                    <h5 className="font-bold text-white text-sm">Responsible AI Ethics & Vendor Clause Oversight</h5>
                    <p className="text-slate-400 text-[11px]">2 Weeks (8 Hours) • GSA / NIST Audit Terms</p>
                  </div>
                </div>
              </div>
            )}

            {advisorRole === 'it-architect' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Autonomous Agents & Enterprise Data Track
                  </h4>
                  <p className="text-xs text-slate-300">
                    Deep technical training for engineers building RAG architectures, multi-agent intake systems, and predictive ML models.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold">Step 1: Advanced Code</span>
                    <h5 className="font-bold text-white text-sm">Autonomous AI Agents for Administrative Workflows</h5>
                    <p className="text-slate-400 text-[11px]">6 Weeks (24 Hours) • RAG & Agentic Loops</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-indigo-400 font-bold">Step 2: Machine Learning</span>
                    <h5 className="font-bold text-white text-sm">Predictive AI Analytics & Public Impact Modeling</h5>
                    <p className="text-slate-400 text-[11px]">5 Weeks (20 Hours) • D3/Recharts & Forecasting</p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedEnrollCourse(AI_COURSES[0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/30"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Agency Curriculum Proposal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: RESOURCE & COMPLIANCE LIBRARY */}
      {activeSubTab === 'resources' && (
        <ResourceLibrary />
      )}

      {/* SUB-TAB 5: SKILL ACQUISITION & DIGITAL BADGES */}
      {activeSubTab === 'badges' && (
        <SkillAcquisitionGallery />
      )}

      {/* Trust & Implementation FAQ Section */}
      <FeaturesFAQ />

      {/* ENROLLMENT / SYLLABUS REQUEST MODAL */}
      <AnimatePresence>
        {selectedEnrollCourse && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-6 my-8"
            >
              <button
                onClick={() => setSelectedEnrollCourse(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-bold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Agency Training Request</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedEnrollCourse.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {selectedEnrollCourse.format} • {selectedEnrollCourse.duration} ({selectedEnrollCourse.totalHours} Hours)
                </p>
              </div>

              {enrollSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Syllabus & Proposal Requested!</h4>
                  <p className="text-xs text-slate-300">
                    Our educational director will send the detailed course syllabus and agency group pricing packet to <strong>{enrollContactEmail || 'your email'}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Agency or Organization Name</label>
                    <input
                      type="text"
                      required
                      value={enrollAgencyName}
                      onChange={(e) => setEnrollAgencyName(e.target.value)}
                      placeholder="e.g., State Dept. of Transportation or City Workforce Board"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Official Contact Email</label>
                      <input
                        type="email"
                        required
                        value={enrollContactEmail}
                        onChange={(e) => setEnrollContactEmail(e.target.value)}
                        placeholder="director@agency.gov"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Estimated Seat Cohort</label>
                      <input
                        type="number"
                        min={1}
                        max={500}
                        value={enrollEstimatedSeats}
                        onChange={(e) => setEnrollEstimatedSeats(parseInt(e.target.value) || 10)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Specific Agency Goals or Custom Requirements (Optional)</label>
                    <textarea
                      rows={3}
                      value={enrollNotes}
                      onChange={(e) => setEnrollNotes(e.target.value)}
                      placeholder="e.g., We need NIST AI RMF compliance training for 25 staff members in Q3..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes GSA-aligned procurement pricing, CAGE-mapped invoices, and completion certificates.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Agency Request & Receive Syllabus</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
