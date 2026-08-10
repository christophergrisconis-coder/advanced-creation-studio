import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import { FileText, Shield, CheckCircle2, Award, Building2, Calculator, ArrowUpRight, Copy, Check } from 'lucide-react';

export function CapabilitiesSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Contract Readiness Evaluator State
  const [samActive, setSamActive] = useState<boolean>(true);
  const [cageVerified, setCageVerified] = useState<boolean>(true);
  const [naicsAligned, setNaicsAligned] = useState<boolean>(true);
  const [pastPerformance, setPastPerformance] = useState<boolean>(true);
  const [financialStability, setFinancialStability] = useState<boolean>(true);

  // Calculate readiness score
  const score = [samActive, cageVerified, naicsAligned, pastPerformance, financialStability].filter(Boolean).length * 20;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-10 py-6"
    >
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>Federal & State Procurement Readiness</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Government Capabilities & NAICS Alignment
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Advanced Creation Studio maintains active compliance credentials for prime and subcontracting opportunities across strategic creative design, IT custom software, video production, and management consulting.
          </p>
        </div>
      </div>

      {/* Contract Readiness Scorecard Calculator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Contract Readiness Evaluator</span>
            </div>
            <h3 className="text-xl font-bold text-white pt-1">
              Procurement Readiness Index
            </h3>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/90 px-5 py-2.5 rounded-2xl border border-slate-700">
            <span className="text-xs font-medium text-slate-300">Readiness Score:</span>
            <span className={`text-2xl font-black ${score === 100 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {score}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 cursor-pointer hover:bg-slate-800 transition-colors">
              <span className="text-xs font-semibold text-slate-200">SAM.gov Active Entity Registration</span>
              <input
                type="checkbox"
                checked={samActive}
                onChange={(e) => setSamActive(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 accent-blue-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 cursor-pointer hover:bg-slate-800 transition-colors">
              <span className="text-xs font-semibold text-slate-200">CAGE Code Assigned & Active</span>
              <input
                type="checkbox"
                checked={cageVerified}
                onChange={(e) => setCageVerified(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 accent-blue-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 cursor-pointer hover:bg-slate-800 transition-colors">
              <span className="text-xs font-semibold text-slate-200">NAICS Code Alignment Verified</span>
              <input
                type="checkbox"
                checked={naicsAligned}
                onChange={(e) => setNaicsAligned(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 accent-blue-500"
              />
            </label>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 cursor-pointer hover:bg-slate-800 transition-colors">
              <span className="text-xs font-semibold text-slate-200">Documented Past Performance References</span>
              <input
                type="checkbox"
                checked={pastPerformance}
                onChange={(e) => setPastPerformance(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 accent-blue-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 cursor-pointer hover:bg-slate-800 transition-colors">
              <span className="text-xs font-semibold text-slate-200">Financial Audit & Insurance Compliance</span>
              <input
                type="checkbox"
                checked={financialStability}
                onChange={(e) => setFinancialStability(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 accent-blue-500"
              />
            </label>

            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between">
              <span>Status: {score === 100 ? 'Contract-Ready Prime Vendor' : 'Action Required'}</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Primary NAICS Code Matrix */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Primary NAICS Codes & Deliverable Scope
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
                  {item.code}
                </span>

                <button
                  onClick={() => handleCopyCode(item.code)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs flex items-center gap-1"
                >
                  {copiedCode === item.code ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Standard Deliverables
                </span>
                <div className="space-y-1.5">
                  {item.deliverables.map((d, dIdx) => (
                    <div
                      key={dIdx}
                      className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capability Statement Summary Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Official Capabilities Profile
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-1">
              Advanced Creation Studio Capability Deck
            </h3>
          </div>

          <a
            href="https://advancedcreationstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30"
          >
            <span>Visit Official Domain</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
            <span className="text-slate-400 font-semibold">Entity Type:</span>
            <div className="font-bold text-slate-900 dark:text-white">Commercial Small Business</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
            <span className="text-slate-400 font-semibold">Primary Sector:</span>
            <div className="font-bold text-slate-900 dark:text-white">Public Sector Creative & Strategy</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
            <span className="text-slate-400 font-semibold">Contracting Vehicles:</span>
            <div className="font-bold text-slate-900 dark:text-white">BPA, Subcontract, Prime RFP</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
