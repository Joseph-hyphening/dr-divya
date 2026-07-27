import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Dr. Divya Sharma Skin Clinic',
  description: 'Find expert answers to common questions on skin treatments, hair fall, laser procedures, chemical peels, pediatric dermatology, and appointments.',
};

export default function FAQPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clear & Transparent Information',
        title: 'Frequently Asked Dermatology Questions',
        hookSubtitle: 'Get Honest, Medical Answers to Common Skin, Laser & Hair Care Queries',
        description: 'Empowering you with evidence-based knowledge from Gold Medalist Dermatologist Dr. Divya Sharma.',
        treatmentName: 'General Dermatology Query',
        keyBenefits: [
          'Dermatologist Verified Answers',
          'Laser Safety Insights',
          'Post-Care Advice',
          'Transparent Fee Structure'
        ]
      }}
      overview={{
        title: 'Navigating Your Skin Health Journey',
        paragraphs: [
          'Understanding your skin condition and treatment options is the key to achieving optimal results. Below are answers to the most common questions raised by our patients regarding treatments, technology safety, and appointment procedures.',
          'If you have a specific condition not answered here, book a direct consultation for personalized medical advice.'
        ],
        causesOrSymptomsTitle: 'Topics Covered',
        causesOrSymptoms: [
          'Acne & Scar Treatments',
          'Laser Hair Reduction & Safety',
          'Anti-Aging, Peels & Glow Facials',
          'Pediatric & Newborn Skin Care'
        ]
      }}
      approach={{
        title: 'Our Commitment to Transparency',
        description: 'No hidden costs, no exaggerated claims, only science-backed medicine.',
        steps: [
          {
            stepNumber: '01',
            title: 'Medical Truth First',
            description: 'Clear explanations of what lasers and treatments can realistically achieve.'
          },
          {
            stepNumber: '02',
            title: 'Safety First Protocol',
            description: 'All treatments use US-FDA cleared medical devices suited for Indian skin types.'
          },
          {
            stepNumber: '03',
            title: 'Ongoing Support',
            description: 'Clear post-treatment instructions for minimal downtime and maximal recovery.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are laser treatments safe for dark or brown Indian skin tones?',
          answer: 'Yes! Modern US-FDA approved Nd:YAG and diode lasers are specifically calibrated for Indian skin types (Fitzpatrick scale 3 to 5), targeting pigment safely without burning surrounding skin.'
        },
        {
          question: 'How long does a chemical peel session take?',
          answer: 'A clinical chemical peel session typically takes 30 to 45 minutes, with zero downtime required for mild lunch-time peels.'
        },
        {
          question: 'When should I see a dermatologist for hair fall?',
          answer: 'If you notice more than 100 strands shedding daily for over 4 weeks, widening part lines, or scalp visibility, consult a dermatologist promptly for dermoscopy testing.'
        },
        {
          question: 'Do pimples require antibiotics or lasers?',
          answer: 'Active acne is treated based on severity—ranging from topical retinoids and targeted chemical peels to oral regulation or LED light therapy.'
        }
      ]}
    />
  );
}
