import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'An Overview of Dandruff Causes & Treatment | Dr. Divya Sharma',
  description: 'Dermatology guide on dandruff causes, Malassezia yeast overgrowth, scalp care tips, and antifungal shampoo selection in Whitefield Bangalore.',
};

export default function DandruffOverviewPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Trichology Scalp Guide',
        title: 'An Overview of Dandruff & Scalp Health',
        hookSubtitle: 'Demystifying Scalp Flaking, Malassezia Overgrowth & Effective Antifungal Care',
        description: 'Understand why dandruff occurs, how it differs from dry scalp, and how medical ketoconazole and zinc formulations keep your scalp flake-free.',
        treatmentName: 'Scalp Consultation',
        keyBenefits: [
          'Differentiates Dry Scalp vs Oily Dandruff',
          'Targeted Antifungal Wash Guidance',
          'Soothes Scalp Redness & Itch',
          'Prevents Dandruff-Related Hair Shedding'
        ]
      }}
      overview={{
        title: 'Dandruff vs. Dry Scalp',
        paragraphs: [
          'Many people mistake a dry scalp for dandruff and apply heavy hair oils, which actually feeds the Malassezia yeast and worsens dandruff flakes.',
          'True dandruff presents as oily, yellow-white larger flakes accompanied by scalp itching, whereas dry scalp presents as tiny dry dust-like flakes.'
        ],
        causesOrSymptomsTitle: 'Key Diagnostic Differences',
        causesOrSymptoms: [
          'Dandruff: Oily, clumped yellow/white scales, Malassezia overgrowth.',
          'Dry Scalp: Small dry white dust, lack of natural scalp moisture.',
          'Scalp Psoriasis: Thick silvery scaly plaques extending beyond hairline.'
        ]
      }}
      approach={{
        title: 'Our Scalp Health Principles',
        description: 'Cleansing, balancing, and protecting scalp skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Scalp Identification',
            description: 'Checking oiliness vs dry barrier breakdown.'
          },
          {
            stepNumber: '02',
            title: 'Medical Antifungal Routine',
            description: 'Prescribing Ketoconazole 2% or ZPTO shampoos.'
          },
          {
            stepNumber: '03',
            title: 'Oil-Free Maintenance',
            description: 'Avoiding heavy scalp oiling during active flaking.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Should I oil my scalp if I have dandruff?',
          answer: 'No! Applying hair oils provides oleic acid that feeds the Malassezia yeast, worsening scalp flaking. Oil hair ends only, not the scalp.'
        }
      ]}
    />
  );
}
