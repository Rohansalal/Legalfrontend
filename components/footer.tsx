'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Legal Door"
                width={100}
                height={100}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Legal Door is a premium legal-tech platform dedicated to providing world-class legal, taxation, and business compliance services with absolute precision and integrity.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">Organization</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Team', href: '/team' },
                { name: 'Latest Journal', href: '/blog' },
                { name: 'Careers', href: '/careers' },
                { name: 'Research & Dev', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">Key Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Business Registration', href: '/business-registration' },
                { name: 'Property Services', href: '/property' },
                { name: 'NGO Support', href: '/ngo-services' },
                { name: 'Lawyer Consultation', href: '/lawyer-services' },
                { name: 'Global Expansion', href: '/global-business' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">Corporate Office</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-start group cursor-default">
                <MapPin className="w-4 h-4 mr-2 text-primary shrink-0 mt-0.5" />
                <span>
                  12th Floor, Legal Tower,<br />
                  Business District, Mumbai 400001
                </span>
              </li>
              <li className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group cursor-default">
                <Phone className="w-4 h-4 mr-2 text-primary shrink-0" />
                <span>+91 (22) 4567-8900</span>
              </li>
              <li className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group cursor-default">
                <Mail className="w-4 h-4 mr-2 text-primary shrink-0" />
                <span>contact@legaldoor.in</span>
              </li>
              <li className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center group cursor-default">
                <Clock className="w-4 h-4 mr-2 text-primary shrink-0" />
                <span>Mon - Sat, 10am - 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © 2024 Legal Door. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text) => (
              <a key={text} href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
