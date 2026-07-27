import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'About Our Clinic | Dr. Divya Skin & Hair Center Whitefield Bangalore',
  description: 'Explore Dr. Divya Sharma’s world-class dermatology clinic in Whitefield, Bangalore. US-FDA approved laser technology, stringent hygiene, and compassionate care.',
};

export default function AboutClinicPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'State-of-the-Art Clinical Infrastructure',
        title: 'World-Class Skin & Hair Care in Bangalore',
        hookSubtitle: 'Equipped with US-FDA Approved Technology, Sterile Treatment Rooms & Patient-Centric Design',
        description: 'Our clinic in AECS Layout, Whitefield is designed to deliver a calming, ultra-hygienic environment where modern laser science meets clinical dermatology.',
        treatmentName: 'Clinic Visit & Consultation',
        keyBenefits: [
          'US-FDA Certified Medical Lasers',
          'Strict Sterilization Protocols',
          'Comfortable Private Suites',
          'Convenient Whitefield Location'
        ]
      }}
      overview={{
        title: 'Excellence in Medical & Aesthetic Dermatology',
        paragraphs: [
          'Founded with a commitment to gold-standard dermatological care, Dr. Divya Sharma’s clinic bridges the gap between medical skin health and aesthetic enhancement.',
          'We feature world-leading technologies including Q-Switched Nd:YAG lasers, Fractional CO2 resurfacing, LED phototherapy, and RF microneedling to deliver safe, effective results.',
          'Every procedure is performed or strictly supervised by Dr. Divya Sharma to ensure zero compromise on safety, comfort, and efficacy.'
        ],
        causesOrSymptomsTitle: 'Why Patients Choose Our Clinic',
        causesOrSymptoms: [
          'Ethical, No-Upsell Consultations',
          'US-FDA Approved Equipment Only',
          'Zero-Wait Appointment Scheduling',
          'Customized Post-Procedure Aftercare Support'
        ]
      }}
      approach={{
        title: 'Our Clinical Quality Standards',
        description: 'We adhere to global standards of safety, medical hygiene, and patient privacy.',
        steps: [
          {
            stepNumber: '01',
            title: 'US-FDA Tech Standards',
            description: 'All lasers, chemical peels, and energy devices carry international safety certifications.'
          },
          {
            stepNumber: '02',
            title: 'Medical Sterilization',
            description: 'Autoclaved instruments and single-use consumables for 100% infection prevention.'
          },
          {
            stepNumber: '03',
            title: 'Patient First Approach',
            description: 'Detailed counseling before any procedure with clear expectations on timeline and care.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What are the clinic working hours?',
          answer: 'The clinic operates Monday through Saturday, from 10:00 AM to 7:00 PM. Appointments are recommended for minimal wait times.'
        },
        {
          question: 'Is parking available at the Whitefield clinic?',
          answer: 'Yes, dedicated parking spaces are available for patients visiting our clinic in AECS Layout, Whitefield.'
        }
      ]}
    />
  );
}
