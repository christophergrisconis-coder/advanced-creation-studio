import React from 'react';
import { motion } from 'motion/react';
import logoGlow from '@/assets/images/logo-glow.png';
import expoLogo from '@/assets/images/expo-logo.png';

export function AnimatedIcon() {
  return (
    <div className="relative flex items-center justify-center w-32 h-32 my-4">
      {/* Glow Effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-48 h-48 opacity-80 pointer-events-none"
      >
        <img
          src={logoGlow}
          alt="Logo Glow"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Expo Logo Card Background */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.15, 1] }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute w-32 h-32 rounded-3xl bg-[#1B1B1F] dark:bg-[#27272A] border border-white/10 shadow-xl flex items-center justify-center"
      >
        <div className="w-full h-full rounded-3xl bg-gradient-to-b from-white/10 to-transparent" />
      </motion.div>

      {/* Expo Logo Foreground */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 w-20 h-20 flex items-center justify-center"
      >
        <img
          src={expoLogo}
          alt="Expo Logo"
          className="w-16 h-16 object-contain filter drop-shadow-md"
        />
      </motion.div>
    </div>
  );
}
