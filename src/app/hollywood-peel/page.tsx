import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hollywood Carbon Peel Facial Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Experience the celebrity-favorite Hollywood Carbon Laser Peel in Whitefield Bangalore for instant red-carpet glow, pore tightening, and skin rejuvenation.',
};

export default function HollywoodPeelPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Red Carpet Instant Radiance Laser Facial',
        title: 'Hollywood Carbon Laser Peel',
        hookSubtitle: 'Instant Red-Carpet Glow, Pore Reduction & Youthful Radiance with Zero Downtime',
        description: 'Loved by celebrities worldwide, the Hollywood Laser Peel combines liquid carbon lotion with Q-switched laser energy to deep clean pores, exfoliate dead skin, and boost collagen instantly.',
        treatmentName: 'Hollywood Carbon Laser Peel',
        keyBenefits: [
          'Instant Glow Before Special Events',
          'Tightens Enlarged Pores & Oiliness',
          'Smooths Skin Texture & Fine Lines',
          '100% Painless with Zero Recovery Downtime'
        ]
      }}
      overview={{
        title: 'The Ultimate Glow Facial Science',
        paragraphs: [
          'A medical-grade liquid carbon solution is applied to the face, penetrating deep into pores where it binds to oil, dirt, and dead cells.',
          'When targeted with Q-Switched laser energy, the carbon particles explode gently, vaporizing impurities and heating the dermal layer to stimulate collagen production for immediate radiance.'
        ],
        causesOrSymptomsTitle: 'Best For Patients Seeking',
        causesOrSymptoms: [
          'Quick glow before weddings, parties, or photo shoots',
          'Pore reduction & oil control for oily/combination skin',
          'Evening out skin tone & dullness',
          'Non-invasive anti-aging refresh'
        ]
      }}
      approach={{
        title: 'What Happens During Hollywood Peel',
        description: 'Relaxing 45-minute treatment process.',
        steps: [
          {
            stepNumber: '01',
            title: 'Carbon Lotion Application',
            description: 'Organic nano-carbon lotion applied to absorb deeply into skin pores.'
          },
          {
            stepNumber: '02',
            title: 'Q-Switched Laser Pass',
            description: 'Subtle laser pulses vaporize carbon, lifting impurities and tightening skin.'
          },
          {
            stepNumber: '03',
            title: 'Cooling Hydration Mask',
            description: 'Finished with a soothing hyaluronic mask for luminous hydra-glow.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is there any downtime after a Hollywood Laser Peel?',
          answer: 'None at all! You can immediately apply makeup or return to work with radiant, glowing skin.'
        }
      ]}
    />
  );
}
