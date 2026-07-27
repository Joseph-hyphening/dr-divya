import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Tag Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Painless Radiofrequency (RF) skin tag removal in Whitefield Bangalore for neck, underarms, and eyelids with zero scar risk.',
};

export default function SkinTagsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Precision Radiofrequency (RF) Ablation',
        title: 'Skin Tag (Acrochordon) Removal',
        hookSubtitle: 'Painless Instant Removal of Neck, Underarm & Eyelid Skin Tags',
        description: 'Snagged by jewelry or clothing? Remove unsightly skin tags, acrochordons, and neck growths cleanly in a single painless 20-minute session.',
        treatmentName: 'Skin Tag Removal Consultation',
        keyBenefits: [
          'Instant Painless RF Removal',
          'Zero Bleeding & Rapid Healing',
          'Safe for Sensitive Neck & Eyelids',
          'Single Session Solution'
        ]
      }}
      overview={{
        title: 'Why Skin Tags Form',
        paragraphs: [
          'Skin tags (acrochordons) are harmless soft growths that develop in friction folds like the neck, armpits, groin, and under breasts. They are often associated with insulin resistance, pregnancy, or genetic predisposition.',
          'Dr. Divya Sharma utilizes fine radiofrequency cautery under topical numbing cream to snip and seal skin tags instantly without bleeding.'
        ],
        causesOrSymptomsTitle: 'Common Skin Tag Areas',
        causesOrSymptoms: [
          'Neck Folds & Collarline',
          'Underarms & Armpit creases',
          'Eyelids & Periorbital region',
          'Under Breasts & Groin Folds'
        ]
      }}
      approach={{
        title: 'RF Removal Step-by-Step',
        description: 'Quick, safe outpatient removal.',
        steps: [
          {
            stepNumber: '01',
            title: 'Topical Numbing Cream',
            description: 'Applied to target area for 20 minutes.'
          },
          {
            stepNumber: '02',
            title: 'Precision Micro-RF Snip',
            description: 'Sealing tag stalk instantly with zero blood.'
          },
          {
            stepNumber: '03',
            title: 'Antiseptic Ointment',
            description: 'Small microscopic crust falls off in 3-5 days cleanly.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Do skin tags multiply if you cut them off?',
          answer: 'No, that is a common myth. Removing a skin tag will not cause more to grow. However, new ones may form elsewhere if friction or insulin resistance persists.'
        }
      ]}
    />
  );
}
