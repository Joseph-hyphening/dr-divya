import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Allergies & Urticaria Treatment Bangalore | Dr. Divya Sharma',
  description: 'Dermatologist diagnosis for chronic hives, contact dermatitis, allergic welts & skin itching in Whitefield Bangalore.',
  keywords: [
    'Skin allergy treatment Bangalore',
    'Chronic urticaria specialist Whitefield',
    'Contact dermatitis treatment',
    'Hives dermatologist Bangalore',
    'Allergic reaction skin rash',
    'Dr Divya Sharma allergy clinic'
  ],
  alternates: {
    canonical: 'https://www.drdivyasharma.com/skin-allergies',
  },
  openGraph: {
    title: 'Skin Allergies & Urticaria Treatment Bangalore | Dr. Divya Sharma',
    description: 'Specialized dermatological care for hives, allergic contact dermatitis, and itchy welts in Whitefield.',
    url: 'https://www.drdivyasharma.com/skin-allergies',
    siteName: 'Dr. Divya Sharma Dermatology',
    images: [
      {
        url: '/dr-divya.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Divya Sharma - Skin Allergy & Urticaria Specialist Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin Allergy & Hives Relief Bangalore | Dr. Divya Sharma',
    description: 'Comprehensive clinical evaluation and treatment for chronic hives, allergic dermatitis, and facial welts.',
    images: ['/dr-divya.png'],
  },
};

export default function SkinAllergiesPage() {
  return (
    <TreatmentPageTemplate
      canonicalUrl="https://www.drdivyasharma.com/skin-allergies"
      parentCategory={{
        name: 'Medical Dermatology',
        href: '/medical-dermatology'
      }}
      currentPageName="Skin Allergies & Urticaria"
      categorySiblings={[
        { label: 'Skin Allergies', href: '/skin-allergies' },
        { label: 'Food Allergies', href: '/food-allergy' },
        { label: 'Eczema Relief', href: '/eczema' },
        { label: 'Infections & Rashes', href: '/rashes-skin-infection' },
        { label: 'Steroid Abuse (TSW)', href: '/topical-steroids' },
        { label: 'Psoriasis Care', href: '/psoriasis' },
        { label: 'Baby Rashes', href: '/common-skin-rashes-in-babies' },
        { label: 'Keloids & Scars', href: '/keloids' }
      ]}
      hero={{
        badge: 'Allergy & Urticaria Specialization',
        title: 'Skin Allergies & Hives (Urticaria) Relief',
        hookSubtitle: 'Calm Itchy Welts, Contact Dermatitis & Allergic Skin Reactions Fast',
        description: 'Diagnose and control sudden hives, red allergic welts, facial swelling, and contact sensitivity to soaps, metals, or cosmetics.',
        treatmentName: 'Skin Allergy Consultation',
        keyBenefits: [
          'Fast Relief from Hives & Itchy Welts',
          'Contact Sensitivity Identification',
          'Non-Sedating Anti-Histamine Care',
          'Prevents Allergic Anaphylaxis Risks'
        ]
      }}
      overview={{
        title: 'Understanding Allergic Skin Reactions & Hives',
        paragraphs: [
          <p key="p1">
            Allergic skin reactions manifest when dermal mast cells degranulate, releasing histamine, leukotrienes, and prostaglandins into surrounding tissue. This vasodilation triggers sudden edematous, pruritic wheals (urticaria) or delayed cell-mediated inflammation such as allergic contact dermatitis and{' '}
            <Link href="/food-allergy" className="text-primary font-semibold hover:underline">
              systemic food allergy rashes
            </Link>
            .
          </p>,
          <p key="p2">
            In our Whitefield clinic, Gold Medalist Dermatologist Dr. Divya Sharma systematically distinguishes acute allergic hives from chronic barrier failure like{' '}
            <Link href="/eczema" className="text-primary font-semibold hover:underline">
              atopic eczema
            </Link>
            , secondary bacterial{' '}
            <Link href="/rashes-skin-infection" className="text-primary font-semibold hover:underline">
              skin infections & rashes
            </Link>
            , or rebound redness from{' '}
            <Link href="/topical-steroids" className="text-primary font-semibold hover:underline">
              topical steroid withdrawal (TSW)
            </Link>
            .
          </p>,
          <p key="p3">
            Treatment combines modern second-generation non-sedating H1 antihistamines, targeted leukotriene receptor antagonists, mast cell stabilizers, and hypoallergenic barrier restore formulations under our comprehensive{' '}
            <Link href="/medical-dermatology" className="text-primary font-semibold hover:underline">
              medical dermatology protocols
            </Link>
            .
          </p>
        ],
        causesOrSymptomsTitle: 'Allergic Conditions Treated',
        causesOrSymptoms: [
          'Acute & Chronic Urticaria (Hives/Welts)',
          'Allergic Contact Dermatitis (Hair dye, jewelry, cement)',
          'Angioedema (Lip & Eyelid Swelling)',
          'Cosmetic Sensitivity & Perfume Rash',
          'Dermographism (Skin writing welts from light scratches)'
        ]
      }}
      approach={{
        title: 'Our Allergy Care Protocol',
        description: 'Identify triggers and eliminate itching.',
        steps: [
          {
            stepNumber: '01',
            title: 'Allergen History Audit',
            description: 'Tracking cosmetic, chemical, or dietary triggers.'
          },
          {
            stepNumber: '02',
            title: 'Histamine Suppression',
            description: 'Prescribing safe, non-sedating medical antihistamines.'
          },
          {
            stepNumber: '03',
            title: 'Skin Barrier Shielding',
            description: 'Formulating hypoallergenic skincare regimens.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What should I do during a sudden hives flare-up?',
          answer: 'Avoid hot showers, tight synthetic clothing, and scratching. Apply a cool compress, take your prescribed antihistamine, and seek emergency evaluation immediately if you experience breathing difficulty or lip/throat swelling.'
        },
        {
          question: 'What is the difference between an allergy and sensitive skin?',
          answer: 'Sensitive skin is caused by a weakened stratum corneum barrier reacting to weather or products with stinging or tightness. An allergy is an immune-mediated response where the body produces antibodies, resulting in hives, blisters, or spreading dermatitis.'
        },
        {
          question: 'How long does chronic urticaria usually last?',
          answer: 'Chronic spontaneous urticaria is defined as hives persisting for more than 6 weeks. With modern dermatological therapies, symptoms can be completely suppressed until the immune system enters spontaneous remission.'
        }
      ]}
      relatedLinks={[
        { title: "Food Allergy & Rashes", href: "/food-allergy", desc: "Diagnostic protocols for dietary allergy triggers, gastrointestinal links, and cutaneous hives" },
        { title: "Atopic Eczema & Dermatitis", href: "/eczema", desc: "Long-term skin barrier restoration and non-steroid therapies for dry, inflamed skin" },
        { title: "Skin Infections & Rashes", href: "/rashes-skin-infection", desc: "Diagnosis and targeted antimicrobial clearance for bacterial, fungal, and viral skin rashes" },
        { title: "Topical Steroid Withdrawal (TSW)", href: "/topical-steroids", desc: "Safe weaning protocols and barrier rehabilitation from long-term steroid cream misuse" },
        { title: "Psoriasis Management", href: "/psoriasis", desc: "Therapeutic care for scaly autoimmune plaques and systemic inflammation" },
        { title: "Medical Dermatology Hub", href: "/medical-dermatology", desc: "Explore our comprehensive clinical department for complex skin diseases in Bangalore" }
      ]}
    />
  );
}
