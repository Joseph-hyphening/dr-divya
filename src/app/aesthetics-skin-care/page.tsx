import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Aesthetic Dermatology & Laser Procedures | Dr. Divya Sharma Bangalore',
  description: 'US-FDA approved aesthetic treatments: Laser Hair Reduction, Bridal Packages, Hollywood Peel, Carbon Peel, Q-Switched Rejuvenation, MNRF, FSR, Pro Shaper, iFine & MediFacials in Whitefield Bangalore.',
};

export const aestheticProceduresList = [
  { name: 'Laser Hair Reduction', desc: 'Painless US-FDA triple-wavelength laser reduction for permanent smoothness across face and body.', href: '/unwanted-hair' },
  { name: 'Bridal Dermatology Packages', desc: 'Customized 3 to 6-month pre-wedding skin brightening, laser toning, and bridal radiance protocols.', href: '/bridal-dermatology' },
  { name: 'Hollywood Peel', desc: 'Spectra Q-Switched carbon lotion laser peel for instant red carpet porcelain radiance and pore tightening.', href: '/hollywood-peel' },
  { name: 'Carbon Peel', desc: 'Targeted medical carbon laser exfoliation for deep follicular purification, oil regulation, and blackhead removal.', href: '/carbon-peel' },
  { name: 'Q Switched Laser Skin Rejuvenation', desc: 'Non-ablative photo-acoustic collagen stimulation to restore dermal elasticity, even tone, and youthful luster.', href: '/laser-toning' },
  { name: 'Q Switched Laser Pigmentation Removal', desc: 'Selective photothermolysis clearing sun spots, freckles, post-inflammatory hyperpigmentation, and stubborn melasma.', href: '/dark-spot-and-pigment-reduction' },
  { name: 'Micro Needling and Radio Frequency (MNRF)', desc: 'EndyMed 3DEEP fractional RF microneedling to remodel deep collagen fibers for acne scar and laxity correction.', href: '/scar-removal' },
  { name: 'Fractional Resurfacing (FSR)', desc: 'Micro-fractional RF epidermal ablation and dermal volumetric heating for uneven skin texture and open pores.', href: '/skin-resurfacing-texture' },
  { name: 'Pro Shaper for Arms Contouring', desc: 'Multi-source 3DEEP radiofrequency thermal lipolysis and dermal tightening for tone and contour of the upper arms.', href: '/body-contouring' },
  { name: 'Pro Shaper for Jawline Contouring', desc: 'Targeted submental RF fat reduction and jawline definition to sculpt a sharp, lifted lower facial profile.', href: '/body-contouring' },
  { name: 'iFine for Under Eye Rejuvenation', desc: 'Ultra-delicate specialized RF handpiece designed specifically to tighten loose periorbital eyelid skin and soften crows feet.', href: '/dark-circles' },
  { name: 'OxyJet MediFacial', desc: 'Pressurized medical-grade pure oxygen delivering targeted peptide and antioxidant serums deep into the epidermis.', href: '/oxyjet-medifacial' },
  { name: 'Hydra MediFacial', desc: 'Vortex-fusion medical extraction, salicylic pore cleanse, and intense hyaluronic acid antioxidant infusion.', href: '/hydra-medifacial' },
];

