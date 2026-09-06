import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Tag & Cyst Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Instant radiofrequency skin tag and mole removal in Whitefield Bangalore. Painless snip excision with zero scarring by Senior Dermatologist Dr. Divya Sharma.',
};

export default function SkinTagsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Precision Radiofrequency Lesion Excision',
        title: 'Instant Skin Tag & Cyst Removal',
        hookSubtitle: 'Clear Unwanted Skin Tags, Moles & Benign Lesions Painlessly in a Single Session',
        description: 'Remove annoying friction-induced skin tags, seborrheic keratoses, and epidermal cysts quickly using radiofrequency micro-cautery under sterile clinical conditions.',
        treatmentName: 'Skin Tag Removal Consultation',
        keyBenefits: [
          'Instant Single-Session Removal',
          'Painless Topical Numbing Procedure',
          'Zero Suture & Minimal Scarring Risk',
          'Supervised by Expert Dermatologist'
        ]
      }}
      overview={{
        title: 'Understanding Skin Tags (Acrochordons) & Benign Lesions',
        paragraphs: [
          'Skin tags (clinically known as acrochordons or soft fibromas) are harmless, flesh-colored or brownish pedunculated growths that hang off the skin by a thin stalk. They commonly develop in areas of frequent skin-on-skin or skin-on-clothing friction—such as the neck, underarms (axillae), groin folds, under the breasts, and on eyelids.',
          'Formed by loose collagen fibers and micro-blood vessels trapped within thick epidermal cover, skin tags often multiply due to genetic predisposition, hormonal changes during pregnancy, and metabolic conditions such as insulin resistance or Type 2 diabetes. While medically benign, skin tags frequently become snagged on clothing or jewelry, causing pain, bleeding, and aesthetic distress.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we strictly advise against dangerous home remedies like tying threads or using over-the-counter burning acids. We perform precision Radiofrequency (RF) Ablation and micro-snip excision. After applying localized numbing cream, RF micro-current cauterizes the feeding blood vessel instantly, severing the skin tag cleanly with zero bleeding and minimal risk of post-procedural scarring.'
        ],
        causesOrSymptomsTitle: 'Common Triggers & Predilection Sites',
        causesOrSymptoms: [
          'High friction zones (Neck collar lines, axillary armpits, inframammary folds)',
          'Metabolic factors (Insulin resistance, elevated BMI & metabolic syndrome)',
          'Hormonal surges (Pregnancy growth factor elevation & endocrine shifts)',
          'Eyelid margins & periorbital skin folds causing blinking irritation',
          'Seborrheic keratoses (Warty brown "stuck-on" benign lesions of aging skin)',
          'Frequent catching, snagging, bleeding, or localized inflammation from clothing'
        ]
      }}
      approach={{
        title: 'Our Phased Radiofrequency Removal Protocol',
        description: 'A 3-step swift clinical procedure ensuring complete removal with smooth healing.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Lesion Differentiation',
            description: 'Carefully inspecting growths under polarized dermoscopy to distinguish harmless tags from atypical nevi or moles.'
          },
          {
            stepNumber: '02',
            title: 'Topical Numbing & RF Micro-Cautery',
            description: 'Applying prescription anesthetic cream followed by high-frequency radiofrequency snip excision of the stalk.'
          },
          {
            stepNumber: '03',
            title: 'Antiseptic Dressing & Rapid Barrier Recovery',
            description: 'Applying antibiotic healing gel and protective barrier cream to ensure tiny micro-crusts shed cleanly within 5 days.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Does removing skin tags cause more of them to grow back?',
          answer: 'No! This is a widespread myth. Removing a skin tag cleanly eliminates that specific growth forever. However, if you are genetically predisposed or have underlying friction/insulin resistance, new tags may eventually develop in other friction areas over time.'
        },
        {
          question: 'Is radiofrequency skin tag removal painful?',
          answer: 'The procedure is virtually painless. We apply potent medical numbing cream 30 minutes prior to removal, ensuring you feel nothing more than mild warm touch during the procedure.'
        },
        {
          question: 'Why shouldn’t I tie a string or thread around my skin tag at home?',
          answer: 'Tying thread cuts off blood supply slowly, causing painful tissue necrosis and creating an open wound that frequently gets severely infected, leading to dark permanent scars.'
        },
        {
          question: 'Will there be any scar after RF skin tag removal?',
          answer: 'Because radiofrequency seals blood vessels with pinpoint precision without cutting deep dermal layers, the site heals as a tiny flat pink spot that blends into normal skin color within 1 to 2 weeks.'
        },
        {
          question: 'How long does a skin tag removal session take?',
          answer: 'The actual removal takes only 5 to 15 minutes depending on the number of skin tags being treated.'
        },
        {
          question: 'Is there any connection between skin tags and diabetes?',
          answer: 'Yes. Multiple skin tags around the neck and underarms are frequently an early cutaneous sign of insulin resistance. We often recommend checking fasting blood sugar levels.'
        }
      ]}
      relatedLinks={[
        { title: "Keloids & Scar Reduction", href: "/keloids", desc: "Specialized flattening injections and laser scar remodeling" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Clinical active breakout control & pore clearance" },
        { title: "Keratosis Pilaris Care", href: "/keratosis-pilaris", desc: "Smoothing protocols for rough, bumpy skin on arms & legs" },
        { title: "Tattoo Removal", href: "/tattoo-removal", desc: "Q-Switched laser tattoo ink clearance engineered for skin safety" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Targeted clinical fading for dark spots & post-procedure marks" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical exfoliation peels for uniform, radiant skin texture" }
      ]}
    />
  );
}
