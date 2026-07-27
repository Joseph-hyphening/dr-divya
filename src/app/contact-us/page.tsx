import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Contact Us | Dr. Divya Sharma Skin & Hair Clinic Whitefield',
  description: 'Get in touch with Dr. Divya Sharma Skin Clinic in AECS Layout, Whitefield, Bangalore. Phone: +91 96206 38388. Directions, timing, and clinic inquiries.',
};

export default function ContactUsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Direct Clinic Connection',
        title: 'Contact Dr. Divya Sharma’s Clinic',
        hookSubtitle: 'We Are Here to Answer Your Questions & Help You Achieve Healthy Skin',
        description: 'Have a question about a treatment, appointment availability, or clinic location? Reach out to our friendly clinic desk today.',
        treatmentName: 'Clinic Inquiry',
        keyBenefits: [
          'Immediate Phone & WhatsApp Support',
          'AECS Layout, Whitefield Location',
          'Friendly Care Coordinators',
          'Fast Online Consultation Booking'
        ]
      }}
      overview={{
        title: 'Clinic Location & Contact Details',
        paragraphs: [
          'Dr. Divya Sharma Skin & Hair Clinic is conveniently located in AECS Layout, Whitefield, easily accessible from Marathahalli, ITPL, Hoodi, and Varthur.',
          'Our desk is open Monday to Saturday for appointments, laser procedures, follow-up visits, and medication inquiries.',
          'Call us directly at +91 96206 38388 or drop an email at info@drdivyasharma.com.'
        ],
        causesOrSymptomsTitle: 'Clinic Hours & Info',
        causesOrSymptoms: [
          'Address: AECS Layout, Whitefield, Bengaluru, KA 560037',
          'Phone: +91 96206 38388',
          'Email: info@drdivyasharma.com',
          'Hours: Monday – Saturday: 10:00 AM – 7:00 PM (Sunday Closed)'
        ]
      }}
      approach={{
        title: 'How We Assist Our Patients',
        description: 'Prompt communication every step of the way.',
        steps: [
          {
            stepNumber: '01',
            title: 'Call Desk Assistance',
            description: 'Direct phone line answered by trained care staff for quick slot confirmation.'
          },
          {
            stepNumber: '02',
            title: 'WhatsApp Directions & Reminders',
            description: 'Get Google Maps location and appointment reminder right on your phone.'
          },
          {
            stepNumber: '03',
            title: 'Post-Procedure Support',
            description: 'Dedicated follow-up line for queries on medication routines and skin healing.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the best way to reach the clinic from ITPL or Marathahalli?',
          answer: 'The clinic is located in AECS Layout Block A, just a 10-minute drive from ITPL Main Road and Marathahalli Bridge.'
        },
        {
          question: 'Can I drop in without an appointment?',
          answer: 'While walk-ins are accepted based on doctor availability, prior booking is strongly advised to prevent waiting.'
        }
      ]}
    />
  );
}
