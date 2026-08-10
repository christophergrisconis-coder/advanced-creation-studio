import React, { useState } from 'react';
import { TabType } from '../types';
import { Sun, Moon, ShieldCheck, Clapperboard, Layers, FileText, Mail, Sparkles, Globe, Languages, Check, ChevronDown } from 'lucide-react';

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  translations: {
    contractReady: string;
    studioDesc: string;
    requestDeck: string;
    overview: string;
    flagship: string;
    features: string;
    capabilities: string;
    contact: string;
    activeNotice: string;
  };
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English (US)',
    flag: '🇺🇸',
    translations: {
      contractReady: 'Contract-Ready',
      studioDesc: 'Government-Facing Creative Strategy & Flagship Program Studio',
      requestDeck: 'Request Deck',
      overview: 'Overview',
      flagship: 'Flagship Reentry Program',
      features: 'Features & AI Classes',
      capabilities: 'Government Capabilities',
      contact: 'Proposals & Contact',
      activeNotice: 'English language selected'
    }
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇲🇽',
    translations: {
      contractReady: 'Listo para Contrato',
      studioDesc: 'Estrategia Creativa Gubernamental y Estudio de Programas Insignia',
      requestDeck: 'Solicitar Presentación',
      overview: 'Visión General',
      flagship: 'Programa de Reingreso Insignia',
      features: 'Funciones y Clases de IA',
      capabilities: 'Capacidades Gubernamentales',
      contact: 'Propuestas y Contacto',
      activeNotice: 'Traducción al español activada'
    }
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    translations: {
      contractReady: 'Prêt pour Contrat',
      studioDesc: 'Stratégie Créative Gouvernementale et Studio de Programmes Phares',
      requestDeck: 'Demander la Présentation',
      overview: 'Aperçu',
      flagship: 'Programme Phare de Réinsertion',
      features: 'Fonctionnalités et Cours IA',
      capabilities: 'Capacités Gouvernementales',
      contact: 'Propositions et Contact',
      activeNotice: 'Traduction française activée'
    }
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    translations: {
      contractReady: 'Sẵn Sàng Hợp Đồng',
      studioDesc: 'Chiến Lược Sáng Tạo Chính Phủ & Chương Trình Trọng Điểm',
      requestDeck: 'Yêu Cầu Tài Liệu',
      overview: 'Tổng Quan',
      flagship: 'Chương Trình Tái Hòa Nhập',
      features: 'Tính Năng & Lớp Học AI',
      capabilities: 'Năng Lực Chính Phủ',
      contact: 'Đề Xuất & Liên Hệ',
      activeNotice: 'Đã kích hoạt tiếng Việt'
    }
  },
  {
    code: 'tl',
    name: 'Tagalog',
    nativeName: 'Tagalog / Filipino',
    flag: '🇵🇭',
    translations: {
      contractReady: 'Handa sa Kontrata',
      studioDesc: 'Estratehiya sa Paglikha para sa Gobyerno at Flagship Program Studio',
      requestDeck: 'Humingi ng Deck',
      overview: 'Pangkalahatang Tanawin',
      flagship: 'Pangunahing Programa sa Reentry',
      features: 'Mga Tampok at Klase sa AI',
      capabilities: 'Kakayahan ng Gobyerno',
      contact: 'Mga Panukala at Pakikipag-ugnayan',
      activeNotice: 'Naka-activate ang wikang Tagalog'
    }
  },
  {
    code: 'zh',
    name: 'Chinese (Traditional)',
    nativeName: '繁體中文',
    flag: '🇹🇼',
    translations: {
      contractReady: '合約就緒',
      studioDesc: '面向政府的創意戰略與旗艦項目工作室',
      requestDeck: '索取簡報',
      overview: '總覽',
      flagship: '旗艦重返社會項目',
      features: '功能與 AI 課程',
      capabilities: '政府機構能力',
      contact: '提案與聯繫',
      activeNotice: '已啟用繁體中文翻譯'
    }
  }
];

interface HeaderNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export function HeaderNavigation({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
}: HeaderNavigationProps) {
  const [currentLang, setCurrentLang] = useState<LanguageOption>(SUPPORTED_LANGUAGES[0]);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSelectLanguage = (lang: LanguageOption) => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);
    setToastMessage(lang.translations.activeNotice);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const t = currentLang.translations;

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: t.overview, icon: <Layers className="w-4 h-4" /> },
    { id: 'flagship', label: t.flagship, icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
    { id: 'features', label: t.features, icon: <Sparkles className="w-4 h-4 text-sky-400" /> },
    { id: 'capabilities', label: t.capabilities, icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: t.contact, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white shadow-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between h-16 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center font-black text-white text-base shadow-lg shadow-blue-500/20 border border-white/20">
              ACS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white">
                  Advanced Creation Studio
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.contractReady}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {t.studioDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Multi-Lingual Translation Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all"
                title="Select Language / Translation"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-sm leading-none">{currentLang.flag}</span>
                <span className="hidden md:inline font-mono">{currentLang.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl z-50 p-1.5 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 flex items-center justify-between">
                    <span>Select Language</span>
                    <Languages className="w-3 h-3 text-blue-400" />
                  </div>
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    const isSelected = lang.code === currentLang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                          isSelected
                            ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base leading-none">{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="https://advancedcreationstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-all hover:bg-slate-800"
            >
              <span>advancedcreationstudio.com</span>
            </a>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-300" />}
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/30"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.requestDeck}</span>
            </button>
          </div>
        </div>

        {/* Translation Active Toast Notification */}
        {toastMessage && (
          <div className="bg-blue-600/10 border-b border-blue-500/20 px-4 py-1.5 text-[11px] font-mono text-blue-400 flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-blue-400 animate-spin" />
              <span>{toastMessage}</span>
            </div>
            <span className="text-slate-400 text-[10px]">Multilingual Public Accessibility Active</span>
          </div>
        )}

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

