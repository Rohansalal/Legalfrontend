import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Our Team - Legal Door',
  description: 'Meet the expert lawyers, chartered accountants, and industry specialists at Legal Door.',
};

const team = [
  { name: 'Dr. Vikram Sethi', role: 'Chief Legal Officer', expert: 'Corporate Law', img: '/placeholder-user.jpg' },
  { name: 'Ananya Sharma', role: 'Principal Consultant', expert: 'International Setup', img: '/placeholder-user.jpg' },
  { name: 'Rajesh Khanna', role: 'Head of Taxation', expert: 'GST & Compliance', img: '/placeholder-user.jpg' },
  { name: 'Siddharth Roy', role: 'Head of R&D', expert: 'Legal Tech', img: '/placeholder-user.jpg' },
  { name: 'Meera Deshmukh', role: 'Lead Advocate', expert: 'Dispute Resolution', img: '/placeholder-user.jpg' },
  { name: 'Amit Verma', role: 'Senior Partner', expert: 'Property Laws', img: '/placeholder-user.jpg' },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-center md:text-left">The Intellects</h4>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 text-center md:text-left">
              Expertise Driven by <br />
              <span className="text-primary italic">Precision.</span>
            </h1>
            <p className="text-lg text-slate-500 font-bold leading-relaxed max-w-2xl text-center md:text-left mx-auto md:mx-0">
              Our team consists of high-caliber professionals including retired judges, senior CAs, and technology innovators committed to legal excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[4/5] bg-slate-100 rounded-[32px] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        <Mail className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full bg-slate-200" /> {/* Placeholder for actual image */}
                </div>
                <div className="flex justify-between items-start pr-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{member.role}</p>
                    <p className="text-xs text-slate-400 font-bold">Expertise: {member.expert}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
