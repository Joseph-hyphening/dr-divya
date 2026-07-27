import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Eczema & Atopic Dermatitis Treatment Bangalore | Dr. Divya Sharma',
  description: 'Soothe severe eczema, dry itchy rashes, and contact dermatitis with evidence-based dermatological care in Whitefield Bangalore.',
};

export default function EczemaTreatmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Eczema & Skin Barrier Therapy',
        title: 'Atopic Dermatitis & Eczema Relief',
        hookSubtitle: 'Calm Intolerable Itching, Repair Damaged Skin Barrier & Prevent Flare-Ups',
        description: 'Get long-term relief from dry, red, itchy eczema patches with non-steroid barrier repair creams, allergy identification, and gentle medical skin care.',
        treatmentName: 'Eczema Consultation',
        keyBenefits: [
          'Immediate Relief from Intense Itching',
          'Steroid-Conscious Barrier Repair',
          'Identifies Environmental & Food Triggers',
          'Safe for Infants, Kids & Adults'
        ]
      }}
      overview={{
        title: 'Understanding Eczema & Barrier Breakdown',
        paragraphs: [
          'Eczema (Atopic Dermatitis) occurs when a compromised skin barrier loses moisture rapidly, allowing allergens and bacteria to penetrate and cause severe immune inflammation.',
          'Dr. Divya Sharma focuses on rebuilding the skin’s natural lipid barrier with ceramide-dominant formulations while controlling acute flare-ups safely.'
        ],
        causesOrSymptomsTitle: 'Common Eczema Symptoms',
        causesOrSymptoms: [
          'Severe itching, especially at night',
          'Red to dark brown rough, leathery skin patches',
          'Cracked, weeping, or bleeding skin areas',
          'Flexural rashes on elbows, knees, and neck'
        ]
      }}
      approach={{
        title: 'Our Eczema Management Protocol',
        description: 'Calming inflammation and strengthening skin defense.',
        steps: [
          {
            stepNumber: '01',
            title: 'Trigger Mapping',
            description: 'Identifying soaps, weather, dust, or food allergens that trigger itch.'
          },
          {
            stepNumber: '02',
            title: 'Barrier Repair Prescriptions',
            description: 'Applying medical ceramides and non-steroidal immunomodulators.'
          },
          {
            stepNumber: '03',
            title: 'Moisture Lock System',
            description: 'Guiding 3-minute post-bath soak-and-seal moisturizing routine.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is eczema contagious?',
          answer: 'No, eczema is completely non-contagious. It is an internal genetic and immune-related skin barrier condition.'
        }
      ]}
    />
  );
}
