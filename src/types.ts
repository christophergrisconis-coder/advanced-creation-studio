export type TabType = 'overview' | 'flagship' | 'features' | 'capabilities' | 'contact';

export const TAB_PATHS: Record<TabType, string> = {
    overview: '/',
    flagship: '/flagship-reentry-program',
    features: '/features-ai-classes',
    capabilities: '/government-capabilities',
    contact: '/proposals-contact',
};

export function getTabFromPath(pathname: string): TabType {
    const match = (Object.entries(TAB_PATHS) as [TabType, string][]).find(
          ([, path]) => path === pathname
              );
    return match ? match[0] : 'overview';
}

export interface VideoScene {
  id: number;
  timeRange: string;
  durationSeconds: number;
  visualDirection: string;
  voiceoverText: string;
  textOverlay: string;
  soundDesignNotes: string;
  colorPalette: string;
}

export interface VideoScript {
  title: string;
  conceptName: string;
  targetAudience: string;
  totalDurationSeconds: number;
  slogan: string;
  scenes: VideoScene[];
  callToAction: {
    text: string;
    website: string;
    phone: string;
  };
  technicalSpecs: {
    resolution: string;
    frameRate: string;
    aspectRatio: string;
    audioSpecs: string;
  };
}

export interface ReentryPhase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  status: 'In-Facility' | 'Warm Handoff' | 'Career Launch' | 'Sustained Thriving';
}

export interface ImpactMetric {
  category: string;
  baseline: number;
  acsProgram: number;
  unit: string;
  description: string;
}

export interface CapabilityItem {
  code: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
}
