import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Stretch Marks Treatment Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Advanced stretch mark reduction in Whitefield Bangalore. Microneedling RF, fractional laser remodeling, and collagen rebuild by Dr. Divya Sharma.',
};

export default function StretchMarksPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinical Dermal Remodeling Protocol',
        title: 'Targeted Stretch Mark Reduction Therapy',
        hookSubtitle: 'Fade Red & White Stretch Marks, Rebuild Collagen & Restore Firm Skin Texture',
        description: 'Advanced dermatological combination therapies utilizing Microneedling Radiofrequency (MNRF), fractional laser resurfacing, and collagen stimulation for body striae.',
        treatmentName: 'Stretch Marks Consultation',
        keyBenefits: [
          'Dual Action Red (Rubrae) & White (Alba) Striae Therapy',
          'Microneedling RF & Fractional Laser Collagen Rebuild',
          'Tightens Loose Skin Texture',
          'Supervised by Senior Dermatologist'
        ]
      }}
      overview={{
        title: 'Understanding Stretch Marks (Striae Distensae) Pathophysiology',
        paragraphs: [
          'Stretch marks (clinically termed Striae Distensae) are a form of dermal scarring caused by rapid stretching of the skin beyond its elastic tolerance. Common triggers include pregnancy, rapid weight fluctuations, adolescent growth spurts, intensive bodybuilding, and prolonged systemic or topical corticosteroid use.',
          'When the skin undergoes rapid expansion, the middle layer of skin (dermis) experiences mechanical tearing. This ruptures elastic fibers (elastin) and disorganized collagen bundles. In early stages, stretch marks present as pinkish, purplish, or reddish linear bands known as Striae Rubrae, driven by localized inflammation and dilated micro-capillaries. Over time, these evolve into mature white, depressed, silvery scars known as Striae Alba.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we utilize advanced medical technology to treat both early red and mature white stretch marks. We combine Microneedling Radiofrequency (MNRF)—which delivers controlled thermal radiofrequency energy into deep dermal layers to stimulate neo-collagenesis—with fractional laser skin resurfacing and prescription topical collagen rebuilders to significantly fade striae width, depth, and discoloration.'
        ],
        causesOrSymptomsTitle: 'Common Triggers & Clinical Types',
        causesOrSymptoms: [
          'Striae Gravidarum (Pregnancy-induced abdominal & breast stretch marks)',
          'Growth spurt striae across thighs, hips, lower back & buttocks during adolescence',
          'Rapid weight gain or rapid bodybuilding muscle volume growth',
          'Steroid-induced striae (Prolonged oral or topical steroid abuse causing dermal thinning)',
          'Early Striae Rubrae (Reddish/purple erythematous inflammatory bands)',
          'Mature Striae Alba (Atrophic, silvery white depressed linear bands)'
        ]
      }}
      approach={{
        title: 'Our Phased Stretch Mark Remodeling Protocol',
        description: 'A 3-stage clinical approach to stimulate deep dermal collagen and blend stretch mark texture.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermal Thickness & Striae Classification',
            description: 'Evaluating vascularity, scar depth, and elasticity to choose between MNRF, vascular laser, or fractional resurfacing.'
          },
          {
            stepNumber: '02',
            title: 'Microneedling RF & Thermal Collagen Induction',
            description: 'Delivering micro-insulated needle pulses with thermal RF energy into deep dermal layers to trigger new collagen synthesis.'
          },
          {
            stepNumber: '03',
            title: 'Regenerative Topicals & Epidermal Rebuilding',
            description: 'Applying growth factor serums, topical retinoids, and barrier hydrators to refine surface skin smoothness.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the main difference between red and white stretch marks?',
          answer: 'Red stretch marks (Striae Rubrae) are early stage inflammatory marks with active blood flow; they respond faster to treatment. White stretch marks (Striae Alba) are mature, silver-white scars where blood vessels have faded; they require deep dermal collagen remodeling with MNRF or lasers.'
        },
        {
          question: 'Can stretch marks be erased 100% completely?',
          answer: 'While no medical treatment can completely erase stretch marks back to 100% original untouched skin, clinical treatments like MNRF and laser resurfacing can achieve 70% to 85% improvement in color, width, and depth.'
        },
        {
          question: 'Is Microneedling Radiofrequency (MNRF) painful?',
          answer: 'We apply potent medical numbing cream for 45 minutes prior to MNRF treatment, making the procedure very tolerable with minimal discomfort.'
        },
        {
          question: 'Do bio-oils and cocoa butter creams get rid of stretch marks?',
          answer: 'Over-the-counter oils and creams hydrate superficial skin, which can soothe itching, but they cannot penetrate deep into the dermis to rebuild torn collagen or repair striae scars.'
        },
        {
          question: 'How many sessions of MNRF or laser resurfacing are recommended?',
          answer: 'Most patients require 4 to 6 sessions spaced 4 weeks apart to achieve visible, long-lasting collagen remodeling and stretch mark blending.'
        },
        {
          question: 'When is the best time to start treating pregnancy stretch marks?',
          answer: 'Treatment can begin after delivery and breastfeeding are completed. Treating early while marks are still pink or red yields the fastest results.'
        }
      ]}
      relatedLinks={[
        { title: "Keloids & Scar Reduction", href: "/keloids", desc: "Specialized flattening injections & laser scar remodeling" },
        { title: "Skin Tags Removal", href: "/skin-tags", desc: "Safe radiofrequency removal for benign skin growths & tags" },
        { title: "Tattoo Removal", href: "/tattoo-removal", desc: "Q-Switched laser tattoo clearance engineered for skin safety" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical acid peels for rapid epidermal exfoliation & texture renewal" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Targeted clinical fading for post-inflammatory dark marks & spots" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Laser radiance facial for pore tightening & skin texture smooth" }
      ]}
    />
  );
}
