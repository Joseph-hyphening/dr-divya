import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Common Baby Skin Rashes Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Fast identification & gentle relief for common baby rashes: heat rash, diaper rash, baby eczema, and viral spots in Whitefield Bangalore.',
};

export default function CommonBabyRashesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Pediatric Rash Diagnostics',
        title: 'Identifying & Treating Common Baby Rashes',
        hookSubtitle: 'Gentle, Fast Medical Relief for Heat Rash, Eczema & Infant Skin Spots',
        description: 'Empower yourself with accurate dermatological diagnosis when your baby develops sudden red bumps, prickly heat, or dry scaly patches.',
        treatmentName: 'Baby Rash Consultation',
        keyBenefits: [
          'Immediate Relief from Itching & Crying',
          'Accurate Diagnosis of Baby Rash Types',
          'Gentle Non-Irritating Prescriptions',
          'Parent-Reassuring Bedside Care'
        ]
      }}
      overview={{
        title: 'Understanding Baby Rash Varieties',
        paragraphs: [
          'Baby skin rashes can stem from heat (miliaria), diaper friction, viral exanthems, or genetic eczema. Misidentifying the rash type can lead to inappropriate cream usage.',
          'Dr. Divya Sharma carefully examines the distribution, color, and texture of the rash to provide targeted, safe remedies.'
        ],
        causesOrSymptomsTitle: 'Rashes We Frequently See',
        causesOrSymptoms: [
          'Prickly Heat Rash (Miliaria rubra)',
          'Infant Atopic Eczema (Red cheek & joint folds rash)',
          'Erythema Toxicum Neonatorum (Newborn red spots)',
          'Diaper Area Contact Rash & Yeast Infection'
        ]
      }}
      approach={{
        title: 'Our Infant Rash Care Workflow',
        description: 'Gentle, effective diagnosis and healing.',
        steps: [
          {
            stepNumber: '01',
            title: 'Visual Dermoscopic Audit',
            description: 'Checking rash pattern without causing distress to baby.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Barrier Relief',
            description: 'Prescribing soothing zinc and ceramide formulations.'
          },
          {
            stepNumber: '03',
            title: 'Environmental Adjustments',
            description: 'Guiding cotton clothing and room temperature controls.'
          }
        ]
      }}
      faqs={[
        {
          question: 'When should a baby rash be evaluated by a dermatologist urgently?',
          answer: 'Seek immediate evaluation if the rash is accompanied by high fever, lethargy, spreading pus blisters, or purple spots that do not fade when pressed.'
        }
      ]}
    />
  );
}
