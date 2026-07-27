import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Under Eye Dark Circles Treatment Bangalore | Dr. Divya Sharma',
  description: 'Dermatologist-led under-eye dark circles & hollows treatment in Whitefield Bangalore: Laser Toning, Peels, Eye Boosters, and Tear Trough care.',
};

export default function DarkCirclesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Under-Eye Periorbital Rejuvenation',
        title: 'Dark Circles & Under-Eye Hollows Reduction',
        hookSubtitle: 'Refresh Tired Eyes, Fade Periorbital Pigment & Smooth Under-Eye Hollows',
        description: 'Address the root causes of under-eye dark circles—melanin pigmentation, vascular show-through, thin periorbital skin, or tear trough volume loss.',
        treatmentName: 'Dark Circles Consultation',
        keyBenefits: [
          'Fades Periorbital Pigmentation',
          'Smooths Under-Eye Fine Lines',
          'Improves Microcirculation',
          'Custom Eye Peel & Laser Protocol'
        ]
      }}
      overview={{
        title: 'Multi-Factorial Causes of Dark Circles',
        paragraphs: [
          'Under-eye dark circles are rarely caused by sleep deprivation alone. Genetics, thin periorbital skin revealing bluish veins, hyperpigmentation, or hollow tear troughs create shadows under the eyes.',
          'Dr. Divya Sharma analyzes your specific under-eye anatomy to prescribe light eye peels, gentle Q-switched laser toning, or hyaluronic hydration.'
        ],
        causesOrSymptomsTitle: 'Types of Dark Circles',
        causesOrSymptoms: [
          'Pigmentary Dark Circles (Brownish skin tone)',
          'Vascular Dark Circles (Bluish/Purple show-through)',
          'Structural Shadowing (Deep tear trough hollows)',
          'Post-Allergic Eye Rubbing Pigment'
        ]
      }}
      approach={{
        title: 'Our Under-Eye Refresh Method',
        description: 'Delicate, targeted care for fragile eye skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Periorbital Analysis',
            description: 'Differentiating pigment vs hollow shadow vs vascular show-through.'
          },
          {
            stepNumber: '02',
            title: 'Gentle Eye Therapy',
            description: 'Ultra-gentle eye peels, laser toning, or peri-ocular mesotherapy.'
          },
          {
            stepNumber: '03',
            title: 'Home Eye Regimen',
            description: 'Prescribing peptide eye serums and sun protection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are eye creams enough to fix dark circles?',
          answer: 'Eye creams provide mild hydration, but genetic pigment or deep tear trough hollows require clinical laser toning or hyaluronic boosters for noticeable improvement.'
        }
      ]}
    />
  );
}
