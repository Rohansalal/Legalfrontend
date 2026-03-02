'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, Star, ShieldCheck, Zap, Headphones, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_50%,#0a3d6d_100%)]">
      {/* Advanced Animated Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-orange-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-pink-500/15 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
...
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {/* Advanced Badge Style Trust Signal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl"
          >
            {/* Avatars + Google Group */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                  <img src="https://i.pravatar.cc/150?u=1" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                  <img src="https://i.pravatar.cc/150?u=2" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                  <img src="https://i.pravatar.cc/150?u=3" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="ml-3 w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 shadow-inner">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-[11px] font-black text-white/90 tracking-wider uppercase">Trusted by 10,000+ Entrepreneurs</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
              Register Your <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent italic">Dream Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              India's leading platform for legal and business registration. Get your company registered in 
              <span className="text-orange-400 font-bold"> just 3 steps</span> with 100% digital process.
            </p>
          </div>

          {/* Ultra-Modern Centered Search Bar */}
          <div className="relative max-w-3xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-600 to-indigo-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500" />
            <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-orange-400 transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search legal services (e.g. Pvt Ltd, GST, MSME)"
                className="flex-1 bg-transparent border-none text-white placeholder:text-slate-500 focus-visible:ring-0 py-8 text-lg px-4"
              />
              <div className="pr-3">
                <Button className="h-14 px-10 rounded-xl text-lg font-black bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-lg transition-all active:scale-95">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Service Badges */}
          <div className="flex flex-wrap justify-center gap-3 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Private Limited
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> GST Filing
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Trademark
            </span>
             <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Trademark
            </span>
             <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Trademark
            </span>
             <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Trademark
            </span>
          </div>

          {/* Action Row
          <div className="flex flex-wrap items-center justify-center gap-10 pt-4">
            <button className="flex items-center gap-4 font-black text-white hover:text-orange-400 transition-all group">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <span className="text-lg uppercase tracking-widest">Watch Process</span>
            </button>
          </div> */}

          {/* Premium Professional Trust Bar */}
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Reviews Card */}
            <motion.div 
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative group p-6 rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <h4 className="text-white font-black text-base tracking-tight leading-none mb-1">4.9/5 Google Reviews</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.15em] font-black opacity-70">2,450+ Verified Users</p>
                </div>
              </div>
            </motion.div>

            {/* Trustpilot Card */}
            <motion.div 
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative group p-6 rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00b67a] flex items-center justify-center p-3 shadow-[0_0_20px_rgba(0,182,122,0.2)]">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-sm">
                        <Star key={i} className="w-2.5 h-2.5 fill-white text-white" />
                      </div>
                    ))}
                  </div>
                  <h4 className="text-white font-black text-base tracking-tight leading-none mb-1">Excellent Trustpilot</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.15em] font-black opacity-70">TrustScore 4.8 | 1.2k+ Reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Clutch Card */}
            <motion.div 
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative group p-6 rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span className="text-[#231F20] font-black text-[10px]">Clutch</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#da291c] text-[#da291c]" />
                    ))}
                  </div>
                  <h4 className="text-white font-black text-base tracking-tight leading-none mb-1">Top Legal Firm 2024</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.15em] font-black opacity-70">5.0/5 Clutch Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
