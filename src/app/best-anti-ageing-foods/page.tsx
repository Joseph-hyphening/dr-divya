import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Best Anti-Ageing Foods & Nutrition Guide | Dr. Divya Sharma',
  description: 'Dermatologist guide on anti-aging superfoods, collagen-boosting nutrition, antioxidants, and dietary skin glow tips in Whitefield Bangalore.',
};

export default function AntiAgeingFoodsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Nutritional Dermatology & Youth Science',
        title: 'Best Anti-Ageing Foods & Skincare Nutrition',
        hookSubtitle: 'Fuel Your Collagen, Fight Free Radicals & Maintain Glowing Skin From Within',
        description: 'Discover the top antioxidant-rich superfoods, healthy fats, and vitamins that fight premature skin aging, wrinkles, and oxidative stress.',
        treatmentName: 'Anti-Aging Consultation',
        keyBenefits: [
          'Collagen Boosting Nutrition Tips',
          'Neutralizes Free Radical Glycation',
          'Rich in Omega-3s & Vitamin C/E',
          'Complements Clinical Anti-Aging Laser Care'
        ]
      }}
      overview={{
        title: 'Dietary Secret to Youthful Skin',
        paragraphs: [
          'What you put on your plate reflects directly on your skin. High sugar diets cause advanced glycation end-products (AGEs) that cross-link and stiffen dermal collagen, creating premature wrinkles.',
          'Dr. Divya Sharma recommends combining clinical collagen therapies with a diet rich in colorful antioxidants, berries, nuts, seeds, and healthy fatty acids.'
        ],
        causesOrSymptomsTitle: 'Top Anti-Aging Foods',
        causesOrSymptoms: [
          'Berries (Blueberries, Pomegranates) – High in anthocyanin antioxidants',
          'Avocados & Walnuts – Rich in essential Omega-3 fatty acids',
          'Citrus & Bell Peppers – Essential Vitamin C for collagen synthesis',
          'Green Tea – EGCG polyphenols that fight UV photo-damage'
        ]
      }}
      approach={{
        title: 'Our Internal & External Rejuvenation Approach',
        description: 'Synergistic skin care from inside out.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dietary Glycation Audit',
            description: 'Reducing refined sugars and fried AGEs foods.'
          },
          {
            stepNumber: '02',
            title: 'Antioxidant Supplementation',
            description: 'Prescribing oral Astaxanthin, Glutathione & Vitamin C.'
          },
          {
            stepNumber: '03',
            title: 'Clinical Collagen Boost',
            description: 'Pairing diet with RF microneedling or laser toning.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Do oral collagen supplements really work?',
          answer: 'Hydrolyzed collagen peptides, when taken with Vitamin C, supply essential amino acids (proline, hydroxyproline) that support skin elasticity and moisture.'
        }
      ]}
    />
  );
}
