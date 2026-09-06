'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Stethoscope, Scissors, Baby, Zap, CheckCircle2, SplitSquareVertical } from 'lucide-react';
import { motion } from 'framer-motion';
import { getConditions, ConditionData } from '@/lib/cms-store';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

const clinicalSuites = [
  {
    id: "clinical-derm",
    conditionSlug: "acne-pimples",
    title: "Clinical Medical Dermatology",
    subtitle: "Root-cause medical care for complex disorders",
    badge: "Evidence-Based Diagnostics",
    icon: Stethoscope,
    image: "/service-clinical-derm.png",
    href: "/medical-dermatology",
    description: "Targeted medical management for persistent skin diseases led by Gold Medalist Dermatologist Dr. Divya Sharma with zero steroid abuse.",
    treatments: [
      { name: "Acne & Cystic Pimples", href: "/acne-pimples" },
      { name: "Keloids & Raised Scars", href: "/keloids" },
      { name: "Melasma & Pigmentation", href: "/melasma" },
      { name: "Psoriasis & Scalp Plaques", href: "/psoriasis" },
      { name: "Eczema & Barrier Repair", href: "/eczema" },
      { name: "Skin Allergies & Hives", href: "/skin-allergies" },
    ]
  },
  {
    id: "aesthetic-med",
    conditionSlug: "melasma",
    title: "Aesthetics & Laser Dermatology",
    subtitle: "US-FDA approved rejuvenation & scar correction",
    badge: "Gold-Standard Lasers",
    icon: Sparkles,
    image: "/service-aesthetic-med.png",
    href: "/aesthetics-skin-care",
    description: "Precision medical aesthetics combining Q-Switched lasers, fractional CO2 scar remodeling, and medical chemical peels.",
    treatments: [
      { name: "Hollywood Carbon Laser Peel", href: "/hollywood-peel" },
      { name: "Acne Scar Removal (CO2)", href: "/scar-removal" },
      { name: "Q-Switched Laser Toning", href: "/laser-toning" },
      { name: "Medical Chemical Peels", href: "/chemical-peels" },
      { name: "Skin Resurfacing & Texture", href: "/skin-resurfacing-texture" },
      { name: "Tattoo Removal", href: "/tattoo-removal" },
    ]
  },
  {
    id: "hair-solutions",
    conditionSlug: "hair-loss",
    title: "Trichology & Hair Restoration",
    subtitle: "Biological hair follicle regrowth therapies",
    badge: "Regenerative Medicine",
    icon: Scissors,
    image: "/service-hair-restoration.png",
    href: "/hair-scalp-problems",
    description: "Autologous Growth Factor Concentrate (GFC) therapy and polarized video-dermoscopy to reverse thinning and eliminate scalp dermatitis.",
    treatments: [
      { name: "Hair Loss & GFC Therapy", href: "/hair-loss" },
      { name: "Male Pattern Baldness", href: "/hair-loss-in-men" },
      { name: "Female Hair Fall & PCOS", href: "/hair-fall-in-female" },
      { name: "Chronic Dandruff Relief", href: "/dandruff" },
      { name: "Hair & Scalp Health Hub", href: "/hair-scalp-problems" },
    ]
  },
  {
    id: "laser-tech",
    conditionSlug: "tattoo-removal",
    title: "Painless Laser Hair & Ink Removal",
    subtitle: "Triple-wavelength diode & Nd:YAG precision",
    badge: "Pain-Free In-Motion Tech",
    icon: Zap,
    image: "/service-laser-tech.png",
    href: "/unwanted-hair",
    description: "Permanent reduction of unwanted facial and body hair utilizing US-FDA approved multi-wavelength chilling lasers engineered for Indian skin.",
    treatments: [
      { name: "Full Body Laser Hair Reduction", href: "/unwanted-hair" },
      { name: "Male Beard Shaping & Chest", href: "/unwanted-male-body-hair" },
      { name: "Facial Hair Reduction", href: "/unwanted-hair-removal" },
      { name: "Laser Hair Removal FAQs", href: "/faq/laser-hair-removal" },
    ]
  },
  {
    id: "pediatric-skin",
    conditionSlug: "baby-skin-care",
    title: "Pediatric Dermatology",
    subtitle: "Gentle infant, toddler & childhood skin healing",
    badge: "Pediatric Safety Protocols",
    icon: Baby,
    image: "/service-pediatric-care.png",
    href: "/newborn-pediatric-dermatology",
    description: "Compassionate, scientifically calibrated dermatological care for delicate newborn skin barriers, cradle cap, eczema, and rashes.",
    treatments: [
      { name: "Newborn Skin Care Protocol", href: "/baby-skin-care" },
      { name: "Infant Cradle Cap Care", href: "/cradle-cap" },
      { name: "Diaper Rash Barrier Healing", href: "/diaper-rash" },
      { name: "Common Baby Skin Rashes", href: "/common-skin-rashes-in-babies" },
      { name: "Cutaneous Food Allergies", href: "/food-allergy" },
    ]
  }
];

