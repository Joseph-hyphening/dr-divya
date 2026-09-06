'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award, CheckCircle2, Sparkles } from 'lucide-react';

// Official 4-Color Google Vector Logo
const GoogleBrandLogo = () => (
  <div className="h-12 px-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
    <div className="flex text-amber-500 text-[11px] font-bold">
      ★★★★★
    </div>
  </div>
);

// Real Official Practo Logo
const PractoBrandLogo = () => (
  <div className="h-12 px-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/logos/practo-logo.svg" 
      alt="Practo Official Logo" 
      className="h-5 sm:h-6 w-auto object-contain" 
    />
  </div>
);

// Real Official The Times of India / Times Health Award Logo
const TimesHealthBrandLogo = () => (
  <div className="h-12 px-3.5 rounded-xl bg-white border border-amber-200/90 shadow-xs flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/logos/times-of-india.svg" 
      alt="The Times of India" 
      className="h-3.5 sm:h-4 w-auto object-contain" 
    />
    <span className="text-[9px] font-black tracking-widest text-amber-700 uppercase mt-0.5">
      Health Survey Award
    </span>
  </div>
);

// Real Official US-FDA Logo
const FdaBrandLogo = () => (
  <div className="h-12 px-3.5 rounded-xl bg-white border border-blue-200/90 shadow-xs flex items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/logos/fda-logo.svg" 
      alt="US FDA Approved" 
      className="h-5 sm:h-6 w-auto object-contain" 
    />
    <span className="text-[9px] sm:text-[10px] font-black text-[#005EA2] tracking-wider uppercase border-l border-blue-200 pl-1.5">
      Approved
    </span>
  </div>
);

// Real Official NABH Logo
const NabhBrandLogo = () => (
  <div className="h-12 px-3 rounded-xl bg-white border border-emerald-200/90 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/logos/nabh-logo.jpg" 
      alt="NABH Accredited Healthcare" 
      className="h-8 sm:h-9 w-auto object-contain" 
    />
  </div>
);

const trustPillars = [
  { 
    logo: <GoogleBrandLogo />,
    label: 'Google Verified', 
    score: '4.9★', 
    sub: '1,200+ Reviews',
    scoreColor: 'text-amber-600'
  },
  { 
    logo: <PractoBrandLogo />,
    label: 'Practo Top Specialist', 
    score: '98%', 
    sub: 'Patient Recommendation',
    scoreColor: 'text-[#263077]'
  },
  { 
    logo: <TimesHealthBrandLogo />,
    label: 'Times Health Award', 
    score: 'Rank #1', 
    sub: 'Bangalore Dermatology',
    scoreColor: 'text-amber-600'
  },
  { 
    logo: <FdaBrandLogo />,
    label: 'US-FDA Approved', 
    score: '100%', 
    sub: 'Laser Technologies',
    scoreColor: 'text-[#005EA2]'
  },
  { 
    logo: <NabhBrandLogo />,
    label: 'Sterility Standards', 
    score: 'NABH', 
    sub: 'Accredited Clinical Suite',
    scoreColor: 'text-emerald-700'
  },
];

const clinicalHighlights = [
  {
    icon: CheckCircle2,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50/80 border-emerald-100',
    title: 'Direct Doctor Consultations',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-brand-accent',
    bgColor: 'bg-[#FAF7F2] border-brand-accent/20',
    title: 'Zero-Steroid Abuse Protocol',
  },
  {
    icon: Award,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50/80 border-amber-100',
    title: 'Gold Medalist Care',
  },
];

export const SocialProofBar: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2]/70 border-y border-border/70 py-10 sm:py-14 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-brand-accent/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-amber-500/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Summary Row - Large, High Contrast & Well-Spaced */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          
          {/* Rating and Consultation Count */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="flex -space-x-1.5 shrink-0 pt-0.5">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 border-2 border-white shadow-xs flex items-center justify-center text-amber-500"
                >
                  <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-amber-500 text-amber-500" />
                </div>
              ))}
            </div>
            
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  4.9 / 5.0 Rating
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Over 15,000+ Consultations
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Whitefield, Indiranagar, Marathahalli & Global International Patients
              </p>
            </div>
          </div>

          {/* Clinical Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {clinicalHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border ${item.bgColor} shadow-xs text-sm sm:text-base font-semibold text-foreground hover:shadow-sm transition-shadow`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${item.iconColor}`} />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Metric Badges with Authentic Real Brand Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 pt-8">
          {trustPillars.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-border/80 shadow-xs hover:shadow-md hover:border-brand-accent/40 transition-all duration-300 flex flex-col items-center justify-between text-center group relative overflow-hidden min-h-[210px]"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent/0 via-brand-accent/60 to-brand-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Brand Logo Container */}
              <div className="flex items-center justify-center mb-2 w-full">
                {item.logo}
              </div>

              {/* Metric Stat Score */}
              <div className="my-1">
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight block ${item.scoreColor} group-hover:scale-105 transition-transform duration-300`}>
                  {item.score}
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground tracking-tight leading-snug block mt-1">
                  {item.label}
                </span>
              </div>

              {/* Subtext description */}
              <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
