import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Laser Tattoo Removal Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'Safe Q-Switched Nd:YAG laser tattoo removal in Whitefield Bangalore. Fade black, dark, and colored tattoos with minimal scarring under expert dermatologist supervision.',
};

export default function TattooRemovalPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Q-Switched Laser Ink Clearance',
        title: 'Safe Laser Tattoo Removal',
        hookSubtitle: 'Break Down Tattoo Ink Pigment Safely Without Scarring Surrounding Skin',
        description: 'Remove unwanted black, blue, or colored ink tattoos cleanly using high-peak Q-Switched Nd:YAG laser technology calibrated specifically for Indian skin safety.',
        treatmentName: 'Laser Tattoo Removal Consultation',
        keyBenefits: [
          'Fades Dark & Colored Tattoo Ink',
          'Preserves Surrounding Normal Skin',
          'Minimal Risk of Hyperpigmentation',
          'Supervised by Senior Dermatologist'
        ]
      }}
      overview={{
        title: 'The Science of Photo-Acoustic Ink Fragmentation',
        paragraphs: [
          'Tattooing involves injecting insoluble metal salts and organic pigment particles deep into the dermal layer of the skin. Because these ink aggregates are significantly larger than normal white blood cells (macrophages), the bodys immune system cannot engulf or clear them naturally, causing the design to remain permanent.',
          'Advanced Q-Switched Nd:YAG laser technology operates by delivering ultra-short (nanosecond) bursts of high-intensity laser energy directly to the targeted ink deposits. Through a physical phenomenon known as the photomechanical or photo-acoustic effect, the laser light is selectively absorbed by the dark ink pigment without harming surrounding collagen fibers or epidermal cells.',
          'This sudden surge of energy snaps the massive ink particles into microscopic fragments. Over the following 6 to 8 weeks, your bodys lymphatic system progressively carries away these tiny shattered ink fragments through natural metabolic pathways. At Dr. Divya Sharma clinic, we customize laser wavelength (1064nm for dark inks, 532nm for red/warm pigments) to achieve optimal fading while preventing post-inflammatory hyperpigmentation.'
        ],
        causesOrSymptomsTitle: 'Key Clinical Variables in Ink Removal',
        causesOrSymptoms: [
          'Tattoo Ink Composition & Density (Professional dense ink vs amateur shallow ink)',
          'Pigment Color Spectrum (Black, dark blue & dark red fade fastest)',
          'Depth of Ink Deposition & Layering (Dermal depth & cover-up tattoos)',
          'Anatomical Location (Distal limbs take longer than chest/neck due to blood circulation)',
          'Skin Phototype (Fitzpatrick Types IV-VI require customized pulse duration for safety)',
          'Presence of Prior Scarring or Tissue Fibrosis from tattooing needle trauma'
        ]
      }}
      approach={{
        title: 'Our Phased Laser Clearance Protocol',
        description: 'A dermatologically supervised, multi-session removal protocol engineered for max ink removal with zero thermal scarring.',
        steps: [
          {
            stepNumber: '01',
            title: 'Dermoscopic Mapping & Numbing Preparation',
            description: 'Assessing ink depth and color matrix followed by 45 minutes of medical-grade topical anesthesia application for maximum patient comfort.'
          },
          {
            stepNumber: '02',
            title: 'Precision Q-Switched Laser Pulses',
            description: 'Administering calibrated nanosecond laser beams directly over the tattoo boundary to shatter localized ink clusters.'
          },
          {
            stepNumber: '03',
            title: 'Post-Laser Soothing & Lymphatic Recovery',
            description: 'Application of antibiotic healing ointment, cooling ice compresses, and strict barrier guidelines to ensure blister-free recovery.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How many laser sessions will I need to clear my tattoo?',
          answer: 'Most professional tattoos require between 6 to 10 sessions spaced 6 to 8 weeks apart for complete or near-complete fading. Amateur tattoos often clear in 4 to 6 sessions depending on ink depth and color density.'
        },
        {
          question: 'Is laser tattoo removal painful?',
          answer: 'The sensation is often described as similar to a rubber band snapping against the skin. We apply potent prescription topical numbing cream prior to every procedure to minimize discomfort.'
        },
        {
          question: 'Will laser tattoo removal leave a permanent scar?',
          answer: 'When performed by a qualified dermatologist using proper Q-Switched Nd:YAG laser parameters, the risk of scarring is extremely low because energy targets only ink particles, keeping surrounding skin intact.'
        },
        {
          question: 'Why do we need 6 to 8 weeks between laser sessions?',
          answer: 'The laser does not wash away the ink during the treatment session; it breaks ink into microscopic dust. Your lymphatic system requires several weeks to transport these fragments away before the next layer can be targeted.'
        },
        {
          question: 'Can colored tattoos (green, red, yellow) be removed?',
          answer: 'Black and dark blue pigments respond fastest to 1064nm wavelength. Red, brown, and orange pigments respond well to 532nm wavelength. Green and bright blue inks may require specialized laser wavelengths for optimal clearance.'
        },
        {
          question: 'What aftercare is required post-laser session?',
          answer: 'Keep the area clean, dry, and covered with prescribed ointment for 3-5 days. Avoid direct sun exposure, swimming, picking at mild scabs, and hot saunas during the initial recovery phase.'
        }
      ]}
      relatedLinks={[
        { title: "Laser Toning", href: "/laser-toning", desc: "Q-Switched laser treatment for unwanted skin pigmentation and dark spots" },
        { title: "Hollywood Carbon Peel", href: "/hollywood-peel", desc: "Gentle laser facial for skin texture refinement & pore tightening" },
        { title: "Keloids & Scar Removal", href: "/keloids", desc: "Intralesional flattening and medical protocols for elevated scar tissue" },
        { title: "Dark Spot Reduction", href: "/dark-spot-and-pigment-reduction", desc: "Clinical fading solutions for localized dark spots & post-laser marks" },
        { title: "Skin Resurfacing", href: "/skin-resurfacing-texture", desc: "Advanced collagen rebuilding for smooth skin texture after tattoo clearance" },
        { title: "Melasma Care", href: "/melasma", desc: "Comprehensive clinical management for hormonal skin pigmentation" }
      ]}
    />
  );
}
