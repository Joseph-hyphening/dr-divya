import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Cutaneous Food Allergy & Skin Reactions Bangalore | Dr. Divya Sharma',
  description: 'Dermatological diagnosis and relief for skin hives, swelling & eczema triggered by food allergies in Whitefield Bangalore.',
};

export default function FoodAllergyPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Cutaneous Food Allergy & Hives Care',
        title: 'Food Allergy Skin Reaction Management',
        hookSubtitle: 'Identify Food Triggers Causing Sudden Hives, Itching & Facial Swelling',
        description: 'Diagnose skin reactions (urticaria, eczema flare-ups) linked to dietary allergens like nuts, dairy, seafood, or preservatives with specialist medical care.',
        treatmentName: 'Food Allergy Consultation',
        keyBenefits: [
          'Identifies Dietary Allergen Triggers',
          'Fast Relief from Allergic Hives',
          'Antihistamine & Barrier Support',
          'Prevents Recurrent Anaphylactic Risks'
        ]
      }}
      overview={{
        title: 'How Food Allergies Manifest on Skin',
        paragraphs: [
          'When sensitive individuals ingest specific food proteins, IgE antibodies trigger mast cell degranulation, releasing histamine into the skin.',
          'This results in acute hives (welts), lip swelling, severe itching, or worsening of atopic eczema patches.',
          'Dr. Divya Sharma conducts meticulous dietary history mapping and provides emergency management guidance.'
        ],
        causesOrSymptomsTitle: 'Common Triggers & Symptoms',
        causesOrSymptoms: [
          'Sudden onset itchy red hives / wheals',
          'Lip, tongue, or eyelid angioedema swelling',
          'Flaring of infant eczema after dairy/egg exposure',
          'Common culprits: Dairy, peanuts, shellfish, artificial colors'
        ]
      }}
      approach={{
        title: 'Our Food Allergy Protocol',
        description: 'Immediate symptom relief and dietary elimination plan.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dietary Reaction Mapping',
            description: 'Correlating food intake timing with rash onset.'
          },
          {
            stepNumber: '02',
            title: 'Immediate Histamine Control',
            description: 'Prescribing non-sedating medical antihistamines.'
          },
          {
            stepNumber: '03',
            title: 'Elimination & Re-introduction',
            description: 'Guiding safe dietary elimination and skin protection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How quickly do food allergy hives appear?',
          answer: 'IgE-mediated hives typically appear within minutes to 2 hours of consuming the trigger food.'
        }
      ]}
    />
  );
}
