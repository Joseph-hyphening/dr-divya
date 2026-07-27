import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Are Chemical Peels Harmful? Facts & Myths | Dr. Divya Sharma',
  description: 'Dermatologist guide on chemical peel safety, myths, Indian skin calibration, and post-peel recovery in Whitefield Bangalore.',
};

export default function ChemicalPeelsSafetyPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Dermatology Safety & Myth Busting',
        title: 'Are Chemical Peels Harmful for Your Skin?',
        hookSubtitle: 'Debunking Myths Around Medical Peels, Skin Thinning & Safety in Indian Skin',
        description: 'Learn why dermatologist-administered chemical peels are 100% safe, non-damaging, and highly effective when properly calibrated for your skin type.',
        treatmentName: 'Chemical Peel Consultation',
        keyBenefits: [
          'Medical Grade AHA & BHA Formulations',
          'Calibrated Specifically for Indian Skin Tones',
          'Does NOT Thin Skin (Boosts Collagen)',
          'Controlled Depth under Doctor Supervision'
        ]
      }}
      overview={{
        title: 'The Truth About Medical Chemical Peels',
        paragraphs: [
          'A common misconception is that chemical peels "burn" or permanently thin the skin. In reality, superficial medical peels use plant-derived fruit acids to exfoliate dead surface cells while stimulating new epidermal cell growth.',
          'Under Dr. Divya Sharma’s supervision, acid concentrations and contact times are precisely controlled to deliver glowing skin with zero harm.'
        ],
        causesOrSymptomsTitle: 'Common Peel Myths Debunked',
        causesOrSymptoms: [
          'MYTH: Chemical peels thin skin permanently. (FACT: They thicken dermal collagen!)',
          'MYTH: Peels cause dark spots. (FACT: Improper sun exposure after peel causes pigment; SPF prevents it.)',
          'MYTH: Salon facial peels are equal to medical peels. (FACT: Medical peels use higher purity, pH-controlled acids.)'
        ]
      }}
      approach={{
        title: 'Our Peel Safety Assurance',
        description: 'Controlled, painless, and safe treatment.',
        steps: [
          {
            stepNumber: '01',
            title: 'Patch Testing',
            description: 'Assessing skin tolerance before full application.'
          },
          {
            stepNumber: '02',
            title: 'Neutralization Protocol',
            description: 'Timing acid contact down to the exact second.'
          },
          {
            stepNumber: '03',
            title: 'Post-Peel Sun Shield',
            description: 'Prescribing broad-spectrum mineral zinc SPF.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Who should avoid chemical peels?',
          answer: 'Patients with active viral herpes outbreaks, open skin wounds, or those on oral Isotretinoin within the last 6 months should defer deep peels.'
        }
      ]}
    />
  );
}
