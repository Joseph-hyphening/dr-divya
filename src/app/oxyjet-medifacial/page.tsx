import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'OxyJet MediFacial Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Pure hyperbaric oxygen and peptide infusion for instant cellular hydration, detoxification, and dewy glow at Dr. Divya Sharma Clinic in Whitefield.',
};

export default function OxyJetMediFacialPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Hyperbaric Oxygen Infusion Technology',
        title: 'OxyJet MediFacial',
        hookSubtitle: 'Pressurized Pure Medical Oxygen & Active Peptides for Dewy, Plump Radiance',
        description: 'A luxurious dermatological MediFacial utilizing pulsed hyperbaric oxygen pressure to shoot vital active ingredients, antioxidants, and hyaluronic acid into the deep epidermis without needles.',
        treatmentName: 'OxyJet MediFacial Consultation',
        keyBenefits: [
          'High-Pressure Pure Oxygen Micro-Infusion',
          'Intense Epidermal Plumpness & Hydration',
          'Calms Stressed, Inflamed & Sensitive Skin',
          'Instant Luminous Dewy Finish with Zero Downtime'
        ]
      }}
      overview={{
        title: 'Breathe Pure Oxygen into Dull, Fatigued Skin',
        paragraphs: [
          'Urban pollution, digital blue light, UV radiation, and stress deprive skin cells of essential cellular oxygen, leading to early fine lines, dehydration, and sluggish barrier renewal.',
          'The OxyJet MediFacial utilizes medical-grade hyperbaric oxygen pressure to gently deliver customized bio-active serums—including low-molecular-weight hyaluronic acid, glutathione, vitamin complexes, and copper peptides—directly into cellular layers without any needles or trauma.'
        ],
        causesOrSymptomsTitle: 'Recommended For',
        causesOrSymptoms: [
          'Dehydrated, dull, tired-looking facial skin',
          'Pre-party, red carpet, or bridal instant radiance',
          'Sensitive, red, or easily irritated skin types',
          'Post-laser or post-peel soothing and accelerated healing',
          'Fine dehydration lines around the mouth and eyes'
        ]
      }}
      approach={{
        title: 'Our 3-Phase OxyJet Protocol',
        description: 'Cooling, deeply relaxing, and immediately revitalizing.',
        steps: [
          {
            stepNumber: '01',
            title: 'Oxygen Micro-Exfoliation',
            description: 'Pulsed oxygen and enzyme solution sweeps away dead surface cells and clears congested pores.'
          },
          {
            stepNumber: '02',
            title: 'Hyperbaric Serum Jet Delivery',
            description: 'High-pressure oxygen delivers hyaluronic acid and botanical peptides deep into the epidermis.'
          },
          {
            stepNumber: '03',
            title: 'Pure Oxygen Inhalation & Shield',
            description: 'Soothing pure oxygen dome bath to energize cellular repair, finished with ceramide moisture lock.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is OxyJet MediFacial safe for acne-prone skin?',
          answer: 'Yes! Pure oxygen creates an aerobic environment that is naturally lethal to anaerobic Cutibacterium acnes bacteria, helping calm inflammatory breakouts while soothing redness.'
        },
        {
          question: 'Can I wear makeup after an OxyJet MediFacial?',
          answer: 'Yes, although most patients prefer to let their bare skin glow naturally for the rest of the day. There is zero peeling, flaking, or redness.'
        }
      ]}
      relatedLinks={[
        { title: 'Hydra MediFacial', href: '/hydra-medifacial', desc: 'Vortex-vacuum deep pore extraction and hydration' },
        { title: 'Hollywood Peel', href: '/hollywood-peel', desc: 'Instant red carpet laser clarity facial' },
        { title: 'Bridal Dermatology Packages', href: '/bridal-dermatology', desc: 'Curated pre-wedding skin and glow routines' },
        { title: 'Laser Hair Reduction', href: '/unwanted-hair', desc: 'Painless US-FDA body hair reduction' }
      ]}
    />
  );
}
