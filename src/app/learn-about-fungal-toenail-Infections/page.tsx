import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Fungal Toenail Infection (Onychomycosis) Bangalore | Dr. Divya',
  description: 'Specialized treatment for thick, discolored, crumbling fungal toenails in Whitefield Bangalore by Dermatologist Dr. Divya Sharma.',
};

export default function FungalToenailPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Nail Fungal Specialization',
        title: 'Fungal Toenail Infection (Onychomycosis)',
        hookSubtitle: 'Clear Thickened, Yellow, Crumbling Toenails with Medical Antifungals & Lacquers',
        description: 'Eradicate deep-seated nail bed fungus (Onychomycosis) and regrow healthy, clear toenails using pulse oral antifungals and medical lacquers.',
        treatmentName: 'Fungal Nail Consultation',
        keyBenefits: [
          'Clears Thickened & Yellowed Toenails',
          'Targeted Amorolfine & Ciclopirox Lacquers',
          'Pulse Oral Antifungal Protocols',
          'Prevents Permanent Nail Bed Distortion'
        ]
      }}
      overview={{
        title: 'Understanding Onychomycosis',
        paragraphs: [
          'Fungal toenail infections develop when dermatophyte fungi penetrate beneath the nail plate into the nail bed, causing the nail to thicken, turn yellow/brown, and crumble at the edges.',
          'Dr. Divya Sharma provides long-term oral and topical lacquers that penetrate the tough keratin nail plate to eradicate fungal colonies.'
        ],
        causesOrSymptomsTitle: 'Signs of Nail Fungus',
        causesOrSymptoms: [
          'Thickened, distorted toenail plate',
          'Yellowish, brown, or white nail discoloration',
          'Crumbling chalky debris under nail tip',
          'Separation of nail plate from nail bed (Onycholysis)'
        ]
      }}
      approach={{
        title: 'Our Nail Fungal Eradication Method',
        description: 'Penetrating deep into the nail bed matrix.',
        steps: [
          {
            stepNumber: '01',
            title: 'Nail Clipping KOH Test',
            description: 'Verifying fungal hyphae species.'
          },
          {
            stepNumber: '02',
            title: 'Pulse Oral Antifungal Regimen',
            description: 'Prescribing safe pulse doses monitored for liver health.'
          },
          {
            stepNumber: '03',
            title: 'Medical Penetrating Lacquer',
            description: 'Applying Amorolfine 5% lacquer to seal nail plate.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How long does it take for a fungal toenail to regrow completely healthy?',
          answer: 'Toenails grow slowly. It takes 9 to 12 months for a completely fresh, clear toenail to replace the damaged fungal nail.'
        }
      ]}
    />
  );
}
