import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Bridal Dermatology Packages Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Customized bridal skin glow regimens, pre-wedding laser toning, gentle peels, and MediFacials by Gold Medalist Dermatologist Dr. Divya Sharma in Whitefield.',
};

export default function BridalDermatologyPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Couture Pre-Wedding Skin Care',
        title: 'Bridal Dermatology Packages',
        hookSubtitle: 'Luminous, Photo-Ready Radiance for Your Special Day with Clinical Precision',
        description: 'Bespoke pre-wedding skin and hair transformation plans designed by Gold Medalist Dermatologist Dr. Divya Sharma. Combining laser toning, gentle exfoliation, and deep hydration for an unforgettable bridal glow.',
        treatmentName: 'Bridal Dermatology Consultation',
        keyBenefits: [
          'Personalized 30, 60, or 90-Day Bridal Timelines',
          'Gentle Laser Toning & Spot Fading',
          'Hydra & OxyJet MediFacials for Glass Skin',
          'Zero Downtime Protocols for Event Timelines'
        ]
      }}
      overview={{
        title: 'Your Pre-Wedding Clinical Glow Strategy',
        paragraphs: [
          'A wedding is one of the most important milestones of your life, and high-definition photography demands naturally flawless, healthy skin rather than heavy cosmetic concealment.',
          'At Dr. Divya Sharma’s clinic in Whitefield, Bangalore, our Bridal Dermatology Packages are carefully mapped out to your wedding calendar. We treat underlying concerns such as uneven skin tone, stubborn acne marks, dullness, or open pores well in advance, finishing with radiant MediFacials in the final weeks leading to your celebrations.'
        ],
        causesOrSymptomsTitle: 'Treatments Included in Bridal Packages',
        causesOrSymptoms: [
          'Hollywood & Carbon Laser Peels for immediate porcelain clarity',
          'Q-Switched Laser Toning for de-tanning and sun spot removal',
          'Gentle Lactic & Arginine Peels for radiant skin turnover',
          'OxyJet & Hydra MediFacials for deep hydration and plumpness',
          'Back & Décolletage laser polish for open-back bridal gowns',
          'Hair strengthening GFC or mesotherapy for voluminous wedding hair'
        ]
      }}
      approach={{
        title: 'Our Phased Bridal Countdown Protocol',
        description: 'Safely paced treatments preventing last-minute skin sensitivities.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Timeline Planning (3–6 Months Prior)',
            description: 'Assessing your skin type and scheduling deep corrective treatments like laser toning and scar smoothing.'
          },
          {
            stepNumber: '02',
            title: 'Refinement & Brightening Phase (4–8 Weeks Prior)',
            description: 'Conducting gentle glow peels and targeted MediFacials to maximize luminosity and even skin tone.'
          },
          {
            stepNumber: '03',
            title: 'The Final Bridal Glow (7–10 Days Prior)',
            description: 'Non-invasive OxyJet infusion and soothing barrier therapy for plump, glass-like radiance without redness or peeling.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How many months before my wedding should I begin treatment?',
          answer: 'Ideally, we recommend scheduling your bridal consultation 3 to 6 months in advance. However, if your wedding is in 3 to 4 weeks, we offer rapid brightening express packages utilizing gentle lasers and MediFacials with zero risk of downtime.'
        },
        {
          question: 'Are bridal treatments safe for sensitive Indian skin?',
          answer: 'Yes. All protocols are customized for Indian skin types (Fitzpatrick III–V) by Dr. Divya Sharma, ensuring no risk of post-inflammatory hyperpigmentation.'
        }
      ]}
      relatedLinks={[
        { title: 'Hollywood Peel', href: '/hollywood-peel', desc: 'Instant red carpet laser clarity facial' },
        { title: 'Laser Hair Reduction', href: '/unwanted-hair', desc: 'Permanent smooth skin for wedding preparations' },
        { title: 'OxyJet MediFacial', href: '/oxyjet-medifacial', desc: 'Hyperbaric oxygen and peptide glow infusion' },
        { title: 'Hydra MediFacial', href: '/hydra-medifacial', desc: 'Deep pore vortex cleansing and antioxidant hydration' }
      ]}
    />
  );
}
