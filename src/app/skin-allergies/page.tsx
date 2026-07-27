import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Allergies & Urticaria Treatment Bangalore | Dr. Divya Sharma',
  description: 'Dermatologist diagnosis for chronic hives, contact dermatitis, allergic welts & skin itching in Whitefield Bangalore.',
};

export default function SkinAllergiesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Allergy & Urticaria Specialization',
        title: 'Skin Allergies & Hives (Urticaria) Relief',
        hookSubtitle: 'Calm Itchy Welts, Contact Dermatitis & Allergic Skin Reactions Fast',
        description: 'Diagnose and control sudden hives, red allergic welts, facial swelling, and contact sensitivity to soaps, metals, or cosmetics.',
        treatmentName: 'Skin Allergy Consultation',
        keyBenefits: [
          'Fast Relief from Hives & Itchy Welts',
          'Contact Sensitivity Identification',
          'Non-Sedating Anti-Histamine Care',
          'Prevents Allergic Anaphylaxis Risks'
        ]
      }}
      overview={{
        title: 'Understanding Allergic Skin Reactions',
        paragraphs: [
          'Allergic skin reactions occur when the immune system releases histamine in response to external contact (nickel, hair dye, fragrances) or internal triggers (foods, drugs).',
          'Dr. Divya Sharma conducts comprehensive allergen history mapping and prescribes modern, non-sedating antihistamines to calm acute or chronic hives.'
        ],
        causesOrSymptomsTitle: 'Allergic Conditions Treated',
        causesOrSymptoms: [
          'Acute & Chronic Urticaria (Hives/Welts)',
          'Allergic Contact Dermatitis (Hair dye, jewelry, cement)',
          'Angioedema (Lip & Eyelid Swelling)',
          'Cosmetic Sensitivity & Perfume Rash'
        ]
      }}
      approach={{
        title: 'Our Allergy Care Protocol',
        description: 'Identify triggers and eliminate itching.',
        steps: [
          {
            stepNumber: '01',
            title: 'Allergen History Audit',
            description: 'Tracking cosmetic, chemical, or dietary triggers.'
          },
          {
            stepNumber: '02',
            title: 'Histamine Suppression',
            description: 'Prescribing safe, non-sedating medical antihistamines.'
          },
          {
            stepNumber: '03',
            title: 'Skin Barrier Shielding',
            description: 'Formulating hypoallergenic skincare regimens.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What should I do during a sudden hives flare-up?',
          answer: 'Avoid hot showers, tight synthetic clothing, and scratching. Apply a cool compress and seek immediate medical evaluation if lip or throat swelling occurs.'
        }
      ]}
    />
  );
}
