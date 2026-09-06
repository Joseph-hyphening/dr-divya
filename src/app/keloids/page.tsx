import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Keloid & Scar Reduction Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical keloid and raised scar treatments in Whitefield Bangalore. Intralesional therapies, laser scar remodeling, and preventive care by Dr. Divya Sharma.',
  keywords: [
    'Keloid treatment Bangalore',
    'Hypertrophic scar removal Whitefield',
    'Intralesional steroid injection keloid',
    'Earlobe keloid treatment Bangalore',
    'Raised scar remodeling',
    'Best dermatologist for keloids Bangalore',
    'Dr Divya Sharma scar clinic'
  ],
  alternates: {
    canonical: 'https://www.drdivyasharma.com/keloids',
  },
  openGraph: {
    title: 'Keloid & Raised Scar Reduction Treatment Bangalore | Dr. Divya Sharma',
    description: 'Targeted medical protocols for stubborn earlobe, chest, and surgical keloids with intralesional therapies and laser scar remodeling.',
    url: 'https://www.drdivyasharma.com/keloids',
    siteName: 'Dr. Divya Sharma Dermatology',
    images: [
      {
        url: '/dr-divya.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Divya Sharma - Keloid & Scar Treatment Specialist Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intralesional & Laser Keloid Treatment Bangalore | Dr. Divya Sharma',
    description: 'Evidence-based protocols to flatten raised scars, eliminate itching, and prevent recurrence in Whitefield.',
    images: ['/dr-divya.png'],
  },
};

export default function KeloidsPage() {
  return (
    <TreatmentPageTemplate
      canonicalUrl="https://www.drdivyasharma.com/keloids"
      parentCategory={{
        name: 'Medical Dermatology',
        href: '/medical-dermatology'
      }}
      currentPageName="Keloid & Raised Scar Care"
      categorySiblings={[
        { label: 'Keloids & Scars', href: '/keloids' },
        { label: 'Acne Scar Removal', href: '/scar-removal' },
        { label: 'Acne & Pimples', href: '/acne-pimples' },
        { label: 'Skin Tags & Cysts', href: '/skin-tags' },
        { label: 'Melasma & Pigment', href: '/melasma' },
        { label: 'Skin Resurfacing', href: '/skin-resurfacing-texture' },
        { label: 'Stretch Marks', href: '/stretch-marks' },
        { label: 'Keratosis Pilaris', href: '/keratosis-pilaris' },
        { label: 'Psoriasis Care', href: '/psoriasis' },
        { label: 'Eczema Relief', href: '/eczema' }
      ]}
      hero={{
        badge: 'Specialized Scar Dermatological Care',
        title: 'Intralesional & Laser Keloid Reduction',
        hookSubtitle: 'Flatten Elevated Scars, Relieve Pain & Itching, and Stop Keloid Expansion',
        description: 'Targeted medical protocols for stubborn earlobe, chest, shoulder, and post-surgical keloids supervised by Senior Dermatologist Dr. Divya Sharma.',
        treatmentName: 'Keloid & Scar Consultation',
        keyBenefits: [
          'Intralesional Corticosteroid & Cytotoxic Agents',
          'Pain & Pruritus (Itching) Relief',
          'Prevent Post-Excision Keloid Recurrence',
          'Radiofrequency & Laser Scar Flattening'
        ]
      }}
      overview={{
        title: 'Pathophysiology of Keloid & Raised Scar Formation',
        paragraphs: [
          <p key="p1">
            A keloid is a benign, raised dermal fibroproliferative growth that develops at the site of skin trauma. Unlike normal surgical incisions or confined{' '}
            <Link href="/scar-removal" className="text-primary font-semibold hover:underline">
              hypertrophic acne scars
            </Link>
            —which stay strictly within original wound boundaries—keloids aggressively invade surrounding healthy tissue due to abnormal, non-arresting collagen synthesis.
          </p>,
          <p key="p2">
            During standard wound healing, dermal fibroblasts synthesize collagen to close the epithelial breach. In individuals with genetic susceptibility or after severe{' '}
            <Link href="/acne-pimples" className="text-primary font-semibold hover:underline">
              inflammatory cystic acne breakouts
            </Link>
            , continuous release of Transforming Growth Factor-beta (TGF-β) causes fibroblasts to overproduce thick, disorganized bundles of Type I and Type III collagen without undergoing expected cellular apoptosis. This produces a rubbery, erythematous nodule that frequently throbs, aches, and itches severely.
          </p>,
          <p key="p3">
            At Dr. Divya Sharma&apos;s clinic in Whitefield, Bangalore, we emphasize combination clinical therapy over simple excision. Pure surgical excision alone carries a recurrence rate exceeding 70%. Our multi-modality approach combines micro-fine intralesional anti-mitotic agents, occlusive silicone compression,{' '}
            <Link href="/chemical-peels" className="text-primary font-semibold hover:underline">
              medical chemical peels for pigmentation
            </Link>
            , and vascular{' '}
            <Link href="/skin-resurfacing-texture" className="text-primary font-semibold hover:underline">
              laser skin resurfacing
            </Link>{' '}
            to choke abnormal feeder blood vessels, soften dense collagen matrices, and achieve permanent scar flattening.
          </p>
        ],
        causesOrSymptomsTitle: 'Common Triggers & High-Risk Areas',
        causesOrSymptoms: [
          'Earlobe piercings, body piercings & minor dermal trauma',
          'Severe inflammatory acne pimples & chickenpox scars',
          'Post-surgical incision lines, BCG vaccination sites & burn scars',
          'Firm, raised, pink to dark brown shiny nodules extending beyond original wound',
          'Sharp stabbing pain, burning sensations & intense localized itching',
          'Genetic susceptibility & Fitzpatrick skin types IV-VI'
        ]
      }}
      approach={{
        title: 'Our Phased Keloid Flattening Protocol',
        description: 'A 3-step clinical strategy designed to halt active fibroblast proliferation and restore flat, soft skin texture.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Mapping & Vascular Assessment',
            description: 'Differentiating true keloids from hypertrophic scars and evaluating lesion vascularity and thickness.'
          },
          {
            stepNumber: '02',
            title: 'Precision Intralesional Micro-Injections',
            description: 'Delivering micro-doses of anti-fibrotic medications directly into the core of the keloid matrix.'
          },
          {
            stepNumber: '03',
            title: 'Vascular Laser & Occlusive Pressure Therapy',
            description: 'Employing vascular laser pulses to seal feeding micro-vessels combined with medical silicone gel compression.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the main difference between a keloid and a hypertrophic scar?',
          answer: 'Hypertrophic scars stay strictly within the original wound margin and often soften slowly over time. Keloids grow beyond original injury boundaries, invading healthy surrounding skin, and rarely regress without medical treatment.'
        },
        {
          question: 'Are intralesional injections for keloids painful?',
          answer: 'Because keloid tissue is dense, injections can cause mild brief pressure. We mix localized anesthetic agents and apply topical numbing to ensure minimal patient discomfort during treatment.'
        },
        {
          question: 'Why does earlobe piercing so frequently cause keloids?',
          answer: 'Earlobes contain dense connective tissue. Piercing creates a full-thickness dermal wound. In predisposed individuals, continuous friction from earrings triggers hyperactive collagen synthesis.'
        },
        {
          question: 'How many injection sessions are needed to flatten a keloid?',
          answer: 'Most keloids require 3 to 6 injection sessions spaced 3 to 4 weeks apart. Thicker, older keloids may require additional sessions or combination laser therapy.'
        },
        {
          question: 'Can surgical removal completely get rid of a keloid?',
          answer: 'Surgical cutting alone has a very high recurrence rate (70-80%). Surgery must always be combined with immediate post-operative corticosteroid injections or silicone compression to prevent the keloid from returning larger.'
        },
        {
          question: 'What can I do at home to prevent keloid formation after injury?',
          answer: 'Apply medical silicone gel or silicone sheets over healing wounds for 12 hours daily, avoid unnecessary cosmetic piercings or tattoos if you have a family history of keloids, and seek early dermatological care.'
        }
      ]}
      relatedLinks={[
        { title: "Acne Scar Removal", href: "/scar-removal", desc: "Fractional CO2 laser, subcision, and RF microneedling for deep facial and body acne scars" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Prevent post-acne inflammatory scarring with early clinical treatment and medical topicals" },
        { title: "Radiofrequency Skin Tags & Cysts", href: "/skin-tags", desc: "Radiofrequency snip removal for skin tags, moles, and benign raised dermal lesions" },
        { title: "Stretch Marks Collagen Remodeling", href: "/stretch-marks", desc: "Collagen remodeling and microneedling RF for deep skin striae and tissue tears" },
        { title: "Skin Resurfacing & Texture", href: "/skin-resurfacing-texture", desc: "Laser scar smoothing and overall skin texture renewal for smooth contours" },
        { title: "Medical Chemical Peels", href: "/chemical-peels", desc: "Medical exfoliation to even out post-inflammatory hyperpigmentation around scars" }
      ]}
    />
  );
}
