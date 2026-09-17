import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Trichology & Hair Growth Treatments | Dr. Divya Sharma Clinic Bangalore',
  description: 'Specialized clinical hair growth therapies: PRP, GFC, PRF, Mesotherapy, Low Level Laser Therapy (LLLT), and Medical Grade LED by Gold Medalist Dermatologist Dr. Divya Sharma in Whitefield.',
};

export const hairProceduresList = [
  { name: 'PRP-Platelet Rich Plasma for Hair Growth', desc: 'Concentrated autologous platelet micro-injections releasing natural growth factors to reactivate miniaturized hair follicles.', href: '/hair-loss' },
  { name: 'GFC- Growth Factor Concentrate for Hair Growth', desc: 'Next-generation acellular, highly purified autologous growth factors delivering maximum follicular regeneration with zero downtime.', href: '/hair-loss' },
  { name: 'PRF- Platelet Rich Fibrin for Hair Growth', desc: 'Second-generation platelet concentrate with a fibrin scaffold that provides slow, sustained release of regenerative growth factors.', href: '/hair-loss' },
  { name: 'Mesotherapy for Hair Growth', desc: 'Targeted micro-injections of essential vitamins, minerals, amino acids, and DHT-blocking peptides directly into the scalp dermis.', href: '/hair-loss' },
  { name: 'Low Level Laser Therapy (LLLT) for Hair Growth', desc: 'FDA-cleared red laser photobiomodulation (650nm) to boost mitochondrial ATP production and promote microcirculation to hair roots.', href: '/hair-loss' },
  { name: 'Medical grade LED for Hair Growth', desc: 'High-intensity clinical LED phototherapy delivering targeted wavelengths to reduce scalp inflammation and stimulate follicle cycling.', href: '/hair-loss' },
];

