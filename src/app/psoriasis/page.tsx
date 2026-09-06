import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Psoriasis & Plaque Management Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Comprehensive psoriasis treatment in Whitefield Bangalore. Evidence-based systemic, topical, and phototherapy protocols by Dr. Divya Sharma.',
};

export default function PsoriasisPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Specialized Autoimmune Dermatological Care',
        title: 'Clinical Psoriasis & Plaque Management',
        hookSubtitle: 'Calm Inflamed Red Plaques, Eliminate Silvery Scales & Achieve Long-Term Remission',
        description: 'Evidence-based medical protocols combining targeted systemic immunomodulators, topical barrier repair, and scalp care supervised by Senior Dermatologist Dr. Divya Sharma.',
        treatmentName: 'Psoriasis Consultation',
        keyBenefits: [
          'Diagnostic Plaque & Scalp Evaluation',
          'Targeted Topical & Systemic Immunomodulators',
          'Fast Relief from Itching & Scaling',
          'Holistic Remission & Trigger Management'
        ]
      }}
      overview={{
        title: 'Understanding Psoriasis Biology & Autoimmune Cascades',
        paragraphs: [
          'Psoriasis is a chronic, non-contagious autoimmune inflammatory skin condition driven by immune system dysregulation. In healthy skin, skin cells (keratinocytes) grow deep within dermal layers and gradually rise to the surface over 28 to 30 days, where they shed imperceptibly. In psoriasis, hyperactive T-lymphocytes release inflammatory cytokines (such as TNF-alpha, IL-17, and IL-23), speeding up keratinocyte maturation to a chaotic 3 to 5 days.',
          'Because these rapidly multiplying skin cells reach the surface faster than they can shed, they pile up into raised, thick, erythematous (red) plaques covered with distinctive silvery-white scales. Psoriasis commonly targets extensor surfaces—such as elbows, knees, lower back, and scalp—and can cause painful skin cracking, severe itching, and bleeding.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we treat psoriasis with a long-term, holistic vision. Beyond symptomatic topical relief, we evaluate potential systemic comorbidities (such as Psoriatic Arthritis, cardiovascular inflammation, and metabolic syndrome). We prescribe tailored systemic immunomodulators, modern biologic therapies, coal tar/salicylic scalp preparations, and barrier-restoring emollient protocols to guide patients into sustained remission.'
        ],
        causesOrSymptomsTitle: 'Common Triggers & Clinical Types',
        causesOrSymptoms: [
          'Plaque Psoriasis (Thick red lesions covered with silvery scales on elbows & knees)',
          'Scalp Psoriasis (Thick crusting flakes extending past hairline to nape of neck)',
          'Koebner Phenomenon (Psoriatic lesions appearing at site of scratches or trauma)',
          'Emotional stress, streptococcal throat infections & systemic illness flare-ups',
          'Psoriatic Nail Dystrophy (Pitting, oil-drop discoloration & subungual thickening)',
          'Joint pain, stiffness & swelling (Early indicators of Psoriatic Arthritis)'
        ]
      }}
      approach={{
        title: 'Our Phased Psoriasis Clearance Protocol',
        description: 'A 3-stage clinical approach to suppress immune hyper-reactivity, clear thick scales, and maintain skin stability.',
        steps: [
          {
            stepNumber: '01',
            title: 'Severity & Body Surface Area (PASI) Scoring',
            description: 'Calculating Psoriasis Area and Severity Index (PASI), screening for joint involvement, and identifying triggers.'
          },
          {
            stepNumber: '02',
            title: 'Synergistic Scale Clearance & Anti-Inflammatory Care',
            description: 'Prescribing keratolytic scale-dissolving topicals combined with targeted oral immunomodulators or targeted phototherapy.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Restoration & Sustained Remission',
            description: 'Establishing non-irritating emollient maintenance regimes and anti-inflammatory lifestyle guidance to prevent relapses.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is psoriasis contagious?',
          answer: 'Absolute myth! Psoriasis is entirely non-contagious. You cannot catch psoriasis from someone else or spread it by touch. It is an internal autoimmune condition.'
        },
        {
          question: 'What is the main difference between scalp psoriasis and regular dandruff?',
          answer: 'Dandruff (Seborrheic Dermatitis) presents as greasy, yellowish flakes localized to the hair-bearing scalp. Scalp psoriasis presents as thick, dry, silvery scales on elevated red plaques that frequently extend beyond the hairline onto the forehead and behind ears.'
        },
        {
          question: 'Can psoriasis lead to joint pain?',
          answer: 'Yes. Approximately 30% of patients with psoriasis develop Psoriatic Arthritis (PsA), causing joint stiffness, swelling, and morning pain in fingers, toes, knees, or lower back. Early dermatological detection protects joint cartilage.'
        },
        {
          question: 'Are steroids the only option for treating psoriasis?',
          answer: 'No! While mild topical steroids can manage acute flares, long-term dependence is avoided. We utilize non-steroidal immunomodulators (Tacrolimus/Pimecrolimus), Vitamin D analogues (Calcipotriol), systemic oral agents, and biologics.'
        },
        {
          question: 'What triggers sudden psoriasis flare-ups?',
          answer: 'Common flare-up triggers include high emotional stress, skin injuries (scratches/sunburns), cold dry weather, alcohol, smoking, and certain medications (beta-blockers, lithium).'
        },
        {
          question: 'How long can psoriasis stay in remission?',
          answer: 'With proper personalized medical management and lifestyle adjustments, many patients enjoy months or years of clear, comfortable skin in complete remission.'
        }
      ]}
      relatedLinks={[
        { title: "Scalp Dandruff Relief", href: "/an-overview-of-dandruff", desc: "Antifungal scalp care and inflammatory dandruff management" },
        { title: "Skin Allergies & Hives", href: "/skin-allergies", desc: "Diagnostic allergy testing & acute skin barrier soothing" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Clinical active breakout control & inflammatory skin relief" },
        { title: "Hair Loss & GFC Therapy", href: "/hair-loss", desc: "Growth Factor Concentrate for scalp hair restoration" },
        { title: "Melasma & Pigmentation", href: "/melasma", desc: "Specialized clinical protocols for stubborn skin discoloration" },
        { title: "Laser Toning", href: "/laser-toning", desc: "Low-fluence laser sessions for skin tone evenness and dark spots" }
      ]}
    />
  );
}
