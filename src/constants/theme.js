/**
 * Design Tokens & Theme Configuration
 * Centralized theme management for enterprise-level consistency
 */

export const THEME = {
  colors: {
    primary: '#06b6d4',      // cyan-400
    secondary: '#a855f7',    // violet-500
    background: '#0f172a',   // slate-950
    surface: '#1e293b',      // slate-800
    surfaceAlt: '#0f172a',   // slate-950
    text: '#ffffff',
    textSecondary: '#cbd5e1', // slate-300
    textMuted: '#64748b',    // slate-500
    border: '#1e293b',       // slate-800
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  shadows: {
    sm: '0_1px_2px_rgba(0,0,0,0.05)',
    md: '0_4px_6px_rgba(0,0,0,0.1)',
    lg: '0_10px_15px_rgba(0,0,0,0.1)',
    xl: '0_20px_50px_-20px_rgba(15,23,42,0.45)',
    glow: '0_20px_60px_-25px_rgba(6,182,212,0.8)',
  },

  transitions: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
  },
};

export const ANIMATION = {
  typing: 60,    // ms per character for typing
  deletion: 30,  // ms per character for deletion
  delay: 2000,   // ms before deleting phrase
};