export default function HairScalpProblemsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Trichology & Follicular Regrowth',
        title: 'Advanced Hair Growth & Scalp Health Suite',
        hookSubtitle: 'PRP, GFC, PRF, Mesotherapy, Low Level Laser (LLLT) & Medical Grade LED',
        description: 'Stop chronic hair loss, reverse miniaturization, and restore thick, healthy hair density with dermatologist-led regenerative science at Dr. Divya Sharma Clinic in Whitefield, Bangalore.',
        treatmentName: 'Hair Growth & Trichology Consultation',
        keyBenefits: [
          'PRP & Next-Gen GFC Autologous Therapies',
          'PRF Fibrin Scaffold Sustained Regrowth',
          'Low Level Laser (LLLT) & Medical Grade LED',
          'Polarized Video-Trichoscopy Diagnostic Scalp Mapping'
        ]
      }}
      overview={{
        title: 'Evidence-Based Biological Hair Regrowth Science',
        paragraphs: [
          'Hair thinning and active shedding occur when hair follicles suffer from DHT-mediated miniaturization, microvascular insufficiency, chronic scalp inflammation, or nutritional deficiencies.',
          'At Dr. Divya Sharma Clinic in Whitefield, Bangalore, we provide a complete suite of specialized hair growth procedures tailored to your stage of hair loss. We combine autologous growth factor biology (PRP, GFC, PRF) with micro-nutrient mesotherapy and advanced photobiomodulation (LLLT and Medical Grade LED) to stimulate dormant roots and lengthen the anagen growth phase.'
        ],
        causesOrSymptomsTitle: 'Specialized Hair Growth Procedures Offered',
        causesOrSymptoms: [
          'PRP-Platelet Rich Plasma for Hair Growth (Autologous platelet growth factor stimulation)',
          'GFC- Growth Factor Concentrate for Hair Growth (Next-generation acellular concentrated growth factors)',
          'PRF- Platelet Rich Fibrin for Hair Growth (Fibrin matrix for prolonged, sustained growth factor release)',
          'Mesotherapy for Hair Growth (Direct intradermal micro-nutrient & peptide infusion)',
          'Low Level Laser Therapy (LLLT) for Hair Growth (Cold laser photobiomodulation for cellular ATP energy)',
          'Medical grade LED for Hair Growth (Anti-inflammatory, micro-vascular scalp stimulation)',
          'Male Pattern Baldness Protocols (Androgenetic alopecia DHT-blocker regimens)',
          'Female Hair Fall & PCOS Shedding (Hormonal and ferritin balance recovery)',
          'Chronic Dandruff & Seborrheic Dermatitis Relief (Scalp microbiome rehabilitation)'
        ]
      }}
      approach={{
        title: 'Our Phased Hair Restoration Protocol',
        description: 'Diagnosing the root cause first, arresting hair fall, and accelerating new follicle growth.',
        steps: [
          {
            stepNumber: '01',
            title: 'Digital Video-Trichoscopy & Blood Biomarkers',
            description: 'Magnified follicular unit analysis to count active vs miniaturized hairs, paired with ferritin, vitamin D, and hormonal panels.'
          },
          {
            stepNumber: '02',
            title: 'Biological & Phototherapy Activation',
            description: 'Targeted in-clinic sessions combining GFC/PRP/PRF, mesotherapy, and LLLT/LED photobiomodulation.'
          },
          {
            stepNumber: '03',
            title: 'Sustained At-Home Medical Maintenance',
            description: 'Dermatologist-prescribed peptide serums, customized Minoxidil solutions, and targeted nutritional supplements.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What are the main hair growth procedures offered under Hair?',
          answer: 'Under our Hair & Trichology section, we offer: PRP-Platelet Rich Plasma for Hair Growth, GFC- Growth Factor Concentrate for Hair Growth, PRF- Platelet Rich Fibrin for Hair Growth, Mesotherapy for Hair Growth, Low Level Laser Therapy (LLLT) for Hair Growth, and Medical Grade LED for Hair Growth, alongside targeted medical prescriptions for male and female pattern hair loss.'
        },
        {
          question: 'How do GFC and PRF differ from traditional PRP for hair growth?',
          answer: 'Traditional PRP isolates platelets in plasma. GFC (Growth Factor Concentrate) takes this a step further by pre-activating platelets and removing red and white blood cells, delivering pure growth factors with zero pain or inflammation. PRF (Platelet Rich Fibrin) is spun at lower G-forces without anticoagulants, creating a natural fibrin mesh that slowly releases growth factors over 7–10 days.'
        },
        {
          question: 'What is Low Level Laser Therapy (LLLT) for hair growth?',
          answer: 'LLLT uses non-thermal, low-intensity red laser light (650nm) to penetrate scalp tissue. It stimulates cytochrome c oxidase within hair follicle mitochondria, dramatically boosting cellular ATP energy, improving blood flow, and encouraging miniaturized follicles back into the active anagen growth phase.'
        },
        {
          question: 'How does Medical Grade LED assist hair growth?',
          answer: 'Medical-grade LED therapy delivers therapeutic wavelengths that reduce scalp micro-inflammation, improve micro-circulation around the dermal papilla, and enhance cellular healing after PRP or GFC sessions.'
        },
        {
          question: 'How many sessions are recommended for optimal hair regrowth?',
          answer: 'Most patients benefit from a core protocol of 4 to 6 sessions of GFC/PRP or mesotherapy spaced 3 to 4 weeks apart, combined with weekly or bi-weekly LLLT/LED light sessions.'
        }
      ]}
      relatedLinks={[
        { title: 'Hair Loss & GFC Suite', href: '/hair-loss', desc: 'In-depth medical guide to Growth Factor Concentrate therapy' },
        { title: 'Male Pattern Hair Loss', href: '/hair-loss-in-men', desc: 'Crown thinning and receding hairline protocols' },
        { title: 'Female Hair Shedding', href: '/hair-fall-in-female', desc: 'Hormonal, PCOS, and postpartum hair recovery' },
        { title: 'Chronic Dandruff Relief', href: '/dandruff', desc: 'Seborrheic dermatitis and anti-fungal scalp care' },
        { title: 'Aesthetic Laser Suite', href: '/aesthetics-skin-care', desc: 'Laser hair reduction, Hollywood peels, and skin rejuvenation' },
        { title: 'Pediatric Dermatology', href: '/newborn-pediatric-dermatology', desc: 'Gentle infant and child skin care protocols' }
      ]}
    />
  );
}
