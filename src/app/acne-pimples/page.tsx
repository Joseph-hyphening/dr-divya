import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Pimples & Active Acne Care Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical treatment for acne, pimples, cystic breakouts, and inflamed skin in Whitefield Bangalore by Gold Medalist Dermatologist Dr. Divya Sharma.',
};

export default function AcnePimplesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Acne & Pimple Care',
        title: 'Targeted Relief for Pimples & Active Acne',
        hookSubtitle: 'Calm Inflamed Breakouts, Clear Pores & Stop Recurrent Pimples',
        description: 'Get expert dermatological evaluation for stubborn pimples, painful pus-filled acne, and jawline breakouts with evidence-based medical care tailored for Indian skin types.',
        treatmentName: 'Acne & Pimples Consultation',
        keyBenefits: [
          'Fast Relief for Inflamed Pimples',
          'Prevent Post-Pimple Dark Marks',
          'Root Cause Hormonal Assessment',
          'Safe Dermatologist Prescriptions'
        ]
      }}
      overview={{
        title: 'Understanding Acne Pathophysiology & Root Causes',
        paragraphs: [
          'Acne vulgaris and persistent pimples originate deep within the pilosebaceous unit—the skin complex containing hair follicles and oil-producing sebaceous glands. When excess androgen hormones or environmental stress stimulate androgenic receptors, sebum production skyrockets. Combined with follicular hyperkeratinization (the buildup of sticky dead skin cells), hair pores become occluded, trapping oil beneath the epidermal surface and forming microcomedones.',
          'Inside these oxygen-deprived clogged pores, Cutibacterium acnes (formerly Propionibacterium acnes) bacteria multiply rapidly. This triggers a localized immune cascade that draws white blood cells into the pore, resulting in painful papules, pus-filled pustules, and deep inflammatory nodules or cysts. Without timely dermatological intervention, deep cystic acne can rupture dermal collagen fibers, causing permanent post-acne scarring or stubborn post-inflammatory hyperpigmentation (PIH).',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we avoid generic over-the-counter quick fixes. Instead, we utilize advanced diagnostic dermoscopy to evaluate sebum excretion rates, skin barrier integrity, and hormonal indicators. We frequently combine targeted medical prescriptions with non-comedogenic skincare protocols, medical-grade chemical peels, laser anti-inflammatory light therapy, and specialized carbon peels for rapid clearing.'
        ],
        causesOrSymptomsTitle: 'Common Triggers & Indications',
        causesOrSymptoms: [
          'Hormonal fluctuations (PCOS, menstrual flare-ups, stress elevated cortisol)',
          'High glycemic diet & dairy-induced Insulin-like Growth Factor-1 (IGF-1)',
          'Occlusive makeup, heavy oils & comedogenic sunscreen formulations',
          'Painful red inflammatory papules, pustules & deep painful dermal cysts',
          'Open whiteheads & oxidized blackhead comedones across T-zone',
          'Post-inflammatory erythema (PIE) & residual dark acne spots (PIH)'
        ]
      }}
      approach={{
        title: 'Our Phased Acne Clearance Protocol',
        description: 'A scientifically structured, 3-stage clinical strategy to arrest active inflammation, unclog pores, and maintain clear skin.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Evaluation & Skin Barrier Assessment',
            description: 'Comprehensive analysis of acne grade (I-IV), hormonal history, sebum levels, and previous topical sensitivity.'
          },
          {
            stepNumber: '02',
            title: 'Targeted Anti-Inflammatory & Medical Therapy',
            description: 'Prescription of customized retinoids, topical antimicrobials, oral anti-androgens/antibiotics, or specialized medical exfoliation.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Repair & Scar Prevention Maintenance',
            description: 'Long-term maintenance with non-comedogenic hydrators, broad-spectrum sunscreen, and laser spot correction.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Should I pop or squeeze my pimples at home?',
          answer: 'Never squeeze or pop pimples! Squeezing forces purulent bacterial material deeper into the dermis, rupturing follicle walls. This dramatically increases inflammation, extends healing time by weeks, and leads to permanent boxcar scars or persistent dark spots.'
        },
        {
          question: 'How long does it take to see visible improvement in acne?',
          answer: 'Cellular skin turnover takes approximately 28 to 45 days. Most patients notice reduced redness within 2 to 3 weeks of starting prescription topical or systemic therapy, with dramatic clearing typically achieved between 8 to 12 weeks of continuous care.'
        },
        {
          question: 'Can dietary changes cure my acne completely?',
          answer: 'While diet alone is rarely a sole cure for moderate-to-severe acne, reducing high-glycemic index foods (refined sugars, processed carbs) and dairy can lower IGF-1 levels and sebum production, acting as a valuable booster to clinical dermatological treatment.'
        },
        {
          question: 'What is the difference between active acne and acne scars?',
          answer: 'Active acne refers to ongoing inflammatory lesions (pimples, pustules, cysts) caused by active bacterial infection and pore clogging. Acne scars represent structural dermal damage or textural indentations left behind after severe acne heals.'
        },
        {
          question: 'How do chemical peels help with stubborn pimples?',
          answer: 'Medical chemical peels containing Salicylic Acid (BHA) or Glycolic Acid (AHA) penetrate oil-filled pores, dissolving dead cell debris and regulating sebum production while accelerating skin cell exfoliation to clear breakouts.'
        },
        {
          question: 'Is adult acne different from teenage acne?',
          answer: 'Yes. Teen acne typically affects the forehead and T-zone due to pubertal surge in oil. Adult acne often appears on the jawline, chin, and lower face, driven by stress, hormonal fluctuations, and compromised skin barrier function.'
        }
      ]}
      relatedLinks={[
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical exfoliation to dissolve pore blockages & fade acne marks" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Laser facial to shrink enlarged pores and balance oil production" },
        { title: "Laser Toning", href: "/laser-toning", desc: "Targeted laser light to clear post-acne dark marks and hyperpigmentation" },
        { title: "Melasma Treatment", href: "/melasma", desc: "Specialized care for hormonal skin discoloration and stubborn pigmentation" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Targeted clinical fading for dark spots and post-inflammatory marks" },
        { title: "Skin Resurfacing", href: "/skin-resurfacing-texture", desc: "Advanced laser collagen stimulation for smooth post-acne texture" }
      ]}
    />
  );
}
