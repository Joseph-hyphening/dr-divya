import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Infant & Baby Skin Care Guidance Bangalore | Dr. Divya Sharma Clinic',
  description: 'Specialized newborn & infant skin care guidance by Pediatric Dermatologist Dr. Divya Sharma in Whitefield Bangalore. Safe barrier creams & bathing protocols.',
};

export default function BabySkinCarePage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Pediatric Dermatology Specialization',
        title: 'Newborn & Infant Skin Care Guidance',
        hookSubtitle: 'Protect Your Baby’s Delicate Skin Barrier with Gentle, Steroid-Conscious Medical Care',
        description: 'Newborn skin is ultra-delicate and prone to dryness, chafing, and rashes. Get pediatrician-approved skincare regimens and gentle rash relief from Dr. Divya Sharma.',
        treatmentName: 'Baby Skin Care Consultation',
        keyBenefits: [
          'Pediatrician & Dermatologist Approved',
          'Hypoallergenic Cleanser & Moisturizer Advice',
          'Relief from Dryness, Flaking & Chafing',
          'Steroid-Conscious Safe Prescriptions'
        ]
      }}
      overview={{
        title: 'Essential Care for Delicate Infant Skin',
        paragraphs: [
          'Infant skin absorbs chemicals faster and loses moisture 5x quicker than adult skin. Avoiding heavily fragranced soaps and harsh bubble baths is critical during the first year.',
          'Dr. Divya Sharma provides parents with practical, evidence-based guidance on bathing frequency, lipid barrier moisturizers, massage oils, and sun protection.'
        ],
        causesOrSymptomsTitle: 'Key Infant Skin Topics',
        causesOrSymptoms: [
          'Bathing water temperature & cleanser selection',
          'Preventing infant dry skin & eczema flares',
          'Choosing safe plant-based massage oils',
          'Managing baby acne & newborn skin peeling'
        ]
      }}
      approach={{
        title: 'Our Infant Care Framework',
        description: 'Simple, gentle steps for healthy baby skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Skin Barrier Assessment',
            description: 'Checking infant skin hydration and sensitivity.'
          },
          {
            stepNumber: '02',
            title: 'Safe Product Prescription',
            description: 'Recommending soap-free, fragrance-free cleansers.'
          },
          {
            stepNumber: '03',
            title: 'Parent Routine Coaching',
            description: 'Guiding 3-minute soak-and-seal moisturizing routine.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are natural oils like mustard or coconut oil safe for baby massage?',
          answer: 'Pure coconut oil is gentle, but mustard or unrefined nut oils can disrupt the infant skin barrier and trigger eczema. Dr. Divya recommends pediatrician-tested ceramide lotions or pure coconut oil.'
        }
      ]}
    />
  );
}
