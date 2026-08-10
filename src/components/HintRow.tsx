import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface HintRowProps {
  title: string;
  hint: React.ReactNode;
  codeToCopy?: string;
}

export function HintRow({ title, hint, codeToCopy }: HintRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#F0F0F3] dark:bg-[#212225] border border-black/5 dark:border-white/5 transition-colors">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {title}
      </span>
      <div className="flex items-center gap-2">
        <div className="px-2.5 py-1 rounded-md bg-white dark:bg-black/40 font-mono text-xs text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800">
          {hint}
        </div>
        {codeToCopy && (
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    </div>
  );
}
