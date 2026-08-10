import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REENTRY_PHASES, IMPACT_METRICS } from '../data/capabilitiesData';
import { ImplementationRoadmap } from './ImplementationRoadmap';
import { PerformanceDashboard } from './PerformanceDashboard';
import { ShieldCheck, CheckCircle2, TrendingUp, Users, DollarSign, HeartHandshake, Sparkles, AlertCircle } from 'lucide-react';

export function FlagshipPortal() {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('phase-1');
  const [participantCount, setParticipantCount] = useState<number>(250);

  const selectedPhase = REENTRY_PHASES.find((p) => p.id === selectedPhaseId) || REENTRY_PHASES[0];

  // Outcome simulator calculations
  const avgIncarcerationCostPerYear = 42500; // USD per inmate per year
  const stateBaselineRecidivism = 0.438; // 43.8%
  const acsRecidivism = 0.142; // 14.2%

  const baselineRecidivists = Math.round(participantCount * stateBaselineRecidivism);
  const acsRecidivists = Math.round(participantCount * acsRecidivism);
  const reincarcerationsPrevented = baselineRecidivists - acsRecidivists;
  const estimatedAnnualTaxpayerSavings = reincarcerationsPrevented * avgIncarcerationCostPerYear;
  const estimatedWagesGenerated = Math.round(participantCount * 0.884 * 21.50 * 2080); // 88.4% retention at $21.50/hr

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-10 py-6"
    >
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Flagship Government Initiative</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Recidivism Reduction & Reentry Support Program
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A comprehensive, four-stage transitional ecosystem delivering measurable safety improvements, workforce integration, and substantial financial return for state and county correctional systems.
          </p>
        </div>
      </div>

      {/* Four Phase Walkthrough */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              The 4-Phase Transition Framework
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select a phase to inspect operational milestones, key metrics, and expected deliverables.
            </p>
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {REENTRY_PHASES.map((phase) => {
            const isSelected = phase.id === selectedPhaseId;
            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhaseId(phase.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 text-white shadow-lg ring-2 ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-xs font-black px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-emerald-500 text-black'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    PHASE {phase.number}
                  </span>
                  <span className="text-[10px] font-medium opacity-75">{phase.status}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm line-clamp-2">
                  {phase.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail View */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Phase {selectedPhase.number} • {selectedPhase.status}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white pt-1">
                {selectedPhase.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                {selectedPhase.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {selectedPhase.metrics.map((m, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">{m.value}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {selectedPhase.description}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Core Program Outcomes & Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {selectedPhase.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 font-medium flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Outcome Simulator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Interactive Cost Savings & Impact Calculator</span>
            </div>
            <h3 className="text-2xl font-bold text-white pt-1">
              State Agency Impact Modeling
            </h3>
            <p className="text-xs text-slate-400">
              Adjust program cohort size to project avoided incarceration expenses and wage contribution gains.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/90 px-4 py-2 rounded-2xl border border-slate-700">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-slate-300">Cohort Size:</span>
            <span className="text-lg font-bold text-white">{participantCount}</span>
            <span className="text-xs text-slate-400">Participants</span>
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400 font-medium">
            <span>50 Participants</span>
            <span>250</span>
            <span>500</span>
            <span>1,000 Participants</span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="25"
            value={participantCount}
            onChange={(e) => setParticipantCount(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Projected Outcome Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Re-incarcerations Avoided</span>
              <AlertCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400">
              ~{reincarcerationsPrevented}
            </div>
            <p className="text-[11px] text-slate-400">
              Individuals remaining safely in workforce vs baseline state averages.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Annual Incarceration Savings</span>
              <DollarSign className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-3xl font-black text-blue-400">
              ${(estimatedAnnualTaxpayerSavings / 1000000).toFixed(2)}M
            </div>
            <p className="text-[11px] text-slate-400">
              Direct institutional operating budget savings generated for state DOCs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
              <span>Annual Earnings Generated</span>
              <TrendingUp className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-indigo-400">
              ${(estimatedWagesGenerated / 1000000).toFixed(1)}M
            </div>
            <p className="text-[11px] text-slate-400">
              Direct participant earned income contributing to local tax bases.
            </p>
          </div>
        </div>
      </div>

      {/* Comparative Impact Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Key Performance Benchmarks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {IMPACT_METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {metric.category}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {metric.description}
                </p>
              </div>

              {metric.baseline > 0 ? (
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>Standard State Average</span>
                      <span>{metric.baseline}{metric.unit}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
                        style={{ width: `${metric.baseline}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <span>ACS Reentry Program</span>
                      <span>{metric.acsProgram}{metric.unit}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${metric.acsProgram}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                  Generates ${metric.acsProgram.toLocaleString()} in direct net annual taxpayer value per successful graduate.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Agency Partner Performance Outcomes Dashboard */}
      <PerformanceDashboard />

      {/* Turnkey Agency Implementation Roadmap */}
      <ImplementationRoadmap />
    </motion.div>
  );
}
