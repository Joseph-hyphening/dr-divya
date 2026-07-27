import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Chronic Dandruff & Scalp Dermatitis Treatment Bangalore | Dr. Divya',
  description: 'Relieve stubborn scalp dandruff, seborrheic dermatitis, scaling, and scalp itching with medical trichology care in Whitefield Bangalore.',
};

export default function DandruffTreatmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Trichology & Scalp Care',
        title: 'Chronic Scalp Dandruff & Flaking Relief',
        hookSubtitle: 'Control Malassezia Fungus, Soothe Scalp Itching & Stop Persistent Flaking',
        description: 'Eliminate stubborn white or yellow scalp flakes, seborrheic dermatitis, and persistent scalp irritation with targeted antifungal and keratolytic medical care.',
        treatmentName: 'Scalp & Dandruff Consultation',
        keyBenefits: [
          'Controls Scalp Malassezia Yeast',
          'Soothes Severe Scalp Itching',
          'Eliminates White & Oily Yellow Flakes',
          'Prevents Scalp Inflammation-Induced Hair Fall'
        ]
      }}
      overview={{
        title: 'Science of Seborrheic Dermatitis & Dandruff',
        paragraphs: [
          'Dandruff is caused by an overgrowth of Malassezia yeast feeding on scalp sebum, producing inflammatory byproducts that trigger rapid skin cell shedding.',
          'Dr. Divya Sharma evaluates your scalp oiliness, barrier health, and hair roots to prescribe medical-grade antifungal lotions, scalp peels, and pH-balanced shampoos.'
        ],
        causesOrSymptomsTitle: 'Common Scalp Symptoms',
        causesOrSymptoms: [
          'Dry white flakes on shoulders and collar',
          'Oily, yellowish crusty scalp patches',
          'Persistent scalp redness and burning itch',
          'Scalp acne & folliculitis bumps'
        ]
      }}
      approach={{
        title: 'Our 3-Phase Scalp Recovery Plan',
        description: 'Eliminating fungal yeast and restoring scalp skin barrier.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Scalp Check',
            description: 'Assessing scalp sebum levels, crusting, and hair root inflammation.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Medical Wash & Cleansing',
            description: 'Prescribing Ketoconazole, Zinc Pyrithione, or Salicylic formulations.'
          },
          {
            stepNumber: '03',
            title: 'Scalp Barrier Maintenance',
            description: 'Preventing seasonal flare-ups with customized wash routines.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can severe dandruff cause hair fall?',
          answer: 'Yes! Persistent scalp inflammation and scratching weaken hair roots, leading to temporary hair shedding (telogen effluvium). Clearing dandruff stops hair loss.'
        }
      ]}
    />
  );
}
