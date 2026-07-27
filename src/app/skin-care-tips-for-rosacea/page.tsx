import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Rosacea Skin Care Tips & Treatment Bangalore | Dr. Divya Sharma',
  description: 'Dermatologist tips for managing facial rosacea, flushing, burning redness, and spider veins in Whitefield Bangalore.',
};

export default function RosaceaTipsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Facial Rosacea & Sensitivity Care',
        title: 'Skin Care Tips & Management for Rosacea',
        hookSubtitle: 'Calm Facial Flushing, Redness, Burning & Visible Capillaries',
        description: 'Understand rosacea triggers, heat/spicy food flushing, and modern laser photorejuvenation to keep facial redness under control.',
        treatmentName: 'Rosacea Consultation',
        keyBenefits: [
          'Calms Facial Flushing & Heat Sensation',
          'IPL Light & Vascular Laser Therapy',
          'Anti-Redness Barrier Prescriptions',
          'Customized Trigger Avoidance Plan'
        ]
      }}
      overview={{
        title: 'Understanding Rosacea Triggers & Skincare',
        paragraphs: [
          'Rosacea is a chronic vascular skin condition characterized by facial flushing, persistent cheek redness, visible spider veins, and small red bumps.',
          'Dr. Divya Sharma guides patients on avoiding vasodilation triggers (spicy food, hot beverages, sunlight, alcohol) while prescribing soothing azelaic acid and vascular light therapies.'
        ],
        causesOrSymptomsTitle: 'Common Rosacea Triggers',
        causesOrSymptoms: [
          'Sunlight UV & extreme temperature shifts',
          'Spicy foods, hot tea/coffee, and alcohol',
          'Harsh physical exfoliants & alcohol-based toners',
          'Stress & strenuous physical exercise'
        ]
      }}
      approach={{
        title: 'Our Rosacea Management Plan',
        description: 'Soothing redness and shielding blood vessels.',
        steps: [
          {
            stepNumber: '01',
            title: 'Trigger Mapping',
            description: 'Identifying personal vascular flush triggers.'
          },
          {
            stepNumber: '02',
            title: 'Azelaic & Metronidazole Topicals',
            description: 'Calming papulopustular rosacea redness.'
          },
          {
            stepNumber: '03',
            title: 'Vascular IPL / Laser',
            description: 'Coagulating broken facial capillaries for clear skin.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can rosacea be cured permanently?',
          answer: 'Rosacea is a manageable condition. With proper vascular laser care and trigger avoidance, patients can enjoy smooth, calm, flush-free skin.'
        }
      ]}
    />
  );
}
