import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Cancer Awareness & Mole Screening Bangalore | Dr. Divya Sharma',
  description: 'Dermoscopic mole checking, skin cancer screening (Melanoma, BCC, SCC), and sun safety guidance by Dr. Divya Sharma in Whitefield Bangalore.',
};

export default function SkinCancerAwarenessPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Dermoscopic Mole Screening & Awareness',
        title: 'Skin Cancer Awareness & Mole Screening',
        hookSubtitle: 'Learn the ABCDEs of Moles, Sun Safety & Early Dermoscopic Detection',
        description: 'Get peace of mind with professional digital dermoscopy checking for changing moles, non-healing sores, and unusual skin spots.',
        treatmentName: 'Mole Check & Skin Screening',
        keyBenefits: [
          'Digital Dermoscopic Mole Mapping',
          'Teaches ABCDE Skin Check Rules',
          'Early Detection of BCC, SCC & Melanoma',
          'Sunscreen & Photo-Protection Guidance'
        ]
      }}
      overview={{
        title: 'Understanding Skin Cancer & Early Signs',
        paragraphs: [
          'While skin cancer is less frequent in dark skin tones, non-healing ulcers, changing moles, or scaly sun-exposed patches (Actinic Keratosis, Basal Cell Carcinoma) can occur.',
          'Dr. Divya Sharma performs comprehensive dermoscopic mole checks to evaluate pigment symmetry, borders, color variation, and growth dynamics.'
        ],
        causesOrSymptomsTitle: 'The ABCDE Guide for Moles',
        causesOrSymptoms: [
          'Asymmetry: One half of the mole does not match the other.',
          'Border: Irregular, scalloped, or poorly defined edges.',
          'Color: Varied shades of brown, black, pink, red, or blue.',
          'Diameter: Greater than 6mm (pencil eraser size).',
          'Evolving: Changing in size, shape, color, or bleeding/itching.'
        ]
      }}
      approach={{
        title: 'Our Screening Protocol',
        description: 'Comprehensive, reassuring dermoscopic check.',
        steps: [
          {
            stepNumber: '01',
            title: 'Full Body / Spot Dermoscopy',
            description: 'Magnifying pigment patterns 10x to 20x.'
          },
          {
            stepNumber: '02',
            title: 'Risk Categorization',
            description: 'Differentiating benign naevi from atypical dysplasia.'
          },
          {
            stepNumber: '03',
            title: 'Biopsy / Monitoring Plan',
            description: 'Providing excision biopsy or annual photo tracking.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Should I get a mole checked if it bleeds or scratches easily?',
          answer: 'Yes! Any mole or bump that bleeds spontaneously, oozes, or rapidly changes size should be evaluated by a dermatologist promptly.'
        }
      ]}
    />
  );
}
