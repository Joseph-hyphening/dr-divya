import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Resurfacing & Rejuvenation Bangalore | Dr. Divya Sharma Clinic',
  description: 'Fractional laser skin resurfacing in Whitefield Bangalore for smooth skin texture, fine line reduction, enlarged pores, and youthful glow.',
};

export default function SkinResurfacingPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Fractional Thermal Resurfacing',
        title: 'Skin Resurfacing & Texture Renewal',
        hookSubtitle: 'Renew Rough Skin Texture, Open Pores & Aging Lines with Precision Micro-Laser Energy',
        description: 'Remove micro-layers of damaged skin while stimulating deep neocollagenesis to unveil noticeably smoother, firmer, and refined skin.',
        treatmentName: 'Skin Resurfacing Consultation',
        keyBenefits: [
          'Smooths Rough & Bumpy Skin Texture',
          'Tightens Open Pores & Fine Lines',
          'Boosts Natural Skin Elasticity',
          'Precision US-FDA Laser Device'
        ]
      }}
      overview={{
        title: 'Complete Texture & Youth Renewal',
        paragraphs: [
          'Environmental pollution, UV rays, and aging slow down cellular turnover, leading to dullness, enlarged pores, and rough texture.',
          'Fractional resurfacing creates microscopic thermal columns that trigger skin cell regeneration, shedding old damaged cells and revealing fresh new skin.'
        ],
        causesOrSymptomsTitle: 'Ideal For Patients With',
        causesOrSymptoms: [
          'Coarse or uneven skin texture',
          'Enlarged pores on nose and cheeks',
          'Early fine lines & sun damage',
          'Post-inflammatory rough patches'
        ]
      }}
      approach={{
        title: 'Resurfacing Step-by-Step',
        description: 'Controlled micro-treatment for skin transformation.',
        steps: [
          {
            stepNumber: '01',
            title: 'Topical Numbing',
            description: 'Ensuring maximum comfort with medical numbing cream.'
          },
          {
            stepNumber: '02',
            title: 'Fractional Grid Pass',
            description: 'Scanning micro-laser beams with exact depth control.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Recovery',
            description: 'Applying epidermal repair balm and soothing zinc sun protection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the recovery time for skin resurfacing?',
          answer: 'Mild redness and micro-crusting typically resolve in 3 to 5 days, leaving behind smoother, refreshed skin.'
        }
      ]}
    />
  );
}
