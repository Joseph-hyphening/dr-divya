import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Concerns & Solutions | Dr. Divya Sharma Dermatologist Bangalore',
  description: 'Explore comprehensive solutions for acne, hair loss, dark spots, eczema, skin tags, melasma, and anti-aging at Dr. Divya Sharma Skin Clinic Bangalore.',
};

export default function SkinConcernsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Comprehensive Skin & Hair Hub',
        title: 'Understand & Treat Your Skin Concerns',
        hookSubtitle: 'From Acne & Pigmentation to Hair Fall & Eczema – Gold-Standard Dermatological Care',
        description: 'Every skin type has unique needs. Explore evidence-based diagnostic procedures and personalized treatments directed by Dr. Divya Sharma (Gold Medalist, MD).',
        treatmentName: 'Skin Concern Consultation',
        keyBenefits: [
          '360° Diagnostic Skin Assessment',
          'Tailored Clinical & Laser Plans',
          'Root Cause Treatment Approach',
          'US-FDA Certified Technologies'
        ]
      }}
      overview={{
        title: 'Targeted Treatments for Every Skin Condition',
        paragraphs: [
          'Skin problems range from temporary irritations to chronic medical conditions and aesthetic concerns. At our Whitefield clinic, we prioritize finding the exact medical cause.',
          'Whether you suffer from adult acne, stubborn melasma, unexplained rashes, or premature aging, our clinic offers specialized protocols for long-lasting relief.'
        ],
        causesOrSymptomsTitle: 'Common Skin Concerns We Treat',
        causesOrSymptoms: [
          'Acne & Post-Acne Scarring (Ice-pick, Boxcar, Rolling)',
          'Hyperpigmentation, Melasma & Dark Circles',
          'Hair Loss, Thinning & Dandruff Scalp Care',
          'Eczema, Psoriasis, Vitiligo & Skin Allergies',
          'Pediatric Skin Rashes, Diaper Rash & Cradle Cap'
        ]
      }}
      approach={{
        title: 'Our 3-Step Skin Resolution Framework',
        description: 'How we turn skin concerns into clear, healthy skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Evaluation',
            description: 'Dermoscopy and clinical analysis to pinpoint internal and external triggers.'
          },
          {
            stepNumber: '02',
            title: 'Customized Protocol',
            description: 'Combining targeted prescriptions, medical peels, or lasers for maximum efficacy.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Maintenance',
            description: 'Strengthening your skin barrier to prevent recurrences.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How do I know which treatment is right for my skin concern?',
          answer: 'Dr. Divya Sharma performs a detailed consultation and skin evaluation to recommend the most effective, safe treatment tailored to your specific skin type.'
        }
      ]}
    />
  );
}