export const ServicesSection: React.FC = () => {
  const [conditionsMap, setConditionsMap] = useState<Record<string, ConditionData>>({});
  const [activeCardView, setActiveCardView] = useState<Record<string, 'overview' | 'before_after'>>({});

  const loadConditions = () => {
    const list = getConditions();
    const map: Record<string, ConditionData> = {};
    list.forEach((c) => {
      map[c.slug] = c;
    });
    setConditionsMap(map);
  };

  useEffect(() => {
    loadConditions();

    const handleUpdate = () => loadConditions();
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, []);

  const toggleView = (suiteId: string) => {
    setActiveCardView((prev) => ({
      ...prev,
      [suiteId]: prev[suiteId] === 'before_after' ? 'overview' : 'before_after'
    }));
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#faf7f3] relative overflow-hidden border-b border-border/40">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Clinical Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-foreground tracking-tight leading-tight">
            Specialized Treatment Suites
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every patient receives direct diagnostic evaluation by Dr. Divya Sharma. Explore our core clinical suites below with live Before/After results from our registry.
          </p>
        </div>

        {/* The Luxury Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalSuites.map((suite, idx) => {
            const condition = conditionsMap[suite.conditionSlug];
            const hasBeforeAfter = condition?.beforeAfterPair;
            const isShowingBA = activeCardView[suite.id] === 'before_after' && hasBeforeAfter;
            const cardImage = condition?.heroImage || suite.image;

            return (
              <motion.div
                key={suite.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-border/80 hover:border-brand-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card Banner: Toggle between Overview Image & Before/After Comparison */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-accent/30">
                  {isShowingBA && condition?.beforeAfterPair ? (
                    <div className="h-full w-full">
                      <BeforeAfterSlider
                        beforeImage={condition.beforeAfterPair.beforeImage}
                        afterImage={condition.beforeAfterPair.afterImage}
                        badge={condition.beforeAfterPair.title}
                        className="h-full rounded-none"
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src={cardImage}
                        alt={suite.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
                      
                      {/* Badge on Image */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-foreground border border-white/60 shadow-sm">
                          {suite.badge}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Before / After Toggle Button on Top Right of Image */}
                  {hasBeforeAfter && (
                    <button
                      type="button"
                      onClick={() => toggleView(suite.id)}
                      className={`absolute top-3.5 right-3.5 z-30 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-1 cursor-pointer ${
                        isShowingBA
                          ? 'bg-brand-accent text-white border border-white/30'
                          : 'bg-white/95 text-brand-accent hover:bg-white border border-brand-accent/20'
                      }`}
                    >
                      <SplitSquareVertical className="w-3 h-3" />
                      <span>{isShowingBA ? 'Show Overview' : 'Before / After'}</span>
                    </button>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-accent transition-colors">
                      {suite.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-accent">
                      {suite.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {condition?.description || suite.description}
                  </p>

                  {/* Key Treatments Pill Matrix */}
                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/70">
                      Core Procedures:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {suite.treatments.map((t, tIdx) => (
                        <Link
                          key={tIdx}
                          href={t.href}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-accent/40 hover:bg-brand-accent hover:text-white text-foreground/80 font-medium transition-colors border border-border/40"
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Hub Link CTA */}
                  <div className="pt-2">
                    <Link
                      href={suite.href}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-accent/30 hover:bg-brand-accent text-foreground hover:text-white font-bold text-xs transition-all group/btn"
                    >
                      <span>Explore {suite.title}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* View All Skin Concerns Banner */}
        <div className="mt-14 text-center">
          <Link
            href="/skin-concerns"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background hover:bg-brand-accent font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Browse Complete Directory of 80+ Conditions & Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
