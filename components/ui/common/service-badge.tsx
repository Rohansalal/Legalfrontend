'use client';

import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceBadgeProps {
  icon?: LucideIcon;
  label: string;
  variant?: 'default' | 'success' | 'primary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function ServiceBadge({ icon: Icon, label, variant = 'default', size = 'sm', className }: ServiceBadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-600 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    primary: 'bg-primary/10 text-primary border border-primary/20',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-[10px] gap-1.5',
    md: 'px-4 py-2 text-xs gap-2',
  };

  return (
    <div className={cn('inline-flex items-center rounded-lg font-black uppercase tracking-wider', variants[variant], sizes[size], className)}>
      {Icon && <Icon className={cn('shrink-0', size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />}
      {label}
    </div>
  );
}
