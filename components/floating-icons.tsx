'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Landmark, 
  FileCheck, 
  Scale, 
  Gavel, 
  Briefcase, 
  Globe, 
  Award, 
  Library 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [
  { Icon: ShieldCheck, color: 'text-blue-500', top: '10%', left: '5%', size: 48, delay: 0 },
  { Icon: Zap, color: 'text-orange-500', top: '25%', right: '8%', size: 40, delay: 1 },
  { Icon: Landmark, color: 'text-indigo-500', top: '45%', left: '3%', size: 56, delay: 2 },
  { Icon: FileCheck, color: 'text-emerald-500', top: '65%', right: '5%', size: 44, delay: 1.5 },
  { Icon: Scale, color: 'text-pink-500', top: '85%', left: '7%', size: 52, delay: 0.5 },
  { Icon: Gavel, color: 'text-slate-500', top: '15%', right: '12%', size: 48, delay: 2.5 },
  { Icon: Briefcase, color: 'text-blue-400', top: '35%', right: '2%', size: 36, delay: 3 },
  { Icon: Globe, color: 'text-indigo-400', top: '55%', left: '10%', size: 44, delay: 4 },
  { Icon: Award, color: 'text-orange-400', top: '75%', right: '10%', size: 40, delay: 3.5 },
  { Icon: Library, color: 'text-slate-400', top: '92%', right: '15%', size: 48, delay: 4.5 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
          className={cn("absolute", item.color)}
          style={{ 
            top: item.top, 
            left: item.left, 
            right: item.right, 
            bottom: item.bottom 
          }}
        >
          <item.Icon 
            size={item.size} 
            strokeWidth={1} 
            className="filter blur-[0.5px]"
          />
        </motion.div>
      ))}
    </div>
  );
}
