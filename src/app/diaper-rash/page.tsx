import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Diaper Rash Treatment & Prevention Bangalore | Dr. Divya Sharma',
  description: 'Fast relief & prevention for stubborn infant diaper rash, yeast infection & friction redness in Whitefield Bangalore by Dr. Divya Sharma.',
};

export default function DiaperRashPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Infant Diaper Area Specialization',
        title: 'Diaper Rash Treatment & Prevention',
        hookSubtitle: 'Fast Soothing Relief for Red, Raw Diaper Area Skin & Yeast Infections',
        description: 'Stop the distress of painful diaper rashes. Clear severe redness, chafing, and Candida yeast overgrowth with medical zinc barrier pastes and gentle care routines.',
        treatmentName: 'Diaper Rash Consultation',
        keyBenefits: [
          'Immediate Relief from Raw Burning Skin',
          'Differentiates Friction vs Candida Yeast Rash',
          'High-Potency Zinc Oxide Barrier Pastes',
          'Parent Prevention & Diaper Hygiene Guide'
        ]
      }}
      overview={{
        title: 'Understanding Diaper Rash Triggers',
        paragraphs: [
          'Diaper rash is caused by prolonged contact with urine/feces, friction from tight diapers, or Candida yeast overgrowth in warm moisture folds.',
          'Dr. Divya Sharma provides immediate barrier repair pastes and antifungal care when needed, restoring your baby’s skin comfort within 24-48 hours.'
        ],
        causesOrSymptomsTitle: 'Types of Diaper Rash',
        causesOrSymptoms: [
          'Irritant Contact Rash (Bright red skin on buttocks & thighs)',
          'Candida Yeast Infection (Deep red rash with satellite pustules)',
          'Chafing Rash (Friction lines along elastic leg cuffs)'
        ]
      }}
      approach={{
        title: 'Our Diaper Rash Healing System',
        description: 'Cleanse, shield, and dry.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Check',
            description: 'Checking for Candida yeast satellite spots.'
          },
          {
            stepNumber: '02',
            title: 'Thick Barrier Paste Application',
            description: 'Prescribing medical-grade zinc oxide barrier paste.'
          },
          {
            stepNumber: '03',
            title: 'Air-Time Protocol',
            description: 'Guiding diaper-free rest intervals for rapid skin drying.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How fast will a diaper rash heal with clinical care?',
          answer: 'With proper barrier pastes and diaper-free air time, mild to moderate diaper rashes resolve within 24 to 48 hours.'
        }
      ]}
    />
  );
}
