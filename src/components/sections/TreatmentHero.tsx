'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Star, Award, Calendar, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface TreatmentHeroProps {
  badge?: string;
  title: string;
  hookSubtitle: string;
  description: string;
  keyBenefits?: string[];
  treatmentName: string;
  heroImage?: string;
}

export const TreatmentHero: React.FC<TreatmentHeroProps> = ({
  badge = "US-FDA Approved & Dermatologist Recommended",
  title,
  hookSubtitle,
  description,
  keyBenefits = [
    "Customized Treatment Plan",
    "Gold Medalist Expertise",
    "Visible & Long-Lasting Results",
    "Zero / Minimal Downtime"
  ],
  treatmentName,
  heroImage = "/dr-divya.png"
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-16 lg:py-20 border-b border-border/40">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>{badge}</span>
            </div>

            {/* Title & Hook */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                {title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-primary leading-snug">
                {hookSubtitle}
              </p>
            </div>

            {/* Concise SEO Description */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Key Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-foreground/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Immediate Action CTAs - First thing patient sees */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a href="#consultation-form">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl text-sm font-semibold px-7 py-6 w-full sm:w-auto gap-2">
                  <Calendar className="w-4 h-4" /> Book Consultation for {treatmentName}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="tel:+919620638388">
                <Button variant="outline" size="lg" className="rounded-full text-sm font-semibold px-6 py-6 w-full sm:w-auto gap-2">
                  <Phone className="w-4 h-4 text-primary" /> Speak with Specialist
                </Button>
              </a>
            </div>

            {/* Trust Signals & Rating */}
            <div className="pt-6 border-t border-border/60 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 stroke-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.9/5</span>
                <span>(1,500+ Reviews)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">Gold Medalist Dermatologist</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-tr from-accent/50 to-background p-3 rounded-3xl border border-border/60 shadow-2xl">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={heroImage}
                  alt={`Dr. Divya Sharma - Specialist in ${treatmentName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Doctor Badge */}
              <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xl max-w-xs space-y-1">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-foreground">Dr. Divya Sharma</span>
                </div>
                <p className="text-xs text-muted-foreground">MBBS (Gold Medalist), MD (Skin)</p>
                <p className="text-[11px] text-primary font-semibold">12+ Years Clinical Excellence</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
