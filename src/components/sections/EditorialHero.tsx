'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight, Scissors, Baby, Stethoscope } from 'lucide-react';
import { getHeroCarouselItems, getConditions, ConditionData } from '@/lib/cms-store';

interface ConditionCard {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

const conditionsData: Record<string, { label: string; count: string; hubHref: string; items: ConditionCard[] }> = {
  skin: {
    label: 'Medical Skin',
    count: '12 Treatments',
    hubHref: '/skin-concerns',
    items: [
      { id: 'acne', title: 'Acne & Pimples', subtitle: 'Hormonal & Cystic Acne', href: '/acne-pimples', image: '/service-clinical-derm.png' },
      { id: 'melasma', title: 'Melasma & Pigment', subtitle: 'Targeted Melanin Control', href: '/melasma', image: '/service-aesthetic-med.png' },
      { id: 'keloids', title: 'Keloids & Scars', subtitle: 'Steroid-Free Scar Repair', href: '/keloids', image: '/laser-treatment.png' },
      { id: 'psoriasis', title: 'Psoriasis & Plaques', subtitle: 'Systemic Remission Protocols', href: '/psoriasis', image: '/service-clinical-derm.png' },
      { id: 'eczema', title: 'Eczema & Barrier', subtitle: 'Ceramide Lipid Repair', href: '/eczema', image: '/service-clinical-derm.png' },
      { id: 'allergies', title: 'Skin Allergies & Hives', subtitle: 'Acute & Chronic Urticaria', href: '/skin-allergies', image: '/service-clinical-derm.png' },
      { id: 'keratosis', title: 'Keratosis Pilaris', subtitle: 'Follicular Texture Renewal', href: '/keratosis-pilaris', image: '/service-clinical-derm.png' },
      { id: 'skin-tags', title: 'Skin Tags & Cysts', subtitle: 'Painful RF Snip Removal', href: '/skin-tags', image: '/service-clinical-derm.png' },
      { id: 'steroid-damage', title: 'Steroid Damage (TSW)', subtitle: 'Skin Barrier Rehabilitation', href: '/topical-steroids', image: '/service-clinical-derm.png' },
      { id: 'dark-circles', title: 'Dark Circles', subtitle: 'Periorbital Rejuvenation', href: '/dark-circles', image: '/service-aesthetic-med.png' },
      { id: 'stretch-marks', title: 'Stretch Marks', subtitle: 'Collagen Remodeling', href: '/stretch-marks', image: '/laser-treatment.png' },
      { id: 'warts', title: 'Warts & Verrucae', subtitle: 'Viral Cryo & RF Clearance', href: '/warts-or-verrucae', image: '/service-clinical-derm.png' },
    ]
  },
  aesthetics: {
    label: 'Aesthetics',
    count: '13 Procedures',
    hubHref: '/aesthetics-skin-care',
    items: [
      { id: 'laser-hair', title: 'Laser Hair Reduction', subtitle: 'US-FDA Triple-Wavelength', href: '/unwanted-hair', image: '/service-laser-tech.png' },
      { id: 'bridal-pkg', title: 'Bridal Dermatology', subtitle: 'Pre-Wedding Radiance', href: '/bridal-dermatology', image: '/service-aesthetic-med.png' },
      { id: 'hollywood-peel', title: 'Hollywood Peel', subtitle: 'Spectra Carbon Glow', href: '/hollywood-peel', image: '/service-aesthetic-med.png' },
      { id: 'carbon-peel', title: 'Carbon Peel', subtitle: 'Deep Pore Detox & Oil Control', href: '/carbon-peel', image: '/service-aesthetic-med.png' },
      { id: 'laser-rejuvenation', title: 'Q Switched Laser Rejuvenation', subtitle: 'Non-Ablative Dermal Toning', href: '/laser-toning', image: '/service-laser-tech.png' },
      { id: 'laser-pigment', title: 'Q Switched Laser Pigmentation', subtitle: 'Melanin & Sun Spot Fading', href: '/dark-spot-and-pigment-reduction', image: '/service-aesthetic-med.png' },
      { id: 'mnrf', title: 'Micro Needling RF (MNRF)', subtitle: 'EndyMed 3DEEP Collagen', href: '/scar-removal', image: '/service-aesthetic-med.png' },
      { id: 'fsr', title: 'Fractional Resurfacing (FSR)', subtitle: 'Pore & Texture Renewal', href: '/skin-resurfacing-texture', image: '/service-aesthetic-med.png' },
      { id: 'proshaper-arms', title: 'Pro Shaper Arms', subtitle: 'Upper Arm RF Tightening', href: '/body-contouring', image: '/service-aesthetic-med.png' },
      { id: 'proshaper-jaw', title: 'Pro Shaper Jawline', subtitle: 'Submental Contouring', href: '/body-contouring', image: '/service-aesthetic-med.png' },
      { id: 'ifine-eyes', title: 'iFine Under Eye', subtitle: 'Periorbital RF Smoothing', href: '/dark-circles', image: '/service-aesthetic-med.png' },
      { id: 'oxyjet', title: 'OxyJet MediFacial', subtitle: 'Pure Hyperbaric Oxygen', href: '/oxyjet-medifacial', image: '/service-aesthetic-med.png' },
      { id: 'hydra', title: 'Hydra MediFacial', subtitle: 'Vortex Pore Hydro-Infusion', href: '/hydra-medifacial', image: '/service-aesthetic-med.png' },
    ]
  },
  hair: {
    label: 'Hair',
    count: '9 Procedures',
    hubHref: '/hair-scalp-problems',
    items: [
      { id: 'prp-hair', title: 'PRP Hair Growth', subtitle: 'Platelet Rich Plasma Therapy', href: '/hair-loss', image: '/service-hair-restoration.png' },
      { id: 'gfc-hair', title: 'GFC Hair Growth', subtitle: 'Growth Factor Concentrate', href: '/hair-loss', image: '/service-hair-restoration.png' },
      { id: 'prf-hair', title: 'PRF Hair Growth', subtitle: 'Platelet Rich Fibrin Matrix', href: '/hair-loss', image: '/service-hair-restoration.png' },
      { id: 'mesotherapy-hair', title: 'Mesotherapy for Hair', subtitle: 'Micro-Nutrient Follicle Fuel', href: '/hair-loss', image: '/service-hair-restoration.png' },
      { id: 'lllt-hair', title: 'Low Level Laser (LLLT)', subtitle: '650nm Cellular ATP Boost', href: '/hair-loss', image: '/service-hair-restoration.png' },
      { id: 'led-hair', title: 'Medical Grade LED', subtitle: 'Anti-Inflammatory Phototherapy', href: '/hair-loss', image: '/service-hair-restoration.png' },
      { id: 'male-baldness', title: 'Male Pattern Baldness', subtitle: 'DHT Blocker & Regrowth', href: '/hair-loss-in-men', image: '/service-hair-restoration.png' },
      { id: 'female-hairfall', title: 'Female Hair Fall & PCOS', subtitle: 'Endocrine & Nutritional Care', href: '/hair-fall-in-female', image: '/service-hair-restoration.png' },
      { id: 'dandruff', title: 'Chronic Dandruff Relief', subtitle: 'Malassezia Antifungal Protocol', href: '/dandruff', image: '/service-hair-restoration.png' },
    ]
  },
  pediatrics: {
    label: 'Pediatric Care',
    count: '6 Specializations',
    hubHref: '/newborn-pediatric-dermatology',
    items: [
      { id: 'baby-skin', title: 'Newborn Skin Care', subtitle: 'Neonatal Barrier Protocols', href: '/baby-skin-care', image: '/service-pediatric-care.png' },
      { id: 'cradle-cap', title: 'Infant Cradle Cap', subtitle: 'Gentle Seborrheic Clearing', href: '/cradle-cap', image: '/service-pediatric-care.png' },
      { id: 'diaper-rash', title: 'Diaper Rash Healing', subtitle: 'Rapid Zinc Barrier Healing', href: '/diaper-rash', image: '/service-pediatric-care.png' },
      { id: 'baby-rashes', title: 'Common Baby Rashes', subtitle: 'Viral Exanthem & Heat Rash', href: '/common-skin-rashes-in-babies', image: '/service-pediatric-care.png' },
      { id: 'food-allergy', title: 'Cutaneous Allergies', subtitle: 'Eczema & Food Reaction Care', href: '/food-allergy', image: '/service-pediatric-care.png' },
      { id: 'pediatric-hub', title: 'Pediatric Dermatology', subtitle: 'Safe Infant & Toddler Care', href: '/newborn-pediatric-dermatology', image: '/service-pediatric-care.png' },
    ]
  }
};

export const EditorialHero: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'skin' | 'aesthetics' | 'hair' | 'pediatrics'>('skin');
  const [dynamicItems, setDynamicItems] = useState<ConditionCard[]>(conditionsData.skin.items);
  const [conditionsMap, setConditionsMap] = useState<Record<string, ConditionData>>({});

