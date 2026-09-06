'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import Link from 'next/link';
import { Award, GraduationCap, Sparkles, Building2, Trophy, ArrowRight, MapPin, Stethoscope } from 'lucide-react';

export const AboutSection = () => {
  const data = [
    {
      title: "MBBS",
      content: (
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            <span>Indira Gandhi Government Medical College • University Gold Medalist</span>
          </div>
          <p className="text-foreground/80 text-sm md:text-base font-normal leading-relaxed">
            <strong>Gold Medalist in MBBS</strong> and university topper in many subjects during MBBS at the prestigious <strong>Indira Gandhi Government Medical College</strong>. This rigorous academic foundation set the stage for a career defined by diagnostic precision, medical ethics, and unwavering clinical excellence.
          </p>
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-border/80 group">
            <Image
              src="/igmc-shimla-campus.jpg"
              alt="Indira Gandhi Government Medical College Campus"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Academic Foundation</span>
              <p className="text-white text-sm font-semibold">
                Indira Gandhi Government Medical College (IGMC) — MBBS Gold Medal & Multi-Subject Topper
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-white border border-border/80 shadow-xs space-y-1">
              <div className="text-xl font-extrabold text-brand-accent">University Rank #1</div>
              <div className="text-xs font-bold text-foreground">Gold Medalist in Medicine</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">Topped MBBS university examinations across key clinical specialties.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border/80 shadow-xs space-y-1">
              <div className="text-xl font-extrabold text-brand-accent">100%</div>
              <div className="text-xs font-bold text-foreground">Evidence-Based Ethics</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">Instilled lifelong commitment to scientific diagnosis and zero-steroid safety.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "MD",
      content: (
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-primary" />
            <span>Master of Medicine (MD) in Dermatology</span>
          </div>
          <p className="text-foreground/80 text-sm md:text-base font-normal leading-relaxed">
            Completed <strong>Master of Medicine (MD) in Dermatology</strong> at the prestigious <strong>Indira Gandhi Government Medical College</strong>. Developed deep expertise in diagnosing and treating complex skin conditions, autoimmune dermatoses, clinical trichology, and dermatopathology.
          </p>
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-border/80 group">
            <Image
              src="/igmc-shimla-entrance.jpg"
              alt="Indira Gandhi Government Medical College & Hospital"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary-300 text-blue-300">Postgraduate Residency</span>
              <p className="text-white text-sm font-semibold">
                Indira Gandhi Government Medical College & Hospital — MD Dermatology, Venereology & Leprosy
              </p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-border/80 shadow-xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left space-y-0.5">
              <h4 className="text-xs sm:text-sm font-bold text-foreground">Complex Dermatological Mastery</h4>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Rigorous tertiary hospital residency treating thousands of complex inpatient and outpatient skin disorders.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Residency",
      content: (
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4 text-emerald-600" />
            <span>St. John&apos;s National Academy of Health Sciences • Bengaluru</span>
          </div>
          <p className="text-foreground/80 text-sm md:text-base font-normal leading-relaxed">
            Post MD worked as <strong>Senior Resident</strong> at <strong>St. John&apos;s National Academy of Health Sciences and Medical College Bengaluru</strong>. Managed critical dermatological emergencies, specialized pediatric skin clinics, and complex chronic cases at one of South India&apos;s most venerable medical institutions.
          </p>
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-border/80 group">
            <Image
              src="/st-johns-medical-college.jpg"
              alt="St. John's National Academy of Health Sciences & Medical College Hospital Bengaluru"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Senior Clinical Residency</span>
              <p className="text-white text-sm font-semibold">
                St. John&apos;s Medical College Hospital, Bengaluru — Advanced Clinical & Pediatric Dermatology
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Lasers",
      content: (
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Advanced Energy Devices & Laser Mastery</span>
          </div>
          <p className="text-foreground/80 text-sm md:text-base font-normal leading-relaxed">
            <strong>Mastered the latest technologies in Lasers</strong> to provide high-end, transformative aesthetic results. Specialized in US-FDA approved multi-wavelength laser physics, fractional CO2 scar remodeling, Q-Switched Nd:YAG pigment toning, and non-ablative rejuvenation calibrated specifically for Indian skin phototypes.
          </p>
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-border/80 group">
            <Image
              src="/laser-treatment.png"
              alt="Laser Technology Suite Dr Divya Sharma"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">Aesthetic Precision</span>
              <p className="text-white text-sm font-semibold">
                US-FDA Approved Laser Systems: Fractional CO2, Q-Switched & Diode Technologies
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Clinic",
      content: (
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span>Dr. Divya Skin & Hair Solutions • Whitefield</span>
          </div>
          <p className="text-foreground/80 text-sm md:text-base font-normal leading-relaxed">
            <strong>Founded Dr. Divya Skin & Hair Solutions in Whitefield, Bangalore.</strong> A boutique center dedicated to combining clinical excellence with personalized care, sterile procedure suites, and patient-first medical protocols.
          </p>
          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-border/80 group">
            <Image
              src="/clinic-lounge.png"
              alt="Dr Divya Skin & Hair Solutions Clinic Lounge Whitefield"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Flagship Clinic</span>
              <p className="text-white text-sm font-semibold">
                AECS Layout, Whitefield, Bangalore — State-of-the-Art Sterile Dermatology Center
              </p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-border/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-bold text-foreground">15,000+ Satisfied Patients & 4.9★ Rated</div>
              <div className="text-xs text-muted-foreground">Recognized among Bangalore&apos;s leading ethical dermatology centers.</div>
            </div>
            <Link
              href="/dr-divya-sharma"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex-shrink-0 hover:opacity-90 transition-opacity"
            >
              <span>View Doctor Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="bg-[#faf7f3] py-20 lg:py-28 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Distinction & Clinical Pedigree</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-foreground tracking-tight leading-tight">
            The Journey of Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-sm sm:text-base leading-relaxed">
            Tracing 15+ years of clinical mastery, university gold medals, and patient-first medical innovation.
          </p>
        </div>
      </div>
      <Timeline data={data} />
    </section>
  );
};
