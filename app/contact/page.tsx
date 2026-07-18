import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Phone, Mail, MapPin, Clock, MessageSquare, Headphones, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Contact Us — Legal Door',
  description:
    'Get in touch with Legal Door. Talk to our legal, taxation and compliance experts about company registration, lawyer services, property, documentation and global business setup.',
};

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98117 65737',
    href: 'tel:+919811765737',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'legaldoorindia@gmail.com',
    sub: 'info@legaldoor.in',
    href: 'mailto:legaldoorindia@gmail.com',
    subHref: 'mailto:info@legaldoor.in',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Office No. OC-1021, 10th Floor, Gaur City Center,',
    sub: 'Greater Noida West, G.B. Nagar, UP – 201318',
  },
];

const helpOptions = [
  { icon: MessageSquare, title: 'Talk to a Lawyer', desc: 'Discuss litigation, IPR, family or corporate matters with an expert advocate.' },
  { icon: Headphones, title: 'Talk to a CA', desc: 'Get guidance on registration, taxation, GST and ongoing compliances.' },
  { icon: Clock, title: 'Quick Turnaround', desc: 'Most queries are answered within one business day, often sooner.' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-32 pb-20">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[11px] font-black uppercase tracking-widest mb-6">
            <Headphones className="w-3.5 h-3.5 text-primary" /> We’re Here to Help
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed font-medium">
            Have a question or ready to get started? Our legal and compliance experts are a
            message away — tell us what you need and we’ll take it from there.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-20">
        {/* ── Contact method cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 sm:mb-20 -mt-28 sm:-mt-32 relative z-20">
          {contactCards.map((c) => (
            <div
              key={c.label}
              className="group bg-white border border-slate-100 rounded-3xl p-7 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <c.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="text-lg font-black text-slate-900 hover:text-primary transition-colors">
                  {c.value}
                </a>
              ) : (
                <p className="text-lg font-black text-slate-900">{c.value}</p>
              )}
              {c.sub && (c.subHref ? (
                <a href={c.subHref} className="block text-sm text-slate-500 font-medium mt-1 hover:text-primary transition-colors">
                  {c.sub}
                </a>
              ) : (
                <p className="text-sm text-slate-500 font-medium mt-1">{c.sub}</p>
              ))}
            </div>
          ))}
        </div>

        {/* ── Form + side panel ── */}
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white border border-slate-100 rounded-[32px] p-7 sm:p-10 shadow-xl shadow-slate-200/50">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">Send a Message</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-8 tracking-tight">
              Tell us about your requirement
            </h2>
            <ContactForm />
          </div>

          {/* Side panel */}
          <div className="lg:sticky lg:top-28 space-y-5">
            <div className="rounded-[32px] bg-slate-950 text-white p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-10 w-44 h-44 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
              <h3 className="relative text-xl font-black mb-6">How can we help?</h3>
              <div className="relative space-y-6">
                {helpOptions.map((h) => (
                  <div key={h.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <h.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm mb-1">{h.title}</h4>
                      <p className="text-[13px] text-white/60 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-primary to-orange-600 text-white p-8">
              <h3 className="text-xl font-black mb-2">Prefer to talk now?</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                Call us during business hours and speak directly with an expert.
              </p>
              <a
                href="tel:+919811765737"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors"
              >
                +91 98117 65737
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
