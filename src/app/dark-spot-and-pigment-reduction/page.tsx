import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Dark Spot & Pigment Reduction Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical dark spot and hyperpigmentation reduction in Whitefield Bangalore. Laser toning, targeted peels, and skin brightening by Dr. Divya Sharma.',
};

export default function DarkSpotAndPigmentReductionPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Precision Pigment Fading Protocol',
        title: 'Targeted Dark Spot & Pigment Reduction',
        hookSubtitle: 'Clear Sun Spots, Faded Post-Acne Marks & Restore Luminosity',
        description: 'Advanced dermatological protocols combining low-energy laser toning, specialized medical peels, and prescription brightening topicals for uniform skin tone.',
        treatmentName: 'Dark Spot Reduction Consultation',
        keyBenefits: [
          'Targeted Sun Spot & Age Spot Fading',
          'Post-Inflammatory Hyperpigmentation (PIH) Clearance',
          'Safe Non-Ablative Q-Switched Laser Toning',
          'Dermatologist Formulated Skincare Prescriptions'
        ]
      }}
      overview={{
        title: 'Understanding Dark Spot & Pigment Accumulation',
        paragraphs: [
          'Dark spots, solar lentigines (sun spots), age spots, and post-inflammatory hyperpigmentation (PIH) are among the most common skin concerns in Indian skin types (Fitzpatrick Types IV-VI). Dark spots occur when localized clusters of epidermal melanocytes become hyperactive, overproducing melanin pigment in response to UV radiation, thermal heat, skin trauma, or inflammatory skin conditions like acne and eczema.',
          'Post-Inflammatory Hyperpigmentation (PIH) develops when an inflammatory skin lesion (like a pimple or bug bite) damages basal epidermal cells, causing melanin pigment to leak into the superficial dermis. Once melanin drops into the dermis, standard over-the-counter brightening creams cannot reach or dissolve the pigment, leaving dark brown or black marks that persist for months or years.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we perform clinical dermoscopy to pinpoint pigment depth. We combine non-ablative Q-Switched Nd:YAG laser toning—which breaks down stubborn melanin deposits into dust-like particles for natural clearing—with specialized medical chemical peels and prescription tyrosinase inhibitors to achieve rapid, lasting spot reduction.'
        ],
        causesOrSymptomsTitle: 'Common Pigmentation Indications',
        causesOrSymptoms: [
          'Post-Acne Dark Marks (Dark brown spots lingering after pimples heal)',
          'Solar Lentigines & Age Spots (Flat tan-to-black spots on cheeks & hands)',
          'Post-inflammatory hyperpigmentation from scratches, burns, or bug bites',
          'Uneven, patchy facial skin tone & sun-induced tanning',
          'Friction hyperpigmentation around mouth, chin & body folds',
          'Dermal pigment deposits resistant to over-the-counter brightening creams'
        ]
      }}
      approach={{
        title: 'Our Phased Spot Clearance Protocol',
        description: 'A 3-stage clinical strategy designed to break down dark spot pigment and prevent future melanin synthesis.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Pigment Depth Analysis',
            description: 'Differentiating superficial epidermal sun spots from deep dermal post-inflammatory pigment.'
          },
          {
            stepNumber: '02',
            title: 'Synergistic Laser Toning & Medical Peels',
            description: 'Delivering precision laser photo-acoustic energy to fragment melanin clusters alongside chemical peeling.'
          },
          {
            stepNumber: '03',
            title: 'Melanin Inhibition & UV Barrier Protection',
            description: 'Prescribing broad-spectrum tinted mineral sunscreen and daily topical melanin inhibitors to maintain clarity.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the main difference between sun spots and melasma?',
          answer: 'Sun spots (lentigines) are small, sharply defined brown spots caused by accumulated UV exposure. Melasma presents as larger, symmetrical brown patches with irregular borders, heavily driven by hormonal fluctuations.'
        },
        {
          question: 'How quickly do dark spots fade with laser treatment?',
          answer: 'Superficial dark marks begin fading within 2 to 3 sessions. Deeper dermal post-acne marks typically show major reduction over 4 to 6 sessions spaced 3 weeks apart.'
        },
        {
          question: 'Why do over-the-counter dark spot creams often fail to work?',
          answer: 'Most OTC creams contain very low concentrations of active ingredients and cannot penetrate deep enough to break down dermal pigment deposits.'
        },
        {
          question: 'Can dark spot laser treatments cause skin lightening or discoloration?',
          answer: 'When performed by a trained dermatologist using calibrated low-fluence settings, laser toning is exceptionally safe and will not cause hypopigmentation or skin bleaching.'
        },
        {
          question: 'How can I prevent dark spots from forming after pimples?',
          answer: 'Never pick or pop pimples! Treat active acne early with prescription topicals, and apply broad-spectrum sunscreen daily over healing spots to prevent UV rays from darkening inflamed skin.'
        },
        {
          question: 'Do I need to wear sunscreen indoors during dark spot treatment?',
          answer: 'Yes! UVA rays penetrate window glass, and high-energy blue light from computer and smartphone screens can trigger melanocytes, darkening spots even while indoors.'
        }
      ]}
      relatedLinks={[
        { title: "Laser Toning", href: "/laser-toning", desc: "Q-Switched laser sessions for targeted pigment clearance & skin radiance" },
        { title: "Melasma & Pigmentation", href: "/melasma", desc: "Specialized clinical protocols for hormonal dark patches & discoloration" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical acid peels for rapid dead cell exfoliation & spot brightening" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Laser facial for porcelain glow, oil balance & refined pore texture" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Clear active breakouts to stop post-acne dark marks at the source" },
        { title: "Dark Circles Refresh", href: "/dark-circles", desc: "Targeted periorbital brightening & tear trough rejuvenation" }
      ]}
    />
  );
}
