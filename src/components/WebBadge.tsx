import React from 'react';
import { Globe } from 'lucide-react';

export function WebBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold shadow-xs">
      <Globe className="w-3.5 h-3.5 animate-pulse text-indigo-500" />
      <span>Web Preview Running on Port 3000</span>
    </div>
  );
}
