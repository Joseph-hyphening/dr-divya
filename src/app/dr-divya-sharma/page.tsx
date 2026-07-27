import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Dr. Divya Sharma | Gold Medalist Dermatologist in Bangalore',
  description: 'Learn about Dr. Divya Sharma, MBBS (Gold Medalist), MD (Skin), Senior Consultant Dermatologist & Hair Transplant Specialist in Whitefield, Bangalore.',
};

export default function DrDivyaProfilePage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'Award-Winning Senior Consultant Dermatologist',
        title: 'Dr. Divya Sharma (Gold Medalist, MD)',
        hookSubtitle: '12+ Years of Clinical Mastery, Compassionate Patient Care & Advanced Aesthetic Artistry',
        description: 'Dr. Divya Sharma is one of Bangalore’s most trusted dermatologists, celebrated for her holistic diagnosis, evidence-based therapies, and ethical patient-first care.',
        treatmentName: 'Dermatologist Consultation with Dr. Divya',
        keyBenefits: [
          'MBBS Gold Medalist & MD Skin',
          'US-FDA Approved Laser Technologies',
          'Customized Medical & Aesthetic Care',
          '15,000+ Satisfied Patient Smiles'
        ]
      }}
      overview={{
        title: 'Meet Bangalore’s Premier Skin & Hair Expert',
        paragraphs: [
          'Dr. Divya Sharma graduated with top academic honors (Gold Medal) in MBBS and pursued her MD in Dermatology, Venereology, and Leprosy. With over a decade of clinical experience, she specializes in acne management, laser resurfacing, hair restoration, pediatric skin care, and anti-aging therapies.',
          'Her philosophy centers around accurate diagnosis before prescribing any treatment. Rather than masking symptoms, Dr. Divya focuses on treating root causes—whether hormonal, genetic, lifestyle-driven, or environmental.',
          'At her state-of-the-art clinic in Whitefield, Bangalore, patients receive individual attention, transparent guidance, and world-class care using globally certified protocols.'
        ],
        causesOrSymptomsTitle: 'Clinical Expertise & Specialties',
        causesOrSymptoms: [
          'Laser Acne Scar Resurfacing & Pigmentation Control',
          'Hair Loss Evaluation, PRP & Growth Factors Therapy',
          'Pediatric & Newborn Skin Care (Diaper rash, Eczema, Cradle cap)',
          'Anti-Aging Rejuvenation, Botox & Filler Enhancements',
          'Chronic Medical Dermatology (Psoriasis, Vitiligo, Urticaria)'
        ]
      }}
      approach={{
        title: 'Dr. Divya’s 3-Step Consultation Philosophy',
        description: 'A structured clinical process to ensure long-term skin health and natural results.',
        steps: [
          {
            stepNumber: '01',
            title: 'In-Depth Diagnostic Assessment',
            description: 'Comprehensive analysis of skin barrier, medical history, lifestyle factors, and underlying hormonal triggers.'
          },
          {
            stepNumber: '02',
            title: 'Tailored Evidence-Based Plan',
            description: 'Combination of FDA-approved technology, clinical therapeutics, and personalized skincare routines.'
          },
          {
            stepNumber: '03',
            title: 'Progress Tracking & Maintenance',
            description: 'Regular follow-ups to monitor skin healing, refine maintenance protocols, and safeguard results.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Where is Dr. Divya Sharma’s clinic located in Bangalore?',
          answer: 'Dr. Divya Sharma’s clinic is located at AECS Layout, Whitefield, Bengaluru, Karnataka 560037.'
        },
        {
          question: 'How can I book a direct consultation with Dr. Divya Sharma?',
          answer: 'You can book an appointment online using the form on this page or call our clinic desk directly at +91 96206 38388.'
        },
        {
          question: 'Does Dr. Divya offer virtual / online skin consultations?',
          answer: 'Yes, online consultations are available for non-emergency skin and hair concerns for patients across India and internationally.'
        }
      ]}
    />
  );
}
