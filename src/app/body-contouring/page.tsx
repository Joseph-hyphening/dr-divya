import React from 'react';
import { Metadata } from 'next';
import { TreatmentPageTemplate } from '@/components/templates/TreatmentPageTemplate';

export const metadata: Metadata = {
  title: 'Pro Shaper Body & Jawline Contouring Bangalore | Dr. Divya Sharma Clinic',
  description: 'Non-invasive RF body contouring: Pro Shaper for arms, submental jawline sculpting, and iFine under-eye tightening by Dr. Divya Sharma in Whitefield Bangalore.',
};

export default function BodyContouringPage() {
  return (
    <TreatmentPageTemplate
      hero={{
        badge: 'EndyMed 3DEEP Multi-Source Radiofrequency',
        title: 'Pro Shaper for Arms & Jawline Contouring',
        hookSubtitle: 'Non-Surgical Subcutaneous Fat Reduction, Skin Tightening & Precision Sculpting',
        description: 'Achieve firmer upper arms, sculpted jawlines, and lifted facial contours without surgery or downtime using patented EndyMed 3DEEP multi-source radiofrequency at Dr. Divya Sharma Clinic in Whitefield, Bangalore.',
        treatmentName: 'Pro Shaper Contouring Consultation',
        keyBenefits: [
          'Pro Shaper for Upper Arms Tone & Tightening',
          'Pro Shaper for Jawline & Double Chin Definition',
          'iFine Precision Periorbital Eye Rejuvenation',
          'Safe, Comfortable, Non-Invasive Thermal Science'
        ]
      }}
      overview={{
        title: 'Targeted Dermal & Subcutaneous Thermal Contouring',
        paragraphs: [
          'Stubborn fat pockets and skin laxity on the upper arms ("bat wings") and lower jawline ("double chin" or jowls) often resist diet and exercise alone as natural collagen degradation accelerates after age 25.',
          'The EndyMed Pro Shaper delivers multi-source phase-controlled radiofrequency directly into deep dermal and subcutaneous layers. By creating volumetric heating of up to 52°C within fat cells while keeping the skin surface comfortable and cool, it stimulates lipolysis (fat cell shrinkage) and triggers powerful neo-collagenesis to lift and firm loose tissue.'
        ],
        causesOrSymptomsTitle: 'Key Contouring Areas & Applications',
        causesOrSymptoms: [
          'Pro Shaper for Arms Contouring: Tightens loose, flabby upper arm skin and reduces circumferences.',
          'Pro Shaper for Jawline Contouring: Eliminates submental fullness (double chin) and defines the mandibular jawline.',
          'iFine for Under Eye Rejuvenation: Specialized delicate handpiece tightening crepey eyelids and smoothing crow’s feet.',
          'Post-weight loss or postpartum skin laxity on the abdomen and flanks.'
        ]
      }}
      approach={{
        title: 'Our Non-Surgical Sculpting Protocol',
        description: 'Pain-free, relaxing sessions calibrated to your tissue density.',
        steps: [
          {
            stepNumber: '01',
            title: 'Anatomical Assessment & Mapping',
            description: 'Marking contour lines, evaluating dermal thickness, and establishing baseline measurements.'
          },
          {
            stepNumber: '02',
            title: 'Targeted 3DEEP Radiofrequency Heating',
            description: 'Continuous circular handpiece passes gradually elevate tissue temperature to stimulate collagen remodeling and lipolysis.'
          },
          {
            stepNumber: '03',
            title: 'Collagen Maturation & Tightening',
            description: 'Fibroblasts continue producing new structural collagen and elastin over 6 to 12 weeks for progressive lifting.'
          }
        ]
      }}
      faqs={[
        {
          question: 'Is Pro Shaper treatment painful?',
          answer: 'Not at all. Patients experience a warm, soothing sensation similar to a hot stone massage. Continuous real-time skin contact sensors prevent overheating.'
        },
        {
          question: 'How many Pro Shaper sessions are needed for arms or jawline?',
          answer: 'A standard protocol consists of 4 to 6 sessions scheduled 1 to 2 weeks apart. Visible contour refinement typically begins around the third session and continues improving for months.'
        },
        {
          question: 'What is iFine for under eye rejuvenation?',
          answer: 'iFine is a specialized micro-handpiece designed exclusively for the delicate periorbital zone around the eyes. It safely tightens loose skin under the eyes, reduces dark circle puffiness, and softens fine wrinkles.'
        }
      ]}
      relatedLinks={[
        { title: 'Laser Hair Reduction', href: '/unwanted-hair', desc: 'Painless US-FDA body hair reduction' },
        { title: 'iFine Under Eye Smoothing', href: '/dark-circles', desc: 'Periorbital RF tightening for dark circles' },
        { title: 'Micro Needling RF (MNRF)', href: '/scar-removal', desc: 'EndyMed 3DEEP fractional scar remodeling' },
        { title: 'Aesthetic Laser Suite', href: '/aesthetics-skin-care', desc: 'Complete cosmetic dermatology and facial glow procedures' }
      ]}
    />
  );
}
