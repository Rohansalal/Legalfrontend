'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  theme?: 'light' | 'dark' | 'glass';
  className?: string;
}

export function StatCard({ value, label, description, theme = 'light', className }: StatCardProps) {
  const themes = {
    light: 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50',
    dark: 'bg-white/5 border border-white/10 backdrop-blur-2xl',
    glass: 'bg-white/10 border border-white/20 backdrop-blur-xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        'relative p-8 rounded-[2.5rem] overflow-hidden group',
        themes[theme],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 text-center">
        <div className={cn('text-5xl font-black mb-2 tracking-tighter', theme === 'light' ? 'text-slate-900' : 'text-white')}>
          {value}
        </div>
        <div className={cn('font-black text-xs uppercase tracking-[0.2em] mb-3', theme === 'light' ? 'text-primary' : 'text-blue-400')}>
          {label}
        </div>
        {description && (
          <p className={cn('text-sm font-medium leading-relaxed max-w-[180px] mx-auto', theme === 'light' ? 'text-slate-500' : 'text-slate-400')}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
