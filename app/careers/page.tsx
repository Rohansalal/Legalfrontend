import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Briefcase, MapPin, Clock, ArrowRight, Zap } from 'lucide-react';

export const metadata = {
  title: 'Careers at Legal Door - Join Our Team',
  description: 'Explore career opportunities at Legal Door and help us build the future of legal services.',
};

const jobs = [
  { title: 'Associate Advocate', type: 'Full-time', location: 'New Delhi / Remote', category: 'Legal' },
  { title: 'Senior Corporate Lawyer', type: 'Full-time', location: 'Mumbai', category: 'Corporate' },
  { title: 'Tax Consultant (CA)', type: 'Contract', location: 'Remote', category: 'Taxation' },
  { title: 'Full Stack Developer', type: 'Full-time', location: 'Bangalore / Remote', category: 'Tech' },
  { title: 'Legal Research Analyst', type: 'Full-time', location: 'Pune', category: 'R&D' },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
            <div className="flex-1 space-y-8">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Work with us</h4>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Build the Future of <span className="text-primary italic">Law.</span>
              </h1>
              <p className="text-lg text-slate-500 font-bold leading-relaxed">
                We are looking for brilliant minds to join our mission. At Legal Door, you&apos;ll work at the intersection of high-stakes law and cutting-edge technology.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors cursor-pointer">View Openings</div>
                <div className="px-6 py-3 rounded-2xl border border-slate-200 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors cursor-pointer">Our Culture</div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square bg-slate-100 rounded-[40px] relative overflow-hidden shadow-2xl shadow-slate-200">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                 <Zap className="absolute bottom-10 left-10 w-20 h-20 text-primary opacity-20" />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
              Current Openings
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">{jobs.length}</span>
            </h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="group flex flex-col md:flex-row md:items-center gap-6 p-8 bg-slate-50 rounded-[32px] border border-transparent hover:border-primary hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">{job.category}</span>
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
