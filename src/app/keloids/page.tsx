import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Keloid & Hypertrophic Scar Treatment Bangalore | Dr. Divya Sharma',
  description: 'Specialized keloid scar reduction in Whitefield Bangalore: intralesional therapy, RF scar flattening, and laser treatment.',
};

export default function KeloidsTreatmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Keloid Scar Specialization',
        title: 'Keloid & Hypertrophic Scar Reduction',
        hookSubtitle: 'Flatten Raised Scar Bumps, Stop Itching & Pain with Intralesional Therapy',
        description: 'Relieve pain, itching, and overgrowing scar tissue caused by chest, earlobe, or shoulder keloids using safe intralesional steroid injections and laser softening.',
        treatmentName: 'Keloid Treatment Consultation',
        keyBenefits: [
          'Flattens Hard Raised Keloids',
          'Immediate Relief from Itching & Tenderness',
          'Prevents Post-Surgical Keloid Recurrence',
          'Minimal Discomfort Outpatient Care'
        ]
      }}
      overview={{
        title: 'Understanding Keloid Formation',
        paragraphs: [
          'Keloids occur when skin overproduces collagen during wound healing, creating thick, raised, itchy scar bumps that extend beyond the original injury boundary.',
          'Dr. Divya Sharma provides targeted intralesional therapy combined with pressure therapy or silicone gels to break down dense collagen bundles.'
        ],
        causesOrSymptomsTitle: 'Common Keloid Locations',
        causesOrSymptoms: [
          'Earlobe Piercing Keloids',
          'Chest & Sternum Acne Keloids',
          'Shoulder & Upper Arm Vaccination Scars',
          'Surgical & Trauma Wound Scars'
        ]
      }}
      approach={{
        title: 'Keloid Treatment Protocol',
        description: 'Progressive scar softening and height reduction.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Mapping',
            description: 'Evaluating scar vascularity and tissue firmness.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Intralesional Injections',
            description: 'Delivering precise anti-inflammatory medication directly into keloid.'
          },
          {
            stepNumber: '03',
            title: 'Laser Softening & Patch',
            description: 'Preventing recurrence with silicone sheet application.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How many injection sessions are needed to flatten a keloid?',
          answer: 'Most keloids require 3 to 5 sessions spaced 3-4 weeks apart for significant softening and flattening.'
        }
      ]}
    />
  );
}
