import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Medical Dermatology | Dr. Divya Sharma Skin Clinic Whitefield',
  description: 'Expert medical dermatology treatments for psoriasis, vitiligo, eczema, skin infections, keloids, warts, and allergies by Gold Medalist Dermatologist in Bangalore.',
};

export default function MedicalDermatologyPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Medical Dermatology Specialization',
        title: 'Advanced Medical Dermatology Care',
        hookSubtitle: 'Evidence-Based Diagnosis & Relief for Psoriasis, Eczema, Allergies & Skin Conditions',
        description: 'Under the guidance of MBBS Gold Medalist & MD Dermatologist Dr. Divya Sharma, our medical dermatology division offers therapeutic management for complex skin disorders.',
        treatmentName: 'Medical Dermatology Consultation',
        keyBenefits: [
          'Accurate Medical Diagnosis',
          'Biological & Phototherapy Guidance',
          'Relief from Chronic Itching & Rashes',
          'Safe for Long-Term Disease Control'
        ]
      }}
      overview={{
        title: 'Comprehensive Management of Medical Skin Diseases',
        paragraphs: [
          'Medical dermatology focuses on diagnosing, treating, and preventing skin diseases that affect physical health and daily comfort.',
          'Dr. Divya Sharma brings over 12 years of specialized hospital and clinical experience treating conditions like plaque psoriasis, atopic eczema, contact dermatitis, fungal infections, and autoimmune skin conditions.',
          'We emphasize patient education, safe drug monitoring, and non-steroid alternatives wherever suitable.'
        ],
        causesOrSymptomsTitle: 'Key Medical Conditions Treated',
        causesOrSymptoms: [
          'Psoriasis & Scalp Psoriasis Management',
          'Atopic Dermatitis & Severe Eczema',
          'Vitiligo & White Patch Pigment Restoration',
          'Chronic Urticaria & Skin Food Allergies',
          'Warts, Molluscum & Bacterial/Fungal Infections'
        ]
      }}
      approach={{
        title: 'Our Medical Treatment Methodology',
        description: 'Scientific, structured protocols for lasting disease remission.',
        steps: [
          {
            stepNumber: '01',
            title: 'Symptom Mapping',
            description: 'Identifying flare-up triggers, immune responses, and previous drug reactions.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Therapy',
            description: 'Prescribing evidence-based topicals, biologics, or phototherapy suited to severity.'
          },
          {
            stepNumber: '03',
            title: 'Long-Term Remission',
            description: 'Guiding dietary changes and barrier repair to maintain healthy skin equilibrium.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is psoriasis completely curable?',
          answer: 'While psoriasis is a chronic autoimmune condition, modern therapeutic options allow patients to achieve complete skin clearance and long-term symptom control.'
        }
      ]}
    />
  );
}
