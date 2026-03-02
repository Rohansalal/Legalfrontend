'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  index?: number;
}

export function ServiceCard({ title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto pt-4 border-t border-slate-100">
        <button className="w-full text-center py-2.5 rounded-lg border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold transition-all text-sm flex items-center justify-center gap-2">
          View More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
