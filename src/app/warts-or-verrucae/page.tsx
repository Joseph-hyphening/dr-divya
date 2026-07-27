import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Wart & Verruca Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Radiofrequency & Cryotherapy removal for viral warts, plantar verrucae & facial warts in Whitefield Bangalore.',
};

export default function WartsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Viral Wart Removal Specialization',
        title: 'Warts & Verrucae Elimination',
        hookSubtitle: 'Clear Rough Viral Warts & Painful Plantar Foot Verrucae Safely',
        description: 'Remove stubborn HPV viral warts on hands, feet, face, and body cleanly using Radiofrequency ablation or targeted Cryotherapy.',
        treatmentName: 'Wart Removal Consultation',
        keyBenefits: [
          'Precision RF Cautery & Cryotherapy',
          'Pain-Free Local Numbing Procedure',
          'Destroys Viral Root Core completely',
          'Prevents Spread to Family Members'
        ]
      }}
      overview={{
        title: 'Science of HPV Viral Warts',
        paragraphs: [
          'Warts are benign skin growths caused by Human Papillomavirus (HPV), causing rapid outer skin cell proliferation. They can be painful on soles of feet (Plantar Warts / Verrucae) or unsightly on hands and face.',
          'Dr. Divya Sharma destroys both the surface wart growth and its underlying viral root core to prevent recurrence.'
        ],
        causesOrSymptomsTitle: 'Types of Warts We Treat',
        causesOrSymptoms: [
          'Common Warts (Rough grainy hand/finger bumps)',
          'Plantar Warts / Verrucae (Painful foot sole warts)',
          'Flat Warts (Multiple smooth facial/neck bumps)',
          'Periungual Warts (Warts around fingernails)'
        ]
      }}
      approach={{
        title: 'Wart Removal Protocol',
        description: 'Targeted destruction of viral tissue core.',
        steps: [
          {
            stepNumber: '01',
            title: 'Local Numbing',
            description: 'Ensuring zero pain during treatment.'
          },
          {
            stepNumber: '02',
            title: 'RF Cautery / Cryo Ablation',
            description: 'Thermal or freezing destruction of wart root.'
          },
          {
            stepNumber: '03',
            title: 'Antiviral Aftercare Balm',
            description: 'Accelerating clean skin healing in 7 days.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are warts contagious to other body parts?',
          answer: 'Yes, picking or scratching warts can transfer the virus to other skin sites. Professional removal halts self-inoculation.'
        }
      ]}
    />
  );
}
