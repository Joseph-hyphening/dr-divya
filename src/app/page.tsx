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

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'TECHNOLOGY', href: '#technology' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <main className="min-h-screen flex flex-col relative bg-background">
      <MinimalistHero
        logoText={<Image src="/logo.svg" alt="Dr. Divya's" width={140} height={32} className="h-8 w-auto object-contain" priority />}
        navLinks={navLinks}
        loginLink="/login"
        mainText="Dr. Divya Sharma, MBBS (Gold Medalist), MD (Skin). Bangalore's award-winning dermatologist with 12+ years of clinical excellence and US FDA approved technology."
        readMoreLink="#about"
        imageSrc="/dr-divya.png"
        imageAlt="Dr. Divya Sharma - Bangalore's Award-Winning Dermatologist"
        overlayText={{
          part1: 'truly',
          part2: 'medical.',
        }}
        socialLinks={socialLinks}
        locationText="Whitefield, Bangalore"
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

      <ChatbotSection />

      <BlogPreview />

      <FAQAccordion />

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
