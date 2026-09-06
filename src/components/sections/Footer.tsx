'use client';

import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-12 px-6 sm:px-8 md:px-12 mt-auto border-t border-border/20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Branding & Direct Contact Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-background/15 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.svg" 
                alt="Dr. Divya Sharma Skin & Hair Solutions" 
                width={180} 
                height={42} 
                className="h-10 w-auto brightness-0 invert object-contain" 
              />
            </Link>
            <p className="text-sm text-background/70 max-w-md leading-relaxed">
              Led by MBBS (Gold Medalist) & MD Dermatologist Dr. Divya Sharma, our Whitefield clinic brings 12+ years of clinical excellence, US-FDA approved laser technology, and individualized care for complex skin, hair, and pediatric conditions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/10 text-xs font-semibold text-brand-accent">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>US-FDA Approved Lasers & Technology</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/50">Clinic Address</h4>
            <div className="flex items-start space-x-3 text-background/80">
              <MapPin className="h-4 w-4 text-brand-accent mt-1 flex-shrink-0" />
              <p className="leading-relaxed">
                Dr. Divya Sharma Skin & Hair Solutions,<br />
                AECS Layout, ITPL Main Road, Whitefield,<br />
                Bangalore, Karnataka 560037
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:+919620638388" 
                className="inline-flex items-center space-x-2 text-background/90 hover:text-brand-accent transition-colors font-medium text-xs"
              >
                <Phone className="h-3.5 w-3.5 text-brand-accent" />
                <span>+91 96206 38388</span>
              </a>
              <a 
                href="mailto:info@drdivyasharma.com" 
                className="inline-flex items-center space-x-2 text-background/90 hover:text-brand-accent transition-colors font-medium text-xs"
              >
                <Mail className="h-3.5 w-3.5 text-brand-accent" />
                <span>info@drdivyasharma.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/50">Instant Appointment</h4>
            <p className="text-xs text-background/70 leading-relaxed">
              Consult with Dr. Divya Sharma for personalized medical diagnosis and aesthetic laser rejuvenation.
            </p>
            <Link 
              href="/book-an-appointment"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-lg hover:opacity-95 transition-opacity"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation Online</span>
            </Link>
          </div>
        </div>

        {/* High-Impact SEO Internal Linking Matrix (Hubs & Deep Clusters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pt-2 text-xs">
          
          {/* Column 1: Medical Dermatology */}
          <div className="space-y-3">
            <Link 
              href="/medical-dermatology"
              className="font-bold text-sm text-background hover:text-brand-accent transition-colors uppercase tracking-wider block border-b border-background/20 pb-1"
            >
              Medical Dermatology →
            </Link>
            <ul className="space-y-2 pt-1 text-background/70">
              <li>
                <Link href="/keloids" className="hover:text-background transition-colors hover:underline">
                  Keloid & Raised Scar Removal
                </Link>
              </li>
              <li>
                <Link href="/acne-pimples" className="hover:text-background transition-colors hover:underline">
                  Acne & Active Pimples Care
                </Link>
              </li>
              <li>
                <Link href="/melasma" className="hover:text-background transition-colors hover:underline">
                  Melasma & Hormonal Pigmentation
                </Link>
              </li>
              <li>
                <Link href="/dark-circles" className="hover:text-background transition-colors hover:underline">
                  Dark Circles & Under-Eye Rejuvenation
                </Link>
              </li>
              <li>
                <Link href="/psoriasis" className="hover:text-background transition-colors hover:underline">
                  Psoriasis Plaque Management
                </Link>
              </li>
              <li>
                <Link href="/eczema" className="hover:text-background transition-colors hover:underline">
                  Atopic Eczema & Skin Barrier Repair
                </Link>
              </li>
              <li>
                <Link href="/keratosis-pilaris" className="hover:text-background transition-colors hover:underline">
                  Keratosis Pilaris ("Chicken Skin")
                </Link>
              </li>
              <li>
                <Link href="/skin-allergies" className="hover:text-background transition-colors hover:underline">
                  Skin Allergies & Urticaria Hives
                </Link>
              </li>
              <li>
                <Link href="/skin-tags" className="hover:text-background transition-colors hover:underline">
                  Radiofrequency Skin Tag & Cyst Removal
                </Link>
              </li>
              <li>
                <Link href="/topical-steroids" className="hover:text-background transition-colors hover:underline">
                  Topical Steroid Withdrawal (TSW) Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Aesthetics & Laser Dermatology */}
          <div className="space-y-3">
            <Link 
              href="/aesthetics-skin-care"
              className="font-bold text-sm text-background hover:text-brand-accent transition-colors uppercase tracking-wider block border-b border-background/20 pb-1"
            >
              Aesthetics & Lasers →
            </Link>
            <ul className="space-y-2 pt-1 text-background/70">
              <li>
                <Link href="/hollywood-peel" className="hover:text-background transition-colors hover:underline">
                  Hollywood Carbon Laser Peel
                </Link>
              </li>
              <li>
                <Link href="/chemical-peels" className="hover:text-background transition-colors hover:underline">
                  Medical Chemical Peels
                </Link>
              </li>
              <li>
                <Link href="/laser-toning" className="hover:text-background transition-colors hover:underline">
                  Q-Switched Laser Toning
                </Link>
              </li>
              <li>
                <Link href="/scar-removal" className="hover:text-background transition-colors hover:underline">
                  Acne Scar Removal (Fractional CO2)
                </Link>
              </li>
              <li>
                <Link href="/skin-resurfacing-texture" className="hover:text-background transition-colors hover:underline">
                  Skin Resurfacing & Pore Tightening
                </Link>
              </li>
              <li>
                <Link href="/unwanted-hair" className="hover:text-background transition-colors hover:underline">
                  Painless Laser Hair Removal
                </Link>
              </li>
              <li>
                <Link href="/unwanted-male-body-hair" className="hover:text-background transition-colors hover:underline">
                  Male Laser Beard Shaping & Grooming
                </Link>
              </li>
              <li>
                <Link href="/tattoo-removal" className="hover:text-background transition-colors hover:underline">
                  Q-Switched Laser Tattoo Removal
                </Link>
              </li>
              <li>
                <Link href="/fairness-facial-glow" className="hover:text-background transition-colors hover:underline">
                  Antioxidant Glow Medi-Facials
                </Link>
              </li>
              <li>
                <Link href="/stretch-marks" className="hover:text-background transition-colors hover:underline">
                  Stretch Marks RF Collagen Remodeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hair, Scalp & Pediatric Dermatology */}
          <div className="space-y-3">
            <Link 
              href="/hair-scalp-problems"
              className="font-bold text-sm text-background hover:text-brand-accent transition-colors uppercase tracking-wider block border-b border-background/20 pb-1"
            >
              Hair & Pediatric Care →
            </Link>
            <ul className="space-y-2 pt-1 text-background/70">
              <li>
                <Link href="/hair-loss" className="hover:text-background transition-colors hover:underline">
                  Hair Loss & GFC Regrowth Therapy
                </Link>
              </li>
              <li>
                <Link href="/hair-loss-in-men" className="hover:text-background transition-colors hover:underline">
                  Male Pattern Hair Loss & Thinning
                </Link>
              </li>
              <li>
                <Link href="/hair-fall-in-female" className="hover:text-background transition-colors hover:underline">
                  Female Hair Fall & PCOS Shedding
                </Link>
              </li>
              <li>
                <Link href="/dandruff" className="hover:text-background transition-colors hover:underline">
                  Chronic Scalp Dandruff & Flaking Relief
                </Link>
              </li>
              <li>
                <Link href="/newborn-pediatric-dermatology" className="hover:text-background font-semibold transition-colors hover:underline">
                  Pediatric Dermatology Hub
                </Link>
              </li>
              <li>
                <Link href="/baby-skin-care" className="hover:text-background transition-colors hover:underline">
                  Newborn & Infant Skin Care Protocols
                </Link>
              </li>
              <li>
                <Link href="/common-skin-rashes-in-babies" className="hover:text-background transition-colors hover:underline">
                  Common Baby Skin Rashes & Heat Bumps
                </Link>
              </li>
              <li>
                <Link href="/cradle-cap" className="hover:text-background transition-colors hover:underline">
                  Infant Cradle Cap Management
                </Link>
              </li>
              <li>
                <Link href="/diaper-rash" className="hover:text-background transition-colors hover:underline">
                  Diaper Rash & Barrier Cream Care
                </Link>
              </li>
              <li>
                <Link href="/food-allergy" className="hover:text-background transition-colors hover:underline">
                  Pediatric & Adult Food Allergy Rashes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sitelinks, Practice & Patient Guides */}
          <div className="space-y-3">
            <span className="font-bold text-sm text-background uppercase tracking-wider block border-b border-background/20 pb-1">
              Clinic & Resources
            </span>
            <ul className="space-y-2 pt-1 text-background/70">
              <li>
                <Link href="/dr-divya-sharma" className="hover:text-background font-medium transition-colors hover:underline">
                  Meet Dr. Divya Sharma (Gold Medalist)
                </Link>
              </li>
              <li>
                <Link href="/about-clinic" className="hover:text-background transition-colors hover:underline">
                  Our Clinic Infrastructure & Lasers
                </Link>
              </li>
              <li>
                <Link href="/skin-concerns" className="hover:text-background transition-colors hover:underline">
                  Index of All Skin & Hair Concerns
                </Link>
              </li>
              <li>
                <Link href="/testimonials/10" className="hover:text-background transition-colors hover:underline">
                  Patient Reviews & Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-background transition-colors hover:underline">
                  Dermatology Knowledge Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-background transition-colors hover:underline">
                  Dermatology FAQ Center
                </Link>
              </li>
              <li>
                <Link href="/clinic-gallery" className="hover:text-background transition-colors hover:underline">
                  Clinic Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-background transition-colors hover:underline">
                  Media & Newspaper Features
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-background transition-colors hover:underline">
                  Contact & Directions (Whitefield)
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-background text-amber-200/90 transition-colors hover:underline inline-flex items-center gap-1">
                  <span>Doctor & Staff Portal</span>
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-brand-accent transition-colors hover:underline inline-flex items-center gap-1">
                  <span>XML Sitemap</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Sitemap Bar */}
        <div className="pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>© 2026 Dr. Divya Skin & Hair Solutions. All rights reserved. Directed by Dr. Divya Sharma, MBBS, MD.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-background transition-colors">Sitemap</Link>
            <Link href="/robots.txt" className="hover:text-background transition-colors">Robots.txt</Link>
            <Link href="/faq" className="hover:text-background transition-colors">FAQs</Link>
            <Link href="/contact-us" className="hover:text-background transition-colors">Contact</Link>
            <Link href="/admin/login" className="hover:text-amber-200 text-background/70 font-semibold transition-colors">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
