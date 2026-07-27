import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Acne Care & Management Guide | Dr. Divya Sharma Skin Clinic',
  description: 'Dermatologist guide on daily acne care, non-comedogenic skincare, diet advice, and pimple scar prevention in Whitefield Bangalore.',
};

export default function AcneCareGuidePage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Acne Guide',
        title: 'Acne & Its Comprehensive Care',
        hookSubtitle: 'Master Daily Acne Care, Prevents Dark Marks & Keep Breakouts Away',
        description: 'Learn how to care for acne-prone skin daily with gentle cleansing, non-comedogenic hydration, and active ingredients like salicylic acid and niacinamide.',
        treatmentName: 'Acne Care Consultation',
        keyBenefits: [
          'Gentle Non-Comedogenic Skincare',
          'Dietary Trigger Insights',
          'Prevents Post-Acne Hyperpigmentation',
          'Dermatologist Approved Active Ingredients'
        ]
      }}
      overview={{
        title: 'Daily Skincare Rules for Acne-Prone Skin',
        paragraphs: [
          'Managing acne requires a delicate balance—cleansing thoroughly to remove excess sebum without stripping the skin barrier, which can trigger compensatory oil overproduction.',
          'Dr. Divya Sharma recommends using gentle gel cleansers, oil-free moisturizers, and broad-spectrum gel sunscreen alongside targeted dermatological treatments.'
        ],
        causesOrSymptomsTitle: 'Key Daily Do’s & Don’ts',
        causesOrSymptoms: [
          'DO wash face twice daily with a pH-balanced salicylic cleanser.',
          'DON’T scrub acne pimples with physical walnut or apricot scrubs.',
          'DO apply oil-free moisturizer even if skin feels oily.',
          'DON’T sleep with makeup on or pop active breakouts.'
        ]
      }}
      approach={{
        title: 'Our 3-Step Routine Strategy',
        description: 'Simple daily steps for clear skin stability.',
        steps: [
          {
            stepNumber: '01',
            title: 'Cleanse',
            description: 'Salicylic or glycolic gel wash to unclog pores.'
          },
          {
            stepNumber: '02',
            title: 'Treat',
            description: 'Topical retinoids or niacinamide active serums.'
          },
          {
            stepNumber: '03',
            title: 'Protect',
            description: 'Matte, non-comedogenic broad spectrum SPF 50.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can dairy or high-glycemic foods make acne worse?',
          answer: 'Yes! High-glycemic foods (sugary snacks, refined carbs) and skim milk spike insulin levels, stimulating sebum production and acne inflammation.'
        }
      ]}
    />
  );
}
