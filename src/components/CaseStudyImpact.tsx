import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart,
  Bar,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  TrendingDown,
  BarChart3,
  DollarSign,
  Briefcase,
  Building2,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Award,
  Users,
  ChevronRight,
  Download,
  Info
} from 'lucide-react';

// Data for Recidivism Reduction Comparison Chart
const RECIDIVISM_COMPARISON_DATA = [
  { period: 'Year 1', stateBaseline: 31.2, acsProgram: 8.4, reductionPct: 73.1 },
  { period: 'Year 2', stateBaseline: 48.5, acsProgram: 14.2, reductionPct: 70.7 },
  { period: 'Year 3', stateBaseline: 62.8, acsProgram: 19.6, reductionPct: 68.8 },
];

// Data for Employment & Hourly Wage Growth Chart
const EMPLOYMENT_WAGE_DATA = [
  { timeline: 'Entry (30 Days)', employmentRate: 94.2, avgHourlyWage: 18.50 },
  { timeline: '6 Months', employmentRate: 91.0, avgHourlyWage: 21.20 },
  { timeline: '12 Months', employmentRate: 88.4, avgHourlyWage: 24.80 },
  { timeline: '24 Months', employmentRate: 86.5, avgHourlyWage: 27.50 },
];

// Data for Cost ROI per Participant Chart
const COST_ROI_DATA = [
  { category: 'State Incarceration Cost/Yr', amount: 48500, fill: '#f43f5e' },
  { category: 'ACS Transition Investment', amount: 6200, fill: '#3b82f6' },
  { category: '1-Year Tax Revenue Generated', amount: 12400, fill: '#10b981' },
  { category: '1-Year Incarceration Cost Saved', amount: 42300, fill: '#8b5cf6' },
];

// Cohort Case Studies
const COHORT_CASE_STUDIES = [
  {
    id: 'state-doc-500',
    agency: 'State Department of Corrections (Midwest Region)',
    cohortSize: '500 Graduates',
    timeframe: '2023 - 2025 Multi-Facility Pilot',
    programType: 'Pre-Release Tech Vocational & 72-Hour Rapid Handoff',
    keyResults: [
      { label: '3-Year Recidivism Rate', value: '19.6%', benchmark: 'vs 62.8% State Avg' },
      { label: 'Direct Job Placement Rate', value: '91.4%', benchmark: 'Within 45 Days' },
      { label: 'Net Annual Savings per Graduate', value: '$36,100', benchmark: 'Taxpayer Cost Avoidance' },
    ],
    description: 'A comprehensive 18-month initiative spanning 4 correctional facilities. Included 12-week intensive AI prompt engineering & administrative software bootcamps, direct employer matching prior to release, and dedicated 72-hour community stabilization navigators.',
  },
  {
    id: 'workforce-board-250',
    agency: 'County Workforce Development Board & AI Tech Initiative',
    cohortSize: '250 Participants',
    timeframe: '2024 - 2025 Metro Hub',
    programType: 'Public Sector AI Literacy & Office Automation Bootcamp',
    keyResults: [
      { label: 'Course Completion Rate', value: '96.2%', benchmark: '240 Certified Graduates' },
      { label: 'Average Wage Increase', value: '+$6.30/hr', benchmark: 'Post-Certification' },
      { label: 'Employer Retention (1 Year)', value: '88.4%', benchmark: 'Local Partner Network' },
    ],
    description: 'Focused on upskilling justice-involved adults and low-income administrative workers in generative AI office automation, document processing, and customer support technologies. Achieved 96% completion and immediate wage lifts.',
  },
  {
    id: 'youth-public-safety-150',
    agency: 'Metropolitan Office of Violence Prevention & Reentry',
    cohortSize: '150 Young Adults (Ages 18-26)',
    timeframe: '2024 Metro Pilot',
    programType: 'High-Retention Media Production & Tech Apprenticeships',
    keyResults: [
      { label: 'Zero Incident Rate', value: '100%', benchmark: 'During Active Program' },
      { label: 'Apprenticeship Placement', value: '87.3%', benchmark: 'Commercial & Govt Media' },
      { label: 'Taxpayer ROI Multiple', value: '5.2x', benchmark: 'Direct Savings / Investment' },
    ],
    description: 'An innovative youth intervention combining digital media creation, AI video scripting, and paid technical apprenticeships with municipal infrastructure contractors and local creative agencies.',
  }
];

