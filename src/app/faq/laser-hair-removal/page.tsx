import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Laser Hair Removal FAQs | Dr. Divya Sharma Skin Clinic Bangalore',
  description: 'Frequently asked questions on laser hair reduction safety, pain levels, costs, sessions & PCOS hair growth in Whitefield Bangalore.',
};

export default function LaserHairRemovalFAQPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Laser Hair Removal FAQ Hub',
        title: 'Laser Hair Removal FAQs & Safety Guide',
        hookSubtitle: 'Get Clear, Honest Answers on Pain Levels, Safety in Indian Skin & Session Timelines',
        description: 'Explore expert answers on US-FDA laser hair removal technology, side effects, preparation steps, and long-term hair reduction results.',
        treatmentName: 'Laser Hair Removal Consultation',
        keyBenefits: [
          'Dermatologist Verified Laser Answers',
          'Pain-Free Cooling Tech Explained',
          'PCOS Hair Growth Management Advice',
          'Pre & Post-Session Instructions'
        ]
      }}
      overview={{
        title: 'Clear Answers Before Your Laser Session',
        paragraphs: [
          'Laser hair reduction is one of the safest and most popular aesthetic procedures worldwide when performed with US-FDA approved equipment under medical supervision.',
          'Below are answers to the most common questions regarding laser safety, pain levels, and result expectations.'
        ],
        causesOrSymptomsTitle: 'Popular Questions Answered',
        causesOrSymptoms: [
          'Is laser hair removal painful?',
          'How many sessions are needed for 90% reduction?',
          'Can laser hair removal be done on facial hair?'
        ]
      }}
      approach={{
        title: 'Our Laser Safety Standards',
        description: 'Painless, calibrated laser sessions.',
        steps: [
          {
            stepNumber: '01',
            title: 'Contact Chill Cooling',
            description: 'Protecting the epidermis with icy sapphire cooling tips.'
          },
          {
            stepNumber: '02',
            title: 'Custom Wavelength Pass',
            description: 'Selecting Diode / Nd:YAG energy matched to skin phototype.'
          },
          {
            stepNumber: '03',
            title: 'Post-Laser Soothing',
            description: 'Applying anti-inflammatory aloe balm and sunscreen.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is laser hair removal safe for dark Indian skin tones?',
          answer: 'Yes! Modern US-FDA approved Nd:YAG and Diode lasers safely bypass epidermal melanin to target hair root pigment directly, posing zero risk of burns.'
        },
        {
          question: 'Can I shave between laser hair removal sessions?',
          answer: 'Yes, you can shave between sessions. However, do NOT wax, pluck, or thread, as removing the hair root prevents the laser from targeting the follicle.'
        }
      ]}
    />
  );
}
