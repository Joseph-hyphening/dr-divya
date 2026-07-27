import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Vascular Lesion & Spider Veins Treatment Bangalore | Dr. Divya Sharma',
  description: 'Specialized laser treatment for vascular lesions, spider veins, cherry angiomas, and facial telangiectasia in Whitefield Bangalore.',
};

export default function BloodVesselLesionsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Vascular Laser & Lesion Care',
        title: 'Vascular Lesions & Spider Veins Removal',
        hookSubtitle: 'Clear Facial Telangiectasia, Cherry Angiomas & Red Blood Vessel Spots Safely',
        description: 'Target enlarged capillaries, cherry angiomas, spider veins, and red vascular marks using precision long-pulse lasers.',
        treatmentName: 'Vascular Lesion Consultation',
        keyBenefits: [
          'Clears Red Facial Spider Veins',
          'Removes Cherry Angiomas Painlessly',
          'Targeted Vascular Wavelengths',
          'Minimal Risk to Surrounding Skin'
        ]
      }}
      overview={{
        title: 'Targeting Dermal Vascular Lesions',
        paragraphs: [
          'Vascular lesions occur when small blood vessels near the skin surface dilate or multiply abnormally, forming red or purple spots, spider veins, or raised angiomas.',
          'Specialized vascular laser light is absorbed selectively by hemoglobin in blood vessels, causing them to coagulate and naturally dissolve.'
        ],
        causesOrSymptomsTitle: 'Vascular Conditions Treated',
        causesOrSymptoms: [
          'Cherry Angiomas (Bright red skin dots)',
          'Facial Telangiectasia & Broken Capillaries',
          'Spider Veins on Legs or Face',
          'Venous Lakes & Red Vascular Spots'
        ]
      }}
      approach={{
        title: 'Vascular Removal Protocol',
        description: 'Clean, targeted vessel coagulation.',
        steps: [
          {
            stepNumber: '01',
            title: 'Vascular Mapping',
            description: 'Assessing vessel size, depth, and blood flow.'
          },
          {
            stepNumber: '02',
            title: 'Vascular Laser Pulses',
            description: 'Coagulating targeted red vessels with contact cooling.'
          },
          {
            stepNumber: '03',
            title: 'Natural Vessel Clearance',
            description: 'Body gradually clears coagulated vessels over 2-3 weeks.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are cherry angioma removals permanent?',
          answer: 'Yes! Once a cherry angioma is laser coagulated and absorbed by the body, that specific spot will not return.'
        }
      ]}
    />
  );
}
