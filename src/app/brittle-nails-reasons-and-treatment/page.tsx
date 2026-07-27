import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Brittle Nails Causes & Treatment Bangalore | Dr. Divya Sharma',
  description: 'Dermatologist diagnosis for split, peeling & brittle nails in Whitefield Bangalore: Biotin, Iron, Thyroid evaluation, and nail strengthening.',
};

export default function BrittleNailsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Onychology Specialization',
        title: 'Brittle Nails: Reasons & Medical Treatments',
        hookSubtitle: 'Strengthen Splitting, Peeling & Weak Nails with Biotin & Nutritional Diagnostics',
        description: 'Understand why fingernails split, break, or develop ridges, and discover medical nail strengthening solutions directed by Dr. Divya Sharma.',
        treatmentName: 'Nail Health Consultation',
        keyBenefits: [
          'Identifies Iron, Thyroid & Biotin Deficiencies',
          'Protects Cuticle & Nail Matrix Health',
          'Treats Fungal & Psoriatic Nail Changes',
          'Restores Smooth Nail Plate Thickness'
        ]
      }}
      overview={{
        title: 'Causes of Brittle & Splitting Nails',
        paragraphs: [
          'Brittle nails (Onychoschizia) can be caused by frequent handwashing, harsh gel manicures, iron deficiency anemia, thyroid dysfunctions, or fungal nail involvement.',
          'Dr. Divya Sharma evaluates nail matrix keratin health, prescribing topical nail fortifiers and targeted oral micronutrients.'
        ],
        causesOrSymptomsTitle: 'Common Nail Symptoms',
        causesOrSymptoms: [
          'Vertical ridges and horizontal nail splitting',
          'Soft, peeling nail tips',
          'Yellowing or thickening (Fungal Onychomycosis)',
          'Painful inflamed cuticles (Paronychia)'
        ]
      }}
      approach={{
        title: 'Our Nail Restoration Protocol',
        description: 'Nutritional repair and topical protection.',
        steps: [
          {
            stepNumber: '01',
            title: 'Nail Matrix Audit',
            description: 'Checking nail plate thickness and fungal involvement.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Micronutrient Support',
            description: 'Prescribing Biotin, Iron, and Amino acid keratin builders.'
          },
          {
            stepNumber: '03',
            title: 'Hydrating Nail Lacquer',
            description: 'Applying protective ceramide nail barrier serums.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Do gel manicures damage natural nails?',
          answer: 'Excessive gel acetone soaking and aggressive cuticle pushing strip the nail matrix, leading to thin, brittle, and peeling nail plates.'
        }
      ]}
    />
  );
}
