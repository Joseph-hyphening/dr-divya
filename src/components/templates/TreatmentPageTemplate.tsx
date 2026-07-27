'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { TreatmentHero, TreatmentHeroProps } from '@/components/sections/TreatmentHero';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { FooterSection } from '@/components/sections/Footer';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { StickyMobileActions } from '@/components/ui/StickyMobileActions';
import { ChatbotSection } from '@/components/sections/ChatbotSection';
import { CheckCircle2, Sparkles, HelpCircle, Activity, Award } from 'lucide-react';
import Script from 'next/script';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TreatmentPageTemplateProps {
  hero: TreatmentHeroProps;
  overview: {
    title: string;
    paragraphs: string[];
    causesOrSymptomsTitle?: string;
    causesOrSymptoms?: string[];
  };
  approach: {
    title: string;
    description: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
    }[];
  };
  faqs?: FAQItem[];
  canonicalUrl?: string;
}

export const TreatmentPageTemplate: React.FC<TreatmentPageTemplateProps> = ({
  hero,
  overview,
  approach,
  faqs = [],
  canonicalUrl
}) => {
  // Construct JSON-LD Structured Data for SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": hero.treatmentName,
    "description": hero.description,
    "bodyLocation": "Skin and Hair",
    "howItWorks": approach.description,
    "performer": {
      "@type": "Physician",
      "name": "Dr. Divya Sharma",
      "medicalSpecialty": "Dermatology",
      "alumniOf": "Gold Medalist Medical Graduate"
    }
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Global Navbar Header */}
      <Header />

      {/* 1. Above-the-fold Hero Banner with Hook & Instant CTA */}
      <TreatmentHero {...hero} />

      {/* Social Trust Metrics */}
      <SocialProofBar />

      {/* 2. Concise SEO Overview & Causes Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-semibold text-xs bg-primary/10 px-3 py-1 rounded-full">
                <Activity className="w-3.5 h-3.5" />
                <span>Clinical Understanding</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {overview.title}
              </h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                {overview.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Causes or Symptoms Card */}
            {overview.causesOrSymptoms && overview.causesOrSymptoms.length > 0 && (
              <div className="lg:col-span-5 bg-card border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  {overview.causesOrSymptomsTitle || "Common Triggers & Indications"}
                </h3>
                <ul className="space-y-3">
                  {overview.causesOrSymptoms.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 3. Dr. Divya's Specialized Treatment Approach */}
      <section className="py-16 bg-accent/20 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 text-primary font-semibold text-xs bg-primary/10 px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5" />
              <span>Evidence-Based Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {approach.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {approach.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.steps.map((step, idx) => (
              <div key={idx} className="bg-card border border-border/70 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                  {step.stepNumber}
                </div>
                <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treatment FAQ Accordion */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-10">
              <div className="inline-flex items-center space-x-2 text-primary font-semibold text-xs bg-primary/10 px-3 py-1 rounded-full">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Patient Clarifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border border-border/70 rounded-xl bg-card p-5 cursor-pointer transition-all">
                  <summary className="font-semibold text-foreground text-base list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform font-bold text-xl ml-2">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/40">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Bottom High-Converting Lead Capture Form */}
      <LeadFormSection treatmentName={hero.treatmentName} />

      {/* Global Footer */}
      <FooterSection />

      {/* Floating Elements */}
      <ChatbotSection isFloating={true} />
      <StickyMobileActions />
    </main>
  );
};
