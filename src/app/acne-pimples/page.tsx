import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Pimples & Active Acne Care Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical treatment for acne, pimples, cystic breakouts, and inflamed skin in Whitefield Bangalore by Gold Medalist Dermatologist Dr. Divya Sharma.',
};

export default function AcnePimplesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Acne & Pimple Care',
        title: 'Targeted Relief for Pimples & Active Acne',
        hookSubtitle: 'Calm Inflamed Breakouts, Clear Pores & Stop Recurrent Pimples',
        description: 'Get expert dermatological evaluation for stubborn pimples, painful pus-filled acne, and jawline breakouts with evidence-based medical care.',
        treatmentName: 'Acne & Pimples Consultation',
        keyBenefits: [
          'Fast Relief for Inflamed Pimples',
          'Prevent Post-Pimple Dark Marks',
          'Root Cause Hormonal Assessment',
          'Safe Dermatologist Prescriptions'
        ]
      }}
      overview={{
        title: 'Understanding Pimple Formation',
        paragraphs: [
          'Pimples occur when excess sebum and dead skin cells clog pores, allowing acne bacteria to proliferate and trigger localized inflammation.',
          'Dr. Divya Sharma provides targeted topicals, anti-bacterial light therapies, and dietary recommendations to clear pimples without leaving scars.'
        ],
        causesOrSymptomsTitle: 'Common Pimple Symptoms',
        causesOrSymptoms: [
          'Painful red bumps on face, neck, or back',
          'Pus-filled pustules & whiteheads',
          'Deep hormonal pimples near menstruation',
          'Clogged pore comedones'
        ]
      }}
      approach={{
        title: 'Our Pimple Clearance Strategy',
        description: 'Clear active pimples and restore healthy skin balance.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Evaluation',
            description: 'Identifying pore blockages, sebum levels, and hormonal triggers.'
          },
          {
            stepNumber: '02',
            title: 'Anti-Inflammatory Care',
            description: 'Prescribing gentle anti-acne formulations and soothing therapy.'
          },
          {
            stepNumber: '03',
            title: 'Routine Optimization',
            description: 'Establishing oil-control, non-comedogenic daily skin maintenance.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Should I pop or squeeze my pimples?',
          answer: 'Never squeeze or pop pimples! Squeezing pushes bacteria deeper into the dermis, increasing the risk of permanent scarring and dark spots.'
        }
      ]}
    />
  );
}
