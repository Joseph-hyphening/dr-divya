'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Calendar, Sparkles, Shield, Stethoscope, Baby, Scissors, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface DropdownCategory {
  title: string;
  icon: React.ElementType;
  href: string;
  items: { label: string; href: string; desc?: string }[];
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories: DropdownCategory[] = [
    {
      title: 'Aesthetics & Lasers',
      icon: Sparkles,
      href: '/aesthetics-skin-care',
      items: [
        { label: 'Hollywood Carbon Peel', href: '/hollywood-peel', desc: 'Instant red carpet glow facial' },
        { label: 'Chemical Peels', href: '/chemical-peels', desc: 'Medical exfoliation & spot fading' },
        { label: 'Laser Toning', href: '/laser-toning', desc: 'Q-Switched laser pigment correction' },
        { label: 'Acne Scar Removal', href: '/scar-removal', desc: 'Fractional CO2 & subcision' },
        { label: 'Skin Resurfacing', href: '/skin-resurfacing-texture', desc: 'Texture & open pore renewal' },
        { label: 'Laser Hair Removal', href: '/unwanted-hair', desc: 'Painless triple-wavelength laser' },
        { label: 'Male Laser Hair Grooming', href: '/unwanted-male-body-hair', desc: 'Beard line shaping & chest' },
        { label: 'Tattoo Removal', href: '/tattoo-removal', desc: 'Q-Switched laser ink clearance' },
        { label: 'Facial Glow Medi-Facial', href: '/fairness-facial-glow', desc: 'Hydra-infusion & antioxidant glow' },
        { label: 'Stretch Marks Therapy', href: '/stretch-marks', desc: 'Microneedling RF & collagen rebuild' },
      ],
    },
    {
      title: 'Medical Dermatology',
      icon: Stethoscope,
      href: '/medical-dermatology',
      items: [
        { label: 'Acne & Pimples', href: '/acne-pimples', desc: 'Clinical active breakout care' },
        { label: 'Melasma', href: '/melasma', desc: 'Hormonal facial pigment management' },
        { label: 'Dark Spots & Pigment', href: '/dark-spot-and-pigment-reduction', desc: 'Sun spot & PIH fading' },
        { label: 'Dark Circles', href: '/dark-circles', desc: 'Under-eye periorbital refresh' },
        { label: 'Psoriasis Management', href: '/psoriasis', desc: 'Autoimmune scaly plaque clearance' },
        { label: 'Eczema & Dermatitis', href: '/eczema', desc: 'Relief for dry itchy skin barrier' },
        { label: 'Keloids & Scars', href: '/keloids', desc: 'Intralesional scar flattening' },
        { label: 'Keratosis Pilaris', href: '/keratosis-pilaris', desc: 'Bumpy "chicken skin" smoothing' },
        { label: 'Skin Tags & Cysts', href: '/skin-tags', desc: 'Painful RF snip removal' },
        { label: 'Steroid Damage (TSW)', href: '/topical-steroids', desc: 'Steroid abuse skin rehabilitation' },
        { label: 'Skin Allergies & Hives', href: '/skin-allergies', desc: 'Urticaria & contact allergy care' },
        { label: 'Warts & Verrucae', href: '/warts-or-verrucae', desc: 'Viral RF & Cryotherapy removal' },
      ],
    },
    {
      title: 'Pediatric Care',
      icon: Baby,
      href: '/newborn-pediatric-dermatology',
      items: [
        { label: 'Newborn Skin Guidance', href: '/baby-skin-care', desc: 'Gentle infant barrier protection' },
        { label: 'Common Baby Rashes', href: '/common-skin-rashes-in-babies', desc: 'Heat rash & baby eczema care' },
        { label: 'Cradle Cap', href: '/cradle-cap', desc: 'Greasy scalp crust softening' },
        { label: 'Diaper Rash Relief', href: '/diaper-rash', desc: 'Fast zinc barrier healing' },
      ],
    },
    {
      title: 'Hair & Scalp',
      icon: Scissors,
      href: '/hair-scalp-problems',
      items: [
        { label: 'Hair Loss & Thinning', href: '/hair-loss', desc: 'Growth Factor (GFC) & Dermoscopy' },
        { label: 'Male Pattern Hair Loss', href: '/hair-loss-in-men', desc: 'DHT blocker & temple regrowth' },
        { label: 'Female Hair Shedding', href: '/hair-fall-in-female', desc: 'PCOS & postpartum hair recovery' },
        { label: 'Scalp Dandruff Relief', href: '/dandruff', desc: 'Malassezia fungal yeast wash' },
      ],
    },
    {
      title: 'About & Practice',
      icon: Shield,
      href: '/dr-divya-sharma',
      items: [
        { label: 'Dr. Divya Sharma Profile', href: '/dr-divya-sharma', desc: 'MBBS Gold Medalist & MD Skin' },
        { label: 'About Clinic', href: '/about-clinic', desc: 'US-FDA laser suites & infrastructure' },
        { label: 'Patient Testimonials', href: '/testimonials/10', desc: '1,500+ verified patient reviews' },
        { label: 'Media Features', href: '/media', desc: 'Newspaper columns & TV interviews' },
        { label: 'Video Demonstrations', href: '/videos', desc: 'Live laser procedure walkthroughs' },
        { label: 'Clinic Photo Gallery', href: '/clinic-gallery', desc: 'Virtual tour of Whitefield clinic' },
      ],
    },
    {
      title: 'Blogs & FAQs',
      icon: BookOpen,
      href: '/blogs',
      items: [
        { label: 'Skin & Hair Blog', href: '/blogs', desc: 'Latest dermatology guides & tips' },
        { label: 'Main FAQ Center', href: '/faq', desc: 'Answers to top skin & laser queries' },
        { label: 'Laser Hair Removal FAQ', href: '/faq/laser-hair-removal', desc: 'Safety, pain & cost questions' },
        { label: 'Keratosis Pilaris FAQ', href: '/faq/keratosis-pilaris', desc: 'Smooth bumpy arm tips' },
      ],
    },
  ];

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-4 flex items-center justify-between gap-2">
        {/* Left Logo (Pushed to the left) */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Dr. Divya's Skin & Hair Clinic"
            width={160}
            height={40}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-0.5 xl:space-x-2 px-1">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(cat.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={cat.href}
                className="text-[10px] xl:text-[11px] font-semibold tracking-wider text-foreground/80 hover:text-foreground transition-colors px-1.5 py-1 rounded hover:bg-accent/40 flex items-center gap-0.5 uppercase whitespace-nowrap"
              >
                <span>{cat.title}</span>
                <ChevronDown className="w-3 h-3 text-foreground/40 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === cat.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 sm:w-96 rounded-2xl border border-border/80 bg-background/98 backdrop-blur-2xl p-4 shadow-2xl z-50"
                  >
                    <div className="flex items-center space-x-2 border-b border-border/50 pb-2.5 mb-3 px-2">
                      <cat.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-foreground tracking-wider uppercase">{cat.title}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1 max-h-96 overflow-y-auto pr-1">
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group p-2.5 rounded-xl hover:bg-accent/60 transition-all flex flex-col space-y-0.5"
                        >
                          <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                          {item.desc && (
                            <span className="text-[11px] text-muted-foreground line-clamp-1">
                              {item.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 pt-2 border-t border-border/40 text-center">
                      <Link
                        href={cat.href}
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-primary hover:underline uppercase tracking-wider"
                      >
                        Explore All {cat.title} Treatments →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right CTA Buttons (Pushed completely inside right margin) */}
        <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
          <a href="tel:+919620638388" className="hidden xl:inline-block">
            <Button variant="outline" size="sm" className="rounded-full gap-1 text-[11px] font-semibold px-3 py-1.5 h-8 border-primary/40 text-primary hover:bg-primary/5">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>+91 96206 38388</span>
            </Button>
          </a>
          <Link href="/book-an-appointment">
            <Button size="sm" className="rounded-full shadow-sm hover:shadow transition-all text-[11px] font-bold tracking-wider px-3.5 py-1.5 h-8">
              <Calendar className="w-3.5 h-3.5 mr-1" /> BOOK APPOINTMENT
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">
          <Link href="/book-an-appointment" className="md:hidden">
            <Button size="sm" className="rounded-full text-xs font-bold px-3 py-1 h-8">
              Book
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground/80 hover:text-primary rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Accordion Categories */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-2">
              {categories.map((cat) => (
                <details key={cat.title} className="group border border-border/50 rounded-xl bg-card/60 p-3">
                  <summary className="font-bold text-xs uppercase tracking-wider text-foreground flex justify-between items-center cursor-pointer">
                    <span className="flex items-center gap-2">
                      <cat.icon className="w-4 h-4 text-primary" />
                      {cat.title}
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-3 pt-2 border-t border-border/40 grid grid-cols-1 gap-1.5 pl-2">
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-medium text-foreground/80 hover:text-primary py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="pt-3 border-t border-border/40 flex flex-col gap-2">
              <a href="tel:+919620638388" className="w-full">
                <Button variant="outline" className="w-full justify-center gap-2 text-xs font-semibold">
                  <Phone className="w-4 h-4 text-primary" /> Call +91 96206 38388
                </Button>
              </a>
              <Link href="/book-an-appointment" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button className="w-full justify-center gap-2 text-xs font-bold">
                  <Calendar className="w-4 h-4" /> Book Appointment Online
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
