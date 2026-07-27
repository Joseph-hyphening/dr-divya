import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Topical Steroid Withdrawal & Abuse Care Bangalore | Dr. Divya Sharma',
  description: 'Specialized management for Topical Steroid Damaged/Addicted Skin (TSDF/TSW), facial redness & thin skin in Whitefield Bangalore.',
};

export default function TopicalSteroidsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Steroid Abuse & TSW Recovery Care',
        title: 'Topical Steroid Withdrawal & Damage Recovery',
        hookSubtitle: 'Heal Steroid-Damaged Thin Facial Skin, Redness & Steroid Acne Safely',
        description: 'Rebuild skin barrier damaged by long-term over-the-counter fairness cream use or steroid abuse. Expert tapering and non-steroidal recovery protocols.',
        treatmentName: 'Topical Steroid Damage Consultation',
        keyBenefits: [
          'Safe Tapering off Steroid Creams',
          'Calms Burning Redness & Sensitivity',
          'Heals Thinning & Visible Capillaries',
          'Rebuilds Natural Skin Lipid Barrier'
        ]
      }}
      overview={{
        title: 'Understanding Topical Steroid Damaged Skin',
        paragraphs: [
          'Over-the-counter fairness and itch creams often contain potent corticosteroids. Prolonged unmonitored use causes Topical Steroid Damaged Face (TSDF), leading to paper-thin skin, severe rebound redness, burning, photosensitivity, and excessive facial hair.',
          'Dr. Divya Sharma is a recognized expert in steroid withdrawal management, guiding patients through safe, gradual tapering and non-steroidal skin barrier restoration.'
        ],
        causesOrSymptomsTitle: 'Signs of Steroid Skin Damage',
        causesOrSymptoms: [
          'Severe rebound redness & burning when stopping cream',
          'Visible fine red blood vessels (Telangiectasia)',
          'Skin thinning (Atrophy) & easy bruising',
          'Steroid-induced acne pustules across cheeks'
        ]
      }}
      approach={{
        title: 'Our Steroid Recovery Protocol',
        description: 'Gentle, structured rehabilitation for damaged skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Controlled Tapering Strategy',
            description: 'Gradually weaning skin off steroids to prevent massive rebound flares.'
          },
          {
            stepNumber: '02',
            title: 'Non-Steroidal Calming Therapy',
            description: 'Prescribing TCIs, ceramides, and LED red light healing.'
          },
          {
            stepNumber: '03',
            title: 'Long-Term Barrier Repair',
            description: 'Restoring natural stratum corneum thickness and immunity.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can steroid-damaged skin recover completely?',
          answer: 'Yes! With patient compliance, gradual tapering, and strict barrier repair guidance, damaged skin can recover its normal thickness, tone, and resilience.'
        }
      ]}
    />
  );
}