export default function AestheticsSkinCarePage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'US-FDA Approved Aesthetic Dermatology Suite',
        title: 'Aesthetics & Laser Dermatology Procedures',
        hookSubtitle: 'Laser Hair Reduction, Precision Carbon Peels, EndyMed RF Contouring & MediFacials',
        description: 'Experience clinical aesthetics where dermatologist artistry meets advanced laser physics. Guided personally by MBBS (Gold Medalist) & MD Dermatologist Dr. Divya Sharma in Whitefield, Bangalore.',
        treatmentName: 'Aesthetic Dermatology Consultation',
        keyBenefits: [
          'Laser Hair Reduction (US-FDA Painless In-Motion)',
          'Bridal Dermatology & Instant Glow Peels',
          'EndyMed 3DEEP MNRF & FSR Resurfacing',
          'Pro Shaper Arms & Jawline Non-Surgical Sculpting'
        ]
      }}
      overview={{
        title: 'Clinical Artistry Meets High-Precision Laser Physics',
        paragraphs: [
          'Aesthetic dermatology at Dr. Divya Sharma’s clinic is rooted strictly in medical evidence, anatomical safety, and US-FDA approved technologies engineered specifically for Indian skin types (Fitzpatrick III–V).',
          'Whether you are seeking permanent Laser Hair Reduction, non-ablative Q-Switched collagen rejuvenation, deep acne scar remodeling with EndyMed MNRF, non-surgical body shaping with Pro Shaper, or luxury medical facials like OxyJet and Hydra MediFacial, every treatment is customized to deliver visible, natural, long-lasting clinical results.'
        ],
        causesOrSymptomsTitle: 'Comprehensive Aesthetic Procedures Offered',
        causesOrSymptoms: [
          'Laser Hair Reduction (First under aesthetic procedures — painless multi-wavelength technology)',
          'Bridal Dermatology Packages (Tailored 30 to 90-day wedding glow protocols)',
          'Hollywood Peel (Spectra laser carbon radiance treatment)',
          'Carbon Peel (Deep follicular oil control & pore refinement)',
          'Q Switched Laser Skin Rejuvenation (Non-ablative dermal toning)',
          'Q Switched Laser Pigmentation Removal (Targeted melasma & sun spot clearance)',
          'Micro Needling and Radio Frequency (MNRF — EndyMed 3DEEP scar remodeling)',
          'Fractional Resurfacing (FSR — Texture and open pore renewal)',
          'Pro Shaper for Arms Contouring (RF non-invasive upper arm tightening)',
          'Pro Shaper for Jawline Contouring (Submental sculpting & double-chin definition)',
          'iFine for Under Eye Rejuvenation (Specialized delicate periorbital RF smoothing)',
          'OxyJet MediFacial (Pressurized hyperbaric oxygen serum infusion)',
          'Hydra MediFacial (Deep vortex-vacuum pore extraction & hydration)'
        ]
      }}
      approach={{
        title: 'Our Comprehensive Aesthetic Care Protocol',
        description: 'Multi-modality protocols ensuring maximum efficacy with minimal social downtime.',
        steps: [
          {
            stepNumber: '01',
            title: 'Diagnostic Melanin & Elasticity Mapping',
            description: 'Assessing your skin phototype, hydration barrier, and collagen laxity before configuring laser and RF energy levels.'
          },
          {
            stepNumber: '02',
            title: 'US-FDA Laser / RF Procedure Execution',
            description: 'Conducted in dedicated sterile suites with continuous contact cooling for complete comfort.'
          },
          {
            stepNumber: '03',
            title: 'Post-Procedure Cellular Regeneration',
            description: 'Barrier-replenishing medical formulations and custom SPF guidance to lock in dermal radiance and prevent rebound pigmentation.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What aesthetic procedures are offered under Dr. Divya Sharma?',
          answer: 'Our clinic offers Laser Hair Reduction, Bridal Dermatology Packages, Hollywood Peel, Carbon Peel, Q Switched Laser Skin Rejuvenation, Q Switched Laser Pigmentation Removal, Micro Needling and Radio Frequency (MNRF), Fractional Resurfacing (FSR), Pro Shaper for Arms Contouring, Pro Shaper for Jawline Contouring, iFine for Under Eye Rejuvenation, OxyJet MediFacial, and Hydra MediFacial.'
        },
        {
          question: 'Why is Laser Hair Reduction listed under aesthetic procedures?',
          answer: 'Laser Hair Reduction is an aesthetic dermatological procedure using medical-grade triple-wavelength diode and Nd:YAG lasers to safely disable hair follicles without damaging surrounding epidermal melanin.'
        },
        {
          question: 'What is the difference between Hollywood Peel and Carbon Peel?',
          answer: 'Both treatments utilize liquid carbon applied to the skin followed by Q-Switched laser energy. The Hollywood Peel uses a specialized two-step photothermal and photoacoustic protocol designed for red-carpet instant glow and pore shrinkage, while the standard Carbon Peel focuses on deep pore cleansing, acne bacteria destruction, and sebum reduction.'
        },
        {
          question: 'How do Pro Shaper and iFine radiofrequency treatments work?',
          answer: 'Pro Shaper uses 3DEEP multi-source radiofrequency to deliver deep thermal energy into subcutaneous layers, stimulating collagen tightening and fat cell reduction for arms and jawline contouring. iFine is an ultra-fine RF handpiece specially engineered to safely treat delicate under-eye bags, crepey skin, and periorbital fine lines.'
        },
        {
          question: 'How far in advance should I start a Bridal Dermatology Package?',
          answer: 'We recommend initiating pre-wedding dermatology packages 3 to 6 months before the wedding day to allow optimal time for laser toning, gentle chemical peels, and MediFacial sessions.'
        }
      ]}
      relatedLinks={[
        { title: 'Laser Hair Reduction', href: '/unwanted-hair', desc: 'Painless US-FDA triple-wavelength laser hair reduction' },
        { title: 'Hollywood Peel', href: '/hollywood-peel', desc: 'Instant red carpet laser clarity facial' },
        { title: 'Laser Toning', href: '/laser-toning', desc: 'Q-Switched laser pigment correction and collagen toning' },
        { title: 'Acne Scar Removal (MNRF)', href: '/scar-removal', desc: 'EndyMed 3DEEP microneedling RF and subcision' },
        { title: 'Skin Resurfacing (FSR)', href: '/skin-resurfacing-texture', desc: 'Fractional radiofrequency pore tightening and texture repair' },
        { title: 'Trichology & Hair Growth', href: '/hair-scalp-problems', desc: 'PRP, GFC, PRF, mesotherapy and low level laser hair therapy' }
      ]}
    />
  );
}
