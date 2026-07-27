import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Side Effects of Hard Water on Hair & Skin | Dr. Divya Sharma Bangalore',
  description: 'How high mineral hard water in Bangalore causes hair fall, dry skin & scalp build-up, plus dermatologist solutions and chelating wash guides.',
};

export default function HardWaterPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Bangalore Environmental Hair & Skin Care',
        title: 'Side Effects of Hard Water on Skin & Hair',
        hookSubtitle: 'Protect Your Scalp & Skin Barrier from Calcium, Magnesium & Salt Mineral Damage',
        description: 'Living in Bangalore with hard borewell water? Learn how mineral deposits strip hair elasticity, clog skin pores, and trigger severe scalp dryness and hair fall.',
        treatmentName: 'Hard Water Hair & Skin Consultation',
        keyBenefits: [
          'Prevents Hard Water Mineral Buildup',
          'Chelating Shampoo & Filter Recommendations',
          'Restores Hair Shine & Scalp Softness',
          'Protects Sensitive Eczema-Prone Skin'
        ]
      }}
      overview={{
        title: 'How Hard Water Affects Skin & Hair in Bangalore',
        paragraphs: [
          'Hard water contains high concentrations of Calcium and Magnesium ions. When mixed with soaps or shampoos, it forms insoluble scum that clings to hair shafts and skin pores.',
          'This mineral layer disrupts the scalp pH, making hair brittle, frizzy, and prone to breaking at the root, while leaving skin dry, itchy, and eczema-prone.'
        ],
        causesOrSymptomsTitle: 'Signs of Hard Water Damage',
        causesOrSymptoms: [
          'Dry, rough, dull hair that breaks easily',
          'Persistent scalp itchiness and mineral buildup',
          'Tight, dry skin after showering',
          'Shampoo failing to lather properly'
        ]
      }}
      approach={{
        title: 'Our Hard Water Protection Protocol',
        description: 'Neutralizing minerals and restoring hair/skin barrier.',
        steps: [
          {
            stepNumber: '01',
            title: 'Water Filter Installation',
            description: 'Recommending KDF/Shower head softeners.'
          },
          {
            stepNumber: '02',
            title: 'Chelating Clarifying Wash',
            description: 'Prescribing EDTA chelating shampoos once a week to dissolve minerals.'
          },
          {
            stepNumber: '03',
            title: 'Acidic Rinse & Barrier Seal',
            description: 'Balancing scalp pH with diluted apple cider vinegar rinse and hair serums.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Does hard water cause permanent hair loss?',
          answer: 'Hard water causes hair breakage along the shaft rather than destroying hair follicles. Using chelating washes and softeners completely restores normal hair strength.'
        }
      ]}
    />
  );
}
