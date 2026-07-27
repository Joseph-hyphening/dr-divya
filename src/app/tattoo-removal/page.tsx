import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Laser Tattoo Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Safe Q-Switched Nd:YAG laser tattoo removal in Whitefield Bangalore. Fade black, dark, and colored tattoos with minimal scarring.',
};

export default function TattooRemovalPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Q-Switched Laser Ink Clearance',
        title: 'Safe Laser Tattoo Removal',
        hookSubtitle: 'Break Down Tattoo Ink Pigment Safely Without Scarring Surrounding Skin',
        description: 'Remove unwanted black, blue, or colored ink tattoos cleanly using high-peak Q-Switched Nd:YAG laser technology calibrated for Indian skin safety.',
        treatmentName: 'Laser Tattoo Removal Consultation',
        keyBenefits: [
          'Fades Dark & Colored Tattoo Ink',
          'Preserves Surrounding Normal Skin',
          'Minimal Risk of Hyperpigmentation',
          'Supervised by Senior Dermatologist'
        ]
      }}
      overview={{
        title: 'Laser Ink Fragmentation Process',
        paragraphs: [
          'Tattoo ink is deposited deep into the dermis, where ink particles are too large for white blood cells to carry away naturally.',
          'Q-Switched laser pulses generate photo-acoustic energy that shatters large ink particles into microscopic dust, allowing your lymphatic system to flush them out progressively.'
        ],
        causesOrSymptomsTitle: 'Factors Affecting Ink Removal',
        causesOrSymptoms: [
          'Ink Depth & Density (Amateur vs Professional tattoos)',
          'Tattoo Ink Color (Black/Dark Blue respond fastest)',
          'Tattoo Age & Location on Body',
          'Skin Type & Lymphatic Metabolism'
        ]
      }}
      approach={{
        title: 'Laser Tattoo Removal Workflow',
        description: 'Phased removal sessions for clean results.',
        steps: [
          {
            stepNumber: '01',
            title: 'Topical Anesthesia',
            description: 'Applying medical numbing cream for comfort.'
          },
          {
            stepNumber: '02',
            title: 'Laser Target Pass',
            description: 'Ultra-short laser pulses shattering ink deposits.'
          },
          {
            stepNumber: '03',
            title: 'Cooling & Antibiotic Bandage',
            description: 'Preventing infection and promoting rapid skin healing.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How many sessions are required to fade a tattoo completely?',
          answer: 'Professional tattoos usually require 6 to 8 sessions spaced 6-8 weeks apart to allow complete lymphatic ink clearing.'
        }
      ]}
    />
  );
}