  useEffect(() => {
    const loadItems = () => {
      const cmsItems = getHeroCarouselItems(activeCategory);
      if (cmsItems && cmsItems.length > 0) {
        setDynamicItems(cmsItems);
      } else {
        setDynamicItems(conditionsData[activeCategory].items);
      }

      const allConditions = getConditions();
      const map: Record<string, ConditionData> = {};
      allConditions.forEach((c) => {
        map[c.slug] = c;
      });
      setConditionsMap(map);
    };
    loadItems();

    const handleUpdate = () => loadItems();
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, [activeCategory]);

  // Normalize list to 12 items for balanced 3D cylinder display
  const rawItems = dynamicItems.length > 0 ? dynamicItems : conditionsData[activeCategory].items;
  const items = rawItems.length < 12 ? [...rawItems, ...rawItems] : rawItems;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const scrollOffsetRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const didDragRef = useRef<boolean>(false);

  useEffect(() => {
    let animationFrameId: number;
    const cardWidth = 205; // Card width in px
    const gap = 18; // Gap in px
    const step = cardWidth + gap; // 223px
    const totalCount = items.length;
    const totalTrackWidth = totalCount * step;

    const render3D = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const centerX = containerWidth / 2;

      // Auto-scroll left-to-right (cards move towards the right)
      if (!isHoveredRef.current && !isDraggingRef.current) {
        scrollOffsetRef.current -= 0.85; // Negative offset moves items towards right!
        if (scrollOffsetRef.current < 0) {
          scrollOffsetRef.current += totalTrackWidth;
        }
      }

      const offset = scrollOffsetRef.current;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;

        // Calculate card's X position in the cyclical loop
        let x = (index * step - (offset % totalTrackWidth));
        // Wrap around smoothly
        while (x < -step * 2) x += totalTrackWidth;
        while (x > containerWidth + step * 2) x -= totalTrackWidth;

        const cardCenter = x + cardWidth / 2;
        // Normalized distance from center of screen (-1.0 at left edge, 0 at center, +1.0 at right edge)
        const norm = (cardCenter - centerX) / (containerWidth / 2);

        // Real-time 3D Z-Axis Cylinder calculations:
        // Center card pops forward (+50px on Z axis), edge cards recede (-220px on Z axis)
        const rotateY = -norm * 32; // Inward 3D tilt (degrees)
        const translateZ = (1 - Math.pow(Math.abs(norm), 1.5)) * 60 - (Math.abs(norm) * 180); // Z-axis depth!
        const translateY = Math.pow(Math.abs(norm), 1.7) * 26; // Arch curve downwards at edges
        const scale = Math.max(0.78, 1.04 - Math.abs(norm) * 0.16); // Scale down in background
        const brightness = Math.max(0.65, 1 - Math.abs(norm) * 0.25); // Subtle shadow in depth

        el.style.transform = `translate3d(${x}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        el.style.zIndex = `${Math.round((1 - Math.min(1, Math.abs(norm))) * 80)}`;
        el.style.filter = `brightness(${brightness})`;
        el.style.opacity = Math.abs(norm) > 1.35 ? '0' : (Math.abs(norm) > 1.0 ? `${1 - (Math.abs(norm) - 1.0) / 0.35}` : '1');
      });

      animationFrameId = requestAnimationFrame(render3D);
    };

    animationFrameId = requestAnimationFrame(render3D);
    return () => cancelAnimationFrame(animationFrameId);
  }, [items]);

  // Handle Mouse Drag / Scrub Interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    dragStartOffsetRef.current = scrollOffsetRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const deltaY = e.clientY - dragStartYRef.current;
    const distance = Math.hypot(deltaX, deltaY);
    if (distance > 12) {
      didDragRef.current = true;
    }
    scrollOffsetRef.current = dragStartOffsetRef.current - deltaX;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Handle Mobile Touch Interaction (Prevents getting stuck on hover)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    isDraggingRef.current = true;
    didDragRef.current = false;
    isHoveredRef.current = true;
    dragStartXRef.current = e.touches[0].clientX;
    dragStartYRef.current = e.touches[0].clientY;
    dragStartOffsetRef.current = scrollOffsetRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - dragStartXRef.current;
    const deltaY = e.touches[0].clientY - dragStartYRef.current;
    const distance = Math.hypot(deltaX, deltaY);
    if (distance > 14) {
      didDragRef.current = true;
    }
    scrollOffsetRef.current = dragStartOffsetRef.current - deltaX;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    // Automatically resume auto-scroll on mobile after brief pause
    setTimeout(() => {
      isHoveredRef.current = false;
    }, 300);
  };

  return (
    <section suppressHydrationWarning className="relative bg-[#FAF7F2] pt-10 sm:pt-14 pb-10 sm:pb-14 overflow-hidden border-b border-border/40">
      
      {/* 1. ON TOP: Headline, Subtitle, CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        
        {/* Subtle Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-foreground/[0.04] border border-foreground/[0.08] text-[11px] font-medium tracking-widest text-foreground/70 uppercase">
          <Sparkles className="w-3 h-3 text-brand-accent" />
          <span>MBBS Gold Medalist • Indira Gandhi Govt. Medical College</span>
        </div>

        {/* Hero Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.12]"
        >
          <span className="font-serif italic font-normal text-foreground/90 block">
            Where Clinical Excellence
          </span>
          <span className="font-sans font-bold text-foreground">
            Meets World-Class Aesthetics
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto text-sm sm:text-base text-foreground/65 leading-relaxed font-normal"
        >
          Personalized root-cause diagnosis led by <strong>Dr. Divya Sharma</strong>. From chronic inflammatory conditions to US-FDA laser aesthetics in Whitefield, Bangalore.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-[#5E2F1E] text-white font-medium text-xs sm:text-sm tracking-wide shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <span>Book Doctor Consultation</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </Link>
          <Link
            href="/skin-concerns"
            className="text-xs font-semibold text-foreground/70 hover:text-brand-accent transition-colors underline underline-offset-4"
          >
            Browse All 80+ Medical Conditions →
          </Link>
        </motion.div>

        {/* 2. SKIN / HAIR / PEDIATRIC TABS DIRECTLY UNDER HEADLINE - CLEAN, MINIMAL & LUXURY */}
        <div className="pt-4 relative z-30 flex flex-col items-center w-full px-2 sm:px-0">
          <div className="max-w-full overflow-x-auto no-scrollbar py-0.5">
            <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-border/80 shadow-xs gap-1 sm:gap-1.5">
              {[
                { key: 'skin' as const, icon: Stethoscope, label: 'Medical Skin', count: '12' },
                { key: 'aesthetics' as const, icon: Sparkles, label: 'Aesthetics', count: '13' },
                { key: 'hair' as const, icon: Scissors, label: 'Hair', count: '9' },
                { key: 'pediatrics' as const, icon: Baby, label: 'Pediatric', count: '6' },
              ].map((item) => {
                const isActive = activeCategory === item.key;
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setActiveCategory(item.key);
                      scrollOffsetRef.current = 0;
                    }}
                    className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm tracking-tight cursor-pointer select-none whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-accent/[0.08] text-brand-accent border border-brand-accent/25 shadow-xs font-semibold'
                        : 'bg-transparent text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03] border border-transparent font-medium'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${
                      isActive ? 'text-brand-accent' : 'text-foreground/45 group-hover:text-foreground/70'
                    }`} />
                    <span>{item.label}</span>
                    <span className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-brand-accent/15 text-brand-accent'
                        : 'bg-foreground/[0.05] text-foreground/50 group-hover:text-foreground/70'
                    }`}>
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Hub Navigation Link for Active Category */}
          <div className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-center px-4">
            <span className="text-foreground/60 font-medium">
              Click if you have this concern to read more and book appointment
            </span>
            <span className="text-foreground/30 hidden sm:inline">•</span>
            <Link
              href={conditionsData[activeCategory].hubHref}
              className="font-bold text-brand-accent hover:text-brand-accent/80 hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Explore full {conditionsData[activeCategory].label} hub</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>

      {/* 3. THEN THE CAROUSEL (With True 3D Z-Axis Arc & Left-to-Right Scrolling) */}
      <div 
        className="relative mt-8 sm:mt-10 w-full select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; handleMouseUp(); }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-30 pointer-events-none" />

        {/* 3D Perspective Stage Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[280px] sm:h-[340px] overflow-hidden"
          style={{
            perspective: '1000px',
            perspectiveOrigin: '50% 45%',
          }}
        >
          {items.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              ref={(el) => { cardRefs.current[index] = el; }}
              href={item.href}
              onClick={(e) => {
                if (didDragRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              className="absolute top-4 left-0 w-[190px] sm:w-[205px] h-[250px] sm:h-[285px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-black/[0.08] shadow-md hover:shadow-2xl transition-shadow duration-300 group cursor-pointer block select-none"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity, filter',
              }}
            >
              {/* Background Image */}
              <div className="relative w-full h-full pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 190px, 205px"
                  loading={index < 3 ? "eager" : "lazy"}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Contrast Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-45% to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Category Pill Tag & Before/After Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-wide text-foreground border border-white/60 shadow-xs">
                  {conditionsData[activeCategory].label.split(' ')[0]}
                </span>
                {conditionsMap[item.href.replace(/^\//, '')]?.beforeAfterPair && (
                  <span className="px-2 py-0.5 rounded-full bg-brand-accent/90 backdrop-blur-md text-[9px] font-bold text-white shadow-xs uppercase tracking-wider">
                    B/A Case
                  </span>
                )}
              </div>

              {/* Card Bottom Typography */}
              <div className="absolute inset-x-0 bottom-0 p-4 z-10 flex flex-col justify-end text-left space-y-1 pointer-events-none">
                <h3 className="text-white text-sm sm:text-base font-serif italic font-normal drop-shadow-sm group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[11px] line-clamp-1 font-sans">
                  {item.subtitle}
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] font-semibold text-amber-300 opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 duration-200">
                  <span>View Protocol</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Hover Highlight Ring */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/0 group-hover:border-white/50 transition-colors pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Carousel Micro Guide */}
        <div className="text-center mt-1">
          <p className="text-[10px] sm:text-[11px] text-foreground/45 font-medium tracking-wider uppercase">
            ← 3D Continuous Scroll • Click card to view condition • Drag or hover to pause →
          </p>
        </div>
      </div>

    </section>
  );
};
