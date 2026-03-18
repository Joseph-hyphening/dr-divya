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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-foreground text-background py-24 px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-4">Patient FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Your Questions, <br /><span className="text-brand-accent italic font-serif">Answered.</span></h3>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-white/10 rounded-[2rem] overflow-hidden transition-all"
              style={{ backgroundColor: openIndex === idx ? 'rgba(255,255,255,0.05)' : 'transparent' }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full text-left p-8 flex items-center justify-between"
              >
                <span className="text-xl font-bold tracking-tight pr-8">{faq.q}</span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border border-white/20 transition-all",
                  openIndex === idx ? "bg-brand-accent border-brand-accent" : ""
                )}>
                  {openIndex === idx ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-background/60 leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple utility as it might not be imported correctly in this scope
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
