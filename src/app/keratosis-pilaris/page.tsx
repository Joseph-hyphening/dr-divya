import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Keratosis Pilaris (Chicken Skin) Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Specialized dermatological treatment for Keratosis Pilaris (bumpy arm skin) in Whitefield Bangalore. Keratolytic peels and smoothing care by Dr. Divya Sharma.',
};

export default function KeratosisPilarisPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Follicular Smoothing Protocol',
        title: 'Targeted Keratosis Pilaris (Bumpy Skin) Care',
        hookSubtitle: 'Smooth Rough "Chicken Skin", Clear Follicular Keratin Plugs & Reduce Redness',
        description: 'Dermatologist-formulated keratolytic peels, specialized moisturizing regimes, and laser smoothing for persistent bumps on arms, thighs, and cheeks.',
        treatmentName: 'Keratosis Pilaris Consultation',
        keyBenefits: [
          'Dissolves Hard Follicular Keratin Plugs',
          'Softens Rough "Chicken Skin" Texture',
          'Calms Follicular Erythema & Red Bumps',
          'Prescription Keratolytic Creams'
        ]
      }}
      overview={{
        title: 'Understanding Keratosis Pilaris (KP) Biology',
        paragraphs: [
          'Keratosis Pilaris (KP) is a very common, benign genetic dermatological condition characterized by rough, pinpoint bumps surrounding hair follicles across the outer upper arms, thighs, buttocks, and occasionally cheeks. Often colloquially described as "chicken skin" or "strawberry skin", KP occurs when the bodys protective protein—keratin—accumulates excessively inside hair follicle openings.',
          'Instead of shedding normally, hyperkeratotic keratin forms a hard plug that blocks the hair follicle orifice. Trapped coiled hair shafts behind the keratin plug trigger mild localized inflammation, giving the bumps a reddish, brownish, or rough goosebump-like texture. KP is strongly associated with atopic diathesis (eczema, dry skin, asthma) and typically worsens during cold winter months due to reduced ambient humidity.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we avoid aggressive mechanical loofahs or harsh scrubs, which irritate follicles and cause post-inflammatory hyperpigmentation. We utilize evidence-based chemical keratolytics (high-potency Urea, Lactic Acid, Salicylic Acid, and Retinoids) paired with gentle medical chemical peels and diode laser hair reduction to eliminate the underlying hair anchor, permanently smoothing skin texture.'
        ],
        causesOrSymptomsTitle: 'Common Indications & Affected Areas',
        causesOrSymptoms: [
          'Rough, dry, sand-paper textured bumps on upper arms & anterior thighs',
          'Reddish or brown discoloration around individual hair follicles',
          'Worsening roughness during low-humidity winter months',
          'Associated dry skin (Xerosis) & history of childhood atopic eczema',
          'Ingrown coiled hairs trapped beneath dense keratin plugs',
          'Post-inflammatory dark spots (PIH) caused by picking or aggressive scrubbing'
        ]
      }}
      approach={{
        title: 'Our Phased KP Smoothing Protocol',
        description: 'A 3-stage clinical approach to dissolve follicular keratin plugs and rebuild smooth, hydrated epidermal texture.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Follicular Inspection',
            description: 'Examining keratin plug density, coiled hair presence, and localized erythema to customize keratolytic concentration.'
          },
          {
            stepNumber: '02',
            title: 'In-Clinic Medical Keratolytic Peels',
            description: 'Applying specialized alpha/beta hydroxy acid medical peels to gently dissolve keratin deposits without epidermal abrasion.'
          },
          {
            stepNumber: '03',
            title: 'Barrier Hydration & Laser Hair Reduction',
            description: 'Prescribing lipid-replenishing humectants combined with laser hair removal to remove follicle anchors permanently.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can Keratosis Pilaris be permanently cured?',
          answer: 'Keratosis Pilaris is a genetic trait rather than a disease. While it cannot be permanently cured, continuous clinical treatment with prescription keratolytics and medical peels can maintain 90%+ smooth, bump-free skin.'
        },
        {
          question: 'Why does physical scrubbing with loofahs make KP worse?',
          answer: 'Physical loofahs and harsh physical scrubs tear the skin barrier and inflame hair follicles. This causes the body to produce even MORE keratin to defend itself, making bumps rougher and darker.'
        },
        {
          question: 'How does Laser Hair Removal help clear Keratosis Pilaris?',
          answer: 'Because keratin plugs form around hair follicles, removing the hair follicle anchor with laser hair reduction reduces keratin entrapment, drastically smoothing skin texture.'
        },
        {
          question: 'What topical active ingredients work best for KP?',
          answer: 'Topical formulations containing high concentrations of Urea (10-20%), Lactic Acid (12%), Salicylic Acid (2%), and Retinoids work synergistically to break down keratin bonds and encourage smooth cell renewal.'
        },
        {
          question: 'How long does it take to see smoother skin?',
          answer: 'Most patients notice significantly softer skin within 2 to 3 weeks of using prescribed keratolytic regimens, with maximum smoothness achieved in 6 to 8 weeks.'
        },
        {
          question: 'Is Keratosis Pilaris contagious or linked to poor hygiene?',
          answer: 'Not at all. KP is purely genetic and harmless. It is entirely unrelated to hygiene, diet, or infection.'
        }
      ]}
      relatedLinks={[
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Targeted clinical protocols for active breakouts and pore clearing" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical exfoliation to dissolve dead keratin and smooth skin" },
        { title: "Laser Hair Removal", href: "/unwanted-hair", desc: "Triple-wavelength laser hair reduction to eliminate follicle anchors" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Fading post-inflammatory dark marks caused by picked KP bumps" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Laser pore refinement facial for glowing, radiant skin texture" },
        { title: "Skin Tags Removal", href: "/skin-tags", desc: "Safe radiofrequency removal for benign skin growths and tags" }
      ]}
    />
  );
}
