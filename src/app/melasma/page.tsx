import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Melasma & Pigmentation Treatment Bangalore | Dr. Divya Sharma',
  description: 'Specialized hormonal melasma management in Whitefield Bangalore: Q-Switched Laser Toning, Tranexamic peels, and pigment suppression.',
};

export default function MelasmaPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Melasma Management Specialization',
        title: 'Hormonal Melasma & Chloasma Control',
        hookSubtitle: 'Control Deep Butterfly Facial Pigment with Targeted Laser Toning & Peels',
        description: 'Manage stubborn brown patches on cheeks, nose, and forehead caused by hormonal changes, UV exposure, and vascular hyper-reactivity.',
        treatmentName: 'Melasma Consultation',
        keyBenefits: [
          'Dual Dermal & Epidermal Melasma Care',
          'Tranexamic Acid & Glutathione Peels',
          'Low-Fluence Q-Switched Laser Toning',
          'Prevents Rebound Hyperpigmentation'
        ]
      }}
      overview={{
        title: 'Understanding Hormonal Melasma',
        paragraphs: [
          'Melasma is a complex skin condition where melanocytes produce excess pigment in response to estrogen/progesterone fluctuations (pregnancy, oral contraceptives) and UV/HEV light.',
          'Harsh treatments can worsen melasma. Dr. Divya Sharma utilizes ultra-gentle laser toning combined with topical tyrosinase blockers and oral vascular stabilizers for lasting clearance.'
        ],
        causesOrSymptomsTitle: 'Common Melasma Patterns',
        causesOrSymptoms: [
          'Centrofacial pattern (Cheeks, nose, upper lip, forehead)',
          'Malar pattern (Pigment patches restricted to cheeks)',
          'Mandibular pattern (Pigment along jawline)'
        ]
      }}
      approach={{
        title: 'Our Melasma Management Framework',
        description: 'Gentle, continuous pigment suppression.',
        steps: [
          {
            stepNumber: '01',
            title: 'Wood’s Lamp Assessment',
            description: 'Determining depth (epidermal, dermal, or mixed melasma).'
          },
          {
            stepNumber: '02',
            title: 'Laser Toning & Peel Pass',
            description: 'Ultra-gentle laser passes to fragment pigment without heat buildup.'
          },
          {
            stepNumber: '03',
            title: 'Broad-Spectrum Sun Protection',
            description: 'Customizing mineral SPF with tinted iron oxides for blue light protection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Why does melasma return after sun exposure?',
          answer: 'Melanocytes in melasma-prone skin remain hyper-sensitive to UV and heat. Consistent use of broad-spectrum SPF with tinted iron oxide prevents pigment recurrence.'
        }
      ]}
    />
  );
}
