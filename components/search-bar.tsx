'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mainNavLinks } from '@/components/navbar';

type ServiceItem = { name: string; category: string; url: string; search: string };

/* Common abbreviations / synonyms so short queries match the right service. */
const KEYWORD_MAP: { test: RegExp; words: string }[] = [
  { test: /private limited/i, words: 'pvt ltd private limited' },
  { test: /one person company/i, words: 'opc' },
  { test: /llp|limited liability partnership/i, words: 'llp partnership' },
  { test: /non-disclosure/i, words: 'nda' },
  { test: /power of attorney/i, words: 'poa gpa' },
  { test: /memorandum of understanding/i, words: 'mou' },
  { test: /gst/i, words: 'gst tax goods services' },
  { test: /trademark/i, words: 'tm brand ip ipr' },
  { test: /import export/i, words: 'iec' },
  { test: /section 8/i, words: 'ngo non profit' },
  { test: /itr|income tax/i, words: 'itr income tax return' },
];

function extraKeywords(title: string): string {
  return KEYWORD_MAP.filter((k) => k.test.test(title)).map((k) => k.words).join(' ');
}

/* Build a flat, de-duplicated search index from the live navbar service tree,
 * so every service in the menu is searchable and links to its real page. */
function buildServiceIndex(): ServiceItem[] {
  const seen = new Set<string>();
  const items: ServiceItem[] = [];

  const push = (name: string, category: string, url: string, context: string) => {
    if (!url || url === '#' || seen.has(url)) return;
    seen.add(url);
    items.push({
      name,
      category,
      url,
      search: `${name} ${context} ${category} ${extraKeywords(name)}`.toLowerCase(),
    });
  };

  for (const nav of mainNavLinks) {
    for (const cat of nav.categories) {
      push(cat.title, nav.title, cat.href, '');
      for (const sub of cat.subServices) {
        push(sub.title, nav.title, sub.href, cat.title);
      }
    }
  }
  return items;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function GlobalSearchBar() {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const servicesDataset = useMemo(buildServiceIndex, []);

  const suggestions = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (q.length < 2) return [];
    const terms = q.split(/\s+/);
    return servicesDataset
      .filter((item) => terms.every((t) => item.search.includes(t)))
      .slice(0, 8);
  }, [query, servicesDataset]);

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

  useEffect(() => {
    setShowDropdown(query.trim().length >= 2);
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (url: string) => {
    router.push(url);
    setShowDropdown(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(suggestions[activeIndex]?.url ?? suggestions[0].url);
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  const runSearch = () => {
    if (suggestions.length) handleSelect(suggestions[0].url);
  };

  const highlightMatch = (text: string, part: string) => {
    const safe = escapeRegExp(part.trim());
    if (!safe) return text;
    const parts = text.split(new RegExp(`(${safe})`, 'gi'));
    return (
      <span>
        {parts.map((p, i) =>
          p.toLowerCase() === part.trim().toLowerCase()
            ? <span key={i} className="text-primary font-black">{p}</span>
            : p,
        )}
      </span>
    );
  };

  return (
    <div className="relative max-w-3xl 3xl:max-w-4xl mx-auto group" ref={containerRef}>
      {/* Search Input Container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-600 to-indigo-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500" />
      <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="pl-3 sm:pl-5 lg:pl-6 flex items-center pointer-events-none shrink-0">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-slate-400 group-focus-within:text-orange-400 transition-colors" />
        </div>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length >= 2 && setShowDropdown(true)}
          placeholder="Search services…"
          aria-label="Search legal services"
          className="flex-1 min-w-0 bg-transparent border-none text-white placeholder:text-slate-500 focus-visible:ring-0 py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg px-2 sm:px-3 lg:px-4 font-medium"
        />
        <div className="pr-1.5 sm:pr-2.5 lg:pr-3 shrink-0">
          <Button
            onClick={runSearch}
            aria-label="Search"
            className="h-9 px-3 sm:h-11 sm:px-5 lg:h-14 lg:px-10 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-lg font-black bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all active:scale-95 flex items-center gap-1 sm:gap-2 group/btn"
          >
            <span className="hidden xs:inline">Search</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover/btn:translate-x-1 transition-transform" />
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
            <div className="p-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <button
                    key={item.url}
                    onClick={() => handleSelect(item.url)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={cnRow(index === activeIndex)}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-black text-slate-900 leading-none mb-1.5 truncate">
                          {highlightMatch(item.name, query)}
                        </h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-sm font-bold text-slate-400">No services found for &ldquo;{query}&rdquo;</p>
                </div>
              )}
            </div>

            {/* Dropdown Footer */}
            <div className="bg-slate-50 p-3 border-t border-slate-100 flex flex-col xs:flex-row gap-1 xs:gap-2 xs:justify-between xs:items-center px-4 sm:px-6">
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-tight">
                <span className="hidden sm:inline">Search powered by </span>Legal Door Intelligence
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-primary">Press Enter to open</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cnRow(active: boolean) {
  return [
    'w-full flex items-center justify-between p-4 rounded-xl transition-all text-left group',
    active ? 'bg-slate-50' : 'hover:bg-slate-50',
  ].join(' ');
}
