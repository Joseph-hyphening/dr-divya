import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Female Hair Loss & Fall Treatment Bangalore | Dr. Divya Sharma',
  description: 'Specialized treatment for female hair thinning, PCOS hair loss, and post-pregnancy hair fall in Whitefield Bangalore by Dermatologist Dr. Divya Sharma.',
};

export default function FemaleHairFallPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Female Trichology Specialization',
        title: 'Hair Fall & Thinning Treatment for Women',
        hookSubtitle: 'Reverse Parting Line Widening, PCOS Hair Shedding & Postpartum Hair Loss',
        description: 'Comprehensive, hormonal-aware hair restoration for women. Restore volume, scalp coverage, and hair strand thickness with personalized clinical protocols.',
        treatmentName: 'Female Hair Loss Consultation',
        keyBenefits: [
          'Addresses PCOS & Thyroid Hormonal Triggers',
          'Postpartum & Stress Hair Fall Recovery',
          'Strengthens Hair Root Anchoring',
          'Gentle, Painless Growth Factor Therapy'
        ]
      }}
      overview={{
        title: 'Understanding Female Pattern Hair Loss & Shedding',
        paragraphs: [
          'Women experience hair thinning differently than men—typically presenting as diffuse shedding, a widening central part line, or loss of ponytails thickness.',
          'Dr. Divya Sharma conducts thorough blood panel evaluations (Ferritin, Vitamin B12/D3, Thyroid, PCOS hormones) to treat female hair loss at its root.'
        ],
        causesOrSymptomsTitle: 'Common Triggers for Women',
        causesOrSymptoms: [
          'PCOS / PCOD Hormonal Imbalances',
          'Post-Pregnancy (Postpartum Telogen Effluvium)',
          'Iron / Ferritin Deficiency Anemia',
          'Crash Dieting & Emotional Stress'
        ]
      }}
      approach={{
        title: 'Our Female Hair Recovery Routine',
        description: 'Balanced internal health and scalp root stimulation.',
        steps: [
          {
            stepNumber: '01',
            title: 'Hormonal & Nutritional Audit',
            description: 'Checking vital blood parameters affecting hair growth cycle.'
          },
          {
            stepNumber: '02',
            title: 'GFC Growth Factor Sessions',
            description: 'Injecting autologous growth factors to stimulate dormant roots.'
          },
          {
            stepNumber: '03',
            title: 'Custom Peptide & Serum Care',
            description: 'Non-greasy daily topicals designed for female scalp comfort.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is post-pregnancy hair loss temporary?',
          answer: 'Yes! Postpartum hair fall usually peaks 3-4 months after delivery. Clinical growth factor support accelerates recovery and prevents long-term thinning.'
        }
      ]}
    />
  );
}
