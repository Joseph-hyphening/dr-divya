import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Skin Lumps & Bumps Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Clinical evaluation and radiofrequency removal of epidermoid cysts, lipomas, seborrheic keratosis & skin lumps in Whitefield Bangalore by Dr. Divya Sharma.',
};

export default function LumpsBumpsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Minor Surgical & RF Removal Protocol',
        title: 'Skin Lumps, Bumps & Cyst Excision',
        hookSubtitle: 'Safe, Scarless Removal of Epidermoid Cysts, Lipomas & Benign Skin Lesions',
        description: 'Diagnose and excise troublesome skin lumps, sebaceous cysts, lipomas, syringomas, and raised skin growths cleanly under local anesthesia with minimal scar technology.',
        treatmentName: 'Lumps & Bumps Consultation',
        keyBenefits: [
          'Precision Radiofrequency (RF) & Micro-Excision',
          'Intact Cyst Wall Removal to Prevent Recurrence',
          'Pain-Free Prescription Local Anesthesia',
          'Supervised by Senior Dermatologist'
        ]
      }}
      overview={{
        title: 'Clinical Evaluation of Cutaneous Lumps & Subcutaneous Growths',
        paragraphs: [
          'Cutaneous lumps, subcutaneous bumps, and facial growths encompass a broad spectrum of dermatological conditions. The most common include epidermoid cysts (slow-growing sac-like structures beneath the skin containing keratin cheese-like material), sebaceous cysts (obstructed sebaceous gland sacs), lipomas (benign fat cell tumors), seborrheic keratoses (warty brown age-related growths), syringomas (benign sweat gland duct tumors around the eyes), and xanthelasma (cholesterol deposits on eyelids).',
          'Attempting to squeeze, pop, or drain cysts or lumps at home is dangerous. Puncturing an infected epidermoid cyst wall releases keratin and inflammatory debris into surrounding subcutaneous tissue, triggering severe foreign-body inflammatory reactions, painful abscesses, cellulitis, and prominent irregular scarring. Complete permanent cure requires removing the entire sac capsule intact.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we perform high-resolution dermoscopy and palpation to differentiate benign skin lesions from atypical growths. We utilize advanced Radiofrequency (RF) micro-cautery for superficial bumps and minimal-incision micro-excision techniques under local anesthesia, ensuring complete capsule clearance, zero bleeding, and invisible suture scars.'
        ],
        causesOrSymptomsTitle: 'Common Lumps & Benign Lesions Treated',
        causesOrSymptoms: [
          'Epidermoid & Sebaceous Cysts (Firm dome-shaped lumps with central punctum)',
          'Subcutaneous Lipomas (Soft, mobile, doughy fatty tissue lumps beneath skin)',
          'Seborrheic Keratoses (Brown, black, or tan "stuck-on" warty skin plaques)',
          'Syringomas (Small, skin-colored pinpoint bumps around lower eyelids)',
          'Xanthelasma Palpebrarum (Yellowish cholesterol plaques on inner eyelid corners)',
          'Dermatofibromas & Cherry Angiomas (Firm pink/brown skin nodules & red vascular dots)'
        ]
      }}
      approach={{
        title: 'Our Phased Lesion Clearance Protocol',
        description: 'A 3-stage clinical procedure ensuring complete capsule extraction with invisible scar healing.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic & Palpation Profiling',
            description: 'Assessing lesion depth, mobility, vascularity, and capsule borders under magnified polarized dermoscopy.'
          },
          {
            stepNumber: '02',
            title: 'Painless Local Anesthesia & RF / Micro-Excision',
            description: 'Administering local anesthesia followed by precision RF ablation or micro-incision extraction of the intact cyst wall.'
          },
          {
            stepNumber: '03',
            title: 'Sub-Cuticular Plastic Suturing & Wound Care',
            description: 'Placing delicate cosmetic sutures if required, followed by antiseptic dressing and scar-minimizing silicone gel.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Will cyst removal leave a prominent scar on my face or body?',
          answer: 'Dr. Divya Sharma utilizes micro-incision surgery and radiofrequency technology that aligns incisions precisely along natural skin tension lines (Langers lines). This results in a fine, barely visible line that fades naturally.'
        },
        {
          question: 'Why do cysts keep coming back if squeezed at home?',
          answer: 'Squeezing a cyst only expels trapped keratin, leaving the underlying secretory sac lining behind. As long as the sac wall remains inside the skin, it will continuously refill with keratin. Complete surgical removal of the sac wall prevents recurrence.'
        },
        {
          question: 'What is the difference between a lipoma and a skin cyst?',
          answer: 'A lipoma is a benign growth of normal fat cells residing deeper in the subcutaneous tissue; it feels soft, doughy, and moves easily when pressed. A skin cyst is located closer to the surface, feels firmer, and often has a visible central pore opening (punctum).'
        },
        {
          question: 'Is radiofrequency removal painful?',
          answer: 'Not at all. We administer local anesthetic injections prior to procedure. The area becomes completely numb, ensuring you feel zero pain during removal.'
        },
        {
          question: 'How long does recovery take after cyst or lump removal?',
          answer: 'Superficial RF cautery forms a tiny scab that sheds in 5 to 7 days. Micro-incisions heal within 7 to 10 days, after which any cosmetic sutures are removed.'
        },
        {
          question: 'Are skin lumps and bumps dangerous or cancerous?',
          answer: 'Over 95% of common skin lumps, cysts, and tags are completely benign. However, any rapidly growing, bleeding, or irregular lesion should always be evaluated by a senior dermatologist.'
        }
      ]}
      relatedLinks={[
        { title: "Skin Tags Removal", href: "/skin-tags", desc: "Radiofrequency snip removal for skin tags, moles & soft fibromas" },
        { title: "Keloids & Scar Reduction", href: "/keloids", desc: "Specialized flattening injections & laser scar remodeling" },
        { title: "Acne & Pimples Care", href: "/acne-pimples", desc: "Prevent deep cystic breakouts with targeted dermatological care" },
        { title: "Keratosis Pilaris Care", href: "/keratosis-pilaris", desc: "Keratolytic smoothing for rough, bumpy skin on arms & legs" },
        { title: "Tattoo Removal", href: "/tattoo-removal", desc: "Q-Switched laser tattoo clearance engineered for skin safety" },
        { title: "Chemical Peels", href: "/chemical-peels", desc: "Medical exfoliation peels for uniform skin texture & spot fading" }
      ]}
    />
  );
}
