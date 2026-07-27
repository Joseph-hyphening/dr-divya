import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Acne Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Targeted clinical acne treatments in Bangalore by Gold Medalist Dermatologist. Clear active pimples, cystic breakouts, and prevent post-acne marks.',
};

export default function AcneTreatmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Targeted Clinical Acne Protocol',
        title: 'Clear Active Acne & Prevent Scarring',
        hookSubtitle: 'Break the Cycle of Breakouts with Customized Dermatological Care & Medical Peels',
        description: 'Stop struggling with painful pimples and hormonal breakouts. Dr. Divya Sharma combines topical therapeutics, blue LED therapy, and salicylic peels for clear, smooth skin.',
        treatmentName: 'Acne Treatment Consultation',
        keyBenefits: [
          'Fast Reduction in Inflammation',
          'Hormonal & Dietary Cause Evaluation',
          'Prevents Deep Acne Scarring',
          'Customized Non-Comedogenic Routine'
        ]
      }}
      overview={{
        title: 'Medical Control for Active Acne & Breakouts',
        paragraphs: [
          'Acne occurs when excess sebum, dead skin cells, and P. acnes bacteria clog skin pores. Left untreated, severe or cystic acne can lead to permanent scarring and hyperpigmentation.',
          'At our Whitefield clinic, Dr. Divya Sharma evaluates your skin barrier, oil production, and internal factors to prescribe a precise, step-by-step clearance plan.'
        ],
        causesOrSymptomsTitle: 'Types of Acne We Treat',
        causesOrSymptoms: [
          'Comedonal Acne (Blackheads & Whiteheads)',
          'Inflammatory Papules & Pustules',
          'Deep Cystic & Nodular Acne',
          'Hormonal & Jawline Breakouts (PCOS related)'
        ]
      }}
      approach={{
        title: 'Our 3-Step Acne Clearance Strategy',
        description: 'From active flare-up suppression to scar prevention.',
        steps: [
          {
            stepNumber: '01',
            title: 'Sebum & Pore Unclogging',
            description: 'Medical salicylic peels and topicals to remove dead cell buildup.'
          },
          {
            stepNumber: '02',
            title: 'Bacterial & Inflammation Control',
            description: 'Targeted blue light therapy and antibiotic topicals to kill acne bacteria.'
          },
          {
            stepNumber: '03',
            title: 'Skin Regimen Optimization',
            description: 'Establishing a light, non-comedogenic daily maintenance routine.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How long does it take to see results from acne treatment?',
          answer: 'Most patients notice a significant reduction in redness and active breakout frequency within 2 to 4 weeks of consistent medical care.'
        }
      ]}
    />
  );
}
