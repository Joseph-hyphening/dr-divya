'use client';

import React from 'react';
import { Gallery4 } from '@/components/ui/gallery4';

const medicalServices = [
  {
    id: "clinical-derm",
    title: "Clinical Dermatology",
    description: "Expert treatment for acne, psoriasis, eczema, and complex skin conditions using evidence-based medical protocols.",
    href: "#",
    image: "/service-clinical-derm.png",
  },
  {
    id: "aesthetic-med",
    title: "Aesthetic Medicine",
    description: "US FDA approved anti-aging treatments, lasers, and professional skin rejuvenation for natural-looking results.",
    href: "#",
    image: "/service-aesthetic-med.png",
  },
  {
    id: "hair-solutions",
    title: "Hair Restoration",
    description: "Advanced hair transplants and PRP therapies designed for natural regrowth and scalp health restoration.",
    href: "#",
    image: "/service-hair-restoration.png",
  },
  {
    id: "pediatric-skin",
    title: "Pediatric Care",
    description: "Gentle, specialized dermatological care tailored for the unique needs of children's and infants' delicate skin.",
    href: "#",
    image: "/service-pediatric-care.png",
  },
  {
    id: "laser-technology",
    title: "Laser Technology",
    description: "State-of-the-art laser treatments for pigmentation, scarring, and permanent hair reduction with precision.",
    href: "#",
    image: "/service-laser-tech.png",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#f5f0eb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-24">
        {/* Gallery4 handles its own internal structure but we've adapted it to fit the layout */}
        <Gallery4 
          title="Our Expertise" 
          description="Curated Solutions" 
          items={medicalServices} 
        />
      </div>
      
      {/* Decorative background element to match previous premium feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -ml-64 -mb-64" />
    </section>
  );
};
