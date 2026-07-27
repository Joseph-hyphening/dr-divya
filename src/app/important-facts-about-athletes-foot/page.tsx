import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: "Athlete's Foot (Tinea Pedis) Facts & Treatment | Dr. Divya Sharma",
  description: 'Clinical treatment for foot fungal infections, peeling toe webbing & itching in Whitefield Bangalore by Dr. Divya Sharma.',
};

export default function AthletesFootPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Podiatric Fungal Dermatology',
        title: "Athlete's Foot (Tinea Pedis) Care",
        hookSubtitle: 'Stop Peeling Toe Webbing, Foot Itching & Fungal Odor Fast',
        description: 'Clear stubborn foot fungal infections, peeling skin between toes, and burning itching with prescription antifungal creams and podiatric hygiene.',
        treatmentName: "Athlete's Foot Consultation",
        keyBenefits: [
          'Fast Relief from Intense Toe Webbing Itch',
          'Eliminates Fungal Spores & Foot Odor',
          'Prevents Spread to Toenails (Onychomycosis)',
          'Prescription Antifungal Powder & Creams'
        ]
      }}
      overview={{
        title: 'Understanding Tinea Pedis (Athlete’s Foot)',
        paragraphs: [
          'Athlete’s foot is a dermatophyte fungal infection thriving in dark, warm, moist environments like sweaty shoes and socks or gym locker floors.',
          'Dr. Divya Sharma provides targeted topical and oral antifungal regimens to clear deep fungal hyphae and prevent recurrence.'
        ],
        causesOrSymptomsTitle: 'Common Symptoms',
        causesOrSymptoms: [
          'Peeling, white macerated skin between 4th and 5th toes',
          'Burning, itching, and scaling on soles of feet',
          'Fissures, painful cracks, and unpleasant foot odor'
        ]
      }}
      approach={{
        title: 'Our Foot Care Protocol',
        description: 'Complete fungal eradication.',
        steps: [
          {
            stepNumber: '01',
            title: 'KOH Scraping Diagnostic',
            description: 'Confirming fungal hyphae under microscope.'
          },
          {
            stepNumber: '02',
            title: 'Medical Antifungal Therapy',
            description: 'Prescribing Terbinafine / Amorolfine topical & oral care.'
          },
          {
            stepNumber: '03',
            title: 'Footwear & Sock Hygiene',
            description: 'Guiding anti-fungal powder application for shoes.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Can Athlete’s foot spread to toenails?',
          answer: 'Yes! Untreated skin fungus on the feet can easily invade toenail plates, causing thick, yellow, brittle nails (Onychomycosis).'
        }
      ]}
    />
  );
}
