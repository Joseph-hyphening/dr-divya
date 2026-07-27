import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Male Laser Hair Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Specialized laser hair reduction for men in Whitefield Bangalore: chest, back, shoulders, beard line shaping, and neck hair reduction.',
};

export default function MaleLaserHairRemovalPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Specialized Male Grooming & Laser Care',
        title: 'Laser Body Hair Reduction for Men',
        hookSubtitle: 'Precision Beard Shaping, Chest & Back Hair Reduction with Zero In-Grown Hairs',
        description: 'Manage dense male body hair, clean up neck stubble, and shape beard lines comfortably using high-speed US-FDA laser hair removal designed for men.',
        treatmentName: 'Male Laser Hair Removal Consultation',
        keyBenefits: [
          'Precision Beard Line Sculpting',
          'Chest, Back & Shoulder Grooming',
          'Eliminates Razor Bumps & Folliculitis',
          'Fast, Comfortable High-Speed Sessions'
        ]
      }}
      overview={{
        title: 'Tailored Male Body Hair Grooming',
        paragraphs: [
          'Thick male hair follicles require higher energy penetration and active epidermal cooling for maximum safety and comfort.',
          'Dr. Divya Sharma offers customized laser parameters for male patients seeking either subtle hair thinning or complete smooth hairlessness.'
        ],
        causesOrSymptomsTitle: 'Popular Male Laser Zones',
        causesOrSymptoms: [
          'Beard Line & Cheek Edge Shaping',
          'Neck Stubble & In-grown Hair Prevention',
          'Full Back, Shoulders & Chest',
          'Arms & Full Leg Grooming'
        ]
      }}
      approach={{
        title: 'Male Laser Grooming Routine',
        description: 'Discreet, fast clinical sessions.',
        steps: [
          {
            stepNumber: '01',
            title: 'Follicle Mapping',
            description: 'Assessing hair density and skin tone sensitivity.'
          },
          {
            stepNumber: '02',
            title: 'Chilled Laser Pass',
            description: 'Fast gliding pass over larger areas like back and chest.'
          },
          {
            stepNumber: '03',
            title: 'Post-Laser Soothing Balm',
            description: 'Cooling gel application to prevent post-shave bumps.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can laser hair removal help with razor bumps on the neck?',
          answer: 'Yes! Laser treatment destroys the hair bulb responsible for curved in-grown hairs, completely curing chronic folliculitis and razor bumps.'
        }
      ]}
    />
  );
}
