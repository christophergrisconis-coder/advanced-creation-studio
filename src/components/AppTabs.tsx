import React from 'react';
import { ExternalLink, Sun, Moon } from 'lucide-react';

interface AppTabsProps {
  activeTab: 'home' | 'explore';
  setActiveTab: (tab: 'home' | 'explore') => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export function AppTabs({ activeTab, setActiveTab, darkMode, setDarkMode }: AppTabsProps) {
  return (
    <nav className="sticky top-4 z-50 w-full max-w-3xl mx-auto px-4 mb-6">
      <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#F0F0F3]/90 dark:bg-[#212225]/90 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-lg transition-colors">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black text-xs">
            EX
          </div>
          <span className="font-bold text-sm tracking-tight text-gray-900 dark:text-white">
            Expo Starter
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 bg-gray-200/60 dark:bg-black/40 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'home'
                ? 'bg-white dark:bg-[#2E3135] text-gray-900 dark:text-white shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'explore'
                ? 'bg-white dark:bg-[#2E3135] text-gray-900 dark:text-white shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Explore
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-1.5 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href="https://docs.expo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline px-2.5 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
          >
            <span>Docs</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
