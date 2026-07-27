import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Lumps & Bumps Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical evaluation and radiofrequency removal of epidermoid cysts, lipomas, seborrheic keratosis & skin lumps in Whitefield Bangalore.',
};

export default function LumpsBumpsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Minor Surgical & RF Removal',
        title: 'Skin Lumps, Bumps & Cyst Removal',
        hookSubtitle: 'Safe, Scarless Removal of Epidermoid Cysts, Lipomas & Benign Skin Lesions',
        description: 'Diagnose and excise troublesome skin lumps, sebaceous cysts, lipomas, and raised benign skin growths cleanly under local anesthesia.',
        treatmentName: 'Lumps & Bumps Consultation',
        keyBenefits: [
          'Precision Radiofrequency (RF) Removal',
          'Minimal Scar Excision Tech',
          'Immediate Pathological Verification',
          'Pain-Free Local Anesthesia'
        ]
      }}
      overview={{
        title: 'Evaluation of Benign Skin Growths',
        paragraphs: [
          'Skin lumps can arise from keratin cysts (epidermoid cysts), fatty tissue growths (lipomas), elevated viral bumps, or age-related seborrheic keratoses.',
          'Dr. Divya Sharma performs careful clinical examination and dermoscopy before offering radiofrequency cautery or minimal-incision excision.'
        ],
        causesOrSymptomsTitle: 'Common Lesions Treated',
        causesOrSymptoms: [
          'Epidermoid & Sebaceous Cysts',
          'Subcutaneous Lipomas (Fatty lumps)',
          'Seborrheic Keratoses (Age spots/bumps)',
          'Syringomas & Xanthelasma around eyes'
        ]
      }}
      approach={{
        title: 'Our Excision & Removal Routine',
        description: 'Quick outpatient procedure with rapid healing.',
        steps: [
          {
            stepNumber: '01',
            title: 'Lesion Evaluation',
            description: 'Palpation and dermoscopic examination.'
          },
          {
            stepNumber: '02',
            title: 'Painless Local Numbing',
            description: 'Injecting local numbing agent for zero discomfort.'
          },
          {
            stepNumber: '03',
            title: 'RF Cautery / Excision',
            description: 'Removing growth capsule intact to prevent recurrence.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Will cyst removal leave a prominent scar?',
          answer: 'Dr. Divya uses micro-incision and radiofrequency techniques that minimize scar visibility, allowing incisions to blend naturally into skin lines.'
        }
      ]}
    />
  );
}
