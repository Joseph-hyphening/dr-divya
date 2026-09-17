'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { dermatologyFaqs } from '@/lib/faqs-data';

const HOMEPAGE_CATEGORIES = [
  { key: 'all', label: 'Top Questions' },
  { key: 'Laser Hair Removal', label: 'Laser & Technology' },
  { key: 'Anti-Aging & Actives', label: 'Anti-Aging & Actives' },
  { key: 'Hair Fall, Dandruff & Scalp', label: 'Hair & Scalp' },
  { key: 'Keratosis Pilaris & Texture', label: 'Texture & Pigment' },
  { key: 'Consultation & Safety', label: 'Clinic & Safety' },
];

export const FAQAccordion = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-clinic-1');

  const filteredFaqs = dermatologyFaqs.filter((f) => {
    if (selectedCategory === 'all') {
      // Top 8 curated homepage FAQs covering diverse domains
      return [
        'faq-clinic-1',
        'faq-clinic-4',
        'faq-1',
        'faq-3',
        'faq-14',
        'faq-17',
        'faq-23',
        'faq-35',
      ].includes(f.id);
    }
    return f.category === selectedCategory;
  });

  return (
    <section className="bg-[#FAF7F2] py-20 sm:py-24 px-4 sm:px-8 md:px-12 border-t border-b border-border/40">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Knowledge & FAQs</span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            Your Questions, <span className="text-brand-accent italic">Answered.</span>
          </h3>
          <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Direct clinical guidance and evidence-based expectations for consultations, lasers, and dermatological therapies.
          </p>
        </header>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {HOMEPAGE_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.key);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-brand-accent text-white shadow-sm ring-2 ring-brand-accent/20'
                  : 'bg-white border border-border text-foreground/70 hover:text-foreground hover:bg-foreground/[0.02]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={cn(
                  "group rounded-2xl md:rounded-3xl border transition-all duration-200 bg-white",
                  isOpen 
                    ? "border-brand-accent/30 shadow-md ring-1 ring-brand-accent/15" 
                    : "border-border/60 hover:border-brand-accent/20 shadow-xs hover:shadow-sm"
                )}
              >
                <button 
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <div className="flex flex-col gap-1 pr-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                      {faq.category}
                    </span>
                    <span className={cn(
                      "text-base sm:text-lg font-bold tracking-tight transition-colors",
                      isOpen ? "text-brand-accent" : "text-foreground group-hover:text-brand-accent"
                    )}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200",
                    isOpen 
                      ? "bg-brand-accent text-white border-brand-accent shadow-xs" 
                      : "bg-brand-accent/5 text-brand-accent border-brand-accent/20 group-hover:bg-brand-accent/10"
                  )}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-7 sm:pb-7 pt-0">
                        <div className="pt-3 border-t border-border/30 text-foreground/75 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to dedicated FAQ hub */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-white text-xs font-semibold tracking-wide hover:bg-[#5E2F1E] transition-all shadow-sm group"
          >
            <span>Browse Full Medical FAQ Directory (55+ Q&As)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-xs text-foreground/60">
            Need custom advice?{" "}
            <Link href="/book-an-appointment" className="text-brand-accent font-semibold underline underline-offset-4 hover:opacity-80">
              Book a Consultation
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
