import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hollywood Carbon Peel Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Experience the famous Hollywood Laser Carbon Peel in Whitefield Bangalore. Instant red carpet glow, pore tightening, and oil control by Dr. Divya Sharma.',
};

export default function HollywoodPeelPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Red Carpet Laser Photo-Rejuvenation',
        title: 'Hollywood Carbon Laser Peel',
        hookSubtitle: 'Instant Porcelain Radiance, Tightened Pores & Deep Oil-Control with Zero Downtime',
        description: 'The ultimate celebrity laser facial utilizing high-grade nano-carbon lotion and Q-Switched Nd:YAG laser photo-thermal energy to exfoliate, purify, and illuminate your skin.',
        treatmentName: 'Hollywood Carbon Peel Consultation',
        keyBenefits: [
          'Instant Red Carpet Facial Glow',
          'Deep Pore Clearing & Size Reduction',
          'Regulates Excess Sebum & Oiliness',
          'Zero Downtime & Zero Peeling Flakes'
        ]
      }}
      overview={{
        title: 'The Science of Carbon-Assisted Laser Photo-Rejuvenation',
        paragraphs: [
          'The Hollywood Carbon Laser Peel (also known as the China Doll Facial or Charcoal Laser Peel) is a non-invasive, advanced photo-rejuvenation procedure designed to instantly refresh tired, dull, oily, or uneven skin. The secret to its remarkable efficacy lies in the synergistic interaction between a specialized liquid medical carbon lotion and precision Q-Switched Nd:YAG laser pulses.',
          'During the procedure, a thin layer of natural nano-carbon paste is applied across the face. Carbon possesses extraordinary absorptive qualities; as it sits on the skin, it penetrates deep into microscopic pore crevices, binding to dead epidermal cells, excess sebum, and trapped impurities. When the 1064nm laser passes over the skin, the dark carbon particles act as a target chromophore, absorbing laser light energy instantaneously.',
          'This causes a micro-explosion of the carbon particles on the skin surface. The thermal photo-acoustic shockwave vaporizes the carbon while simultaneously blasting away trapped oil, exfoliated dead skin cells, and blackheads. Concurrently, the thermal energy penetrates into the upper dermis, stimulating neo-collagenesis to tighten enlarged pores, refine fine lines, and leave your complexion visibly luminous, smooth, and firm.'
        ],
        causesOrSymptomsTitle: 'Ideal Indications & Benefits',
        causesOrSymptoms: [
          'Dull, congested complexion lacking natural radiance prior to events',
          'Enlarged, visible pores & persistent open blackheads across T-zone',
          'Excessive facial oiliness & prone to recurrent mild acne pimples',
          'Uneven skin tone, superficial sun tanning & mild hyperpigmentation',
          'Early fine lines, loss of skin elasticity & coarse epidermal texture',
          'Desire for instant brightening without the peeling downtime of chemical peels'
        ]
      }}
      approach={{
        title: 'Our Phased Hollywood Peel Protocol',
        description: 'A 3-step luxury clinical experience designed for maximum luminosity and deep pore purification.',
        steps: [
          {
            stepNumber: '01',
            title: 'Nano-Carbon Application & Pore Absorption',
            description: 'Cleansing the face followed by smooth application of medical-grade carbon lotion to bind with dermal oil and impurities.'
          },
          {
            stepNumber: '02',
            title: 'Dual-Pass Q-Switched Laser Pulses',
            description: 'First thermal pass to warm dermal collagen, followed by Q-Switched laser pass to micro-explode carbon and clear pores.'
          },
          {
            stepNumber: '03',
            title: 'Antioxidant Hydration & Sun Barrier',
            description: 'Finishing with cold hyaluronic infusion, soothing peptide cream, and broad-spectrum sunscreen for immediate glow.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Does the Hollywood Carbon Peel cause visible skin peeling or downtime?',
          answer: 'No! Despite the word "peel" in its name, the Hollywood Carbon Peel does NOT cause visible flaking, redness, or peeling. You can return to work or attend special events immediately after your session.'
        },
        {
          question: 'Is the Hollywood Laser Carbon Peel painful?',
          answer: 'Not at all. Patients feel a mild warming sensation and a gentle snapping sound as the laser vaporizes the carbon paste. It is completely comfortable and does not require numbing cream.'
        },
        {
          question: 'How long does the instant glow last after a single session?',
          answer: 'The immediate radiant glow and smooth texture last for 2 to 3 weeks. For long-term collagen building, pore shrinkage, and oil control, a series of 4 to 6 sessions spaced 3 weeks apart is recommended.'
        },
        {
          question: 'How does the Carbon Peel compare to traditional Chemical Peels?',
          answer: 'Chemical peels use acid solutions to exfoliate dead skin layers over several days. The Carbon Peel uses laser light energy to instantly purify pores and stimulate collagen with zero recovery wait time.'
        },
        {
          question: 'Can I get a Hollywood Carbon Peel right before a wedding or party?',
          answer: 'Yes! It is widely known as the ultimate "event facial". Getting the procedure 1 to 2 days before a major event ensures your makeup glides on flawlessly over glass-like skin.'
        },
        {
          question: 'Is the treatment suitable for active acne and oily skin?',
          answer: 'Extremely suitable! The laser heat destroys acne-causing bacteria and shrinks overactive sebaceous glands, drastically reducing ongoing facial oiliness.'
        }
      ]}
      relatedLinks={[
        { title: "Laser Toning", href: "/laser-toning", desc: "Q-Switched laser sessions for deep skin pigmentation & sun spot removal" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical acid peels for epidermal exfoliation, acne control & brightening" },
        { title: "Melasma & Pigmentation", href: "/melasma", desc: "Specialized clinical protocols for hormonal facial spots & dark patches" },
        { title: "Dark Circles Refresh", href: "/dark-circles", desc: "Under-eye brighteners & structural tear trough rejuvenation" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Clinical active breakout control & post-acne mark prevention" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Targeted clinical fading for localized facial hyperpigmentation" }
      ]}
    />
  );
}
