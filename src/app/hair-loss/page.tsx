import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hair Loss Treatment Bangalore | Dr. Divya Sharma Hair Clinic',
  description: 'Clinical hair loss treatments in Whitefield Bangalore for men and women: Growth Factor Concentrate (GFC), PRP, Dermoscopy, and Alopecia management.',
};

export default function HairLossTreatmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Hair Loss & Alopecia Restoration',
        title: 'Targeted Hair Loss & Hair Fall Control',
        hookSubtitle: 'Reverse Thinning, Stop Excessive Shedding & Awaken Dormant Hair Follicles',
        description: 'Stop watching your hair thin. Dr. Divya Sharma conducts digital scalp dermoscopy to pinpoint hormonal, genetic, or nutritional causes before prescribing Growth Factor Concentrate (GFC) and medical restoration.',
        treatmentName: 'Hair Loss Consultation',
        keyBenefits: [
          'Digital Scalp Dermoscopy Diagnostic',
          'Growth Factor & PRP Hair Micro-Injections',
          'Halts Excessive Hair Shedding',
          'Promotes Thicker Hair Strand Diameter'
        ]
      }}
      overview={{
        title: 'Science of Hair Shedding & Follicle Rejuvenation',
        paragraphs: [
          'Hair loss can stem from Androgenetic Alopecia (genetic DHT sensitivity), Telogen Effluvium (stress, post-illness shedding), PCOS, or Iron/Vitamin D deficiencies.',
          'Dr. Divya Sharma utilizes autologous Growth Factor Concentrate (GFC) therapy to deliver high concentrations of hair growth factors directly to dormant follicles, extending the active growth phase.'
        ],
        causesOrSymptomsTitle: 'Signs You Should Treat Early',
        causesOrSymptoms: [
          'Shedding > 100 strands per day for weeks',
          'Widening central parting line (Female pattern thinning)',
          'Receding hairline or crown thinning (Male pattern baldness)',
          'Scalp visibility under bright light'
        ]
      }}
      approach={{
        title: 'Our 3-Step Hair Regrowth Method',
        description: 'Diagnose, stimulate, and maintain.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopy & Blood Marker Check',
            description: 'Checking follicle miniaturization and ferritin/thyroid levels.'
          },
          {
            stepNumber: '02',
            title: 'Growth Factor (GFC) Therapy',
            description: 'Micro-infusing growth factors into scalp for follicle awakening.'
          },
          {
            stepNumber: '03',
            title: 'Follicle Nutrition Serum',
            description: 'Targeted topical solutions and peptides to lock in density.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the difference between PRP and GFC for hair loss?',
          answer: 'GFC (Growth Factor Concentrate) is a highly purified, acellular preparation derived from your own blood platelets, delivering a higher, consistent concentration of growth factors with zero pain or inflammation compared to traditional PRP.'
        }
      ]}
    />
  );
}
