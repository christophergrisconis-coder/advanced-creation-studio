import { VideoScript } from '../types';

export const PROMOTIONAL_VIDEO_SCRIPT: VideoScript = {
  title: "Advanced Creation Studio — Strategic Vision & Impact",
  conceptName: "Brand Authority & Government Precision",
  targetAudience: "Federal & State Government Procurement Officers, Agency Directors, Reentry Coordinators",
  totalDurationSeconds: 60,
  slogan: "Complete. Professional. Contract-Ready.",
  scenes: [
    {
      id: 1,
      timeRange: "0:00 - 0:04",
      durationSeconds: 4,
      visualDirection: "Opening title card on Navy background (#0B1120) with subtle animated grid overlay. High contrast white typography fades in with geometric blue glow.",
      voiceoverText: "In government procurement, clarity and execution define true impact.",
      textOverlay: "ADVANCED CREATION STUDIO | Complete. Professional. Contract-Ready.",
      soundDesignNotes: "Deep synth pulse with subtle low-frequency riser.",
      colorPalette: "Navy (#0B1120), Electric Blue (#1E90FF)"
    },
    {
      id: 2,
      timeRange: "0:04 - 0:08",
      durationSeconds: 4,
      visualDirection: "Clean cinematic visual of federal agency headquarters and strategic briefing room.",
      voiceoverText: "Advanced Creation Studio delivers end-to-end creative strategy and execution tailored specifically for public sector initiatives.",
      textOverlay: "Strategic Creative Partner for Public Sector & Agency Mission Success",
      soundDesignNotes: "Inspiring ambient orchestral pads start softly underneath.",
      colorPalette: "Slate Navy, Crisp White, Accent Cyan"
    },
    {
      id: 3,
      timeRange: "0:08 - 0:12",
      durationSeconds: 4,
      visualDirection: "Dynamic split-screen highlighting our flagship Recidivism Reduction & Reentry Support Program.",
      voiceoverText: "Our flagship program bridges the gap between correctional facility support and sustained workforce reentry.",
      textOverlay: "Flagship Program: Recidivism Reduction & Reentry Support",
      soundDesignNotes: "Upbeat rhythm subtle click track introducing momentum.",
      colorPalette: "Navy Blue, Emerald Green Accent"
    },
    {
      id: 4,
      timeRange: "0:12 - 0:16",
      durationSeconds: 4,
      visualDirection: "Data visualization graphic showing 64% reduction in 3-year recidivism metrics compared to state baselines.",
      voiceoverText: "Evidence-based, metric-driven, and designed for scalable state and federal implementation.",
      textOverlay: "64% Recidivism Reduction | 88% 90-Day Job Retention",
      soundDesignNotes: "Tech data chime effect with warm cello melody.",
      colorPalette: "Deep Navy, Pure White, Bright Sky Blue"
    },
    {
      id: 5,
      timeRange: "0:16 - 0:20",
      durationSeconds: 4,
      visualDirection: "Close-up of participant receiving certified workforce credentials and entering modern tech workplace.",
      voiceoverText: "Empowering justice-involved individuals with high-demand skillsets and structured community support.",
      textOverlay: "Workforce Integration & Employer Partnerships",
      soundDesignNotes: "Warm acoustic element blended with modern electronica.",
      colorPalette: "Warm Navy, Gold Accent, Clean White"
    },
    {
      id: 6,
      timeRange: "0:20 - 0:24",
      durationSeconds: 4,
      visualDirection: "Showcase of AI-driven media studio tools, contract readiness documentation, and rapid content generation.",
      voiceoverText: "From video production and strategy to full compliance reporting, we deliver contract-ready solutions.",
      textOverlay: "Turnkey Media Production & CAGE/UEI Compliance",
      soundDesignNotes: "Modern digital swipe transition sound.",
      colorPalette: "Navy, Electric Cyan, Platinum White"
    },
    {
      id: 7,
      timeRange: "0:24 - 0:28",
      durationSeconds: 4,
      visualDirection: "Call-to-action screen with website URL, CAGE code, and procurement contact info.",
      voiceoverText: "Partner with Advanced Creation Studio today. Clear, consistent, confident.",
      textOverlay: "advancedcreationstudio.com | CAGE: Ready | UEI: Active",
      soundDesignNotes: "Resolving piano chord with crisp tail fade out.",
      colorPalette: "Navy (#0B1120), Blue (#1E90FF), Pure White"
    }
  ],
  callToAction: {
    text: "Schedule a Strategic Agency Briefing",
    website: "advancedcreationstudio.com",
    phone: "1-800-ACS-GOV1"
  },
  technicalSpecs: {
    resolution: "3840 x 2160 (4K UHD) & 1920 x 1080 (Full HD)",
    frameRate: "29.97 fps / 60 fps",
    aspectRatio: "16:9 Landscape (Plus 9:16 Vertical for Agency Mobile)",
    audioSpecs: "24-bit 48kHz Stereo Mastered (-14 LUFS)"
  }
};

export const ALTERNATIVE_CONCEPTS = [
  {
    id: "impact-focused",
    name: "Impact-Focused (Reentry Transformation)",
    tagline: "Inspiring & Outcome-Grounded",
    description: "Focuses heavily on measurable human outcomes, reduced taxpayer costs, and successful community reintegration stories.",
    highlights: ["Real Reentry Trajectory Data", "Cost Savings Analysis for States", "Employer Partner Testimonials"]
  },
  {
    id: "brand-authority",
    name: "Brand Authority & Government Precision",
    tagline: "Clear. Consistent. Confident.",
    description: "Emphasizes compliance, RFP readiness, federal capability alignment, and rapid turn-key execution.",
    highlights: ["CAGE & NAICS Matrix", "RFP Fast-Track Readiness", "Public Sector Portfolio"]
  },
  {
    id: "explainer-style",
    name: "Animated Explainer & Interactive Studio",
    tagline: "Modern, Engaging & Accessible",
    description: "Uses sleek motion graphic callouts and UI walk-throughs to explain how agencies can integrate ACS services.",
    highlights: ["Step-by-Step Integration", "AI Video Script Builder Demo", "Interactive Contract Calculator"]
  }
];
