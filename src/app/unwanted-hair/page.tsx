import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Laser Hair Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Painless US-FDA triple-wavelength laser hair reduction for face, underarms, legs, bikini & body in Whitefield Bangalore for women and men.',
};

export default function LaserHairRemovalPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'US-FDA Triple-Wavelength Laser Hair Reduction',
        title: 'Permanent Laser Hair Reduction',
        hookSubtitle: 'Say Goodbye to Waxing, Shaving & In-grown Hairs with Pain-Free Cooling Technology',
        description: 'Achieve smooth, hair-free skin safely with medical-grade laser hair reduction technology designed for Indian skin types.',
        treatmentName: 'Laser Hair Removal Consultation',
        keyBenefits: [
          '80-95% Permanent Hair Density Reduction',
          'Painless Contact Chill Technology',
          'Treats Facial, Body & Sensitive Areas',
          'Eliminates Painful In-Grown Hairs'
        ]
      }}
      overview={{
        title: 'How Medical Laser Hair Reduction Works',
        paragraphs: [
          'Laser hair reduction emits light pulses absorbed by the melanin in active hair follicles. The light converts to thermal energy, destroying the hair matrix while leaving surrounding skin unharmed.',
          'Since hair grows in cycles (Anagen, Catagen, Telogen), multiple sessions target follicles as they enter their active growth stage.'
        ],
        causesOrSymptomsTitle: 'Popular Treatment Zones',
        causesOrSymptoms: [
          'Facial Hair (Upper lip, chin, sideburns, jawline)',
          'Underarms & Arms',
          'Legs & Bikini / Hollywood Area',
          'Male Chest, Back & Beard Shaping'
        ]
      }}
      approach={{
        title: 'Laser Hair Reduction Sessions',
        description: 'Smooth, painless procedure with instant skin cooling.',
        steps: [
          {
            stepNumber: '01',
            title: 'Area Shaving & Marking',
            description: 'Trimming hair flush to skin so laser energy reaches roots.'
          },
          {
            stepNumber: '02',
            title: 'Chilled Gel & Laser Gliding',
            description: 'Gliding contact cooling handpiece smoothly over treatment zone.'
          },
          {
            stepNumber: '03',
            title: 'Aloe Soothing',
            description: 'Applying soothing aloe gel and SPF protection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is laser hair removal permanent?',
          answer: 'Laser hair removal provides long-term hair reduction of up to 90%. Any fine regrowth that occurs is sparse, slow, and easily maintained.'
        }
      ]}
    />
  );
}
