import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Molluscum Contagiosum Treatment Bangalore | Dr. Divya Sharma',
  description: 'Painless removal and medical care for viral molluscum bumps in children and adults in Whitefield Bangalore.',
};

export default function MolluscumPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Pediatric & Adult Viral Dermatology',
        title: 'Molluscum Contagiosum Treatment',
        hookSubtitle: 'Painless Curettage & Topical Removal of Viral Skin Bumps in Kids & Adults',
        description: 'Clear contagious dimpled viral bumps quickly and safely using gentle numbing cream and dermatologist curettage or radiofrequency.',
        treatmentName: 'Molluscum Consultation',
        keyBenefits: [
          'Gentle Numbing for Painless Removal',
          'Prevents Spread to Sibling or Body Parts',
          'Zero Scarring Protocol for Children',
          'Pediatric Dermatology Expertise'
        ]
      }}
      overview={{
        title: 'Understanding Molluscum Contagiosum',
        paragraphs: [
          'Molluscum contagiosum is a viral skin infection causing firm, dome-shaped, pearl-like bumps with a characteristic central dimple. It is common in school-going children and spreads through direct skin contact.',
          'Dr. Divya Sharma provides gentle, child-friendly removal under topical anesthesia to halt the spread of the virus.'
        ],
        causesOrSymptomsTitle: 'Signs of Molluscum',
        causesOrSymptoms: [
          'Small, shiny dome-shaped bumps (2-5mm)',
          'Central umbilication (tiny dip in center)',
          'Itching or redness surrounding bumps'
        ]
      }}
      approach={{
        title: 'Child-Friendly Removal Process',
        description: 'Non-stressful, painless procedure.',
        steps: [
          {
            stepNumber: '01',
            title: 'Topical Numbing Cream',
            description: 'Applied for 45 minutes to completely numb skin.'
          },
          {
            stepNumber: '02',
            title: 'Painless Curettage / Cryo',
            description: 'Lifting out viral core without child feeling pain.'
          },
          {
            stepNumber: '03',
            title: 'Antiviral Care Routine',
            description: 'Guidance on towels and hygiene to stop spread.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is molluscum contagiosum dangerous?',
          answer: 'No, molluscum is a harmless skin virus, but treatment is recommended to prevent spreading to other body areas or family members.'
        }
      ]}
    />
  );
}
