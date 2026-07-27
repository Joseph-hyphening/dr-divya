import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Common Skin Irritants & Allergens Guide | Dr. Divya Sharma',
  description: 'Dermatologist guide on identifying household skin irritants, fragrances, sulfates, and cosmetics causing dermatitis in Whitefield Bangalore.',
};

export default function CommonSkinIrritantsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Contact Dermatology & Safety',
        title: 'Common Household & Cosmetic Skin Irritants',
        hookSubtitle: 'Protect Your Skin from Fragrances, Sulfates, Harsh Acids & Detergents',
        description: 'Identify common chemical ingredients in daily soaps, laundry detergents, and cosmetics that trigger contact dermatitis, itching, and barrier damage.',
        treatmentName: 'Skin Irritation Consultation',
        keyBenefits: [
          'Identifies Cosmetic & Household Chemical Triggers',
          'Prevents Irritant Contact Dermatitis',
          'Hypoallergenic Product Recommendations',
          'Restores Damaged Skin Lipid Barrier'
        ]
      }}
      overview={{
        title: 'Understanding Irritant vs. Allergic Dermatitis',
        paragraphs: [
          'Irritant contact dermatitis occurs when a harsh chemical directly strips the skin’s protective lipid layer, causing burning, dryness, and redness.',
          'Dr. Divya Sharma helps patients audit their daily personal care products to eliminate hidden irritants like artificial fragrances, SLS, and harsh denatured alcohols.'
        ],
        causesOrSymptomsTitle: 'Top Skin Irritants to Watch',
        causesOrSymptoms: [
          'Artificial Fragrances & Essential Oils (Top cause of contact allergy)',
          'Sodium Lauryl Sulfate (SLS / SLES harsh surfactants)',
          'Denatured Alcohol / SD Alcohol in toners',
          'Methylisothiazolinone (Preservative in wet wipes & soaps)'
        ]
      }}
      approach={{
        title: 'Our Product Elimination Strategy',
        description: 'Clean skincare routine design.',
        steps: [
          {
            stepNumber: '01',
            title: 'Ingredient Audit',
            description: 'Checking active product labels for known irritants.'
          },
          {
            stepNumber: '02',
            title: 'Elimination Phase',
            description: 'Switching to fragrance-free, soap-free cleansers.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Repair',
            description: 'Applying ceramide-rich barrier repair ointments.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are "natural" essential oils safe for sensitive skin?',
          answer: 'Not always! Essential oils (tea tree, lavender, citrus oils) contain concentrated volatile terpenes that frequently trigger severe contact allergies.'
        }
      ]}
    />
  );
}
