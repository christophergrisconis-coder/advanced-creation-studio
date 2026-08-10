import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROMOTIONAL_VIDEO_SCRIPT, ALTERNATIVE_CONCEPTS } from '../data/videoData';
import { VideoScript, VideoScene } from '../types';
import { Play, Pause, SkipForward, Copy, Check, Download, Sparkles, Clapperboard, Clock, Volume2, Palette, FileText, Code2, Film, Video, RefreshCw, Layers, Monitor, Smartphone, Gauge, Radio, ShieldCheck } from 'lucide-react';

export function VideoStudio() {
  const [currentScript, setCurrentScript] = useState<VideoScript>(PROMOTIONAL_VIDEO_SCRIPT);
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackProgress, setPlaybackProgress] = useState<number>(0);

  // AI Video Render State
  const [renderMode, setRenderMode] = useState<'storyboard' | 'ai-preview'>('ai-preview');
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [renderProgress, setRenderProgress] = useState<number>(0);
  const [renderStep, setRenderStep] = useState<string>('Ready for AI Production');
  const [selectedResolution, setSelectedResolution] = useState<'4K' | '1080P' | '9:16'>('4K');
  const [isAiVideoPlaying, setIsAiVideoPlaying] = useState<boolean>(true);
  const [aiVideoTimecode, setAiVideoTimecode] = useState<number>(14); // seconds
  const [watermarkEnabled, setWatermarkEnabled] = useState<boolean>(true);

  // Custom script generator inputs
  const [targetAudience, setTargetAudience] = useState<string>('Federal & State Procurement Directors');
  const [customSlogan, setCustomSlogan] = useState<string>('Complete. Professional. Contract-Ready.');
  const [customDuration, setCustomDuration] = useState<number>(60);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const selectedScene = currentScript.scenes[selectedSceneIndex] || currentScript.scenes[0];

  // Storyboard playback simulation effect
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            setSelectedSceneIndex((sceneIdx) => {
              if (sceneIdx + 1 < currentScript.scenes.length) {
                return sceneIdx + 1;
              } else {
                setIsPlaying(false);
                return 0;
              }
            });
            return 0;
          }
          return prev + 10;
        });
      }, 400);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentScript.scenes.length]);

  // AI Video Timecode ticking effect
  useEffect(() => {
    let interval: any = null;
    if (isAiVideoPlaying && !isRendering) {
      interval = setInterval(() => {
        setAiVideoTimecode((prev) => (prev >= currentScript.totalDurationSeconds ? 0 : prev + 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isAiVideoPlaying, isRendering, currentScript.totalDurationSeconds]);

  // Handle AI Video Production Simulation
  const handleStartAiRender = () => {
    setIsRendering(true);
    setRenderProgress(5);
    setRenderStep('Parsing Script & Synthesizing Voiceover (Gemini Pro)...');

    setTimeout(() => {
      setRenderProgress(30);
      setRenderStep('Generating 4K Photorealistic Keyframes & Motion Layers...');
    }, 1200);

    setTimeout(() => {
      setRenderProgress(65);
      setRenderStep('Compositing Spatial Audio, Sound Effects & Subtitles...');
    }, 2400);

    setTimeout(() => {
      setRenderProgress(90);
      setRenderStep('Encoding Master MP4 Stream with Agency Metadata...');
    }, 3600);

    setTimeout(() => {
      setRenderProgress(100);
      setRenderStep('AI Production Complete — High Definition Master Ready');
      setIsRendering(false);
      setIsAiVideoPlaying(true);
      setAiVideoTimecode(0);
    }, 4500);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(currentScript, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([JSON.stringify(currentScript, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video-script-pro.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleGenerateCustomScript = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const generatedScenes: VideoScene[] = [
        {
          id: 1,
          timeRange: "0:00 - 0:05",
          durationSeconds: 5,
          visualDirection: `Opening graphic with Navy background (#0B1120). Text animates smoothly for ${targetAudience}.`,
          voiceoverText: `Advanced Creation Studio brings strategic clarity and turnkey execution to ${targetAudience}.`,
          textOverlay: `ADVANCED CREATION STUDIO | ${customSlogan}`,
          soundDesignNotes: "Modern subtle synth riser with crisp bass drop.",
          colorPalette: "Navy (#0B1120), Electric Blue (#1E90FF)"
        },
        {
          id: 2,
          timeRange: "0:05 - 0:15",
          durationSeconds: 10,
          visualDirection: "Cinematic footage of state facilities, strategic planning sessions, and digital dashboard metrics.",
          voiceoverText: "Our flagship programs deliver measurable outcomes, combining data rigor with compassionate execution.",
          textOverlay: "Proven Strategy • Measurable Public Sector Impact",
          soundDesignNotes: "Warm acoustic piano paired with subtle electronic beats.",
          colorPalette: "Slate Blue, Crisp White, Emerald Accent"
        },
        {
          id: 3,
          timeRange: "0:15 - 0:30",
          durationSeconds: 15,
          visualDirection: "Split screen of workforce integration training and participant career launch milestone.",
          voiceoverText: "Empowering communities with job retention programs, structured peer mentorship, and certified skills.",
          textOverlay: "88.4% Job Retention • 64% Recidivism Reduction",
          soundDesignNotes: "Uplifting crescendo with strings.",
          colorPalette: "Deep Navy, Pure White, Bright Sky Blue"
        },
        {
          id: 4,
          timeRange: "0:30 - 0:45",
          durationSeconds: 15,
          visualDirection: "Showcase of CAGE/UEI compliance readiness, AI video studio capabilities, and contract deliverables.",
          voiceoverText: "From video production and communication strategy to full compliance reporting, we are contract-ready.",
          textOverlay: "Turnkey CAGE / UEI Contract Compliance",
          soundDesignNotes: "Tech data chime effect.",
          colorPalette: "Navy (#0B1120), Platinum White"
        },
        {
          id: 5,
          timeRange: `0:45 - 1:00`,
          durationSeconds: 15,
          visualDirection: "Final closing card with logo glow, official domain link, and call to action.",
          voiceoverText: "Partner with Advanced Creation Studio today. Clear. Consistent. Confident.",
          textOverlay: "advancedcreationstudio.com | Complete. Professional. Contract-Ready.",
          soundDesignNotes: "Resolving grand chord fade out.",
          colorPalette: "Navy (#0B1120), Blue (#1E90FF), White"
        }
      ];

      setCurrentScript({
        title: `Custom Video Script for ${targetAudience}`,
        conceptName: "Tailored Agency Strategy",
        targetAudience: targetAudience,
        totalDurationSeconds: customDuration,
        slogan: customSlogan,
        scenes: generatedScenes,
        callToAction: {
          text: "Schedule an Agency Briefing",
          website: "advancedcreationstudio.com",
          phone: "1-800-ACS-GOV1"
        },
        technicalSpecs: PROMOTIONAL_VIDEO_SCRIPT.technicalSpecs
      });

      setIsGenerating(false);
      setSelectedSceneIndex(0);
      handleStartAiRender();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-10 py-6"
    >
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Clapperboard className="w-4 h-4 text-sky-400" />
            <span>Interactive Media & AI Video Studio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Video Production & Storyboard Engine
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Generate, render, and preview 45-60 second agency-grade video productions with real-time audio waveforms, keyframe composition, and 4K UHD rendering.
          </p>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 w-fit mx-auto sm:mx-0">
        <button
          onClick={() => setRenderMode('ai-preview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            renderMode === 'ai-preview'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>AI Video Generation Preview</span>
        </button>

        <button
          onClick={() => setRenderMode('storyboard')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            renderMode === 'storyboard'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Scene Storyboard Breakdown</span>
        </button>
      </div>

      {/* AI VIDEO GENERATION PREVIEW STATE */}
      {renderMode === 'ai-preview' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>AI Media Engine • Google Generative AI Pipeline</span>
              </div>
              <h3 className="text-xl font-bold text-white pt-1">
                {currentScript.title}
              </h3>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 text-[11px] font-mono">
                {(['4K', '1080P', '9:16'] as const).map((res) => (
                  <button
                    key={res}
                    onClick={() => setSelectedResolution(res)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                      selectedResolution === res
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {res}
                  </button>
                ))}
              </div>

              <button
                onClick={handleStartAiRender}
                disabled={isRendering}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRendering ? 'animate-spin' : ''}`} />
                <span>{isRendering ? 'Rendering...' : 'Re-Render AI Video'}</span>
              </button>
            </div>
          </div>

          {/* AI Video Render Container */}
          <div className="relative rounded-2xl bg-black border border-slate-800 overflow-hidden shadow-2xl min-h-[360px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-8">
            {/* Background Animated Video Canvas Mock */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-slate-950 to-indigo-950/90" />
              
              {/* Dynamic Animated Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Pulsing AI Energy Particles */}
              <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl ${isAiVideoPlaying ? 'animate-pulse' : ''}`} />
              <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl ${isAiVideoPlaying ? 'animate-pulse' : ''}`} />

              {/* Simulated Motion Keyframe Backdrop */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[500px] h-[300px] border border-blue-400/40 rounded-3xl transform -rotate-3 scale-110 flex items-center justify-center">
                  <span className="text-8xl font-black text-blue-400/20">ACS 4K</span>
                </div>
              </div>
            </div>

            {/* Rendering Progress Overlay */}
            <AnimatePresence>
              {isRendering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-8 space-y-6 text-center"
                >
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                    <div
                      className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
                    />
                    <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
                      AI Generation Pipeline ({renderProgress}%)
                    </div>
                    <div className="text-base font-bold text-white">
                      {renderStep}
                    </div>
                  </div>

                  <div className="w-full max-w-xs h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300"
                      style={{ width: `${renderProgress}%` }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top Video OSD HUD */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  AI RENDER OK
                </span>
                <span className="text-slate-500">|</span>
                <span>{selectedResolution} UHD</span>
                <span className="text-slate-500">|</span>
                <span>59.94 FPS</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700 text-slate-300">
                  {watermarkEnabled ? 'WATERMARK: ON' : 'CLEAN FEED'}
                </span>
              </div>
            </div>

            {/* Center Visual Mock Frame */}
            <div className="relative z-10 my-8 text-center space-y-4">
              {watermarkEnabled && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Advanced Creation Studio • Government Media Asset</span>
                </div>
              )}

              <div className="max-w-xl mx-auto space-y-2">
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase bg-gradient-to-r from-white via-sky-200 to-blue-300 bg-clip-text text-transparent drop-shadow-md">
                  {selectedScene.textOverlay}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium italic">
                  "{selectedScene.visualDirection}"
                </p>
              </div>

              {/* Subtitle Caption Bar */}
              <div className="inline-block px-5 py-2.5 rounded-2xl bg-black/80 border border-blue-500/30 text-emerald-300 text-xs sm:text-sm font-serif italic max-w-lg shadow-lg">
                VO: "{selectedScene.voiceoverText}"
              </div>
            </div>

            {/* Bottom Audio Waveform & Scrubber HUD */}
            <div className="relative z-10 space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsAiVideoPlaying(!isAiVideoPlaying)}
                    className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
                  >
                    {isAiVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-white font-bold">
                    00:{aiVideoTimecode < 10 ? `0${aiVideoTimecode}` : aiVideoTimecode}.00
                  </span>
                  <span className="text-slate-500">/</span>
                  <span className="text-slate-400">01:00.00</span>
                </div>

                {/* Animated Waveform Bars */}
                <div className="flex items-center gap-1 h-5">
                  {[40, 70, 30, 90, 60, 100, 45, 80, 50, 90, 35, 75, 60, 40, 85, 95, 50].map((h, idx) => (
                    <div
                      key={idx}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isAiVideoPlaying ? 'bg-sky-400 animate-pulse' : 'bg-slate-700'
                      }`}
                      style={{ height: isAiVideoPlaying ? `${Math.min(100, h * (0.8 + Math.random() * 0.4))}%` : '30%' }}
                    />
                  ))}
                </div>
              </div>

              {/* Timeline Scrubber */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-sky-400"
                  style={{ width: `${(aiVideoTimecode / currentScript.totalDurationSeconds) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STORYBOARD MODE */}
      {renderMode === 'storyboard' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                <Film className="w-4 h-4" />
                <span>Interactive Storyboard Simulation</span>
              </span>
              <h3 className="text-xl font-bold text-white pt-1">
                Scene {selectedScene.id} of {currentScript.scenes.length}: {selectedScene.timeRange}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/30"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause Simulation' : 'Play Storyboard'}</span>
              </button>

              <button
                onClick={() => {
                  setSelectedSceneIndex((prev) => (prev + 1) % currentScript.scenes.length);
                  setPlaybackProgress(0);
                }}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
                title="Next Scene"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Frame Screen Box */}
          <div className="relative rounded-2xl bg-black border border-slate-800 p-6 sm:p-10 min-h-[220px] flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 transition-all duration-300" style={{ width: `${playbackProgress}%` }} />

            <div className="flex justify-between items-start text-xs font-mono text-slate-400">
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                FRAME TIMING: {selectedScene.timeRange}
              </span>
              <span className="text-sky-400 font-bold">
                {selectedScene.colorPalette}
              </span>
            </div>

            <div className="my-6 text-center space-y-2">
              <div className="inline-block px-4 py-2 rounded-xl bg-slate-900/90 border border-blue-500/40 text-white font-black text-sm sm:text-lg tracking-wide uppercase shadow-lg">
                {selectedScene.textOverlay}
              </div>
              <p className="text-xs text-slate-400 italic max-w-xl mx-auto">
                "{selectedScene.visualDirection}"
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="italic text-emerald-300 font-serif">VO: "{selectedScene.voiceoverText}"</span>
            </div>
          </div>

          {/* Scene Thumbnails Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {currentScript.scenes.map((scene, idx) => {
              const isSelected = idx === selectedSceneIndex;
              return (
                <button
                  key={scene.id}
                  onClick={() => {
                    setSelectedSceneIndex(idx);
                    setPlaybackProgress(0);
                    setIsPlaying(false);
                  }}
                  className={`flex-1 min-w-[120px] p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Scene 0{scene.id}
                  </div>
                  <div className="text-xs font-semibold truncate pt-0.5">
                    {scene.timeRange}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Script Scene Breakdown Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {currentScript.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total Duration: {currentScript.totalDurationSeconds} Seconds • Slogan: "{currentScript.slogan}"
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyJson}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSON' : 'Copy JSON'}</span>
            </button>

            <button
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download script-pro.json</span>
            </button>
          </div>
        </div>

        {/* Scene List */}
        <div className="space-y-4">
          {currentScript.scenes.map((scene, idx) => (
            <div
              key={scene.id}
              onClick={() => {
                setSelectedSceneIndex(idx);
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                selectedSceneIndex === idx
                  ? 'bg-slate-50 dark:bg-slate-800/80 border-blue-500 shadow-xs ring-1 ring-blue-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {scene.id}
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Timing: {scene.timeRange}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Palette: {scene.colorPalette}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-950/50">
                  <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Visual Direction & Overlay
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    {scene.visualDirection}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold pt-1">
                    Text: "{scene.textOverlay}"
                  </p>
                </div>

                <div className="space-y-1 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-950/50">
                  <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    Voiceover & Audio Design
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-serif italic">
                    "{scene.voiceoverText}"
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 pt-1">
                    Sound: {scene.soundDesignNotes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concept Generator Customizer */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Agency Concept Customizer</span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Generate Custom Agency Video Script
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Specify target procurement office or program scope to generate a tailored scene-by-scene script.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Target Audience
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Brand Slogan
            </label>
            <input
              type="text"
              value={customSlogan}
              onChange={(e) => setCustomSlogan(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Duration (Seconds)
            </label>
            <select
              value={customDuration}
              onChange={(e) => setCustomDuration(Number(e.target.value))}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={30}>30 Seconds (PSA / Spot)</option>
              <option value={45}>45 Seconds (Standard Agency)</option>
              <option value={60}>60 Seconds (Full Presentation)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerateCustomScript}
          disabled={isGenerating}
          className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isGenerating ? 'Generating Script & AI Render...' : 'Generate Custom Script & AI Render'}</span>
        </button>
      </div>
    </motion.div>
  );
}

