import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Under Eye Dark Circles Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Specialized dermatological treatment for periorbital dark circles, under-eye hollows, and pigmentation in Whitefield Bangalore by Dr. Divya Sharma.',
  keywords: [
    'Dark circles treatment Bangalore',
    'Under eye pigmentation Whitefield',
    'Tear trough hollow treatment Bangalore',
    'Periorbital hyperpigmentation laser',
    'Best dermatologist for dark circles Bangalore',
    'Eye circle chemical peels'
  ],
  alternates: {
    canonical: 'https://www.drdivyasharma.com/dark-circles',
  },
  openGraph: {
    title: 'Under Eye Dark Circles Treatment Bangalore | Dr. Divya Sharma',
    description: 'Targeted clinical protocols for periorbital dark circles, under-eye hollows, and vascular shadowing in Whitefield.',
    url: 'https://www.drdivyasharma.com/dark-circles',
    siteName: 'Dr. Divya Sharma Dermatology',
    images: [
      {
        url: '/dr-divya.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Divya Sharma - Dark Circles & Under Eye Specialist Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dark Circles & Under-Eye Care Bangalore | Dr. Divya Sharma',
    description: 'Medical and laser solutions for pigmentary, vascular, and structural under-eye dark circles.',
    images: ['/dr-divya.png'],
  },
};

export default function DarkCirclesPage() {
  return (
    <TreatmentPageTemplate
      canonicalUrl="https://www.drdivyasharma.com/dark-circles"
      parentCategory={{
        name: 'Medical Dermatology',
        href: '/medical-dermatology'
      }}
      currentPageName="Under Eye Dark Circles & Shadows"
      categorySiblings={[
        { label: 'Dark Circles', href: '/dark-circles' },
        { label: 'Melasma & Pigment', href: '/melasma' },
        { label: 'Dark Spot Fading', href: '/dark-spot-and-pigment-reduction' },
        { label: 'Laser Toning', href: '/laser-toning' },
        { label: 'Chemical Peels', href: '/chemical-peels' },
        { label: 'Acne Pimples', href: '/acne-pimples' },
        { label: 'Skin Allergies', href: '/skin-allergies' },
        { label: 'Eczema Relief', href: '/eczema' }
      ]}
      hero={{
        badge: 'Clinical Periorbital Rejuvenation',
        title: 'Targeted Under-Eye Dark Circle Therapy',
        hookSubtitle: 'Brighten Shadowed Eyes, Restore Hollow Tear Troughs & Refresh Your Appearance',
        description: 'Comprehensive dermatological care addressing structural hollows, vascular pooling, and melanin pigmentation surrounding the delicate eye contour.',
        treatmentName: 'Dark Circles Consultation',
        keyBenefits: [
          'Dual Pigment & Vascular Correction',
          'Tear Trough Volume Assessment',
          'Safe Gentle Laser & Peel Protocols',
          'Dermatologist Prescribed Eye Serums'
        ]
      }}
      overview={{
        title: 'Understanding Periorbital Hyperpigmentation & Shadows',
        paragraphs: [
          <p key="p1">
            Periorbital hyperpigmentation (commonly referred to as under-eye dark circles) is an intricate aesthetic and medical concern. The skin of the lower eyelid is the thinnest epidermal tissue on the human body (measuring barely 0.5mm), making underlying micro-capillaries, bone resorption, and{' '}
            <Link href="/melasma" className="text-primary font-semibold hover:underline">
              hormonal facial melanin pigmentation
            </Link>{' '}
            readily apparent.
          </p>,
          <p key="p2">
            Clinical classification divides dark circles into three primary categories: Pigmentary (melanin deposition from chronic sun exposure or atopic{' '}
            <Link href="/skin-allergies" className="text-primary font-semibold hover:underline">
              skin allergies and eye rubbing
            </Link>
            ), Vascular (sluggish venous blood pooling causing bluish-purple discoloration), and Structural (shadowing created by fat pad thinning and deep tear trough hollows).
          </p>,
          <p key="p3">
            At Dr. Divya Sharma&apos;s Whitefield clinic, we combine peri-ocular micro-peels, gentle{' '}
            <Link href="/laser-toning" className="text-primary font-semibold hover:underline">
              Q-Switched laser toning
            </Link>
            , medical{' '}
            <Link href="/chemical-peels" className="text-primary font-semibold hover:underline">
              chemical peel exfoliation
            </Link>
            , and micro-collagen{' '}
            <Link href="/skin-resurfacing-texture" className="text-primary font-semibold hover:underline">
              skin resurfacing
            </Link>{' '}
            to brighten skin, lift tear troughs, and eliminate persistent shadowing.
          </p>
        ],
        causesOrSymptomsTitle: 'Primary Triggers & Clinical Types',
        causesOrSymptoms: [
          'Pigmentary dark circles (Excess epidermal/dermal melanin from rubbing or allergies)',
          'Vascular dark circles (Bluish/purplish hue from superficial micro-capillary venous stasis)',
          'Structural shadowing (Deep tear trough groove & cheek volume loss)',
          'Chronic digital eye strain, inadequate sleep & micro-circulatory fatigue',
          'Atopic dermatitis, allergic rhinitis & seasonal sinus congestion',
          'Genetic thin skin collagen matrix & periorbital skin translucency'
        ]
      }}
      approach={{
        title: 'Our Phased Periorbital Refresh Strategy',
        description: 'A 3-step specialized clinical approach to brighten dark circles and rebuild delicate under-eye collagen.',
        steps: [
          {
            stepNumber: '01',
            title: 'Anatomical Periorbital Diagnostic Mapping',
            description: 'Differentiating between superficial melanin, deep vascular stasis, and structural hollow shadowing.'
          },
          {
            stepNumber: '02',
            title: 'Gentle Combination Clinical Therapy',
            description: 'Executing customized peri-ocular peels, micro-laser toning, or micro-channeling peptide growth factor boosters.'
          },
          {
            stepNumber: '03',
            title: 'Infraorbital Homecare & Barrier Defense',
            description: 'Prescribing bio-peptide eye serums, vitamin K/C topical complexes, and blue light protective eye care.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Why do commercial dark circle eye creams often fail?',
          answer: 'Most commercial eye creams only offer mild hydration. If your dark circles are caused by structural tear trough hollows or deep vascular pooling, topical creams cannot alter deep bone anatomy or venous circulation.'
        },
        {
          question: 'Are laser treatments safe for the delicate skin around the eyes?',
          answer: 'Yes, when performed by an experienced dermatologist using specialized low-fluence settings and protective intra-ocular laser shields to ensure complete eye safety.'
        },
        {
          question: 'How do tear trough treatments help with under-eye dark circles?',
          answer: 'If dark circles are caused by structural shadow cast by a deep tear trough depression, restoring volume lifts the hollow groove, reflecting light evenly and eliminating the shadow.'
        },
        {
          question: 'Can rubbing my eyes make dark circles permanently worse?',
          answer: 'Yes! Persistent rubbing causes micro-trauma to fragile capillaries, leading to microscopic blood leakage (hemosiderin staining) and triggering post-inflammatory hyperpigmentation.'
        },
        {
          question: 'How many sessions of chemical peels or laser toning are needed?',
          answer: 'Pigmentary and vascular dark circles typically improve significantly over 4 to 6 sessions spaced 3 to 4 weeks apart.'
        },
        {
          question: 'Does sleep deprivation really cause under-eye dark circles?',
          answer: 'Inadequate sleep causes pale, fatigued skin, making dark underlying blood vessels more visible. It also leads to fluid retention under the eyes, worsening shadow formation.'
        }
      ]}
      relatedLinks={[
        { title: "Melasma & Hormonal Pigmentation", href: "/melasma", desc: "Advanced combination therapy for facial discoloration & stubborn dermal pigment" },
        { title: "Laser Toning Pigment Therapy", href: "/laser-toning", desc: "Low-energy Q-Switched laser sessions for gentle pigment clearance & skin brightening" },
        { title: "Medical Chemical Peels", href: "/chemical-peels", desc: "Specialized superficial peels for delicate facial skin texture & pigment exfoliation" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Laser radiance facial for pore tightening and glowing facial skin" },
        { title: "Dark Spot & Sun Damage Fading", href: "/dark-spot-and-pigment-reduction", desc: "Targeted clinical fading for localized facial hyperpigmentation and freckles" },
        { title: "Skin Resurfacing & Texture", href: "/skin-resurfacing-texture", desc: "Micro-collagen remodeling for smooth skin texture & micro-line reduction" }
      ]}
    />
  );
}
