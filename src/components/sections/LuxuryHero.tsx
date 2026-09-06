'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Phone, Award, ShieldCheck, Star, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const LuxuryHero: React.FC = () => {
  const quickConcerns = [
    { label: 'Acne & Pimples', href: '/acne-pimples' },
    { label: 'Keloid & Scar Care', href: '/keloids' },
    { label: 'Hair Loss & GFC', href: '/hair-loss' },
    { label: 'Melasma & Pigment', href: '/melasma' },
    { label: 'Laser Hair Removal', href: '/unwanted-hair' },
    { label: 'Skin Resurfacing', href: '/skin-resurfacing-texture' },
    { label: 'Pediatric Care', href: '/newborn-pediatric-dermatology' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf7f3] pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-border/40 font-sans">
      {/* Ambient Lighting & Luxury Glow Background Elements */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[550px] w-[550px] rounded-full bg-amber-600/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-full bg-gradient-to-t from-background/90 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Prestigious Editorial Copy & Direct CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Prestige Medical Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[11px] font-bold tracking-[0.14em] font-cinzel shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
              <span>MBBS Gold Medalist • US-FDA Approved Laser Clinic</span>
            </motion.div>

            {/* High-Fashion Editorial Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.14]">
                <span className="font-inter font-normal text-foreground/95">
                  Where Clinical Mastery <br className="hidden sm:block" />
                  Meets{' '}
                </span>
                <span className="font-serif bg-gradient-to-r from-brand-accent via-[#9e5539] to-brand-accent bg-clip-text text-transparent italic font-normal">
                  Aesthetic Artistry
                </span>
                .
              </h1>
              <p className="text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed font-normal">
                Directed by <strong>Dr. Divya Sharma</strong>, MBBS (Gold Medalist), MD (Skin). We combine university gold-medalist diagnostic rigor with world-leading US-FDA approved laser technology for transformative dermatology, trichology, and pediatric care in Whitefield, Bangalore.
              </p>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <Link href="/book-an-appointment" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-sm px-7 py-6 shadow-lg shadow-brand-accent/20 hover:shadow-xl transition-all duration-300 gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Private Consultation</span>
                </Button>
              </Link>
              <Link href="/skin-concerns" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full border-brand-accent/30 text-foreground hover:bg-brand-accent/5 font-semibold text-sm px-6 py-6 gap-2"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent" />
                </Button>
              </Link>
            </motion.div>

            {/* Quick Contact Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 text-xs text-muted-foreground"
            >
              <a 
                href="tel:+919620638388" 
                className="inline-flex items-center gap-1.5 font-semibold text-foreground/80 hover:text-brand-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>Instant Phone Desk: +91 96206 38388</span>
              </a>
              <span>•</span>
              <span className="text-foreground/60">AECS Layout, Whitefield</span>
            </motion.div>

            {/* Interactive Concern Navigator */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 border-t border-border/50"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                Popular Concerns We Treat:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickConcerns.map((c, idx) => (
                  <Link
                    key={idx}
                    href={c.href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-xs font-medium text-foreground/85 border border-border/70 hover:border-brand-accent/50 shadow-2xs hover:shadow-xs transition-all hover:text-brand-accent"
                  >
                    <span>{c.label}</span>
                    <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Regal Portrait with Floating Luxury Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Elegant Arched Frame Backdrop */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] h-[480px] sm:h-[560px]">
              
              {/* Luxury Radial Backing */}
              <div className="absolute inset-0 rounded-t-[180px] rounded-b-[40px] bg-gradient-to-b from-brand-accent/15 via-brand-accent/5 to-transparent border border-brand-accent/20 shadow-xl overflow-hidden" />
              
              {/* Subtle halo ring */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-[340px] rounded-full border border-brand-accent/20 opacity-60" />

              {/* High-Resolution Doctor Image */}
              <div className="relative w-full h-full flex items-end justify-center z-10 pb-0">
                <Image
                  src="/dr-divya.png"
                  alt="Dr. Divya Sharma - MBBS Gold Medalist Dermatologist Bangalore"
                  width={420}
                  height={560}
                  priority
                  className="w-auto h-[95%] object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Luxury Glass Badge 1: Gold Medalist */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-10 -left-6 sm:-left-10 z-20 bg-white/95 backdrop-blur-md border border-border/80 rounded-2xl p-3 sm:p-3.5 shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center flex-shrink-0 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-serif font-bold text-foreground">Gold Medalist</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">RGUHS Medical University</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Luxury Glass Badge 2: US-FDA Approved Lasers */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute top-1/3 -right-6 sm:-right-8 z-20 bg-white/95 backdrop-blur-md border border-border/80 rounded-2xl p-3 sm:p-3.5 shadow-xl max-w-[190px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-serif font-bold text-foreground">100% US-FDA</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">Approved Laser Suite</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Luxury Glass Badge 3: 4.9★ Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-white/98 backdrop-blur-xl border border-brand-accent/20 rounded-2xl px-5 py-2.5 shadow-2xl flex items-center gap-3 whitespace-nowrap"
              >
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-bold text-foreground font-sans">
                  4.9★ <span className="text-muted-foreground font-normal">• 15,000+ Patients</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-brand-accent tracking-tight">12+</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Years Clinical Mastery</div>
            <div className="text-[11px] text-muted-foreground">MD Dermatology & Dermatosurgery</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-brand-accent tracking-tight">15,000+</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Patients Transformed</div>
            <div className="text-[11px] text-muted-foreground">In Whitefield & Global Consults</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-brand-accent tracking-tight">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">US-FDA Approved</div>
            <div className="text-[11px] text-muted-foreground">Alma, Q-Switched & Fractional CO2</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-brand-accent tracking-tight">Gold Medal</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Academic Merit Award</div>
            <div className="text-[11px] text-muted-foreground">Rajiv Gandhi Health University</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
