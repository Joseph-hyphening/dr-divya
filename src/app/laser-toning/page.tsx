import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Laser Toning Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Advanced Q-Switched Nd:YAG Laser Toning in Whitefield Bangalore for melasma, freckles, sun damage, dark spots, and skin brightening.',
};

export default function LaserToningPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'US-FDA Approved Laser Pigment Correction',
        title: 'Laser Skin Toning for Even Complexion',
        hookSubtitle: 'Break Down Melanin Clusters & Restore Clear, Spot-Free Radiance Safely',
        description: 'Target hyperpigmentation, stubborn melasma patches, and sun spots at their deeper root with non-ablative Q-Switched Nd:YAG laser toning technology.',
        treatmentName: 'Laser Toning Consultation',
        keyBenefits: [
          'Safe & Effective for Indian Skin Types',
          'Targets Deep & Superficial Pigmentation',
          'Stimulates Dermal Collagen Renewal',
          'No Peeling, Scabbing, or Social Downtime'
        ]
      }}
      overview={{
        title: 'How Q-Switched Laser Toning Works',
        paragraphs: [
          'Laser toning uses low-fluence, high-energy nanosecond pulses to shatter melanin pigments into tiny fragments without harming the top layer of skin.',
          'Your body naturally metabolizes and clears these fragmented pigments over subsequent weeks, revealing brighter, more uniform skin tone.'
        ],
        causesOrSymptomsTitle: 'Conditions Treated by Laser Toning',
        causesOrSymptoms: [
          'Hormonal Melasma & Chloasma',
          'Post-Inflammatory Hyperpigmentation (PIH)',
          'Sun Tan, Freckles & Age Spots',
          'Uneven Skin Tone & Neck Pigmentation'
        ]
      }}
      approach={{
        title: 'Our Laser Toning Process',
        description: 'Gradual, safe skin brightening in 4-6 comfortable sessions.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Pigment Mapping',
            description: 'Determining dermal vs epidermal pigment depth using Wood’s lamp.'
          },
          {
            stepNumber: '02',
            title: 'Custom Laser Parameter Pass',
            description: 'Calibrated wavelength delivered with contact cooling comfort.'
          },
          {
            stepNumber: '03',
            title: 'Melanin Suppression Plan',
            description: 'Prescribing supportive tyrosinase inhibitors and sunscreen.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How many sessions of laser toning are needed?',
          answer: 'Most patients see progressive lightening after 3-4 sessions, with full results typically achieved in 6 sessions spaced 2-3 weeks apart.'
        }
      ]}
    />
  );
}
