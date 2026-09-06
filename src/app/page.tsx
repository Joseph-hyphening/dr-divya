import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { EditorialHero } from '@/components/sections/EditorialHero';
import { ProcessBento } from '@/components/sections/ProcessBento';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { ServicesSection } from '@/components/sections/Services';
import { AboutSection } from '@/components/sections/About';

// Below-the-fold code splitting for sub-2 second initial load
const GallerySlider = dynamic(() => import('@/components/sections/GallerySlider').then((mod) => mod.GallerySlider));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then((mod) => mod.Testimonials));
const BlogPreview = dynamic(() => import('@/components/sections/BlogPreview').then((mod) => mod.BlogPreview));
const FAQAccordion = dynamic(() => import('@/components/sections/FAQAccordion').then((mod) => mod.FAQAccordion));
const LeadFormSection = dynamic(() => import('@/components/sections/LeadFormSection').then((mod) => mod.LeadFormSection));
const FooterSection = dynamic(() => import('@/components/sections/Footer').then((mod) => mod.FooterSection));
const ChatbotSection = dynamic(() => import('@/components/sections/ChatbotSection').then((mod) => mod.ChatbotSection));
const StickyMobileActions = dynamic(() => import('@/components/ui/StickyMobileActions').then((mod) => mod.StickyMobileActions));

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#FAF7F2] text-foreground font-sans selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* 1. Global Navigation Header (Immediate) */}
      <Header />

      {/* 2. Editorial Hero Banner with 3D Curved Perspective Carousel (Immediate LCP) */}
      <EditorialHero />

      {/* 3. Verified Accreditations & Social Proof Bar */}
      <SocialProofBar />

      {/* 4. Editorial Process & Methodology Asymmetric Bento Grid */}
      <ProcessBento />

      {/* 5. Core Clinical Treatment Suites & Deep Topic Navigation */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* 6. Medical Pedigree & Doctor's Journey */}
      <div id="about">
        <AboutSection />
      </div>

      {/* 7. Clinical Infrastructure & Clinic Tour (Dynamically chunked) */}
      <GallerySlider />

      {/* 8. Verified Patient Testimonials & Results */}
      <Testimonials />

      {/* 9. Dermatology Knowledge & Educational Blog */}
      <BlogPreview />

      {/* 10. Patient Clarification FAQs */}
      <FAQAccordion />

      {/* 11. VIP Lead Capture & Private Appointment Booking */}
      <LeadFormSection treatmentName="Comprehensive Dermatology Consultation" />

      {/* 12. Super-Footer Directory with Complete Internal Linking Matrix */}
      <div id="contact">
        <FooterSection />
      </div>

      {/* 13. Floating Support & Mobile Actions (Non-blocking client-only) */}
      <ChatbotSection isFloating={true} />
      <StickyMobileActions />
    </main>
  );
}
