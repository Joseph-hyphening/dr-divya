import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'White Patches & Vitiligo Care Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical evaluation & pigment re-pigmentation for Vitiligo, Pityriasis Alba, and hypopigmented patches in Whitefield Bangalore.',
};

export default function WhitePatchesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Pigment Restoration & Autoimmune Dermatology',
        title: 'Vitiligo & White Patches Treatment',
        hookSubtitle: 'Re-pigment White Skin Patches & Restore Natural Skin Color',
        description: 'Comprehensive medical evaluation for Vitiligo, Pityriasis Alba, and post-inflammatory white patches using targeted immunomodulators, phototherapy guidance, and micro-needling.',
        treatmentName: 'White Patches Consultation',
        keyBenefits: [
          'Dermoscopy & Wood’s Light Diagnostic',
          'Stimulates Melanocyte Migration',
          'Steroid-Sparing Topical Protocols',
          'Child-Friendly Pityriasis Alba Care'
        ]
      }}
      overview={{
        title: 'Understanding White Patch Formation',
        paragraphs: [
          'White patches (hypopigmentation) can be caused by Vitiligo (autoimmune destruction of melanocytes), Pityriasis Alba (dry scaly patches in children), or post-fungal pigment loss.',
          'Dr. Divya Sharma accurately differentiates these conditions to prescribe melanocyte-stimulating therapies and immune-stabilizing topicals.'
        ],
        causesOrSymptomsTitle: 'Conditions Evaluated',
        causesOrSymptoms: [
          'Vitiligo (Localized, Segmental, or Generalized)',
          'Pityriasis Alba (Dry pale patches on children’s cheeks)',
          'Post-Inflammatory Hypopigmentation',
          'Tinea Versicolor White Spots'
        ]
      }}
      approach={{
        title: 'Our Re-Pigmentation Protocol',
        description: 'Halting depigmentation and stimulating color return.',
        steps: [
          {
            stepNumber: '01',
            title: 'Wood’s Lamp Examination',
            description: 'Differentiating active vitiligo borders from dry patches.'
          },
          {
            stepNumber: '02',
            title: 'Immunomodulator Therapy',
            description: 'Prescribing Tacrolimus/Pimecrolimus to halt pigment loss.'
          },
          {
            stepNumber: '03',
            title: 'Melanocyte Stimulation',
            description: 'Guiding targeted sun/UV light exposure for pigment return.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are pale patches on a child’s face always vitiligo?',
          answer: 'No! Most pale patches on children are Pityriasis Alba, a harmless condition related to dry skin and sun exposure that easily clears with moisturizers.'
        }
      ]}
    />
  );
}
