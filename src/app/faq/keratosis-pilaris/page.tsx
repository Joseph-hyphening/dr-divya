import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Keratosis Pilaris FAQs | Dr. Divya Sharma Skin Clinic Bangalore',
  description: 'Frequently asked questions about "chicken skin" Keratosis Pilaris, peels, body lotions, and smoothing treatments in Bangalore.',
};

export default function KeratosisPilarisFAQPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Keratosis Pilaris FAQ Hub',
        title: 'Keratosis Pilaris ("Chicken Skin") FAQs',
        hookSubtitle: 'Expert Answers on How to Dissolve Bumpy Arm Skin & Maintain Soft Smoothness',
        description: 'Find dermatologist-verified answers to common questions about Keratosis Pilaris causes, medical exfoliants, and laser treatments.',
        treatmentName: 'Keratosis Pilaris Consultation',
        keyBenefits: [
          'Dermatologist Answered KP Questions',
          'Lactic & Salicylic Acid Dosage Advice',
          'Laser & Chemical Peel Explanations',
          'Prevents Post-Scratching Dark Spots'
        ]
      }}
      overview={{
        title: 'Understanding Your KP Questions',
        paragraphs: [
          'Keratosis Pilaris affects nearly 40% of adults. Having clear information on which moisturizers work and why physical loofahs hurt skin is essential for smooth results.',
          'Below are answers to the top questions asked by our patients at our Whitefield clinic.'
        ],
        causesOrSymptomsTitle: 'Common Topics Covered',
        causesOrSymptoms: [
          'Why physical scrubbing makes KP bumps redder',
          'How urea and lactic acid dissolve keratin plugs',
          'Role of laser hair removal in reducing KP'
        ]
      }}
      approach={{
        title: 'Our KP Care Principles',
        description: 'Gentle keratin dissolution.',
        steps: [
          {
            stepNumber: '01',
            title: 'No Loofahs / Scrubbing',
            description: 'Stopping mechanical friction that inflames follicles.'
          },
          {
            stepNumber: '02',
            title: 'Chemical Exfoliation',
            description: 'Using gentle AHA/BHA chemical keratolytics.'
          },
          {
            stepNumber: '03',
            title: 'Moisture Sealing',
            description: 'Applying thick ceramide lotions twice daily.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Does scrubbing with a loofah remove KP bumps?',
          answer: 'No! Scrubbing KP bumps with a loofah irritates hair follicles, causing them to turn dark brown or red. Use chemical keratolytics like lactic acid instead.'
        },
        {
          question: 'Can laser hair removal help reduce Keratosis Pilaris?',
          answer: 'Yes! Since KP forms around hair follicles, removing the hair with laser energy significantly reduces keratin plug formation.'
        }
      ]}
    />
  );
}