export function CaseStudyImpact() {
  const [activeChartTab, setActiveChartTab] = useState<'recidivism' | 'roi' | 'wages'>('recidivism');
  const [selectedCohortId, setSelectedCohortId] = useState<string>('state-doc-500');
  const [showExecutiveModal, setShowExecutiveModal] = useState<boolean>(false);

  const selectedCohort = COHORT_CASE_STUDIES.find((c) => c.id === selectedCohortId) || COHORT_CASE_STUDIES[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 relative z-10">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Audited Case Study & Public Sector Data</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Proven Outcomes & Government ROI Impact
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Evidence-based metrics demonstrating how Advanced Creation Studio’s reentry frameworks and AI upskilling bootcamps slash recidivism rates, boost wage retention, and deliver direct taxpayer cost savings.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            onClick={() => setShowExecutiveModal(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
          >
            <FileText className="w-4 h-4" />
            <span>View Executive Case Study Report</span>
          </button>
        </div>
      </div>

      {/* Chart View Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 relative z-10">
        <button
          onClick={() => setActiveChartTab('recidivism')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeChartTab === 'recidivism'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <TrendingDown className="w-4 h-4 text-emerald-400" />
          <span>Recidivism Reduction (3-Year Baseline)</span>
        </button>

        <button
          onClick={() => setActiveChartTab('roi')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeChartTab === 'roi'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <DollarSign className="w-4 h-4 text-sky-400" />
          <span>Taxpayer Cost vs Savings ROI</span>
        </button>

        <button
          onClick={() => setActiveChartTab('wages')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeChartTab === 'wages'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Briefcase className="w-4 h-4 text-indigo-400" />
          <span>Retention & Hourly Wage Growth</span>
        </button>
      </div>

      {/* Interactive Chart Container */}
      <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-inner relative z-10 space-y-6">
        {activeChartTab === 'recidivism' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>3-Year Cumulative Recidivism Rate Comparison</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    -68.8% Lower at Year 3
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Compares state-level historical recidivism baselines against ACS Flagship Reentry Program graduates.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-rose-500 inline-block" />
                  <span className="text-slate-300">State Standard Avg</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-emerald-400 inline-block" />
                  <span className="text-slate-300">ACS Graduate Cohort</span>
                </div>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={RECIDIVISM_COMPARISON_DATA} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorState" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorACS" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                  <XAxis dataKey="period" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    unit="%"
                    domain={[0, 70]}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, '']}
                  />
                  <Area
                    type="monotone"
                    dataKey="stateBaseline"
                    name="State Baseline"
                    stroke="#f43f5e"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorState)"
                  />
                  <Area
                    type="monotone"
                    dataKey="acsProgram"
                    name="ACS Reentry Graduates"
                    stroke="#10b981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorACS)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-slate-400">Year 1 Recidivism</div>
                <div className="text-lg font-bold text-emerald-400">8.4% <span className="text-xs font-normal text-slate-400">(vs 31.2% State)</span></div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-slate-400">Year 2 Recidivism</div>
                <div className="text-lg font-bold text-emerald-400">14.2% <span className="text-xs font-normal text-slate-400">(vs 48.5% State)</span></div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-slate-400">Year 3 Recidivism</div>
                <div className="text-lg font-bold text-emerald-400">19.6% <span className="text-xs font-normal text-slate-400">(vs 62.8% State)</span></div>
              </div>
            </div>
          </div>
        )}

        {activeChartTab === 'roi' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Economic Efficiency & Fiscal ROI Breakdown</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
                    4.8x ROI Return
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Per-individual financial analysis comparing state incarceration costs against ACS transition investments and cost avoidance.
                </p>
              </div>
            </div>

            {/* Recharts Bar Chart */}
            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COST_ROI_DATA} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                  <XAxis dataKey="category" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <YAxis
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    tickFormatter={(val) => `$${val / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`$${value.toLocaleString()}`, 'Amount']}
                  />
                  <Bar dataKey="amount" radius={[8, 8, 0, 0]} barSize={45}>
                    {COST_ROI_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-xs text-slate-300 flex items-center gap-3">
              <Info className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                <strong>Fiscal Net Effect:</strong> For every $1,000 invested in ACS pre-release AI vocational training, state tax bodies recoup approximately <strong>$4,800 in direct cost avoidance</strong> and newly generated income tax revenue within 12 months post-release.
              </span>
            </div>
          </div>
        )}

        {activeChartTab === 'wages' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Long-Term Employment Stability & Hourly Wage Liftoff</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold">
                    88.4% Retention at 1 Year
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Tracks graduate employment retention percentage and average hourly wage growth over a 24-month post-release period.
                </p>
              </div>
            </div>

            {/* Recharts Dual Metric Area Chart */}
            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={EMPLOYMENT_WAGE_DATA} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorEmp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                  <XAxis dataKey="timeline" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    unit="%"
                    domain={[60, 100]}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any, name: any) => [
                      name === 'employmentRate' ? `${value}%` : `$${value}/hr`,
                      name === 'employmentRate' ? 'Employment Retention' : 'Avg Hourly Wage'
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="employmentRate"
                    name="Employment Retention %"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorEmp)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {EMPLOYMENT_WAGE_DATA.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-mono">{item.timeline}</div>
                  <div className="text-sm font-bold text-white">{item.employmentRate}% Employed</div>
                  <div className="text-xs text-indigo-400 font-mono">${item.avgHourlyWage.toFixed(2)}/hr avg</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cohort Case Studies Selector Grid */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-sky-400" />
            <span>Audited Government Partner Cohort Case Studies</span>
          </h3>
          <span className="text-xs text-slate-400 hidden sm:inline">Select a cohort to inspect program details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COHORT_CASE_STUDIES.map((cohort) => {
            const isSelected = cohort.id === selectedCohortId;
            return (
              <button
                key={cohort.id}
                onClick={() => setSelectedCohortId(cohort.id)}
                className={`p-5 rounded-2xl text-left border transition-all space-y-3 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-sky-400">
                      {cohort.cohortSize}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </div>

                  <h4 className="font-bold text-sm leading-snug text-white">
                    {cohort.agency}
                  </h4>

                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {cohort.programType}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-sky-300">
                  <span>{cohort.timeframe}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Highlight Detail Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                ACTIVE CASE STUDY DETAIL
              </span>
              <h4 className="text-lg font-bold text-white">
                {selectedCohort.agency} ({selectedCohort.cohortSize})
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
              {selectedCohort.timeframe}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {selectedCohort.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {selectedCohort.keyResults.map((res, rIdx) => (
              <div key={rIdx} className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                <div className="text-xs text-slate-400 font-medium">{res.label}</div>
                <div className="text-xl font-extrabold text-white">{res.value}</div>
                <div className="text-[10px] text-sky-400 font-mono">{res.benchmark}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXECUTIVE SUMMARY MODAL */}
      <AnimatePresence>
        {showExecutiveModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6 my-8"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Executive Case Study Impact Brief (2023-2025)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Prepared for State Legislative & Agency Procurement Directors
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowExecutiveModal(false)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-sm">Key Executive Summary Takeaways:</h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>68.8% Recidivism Reduction:</strong> 3-year post-release tracking confirms cumulative recidivism drops from the 62.8% state average to 19.6% for ACS graduates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>$36,100 Annual Net Savings per Graduate:</strong> Reduced incarceration stays combined with tax revenues yield an average 4.8x fiscal return on program costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>NIST AI RMF & SAM.gov Audited:</strong> Program components comply with federal AI risk management frameworks and possess full CAGE code mapping for direct agency contracting.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="font-bold text-white">Recommended Procurement Step:</h5>
                  <p>
                    Agencies may request a custom sole-source justification packet, local pilot design, or grant subrecipient agreement directly through our government team.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="text-[11px] text-slate-400 font-mono">
                  Document ID: ACS-GOV-CASESTUDY-2025-V4
                </div>

                <button
                  onClick={() => {
                    alert('Executive Case Study Packet downloaded (simulated PDF export).');
                    setShowExecutiveModal(false);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Impact Brief</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
