import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Male Hair Loss Treatment Bangalore | Dr. Divya Sharma Hair Clinic',
  description: 'Specialized treatment for male pattern baldness, receding temples, and crown thinning in Whitefield Bangalore by Hair Expert Dr. Divya Sharma.',
};

export default function MaleHairLossPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Male Androgenetic Alopecia Specialization',
        title: 'Hair Loss Treatment for Men',
        hookSubtitle: 'Stop Receding Hairline & Restore Crown Density with DHT Blocker & GFC Therapy',
        description: 'Combat male pattern baldness early. Combine medical DHT blockers, Growth Factor Concentrate (GFC), and scalp micro-stimulation to preserve existing hair and regrow thinning areas.',
        treatmentName: 'Male Hair Loss Consultation',
        keyBenefits: [
          'Blocks Dihydrotestosterone (DHT) Damage',
          'Regrows Thinning Hair on Crown & Temple',
          'High-Purity GFC Growth Factor Sessions',
          'Prevents Need for Hair Transplant'
        ]
      }}
      overview={{
        title: 'Understanding Male Pattern Baldness',
        paragraphs: [
          'Male pattern baldness is triggered by genetic sensitivity of hair follicles to DHT (Dihydrotestosterone), causing hair follicles to shrink, produce progressively finer hair, and eventually close up.',
          'Early intervention by Dr. Divya Sharma halts follicle miniaturization and restores active growth before permanent loss occurs.'
        ],
        causesOrSymptomsTitle: 'Common Patterns in Men',
        causesOrSymptoms: [
          'Receding hairline forming an M-shape at temples',
          'Thinning hair patch on the crown/vertex',
          'Weak, translucent baby hair replacement',
          'Excess scalp oiliness accelerating shedding'
        ]
      }}
      approach={{
        title: 'Male Hair Regrowth Protocol',
        description: 'Targeted DHT suppression and follicle revitalization.',
        steps: [
          {
            stepNumber: '01',
            title: 'Trichoscopy Assessment',
            description: 'Measuring hair diameter miniaturization ratio across scalp.'
          },
          {
            stepNumber: '02',
            title: 'GFC & Mesotherapy',
            description: 'Direct scalp nutrient delivery for root strengthening.'
          },
          {
            stepNumber: '03',
            title: 'Medical DHT Management',
            description: 'Prescribing evidence-based topicals and oral blockers.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is male hair loss reversible without surgery?',
          answer: 'If treated during the thinning phase (before follicles scar over), non-surgical therapies like GFC, medical topicals, and peptides can effectively restore density.'
        }
      ]}
    />
  );
}
