'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Calendar,
  Stethoscope,
  Maximize2
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Diagnostic Root-Cause Mapping',
    image: '/process/step-01-dermoscopy.jpg',
    tag: 'Polarized Dermoscopy',
    description: 'High-resolution polarized dermoscopy and follicle densitometry to uncover cellular triggers, sebum composition, and vascular patterns before prescribing any intervention.',
    highlight: 'Zero guesswork diagnosis'
  },
  {
    step: '02',
    title: 'Zero-Steroid Medical Ethics',
    image: '/process/step-02-zero-steroid.jpg',
    tag: 'Barrier-First Formulation',
    description: 'Strict medical protocols rejecting steroid dependence. We prescribe targeted ceramide lipid complexes, bio-peptides, and anti-inflammatory therapeutics that heal without rebound thinning.',
    highlight: 'Sustainable long-term remission'
  },
  {
    step: '03',
    title: 'US-FDA Cleared Suite Precision',
    image: '/process/step-03-laser-suite.jpg',
    tag: 'Advanced Laser Technology',
    description: 'Calibrated specifically for Indian skin types using fractional CO2 scar remodeling, Q-Switched Nd:YAG pigment clearance, and triple-chilling in-motion laser hair reduction.',
    highlight: 'Maximum efficacy, minimal downtime'
  },
  {
    step: '04',
    title: 'Barrier Rehabilitation & Follow-up',
    image: '/process/step-04-barrier-rehab.jpg',
    tag: 'Post-Care Protection',
    description: 'Structured monitoring, lipid barrier restoration maintenance, and proactive lifestyle protocols to ensure lasting skin and scalp health without treatment dependence.',
    highlight: 'Lifetime clinical support'
  },
];

