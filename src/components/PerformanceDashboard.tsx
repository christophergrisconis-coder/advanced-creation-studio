import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart
} from 'recharts';
import {
  TrendingUp,
  Award,
  Users,
  Building2,
  Calendar,
  Layers,
  Filter,
  CheckCircle2,
  Clock,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  BarChart3,
  PieChart as PieIcon
} from 'lucide-react';

// Quarterly Graduation & Certification Trends Data
const GRADUATION_TRENDS_DATA = [
  { quarter: 'Q1 2024', graduationRate: 78.4, certPassRate: 81.2, docBaseline: 58.0, enrolled: 320, graduated: 251 },
  { quarter: 'Q2 2024', graduationRate: 82.1, certPassRate: 84.5, docBaseline: 59.2, enrolled: 410, graduated: 337 },
  { quarter: 'Q3 2024', graduationRate: 86.5, certPassRate: 88.0, docBaseline: 60.1, enrolled: 520, graduated: 450 },
  { quarter: 'Q4 2024', graduationRate: 89.2, certPassRate: 91.4, docBaseline: 61.0, enrolled: 680, graduated: 607 },
  { quarter: 'Q1 2025', graduationRate: 92.0, certPassRate: 93.8, docBaseline: 61.5, enrolled: 840, graduated: 773 },
  { quarter: 'Q2 2025', graduationRate: 94.6, certPassRate: 95.2, docBaseline: 62.0, enrolled: 1050, graduated: 993 },
  { quarter: 'Q3 2025', graduationRate: 95.8, certPassRate: 96.5, docBaseline: 62.4, enrolled: 1280, graduated: 1226 },
  { quarter: 'Q4 2025', graduationRate: 96.4, certPassRate: 97.1, docBaseline: 62.8, enrolled: 1500, graduated: 1446 }
];

// Resource Utilization & Classroom Activity Trends
const RESOURCE_UTILIZATION_DATA = [
  { month: 'Jan', workstationOccupancy: 76, aiLabHours: 1420, mentorHours: 320, libraryModulesCompleted: 1150 },
  { month: 'Feb', workstationOccupancy: 81, aiLabHours: 1680, mentorHours: 390, libraryModulesCompleted: 1340 },
  { month: 'Mar', workstationOccupancy: 84, aiLabHours: 1890, mentorHours: 440, libraryModulesCompleted: 1620 },
  { month: 'Apr', workstationOccupancy: 87, aiLabHours: 2100, mentorHours: 510, libraryModulesCompleted: 1890 },
  { month: 'May', workstationOccupancy: 89, aiLabHours: 2350, mentorHours: 580, libraryModulesCompleted: 2180 },
  { month: 'Jun', workstationOccupancy: 91, aiLabHours: 2540, mentorHours: 640, libraryModulesCompleted: 2450 },
  { month: 'Jul', workstationOccupancy: 93, aiLabHours: 2780, mentorHours: 710, libraryModulesCompleted: 2720 },
  { month: 'Aug', workstationOccupancy: 92, aiLabHours: 2890, mentorHours: 750, libraryModulesCompleted: 2910 },
  { month: 'Sep', workstationOccupancy: 94, aiLabHours: 3120, mentorHours: 820, libraryModulesCompleted: 3180 },
  { month: 'Oct', workstationOccupancy: 95, aiLabHours: 3340, mentorHours: 890, libraryModulesCompleted: 3450 },
  { month: 'Nov', workstationOccupancy: 96, aiLabHours: 3560, mentorHours: 940, libraryModulesCompleted: 3720 },
  { month: 'Dec', workstationOccupancy: 97, aiLabHours: 3810, mentorHours: 990, libraryModulesCompleted: 4050 }
];

