'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Are Dr. Divya's treatments US FDA approved?",
    a: "Yes, 100%. We prioritize patient safety and effectiveness. All our clinical lasers and aesthetic products are US FDA approved and follow rigorous medical protocols."
  },
  {
    q: "How many sessions are typically required for hair regrowth?",
    a: "It depends on the stage of hair loss. Typically, patients see noticeable results within 3-6 sessions of PRP combined with medical management. For advanced cases, hair transplantation is discussed."
  },
  {
    q: "Do you offer virtual consultations?",
    a: "Yes! We offer high-definition virtual consultations for patients who cannot travel to Whitefield. You can book these via the Clinic Assistant or our contact page."
  },
  {
    q: "Where is the clinic located in Whitefield?",
    a: "We are located in AECS Layout, Whitefield, Bangalore. Our facility is NABH accredited and follows global clinical standards."
  }
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF7F2] py-20 sm:py-24 px-4 sm:px-8 md:px-12 border-t border-b border-border/40">
      <div className="max-w-4xl mx-auto">
        <header className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
            Patient FAQ
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            Your Questions, <span className="text-brand-accent italic">Answered.</span>
          </h3>
          <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Clear medical guidance and transparent expectations for your consultations and clinical procedures.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "group rounded-2xl md:rounded-3xl border transition-all duration-200 bg-white",
                  isOpen 
                    ? "border-brand-accent/30 shadow-md ring-1 ring-brand-accent/15" 
                    : "border-border/60 hover:border-brand-accent/20 shadow-xs hover:shadow-sm"
                )}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className={cn(
                    "text-lg sm:text-xl font-bold tracking-tight transition-colors pr-2",
                    isOpen ? "text-brand-accent" : "text-foreground group-hover:text-brand-accent"
                  )}>
                    {faq.q}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200",
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
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                        <div className="pt-4 border-t border-border/30 text-foreground/75 leading-relaxed text-base sm:text-lg">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-foreground/60">
          Have a question that isn&apos;t answered here?{" "}
          <a href="#consultation-form" className="text-brand-accent font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
            Consult Dr. Divya Sharma directly
          </a>
        </div>
      </div>
    </section>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
