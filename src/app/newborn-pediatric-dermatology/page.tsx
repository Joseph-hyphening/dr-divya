import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Pediatric & Newborn Dermatology | Dr. Divya Sharma Bangalore',
  description: 'Gentle, expert dermatological care for infants, babies & children: diaper rash, cradle cap, eczema, birthmarks, and viral rashes in Whitefield Bangalore.',
};

export default function PediatricDermatologyPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Specialized Pediatric Dermatology Care',
        title: 'Gentle Skin Care for Babies & Children',
        hookSubtitle: 'Compassionate, Ultra-Safe Clinical Relief for Diaper Rash, Eczema & Infant Skin Rashes',
        description: 'Newborn and pediatric skin requires delicate, expert care. Dr. Divya Sharma provides gentle, steroid-conscious treatments tailored specifically for growing infants.',
        treatmentName: 'Pediatric Skin Consultation',
        keyBenefits: [
          'Gentle Steroid-Conscious Therapies',
          'Fast Relief from Baby Rashes & Itching',
          'Cradle Cap & Diaper Rash Experts',
          'Parent-Friendly Hygiene Guidance'
        ]
      }}
      overview={{
        title: 'Protecting Your Baby’s Fragile Skin Barrier',
        paragraphs: [
          'An infant’s skin is 30% thinner than adult skin, making it highly sensitive to moisture, friction, harsh chemicals, and environmental allergens.',
          'Dr. Divya Sharma specializes in pediatric dermatology, offering parents clear diagnostic answers and soothing, safe care regimens for common and complex childhood skin issues.'
        ],
        causesOrSymptomsTitle: 'Common Pediatric Conditions Treated',
        causesOrSymptoms: [
          'Diaper Rash & Severe Friction Dermatitis',
          'Cradle Cap (Infant Seborrheic Dermatitis)',
          'Atopic Eczema & Sensitive Baby Dryness',
          'Molluscum Contagiosum & Viral Bumps',
          'Vascular Birthmarks & Hemangiomas'
        ]
      }}
      approach={{
        title: 'Our Gentle Pediatric Care Approach',
        description: 'Designed to keep your baby calm, comfortable, and itch-free.',
        steps: [
          {
            stepNumber: '01',
            title: 'Gentle Examination',
            description: 'Non-stressful physical check-up tailored to infants and young children.'
          },
          {
            stepNumber: '02',
            title: 'Safe Formula Prescription',
            description: 'Prescribing pediatrician-approved, hypoallergenic cleansers and barrier creams.'
          },
          {
            stepNumber: '03',
            title: 'Parental Guidance',
            description: 'Practical tips on bathing frequency, diaper changing hygiene, and cloth choice.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are creams prescribed for babies safe?',
          answer: 'Yes. Dr. Divya prescribes non-irritating, pediatrician-tested barrier creams and mild topicals calibrated strictly for infant age and weight.'
        }
      ]}
    />
  );
}
