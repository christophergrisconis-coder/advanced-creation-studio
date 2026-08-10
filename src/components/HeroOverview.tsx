import React from 'react';
import { motion } from 'motion/react';
import { TabType } from '../types';
import { ShieldCheck, Clapperboard, FileCheck, ArrowRight, Award, Users, TrendingDown, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { CaseStudyImpact } from './CaseStudyImpact';
import { CertificationsBadges } from './CertificationsBadges';

interface HeroOverviewProps {
  setActiveTab: (tab: TabType) => void;
}

export function HeroOverview({ setActiveTab }: HeroOverviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 py-6"
    >
      {/* Primary Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-12 shadow-2xl">
        {/* Background Subtle Gradient & Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-950/50 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Government-Facing Strategic Studio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Strategic Creative Direction & Flagship Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Public Sector Impact
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Advanced Creation Studio delivers end-to-end strategic messaging, turnkey media production, and evidence-based workforce transition programs for state and federal government agencies.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Complete. Professional. Contract-Ready.</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Clear. Consistent. Confident.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('flagship')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Explore Flagship Reentry Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Explore Features & AI Classes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Recidivism Reduction</span>
            <TrendingDown className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            64%
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Below 3-Year State Averages
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Job Retention</span>
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            88.4%
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            90-Day Employment Stability
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Taxpayer ROI</span>
            <Building2 className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            4.8x
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Direct Cost Savings Return
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Contract Readiness</span>
            <FileCheck className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            100%
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            NAICS & CAGE Aligned
          </p>
        </div>
      </div>

      {/* Testimonials & Social Proof Carousel */}
      <TestimonialsCarousel />

      {/* Audited Case Study & Public Sector Data Visualization */}
      <CaseStudyImpact />

      {/* Recognized Government Compliance & Industry Badges */}
      <CertificationsBadges />

      {/* Three Pillars Section */}
      <div className="space-y-4">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Core Service Modules
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Purpose-built for public sector execution, inter-agency coordination, and measurable social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Module 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Flagship Initiative
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Recidivism Reduction & Reentry Support
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  A four-phase evidence-based reentry framework spanning pre-release vocational bootcamps, 72-hour stabilization handoffs, direct employment placement, and sustained community integration.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('flagship')}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-2"
            >
              <span>View Reentry Framework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  AI Education & Production
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  AI Industry Classes, Bootcamps & Video Studio
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Explore practical agency AI courses — from prompt engineering, autonomous agents, and NIST governance seminars to hands-on 4K AI video production and reentry upskilling.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('features')}
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline pt-2"
            >
              <span>Explore AI Classes & Features</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  Government Procurement
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Contract Readiness & NAICS Matrix
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Turnkey compliance, SAM.gov registration guidance, NAICS mapping (541810, 541511, 541611, 512110), and an interactive contract readiness evaluator calculator.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('capabilities')}
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-2"
            >
              <span>Check Contract Readiness</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
