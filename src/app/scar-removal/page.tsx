import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Acne Scar Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Fractional CO2 Laser & RF Microneedling scar removal in Whitefield Bangalore. Reduce ice-pick, boxcar, and surgical scars safely.',
};

export default function ScarRemovalPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Advanced Collagen Remodeling',
        title: 'Acne Scar & Surgical Scar Reduction',
        hookSubtitle: 'Smooth Pitted Scars & Restore Even Skin Texture with Fractional CO2 & RF Microneedling',
        description: 'Rebuild collagen beneath depressed scars. Dr. Divya Sharma utilizes combination therapies—Fractional CO2 laser, Subcision, and Microneedling RF—for maximum scar depth reduction.',
        treatmentName: 'Scar Removal Consultation',
        keyBenefits: [
          'Effective on Ice-Pick, Boxcar & Rolling Scars',
          'Stimulates Natural Dermal Collagen Rebuild',
          'Combination Protocol for Faster Results',
          'Safe Protocols for Indian Skin Tones'
        ]
      }}
      overview={{
        title: 'Multi-Dimensional Scar Treatment Science',
        paragraphs: [
          'Scars form when deep inflammation destroys collagen fibers and anchors skin downward. Surface topicals alone cannot reach deep scar tissue.',
          'Dr. Divya Sharma uses subcision to release fibrous bands underneath the scar, followed by Fractional laser resurfacing to trigger fresh collagen synthesis and smooth out depressions.'
        ],
        causesOrSymptomsTitle: 'Types of Scars We Treat',
        causesOrSymptoms: [
          'Rolling Scars (Wave-like depressions)',
          'Boxcar Scars (Sharp-edged pits)',
          'Ice-Pick Scars (Deep narrow punctures)',
          'Post-Surgical & Trauma Scars'
        ]
      }}
      approach={{
        title: 'Our Scar Revision Protocol',
        description: 'Targeting deep scar tethering and surface texture.',
        steps: [
          {
            stepNumber: '01',
            title: 'Numbing & Comfort',
            description: 'Topical anesthetic cream applied for 30 minutes for a pain-free procedure.'
          },
          {
            stepNumber: '02',
            title: 'Subcision & Laser Pass',
            description: 'Releasing tethered bands and creating micro-thermal collagen zones.'
          },
          {
            stepNumber: '03',
            title: 'Growth Factor Infusion',
            description: 'Applying healing growth factors to accelerate dermal repair.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can acne scars be 100% removed?',
          answer: 'While complete erasure depends on scar type, combination protocols typically achieve 60% to 85% scar depth improvement and significantly smoother skin texture.'
        }
      ]}
    />
  );
}
