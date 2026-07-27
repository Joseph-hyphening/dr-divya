import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Discoloration & Color Issues Bangalore | Dr. Divya Sharma',
  description: 'Clinical management for hyperpigmentation, hypopigmentation, Acanthosis Nigricans & uneven skin tone in Whitefield Bangalore.',
};

export default function SkinColourIssuesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Pigment Balance & Melanocyte Care',
        title: 'Skin Discoloration & Color Issues',
        hookSubtitle: 'Balance Uneven Skin Tone, Darkened Neck Folds & Pigment Patches Safely',
        description: 'Comprehensive dermatological evaluation for hyper-pigmentation, hypo-pigmentation, and insulin-resistance dark patches (Acanthosis Nigricans).',
        treatmentName: 'Skin Discoloration Consultation',
        keyBenefits: [
          'Treats Darkened Neck & Armpit Folds',
          'Evens Out Patchy Complexion',
          'Dermoscopic Pigment Evaluation',
          'Internal Metabolic Trigger Check'
        ]
      }}
      overview={{
        title: 'Understanding Skin Pigment Variations',
        paragraphs: [
          'Skin color changes can stem from overactive melanocytes (hyperpigmentation), loss of pigment cells (hypopigmentation/vitiligo), or metabolic conditions like insulin resistance causing velvety dark neck skin (Acanthosis Nigricans).',
          'Dr. Divya Sharma evaluates both internal metabolic factors and external UV triggers to restore harmonious skin tone.'
        ],
        causesOrSymptomsTitle: 'Common Color Concerns',
        causesOrSymptoms: [
          'Acanthosis Nigricans (Velvety dark neck & underarm skin)',
          'Post-Inflammatory Hyperpigmentation (PIH)',
          'Sun Tan & Uneven Arm/Face Toning',
          'Macular Amyloidosis (Rippled dark patches)'
        ]
      }}
      approach={{
        title: 'Our Pigment Balancing Routine',
        description: 'Addressing metabolic and surface pigment causes.',
        steps: [
          {
            stepNumber: '01',
            title: 'Metabolic & Skin Assessment',
            description: 'Checking HbA1c, thyroid, and skin melanin levels.'
          },
          {
            stepNumber: '02',
            title: 'Laser Toning & Keratolytic Peels',
            description: 'Gentle pigment shattering and skin smoothing.'
          },
          {
            stepNumber: '03',
            title: 'Long-Term Tone Maintenance',
            description: 'Custom sun protection and barrier lightening creams.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can dark velvety skin on the neck be lightened?',
          answer: 'Yes! Acanthosis Nigricans responds well to weight/insulin management combined with clinical keratolytic peels prescribed by Dr. Divya.'
        }
      ]}
    />
  );
}
