import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hormonal Period Pimples & PCOS Acne | Dr. Divya Sharma Bangalore',
  description: 'Learn why pimples flare near menstrual cycles and whether jawline breakouts indicate hormonal imbalance or PCOS in Whitefield Bangalore.',
};

export default function HormonalPimplesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Hormonal Acne & PCOS Dermatology',
        title: 'Do Period Pimples Signal Hormonal Imbalance?',
        hookSubtitle: 'Understand Jawline Breakouts, Progesterone Spikes & PCOS Acne Solutions',
        description: 'Discover why painful chin and jawline pimples appear 7-10 days before your period and how medical dermatological care can balance skin sebum.',
        treatmentName: 'Hormonal Acne Consultation',
        keyBenefits: [
          'Evaluates PCOS & Androgen Triggers',
          'Targeted Jawline Breakout Clearance',
          'Spironolactone & Anti-Androgen Advice',
          'Prevents Deep Cystic Scarring'
        ]
      }}
      overview={{
        title: 'The Hormonal Connection to Pre-Menstrual Acne',
        paragraphs: [
          'During the luteal phase (7-10 days prior to menstruation), estrogen levels drop while progesterone and androgen activity peak.',
          'Androgens stimulate sebaceous glands on the lower third of the face (chin, jawline, neck), leading to deep, tender cystic pimples.',
          'Dr. Divya Sharma provides targeted anti-androgen topicals, hormonal lab evaluations, and non-comedogenic care.'
        ],
        causesOrSymptomsTitle: 'Signs of Hormonal Acne',
        causesOrSymptoms: [
          'Deep tender cysts located on chin and jawline',
          'Breakouts recurring predictably before period onset',
          'Associated irregular periods, facial hair, or hair thinning (PCOS)'
        ]
      }}
      approach={{
        title: 'Our Hormonal Acne Protocol',
        description: 'Internal balance and targeted topical clearance.',
        steps: [
          {
            stepNumber: '01',
            title: 'Hormonal Panel Check',
            description: 'Checking free testosterone, DHEAS, and LH/FSH ratio.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Anti-Sebum Topicals',
            description: 'Prescribing adapalene, azelaic acid, or spironolactone.'
          },
          {
            stepNumber: '03',
            title: 'Luteal Phase Care Plan',
            description: 'Modifying skincare 1 week before period onset.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are occasional pre-menstrual pimples normal?',
          answer: 'Yes! 1-2 mild pimples before periods are common due to normal progesterone shifts. However, painful deep cysts or persistent jawline clusters warrant clinical evaluation.'
        }
      ]}
    />
  );
}
