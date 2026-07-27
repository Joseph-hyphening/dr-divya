import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Chemical Peels Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Dermatologist-administered medical chemical peels for acne, pigmentation, sun spots, and glowing skin in Whitefield Bangalore.',
};

export default function ChemicalPeelsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Medical Grade Exfoliation Therapy',
        title: 'Reclaim Fresh, Glowing Skin with Chemical Peels',
        hookSubtitle: 'Gentle Derm-Grade Exfoliation to Fade Spots, Smooth Fine Lines & Unclog Pores',
        description: 'Transform dull skin into radiant, clear perfection with tailored AHA, BHA, and TCA chemical peels supervised by Dr. Divya Sharma.',
        treatmentName: 'Chemical Peel Consultation',
        keyBenefits: [
          'Dermatologist Formulation Calibrated for Indian Skin',
          'Fades Tan, Dark Spots & Post-Acne Marks',
          'Smooths Skin Texture & Fine Lines',
          'Quick 30-Minute Procedure'
        ]
      }}
      overview={{
        title: 'Science Behind Medical Chemical Peels',
        paragraphs: [
          'Chemical peels use safe, plant-derived alpha and beta hydroxy acids (Glycolic, Salicylic, Lactic, Mandelic) to dissolve dead surface skin cells and stimulate collagen renewal.',
          'Unlike salon facials, dermatological peels penetrate controlled depths to safely treat hyperpigmentation, active pimples, and uneven texture without harsh scrubbing.'
        ],
        causesOrSymptomsTitle: 'Indications for Chemical Peels',
        causesOrSymptoms: [
          'Stubborn Dark Spots & Hyperpigmentation',
          'Acne Breakouts & Clogged Pores',
          'Dull, Tanned Skin & Sun Damage',
          'Uneven Skin Tone & Rough Texture'
        ]
      }}
      approach={{
        title: 'Our Customized Peel Protocol',
        description: 'Safe, precise, and comfortable.',
        steps: [
          {
            stepNumber: '01',
            title: 'Pre-Peel Assessment',
            description: 'Selecting the exact acid concentration matched to your skin sensitivity.'
          },
          {
            stepNumber: '02',
            title: 'Controlled Application',
            description: 'Even application under medical supervision with neutralizing agents.'
          },
          {
            stepNumber: '03',
            title: 'Hydrating Post-Care',
            description: 'Soothe and protect fresh skin with barrier creams and broad-spectrum sunscreen.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Will my skin peel heavily after a chemical peel?',
          answer: 'Superficial and medium peels cause minimal to mild flaking (similar to mild dry skin) over 3-5 days, which easily resolves with moisturizer.'
        }
      ]}
    />
  );
}
