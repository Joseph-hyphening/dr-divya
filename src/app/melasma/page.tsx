import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Melasma & Pigmentation Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Evidence-based melasma treatment in Whitefield Bangalore. Dermatologist-led protocols for hormonal facial spots, dermal pigmentation, and stubborn dark patches.',
};

export default function MelasmaPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Specialized Dermatological Pigment Protocol',
        title: 'Clinical Melasma & Hormonal Pigmentation Therapy',
        hookSubtitle: 'Target Deep Dermal & Epidermal Melanin Deposition for Clearer, Even Skin Tone',
        description: 'Overcome stubborn butterfly facial pigmentation, dark patches, and sun-induced discoloration with customized combination medical therapies supervised by Gold Medalist Dermatologist Dr. Divya Sharma.',
        treatmentName: 'Melasma Consultation',
        keyBenefits: [
          'Dual Action Epidermal & Dermal Pigment Fading',
          'Hormonal & Vascular Trigger Management',
          'Safe Low-Fluence Laser Toning Protocols',
          'Long-Term Relapse Prevention Strategy'
        ]
      }}
      overview={{
        title: 'Pathophysiology of Melasma & Hyperpigmentation',
        paragraphs: [
          'Melasma is a complex, chronic acquired hyperpigmentary disorder characterized by symmetrical light-to-dark brown macules and patches across the forehead, cheeks, nasal bridge, upper lip, and chin. Unlike simple freckles or localized sun spots, melasma involves multi-factorial dysfunction involving hyperactive melanocytes, altered vascularity, basement membrane disruption, and localized dermal inflammation.',
          'Hormonal fluctuations—such as elevated estrogen and progesterone during pregnancy, oral contraceptive use, or thyroid imbalance—sensitize melanocytes to ultraviolet (UVA/UVB) radiation and high-energy visible (HEV) blue light. This triggers overproduction of melanin pigment via the tyrosinase enzyme pathway, depositing pigment into both the superficial epidermis and deeper dermal layers (dermal melanophages).',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we recognize that aggressive, high-energy laser treatments can worsen melasma by triggering post-inflammatory hyperpigmentation. We utilize ultra-gentle, evidence-based combination strategies including prescription topical tyrosinase inhibitors, systemic oral tranexamic acid, low-fluence Q-Switched laser toning, and targeted medical chemical peels to clear pigment while preserving skin barrier health.'
        ],
        causesOrSymptomsTitle: 'Common Melasma Patterns & Triggers',
        causesOrSymptoms: [
          'Centrofacial pattern (Forehead, cheeks, nose, upper lip & chin involvement)',
          'Malar pattern (Confinement to cheekbones and zygomatic arch)',
          'Pregnancy-induced chloasma ("mask of pregnancy") & hormonal therapy',
          'Unprotected exposure to direct sunlight, heat & HEV blue light screens',
          'Vascular hyper-reactivity (Increased capillary density underlying pigment patches)',
          'Genetic predisposition & Fitzpatricks skin types III-V'
        ]
      }}
      approach={{
        title: 'Our Phased Melasma Clearing Strategy',
        description: 'A 3-stage clinical approach focused on pigment suppression, deep dermal clearing, and long-term stabilization.',
        steps: [
          {
            stepNumber: '01',
            title: 'Wood Lamp & Dermoscopic Pigment Profiling',
            description: 'Accurately categorizing melasma into epidermal, dermal, or mixed subtypes to select precise therapeutic agents.'
          },
          {
            stepNumber: '02',
            title: 'Synergistic Combination Medical Therapy',
            description: 'Integrating prescription melanogenesis inhibitors, medical peels, and low-fluence Q-Switched laser toning.'
          },
          {
            stepNumber: '03',
            title: 'Maintenance & UV/Blue Light Defense',
            description: 'Customizing broad-spectrum tinted mineral sunscreen formulations and barrier repair regimes to prevent recurrence.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can melasma be cured permanently?',
          answer: 'Melasma is a chronic condition driven by hormonal and genetic factors. While complete clearance can be achieved through clinical treatment, maintaining long-term results requires strict daily sun protection, blue light defense, and periodic maintenance protocols.'
        },
        {
          question: 'Why does normal sunscreen fail to protect against melasma flare-ups?',
          answer: 'Standard sunscreens only block UV rays. Melasma melanocytes are also triggered by visible light (blue light) and infrared heat. Tinted mineral sunscreens containing iron oxides are essential to block visible light wavelengths.'
        },
        {
          question: 'Is laser treatment safe for melasma on Indian skin?',
          answer: 'High-power ablative lasers can trigger severe rebound melasma. However, low-fluence non-ablative Q-Switched laser toning performed by an experienced dermatologist gently shatters pigment without heating or irritating melanocytes.'
        },
        {
          question: 'What role does oral Tranexamic Acid play in melasma treatment?',
          answer: 'Oral Tranexamic Acid works by inhibiting the plasminogen/plasmin pathway, reducing melanocyte-stimulating hormone (MSH) and downregulating both melanin synthesis and underlying micro-vascular formation.'
        },
        {
          question: 'How do chemical peels help with facial dark patches?',
          answer: 'Specialized superficial medical peels (like Glycolic, Lactic, Kojic, or Mandelic acid peels) exfoliate pigment-laden epidermal cells, boosting topical cream penetration and accelerating uniform skin renewal.'
        },
        {
          question: 'How soon can I expect to see fading of my dark patches?',
          answer: 'Initial pigment softening typically becomes visible within 4 to 6 weeks of starting combination therapy, with optimal clearance observed over 3 to 6 months of disciplined clinical care.'
        }
      ]}
      relatedLinks={[
        { title: "Laser Toning", href: "/laser-toning", desc: "Low-fluence Q-Switched Nd:YAG laser sessions for deep dermal pigment clearance" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Targeted medical peels for epidermal spot fading and uniform skin exfoliation" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Clinical protocols for sun spots, age spots, and post-inflammatory dark marks" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Non-invasive laser facial for instant radiance, pore refinement & skin tone evenness" },
        { title: "Dark Circles Refresh", href: "/dark-circles", desc: "Targeted care for periorbital hyperpigmentation & under-eye dark circles" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Prevent post-acne inflammatory dark marks with targeted acne clearance" }
      ]}
    />
  );
}
