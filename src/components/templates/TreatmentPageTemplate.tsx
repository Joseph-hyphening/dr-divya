'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { TreatmentHero, TreatmentHeroProps } from '@/components/sections/TreatmentHero';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { FooterSection } from '@/components/sections/Footer';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { StickyMobileActions } from '@/components/ui/StickyMobileActions';
import { ChatbotSection } from '@/components/sections/ChatbotSection';
import { CheckCircle2, Sparkles, HelpCircle, Activity, Award, ChevronRight, Home, Layers, Camera, ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { getConditionBySlug, ConditionData, getConditionBeforeAfterPairs } from '@/lib/cms-store';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  desc: string;
}

export interface ParentCategory {
  name: string;
  href: string;
}

export interface CategorySibling {
  label: string;
  href: string;
}

export interface TreatmentPageTemplateProps {
  hero: TreatmentHeroProps;
  overview: {
    title: string;
    paragraphs: (string | React.ReactNode)[];
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
  relatedLinks?: RelatedLink[];
  canonicalUrl?: string;
  parentCategory?: ParentCategory;
  currentPageName?: string;
  categorySiblings?: CategorySibling[];
}

const defaultRelatedLinks: RelatedLink[] = [
  { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Instant glow facial with laser skin rejuvenation" },
  { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Targeted clinical protocols for active acne & cystic breakouts" },
  { title: "Melasma & Pigmentation", href: "/melasma", desc: "Advanced combination therapy for hormonal facial pigmentation" },
  { title: "Hair Loss & GFC Therapy", href: "/hair-loss", desc: "Growth factor concentrate therapy for hair regrowth" },
  { title: "Laser Tattoo Removal", href: "/tattoo-removal", desc: "Q-Switched Nd:YAG laser ink clearance without scarring" },
  { title: "Keratosis Pilaris Care", href: "/keratosis-pilaris", desc: "Medical smoothing for bumpy skin on arms and legs" }
];

const defaultMedicalSiblings: CategorySibling[] = [
  { label: 'Keloids & Scars', href: '/keloids' },
  { label: 'Acne & Pimples', href: '/acne-pimples' },
  { label: 'Melasma', href: '/melasma' },
  { label: 'Dark Circles', href: '/dark-circles' },
  { label: 'Psoriasis', href: '/psoriasis' },
  { label: 'Eczema', href: '/eczema' },
  { label: 'Skin Allergies', href: '/skin-allergies' },
  { label: 'Keratosis Pilaris', href: '/keratosis-pilaris' },
  { label: 'Skin Tags & Cysts', href: '/skin-tags' },
  { label: 'Steroid Abuse (TSW)', href: '/topical-steroids' },
  { label: 'Food Allergy Rashes', href: '/food-allergy' },
  { label: 'Infections & Rashes', href: '/rashes-skin-infection' },
];

export const TreatmentPageTemplate: React.FC<TreatmentPageTemplateProps> = ({
  hero,
  overview,
  approach,
  faqs = [],
  relatedLinks = defaultRelatedLinks,
  canonicalUrl,
  parentCategory = { name: 'Medical Dermatology', href: '/medical-dermatology' },
  currentPageName,
  categorySiblings = defaultMedicalSiblings,
}) => {
  const pageDisplayName = currentPageName || hero.treatmentName;
  const currentCanonical = canonicalUrl || `https://www.drdivyasharma.com`;

  const [cmsCondition, setCmsCondition] = useState<ConditionData | null>(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  useEffect(() => {
    const slug = canonicalUrl
      ? canonicalUrl.split('/').filter(Boolean).pop()
      : typeof window !== 'undefined'
      ? window.location.pathname.replace(/^\//, '')
      : '';

    if (slug) {
      const found = getConditionBySlug(slug);
      if (found) setCmsCondition(found);
    }

    const handleUpdate = () => {
      if (slug) {
        const found = getConditionBySlug(slug);
        if (found) setCmsCondition(found);
      }
    };
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, [canonicalUrl]);

  const dynamicHero: TreatmentHeroProps = {
    ...hero,
    heroImage: "/dr-divya.png", // Dr. Divya's image ALWAYS on top of the procedure!
    hookSubtitle: cmsCondition?.hookSubtitle || hero.hookSubtitle,
    description: cmsCondition?.description || hero.description,
  };

  // 1. Construct JSON-LD MedicalProcedure & MedicalWebPage Schema
  const procedureJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${currentCanonical}#procedure`,
    "name": hero.treatmentName,
    "description": hero.description,
    "bodyLocation": "Skin and Hair",
    "howItWorks": approach.description,
    "performer": {
      "@type": "Physician",
      "name": "Dr. Divya Sharma",
      "medicalSpecialty": "Dermatology",
      "alumniOf": "MBBS Gold Medalist, MD (Dermatology)",
      "url": "https://www.drdivyasharma.com/dr-divya-sharma"
    }
  };

  // 2. FAQ Schema
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

  // 3. Google Sitelinks & BreadcrumbList Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.drdivyasharma.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": parentCategory.name,
        "item": `https://www.drdivyasharma.com${parentCategory.href}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pageDisplayName,
        "item": currentCanonical
      }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Canonical Link */}
      {canonicalUrl && (
        <head>
          <link rel="canonical" href={canonicalUrl} />
        </head>
      )}

      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Global Navbar Header */}
      <Header />

      {/* Structured Semantic Breadcrumbs for Sitelinks & Hierarchy */}
      <nav aria-label="Breadcrumb Navigation" className="bg-card/60 border-b border-border/40 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
          <Link href={parentCategory.href} className="hover:text-primary transition-colors font-medium text-foreground/80">
            {parentCategory.name}
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
          <span className="text-primary font-semibold truncate" aria-current="page">
            {pageDisplayName}
          </span>
        </div>
      </nav>

      {/* 1. Above-the-fold Hero Banner with Hook & Instant CTA */}
      <TreatmentHero {...dynamicHero} />

      {/* Social Trust Metrics */}
      <SocialProofBar />

      {/* Complex Topical Cluster Navigation Bar (Horizontal Sibling Rail) - Placed on top of Before & After */}
      {categorySiblings && categorySiblings.length > 0 && (
        <section className="bg-[#FAF7F2] border-b border-border/60 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground uppercase tracking-wider flex-shrink-0">
              <Layers className="w-3.5 h-3.5 text-brand-accent" />
              <span>{parentCategory.name} Cluster:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {categorySiblings.map((sibling, idx) => (
                <Link
                  key={idx}
                  href={sibling.href}
                  className={`text-[11px] px-3.5 py-1.5 rounded-full whitespace-nowrap border transition-all font-medium ${
                    sibling.label === pageDisplayName || sibling.href === currentCanonical.replace('https://www.drdivyasharma.com', '')
                      ? 'bg-brand-accent text-white border-brand-accent font-semibold shadow-xs'
                      : 'bg-white hover:bg-[#FAF7F2] text-foreground/80 border-border/70 hover:border-brand-accent/40 hover:text-brand-accent shadow-2xs'
                  }`}
                >
                  {sibling.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. DEDICATED VISUAL CASE EVIDENCE & BEFORE/AFTER SHOWCASE UNDER CLUSTER RAIL */}
      <section className="py-12 sm:py-16 bg-white border-b border-border/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Documented Clinical Evidence • Direct Doctor Cases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground tracking-tight leading-tight">
              Before & After Progression & Procedure Gallery
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Photographic case results and sterile clinical procedure suites for <strong>{pageDisplayName}</strong> under Dr. Divya Sharma.
            </p>
          </div>

          {/* Dual Column Layout: Left = Interactive Before/After Split Slider, Right = Multiple Procedure Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: Before & After Split Slider */}
            {(() => {
              const beforeAfterCases = getConditionBeforeAfterPairs(cmsCondition);
              const activeCase = beforeAfterCases[activeCaseIndex] || beforeAfterCases[0];

              return (
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Clinical Transformation Result</span>
                    </span>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {beforeAfterCases.length > 1 ? `${beforeAfterCases.length} Documented Cases` : 'Interactive Split Slider'}
                    </span>
                  </div>

                  {/* Multi-Case Switcher Pills */}
                  {beforeAfterCases.length > 1 && (
                    <div className="flex flex-wrap items-center gap-2 pb-1">
                      {beforeAfterCases.map((pair, idx) => (
                        <button
                          key={pair.id || idx}
                          type="button"
                          onClick={() => setActiveCaseIndex(idx)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            activeCaseIndex === idx
                              ? 'bg-brand-accent text-white shadow-xs'
                              : 'bg-[#FAF7F2] border border-border text-foreground/70 hover:text-foreground hover:bg-white'
                          }`}
                        >
                          Case {idx + 1}: {pair.title ? (pair.title.length > 28 ? pair.title.substring(0, 28) + '...' : pair.title) : `Result ${idx + 1}`}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="p-2 sm:p-3 rounded-3xl bg-[#FAF7F2] border border-border/80 shadow-md space-y-2">
                    <BeforeAfterSlider
                      key={activeCase?.id || activeCaseIndex}
                      beforeImage={activeCase?.beforeImage || cmsCondition?.beforeAfterPair?.beforeImage || "/process/step-01-dermoscopy.jpg"}
                      afterImage={activeCase?.afterImage || cmsCondition?.beforeAfterPair?.afterImage || "/process/step-03-laser-suite.jpg"}
                      badge={activeCase?.title || cmsCondition?.beforeAfterPair?.title || `Clinical Case: ${pageDisplayName}`}
                      className="shadow-md rounded-2xl"
                    />
                    {(activeCase?.treatmentDuration || activeCase?.patientAge) && (
                      <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-foreground/70">
                        <span className="font-semibold text-brand-accent truncate max-w-[280px]">
                          {activeCase.title}
                        </span>
                        <span className="shrink-0 text-muted-foreground">
                          {[activeCase.patientAge, activeCase.treatmentDuration].filter(Boolean).join(' • ')}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-center text-xs text-muted-foreground italic">
                    *Photographic case progression from our Whitefield clinic registry. Individual responses vary.
                  </p>
                </div>
              );
            })()}

            {/* RIGHT: Multiple Procedure Photos & Case Images */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Procedure Suites & Clinical Media</span>
                </span>
                <span className="text-[11px] font-semibold text-brand-accent">
                  {(cmsCondition?.galleryImages?.length || 0) + 1} Images
                </span>
              </div>

              {/* Gallery Grid of Procedure Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {/* Primary Procedure Photo */}
                <div className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-border p-2.5 flex items-center gap-3.5 group">
                  <div className="relative h-20 w-24 rounded-xl overflow-hidden bg-muted shrink-0">
                    <Image
                      src={cmsCondition?.heroImage || "/service-aesthetic-med.png"}
                      alt={`${pageDisplayName} Procedure`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block">
                      Primary Suite
                    </span>
                    <p className="text-xs font-bold text-foreground leading-snug">
                      US-FDA Cleared Technology Suite
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Calibrated for Indian skin safety
                    </p>
                  </div>
                </div>

                {/* Additional Gallery Photos from Backend */}
                {cmsCondition?.galleryImages && cmsCondition.galleryImages.map((img) => (
                  <div key={img.id} className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-border p-2.5 flex items-center gap-3.5 group">
                    <div className="relative h-20 w-24 rounded-xl overflow-hidden bg-muted shrink-0">
                      <Image
                        src={img.url}
                        alt={img.caption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block">
                        Case Evidence
                      </span>
                      <p className="text-xs font-bold text-foreground leading-snug">
                        {img.caption}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Documented clinical protocol
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

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
                  <div key={idx}>{p}</div>
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

      {/* 5. Complex Internal Linking: Related Dermatological Treatments & Topic Clusters */}
      <section className="py-16 bg-card/40 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Interconnected Clinical Care</span>
                <span className="text-xs text-muted-foreground">• In {parentCategory.name}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Complementary Treatments & Cross-Specialties</h3>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                href={parentCategory.href} 
                className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors underline"
              >
                Explore {parentCategory.name} Hub →
              </Link>
              <Link 
                href="/skin-concerns" 
                className="text-xs font-bold text-primary hover:underline uppercase tracking-wider px-3 py-1.5 rounded-lg bg-primary/10"
              >
                All Concerns →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group p-5 rounded-2xl border border-border/70 bg-background hover:border-primary/50 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="mt-4 text-[11px] font-semibold text-primary/80 group-hover:text-primary underline">
                  Learn about {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom High-Converting Lead Capture Form */}
      <LeadFormSection treatmentName={hero.treatmentName} />

      {/* Global Super Footer with Complete Internal Linking Matrix */}
      <FooterSection />

      {/* Floating Elements */}
      <ChatbotSection isFloating={true} />
      <StickyMobileActions />
    </main>
  );
};
