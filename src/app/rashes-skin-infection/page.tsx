import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Rashes & Infection Treatment Bangalore | Dr. Divya Sharma',
  description: 'Expert medical diagnosis and fast relief for fungal, bacterial, viral skin rashes & ringworm in Whitefield Bangalore.',
};

export default function RashesInfectionPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Infectious & Inflammatory Dermatology',
        title: 'Skin Rashes & Infection Relief',
        hookSubtitle: 'Fast Diagnosis & Clearance for Fungal Tinea, Bacterial Impetigo & Viral Rashes',
        description: 'Get immediate relief from painful, spreading, or itchy skin rashes caused by fungal overgrowth, bacterial folliculitis, or viral infections.',
        treatmentName: 'Skin Rash & Infection Consultation',
        keyBenefits: [
          'Microscopic Fungal & Bacterial Diagnostics',
          'Fast Relief from Itching & Spreading',
          'Targeted Antimicrobial Prescriptions',
          'Prevents Recurrent Ringworm / Tinea'
        ]
      }}
      overview={{
        title: 'Targeted Diagnosis of Skin Infections',
        paragraphs: [
          'Skin rashes can be triggered by fungal species (Tinea cruris/corporis), bacterial overgrowth (Staphylococcus folliculitis), or viral pathogens.',
          'Misdiagnosing a fungal infection as eczema and applying steroid creams makes the infection worse. Dr. Divya Sharma performs accurate KOH scrapings to prescribe precise antimicrobial care.'
        ],
        causesOrSymptomsTitle: 'Infections We Treat',
        causesOrSymptoms: [
          'Fungal Ringworm (Tinea Corporis & Cruris)',
          'Bacterial Folliculitis & Impetigo',
          'Viral Herpes Zoster / Shingles Rashes',
          'Sweat Rashes (Miliaria & Intertrigo)'
        ]
      }}
      approach={{
        title: 'Our Rash Resolution Workflow',
        description: 'Accurate testing and rapid symptom control.',
        steps: [
          {
            stepNumber: '01',
            title: 'KOH Scraping & Dermoscopy',
            description: 'Identifying fungal hyphae or bacterial pustules under microscope.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Prescription',
            description: 'Prescribing exact oral and topical antimicrobials.'
          },
          {
            stepNumber: '03',
            title: 'Hygiene & Clothing Protocols',
            description: 'Guiding anti-humidity routines to stop re-infection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Why does fungal ringworm return repeatedly?',
          answer: 'Fungal infections return if treated with over-the-counter steroid creams or stopped prematurely. Full-course clinical antifungals and dry hygiene permanently clear it.'
        }
      ]}
    />
  );
}
