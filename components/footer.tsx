'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';

const serviceLinks = [
  { name: 'Business Registration', href: '/services/business-registration' },
  { name: 'Compliances', href: '/services/compliances' },
  { name: 'Documentation', href: '/services/documentation' },
  { name: 'Property', href: '/services/property' },
  { name: 'Lawyer Services', href: '/services/lawyer-services' },
  { name: 'Global Business', href: '/services/global-business' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Latest Journal', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

const socials = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Instagram, label: 'Instagram' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-orange-500 to-primary/40" />

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[120px] -mr-36 sm:-mr-48 -mt-16 sm:-mt-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] -ml-36 -mb-20 pointer-events-none" />

      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Newsletter bar ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-12 sm:py-14 border-b border-white/10">
          <div className="max-w-md">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">Stay ahead of compliance.</h3>
            <p className="text-slate-400 text-sm font-medium mt-2 leading-relaxed">
              Get legal updates, filing deadlines and expert tips delivered straight to your inbox.
            </p>
          </div>
          <div className="flex w-full lg:w-auto max-w-md gap-2.5">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 lg:w-72 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
            />
            <button
              type="button"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-black text-[11px] uppercase tracking-widest hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 py-12 sm:py-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Legal Door"
                width={120}
                height={120}
                className="h-12 sm:h-14 lg:h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-md">
              Legal Door is a premium legal-tech platform delivering world-class legal, taxation
              and business-compliance services with precision and integrity — across India and 40+ global jurisdictions.
            </p>

            {/* Trust line */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-300">
                <ShieldCheck className="w-4 h-4 text-primary" /> ISO Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-300">
                <BadgeCheck className="w-4 h-4 text-primary" /> 15,000+ Businesses Served
              </span>
            </div>

            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">Services</h4>
            <ul className="space-y-3 sm:space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">Company</h4>
            <ul className="space-y-3 sm:space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-4 space-y-5 sm:space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-bold text-slate-400">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>12th Floor, Legal Tower,<br />Business District, Mumbai 400001</span>
              </li>
              <li>
                <a href="tel:+912245678900" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +91 (22) 4567-8900
                </a>
              </li>
              <li>
                <a href="mailto:contact@legaldoor.in" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  contact@legaldoor.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-400">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                Mon – Sat, 10am – 7pm
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-7 sm:py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-[10px] sm:text-[11px] font-black uppercase tracking-widest">
            © {year} Legal Door. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
            {[
              { text: 'Privacy Policy', href: '/privacy-policy' },
              { text: 'Terms of Service', href: '/terms-of-service' },
              { text: 'Cookie Policy', href: '/cookie-policy' },
            ].map((link) => (
              <Link key={link.text} href={link.href} className="text-slate-500 hover:text-white transition-colors text-[10px] sm:text-[11px] font-black uppercase tracking-widest">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
