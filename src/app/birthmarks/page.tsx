import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Birthmark Evaluation & Laser Treatment Bangalore | Dr. Divya Sharma',
  description: 'Clinical evaluation and laser treatment for pigmented & vascular birthmarks, port-wine stains, and hemangiomas in Whitefield Bangalore.',
};

export default function BirthmarksPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Birthmark Assessment & Laser Care',
        title: 'Pigmented & Vascular Birthmark Management',
        hookSubtitle: 'Safe, Specialized Laser & Dermatological Evaluation for Children and Adults',
        description: 'Evaluate and treat vascular birthmarks (port-wine stains, hemangiomas) and pigmented birthmarks (Nevus of Ota, cafe-au-lait spots) safely with advanced laser technology.',
        treatmentName: 'Birthmark Evaluation Consultation',
        keyBenefits: [
          'Dermatological Dermoscopy Mapping',
          'Safe Laser Fading Protocols',
          'Pediatric & Adult Birthmark Care',
          'Minimizes Skin Discoloration'
        ]
      }}
      overview={{
        title: 'Types & Causes of Birthmarks',
        paragraphs: [
          'Birthmarks are benign skin discolorations present at birth or developing shortly after. They are categorized into pigmented birthmarks (overgrowth of pigment cells) and vascular birthmarks (overgrowth of blood vessels).',
          'Dr. Divya Sharma performs careful dermoscopic evaluation to rule out abnormal growth before recommending safe laser fading or clinical monitoring.'
        ],
        causesOrSymptomsTitle: 'Birthmarks We Evaluate',
        causesOrSymptoms: [
          'Port-Wine Stains & Vascular Lesions',
          'Strawberry Hemangiomas in Infants',
          'Nevus of Ota & Dermal Melanocytosis',
          'Cafe-au-lait Pigmented Macules'
        ]
      }}
      approach={{
        title: 'Our Birthmark Management Workflow',
        description: 'Accurate clinical diagnosis and safe intervention.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Examination',
            description: 'Analyzing vascular density or melanin depth.'
          },
          {
            stepNumber: '02',
            title: 'Laser / Medical Protocol',
            description: 'Targeted Q-switched or pulse dye laser sessions to fade marks.'
          },
          {
            stepNumber: '03',
            title: 'Periodic Monitoring',
            description: 'Tracking child growth and skin pigment stabilization.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can birthmarks be faded safely in young children?',
          answer: 'Yes, early evaluation is ideal for vascular lesions. Treatments are calibrated gently for delicate pediatric skin.'
        }
      ]}
    />
  );
}
