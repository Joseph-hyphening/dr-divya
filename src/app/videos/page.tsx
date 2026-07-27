import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Video Library & Educational Shorts | Dr. Divya Sharma Skin Clinic',
  description: 'Watch video guides on laser toning, acne scar care, chemical peel procedure walkthroughs, and hair regrowth by Dr. Divya Sharma.',
};

export default function VideosPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Video Library & Procedure Demos',
        title: 'Educational Videos & Procedure Walkthroughs',
        hookSubtitle: 'See How Advanced Laser Toning, Peels & Hair Growth Therapies Are Performed',
        description: 'Watch step-by-step procedure videos, patient walkthroughs, and skin care tips directly from Dr. Divya Sharma.',
        treatmentName: 'Video Consultation Inquiry',
        keyBenefits: [
          'Procedure Safety Walkthroughs',
          'Laser Toning & Peel Demonstrations',
          'Skincare Ingredient Explainer Videos',
          'Patient Transformation Records'
        ]
      }}
      overview={{
        title: 'Visual Insights into Modern Dermatology',
        paragraphs: [
          'We believe visual transparency helps patients feel completely comfortable and prepared before any laser or cosmetic procedure.',
          'Watch Dr. Divya Sharma explain how Q-Switched lasers, Hollywood peels, and GFC hair therapies work in a clinical setting.'
        ],
        causesOrSymptomsTitle: 'Featured Video Topics',
        causesOrSymptoms: [
          'Hollywood Carbon Peel Live Procedure',
          'How Growth Factor (GFC) Hair Therapy Works',
          'Acne Scar Subcision & Laser Resurfacing Demo',
          'Pediatric Skin Care Tips for Parents'
        ]
      }}
      approach={{
        title: 'Our Video Commitment',
        description: 'Transparent, informative clinical education.',
        steps: [
          {
            stepNumber: '01',
            title: 'Real Clinical Footage',
            description: 'Showing genuine procedure steps and comfort measures.'
          },
          {
            stepNumber: '02',
            title: 'Clear Expectations',
            description: 'Explaining post-laser care and healing times.'
          },
          {
            stepNumber: '03',
            title: 'Patient Privacy',
            description: 'All patient videos filmed with explicit prior consent.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Where can I watch more video tutorials by Dr. Divya?',
          answer: 'Subscribe to our official YouTube channel and Instagram handle @drdivyasharma for weekly skin health videos.'
        }
      ]}
    />
  );
}
