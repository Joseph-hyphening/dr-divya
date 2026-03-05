'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';

export const AboutSection = () => {
  const data = [
    {
      title: "2008",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-8">
            Graduated as a <strong>Gold Medalist</strong> in MBBS from Rajiv Gandhi University of Health Sciences (RGUHS). This foundation set the stage for a career defined by academic excellence and clinical precision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1523240715630-991f2e8113e6?q=80&w=2070&auto=format&fit=crop"
              alt="Medical Graduation"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
              alt="Clinical Excellence"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2012",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-8">
            Completed Master of Medicine (MD) in Dermatology at a premier Skin Institute. Developed deep expertise in diagnosing and treating complex skin conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              alt="Dermatology Research"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop"
              alt="Skin Care Mastery"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-8">
            Awarded Fellowship in Lasers & Aesthetic Surgery. Mastered the latest technologies to provide high-end, transformative aesthetic results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
              alt="Laser Technology"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
              alt="Aesthetic Surgery"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-8">
            Founded <strong>Dr. Divya Skin & Hair Solutions</strong> in Whitefield, Bangalore. A center dedicated to combining clinical excellence with personalized care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Clinic Entrance"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
              alt="Patient Care"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-8">
            Recognized as the <strong>Best Dermatologist</strong> by the Bangalore Clinical Society. A testament to a decade of dedication to patient well-being and clinical innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2036&auto=format&fit=crop"
              alt="Medical Award"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop"
              alt="Success Story"
              width={500}
              height={300}
              className="rounded-lg object-cover h-40 md:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          The Journey of Excellence
        </h2>
        <p className="max-w-2xl text-foreground/60 mt-4 text-lg">
          Tracing the milestones of a career dedicated to advanced dermatology and patient care.
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
};
