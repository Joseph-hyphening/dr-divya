import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Rashes & Infection Treatment Bangalore | Dr. Divya Sharma',
  description: 'Expert medical diagnosis and fast relief for fungal, bacterial, viral skin rashes & ringworm in Whitefield Bangalore.',
  keywords: [
    'Skin rash treatment Bangalore',
    'Fungal infection ringworm specialist',
    'Bacterial folliculitis treatment Whitefield',
    'Tinea cruris dermatologist Bangalore',
    'Itchy skin infection clinic',
    'Dr Divya Sharma skin clinic'
  ],
  alternates: {
    canonical: 'https://www.drdivyasharma.com/rashes-skin-infection',
  },
  openGraph: {
    title: 'Skin Rashes & Infection Treatment Bangalore | Dr. Divya Sharma',
    description: 'Accurate microscopic diagnostics and fast clinical clearance for fungal, bacterial, and viral skin rashes in Whitefield.',
    url: 'https://www.drdivyasharma.com/rashes-skin-infection',
    siteName: 'Dr. Divya Sharma Dermatology',
    images: [
      {
        url: '/dr-divya.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Divya Sharma - Skin Rash & Infection Specialist Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin Rashes & Infection Care Bangalore | Dr. Divya Sharma',
    description: 'Evidence-based antimicrobial treatment for stubborn fungal infections, ringworm, and bacterial rashes.',
    images: ['/dr-divya.png'],
  },
};

export default function RashesInfectionPage() {
  return (
    <TreatmentPageTemplate
      canonicalUrl="https://www.drdivyasharma.com/rashes-skin-infection"
      parentCategory={{
        name: 'Medical Dermatology',
        href: '/medical-dermatology'
      }}
      currentPageName="Skin Rashes & Microbial Infections"
      categorySiblings={[
        { label: 'Infections & Rashes', href: '/rashes-skin-infection' },
        { label: 'Skin Allergies', href: '/skin-allergies' },
        { label: 'Steroid Abuse (TSW)', href: '/topical-steroids' },
        { label: 'Eczema Relief', href: '/eczema' },
        { label: 'Psoriasis Care', href: '/psoriasis' },
        { label: 'Baby Rashes', href: '/common-skin-rashes-in-babies' },
        { label: 'Food Allergies', href: '/food-allergy' },
        { label: 'Keloids & Scars', href: '/keloids' }
      ]}
      hero={{
        badge: 'Infectious & Inflammatory Dermatology',
        title: 'Skin Rashes & Infection Relief',
        hookSubtitle: 'Fast Diagnosis & Clearance for Fungal Tinea, Bacterial Impetigo & Viral Rashes',
        description: 'Get immediate relief from painful, spreading, or itchy skin rashes caused by fungal overgrowth, bacterial folliculitis, or viral infections.',
        treatmentName: 'Skin Rash & Infection Consultation',
        keyBenefits: [
          'Microscopic Fungal & Bacterial Diagnostics',
          'Fast Relief from Itching & Spreading',
          'Targeted Antimicrobial Prescriptions',
          'Prevents Recurrent Ringworm / Tinea'
        ]
      }}
      overview={{
        title: 'Targeted Diagnosis of Skin Infections & Rashes',
        paragraphs: [
          <p key="p1">
            Cutaneous rashes can originate from varied infectious etiologies—including dermatophyte fungal species (such as <em>Tinea corporis, Tinea cruris</em>), superficial bacterial infections (staphylococcal folliculitis, impetigo), or viral exanthems. Clinically differentiating these from allergic{' '}
            <Link href="/skin-allergies" className="text-primary font-semibold hover:underline">
              urticaria & skin allergies
            </Link>{' '}
            or chronic{' '}
            <Link href="/eczema" className="text-primary font-semibold hover:underline">
              atopic eczema
            </Link>{' '}
            is paramount.
          </p>,
          <p key="p2">
            A critical medical error frequently seen in India is treating an unverified itchy fungal rash with combination over-the-counter creams containing potent corticosteroids. This leads to <em>Tinea Incognito</em> and severe{' '}
            <Link href="/topical-steroids" className="text-primary font-semibold hover:underline">
              topical steroid damaged skin (TSW)
            </Link>
            , where the fungus aggressively expands while local immunity is suppressed.
          </p>,
          <p key="p3">
            In our Whitefield clinic, Dr. Divya Sharma utilizes direct microscopic KOH examination, dermoscopy, and Wood&apos;s lamp evaluation to identify exact pathogens and prescribe curative oral/topical antifungals or antibacterials under our renowned{' '}
            <Link href="/medical-dermatology" className="text-primary font-semibold hover:underline">
              medical dermatology clinic
            </Link>
            .
          </p>
        ],
        causesOrSymptomsTitle: 'Infections We Treat',
        causesOrSymptoms: [
          'Fungal Ringworm (Tinea Corporis, Cruris & Pedis)',
          'Bacterial Folliculitis, Furuncles & Impetigo',
          'Viral Herpes Simplex & Zoster (Shingles) Rashes',
          'Sweat Rashes (Miliaria Rubra & Intertrigo)',
          'Infant and childhood infectious rashes & diaper dermatitis'
        ]
      }}
      approach={{
        title: 'Our Rash Resolution Workflow',
        description: 'Accurate testing and rapid symptom control.',
        steps: [
          {
            stepNumber: '01',
            title: 'KOH Scraping & Dermoscopy',
            description: 'Identifying fungal hyphae or bacterial pustules under microscope.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Prescription',
            description: 'Prescribing exact oral and topical antimicrobials.'
          },
          {
            stepNumber: '03',
            title: 'Hygiene & Clothing Protocols',
            description: 'Guiding anti-humidity routines to stop re-infection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Why does fungal ringworm return repeatedly?',
          answer: 'Fungal infections return when treated with over-the-counter steroid creams or when treatment is stopped prematurely as soon as symptoms subside. Completing a full course of clinical antifungals and practicing strict dry hygiene prevents relapse.'
        },
        {
          question: 'Can skin infections leave permanent scars or dark spots?',
          answer: 'Superficial infections typically resolve with temporary post-inflammatory hyperpigmentation. Deep bacterial boils or excoriated lesions can leave scars, which can be mitigated with early medical care.'
        },
        {
          question: 'Are skin infections contagious to family members?',
          answer: 'Yes, fungal ringworm and bacterial impetigo can spread through direct skin contact or sharing towels, bedsheets, and clothing. We provide comprehensive sanitization protocols for the whole family.'
        }
      ]}
      relatedLinks={[
        { title: "Skin Allergies & Urticaria", href: "/skin-allergies", desc: "Differential diagnosis and rapid relief for non-infectious allergic hives and welts" },
        { title: "Topical Steroid Withdrawal (TSW)", href: "/topical-steroids", desc: "Restoring damaged skin barriers caused by steroid-mixed antifungal creams" },
        { title: "Atopic Eczema & Dermatitis", href: "/eczema", desc: "Long-term barrier reconstruction for non-infectious chronic dry itchy patches" },
        { title: "Common Baby Skin Rashes", href: "/common-skin-rashes-in-babies", desc: "Pediatric care for gentle infant skin rashes, heat spots, and viral exanthems" },
        { title: "Psoriasis Plaque Management", href: "/psoriasis", desc: "Distinguishing scaly infections from chronic autoimmune psoriasis plaques" },
        { title: "Medical Dermatology Hub", href: "/medical-dermatology", desc: "Browse our comprehensive clinical services in Whitefield Bangalore" }
      ]}
    />
  );
}
