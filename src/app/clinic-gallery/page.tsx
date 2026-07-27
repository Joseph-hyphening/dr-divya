import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Clinic Gallery & Tour | Dr. Divya Sharma Skin Clinic Bangalore',
  description: 'Take a virtual tour of Dr. Divya Sharma Skin & Hair Clinic in AECS Layout Whitefield Bangalore. US-FDA lasers, sterile procedure rooms.',
};

export default function ClinicGalleryPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Clinic Tour & Visual Showcase',
        title: 'Clinic Gallery & Infrastructure',
        hookSubtitle: 'Experience Our Modern, Sterile & Patient-Centric Dermatology Clinic in Whitefield',
        description: 'Explore our state-of-the-art treatment suites, US-FDA laser equipment, comfortable waiting areas, and sterilization standards.',
        treatmentName: 'Clinic Visit Reservation',
        keyBenefits: [
          'Sterile Private Treatment Rooms',
          'US-FDA Certified Laser Suites',
          'Calming & Ultra-Hygienic Ambiance',
          'Whitefield AECS Layout Location'
        ]
      }}
      overview={{
        title: 'Designed for Comfort & Infection Prevention',
        paragraphs: [
          'Dr. Divya Sharma’s clinic is built around patient privacy, comfort, and uncompromising hygiene.',
          'Every consultation and procedure room is equipped with HEPA air filtration, autoclaved medical instrumentation, and world-class laser platforms.'
        ],
        causesOrSymptomsTitle: 'Clinic Amenities',
        causesOrSymptoms: [
          'Private Consultation Suites',
          'Laser & Medi-Facial Procedure Rooms',
          'Trichology & Scalp Evaluation Station',
          'Dedicated Patient Parking in Whitefield'
        ]
      }}
      approach={{
        title: 'Our Hygiene Standards',
        description: 'Hospital-grade infection control.',
        steps: [
          {
            stepNumber: '01',
            title: 'Single-Use Consumables',
            description: 'Disposal needles, sheets, and tips for every procedure.'
          },
          {
            stepNumber: '02',
            title: 'Medical Autoclaving',
            description: 'Sterilization of reusable surgical instruments.'
          },
          {
            stepNumber: '03',
            title: 'Surface Disinfection',
            description: 'Sanitizing treatment beds between every patient.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Are walk-in clinic visits allowed?',
          answer: 'Yes, but prior booking via phone or website is recommended to guarantee zero wait time.'
        }
      ]}
    />
  );
}
