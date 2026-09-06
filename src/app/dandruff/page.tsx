import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Chronic Dandruff & Scalp Dermatitis Treatment Bangalore | Dr. Divya Sharma',
  description: 'Relieve stubborn scalp dandruff, seborrheic dermatitis, scaling, and scalp itching with medical trichology care in Whitefield Bangalore.',
  keywords: [
    'Dandruff treatment Bangalore',
    'Seborrheic dermatitis scalp Whitefield',
    'Best trichologist Bangalore',
    'Scalp fungus Malassezia wash',
    'Scalp psoriasis vs dandruff',
    'Dr Divya Sharma hair clinic'
  ],
  alternates: {
    canonical: 'https://www.drdivyasharma.com/dandruff',
  },
  openGraph: {
    title: 'Chronic Dandruff & Scalp Dermatitis Treatment Bangalore | Dr. Divya Sharma',
    description: 'Medical trichology protocols to eradicate Malassezia yeast, eliminate stubborn flaking, and prevent dandruff-induced hair loss.',
    url: 'https://www.drdivyasharma.com/dandruff',
    siteName: 'Dr. Divya Sharma Dermatology',
    images: [
      {
        url: '/dr-divya.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Divya Sharma - Scalp & Dandruff Specialist Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dandruff & Scalp Care Bangalore | Dr. Divya Sharma',
    description: 'Targeted medical antifungal therapies and barrier repair for seborrheic scalp dermatitis.',
    images: ['/dr-divya.png'],
  },
};

export default function DandruffTreatmentPage() {
  return (
    <TreatmentPageTemplate
      canonicalUrl="https://www.drdivyasharma.com/dandruff"
      parentCategory={{
        name: 'Hair & Scalp Care',
        href: '/hair-scalp-problems'
      }}
      currentPageName="Chronic Dandruff & Scalp Dermatitis"
      categorySiblings={[
        { label: 'Dandruff Relief', href: '/dandruff' },
        { label: 'Hair Loss & GFC', href: '/hair-loss' },
        { label: 'Male Pattern Loss', href: '/hair-loss-in-men' },
        { label: 'Female Hair Shedding', href: '/hair-fall-in-female' },
        { label: 'Hair & Scalp Problems', href: '/hair-scalp-problems' },
        { label: 'Psoriasis Care', href: '/psoriasis' },
        { label: 'Infant Cradle Cap', href: '/cradle-cap' },
        { label: 'Eczema & Dermatitis', href: '/eczema' }
      ]}
      hero={{
        badge: 'Clinical Trichology & Scalp Care',
        title: 'Chronic Scalp Dandruff & Flaking Relief',
        hookSubtitle: 'Control Malassezia Fungus, Soothe Scalp Itching & Stop Persistent Flaking',
        description: 'Eliminate stubborn white or yellow scalp flakes, seborrheic dermatitis, and persistent scalp irritation with targeted antifungal and keratolytic medical care.',
        treatmentName: 'Scalp & Dandruff Consultation',
        keyBenefits: [
          'Controls Scalp Malassezia Yeast',
          'Soothes Severe Scalp Itching',
          'Eliminates White & Oily Yellow Flakes',
          'Prevents Scalp Inflammation-Induced Hair Fall'
        ]
      }}
      overview={{
        title: 'Science of Seborrheic Dermatitis & Scalp Scaling',
        paragraphs: [
          <p key="p1">
            Dandruff is primarily caused by an overgrowth of lipophilic <em>Malassezia</em> yeast species feeding on scalp sebum. When these yeasts hydrolyze triglycerides, they release irritating free fatty acids that break the scalp barrier, triggering hyperproliferation of stratum corneum cells and noticeable flaking. If left unaddressed, chronic scalp inflammation and persistent scratching trigger acute telogen effluvium and accelerated{' '}
            <Link href="/hair-loss" className="text-primary font-semibold hover:underline">
              scalp hair loss & thinning
            </Link>
            .
          </p>,
          <p key="p2">
            In our Whitefield, Bangalore clinic, Senior Dermatologist Dr. Divya Sharma uses specialized polarized video-dermoscopy to distinguish simple pityriasis capitis from complex inflammatory conditions such as{' '}
            <Link href="/psoriasis" className="text-primary font-semibold hover:underline">
              scalp plaque psoriasis
            </Link>
            , atopic{' '}
            <Link href="/eczema" className="text-primary font-semibold hover:underline">
              scalp eczema
            </Link>
            , or infantile{' '}
            <Link href="/cradle-cap" className="text-primary font-semibold hover:underline">
              cradle cap
            </Link>
            .
          </p>,
          <p key="p3">
            Treatment involves therapeutic ketoconazole, ciclopirox olamine, zinc pyrithione, and keratolytic salicylic acid lotions combined with anti-inflammatory barrier lotions. Our comprehensive{' '}
            <Link href="/hair-scalp-problems" className="text-primary font-semibold hover:underline">
              hair & scalp health programs
            </Link>{' '}
            restore balanced microbiome equilibrium without drying out delicate hair strands.
          </p>
        ],
        causesOrSymptomsTitle: 'Common Scalp Symptoms',
        causesOrSymptoms: [
          'Dry white flakes on shoulders, clothes, and hair parting',
          'Oily, yellowish crusty scalp patches adhering to hair shafts',
          'Persistent scalp erythema, burning, and intense pruritus',
          'Scalp acne, folliculitis bumps & tender hair roots',
          'Accelerated seasonal hair shedding during monsoons & winter'
        ]
      }}
      approach={{
        title: 'Our 3-Phase Scalp Recovery Plan',
        description: 'Eliminating fungal yeast and restoring scalp skin barrier.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Scalp Check',
            description: 'Assessing scalp sebum levels, crusting, and hair root inflammation.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Medical Wash & Cleansing',
            description: 'Prescribing Ketoconazole, Zinc Pyrithione, or Salicylic formulations.'
          },
          {
            stepNumber: '03',
            title: 'Scalp Barrier Maintenance',
            description: 'Preventing seasonal flare-ups with customized wash routines.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can severe dandruff cause hair fall?',
          answer: 'Yes! Persistent scalp inflammation and scratching weaken hair roots, leading to temporary hair shedding (telogen effluvium). Clearing dandruff stops hair loss and allows follicles to regrow healthy strands.'
        },
        {
          question: 'How do I know if I have dandruff or scalp psoriasis?',
          answer: 'Dandruff flakes are usually loose, fine white or greasy yellow, accompanied by mild redness. Psoriasis presents with thick, silvery-white scale plaques that often extend beyond the hairline onto the forehead or behind the ears.'
        },
        {
          question: 'Why does dandruff keep returning after stopping commercial anti-dandruff shampoos?',
          answer: 'Over-the-counter shampoos often contain low concentrations of active agents and harsh sulfates that temporarily mask flakes while further disrupting scalp barrier function. Medical dermatological treatment addresses root sebum composition and fungal colony control.'
        }
      ]}
      relatedLinks={[
        { title: "Hair Loss & GFC Therapy", href: "/hair-loss", desc: "Growth Factor Concentrate therapy to regenerate hair follicles affected by shedding" },
        { title: "Male Pattern Hair Loss", href: "/hair-loss-in-men", desc: "Targeted clinical protocols for androgenetic alopecia and receding temples" },
        { title: "Female Hair Fall & PCOS", href: "/hair-fall-in-female", desc: "Hormonal hair shedding evaluation, blood work, and trichology recovery" },
        { title: "Scalp Psoriasis Care", href: "/psoriasis", desc: "Therapeutic management for thick silvery scales and stubborn autoimmune plaques" },
        { title: "Infant Cradle Cap", href: "/cradle-cap", desc: "Gentle pediatric medical care for greasy newborn and infant scalp crusting" },
        { title: "Hair & Scalp Hub", href: "/hair-scalp-problems", desc: "Complete diagnostic and therapeutic care for all scalp and trichology concerns" }
      ]}
    />
  );
}
