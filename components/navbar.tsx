'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = ['Services', 'Process', 'Testimonials', 'Blog', 'Contact'];

const serviceLinks = [
  'Business Registration',
  'Property',
  'NGO Services',
  'Lawyer Services',
  'Documentation',
  'Global Business'
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Legal Door"
            width={50}
            height={50}
            className="h-10 sm:h-12 w-auto brightness-0 invert"
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop Menu - Shifted to Right */}
        <div className="hidden lg:flex items-center gap-1 ml-auto mr-8">
          {serviceLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`px-3 py-2 font-bold transition-colors flex items-center gap-1 text-sm whitespace-nowrap ${
                isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{link}</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </motion.a>
          ))}
        </div>

        {/* Action Buttons (Far Right) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={`rounded-full font-black px-6 transition-all shadow-lg flex items-center gap-2 outline-none border-none group ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:shadow-orange-500/20' 
                      : 'bg-white text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Consult an Expert
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180 ${isScrolled ? 'text-white' : 'text-slate-900'}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-2 rounded-2xl bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl animate-in fade-in zoom-in duration-200">
                <DropdownMenuItem className="py-3 px-4 rounded-xl font-bold text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer transition-colors">
                  Talk to a Lawyer
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 rounded-xl font-bold text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer transition-colors">
                  Talk to a Chartered Accountant
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 rounded-xl font-bold text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer transition-colors">
                  Talk to a Trademark Lawyer
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 rounded-xl font-bold text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer transition-colors">
                  Talk to a Company Secretary
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? 'text-slate-900' : 'text-white'}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-0 bg-slate-950 text-white overflow-y-auto">
              <div className="flex flex-col gap-6 mt-12">
                <div className="text-xs font-black text-orange-400 uppercase tracking-[0.2em]">Our Services</div>
                <div className="grid gap-4">
                  {serviceLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-lg font-bold text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="space-y-3">
                  <div className="text-xs font-black text-orange-400 uppercase tracking-[0.2em]">Consult an Expert</div>
                  <Button className="w-full justify-start h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10">Talk to a Lawyer</Button>
                  <Button className="w-full justify-start h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10">Talk to a CA</Button>
                  <Button className="w-full justify-start h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10">Talk to a TM Lawyer</Button>
                  <Button className="w-full justify-start h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10">Talk to a CS</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
