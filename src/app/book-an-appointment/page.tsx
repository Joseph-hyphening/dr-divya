import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Book an Appointment | Dr. Divya Sharma Dermatologist Bangalore',
  description: 'Book your consultation online with Dr. Divya Sharma, Gold Medalist Dermatologist in Whitefield, Bangalore for acne, hair loss, lasers, and skin treatments.',
};

export default function BookAppointmentPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Instant Online Slot Reservation',
        title: 'Book Your Consultation with Dr. Divya Sharma',
        hookSubtitle: 'Take the First Step Towards Healthy, Radiant Skin & Hair Today',
        description: 'Schedule a priority in-clinic or online consultation with Gold Medalist Dermatologist Dr. Divya Sharma at AECS Layout, Whitefield.',
        treatmentName: 'General Skin & Hair Consultation',
        keyBenefits: [
          'Direct Access to Gold Medalist Doctor',
          'Flexible Date & Time Slots',
          'Zero Long Waiting Times',
          'Comprehensive Diagnosis & Routine'
        ]
      }}
      overview={{
        title: 'What to Expect During Your Appointment',
        paragraphs: [
          'Your initial consultation with Dr. Divya Sharma includes a thorough examination of your skin barrier, hair scalp, or active concerns.',
          'Dr. Divya will review your medical history, current skincare regimen, and dietary factors to create a personalized, evidence-based treatment regimen.',
          'Whether you are seeking treatment for persistent acne, hair fall, pigmentation, or pediatric skin issues, expect clear, transparent guidance without unnecessary procedures.'
        ],
        causesOrSymptomsTitle: 'Appointment Checklist',
        causesOrSymptoms: [
          'Bring any previous prescription receipts or blood test reports if available.',
          'Note down active skincare or cosmetic products currently in use.',
          'Arrive 10 minutes prior to your scheduled time for smooth check-in.'
        ]
      }}
      approach={{
        title: 'How Consultation Booking Works',
        description: 'Fast 3-step process to secure your clinic visit.',
        steps: [
          {
            stepNumber: '01',
            title: 'Fill Appointment Details',
            description: 'Provide your contact info and select your primary skin or hair concern.'
          },
          {
            stepNumber: '02',
            title: 'Slot Confirmation Call',
            description: 'Our care manager contacts you within 2 hours to confirm your exact timing.'
          },
          {
            stepNumber: '03',
            title: 'Clinic Visit & Consultation',
            description: 'Meet Dr. Divya Sharma at Whitefield clinic for your in-depth assessment.'
          }
        ]
      }}
      faqs={[
        {
          question: 'What is the consultation fee?',
          answer: 'The consultation fee covers a complete physical evaluation, dermoscopy check if needed, and a personalized prescription plan. Call +91 96206 38388 for current desk details.'
        },
        {
          question: 'Can I reschedule my appointment?',
          answer: 'Yes, you can reschedule by calling or messaging our reception desk at least 4 hours in advance.'
        }
      ]}
    />
  );
}
