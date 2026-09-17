'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  Plus, 
  Minus, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Calendar,
  Layers
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { FooterSection } from '@/components/sections/Footer';
import { dermatologyFaqs, faqCategories, FAQItem } from '@/lib/faqs-data';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>('faq-clinic-1');

  const filteredFaqs = useMemo(() => {
    return dermatologyFaqs.filter((faq) => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col selection:bg-brand-accent/20">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Page Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Dermatology FAQ Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Frequently Asked Medical Questions
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
            Direct clinical answers from MBBS Gold Medalist & MD Dermatologist Dr. Divya Sharma. Real science, transparent expectations, and zero ambiguity.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="space-y-6">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/40">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 55+ clinical questions (e.g. dandruff, laser, vitamin c)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full border border-border bg-white text-sm text-foreground shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-accent/25 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {faqCategories.map((cat) => {
              const count = cat === 'All' 
                ? dermatologyFaqs.length 
                : dermatologyFaqs.filter(f => f.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenId(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-brand-accent text-white shadow-sm ring-2 ring-brand-accent/20'
                      : 'bg-white border border-border text-foreground/70 hover:text-foreground hover:bg-foreground/[0.02]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat ? 'bg-white/20 text-white' : 'bg-foreground/5 text-foreground/60'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-foreground/60 px-2">
          <span>
            Showing <strong>{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? 'question' : 'questions'}
            {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-brand-accent hover:underline font-medium"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group rounded-2xl sm:rounded-3xl border transition-all duration-200 bg-white ${
                    isOpen
                      ? 'border-brand-accent/30 shadow-md ring-1 ring-brand-accent/15'
                      : 'border-border/60 hover:border-brand-accent/20 shadow-xs hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <div className="flex flex-col gap-1.5 pr-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-brand-accent/10 text-brand-accent">
                          {faq.category}
                        </span>
                      </div>
                      <span
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isOpen ? 'text-brand-accent' : 'text-foreground group-hover:text-brand-accent'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? 'bg-brand-accent text-white border-brand-accent shadow-xs'
                          : 'bg-brand-accent/5 text-brand-accent border-brand-accent/20 group-hover:bg-brand-accent/10'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 sm:px-7 sm:pb-7 pt-0">
                          <div className="pt-4 border-t border-border/30 text-foreground/80 leading-relaxed text-sm sm:text-base space-y-3">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-border/70 space-y-4">
            <HelpCircle className="w-10 h-10 text-foreground/30 mx-auto" />
            <h3 className="text-lg font-bold text-foreground">No questions found matching your query</h3>
            <p className="text-sm text-foreground/60 max-w-md mx-auto">
              We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try another term or submit your query directly to our doctors.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-5 py-2.5 rounded-full bg-brand-accent text-white text-xs font-semibold tracking-wide"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}

        {/* Consultation Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-brand-accent/10 border border-brand-accent/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Personalized Diagnosis</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
              Have a Specific Skin or Hair Concern?
            </h3>
            <p className="text-sm text-foreground/70 max-w-xl">
              Every skin condition is unique. Book a clinical consultation with Dr. Divya Sharma in Whitefield, Bangalore, or schedule an online video appointment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/book-an-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-[#5E2F1E] text-white text-xs font-semibold tracking-wide shadow-sm transition-all"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+919620638388"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-border text-foreground text-xs font-semibold tracking-wide hover:bg-foreground/[0.03] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>+91 9620638388</span>
            </a>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
