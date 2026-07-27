import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Stretch Marks Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Advanced stretch mark removal in Whitefield Bangalore using Fractional CO2 laser, Microneedling RF, and collagen rebuilding therapies.',
};

export default function StretchMarksPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Dermal Elasticity & Collagen Reconstruction',
        title: 'Stretch Marks Reduction Therapy',
        hookSubtitle: 'Fade Red & White Stretch Marks with Fractional Laser & RF Microneedling Science',
        description: 'Smooth pubertal, weight-change, or post-pregnancy striae (stretch marks) by triggering deep dermal collagen remodeling with advanced energy devices.',
        treatmentName: 'Stretch Marks Treatment Consultation',
        keyBenefits: [
          'Fades Red (Striae Rubra) & White (Striae Alba) Marks',
          'Tightens Lax Skin Surrounding Stretch Marks',
          'Stimulates Dermal Elastin & Collagen Production',
          'Safe for Abdomen, Thighs, Hips & Arms'
        ]
      }}
      overview={{
        title: 'Understanding Stretch Mark Remodeling',
        paragraphs: [
          'Stretch marks occur when rapid expansion ruptures middle skin (dermal) collagen fibers, leaving behind sunken or discolored linear scars.',
          'Dr. Divya Sharma utilizes Fractional CO2 laser energy combined with Microneedling RF to penetrate deep into the dermal matrix, stimulating fresh collagen to bridge and blend the stretch mark seams with healthy surrounding skin.'
        ],
        causesOrSymptomsTitle: 'Common Triggers for Stretch Marks',
        causesOrSymptoms: [
          'Pregnancy & Postpartum Skin Expansion',
          'Rapid Weight Gain or Loss',
          'Pubertal Growth Spurt Changes',
          'Bodybuilding & Muscle Mass Growth'
        ]
      }}
      approach={{
        title: 'Our Stretch Mark Treatment Protocol',
        description: 'Gradual, visible texture flattening over 4-6 sessions.',
        steps: [
          {
            stepNumber: '01',
            title: 'Topical Numbing Cream',
            description: '30-minute anesthetic application for client comfort.'
          },
          {
            stepNumber: '02',
            title: 'Fractional Thermal Pass',
            description: 'Delivering micro-laser grid patterns directly into stretch mark channels.'
          },
          {
            stepNumber: '03',
            title: 'Collagen Stimulating Topicals',
            description: 'Infusing peptide & retinoid barrier balms to accelerate healing.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are old white stretch marks treatable?',
          answer: 'Yes! While newer red stretch marks respond faster, old white stretch marks show significant texture flattening and blending over 4 to 6 sessions of combination laser therapy.'
        }
      ]}
    />
  );
}
