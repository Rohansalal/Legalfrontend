'use client';

import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  description,
  align = 'left',
  theme = 'light',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const alignClass = { left: 'text-left', center: 'text-center', right: 'text-right' }[align];

  return (
    <div className={cn('space-y-4', alignClass, className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, x: align === 'center' ? 0 : -20, y: align === 'center' ? -10 : 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider',
            isDark
              ? 'bg-white/5 border border-white/10 text-blue-400'
              : 'bg-primary/10 border border-primary/20 text-primary',
            align === 'center' && 'mx-auto'
          )}
        >
          {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
          {badge}
        </motion.div>
      )}

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          'text-4xl md:text-6xl font-black tracking-tight leading-[1.1]',
          isDark ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className={cn('italic', isDark ? 'text-blue-400' : 'bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent')}>
              {titleHighlight}
            </span>
          </>
        )}
      </motion.h3>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            'text-lg md:text-xl font-medium leading-relaxed',
            isDark ? 'text-slate-400' : 'text-slate-500'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
