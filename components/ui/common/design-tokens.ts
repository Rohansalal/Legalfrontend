export const colors = {
  brand: {
    primary: '#022d54',
    primaryLight: '#0a3f6e',
    primaryDark: '#011d38',
  },
  accent: {
    blue: '#3b82f6',
    indigo: '#6366f1',
    emerald: '#10b981',
    orange: '#f97316',
    pink: '#ec4899',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    400: '#94a3b8',
    500: '#64748b',
    900: '#0f172a',
    950: '#020617',
  },
} as const;

export const radius = {
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
} as const;

export const shadows = {
  card: '0 4px 24px -4px rgba(2, 45, 84, 0.08)',
  hover: '0 40px 80px -20px rgba(2, 45, 84, 0.25)',
  blue: '0 20px 50px rgba(59, 130, 246, 0.3)',
} as const;

export const animation = {
  fast: { duration: 0.3 },
  base: { duration: 0.5 },
  slow: { duration: 0.8 },
  spring: { type: 'spring', bounce: 0.2, duration: 0.6 },
  easeOut: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
} as const;
