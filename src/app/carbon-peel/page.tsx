import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Carbon Laser Peel Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Deep pore purification, oil control, and skin rejuvenation with US-FDA Q-Switched Carbon Laser Peel by Dr. Divya Sharma in Whitefield Bangalore.',
};

export default function CarbonPeelPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Medical Carbon Laser Technology',
        title: 'Carbon Laser Peel',
        hookSubtitle: 'Deep Follicular Detoxification, Excess Sebum Control & Instant Skin Refinement',
        description: 'A non-invasive medical laser procedure combining liquid carbon solution with Q-Switched Nd:YAG laser energy to purge pores, destroy acne-causing bacteria, and reveal ultra-smooth skin.',
        treatmentName: 'Carbon Laser Peel Consultation',
        keyBenefits: [
          'Unclogs Deep Follicular Debris & Blackheads',
          'Regulates Excessive Sebum & Oil Production',
          'Destroys Cutibacterium Acnes Bacteria',
          'Tightens Open Pores with Zero Downtime'
        ]
      }}
      overview={{
        title: 'The Science of Photo-Acoustic Carbon Exfoliation',
        paragraphs: [
          'The Carbon Laser Peel is a state-of-the-art procedure popular among patients dealing with persistent blackheads, enlarged open pores, dullness, and oily skin.',
          'A medical-grade liquid carbon suspension is applied to the face, penetrating deep into sebaceous pores. When the Q-Switched Nd:YAG laser pulses pass over the treatment area, the carbon particles absorb the light energy and vaporize in micro-explosions, gently clearing dead epidermal cells and thermalizing pore walls to stimulate collagen tightening.'
        ],
        causesOrSymptomsTitle: 'Key Indications for Carbon Laser Peel',
        causesOrSymptoms: [
          'Enlarged, congested facial pores and stubborn blackheads',
          'Excessive midday oily shine and greasy skin texture',
          'Mild active acne breakouts and inflammatory congestion',
          'Superficial sun-tanning, uneven skin tone, and dullness',
          'Pre-event skin smoothing and makeup base perfection'
        ]
      }}
      approach={{
        title: 'Our 3-Step Carbon Peel Protocol',
        description: 'Safe, comfortable, and immediately revitalizing.',
        steps: [
          {
            stepNumber: '01',
            title: 'Medical Carbon Mask Application',
            description: 'A pure carbon paste is smoothed across cleansed skin and allowed to settle deep into pores for 10–15 minutes.'
          },
          {
            stepNumber: '02',
            title: 'Q-Switched Laser Vaporization',
            description: 'High-frequency laser passes break down carbon particles, exfoliating dead cells and contracting pore diameters.'
          },
          {
            stepNumber: '03',
            title: 'Antioxidant & Sunscreen Shield',
            description: 'Application of soothing hyaluronic acid hydration and broad-spectrum mineral sunscreen.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is the Carbon Laser Peel painful?',
          answer: 'No. Most patients feel only a warm sensation and a slight popping tingling as the laser sweeps away the carbon. No numbing cream is required.'
        },
        {
          question: 'How does Carbon Peel differ from Hollywood Peel?',
          answer: 'Both utilize carbon and Q-Switched lasers. The Hollywood Peel includes an additional sub-surface photothermal mode to target deeper dermal collagen for anti-aging and fine line smoothing, while the standard Carbon Peel is optimized for deep pore detox, acne control, and oil reduction.'
        }
      ]}
      relatedLinks={[
        { title: 'Hollywood Peel', href: '/hollywood-peel', desc: 'Red carpet laser clarity facial' },
        { title: 'Laser Hair Reduction', href: '/unwanted-hair', desc: 'US-FDA permanent laser reduction' },
        { title: 'Q-Switched Laser Toning', href: '/laser-toning', desc: 'Advanced collagen toning and pigment correction' },
        { title: 'OxyJet MediFacial', href: '/oxyjet-medifacial', desc: 'Pure pressurized oxygen serum hydration' }
      ]}
    />
  );
}
