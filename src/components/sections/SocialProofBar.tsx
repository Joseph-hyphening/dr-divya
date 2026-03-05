'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const platforms = [
  { name: 'Google Reviews', rating: '4.9★' },
  { name: 'Practo', rating: '98%' },
  { name: 'ZocDoc', rating: '5.0★' },
  { name: 'Lybrate', rating: '4.8★' },
  { name: 'JustDial', rating: '4.7★' },
];

export const SocialProofBar = () => {
  return (
    <div className="bg-white border-y border-brand-accent/10 py-6 overflow-hidden">
      {/* Top stat row */}
      <div className="container mx-auto px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Avatar + rating */}
        <div className="flex items-center gap-3">
          <div className="-space-x-3 flex">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-brand-accent/10 overflow-hidden relative">
                <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Patient" fill className="object-cover" />
              </div>
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-white bg-brand-accent text-white flex items-center justify-center text-[9px] font-bold">
              15k+
            </div>
          </div>
          <div>
            <div className="flex items-center text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs font-bold opacity-50 uppercase tracking-tight mt-0.5">Trusted by 15,000+ Patients</p>
          </div>
        </div>

        <div className="hidden sm:block h-8 w-px bg-brand-accent/10" />

        {/* Platform ratings */}
        <div className="flex items-center gap-5">
          <span className="text-sm font-bold">Google <span className="text-brand-accent">4.9★</span></span>
          <span className="text-sm font-bold">Practo <span className="text-brand-accent">98%</span></span>
          <span className="text-sm font-bold">ZocDoc <span className="text-brand-accent">5.0★</span></span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -960] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {Array(4).fill(platforms).flat().map((p, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-xl font-black uppercase tracking-tighter text-foreground/20">{p.name}</span>
              <span className="text-base font-bold text-brand-accent/60">{p.rating}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
