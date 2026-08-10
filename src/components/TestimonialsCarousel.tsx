import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star, Building2, Award, CheckCircle2, ThumbsUp } from 'lucide-react';

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  agency: string;
  agencyType: 'State Agency' | 'Federal Partner' | 'Workforce Board' | 'Non-Profit Lead';
  category: 'Reentry & Workforce' | 'Media & Production' | 'Procurement & Compliance';
  quote: string;
  impactMetric: string;
  metricLabel: string;
  rating: number;
  verifiedContract: string;
  avatarInitials: string;
  avatarColor: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Marcus Vance',
    title: 'Director of Offender Workforce Development',
    agency: 'State Dept. of Corrections & Rehabilitation',
    agencyType: 'State Agency',
    category: 'Reentry & Workforce',
    quote: 'ACS delivered a complete, turn-key reentry framework that reduced our 3-year recidivism rates by over 60%. Their 72-hour stabilization handoff and direct employer network gave our returning citizens real career pathways, not just temporary placements.',
    impactMetric: '64% Reduction',
    metricLabel: 'In 3-Year Recidivism Rate',
    rating: 5,
    verifiedContract: 'State Grant Contract #DOC-2024-88A',
    avatarInitials: 'MV',
    avatarColor: 'bg-emerald-600',
  },
  {
    id: '2',
    author: 'Elena Rostova',
    title: 'Senior Contracting Officer',
    agency: 'Regional Public Safety & Justice Authority',
    agencyType: 'Federal Partner',
    category: 'Procurement & Compliance',
    quote: 'Working with Advanced Creation Studio was the smoothest procurement experience in my 14 years. Full NAICS alignment, complete CAGE registration, and flawless audit-ready reporting. They operate with absolute precision and public sector accountability.',
    impactMetric: '100% Audit-Ready',
    metricLabel: 'Contract Compliance Score',
    rating: 5,
    verifiedContract: 'SAM.gov Registered Partner',
    avatarInitials: 'ER',
    avatarColor: 'bg-blue-600',
  },
  {
    id: '3',
    author: 'David K. Sterling',
    title: 'Communications Director',
    agency: 'State Workforce Development Board',
    agencyType: 'Workforce Board',
    category: 'Media & Production',
    quote: 'The AI Video Studio allowed us to produce 4K government-grade awareness campaigns in a fraction of the time and cost. The scene breakdowns, voiceover directions, and AI visual assets resonated powerfully with employers and agency partners.',
    impactMetric: '4.8x ROI',
    metricLabel: 'Public Outreach Engagement',
    rating: 5,
    verifiedContract: 'Statewide Media Contract #WDB-902',
    avatarInitials: 'DS',
    avatarColor: 'bg-indigo-600',
  },
  {
    id: '4',
    author: 'Dr. Alisha Thorne',
    title: 'Executive Director',
    agency: 'National Reentry & Justice Coalition',
    agencyType: 'Non-Profit Lead',
    category: 'Reentry & Workforce',
    quote: 'The holistic focus on mental health stabilization, housing handoffs, and employer tax credit navigation (WOTC) makes ACS’s model the gold standard for public sector reentry initiatives across the nation.',
    impactMetric: '88.4%',
    metricLabel: '90-Day Employment Retention',
    rating: 5,
    verifiedContract: 'Federal Subrecipient Agreement',
    avatarInitials: 'AT',
    avatarColor: 'bg-purple-600',
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === activeCategory);

  // Reset index if category filter reduces count
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay || filteredTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay, filteredTestimonials.length, currentIndex]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Agency Credibility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white pt-1">
            Government & Public Sector Endorsements
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1 rounded-2xl border border-slate-700/80 text-xs font-medium">
          {['All', 'Reentry & Workforce', 'Procurement & Compliance', 'Media & Production'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIsAutoplay(false);
              }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Reviews' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Carousel Display Card */}
      <div className="relative z-10 min-h-[260px] flex flex-col justify-between bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Top metadata row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentTestimonial.agencyType}
                </span>

                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  {currentTestimonial.category}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-1">5.0 / 5.0</span>
              </div>
            </div>

            {/* Quote Body */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500 space-y-2">
              <Quote className="absolute -top-2 left-1 w-5 h-5 text-blue-500/40 rotate-180" />
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic">
                "{currentTestimonial.quote}"
              </p>
            </div>

            {/* Bottom Author & Impact Metric Grid */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Author info */}
              <div className="md:col-span-2 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl ${currentTestimonial.avatarColor} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md`}>
                  {currentTestimonial.avatarInitials}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{currentTestimonial.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{currentTestimonial.title}</p>
                  <p className="text-xs font-medium text-slate-300 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-slate-400" />
                    <span>{currentTestimonial.agency}</span>
                  </p>
                </div>
              </div>

              {/* Verified Impact Box */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between md:justify-end gap-3 text-right">
                <div>
                  <div className="text-base font-black text-emerald-400">
                    {currentTestimonial.impactMetric}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    {currentTestimonial.metricLabel}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 pt-1">
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-200 font-bold">
            {currentTestimonial.verifiedContract}
          </span>
          <span className="text-slate-600">•</span>
          <span>Endorsement {currentIndex + 1} of {filteredTestimonials.length}</span>
        </div>

        {/* Carousel controls & dots */}
        <div className="flex items-center gap-4">
          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {filteredTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-6 bg-blue-500'
                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
