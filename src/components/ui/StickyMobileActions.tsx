'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export const StickyMobileActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient lift */}
      <div className="h-6 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
      <div className="flex items-stretch bg-background/95 backdrop-blur-md border-t border-border/40 safe-bottom">
        <a
          href="tel:+919620638388"
          className="flex-1 h-14 bg-brand-accent text-white flex items-center justify-center gap-2 active:opacity-80 transition-opacity"
        >
          <Phone className="h-4 w-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <div className="w-px bg-white/20" />
        <button
          className="flex-1 h-14 bg-[#25D366] text-white flex items-center justify-center gap-2 active:opacity-80 transition-opacity"
          onClick={() => {
            const section = document.getElementById('ai-assistant');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Book Now</span>
        </button>
      </div>
    </div>
  );
};
