import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Keratosis Pilaris ("Chicken Skin") Treatment Bangalore | Dr. Divya',
  description: 'Smooth rough, bumpy "chicken skin" on arms, thighs & cheeks with specialized dermatological exfoliants & laser therapy in Whitefield Bangalore.',
};

export default function KeratosisPilarisPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Keratin plug Smoothing Therapy',
        title: 'Keratosis Pilaris ("Chicken Skin") Treatment',
        hookSubtitle: 'Smooth Rough Bumpy Arms & Thighs with Dermatological Keratolytics & Peels',
        description: 'Dissolve stubborn keratin plugs clogging your hair follicles. Restore soft, touchably smooth skin on your arms, thighs, and buttocks.',
        treatmentName: 'Keratosis Pilaris Consultation',
        keyBenefits: [
          'Unclogs Follicular Keratin Plugs',
          'Smooths Bumpy Arm & Thigh Skin',
          'Reduces Follicular Redness',
          'Custom High-Concentration Keratolytic Plan'
        ]
      }}
      overview={{
        title: 'Science of Keratosis Pilaris (KP)',
        paragraphs: [
          'Keratosis Pilaris is a benign genetic skin condition where excess keratin accumulates inside hair follicles, forming rough, raised bumps that feel like sandpaper or "chicken skin".',
          'Dr. Divya Sharma prescribes high-strength lactic acid, urea, and salicylic formulations alongside targeted peels to dissolve keratin plugs safely.'
        ],
        causesOrSymptomsTitle: 'Common KP Areas',
        causesOrSymptoms: [
          'Upper Outer Arms (Most common)',
          'Front of Thighs & Buttocks',
          'Facial Cheeks (KP Rubra Faceii in children)'
        ]
      }}
      approach={{
        title: 'Our 3-Step KP Smoothing Plan',
        description: 'Dissolving keratin plugs and hydrating skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Exfoliating Assessment',
            description: 'Checking degree of keratinization and redness.'
          },
          {
            stepNumber: '02',
            title: 'Clinical Chemical Peel',
            description: 'Applying lactic/salicylic peel to clear plug caps.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Hydration Cream',
            description: 'Prescribing urea-rich daily moisturizers.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can Keratosis Pilaris be cured permanently?',
          answer: 'KP is a genetic tendency, so while it cannot be cured permanently, consistent use of prescription keratolytics keeps skin 100% smooth and bump-free.'
        }
      ]}
    />
  );
}
