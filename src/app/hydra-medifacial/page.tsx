import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hydra MediFacial Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Deep vortex pore extraction, salicylic exfoliation, and intense antioxidant hydration with genuine Hydra MediFacial by Dr. Divya Sharma in Whitefield.',
};

export default function HydraMediFacialPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Vortex Hydro-Dermabrasion',
        title: 'Hydra MediFacial',
        hookSubtitle: 'Gentle Vortex Pore Extraction, Lactic Exfoliation & Intense Antioxidant Saturation',
        description: 'The world-renowned 3-step dermatological facial that cleanses, painlessly extracts blackheads, and drenches skin with nourishing peptides and hyaluronic acid for immediate glass skin clarity.',
        treatmentName: 'Hydra MediFacial Consultation',
        keyBenefits: [
          'Painless Vortex Vacuum Blackhead Extraction',
          'Gentle Salicylic & Glycolic Pore Cleansing',
          'Deep Hyaluronic Acid & Peptide Infusion',
          'Instant Clarifying Glow with Zero Irritation'
        ]
      }}
      overview={{
        title: 'The Gold-Standard in Medical Hydro-Dermabrasion',
        paragraphs: [
          'Unlike traditional salon facials that use harsh manual squeezing and steam that can rupture capillaries, the Hydra MediFacial uses patented vortex suction to dislodge and remove impurities while simultaneously delivering hydrating skin solutions.',
          'At Dr. Divya Sharma Clinic in Whitefield, Bangalore, each Hydra MediFacial is physician-supervised and customized with medical-grade serum boosters tailored to your specific skin needs—from acne control to hyperpigmentation brightening.'
        ],
        causesOrSymptomsTitle: 'Recommended For',
        causesOrSymptoms: [
          'Clogged pores, blackheads, and whitehead congestion',
          'Uneven texture and rough epidermal skin patches',
          'Dull, dehydrated skin lacking radiance',
          'Enlarged facial pores in the T-zone',
          'Monthly skin maintenance for clear, resilient skin health'
        ]
      }}
      approach={{
        title: 'The 3-Step Hydra Protocol',
        description: 'Cleansing, extracting, and hydrating in one comprehensive session.',
        steps: [
          {
            stepNumber: '01',
            title: 'Cleanse & Peel',
            description: 'Gentle lactic acid and botanical peel uncovers a fresh new layer of skin through soothing exfoliation.'
          },
          {
            stepNumber: '02',
            title: 'Extract & Hydrate',
            description: 'Painless vortex vacuum suction removes debris from pores while nourishing with intense moisturizers.'
          },
          {
            stepNumber: '03',
            title: 'Fuse & Protect',
            description: 'Saturating the skin surface with antioxidants and peptides to maximize your natural glow.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How often should I get a Hydra MediFacial?',
          answer: 'For optimal skin health and continuous pore clarity, we recommend one session every 4 weeks. Many patients also schedule a session 2 to 3 days before important celebrations or weddings.'
        },
        {
          question: 'Is there any downtime or peeling after a Hydra MediFacial?',
          answer: 'None at all. Your skin will look immediately cleaner, brighter, and deeply hydrated. You can return to normal work and social activities immediately.'
        }
      ]}
      relatedLinks={[
        { title: 'OxyJet MediFacial', href: '/oxyjet-medifacial', desc: 'Pressurized pure oxygen and peptide hydration' },
        { title: 'Hollywood Peel', href: '/hollywood-peel', desc: 'Spectra laser carbon radiance facial' },
        { title: 'Laser Hair Reduction', href: '/unwanted-hair', desc: 'Painless US-FDA permanent hair reduction' },
        { title: 'Bridal Dermatology Packages', href: '/bridal-dermatology', desc: 'Curated pre-wedding skin regimens' }
      ]}
    />
  );
}
