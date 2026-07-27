import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Aesthetic Dermatology & Skin Care | Dr. Divya Sharma Bangalore',
  description: 'Transform your skin with US-FDA approved aesthetic treatments: Hollywood Peel, Laser Toning, Scar Resurfacing, Glow Peels & Anti-Aging in Whitefield Bangalore.',
};

export default function AestheticsSkinCarePage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'US-FDA Approved Aesthetic Dermatology',
        title: 'Aesthetic & Cosmetic Skin Rejuvenation',
        hookSubtitle: 'Enhance Your Natural Beauty with Precision Laser Toning, Peels & Anti-Aging Science',
        description: 'Achieve smooth, luminous, youthfully radiant skin with non-invasive aesthetic treatments curated and supervised by Gold Medalist Dermatologist Dr. Divya Sharma.',
        treatmentName: 'Aesthetic Skin Care Consultation',
        keyBenefits: [
          'Hollywood Carbon Facial Glow',
          'Laser Pigment & Dark Spot Removal',
          'Fractional Scar Resurfacing',
          'Zero Downtime Glow Treatments'
        ]
      }}
      overview={{
        title: 'Artistry Meets Medical Laser Science',
        paragraphs: [
          'Aesthetic dermatology enhances your skin tone, texture, and elasticity while preserving your natural facial expression.',
          'At Dr. Divya Sharma’s Whitefield clinic, every procedure utilizes gold-standard US-FDA approved laser technology, custom chemical formulations, and micro-needling protocols calibrated for Indian skin types.'
        ],
        causesOrSymptomsTitle: 'Popular Aesthetic Procedures',
        causesOrSymptoms: [
          'Hollywood Carbon Peel for Instant Red Carpet Glow',
          'Q-Switched Laser Toning for Pigment & Sun Damage',
          'Fractional CO2 Laser for Deep Acne Scar Reduction',
          'LED Phototherapy for Anti-Aging & Acne Control',
          'Medical Chemical Peels for Brightening & Texture'
        ]
      }}
      approach={{
        title: 'Our Aesthetic Excellence Protocol',
        description: 'Safe, predictable results tailored to your lifestyle.',
        steps: [
          {
            stepNumber: '01',
            title: 'Skin Type Analysis',
            description: 'Assessing skin melanin levels, hydration, and sensitivity before setting laser parameters.'
          },
          {
            stepNumber: '02',
            title: 'Precision Laser / Peel Session',
            description: 'Performed with cooling comfort and clinical precision to protect surrounding tissue.'
          },
          {
            stepNumber: '03',
            title: 'Post-Glow Care',
            description: 'Custom sun protection and barrier serums to enhance and maintain radiance.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are aesthetic laser treatments painful?',
          answer: 'Most procedures produce only a mild tingling warmth. Cooling systems and numbing creams ensure maximum comfort throughout the session.'
        }
      ]}
    />
  );
}
