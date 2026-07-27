import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Milia Extraction & Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Safe clinical extraction of tiny white keratin bumps (milia) around eyes and cheeks in Whitefield Bangalore.',
};

export default function MiliaPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Keratin Extraction',
        title: 'Milia (Tiny White Bumps) Removal',
        hookSubtitle: 'Painless Clinical Extraction of Hard Under-Eye Keratin Cysts',
        description: 'Remove stubborn tiny white cysts under eyes and cheeks cleanly without scarring or skin damage.',
        treatmentName: 'Milia Extraction Consultation',
        keyBenefits: [
          'Safe Extraction Near Delicate Eyes',
          'Zero Scarring or Hyperpigmentation',
          'Immediate Smooth Skin Texture',
          'Prevents Recurrence with Retinoids'
        ]
      }}
      overview={{
        title: 'What Are Milia Cysts?',
        paragraphs: [
          'Milia are tiny, hard white cysts that form when dead keratin flakes get trapped under the skin surface. Unlike pimples, they lack a pore opening and cannot be squeezed out at home.',
          'Dr. Divya Sharma performs painless micro-deroofing under magnifying optics to release trapped keratin cleanly.'
        ],
        causesOrSymptomsTitle: 'Common Causes',
        causesOrSymptoms: [
          'Heavy heavy eye creams clogging delicate pores',
          'Sun damage thickening surface skin',
          'Post-blistering or friction skin healing'
        ]
      }}
      approach={{
        title: 'Milia Extraction Routine',
        description: 'Quick, painless 15-minute procedure.',
        steps: [
          {
            stepNumber: '01',
            title: 'Skin Cleansing & Numbing',
            description: 'Disinfecting the eye and cheek area.'
          },
          {
            stepNumber: '02',
            title: 'Micro-Deroofing',
            description: 'Creating tiny opening with micro-lancet to lift out keratin seed.'
          },
          {
            stepNumber: '03',
            title: 'Soothing Antiseptic',
            description: 'Applying healing balm for instant recovery.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can I squeeze milia at home?',
          answer: 'No, squeezing milia causes skin tearing and infection because milia have no natural pore opening. Clinical deroofing is required.'
        }
      ]}
    />
  );
}
