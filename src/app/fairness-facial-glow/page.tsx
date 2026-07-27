import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Facial Glow & Skin Radiance Treatments | Dr. Divya Sharma Bangalore',
  description: 'Dermatologist-formulated skin brightening, glow facials, hydra-peels, and laser radiance treatments in Whitefield Bangalore.',
};

export default function FacialGlowPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Medical Skin Radiance & Hydration',
        title: 'Facial Glow & Skin Brightening',
        hookSubtitle: 'Revitalize Dull, Tired Skin with Hydra-Infusion, Oxy-Glow & Medical Medi-Facials',
        description: 'Ditch superficial salon facials. Experience physician-formulated medical skin radiance therapies designed to deeply hydrate, exfoliate, and brighten your natural skin complexion.',
        treatmentName: 'Facial Glow Treatment Consultation',
        keyBenefits: [
          'Deep Pore Hydration & Oxygenation',
          'Instant Glow for Weddings & Events',
          'Removes Tanned Skin & Dead Cell Buildup',
          'Safe for Sensitive Skin Types'
        ]
      }}
      overview={{
        title: 'Beyond Standard Salon Facials',
        paragraphs: [
          'Dullness occurs when environmental pollution, UV rays, and dehydration cause dead skin cells to accumulate on the epidermis.',
          'Dr. Divya Sharma’s medical medi-facials infuse hyaluronic acid, Vitamin C antioxidants, and peptides directly into the skin using non-invasive electroporation and micro-dermabrasion.'
        ],
        causesOrSymptomsTitle: 'Popular Glow Treatments',
        causesOrSymptoms: [
          'Hydra-Infusion Glow Medi-Facial',
          'Oxy-Boost Brightening Therapy',
          'Party Glow Carbon Laser Peel',
          'Vitamin C Antioxidant Radiance Peel'
        ]
      }}
      approach={{
        title: '3-Step Medi-Facial Routine',
        description: 'Luminous results in a single 60-minute relaxing session.',
        steps: [
          {
            stepNumber: '01',
            title: 'Hydro-Exfoliation',
            description: 'Vacuuming pores while gently exfoliating dead surface skin.'
          },
          {
            stepNumber: '02',
            title: 'Antioxidant Serum Infusion',
            description: 'Infusing Vitamin C, Glutathione & Hyaluronic boosters.'
          },
          {
            stepNumber: '03',
            title: 'Cryo-Seal & Glow Mask',
            description: 'Locking in nutrients with cryo-soothing therapy for dewy finish.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How long before an event should I get a Medi-Facial?',
          answer: 'We recommend scheduling your Medi-Facial 2 to 3 days prior to your special event for peak luminous skin radiance.'
        }
      ]}
    />
  );
}
