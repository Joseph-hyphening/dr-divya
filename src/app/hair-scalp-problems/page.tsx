import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hair & Scalp Treatments | Dr. Divya Sharma Hair Clinic Bangalore',
  description: 'Advanced hair loss, scalp dandruff, male & female pattern baldness, and Growth Factor therapies by Gold Medalist Hair Specialist Dr. Divya Sharma in Bangalore.',
};

export default function HairScalpProblemsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Trichology & Hair Restoration',
        title: 'Comprehensive Hair Loss & Scalp Health Solutions',
        hookSubtitle: 'Stop Hair Fall & Restore Hair Density with Dermoscopy Diagnostics & Growth Factor Therapy',
        description: 'Overcome hair thinning, chronic dandruff, receding hairlines, and alopecia with customized medical hair restoration protocols directed by Dr. Divya Sharma.',
        treatmentName: 'Hair & Scalp Consultation',
        keyBenefits: [
          'Dermoscopy Digital Scalp Evaluation',
          'Growth Factor & PRP Micro-Injections',
          'Root Cause Nutritional & Hormonal Check',
          'Visible Improvement in Follicle Density'
        ]
      }}
      overview={{
        title: 'Science-Backed Hair Regrowth & Scalp Revival',
        paragraphs: [
          'Hair fall can be triggered by hormonal changes (PCOS, thyroid), nutritional deficiencies (Iron, Vitamin D), genetics, stress, or scalp inflammation.',
          'Dr. Divya Sharma conducts a detailed hair dermoscopy to assess hair root density, follicle miniaturization, and scalp sebum balance before designing a multi-modal recovery plan.'
        ],
        causesOrSymptomsTitle: 'Scalp & Hair Conditions Treated',
        causesOrSymptoms: [
          'Male Pattern Baldness (Androgenetic Alopecia)',
          'Female Hair Thinning & Postpartum Shedding',
          'Telogen Effluvium (Post-illness or Stress Hair Fall)',
          'Stubborn Scalp Dandruff & Seborrheic Dermatitis',
          'Alopecia Areata (Patchy Hair Loss)'
        ]
      }}
      approach={{
        title: 'Our 3-Phase Hair Restoration Method',
        description: 'Stopping shedding first, then stimulating new growth.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Root Assessment',
            description: 'Magnified scalp analysis to count active vs sleeping hair follicles.'
          },
          {
            stepNumber: '02',
            title: 'Follicle Stimulation',
            description: 'Growth Factor Concentrate (GFC), mesotherapy, or PRP delivered directly to hair roots.'
          },
          {
            stepNumber: '03',
            title: 'Nutritional & Serum Maintenance',
            description: 'Customized peptides, Minoxidil, and micronutrients to lock in follicle strength.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How soon can I expect results from hair loss treatment?',
          answer: 'Hair shedding typically reduces within 4-6 weeks of starting medical therapy, while visible new hair growth and density become noticeable around 3-4 months.'
        }
      ]}
    />
  );
}
