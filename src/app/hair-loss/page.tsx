import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Hair Loss & Thinning Treatment Bangalore | Dr. Divya Sharma Skin & Hair Clinic',
  description: 'Evidence-based hair loss treatments in Whitefield Bangalore. Growth Factor Concentrate (GFC), dermoscopy evaluation, and customized hair regrowth by Dr. Divya Sharma.',
};

export default function HairLossPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Specialized Trichology & Hair Regrowth',
        title: 'Clinical Hair Loss & Thinning Therapy',
        hookSubtitle: 'Arrest Hair Fall, Reinvigorate Miniaturized Follicles & Restore Dense Hair Growth',
        description: 'Advanced dermatological diagnosis and biological Growth Factor Concentrate (GFC) therapy for androgenetic alopecia, telogen effluvium, and scalp thinning.',
        treatmentName: 'Hair Loss Consultation',
        keyBenefits: [
          'Digital Trichoscopy Scalp Analysis',
          'Autologous Growth Factor Concentrate (GFC)',
          'Root-Cause Nutritional & Hormonal Evaluation',
          'Dermatologist Supervised Medical Prescriptions'
        ]
      }}
      overview={{
        title: 'Understanding Hair Loss Biology & Follicle Miniaturization',
        paragraphs: [
          'Hair growth is a dynamic biological cycle consisting of three distinct phases: Anagen (active growth phase lasting 2 to 6 years), Catagen (transitional regression phase lasting 2 to 3 weeks), and Telogen (resting shedding phase lasting 3 to 4 months). On a healthy scalp, roughly 85% to 90% of hair follicles are in the anagen phase at any given time.',
          'When hair loss occurs, this delicate cycle is disrupted. In Androgenetic Alopecia (pattern baldness), dihydrotestosterone (DHT) binds to androgen receptors on scalp hair follicles, shortening the anagen phase and triggering progressive follicle miniaturization—causing thick terminal hair to shrink into fine, wispy vellus hair. In Telogen Effluvium, acute stress, fever, nutritional deficiencies, or hormonal shifts trigger premature mass shifting of hair follicles from growth into shed mode.',
          'At Dr. Divya Sharma clinic in Whitefield, Bangalore, we perform non-invasive digital trichoscopy to quantify hair density, follicle diameter, and scalp vascularity. We utilize next-generation autologous Growth Factor Concentrate (GFC) therapy—harvesting highly concentrated activated growth factors (PDGF, VEGF, EGF, IGF-1) from your blood plasma—to reactivate dormant miniaturized follicles and stimulate robust hair regrowth.'
        ],
        causesOrSymptomsTitle: 'Common Hair Loss Indications & Causes',
        causesOrSymptoms: [
          'Widening hair parting & visible scalp exposure along the crown',
          'Excessive daily hair shedding (>100 strands/day) during washing or brushing',
          'Receding bitemporal hairline & thinning temple hair (Pattern Alopecia)',
          'Post-pregnancy, post-fever, or stress-induced acute Telogen Effluvium',
          'Nutritional deficiencies (Low Ferritin, Vitamin D, Zinc, B12) & thyroid disorders',
          'Scalp inflammation, excess sebum accumulation & severe dandruff flakes'
        ]
      }}
      approach={{
        title: 'Our Phased Hair Regrowth Strategy',
        description: 'A 3-stage clinical strategy designed to stop active hair shedding and reactivate dormant scalp hair follicles.',
        steps: [
          {
            stepNumber: '01',
            title: 'Trichoscopic & Metabolic Evaluation',
            description: 'Magnified scalp trichoscopy to evaluate follicle unit density combined with comprehensive blood biomarker testing.'
          },
          {
            stepNumber: '02',
            title: 'Targeted GFC & Regenerative Therapy',
            description: 'Administering acellular Growth Factor Concentrate directly into micro-vascular dermal layers around hair roots.'
          },
          {
            stepNumber: '03',
            title: 'Medical Maintenance & Scalp Nutrition',
            description: 'Prescribing topical hair peptides, customized Minoxidil formulations, and essential micronutrient supplements.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is GFC therapy and how does it differ from traditional PRP?',
          answer: 'Growth Factor Concentrate (GFC) is a highly purified, acellular preparation derived from your blood. Unlike standard PRP (which contains red and white blood cells that can cause inflammation), GFC extracts only pure, high-concentration growth factors, resulting in superior regrowth with virtually no pain or swelling.'
        },
        {
          question: 'How many GFC sessions are required to see visible hair growth?',
          answer: 'A standard clinical protocol involves 4 to 6 sessions spaced 4 weeks apart. Most patients observe significant reduction in hair shedding by session 2, with new baby hair regrowth visible by session 3 to 4.'
        },
        {
          question: 'Is hair loss treatment permanent?',
          answer: 'For Telogen Effluvium (stress/deficiency hair fall), once the root cause is resolved, hair regrowth is permanent. For genetic Androgenetic Alopecia, ongoing maintenance is necessary to keep DHT from miniaturizing follicles.'
        },
        {
          question: 'Can Minoxidil cause an initial increase in hair shedding?',
          answer: 'Yes. Minoxidil pushes weak, resting telogen hair strands out to make room for thick, healthy anagen strands. This initial shedding lasts 2 to 4 weeks and is a positive sign that the medication is working.'
        },
        {
          question: 'Are there any side effects with GFC hair treatment?',
          answer: 'Because GFC is derived entirely from your own blood plasma and processed in a sterile acellular tube, there is zero risk of allergic reaction, rejection, or systemic side effects.'
        },
        {
          question: 'Does dandruff cause permanent hair loss?',
          answer: 'Severe scalp dandruff and fungal yeast overgrowth trigger localized scalp inflammation and itching. Rubbing and inflamed scalp skin can weaken hair anchors, causing temporary shedding.'
        }
      ]}
      relatedLinks={[
        { title: "Male Pattern Hair Loss", href: "/hair-loss-in-men", desc: "Targeted regrowth protocols for receding hairline & crown thinning" },
        { title: "Female Hair Shedding", href: "/hair-fall-in-female", desc: "Specialized care for hormonal, PCOS, and postpartum female hair loss" },
        { title: "Scalp Dandruff Relief", href: "/an-overview-of-dandruff", desc: "Antifungal scalp rehabilitation and inflammation control" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Laser facial rejuvenation for radiant skin & pore refinement" },
        { title: "Laser Toning", href: "/laser-toning", desc: "Targeted laser light to clear skin discoloration and dark spots" },
        { title: "Melasma Care", href: "/melasma", desc: "Evidence-based clinical protocols for stubborn facial pigmentation" }
      ]}
    />
  );
}
