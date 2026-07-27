import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'LED Phototherapy Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Non-invasive Red and Blue LED light therapy in Whitefield Bangalore for active acne, skin healing, collagen stimulation, and inflammation control.',
};

export default function LEDTherapyPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Non-Invasive Photobiomodulation',
        title: 'LED Light Therapy for Skin Healing & Acne',
        hookSubtitle: 'Calm Inflammation, Kill Acne Bacteria & Boost Cellular Renewal Naturally',
        description: 'Harness specific wavelengths of blue, red, and near-infrared light to destroy acne-causing bacteria, soothe sensitive skin, and accelerate tissue recovery.',
        treatmentName: 'LED Phototherapy Consultation',
        keyBenefits: [
          'Blue Light Destroys P. Acnes Bacteria',
          'Red Light Boosts Collagen & Healing',
          '100% Painless & Relaxing Session',
          'Safe for Pregnant & Sensitive Skin Patients'
        ]
      }}
      overview={{
        title: 'Cellular Healing Through Light Wavelengths',
        paragraphs: [
          'LED (Light Emitting Diode) phototherapy works at a cellular level without heat or UV rays. Blue light (415nm) neutralizes acne bacteria, while Red light (633nm) stimulates fibroblast activity for collagen repair and reduced redness.',
          'It serves as an excellent standalone treatment or complementary therapy post-laser or post-peel sessions.'
        ],
        causesOrSymptomsTitle: 'Recommended For',
        causesOrSymptoms: [
          'Active Inflammatory Acne & Rosacea',
          'Post-Procedure Skin Calming (Post-Laser/Microneedling)',
          'Wound Healing & Barrier Repair',
          'Dull, Stressed Skin Rejuvenation'
        ]
      }}
      approach={{
        title: 'Our LED Therapy Routine',
        description: 'Relaxing 20-30 minute session under specialized medical light canopy.',
        steps: [
          {
            stepNumber: '01',
            title: 'Skin Cleansing & Preparation',
            description: 'Removing makeup, sunscreen, and oils for maximum light absorption.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Light Exposure',
            description: 'Relax with eye protection under selected light spectrum canopy.'
          },
          {
            stepNumber: '03',
            title: 'Hydration Lock',
            description: 'Finish with calming hyaluronic serum and sunscreen.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Does LED light therapy emit UV rays?',
          answer: 'No, LED phototherapy is completely UV-free and poses zero risk of skin tanning or sun damage.'
        }
      ]}
    />
  );
}
