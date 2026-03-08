'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Comprehensive Services Dataset
const servicesDataset = [
  // Business Registration
  { name: "Private Limited Company Registration", category: "Business Registration", url: "/business-registration/company-registration/private-limited-company", keywords: ["pvt ltd", "incorporation", "company"] },
  { name: "LLP Registration", category: "Business Registration", url: "/business-registration/company-registration/limited-liability-partnership", keywords: ["partnership", "llp"] },
  { name: "One Person Company (OPC)", category: "Business Registration", url: "/business-registration/company-registration/one-person-company", keywords: ["opc", "solo"] },
  { name: "Startup India Registration", category: "Business Registration", url: "/business-registration/company-registration/startup-india-registration", keywords: ["startup", "dpiit"] },
  { name: "MSME Registration", category: "Business Registration", url: "/business-registration/licenses-and-registrations/msme-registration", keywords: ["udyam", "msme", "small business"] },
  { name: "GST Registration", category: "Business Registration", url: "/business-registration/licenses-and-registrations/gst-registration", keywords: ["gst", "tax"] },
  
  // Property
  { name: "Property Registration", category: "Property", url: "/property/property-registration/registration", keywords: ["registry", "stamp duty"] },
  { name: "Sale Deed Drafting", category: "Property", url: "/property/property-documentation/sale-deed-drafting", keywords: ["deed", "sale"] },
  { name: "Title Verification", category: "Property", url: "/property/property-verification/title-verification", keywords: ["check", "search", "owner"] },
  
  // NGO Services
  { name: "Trust Registration", category: "NGO Services", url: "/ngo-services/ngo-registration/trust", keywords: ["ngo", "trust"] },
  { name: "Society Registration", category: "NGO Services", url: "/ngo-services/ngo-registration/society", keywords: ["ngo", "society"] },
  { name: "Section 8 Company", category: "NGO Services", url: "/ngo-services/ngo-registration/section-8", keywords: ["ngo", "section 8"] },
  { name: "12A & 80G Registration", category: "NGO Services", url: "/ngo-services/ngo-tax-exemption/12a", keywords: ["tax exemption", "ngo"] },
  
  // Documentation
  { name: "NDA Drafting", category: "Documentation", url: "/documentation/business-documents/nda", keywords: ["nda", "non disclosure", "agreement"] },
  { name: "Rent Agreement", category: "Documentation", url: "/documentation/property-documents/rental-agreement", keywords: ["rent", "lease"] },
  { name: "Power of Attorney", category: "Documentation", url: "/documentation/personal-legal-documents/power-of-attorney", keywords: ["poa", "personal"] },
  { name: "Affidavit", category: "Documentation", url: "/documentation/personal-legal-documents/affidavits", keywords: ["legal", "stamp paper"] },
  
  // Global Business
  { name: "USA Company Registration", category: "Global Business", url: "/business-registration/international-business-setup/usa-company", keywords: ["usa", "delaware", "llc"] },
  { name: "UK Company Formation", category: "Global Business", url: "/business-registration/international-business-setup/uk-company", keywords: ["uk", "london", "ltd"] },
  { name: "Dubai Company Setup", category: "Global Business", url: "/business-registration/international-business-setup/dubai-company", keywords: ["dubai", "uae", "offshore"] },
];

export function GlobalSearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof servicesDataset>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search Logic
  useEffect(() => {
    if (query.length > 1) {
      const filtered = servicesDataset.filter(item => {
        const searchStr = `${item.name} ${item.category} ${item.keywords.join(' ')}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
      }).slice(0, 6); // Limit to 6 results for UX
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }, [query]);

  const handleSelect = (url: string) => {
    router.push(url);
    setShowDropdown(false);
    setQuery('');
  };

  const highlightMatch = (text: string, part: string) => {
    const parts = text.split(new RegExp(`(${part})`, 'gi'));
    return (
      <span>
        {parts.map((p, i) => 
          p.toLowerCase() === part.toLowerCase() 
            ? <span key={i} className="text-primary font-black">{p}</span> 
            : p
        )}
      </span>
    );
  };

  return (
    <div className="relative max-w-3xl mx-auto group" ref={containerRef}>
      {/* Search Input Container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-600 to-indigo-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500" />
      <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="pl-6 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-slate-400 group-focus-within:text-orange-400 transition-colors" />
        </div>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search legal services (e.g. Pvt Ltd, GST, MSME)"
          className="flex-1 bg-transparent border-none text-white placeholder:text-slate-500 focus-visible:ring-0 py-8 text-lg px-4 font-medium"
        />
        <div className="pr-3">
          <Button 
            className="h-14 px-10 rounded-xl text-lg font-black bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all active:scale-95 flex items-center gap-2 group/btn"
          >
            Search
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Suggestion Dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-[100]"
          >
            <div className="p-2">
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(item.url)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 leading-none mb-1.5">
                          {highlightMatch(item.name, query)}
                        </h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-sm font-bold text-slate-400">No services found for "{query}"</p>
                </div>
              )}
            </div>
            
            {/* Dropdown Footer */}
            <div className="bg-slate-50 p-3 border-t border-slate-100 flex justify-between items-center px-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Search powered by Legal Door Intelligence</span>
              <span className="text-[10px] font-bold text-primary">Press Enter to Search</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
