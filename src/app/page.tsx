'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import Image from 'next/image';
import { AboutSection } from '@/components/sections/About';
import { ServicesSection } from '@/components/sections/Services';
import { FooterSection } from '@/components/sections/Footer';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { GallerySlider } from '@/components/sections/GallerySlider';
import { TechShowcase } from '@/components/sections/TechShowcase';
import { ChatbotSection } from '@/components/sections/ChatbotSection';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { StickyMobileActions } from '@/components/ui/StickyMobileActions';
import { Testimonials } from '@/components/sections/Testimonials';
import { Header } from '@/components/layout/Header';
import { LeadFormSection } from '@/components/sections/LeadFormSection';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/dr-divya-sharma' },
    { label: 'SERVICES', href: '/skin-concerns' },
    { label: 'TECHNOLOGY', href: '/about-clinic' },
    { label: 'CONTACT', href: '/contact-us' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <main className="min-h-screen flex flex-col relative bg-background">
      <Header />

      <MinimalistHero
        logoText={<Image src="/logo.svg" alt="Dr. Divya's" width={140} height={32} className="h-8 w-auto object-contain" priority />}
        navLinks={navLinks}
        loginLink="/book-an-appointment"
        mainText="Dr. Divya Sharma, MBBS (Gold Medalist), MD (Skin). Bangalore's award-winning dermatologist with 12+ years of clinical excellence and US FDA approved technology."
        readMoreLink="/dr-divya-sharma"
        imageSrc="/dr-divya.png"
        imageAlt="Dr. Divya Sharma - Bangalore's Award-Winning Dermatologist"
        overlayText={{
          part1: 'truly',
          part2: 'medical.',
        }}
        socialLinks={socialLinks}
        locationText="Whitefield, Bangalore"
        hideHeader={true}
      />
      
      <SocialProofBar />

      <div id="about">
        <AboutSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <TechShowcase />

      <GallerySlider />

      <Testimonials />

      <ChatbotSection />

      <BlogPreview />

      <FAQAccordion />

      <LeadFormSection treatmentName="Dermatology Consultation" />

      <div id="contact">
        <FooterSection />
      </div>

      {/* Floating Elements */}
      <ChatbotSection isFloating={true} />
      <StickyMobileActions />
    </main>
  );
};

export default MinimalistHeroDemo;
