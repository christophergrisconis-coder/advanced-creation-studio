import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Globe, Send, CheckCircle2, ShieldCheck, AlertCircle, Building2, Calendar, BookOpen, Clock, FileText } from 'lucide-react';

interface FormData {
  name: string;
  agencyName: string;
  email: string;
  phone: string;
  programType: string;
  timeline: string;
  requestType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  agencyName?: string;
  email?: string;
  programType?: string;
  timeline?: string;
  message?: string;
}

export function ContactPortal() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    agencyName: '',
    email: '',
    phone: '',
    programType: 'Flagship Reentry & Recidivism Program',
    timeline: 'Immediate (Next 30 Days)',
    requestType: 'Capability Statement & Formal Proposal',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }

    if (!data.agencyName.trim()) {
      errs.agencyName = 'Agency / Organization Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = 'Official work email address is required.';
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., officer@agency.gov).';
    }

    if (!data.programType) {
      errs.programType = 'Please select a program type.';
    }

    if (!data.timeline) {
      errs.timeline = 'Please select an estimated implementation timeline.';
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      errs.message = 'Please provide brief details or scope (minimum 10 characters).';
    }

    return errs;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate(formData));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all as touched
    setTouched({
      name: true,
      agencyName: true,
      email: true,
      programType: true,
      timeline: true,
      message: true
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-10 py-6 max-w-4xl mx-auto"
    >
      {/* Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Official Government & Partner Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formal Agency Inquiry & Proposal Request
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Submit a verified inquiry to request capability statements, CAGE/SAM.gov procurement packets, or schedule a custom program briefing with our leadership team.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <span>Direct Procurement</span>
            </h3>

            <div className="space-y-4 text-xs">
              <a
                href="https://advancedcreationstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium"
              >
                <Globe className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Official Web Portal</div>
                  <div>advancedcreationstudio.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-medium">
                <Mail className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Contracting Email</div>
                  <div>gov@advancedcreationstudio.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-medium">
                <Phone className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Agency Support Desk</div>
                  <div>1-800-ACS-GOV1</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-3 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>CAGE: 9K8B2 • SAM.gov Active</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              All formal inquiries receive a priority response within 24 business hours from a certified procurement strategy officer.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Formal Inquiry Submitted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong> ({formData.agencyName}). Your formal inquiry regarding <strong>{formData.programType}</strong> has been logged. Our procurement team will review your timeline (<strong>{formData.timeline}</strong>) and reply to <span className="font-semibold text-blue-600 dark:text-blue-400">{formData.email}</span> within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    agencyName: '',
                    email: '',
                    phone: '',
                    programType: 'Flagship Reentry & Recidivism Program',
                    timeline: 'Immediate (Next 30 Days)',
                    requestType: 'Capability Statement & Formal Proposal',
                    message: ''
                  });
                  setErrors({});
                  setTouched({});
                }}
                className="mt-4 px-6 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Submit Additional Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Formal Agency Inquiry Form
                </h3>
                <span className="text-xs text-slate-400 font-medium">* Required Fields</span>
              </div>

              {/* Name & Agency Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Director Jane Doe"
                    value={formData.name}
                    onBlur={() => handleBlur('name')}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      touched.name && errors.name
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-500 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Agency Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., State Dept of Corrections / County Board"
                    value={formData.agencyName}
                    onBlur={() => handleBlur('agencyName')}
                    onChange={(e) => handleChange('agencyName', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      touched.agencyName && errors.agencyName
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
                    }`}
                  />
                  {touched.agencyName && errors.agencyName && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-500 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.agencyName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="official@agency.gov"
                    value={formData.email}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-500 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Program Type & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span>Program Type *</span>
                  </label>
                  <select
                    value={formData.programType}
                    onBlur={() => handleBlur('programType')}
                    onChange={(e) => handleChange('programType', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      touched.programType && errors.programType
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
                    }`}
                  >
                    <option value="Flagship Reentry & Recidivism Program">Flagship Reentry & Recidivism Program</option>
                    <option value="Public Sector AI Bootcamps & Literacy">Public Sector AI Bootcamps & Literacy</option>
                    <option value="Generative 4K Video Production Studio">Generative 4K Video Production Studio</option>
                    <option value="Executive AI Governance & NIST RMF Training">Executive AI Governance & NIST RMF Training</option>
                    <option value="Custom Workforce Development Cohort">Custom Workforce Development Cohort</option>
                  </select>
                  {touched.programType && errors.programType && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-500 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.programType}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Implementation Timeline *</span>
                  </label>
                  <select
                    value={formData.timeline}
                    onBlur={() => handleBlur('timeline')}
                    onChange={(e) => handleChange('timeline', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      touched.timeline && errors.timeline
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
                    }`}
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="Q2 / Within 90 Days">Q2 / Within 90 Days</option>
                    <option value="Q3 / Q4 Planning">Q3 / Q4 Planning</option>
                    <option value="Next Fiscal Year Budget">Next Fiscal Year Budget Cycle</option>
                    <option value="Urgent Grant / RFP Submission Deadline">Urgent Grant / RFP Submission Deadline</option>
                  </select>
                  {touched.timeline && errors.timeline && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-500 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.timeline}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Request Goal / Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Primary Request Objective</span>
                </label>
                <select
                  value={formData.requestType}
                  onChange={(e) => handleChange('requestType', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Capability Statement & Formal Proposal">Request Capability Statement & Sole-Source Packet</option>
                  <option value="Executive Briefing & Pilot Scheduling">Schedule Executive Briefing & Pilot Cohort Design</option>
                  <option value="Grant Subrecipient / WIOA Alignment">WIOA / Second Chance Act Grant Subrecipient Inquiry</option>
                  <option value="RFP / Sole-Source Invitation">RFP Invitation / Vendor Registration</option>
                </select>
              </div>

              {/* Message Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Project Notes & Scope Details *
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide brief details regarding target participant cohort size, facility location, or specific grant objectives..."
                  value={formData.message}
                  onBlur={() => handleBlur('message')}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none transition-colors resize-none ${
                    touched.message && errors.message
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
                  }`}
                />
                {touched.message && errors.message && (
                  <div className="flex items-center gap-1 text-[11px] text-rose-500 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Formal Inquiry to Procurement Officers</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
