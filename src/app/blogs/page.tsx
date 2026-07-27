import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Dermatology Blog & Skin Health Articles | Dr. Divya Sharma',
  description: 'Read expert dermatology blogs, skin care tips, acne advice, hair loss science, and aesthetic guides by Dr. Divya Sharma Bangalore.',
};

export default function BlogsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Evidence-Based Dermatology Articles',
        title: 'Dr. Divya’s Skin & Hair Health Blog',
        hookSubtitle: 'Expert Medical Insights, Skincare Myths Debunked & Science-Backed Advice',
        description: 'Explore our library of dermatologist-written articles covering acne, anti-aging, hair loss, laser safety, and pediatric skin care.',
        treatmentName: 'General Consultation',
        keyBenefits: [
          'Written by Gold Medalist Dermatologist',
          'Debunks Popular Online Skincare Myths',
          'Practical Routine & Ingredient Guides',
          'Latest Advances in Aesthetic Lasers'
        ]
      }}
      overview={{
        title: 'Empowering Patients with Honest Science',
        paragraphs: [
          'In an era filled with skincare trends and social media fads, getting clear, medical advice is essential for your skin safety.',
          'Dr. Divya Sharma breaks down complex dermatological topics into easy, actionable articles to help you make informed decisions for your skin and hair.'
        ],
        causesOrSymptomsTitle: 'Popular Categories',
        causesOrSymptoms: [
          'Acne & Post-Acne Scar Management',
          'Hair Regrowth & Scalp Health Science',
          'Laser Safety & Chemical Peel Truths',
          'Infant & Pediatric Skin Care Advice'
        ]
      }}
      approach={{
        title: 'Our Educational Philosophy',
        description: 'Demystifying dermatology for healthier skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Medical Accuracy',
            description: 'All articles are reviewed by Dr. Divya Sharma (Gold Medalist, MD).'
          },
          {
            stepNumber: '02',
            title: 'No Hype / Myth Busting',
            description: 'Clear explanations of what products can and cannot do.'
          },
          {
            stepNumber: '03',
            title: 'Patient-First Focus',
            description: 'Practical routines tailored for Indian skin types.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can I request a blog topic from Dr. Divya?',
          answer: 'Yes! Send us your skin or hair questions through our contact page, and our team will cover popular topics in upcoming blog releases.'
        }
      ]}
    />
  );
}
