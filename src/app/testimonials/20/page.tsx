import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Patient Reviews & Results | Dr. Divya Sharma Skin Clinic Bangalore',
  description: 'More patient success stories and clinic reviews for Dr. Divya Sharma, Gold Medalist Dermatologist in Whitefield Bangalore.',
};

export default function TestimonialsPage20() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Verified Patient Success Stories',
        title: 'Real Skin & Hair Transformations',
        hookSubtitle: 'Discover How Custom Clinical Care Restores Natural Skin Radiance & Hair Density',
        description: 'Read detailed patient experiences with laser skin resurfacing, anti-aging therapies, and medical dermatology.',
        treatmentName: 'Patient Consultation',
        keyBenefits: [
          '4.9/5 Star Clinical Excellence',
          'Evidence-Based Dermatology',
          'US-FDA Laser Safety',
          'Warm & Welcoming Atmosphere'
        ]
      }}
      overview={{
        title: 'Consistent Excellence & Patient Satisfaction',
        paragraphs: [
          'Dr. Divya Sharma believes that healthy skin boosts overall self-confidence and quality of life.',
          'Read testimonials from professionals, parents, and students who experienced gentle, gold-standard skin care at our Whitefield clinic.'
        ],
        causesOrSymptomsTitle: 'Popular Patient Treatments',
        causesOrSymptoms: [
          'Hollywood Laser Peel for Red Carpet Glow',
          'Fractional Laser Resurfacing for Deep Acne Scars',
          'Pediatric Skin Consultation for Infant Rashes',
          'Laser Hair Reduction for Smooth Hair-Free Skin'
        ]
      }}
      approach={{
        title: 'Why Patients Recommend Us',
        description: 'Our core pillars of medical excellence and transparent care.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Precision',
            description: 'Finding the true root cause before prescribing treatment.'
          },
          {
            stepNumber: '02',
            title: 'Gold Medalist Care',
            description: 'Supervised directly by Dr. Divya Sharma (Gold Medalist, MD).'
          },
          {
            stepNumber: '03',
            title: 'Long-Term Results',
            description: 'Focusing on skin health sustainability rather than quick fixes.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are before and after photos available to view during consultation?',
          answer: 'Yes, clinical before and after photographic records are available for review during your private clinic consultation.'
        }
      ]}
    />
  );
}
