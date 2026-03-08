import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ShieldCheck, Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'About Legal Door - Legal Excellence & Innovation',
  description: 'Learn about our mission to revolutionize legal services through technology and expertise.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Identity</h4>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Redefining <br />
              <span className="text-primary italic">Legal Standards.</span>
            </h1>
            <p className="text-xl text-slate-500 font-bold leading-relaxed">
              Legal Door is more than a service provider. We are a legal-tech powerhouse dedicated to research, development, and the pursuit of absolute legal precision.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Research & <span className="text-primary">Development</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                At our core, we invest heavily in legal R&D to stay ahead of regulatory shifts and emerging legal frameworks. Our methodology combines decades of legal expertise with cutting-edge technology to deliver outcomes that are not just effective, but benchmark-setting.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-3xl font-black text-slate-900">99.9%</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Document Precision</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-black text-slate-900">500+</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Lawyers & CAs</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[40px] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-black mb-8">Our Core Values</h3>
              <div className="space-y-6">
                {[
                  { title: 'Intellectual Integrity', desc: 'Upholding the highest standards of legal honesty and transparency.' },
                  { title: 'Strategic Innovation', desc: 'Continuously evolving our processes through technology.' },
                  { title: 'Client-Centricity', desc: 'Your goals are the North Star of our entire R&D efforts.' }
                ].map((val, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h5 className="font-black text-sm mb-1">{val.title}</h5>
                      <p className="text-xs text-white/50 font-medium leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
