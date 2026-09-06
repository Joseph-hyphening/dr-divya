import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Cutaneous Food Allergy & Skin Reactions Bangalore | Dr. Divya Sharma',
  description: 'Dermatological diagnosis and relief for skin hives, swelling & eczema triggered by food allergies in Whitefield Bangalore.',
  keywords: [
    'Food allergy skin rash Bangalore',
    'Cutaneous allergy treatment Whitefield',
    'Food allergy hives and itching',
    'Pediatric food allergy eczema',
    'Dr Divya Sharma dermatology allergy'
  ],
  alternates: {
    canonical: 'https://www.drdivyasharma.com/food-allergy',
  },
  openGraph: {
    title: 'Cutaneous Food Allergy & Skin Reactions Bangalore | Dr. Divya Sharma',
    description: 'Expert medical diagnosis for food-triggered urticaria, facial angioedema, and eczema flare-ups in Whitefield.',
    url: 'https://www.drdivyasharma.com/food-allergy',
    siteName: 'Dr. Divya Sharma Dermatology',
    images: [
      {
        url: '/dr-divya.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Divya Sharma - Cutaneous Food Allergy Specialist Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Allergy Skin Reactions Bangalore | Dr. Divya Sharma',
    description: 'Targeted dermatological management for dietary allergen hives and itchy skin welts.',
    images: ['/dr-divya.png'],
  },
};

export default function FoodAllergyPage() {
  return (
    <TreatmentPageTemplate
      canonicalUrl="https://www.drdivyasharma.com/food-allergy"
      parentCategory={{
        name: 'Medical Dermatology',
        href: '/medical-dermatology'
      }}
      currentPageName="Cutaneous Food Allergy Reactions"
      categorySiblings={[
        { label: 'Food Allergies', href: '/food-allergy' },
        { label: 'Skin Allergies', href: '/skin-allergies' },
        { label: 'Eczema Relief', href: '/eczema' },
        { label: 'Baby Rashes', href: '/common-skin-rashes-in-babies' },
        { label: 'Infections & Rashes', href: '/rashes-skin-infection' },
        { label: 'Steroid Abuse (TSW)', href: '/topical-steroids' },
        { label: 'Psoriasis Care', href: '/psoriasis' }
      ]}
      hero={{
        badge: 'Cutaneous Food Allergy & Hives Care',
        title: 'Food Allergy Skin Reaction Management',
        hookSubtitle: 'Identify Food Triggers Causing Sudden Hives, Itching & Facial Swelling',
        description: 'Diagnose skin reactions (urticaria, eczema flare-ups) linked to dietary allergens like nuts, dairy, seafood, or preservatives with specialist medical care.',
        treatmentName: 'Food Allergy Consultation',
        keyBenefits: [
          'Identifies Dietary Allergen Triggers',
          'Fast Relief from Allergic Hives',
          'Antihistamine & Barrier Support',
          'Prevents Recurrent Anaphylactic Risks'
        ]
      }}
      overview={{
        title: 'How Food Allergies Manifest on the Skin',
        paragraphs: [
          <p key="p1">
            Cutaneous food allergies occur when sensitizing food antigens (such as dairy, eggs, peanuts, shellfish, or artificial sulfites) cross the gut mucosal barrier and cross-link with IgE antibodies on dermal mast cells. This triggers an explosive release of histamine, manifesting as sudden itchy wheals, facial angioedema, or generalized{' '}
            <Link href="/skin-allergies" className="text-primary font-semibold hover:underline">
              cutaneous hives & urticaria
            </Link>
            .
          </p>,
          <p key="p2">
            In infants and pediatric patients, food allergies frequently exacerbate chronic{' '}
            <Link href="/eczema" className="text-primary font-semibold hover:underline">
              atopic dermatitis & eczema
            </Link>{' '}
            or appear as acute facial erythema and{' '}
            <Link href="/common-skin-rashes-in-babies" className="text-primary font-semibold hover:underline">
              baby skin rashes
            </Link>
            . Meticulous differentiation from infectious rashes such as viral exanthems or bacterial{' '}
            <Link href="/rashes-skin-infection" className="text-primary font-semibold hover:underline">
              skin infections & impetigo
            </Link>{' '}
            is essential for proper management.
          </p>,
          <p key="p3">
            Under Dr. Divya Sharma&apos;s guidance, patients receive structured dietary elimination logs, prescription emergency antihistamines, and barrier repair therapies under our evidence-based{' '}
            <Link href="/medical-dermatology" className="text-primary font-semibold hover:underline">
              medical dermatology division
            </Link>
            .
          </p>
        ],
        causesOrSymptomsTitle: 'Common Triggers & Symptoms',
        causesOrSymptoms: [
          'Sudden onset itchy red hives / wheals within minutes to hours',
          'Lip, tongue, or eyelid angioedema swelling',
          'Flaring of infant eczema after dairy, soy, or egg exposure',
          'Common culprits: Dairy, tree nuts, peanuts, shellfish, gluten & artificial preservatives',
          'Intense generalized pruritus without localized insect bites'
        ]
      }}
      approach={{
        title: 'Our Food Allergy Protocol',
        description: 'Immediate symptom relief and dietary elimination plan.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dietary Reaction Mapping',
            description: 'Correlating food intake timing with rash onset.'
          },
          {
            stepNumber: '02',
            title: 'Immediate Histamine Control',
            description: 'Prescribing non-sedating medical antihistamines.'
          },
          {
            stepNumber: '03',
            title: 'Elimination & Re-introduction',
            description: 'Guiding safe dietary elimination and skin protection.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How quickly do food allergy hives appear?',
          answer: 'IgE-mediated hives typically appear within minutes up to 2 hours after consuming the trigger food. Delayed non-IgE responses (like eczema worsening) may take 24 to 48 hours to manifest.'
        },
        {
          question: 'Can food allergies cause dark patches or scars on the skin?',
          answer: 'The hives themselves do not leave permanent scars. However, intense scratching can break the skin, creating secondary bacterial infections and post-inflammatory hyperpigmentation.'
        },
        {
          question: 'How is a food allergy distinguished from food intolerance?',
          answer: 'A true allergy involves an immune response (IgE antibodies and histamine release) which can cause hives, swelling, and anaphylaxis. Intolerance is primarily a digestive enzyme deficiency (such as lactose intolerance) causing bloating without allergic hives.'
        }
      ]}
      relatedLinks={[
        { title: "Skin Allergies & Urticaria", href: "/skin-allergies", desc: "Diagnostic protocols for contact sensitivities, environmental allergies, and chronic hives" },
        { title: "Atopic Eczema & Dermatitis", href: "/eczema", desc: "Soothing clinical barrier repair and medical relief for itchy, cracked skin" },
        { title: "Common Baby Skin Rashes", href: "/common-skin-rashes-in-babies", desc: "Pediatric care for infant heat rashes, cradle cap, and childhood dermatitis" },
        { title: "Rashes & Skin Infections", href: "/rashes-skin-infection", desc: "Accurate differential diagnosis between allergic dermatitis and infectious microbes" },
        { title: "Topical Steroid Withdrawal (TSW)", href: "/topical-steroids", desc: "Rehabilitation for damaged skin barriers caused by self-medicated steroid creams" },
        { title: "Medical Dermatology Hub", href: "/medical-dermatology", desc: "Explore our complete medical clinic in Whitefield, Bangalore" }
      ]}
    />
  );
}
