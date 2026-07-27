import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Light-Based Therapies & IPL Bangalore | Dr. Divya Sharma Skin Clinic',
  description: 'IPL and broad-spectrum light therapies in Whitefield Bangalore for vascular redness, rosacea, pigment spots, and skin rejuvenation.',
};

export default function LightBasedTherapiesPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Broad-Spectrum Photorejuvenation',
        title: 'Light-Based Therapies & Intense Pulsed Light (IPL)',
        hookSubtitle: 'Clear Facial Redness, Sun Damage & Vascular Spots with Precision Light Pulses',
        description: 'Target surface blood vessels, persistent rosacea redness, and sun spots simultaneously using non-invasive broad-spectrum pulsed light technology.',
        treatmentName: 'Light-Based Therapy Consultation',
        keyBenefits: [
          'Reduces Facial Flush & Rosacea',
          'Targets Broken Capillaries & Sun Damage',
          'Improves Overall Skin Clarity',
          'Minimal Recovery Downtime'
        ]
      }}
      overview={{
        title: 'Photorejuvenation for Clearer Skin',
        paragraphs: [
          'Light-based therapies deliver filtered light pulses that selectively target hemoglobin in visible blood vessels and melanin in sun spots.',
          'Under Dr. Divya Sharma’s supervision, light energy is customized to safely tone down facial redness while stimulating collagen for firmer skin.'
        ],
        causesOrSymptomsTitle: 'Key Indications',
        causesOrSymptoms: [
          'Facial Rosacea & Diffuse Redness',
          'Spider Veins & Broken Capillaries',
          'Sun-Induced Freckles & Age Spots',
          'Photo-aged Skin Texture'
        ]
      }}
      approach={{
        title: 'Our IPL Treatment Process',
        description: 'Comfortable light sessions with active cooling.',
        steps: [
          {
            stepNumber: '01',
            title: 'Cooling Gel Application',
            description: 'Protecting the epidermis while enhancing light delivery.'
          },
          {
            stepNumber: '02',
            title: 'Precision Light Pulses',
            description: 'Delivering targeted light flashes across affected areas.'
          },
          {
            stepNumber: '03',
            title: 'Soothe & Protect',
            description: 'Applying anti-inflammatory serum and zinc sunscreen.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is IPL safe for sensitive skin?',
          answer: 'Yes, parameters are strictly customized for sensitive skin types to treat redness without causing irritation.'
        }
      ]}
    />
  );
}
