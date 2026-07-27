import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Home Remedies for Skin Care: Myths vs Facts | Dr. Divya Sharma',
  description: 'Dermatologist guide on safe vs dangerous DIY home remedies (Lemon, Toothpaste, Baking Soda) by Dr. Divya Sharma in Whitefield Bangalore.',
};

export default function HomeRemediesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Dermatology DIY Truths & Safety',
        title: 'Home Remedies for Skin Care: Safe vs Harmful',
        hookSubtitle: 'Stop Damaging Your Skin Barrier with Lemon, Baking Soda & Toothpaste DIYs',
        description: 'Learn which kitchen ingredients are safe for skin and which common DIY home remedies cause severe chemical burns, hyperpigmentation, and barrier disruption.',
        treatmentName: 'Skin Care Routine Consultation',
        keyBenefits: [
          'Uncovers Harmful Kitchen DIY Myths',
          'Prevents Acidic Chemical Burns (Lemon/Vinegar)',
          'Safe Natural Alternatives (Aloe/Honey)',
          'Preserves Natural Skin Barrier pH'
        ]
      }}
      overview={{
        title: 'Why DIY Remedies Can Burn Your Skin',
        paragraphs: [
          'Social media home remedies often recommend raw lemon juice (pH 2 - highly acidic, causes phytophotodermatitis burns), baking soda (pH 9 - destroys acid mantle), or toothpaste for pimples.',
          'Dr. Divya Sharma educates patients on replacing risky kitchen hacks with dermatologist-tested, pH-balanced skincare products.'
        ],
        causesOrSymptomsTitle: 'Dangerous DIYs to Avoid',
        causesOrSymptoms: [
          'Lemon Juice / Apple Cider Vinegar (Causes severe chemical burns & dark spots)',
          'Toothpaste on Pimples (Triggers severe contact dermatitis & scarring)',
          'Raw Baking Soda Scrubs (Strips skin lipid mantle, causing dryness)',
          'Garlic for Warts/Acne (Causes deep skin necrosis)'
        ]
      }}
      approach={{
        title: 'Safe Alternatives to Kitchen Hacks',
        description: 'Evidence-backed natural care.',
        steps: [
          {
            stepNumber: '01',
            title: 'pH Awareness',
            description: 'Understanding why skin requires a mild 5.5 pH balance.'
          },
          {
            stepNumber: '02',
            title: 'Safe Natural Soothers',
            description: 'Using pure Aloe Vera or Raw Honey for mild soothing.'
          },
          {
            stepNumber: '03',
            title: 'Formulated Actives',
            description: 'Replacing raw ingredients with stabilized clinical serums.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is applying raw Aloe Vera gel safe?',
          answer: 'Pure aloe vera is generally soothing, but patch test first as yellow aloin latex near the outer leaf can cause skin itching in sensitive individuals.'
        }
      ]}
    />
  );
}
