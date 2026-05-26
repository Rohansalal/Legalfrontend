'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, Star, ShieldCheck, Zap, Headphones, CheckCircle2, Landmark, FileCheck, Scale, Gavel } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlobalSearchBar } from '@/components/search-bar';

export function HeroSection() {
  const floatingIcons = [
    { Icon: ShieldCheck, color: 'text-blue-400', top: '15%', left: '10%', delay: 0 },
    { Icon: Zap, color: 'text-orange-400', top: '25%', right: '15%', delay: 1 },
    { Icon: Landmark, color: 'text-indigo-400', bottom: '20%', left: '15%', delay: 2 },
    { Icon: FileCheck, color: 'text-emerald-400', bottom: '30%', right: '10%', delay: 1.5 },
    { Icon: Scale, color: 'text-pink-400', top: '40%', left: '5%', delay: 0.5 },
    { Icon: Gavel, color: 'text-slate-400', bottom: '15%', right: '25%', delay: 2.5 },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_50%,#0a3d6d_100%)]">
      {/* Floating Animated Icons — hidden on tiny screens to prevent overlap with CTAs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden xs:block">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5,
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
            <item.Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 opacity-20" strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      {/* Advanced Animated Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-orange-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-pink-500/15 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Advanced Badge Style Trust Signal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 sm:gap-4 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl max-w-full"
          >
            {/* Avatars + Google Group */}
            <div className="flex items-center shrink-0">
              <div className="flex -space-x-2 sm:-space-x-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                  <img src="https://i.pravatar.cc/150?u=1" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                  <img src="https://i.pravatar.cc/150?u=2" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="hidden xs:block w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-200">
                  <img src="https://i.pravatar.cc/150?u=3" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center p-1 sm:p-1.5 shadow-inner">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="flex flex-col items-start leading-none min-w-0">
              <div className="flex items-center gap-0.5 sm:gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-[9px] sm:text-[11px] font-black text-white/90 tracking-wider uppercase whitespace-nowrap">
                <span className="hidden xs:inline">Trusted by </span>10,000+ <span className="hidden sm:inline">Entrepreneurs</span><span className="sm:hidden">Users</span>
              </span>
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-[1.625rem] leading-[1.1] xs:text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-[8.5rem] font-black text-white tracking-tight px-1 sm:px-2 [overflow-wrap:anywhere]">
              Register Your <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent italic pb-2 sm:px-2">Dream Business</span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl 3xl:text-2xl text-slate-300 max-w-3xl 3xl:max-w-4xl mx-auto leading-relaxed font-medium px-2">
              India's leading platform for legal and business registration. Get your company registered in
              <span className="text-orange-400 font-bold"> just 3 steps</span> with 100% digital process.
            </p>
          </div>

          <GlobalSearchBar />

          {/* Quick Service Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-slate-400 text-xs sm:text-sm font-semibold">
            <span className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" /> Private Limited
            </span>
            <span className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" /> GST Filing
            </span>
            <span className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" /> Trademark
            </span>
            <span className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" /> MSME
            </span>
            <span className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white transition-colors cursor-pointer">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" /> LLP
            </span>
          </div>

          {/* Premium Professional Trust Bar */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {/* Google Reviews Card */}
            <motion.div
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative group p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white flex items-center justify-center p-2.5 sm:p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <h4 className="text-white font-black text-sm sm:text-base tracking-tight leading-none mb-1">4.9/5 Google Reviews</h4>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-black opacity-70">2,450+ Verified Users</p>
                </div>
              </div>
            </motion.div>

            {/* Trustpilot Card */}
            <motion.div
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative group p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#00b67a] flex items-center justify-center p-2.5 sm:p-3 shadow-[0_0_20px_rgba(0,182,122,0.2)]">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-sm">
                        <Star key={i} className="w-2.5 h-2.5 fill-white text-white" />
                      </div>
                    ))}
                  </div>
                  <h4 className="text-white font-black text-sm sm:text-base tracking-tight leading-none mb-1">Excellent Trustpilot</h4>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-black opacity-70">TrustScore 4.8 | 1.2k+ Reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Clutch Card */}
            <motion.div
              whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="relative group p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white flex items-center justify-center p-2.5 sm:p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span className="text-[#231F20] font-black text-[10px]">Clutch</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#da291c] text-[#da291c]" />
                    ))}
                  </div>
                  <h4 className="text-white font-black text-sm sm:text-base tracking-tight leading-none mb-1">Top Legal Firm 2024</h4>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-black opacity-70">5.0/5 Clutch Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
