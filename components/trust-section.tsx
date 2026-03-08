'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-16 bg-[#F8F9FB] border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 text-center">
          
          {/* Block 1: Google Reviews */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center group"
          >
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6 object-contain" />
            </div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-2">Google Reviews</h4>
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />)}
            </div>
            <p className="text-lg font-black text-slate-900 leading-none">4.5/5</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">20k+ Happy Reviews</p>
          </motion.div>

          {/* Block 2: Center Award Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center py-8 px-12 rounded-full border-2 border-orange-100 bg-white shadow-2xl shadow-orange-500/10"
          >
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />)}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-slate-900 leading-none">4300+</span>
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mt-1">Total Reviews</span>
            </div>
            <div className="h-px w-12 bg-orange-100 my-4" />
            <div className="flex flex-col items-center text-center">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-tight">Voted No. 1</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">In India Legal Services</p>
            </div>
            {/* Laurel Wreath Style Elements */}
            <Award className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 text-orange-200 opacity-50" />
            <Award className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 text-orange-200 opacity-50 flip-x" />
          </motion.div>

          {/* Block 3: Trustpilot Reviews */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="w-14 h-14 rounded-full bg-[#00b67a] shadow-md flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <Star className="w-7 h-7 text-white fill-white" />
            </div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-2">Trustpilot</h4>
            <div className="flex gap-0.5 mb-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-sm">
                  <Star className="w-2.5 h-2.5 fill-white text-white" />
                </div>
              ))}
            </div>
            <p className="text-lg font-black text-slate-900 leading-none">4.5/5</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">7500+ Happy Reviews</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
