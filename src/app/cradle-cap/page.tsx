import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Cradle Cap Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Gentle, effective scalp treatment for infant cradle cap (seborrheic dermatitis) in Whitefield Bangalore by Pediatric Dermatologist Dr. Divya Sharma.',
};

export default function CradleCapPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Infant Scalp Care Specialization',
        title: 'Cradle Cap (Infant Seborrheic Dermatitis)',
        hookSubtitle: 'Safely Soften & Clear Yellow Scalp Crusts Without Hair Pulling or Irritation',
        description: 'Remove thick, greasy yellow or brown crusts on your baby’s scalp gently using specialized oil-soak routines and mild pediatric scalp cleansers.',
        treatmentName: 'Cradle Cap Consultation',
        keyBenefits: [
          'Gentle Dissolution of Scalp Crusts',
          'Mild Pediatric Anti-Seborrheic Cleansers',
          'Prevents Scalp Infection & Redness',
          '100% Safe for Sensitive Infant Scalps'
        ]
      }}
      overview={{
        title: 'Understanding Cradle Cap in Infants',
        paragraphs: [
          'Cradle cap is a harmless infant condition caused by temporary maternal hormones stimulating baby sebaceous glands, producing thick greasy yellow scales on the scalp.',
          'Picking or scraping scales off dry infant skin can cause painful tears and bacterial infection. Dr. Divya Sharma prescribes gentle keratolytic oils and soft-brush removal protocols.'
        ],
        causesOrSymptomsTitle: 'Common Signs of Cradle Cap',
        causesOrSymptoms: [
          'Thick yellow or brown greasy crusts on scalp',
          'Flaking resembling heavy infant dandruff',
          'Mild scalp redness behind ears or eyebrows'
        ]
      }}
      approach={{
        title: 'Our Cradle Cap Removal Method',
        description: 'Softening, washing, and gentle removal.',
        steps: [
          {
            stepNumber: '01',
            title: 'Oil-Soak Softening',
            description: 'Applying specialized mineral/plant oil for 30 minutes to soften crusts.'
          },
          {
            stepNumber: '02',
            title: 'Mild Pediatric Wash',
            description: 'Lathering with pediatrician-formulated shampoo.'
          },
          {
            stepNumber: '03',
            title: 'Soft Comb Pass',
            description: 'Gently lifting loosened flakes with soft-bristle brush.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Does cradle cap hurt the baby?',
          answer: 'No, cradle cap is generally painless and does not itch or bother the baby. However, proper medical removal prevents secondary bacterial infections.'
        }
      ]}
    />
  );
}
