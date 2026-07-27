import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Psoriasis Treatment & Management Bangalore | Dr. Divya Sharma',
  description: 'Comprehensive medical management for plaque psoriasis, scalp psoriasis, and guttate psoriasis in Whitefield Bangalore by Dr. Divya Sharma.',
};

export default function PsoriasisTreatmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Psoriasis & Immune Dermatology',
        title: 'Psoriasis Management & Plaque Relief',
        hookSubtitle: 'Clear Silver-Scaled Plaques, Relieve Itching & Achieve Long-Term Disease Remission',
        description: 'Comprehensive clinical care for plaque, scalp, and palmoplantar psoriasis combining topical immunomodulators, phototherapy guidance, and targeted biologics.',
        treatmentName: 'Psoriasis Consultation',
        keyBenefits: [
          'Clears Thick Silvery Scaly Plaques',
          'Scalp Psoriasis Relief Protocols',
          'Steroid-Sparing Biological Guidance',
          'Improves Quality of Life & Comfort'
        ]
      }}
      overview={{
        title: 'Understanding Autoimmune Psoriasis',
        paragraphs: [
          'Psoriasis is a chronic autoimmune disease that speeds up skin cell turnover from 28 days to just 3-4 days, causing thick, red, scaly plaques to build up on elbows, knees, and scalp.',
          'Dr. Divya Sharma offers modern systemic, biological, and topical treatments that calm hyperactive immune responses without compromising long-term organ health.'
        ],
        causesOrSymptomsTitle: 'Psoriasis Variants We Treat',
        causesOrSymptoms: [
          'Plaque Psoriasis (Thick silver-scaled red patches)',
          'Scalp Psoriasis (Dense flaking mistaken for dandruff)',
          'Guttate Psoriasis (Small teardrop spots after throat infection)',
          'Palmoplantar Psoriasis (Painful hand & foot cracking)'
        ]
      }}
      approach={{
        title: 'Our Psoriasis Care Approach',
        description: 'Multi-layered strategy for complete skin clearance.',
        steps: [
          {
            stepNumber: '01',
            title: 'PASI Severity Scoring',
            description: 'Measuring skin area percentage and plaque thickness.'
          },
          {
            stepNumber: '02',
            title: 'Immune Regulation Therapy',
            description: 'Prescribing targeted topicals, oral agents, or biologics.'
          },
          {
            stepNumber: '03',
            title: 'Lifestyle & Barrier Maintenance',
            description: 'Dietary counseling, stress reduction, and intense emollient care.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can psoriasis be managed effectively?',
          answer: 'Yes! Modern targeted therapies allow patients to achieve near-100% skin clearance and enjoy long periods of disease remission.'
        }
      ]}
    />
  );
}
