import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Patient Testimonials & Reviews | Dr. Divya Sharma Skin Clinic',
  description: 'Read real patient stories, experiences, and reviews for acne, laser toning, chemical peels, and hair loss treatments at Dr. Divya Sharma Clinic Bangalore.',
};

export default function TestimonialsPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: '1,500+ 5-Star Reviews',
        title: 'Patient Stories & Testimonials',
        hookSubtitle: 'Real Transformations, Honest Feedback & Life-Changing Skin Confidence',
        description: 'Read how Dr. Divya Sharma’s gold-standard dermatology care has helped thousands of patients overcome skin and hair challenges.',
        treatmentName: 'Patient Experience & Consultation',
        keyBenefits: [
          '4.9 Star Google & Practo Rating',
          'Verified Patient Feedback',
          'Before & After Transformations',
          'Ethical & Compassionate Care'
        ]
      }}
      overview={{
        title: 'Why Patients Trust Dr. Divya Sharma',
        paragraphs: [
          'From stubborn acne scar reduction to life-changing pediatric rash relief, our patients appreciate Dr. Divya’s warm bedside manner and thorough clinical diagnosis.',
          'Every review reflects our pledge to ethical treatment plans, state-of-the-art US-FDA lasers, and long-term skin health.'
        ],
        causesOrSymptomsTitle: 'Featured Transformations',
        causesOrSymptoms: [
          'Severe Hormonal Acne cleared in 3 months with zero scarring.',
          'Chronic Hair Loss reversed with customized Growth Factor Therapy.',
          'Stubborn Melasma and Dark Spots faded with laser toning.',
          'Pediatric Eczema relieved with gentle barrier repair therapy.'
        ]
      }}
      approach={{
        title: 'Our Core Care Commitments',
        description: 'What makes every patient experience special at our Whitefield clinic.',
        steps: [
          {
            stepNumber: '01',
            title: 'Empathetic Listening',
            description: 'We listen to your concerns without rush, ensuring you feel heard and understood.'
          },
          {
            stepNumber: '02',
            title: 'Honest Expectations',
            description: 'No false promises. We give accurate timelines on treatment milestones.'
          },
          {
            stepNumber: '03',
            title: 'Holistic Support',
            description: 'Detailed prescription charts, diet advice, and skin regimen aftercare.'
          }
        ]
      }}
      faqs={[
        {
          question: 'How do I share my treatment feedback?',
          answer: 'We encourage patients to leave their review on Google, Practo, or submit feedback via our clinic care desk.'
        }
      ]}
    />
  );
}
