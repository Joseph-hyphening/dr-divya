import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Media Press & Features | Dr. Divya Sharma Skin Clinic Bangalore',
  description: 'Explore Dr. Divya Sharma in media features, newspaper columns, expert quotes, and medical conference presentations.',
};

export default function MediaPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Press & Media Recognition',
        title: 'Media Coverage & Expert Features',
        hookSubtitle: 'Recognized Voice in Medical & Aesthetic Dermatology in India',
        description: 'Read newspaper columns, health interviews, and medical panel discussions featuring Gold Medalist Dermatologist Dr. Divya Sharma.',
        treatmentName: 'Media Inquiry / Consultation',
        keyBenefits: [
          'National Newspaper Health Columns',
          'Dermatology Conference Speaker',
          'Trusted Medical Opinion',
          'Award-Winning Clinical Excellence'
        ]
      }}
      overview={{
        title: 'Sharing Dermatological Knowledge',
        paragraphs: [
          'Dr. Divya Sharma regularly contributes expert advice to leading national dailies, health magazines, and medical forums.',
          'Her features cover skin health awareness, seasonal skincare precautions, and consumer guidance on safe laser procedures.'
        ],
        causesOrSymptomsTitle: 'Media Highlights',
        causesOrSymptoms: [
          'Deccan Herald & Times of India Health Features',
          'International Dermatology Congress Presentations',
          'Expert Comments on Skincare Trends'
        ]
      }}
      approach={{
        title: 'Our Media Commitments',
        description: 'Promoting skin health literacy.',
        steps: [
          {
            stepNumber: '01',
            title: 'Evidence-Based Quotes',
            description: 'Providing scientific facts over commercial hype.'
          },
          {
            stepNumber: '02',
            title: 'Public Health Education',
            description: 'Spreading awareness on sun safety and infection prevention.'
          },
          {
            stepNumber: '03',
            title: 'Ethical Medical Practice',
            description: 'Upholding gold-standard medical ethics.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How can media outlets request an interview with Dr. Divya?',
          answer: 'Press and media professionals can contact our clinic press desk at info@drdivyasharma.com or +91 96206 38388.'
        }
      ]}
    />
  );
}
