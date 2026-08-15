import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { TabType, TAB_PATHS, getTabFromPath } from './types';
import { HeaderNavigation } from './components/HeaderNavigation';
import { HeroOverview } from './components/HeroOverview';
import { FlagshipPortal } from './components/FlagshipPortal';
import { FeaturesPortal } from './components/FeaturesPortal';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactPortal } from './components/ContactPortal';

export default function App() {
  const [activeTab, setActiveTabState] = useState<TabType>(() =>
          typeof window !== 'undefined' ? getTabFromPath(window.location.pathname) : 'overview'
        );

      const setActiveTab = (tab: TabType) => {
              setActiveTabState(tab);
              if (typeof window !== 'undefined') {
                        window.history.pushState({}, '', TAB_PATHS[tab]);
              }
      };

      useEffect(() => {
              const handlePopState = () => {
                        setActiveTabState(getTabFromPath(window.location.pathname));
              };
              window.addEventListener('popstate', handlePopState);
              return () => window.removeEventListener('popstate', handlePopState);
      }, []);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return true; // Default to dark mode for high-contrast luxury/authoritative agency theme
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Fixed/Sticky Top Navigation Header */}
      <HeaderNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Screen Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && <HeroOverview key="overview" setActiveTab={setActiveTab} />}
          {activeTab === 'flagship' && <FlagshipPortal key="flagship" />}
          {activeTab === 'features' && <FeaturesPortal key="features" />}
          {activeTab === 'capabilities' && <CapabilitiesSection key="capabilities" />}
          {activeTab === 'contact' && <ContactPortal key="contact" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-[10px]">
              ACS
            </div>
            <span className="font-bold text-slate-200">
              Advanced Creation Studio
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden sm:inline">advancedcreationstudio.com</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Complete. Professional. Contract-Ready.</span>
            <span>|</span>
            <span>Clear. Consistent. Confident.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