// Agency Partner Benchmark Performance Comparison
const AGENCY_PARTNER_BENCHMARKS = [
  { partner: 'State DOC - North Division', graduationRate: 95.8, employmentRate: 88.2, retention12Mo: 86.5, recidivismReduction: 68.4, totalParticipants: 840 },
  { partner: 'Metro Workforce Board (WIOA)', graduationRate: 94.2, employmentRate: 91.0, retention12Mo: 89.2, recidivismReduction: 72.1, totalParticipants: 620 },
  { partner: 'County Reentry Bureau', graduationRate: 92.5, employmentRate: 85.4, retention12Mo: 84.0, recidivismReduction: 64.8, totalParticipants: 450 },
  { partner: 'Regional Veterans Transition', graduationRate: 97.1, employmentRate: 94.5, retention12Mo: 92.8, recidivismReduction: 78.5, totalParticipants: 310 },
  { partner: 'State DOC - South Division', graduationRate: 93.8, employmentRate: 87.0, retention12Mo: 85.1, recidivismReduction: 66.2, totalParticipants: 620 }
];

export function PerformanceDashboard() {
  const [timeframe, setTimeframe] = useState<'all' | '2024' | '2025'>('all');
  const [metricView, setMetricView] = useState<'graduation' | 'utilization' | 'agencies'>('graduation');
  const [selectedAgency, setSelectedAgency] = useState<string>('All');

  // Filtered graduation data based on timeframe
  const filteredGraduationData = GRADUATION_TRENDS_DATA.filter((item) => {
    if (timeframe === '2024') return item.quarter.includes('2024');
    if (timeframe === '2025') return item.quarter.includes('2025');
    return true;
  });

  const filteredAgencyData = AGENCY_PARTNER_BENCHMARKS.filter((agency) => {
    if (selectedAgency === 'All') return true;
    return agency.partner === selectedAgency;
  });

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Agency Partner Performance Analytics</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Program Outcomes & Resource Utilization Trends
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Real-time analytics tracking graduation rates, micro-credential attainment, workstation utilization, and longitudinal employment retention across state and county agency deployments.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 space-y-1 shrink-0">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Agency Outcome Feed</span>
            </div>
            <div className="text-[11px] text-slate-400">Updated Quarterly • Audited WIOA & DOC Metrics</div>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Avg Graduation Rate</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">95.8%</span>
            <span className="text-xs font-bold text-emerald-500 flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +33.8% vs Baseline
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Compared to state DOC 62.0% vocational baseline average.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Resource Utilization</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">97.0%</span>
            <span className="text-xs font-bold text-blue-500 flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
              Peak Capacity
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            AI lab workstation occupancy & classroom uptime.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Program Graduates</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">6,033</span>
            <span className="text-xs font-bold text-purple-500 flex items-center gap-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% Certified
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Earned OpenBadges 2.0 micro-credentials across 8 cohorts.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Agency Partners</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">18 Systems</span>
            <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
              Statewide
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Deployed across State DOC, County Reentry, and WIOA Boards.
          </p>
        </div>
      </div>

      {/* Dashboard View & Timeframe Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Metric View Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setMetricView('graduation')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              metricView === 'graduation'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Graduation & Certification Trends</span>
          </button>

          <button
            onClick={() => setMetricView('utilization')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              metricView === 'utilization'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Resource & Workstation Utilization</span>
          </button>

          <button
            onClick={() => setMetricView('agencies')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              metricView === 'agencies'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Agency Partner Benchmarks</span>
          </button>
        </div>

        {/* Timeframe Filter */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 font-bold hidden sm:inline">Timeframe:</span>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {['all', '2024', '2025'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf as any)}
                className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-colors ${
                  timeframe === tf
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tf === 'all' ? 'All Quarters' : tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CHART SECTION 1: GRADUATION & CERTIFICATION TRENDS */}
      {metricView === 'graduation' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Quarterly Graduation Rate & Certification Pass Rate Trends (%)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tracking participant graduation rates, credential exam pass rates, and comparison against state DOC vocational baselines.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">Graduation Rate (%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-slate-600 dark:text-slate-300">Cert Pass Rate (%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-400" />
                <span className="text-slate-600 dark:text-slate-300">DOC Baseline (%)</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredGraduationData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGraduation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorCertPass" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="quarter" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis domain={[40, 100]} stroke="#64748b" fontSize={11} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#1e293b',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                  formatter={(value: any, name: any) => [
                    `${value}%`,
                    name === 'graduationRate' ? 'Graduation Rate' : name === 'certPassRate' ? 'Certification Pass Rate' : 'State DOC Baseline'
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="graduationRate"
                  stroke="#10b981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorGraduation)"
                  name="Graduation Rate"
                />
                <Area
                  type="monotone"
                  dataKey="certPassRate"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorCertPass)"
                  name="Cert Pass Rate"
                />
                <Line
                  type="monotone"
                  dataKey="docBaseline"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="DOC Baseline"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Q4 2025 Graduation Benchmark:</span>
              <p className="text-slate-600 dark:text-slate-300">
                Reached <strong className="text-emerald-500">96.4%</strong> overall completion, with 1,446 certified graduates out of 1,500 enrollees.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Micro-Credential Pass Rate:</span>
              <p className="text-slate-600 dark:text-slate-300">
                <strong className="text-blue-500">97.1%</strong> first-time pass rate on industry-recognized OpenBadges 2.0 practical assessments.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Baseline Delta:</span>
              <p className="text-slate-600 dark:text-slate-300">
                Outperforms standard agency vocational programs by <strong className="text-emerald-500">+33.6 percentage points</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CHART SECTION 2: RESOURCE & WORKSTATION UTILIZATION */}
      {metricView === 'utilization' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-500" />
                <span>Monthly Classroom & AI Workstation Resource Utilization</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Monitoring monthly AI lab hours logged, mentorship contact sessions, and workstation capacity usage across agency facilities.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-slate-600 dark:text-slate-300">AI Lab Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-sky-500" />
                <span className="text-slate-600 dark:text-slate-300">Mentor Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">Workstation %</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={RESOURCE_UTILIZATION_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis yAxisId="left" stroke="#64748b" fontSize={11} tickLine={false} label={{ value: 'Hours', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10 }} />
                <YAxis yAxisId="right" orientation="right" domain={[50, 100]} stroke="#10b981" fontSize={11} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#1e293b',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar yAxisId="left" dataKey="aiLabHours" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="AI Lab Hours" />
                <Bar yAxisId="left" dataKey="mentorHours" fill="#0ea5e9" radius={[4, 4, 0, 0]} name="Mentor Hours" />
                <Line yAxisId="right" type="monotone" dataKey="workstationOccupancy" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} name="Workstation Occupancy %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Peak Lab Occupancy:</span>
              <p className="text-slate-600 dark:text-slate-300">
                Reached <strong className="text-emerald-500">97.0%</strong> capacity efficiency in Q4 2025 across all facility AI labs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Annual AI Lab Hours:</span>
              <p className="text-slate-600 dark:text-slate-300">
                Over <strong className="text-purple-500">32,830 hours</strong> of hands-on generative prompt engineering completed safely behind proxy firewalls.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Self-Paced Learning:</span>
              <p className="text-slate-600 dark:text-slate-300">
                <strong className="text-sky-500">30,680 individual course modules</strong> completed by pre-release participants.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CHART SECTION 3: AGENCY PARTNER BENCHMARKS */}
      {metricView === 'agencies' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-500" />
                <span>Agency Partner Outcome Benchmarks Comparison</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Comparing graduation rates, 90-day job placement, 12-month retention, and recidivism reduction across partner agency deployments.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">Graduation %</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-slate-600 dark:text-slate-300">Job Placement %</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-slate-600 dark:text-slate-300">12-Mo Retention %</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredAgencyData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="partner" stroke="#64748b" fontSize={10} tickLine={false} interval={0} angle={-10} textAnchor="end" />
                <YAxis domain={[50, 100]} stroke="#64748b" fontSize={11} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#1e293b',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="graduationRate" fill="#10b981" radius={[4, 4, 0, 0]} name="Graduation Rate %" />
                <Bar dataKey="employmentRate" fill="#3b82f6" radius={[4, 4, 0, 0]} name="90-Day Placement %" />
                <Bar dataKey="retention12Mo" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="12-Month Retention %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            {AGENCY_PARTNER_BENCHMARKS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>{item.partner}</span>
                  <span className="text-emerald-500 font-mono">{item.totalParticipants} Participants</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 block text-[9px] uppercase">Graduation</span>
                    <strong className="text-emerald-500 text-xs">{item.graduationRate}%</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 block text-[9px] uppercase">Placement</span>
                    <strong className="text-blue-500 text-xs">{item.employmentRate}%</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 block text-[9px] uppercase">Recidivism Cut</span>
                    <strong className="text-purple-500 text-xs">-{item.recidivismReduction}%</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
