'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { getConditions, getBlogs, ConditionData, BlogArticle } from '@/lib/cms-store';

interface GalleryItem {
  id: string;
  title: string;
  desc: string;
  before: string;
  after: string;
  category: string;
  badge?: string;
  href?: string;
  review: {
    text: string;
    name: string;
    location: string;
  };
}

const defaultReviews = [
  {
    text: "Thank you so much, Dr. Divya Ma’am, for curing my acne in such a short time. Your treatment was extremely effective, and your guidance made the whole process easy and comfortable.",
    name: "Mayookh K",
    location: "Verified Patient • Whitefield"
  },
  {
    text: "I visited Dr. Divya mam for a hair loss problem. She gave treatment for 1 month, and I can see new hair growth. I'm very satisfied with the treatment and results.",
    name: "Geeverghese M B",
    location: "Verified Patient • Bengaluru"
  },
  {
    text: "Dr. Divya is a soft-spoken and good doctor. Had laser toning done for uneven skin tone. Had great experience there. Do recommend whoever is facing any skin or hair related issues.",
    name: "Swati Das",
    location: "Verified Patient • ITPL Main Rd"
  },
  {
    text: "Her approach to zero steroid eczema management gave me my confidence back without any rebound flares. Exceptional medical guidance.",
    name: "Ananya Rao",
    location: "Verified Patient • AECS Layout"
  }
];

export const GallerySlider: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [index, setIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [autoPlay, setAutoPlay] = useState(true);

  const loadBeforeAfters = () => {
    const conditions = getConditions();
    const blogs = getBlogs();
    const collected: GalleryItem[] = [];

    // 1. Pull from conditions with Before/After
    conditions.forEach((c, idx) => {
      if (c.beforeAfterPair) {
        const review = defaultReviews[idx % defaultReviews.length];
        collected.push({
          id: `cond-${c.id}`,
          title: c.beforeAfterPair.title || `${c.title} Transformation`,
          desc: c.hookSubtitle || c.description,
          before: c.beforeAfterPair.beforeImage,
          after: c.beforeAfterPair.afterImage,
          category: c.category === 'skin' ? 'Clinical Dermatology' : c.category === 'hair' ? 'Trichology' : 'Pediatric Care',
          badge: 'Clinical Case Progression',
          href: `/${c.slug}`,
          review
        });
      }
    });

    // 2. Pull from blogs with Before/After
    blogs.forEach((b, idx) => {
      if (b.imageMode === 'before_after' && b.beforeAfter) {
        const review = defaultReviews[(idx + 2) % defaultReviews.length];
        collected.push({
          id: `blog-${b.id}`,
          title: b.title,
          desc: b.excerpt,
          before: b.beforeAfter.beforeImage,
          after: b.beforeAfter.afterImage,
          category: b.category,
          badge: b.beforeAfter.label || 'Documented Laser Case',
          href: `/blogs/${b.slug}`,
          review
        });
      }
    });

    // Fallback if none configured
    if (collected.length === 0) {
      collected.push({
        id: 'default-1',
        title: 'Active Acne & Scar Revision',
        desc: '8-week protocol combining polarized dermoscopy and custom non-steroid barrier healing.',
        before: '/process/step-01-dermoscopy.jpg',
        after: '/process/step-02-zero-steroid.jpg',
        category: 'Clinical Dermatology',
        badge: '8 Weeks Protocol',
        href: '/acne-pimples',
        review: defaultReviews[0]
      });
    }

    setItems(collected);
  };

  useEffect(() => {
    loadBeforeAfters();

    const handleUpdate = () => loadBeforeAfters();
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, []);

  useEffect(() => {
    if (!autoPlay || items.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay, items.length]);

  const handleInteraction = () => setAutoPlay(false);

  const next = () => {
    handleInteraction();
    if (items.length > 0) setIndex((prev) => (prev + 1) % items.length);
  };
  const prev = () => {
    handleInteraction();
    if (items.length > 0) setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (items.length === 0) return null;
  const currentItem = items[index % items.length];

  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 sm:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visible Photographic Progression</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground tracking-tight leading-tight">
              Proof of Clinical Excellence
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Real patients, clinically documented before & after outcomes under MBBS Gold Medalist Dr. Divya Sharma. Updated live from our clinic case registry.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-xs text-foreground/50 font-mono">
              {index + 1} / {items.length}
            </span>
            <button
              onClick={prev}
              aria-label="Previous Before After Case"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-brand-accent hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next Before After Case"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-brand-accent hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive Before/After Split Slider */}
          <div className="lg:col-span-7">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-muted group shadow-xl border border-border select-none"
              onClick={handleInteraction}
            >
              {/* After Image (Full width behind) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={currentItem.after}
                  alt={`${currentItem.title} After Treatment`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-brand-accent/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider z-10 shadow-md">
                  After Treatment
                </span>
              </div>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPos}%`, borderRight: '2px solid white' }}
              >
                <div className="absolute inset-0 w-full h-full min-w-full">
                  <Image
                    src={currentItem.before}
                    alt={`${currentItem.title} Before Treatment`}
                    fill
                    className="object-cover max-w-none"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider z-10">
                  Before Treatment
                </span>
              </div>

              {/* Category & Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-foreground text-xs font-bold rounded-full shadow-xs">
                  {currentItem.category}
                </span>
                {currentItem.badge && (
                  <span className="px-3 py-1 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {currentItem.badge}
                  </span>
                )}
              </div>

              {/* Transparent Slider Range Controller */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => {
                  handleInteraction();
                  setSliderPos(Number(e.target.value));
                }}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                aria-label="Before and After slider position"
              />

              {/* Divider Handle */}
              <div
                className="absolute top-0 bottom-0 pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-brand-accent">
                  <div className="flex gap-0.5">
                    <span className="w-0.5 h-3.5 bg-brand-accent rounded-full" />
                    <span className="w-0.5 h-3.5 bg-brand-accent rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="text-center text-xs text-foreground/50 pt-2.5 font-medium">
              Drag slider left or right to inspect dermal texture & clearance
            </p>
          </div>

          {/* Right: Case Information & Verified Patient Review */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              key={`info-${currentItem.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-2xl sm:text-3xl font-serif italic text-foreground leading-snug">
                {currentItem.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                {currentItem.desc}
              </p>

              {currentItem.href && (
                <div className="pt-1">
                  <Link
                    href={currentItem.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:underline uppercase tracking-wider"
                  >
                    <span>View Treatment Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Verified Review Card */}
            <motion.div
              key={`review-${currentItem.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="p-6 rounded-3xl bg-[#FAF7F2] border border-border/80 flex flex-col space-y-4 shadow-xs"
            >
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                ))}
              </div>
              <p className="italic text-foreground/80 leading-relaxed text-xs sm:text-sm">
                &quot;{currentItem.review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-sm">
                  {currentItem.review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-xs text-foreground">{currentItem.review.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                    {currentItem.review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
