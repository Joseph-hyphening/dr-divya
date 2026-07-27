import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Dark Spot & Pigment Reduction Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Effective dark spot reduction, melasma treatments, and sun spot fading using Q-switched lasers and medical peels in Whitefield Bangalore.',
};

export default function DarkSpotReductionPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Precision Pigment Clearance',
        title: 'Dark Spot & Pigment Reduction',
        hookSubtitle: 'Erase Sun Spots, Post-Acne Marks & Hyperpigmentation for Uniform Skin Clarity',
        description: 'Target surface patches and deep melanin deposits with combination Q-switched lasers, glut-infused medical peels, and skin-brightening topicals.',
        treatmentName: 'Dark Spot & Pigment Reduction Consultation',
        keyBenefits: [
          'Fades Post-Acne Marks (PIH)',
          'Clear Sun Spots, Freckles & Age Spots',
          'Safely Targets Melanin Deposits',
          'Evens Out Patchy Complexion'
        ]
      }}
      overview={{
        title: 'Comprehensive Hyperpigmentation Control',
        paragraphs: [
          'Dark spots and uneven skin patches occur when melanocytes overproduce pigment in response to UV exposure, hormonal surges, or inflammation.',
          'Dr. Divya Sharma prescribes multi-layered therapies that inhibit melanin synthesis internally while removing excess pigment deposits on the skin surface.'
        ],
        causesOrSymptomsTitle: 'Common Pigment Conditions',
        causesOrSymptoms: [
          'Post-Inflammatory Hyperpigmentation (PIH)',
          'Sun Spots & Solar Lentigines',
          'Epidermal & Dermal Melasma Patches',
          'Mouth & Lip Surrounding Darkness'
        ]
      }}
      approach={{
        title: 'Our 3-Phase Spot Clearing Method',
        description: 'Inhibiting, breaking down, and shedding dark spot pigment.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Analysis',
            description: 'Locating exact depth of pigment in dermal vs epidermal layers.'
          },
          {
            stepNumber: '02',
            title: 'Laser Toning & Peel',
            description: 'Shattering pigment clusters while gently exfoliating dark surface cells.'
          },
          {
            stepNumber: '03',
            title: 'Daily Tyrosinase Blockers',
            description: 'Preventing new pigment production with medical-grade topicals.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How long until I see dark spots lighten?',
          answer: 'Superficial post-acne marks lighten within 2 to 3 weeks, while deep sun spots and melasma show marked clearance over 4-6 sessions.'
        }
      ]}
    />
  );
}