export const ProcessBento: React.FC = () => {
  const [isDoctorHovered, setIsDoctorHovered] = useState(false);

  return (
    <section 
      id="clinical-process" 
      aria-labelledby="process-heading" 
      className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-border/40 relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs font-bold tracking-wider text-brand-accent uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>Structured Clinical Pathway • Direct Doctor Care</span>
          </motion.div>

          <motion.h2 
            id="process-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.18]"
          >
            <span className="font-serif italic font-normal text-foreground/90 block">
              Everything Has a Process, And
            </span>
            <span className="font-sans font-extrabold text-foreground">
              We Perfect Every Step
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-foreground/70 leading-relaxed font-normal"
          >
            Led personally by <strong>Dr. Divya Sharma</strong> (MBBS Gold Medalist, MD Dermatology). From high-resolution polarized dermoscopy to custom US-FDA laser therapeutics and long-term barrier lipid restoration with zero steroid abuse.
          </motion.p>
        </header>

        {/* Dynamic Expandable Bento Layout: Dr. Divya expands to the right on hover, squeezing the other cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* LEFT: Featured Dr. Divya Sharma Expandable Bento Card with Impactful Brown Backdrop Circle */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            onMouseEnter={() => setIsDoctorHovered(true)}
            onMouseLeave={() => setIsDoctorHovered(false)}
            className={`w-full rounded-4xl bg-white border border-border/80 shadow-md hover:shadow-2xl flex flex-col overflow-hidden group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isDoctorHovered 
                ? 'lg:w-[56%] xl:w-[58%] ring-2 ring-brand-accent/20' 
                : 'lg:w-[44%] xl:w-[42%]'
            }`}
          >
            {/* Impactful Portrait Stage with Warm Brown Halo Circle Behind Dr. Divya's Head */}
            <div className="relative h-[380px] sm:h-[430px] lg:h-[450px] w-full overflow-hidden bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F0] to-white flex items-end justify-center transition-all duration-700">
              
              {/* Impactful Brand Brown Halo Circle Behind Dr. Divya's Head */}
              <div 
                className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#763C26] via-[#8C4630] to-[#B35E3E] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isDoctorHovered 
                    ? 'w-72 h-72 sm:w-84 sm:h-84 lg:w-96 lg:h-96 scale-105' 
                    : 'w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80'
                }`} 
              />

              {/* Ambient Circular Halo Border Accent */}
              <div 
                className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-accent/25 transition-all duration-700 pointer-events-none ${
                  isDoctorHovered 
                    ? 'w-84 h-84 sm:w-96 sm:h-96 lg:w-[410px] lg:h-[410px]' 
                    : 'w-76 h-76 sm:w-84 sm:h-84 lg:w-92 lg:h-92'
                }`}
              />

              {/* Dr. Divya Sharma Cutout Portrait - Crystal Clear in the Foreground */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/dr-divya.png"
                  alt="Dr. Divya Sharma MBBS MD Gold Medalist Dermatologist Whitefield Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                  className="object-contain object-bottom filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Top Floating Credential Badges - Outside Her Head Area */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-foreground border border-white/80 shadow-md">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  MBBS Gold Medalist
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-accent text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  MD Dermatology
                </span>
              </div>

              {/* Top Right Expand Cue */}
              <div className="absolute top-4 right-4 z-20 hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-foreground/80 text-[10px] font-bold tracking-wider uppercase border border-border/60 shadow-xs">
                <Maximize2 className={`w-3 h-3 text-brand-accent transition-transform duration-500 ${isDoctorHovered ? 'rotate-90' : ''}`} />
                <span>{isDoctorHovered ? 'Expanded' : 'Hover to Expand'}</span>
              </div>
            </div>

            {/* Doctor Credentials & Direct Consultation Philosophy */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-white">
              <div className="space-y-3 text-left">
                
                {/* Doctor Identity Block */}
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-brand-accent font-bold uppercase tracking-wider mb-1">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Direct Diagnostic Evaluation</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-foreground tracking-tight">
                    Dr. Divya Sharma
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                    Former Senior Registrar, St. John&apos;s Medical College • 15+ Years Mastery
                  </p>
                </div>

                {/* 100% Doctor Guarantee Callout */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-border/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Personal Consultation Guarantee</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    &ldquo;Every diagnosis and treatment plan is formulated by me personally. We never delegate medical decisions to junior technicians, ensuring rigorous safety and genuine root-cause resolution.&rdquo;
                  </p>
                </div>

                {/* Badges that adapt smoothly on expand */}
                <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-accent/40 border border-border/60">15,000+ Consultations</span>
                  <span className="px-3 py-1 rounded-full bg-accent/40 border border-border/60">Times Health Award Rank #1</span>
                  <span className="px-3 py-1 rounded-full bg-accent/40 border border-border/60">AECS Layout, Whitefield</span>
                  {isDoctorHovered && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent font-bold border border-brand-accent/20"
                    >
                      Zero-Steroid Abuse Protocol
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Book Consultation Brown CTA Button */}
              <div className="pt-2">
                <Link
                  href="/book-an-appointment"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-accent hover:bg-[#5E2F1E] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Divya</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* RIGHT: 4 Clinical Process Step Bento Cards with Rich Photography (Squeezes smoothly on hover) */}
          <div 
            className={`w-full flex flex-col justify-between gap-5 lg:gap-6 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isDoctorHovered 
                ? 'lg:w-[44%] xl:w-[42%]' 
                : 'lg:w-[56%] xl:w-[58%]'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 flex-1 items-stretch">
              {processSteps.map((stepItem, idx) => (
                <motion.div
                  key={stepItem.step}
                  id={`step-${stepItem.step}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="p-4 sm:p-5 rounded-3xl bg-white border border-border/80 shadow-xs hover:shadow-lg hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
                >
                  {/* High-Resolution Step Photograph */}
                  <div className="relative h-36 sm:h-40 w-full rounded-2xl overflow-hidden mb-3.5 bg-accent/20">
                    <Image
                      src={stepItem.image}
                      alt={stepItem.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Step Number Tag on Image */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-extrabold tracking-wider border border-white/20">
                        {stepItem.step}
                      </span>
                    </div>

                    {/* Step Category Tag on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-foreground text-[10px] font-bold tracking-tight shadow-xs">
                        {stepItem.tag}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-1.5 my-auto">
                    <h3 className="font-inter text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug group-hover:text-brand-accent transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed font-normal line-clamp-3 group-hover:line-clamp-none transition-all">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Step Bottom Key Benefit Badge */}
                  <div className="pt-3 mt-3 border-t border-border/50 flex items-center gap-2 text-xs font-semibold text-brand-accent">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[11px] truncate">{stepItem.highlight}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Full-Width Process Clinical Assurance Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-3xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-border/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            >
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-foreground">
                  Looking for guidance on your specific condition?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Browse through all clinical pathways or discuss directly with Dr. Divya Sharma.
                </p>
              </div>
              <Link
                href="/skin-concerns"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-foreground/[0.06] hover:bg-brand-accent hover:text-white text-xs font-bold text-foreground transition-all shrink-0"
              >
                <span>Browse All 80+ Conditions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
