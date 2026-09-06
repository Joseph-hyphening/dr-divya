'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronRight, SplitSquareVertical, Sparkles } from 'lucide-react';
import { getConditions, ConditionData } from '@/lib/cms-store';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

const categories = ['All', 'Acne & Scars', 'Hair Restoration', 'Anti-Aging', 'Clinical Derm'];

const testimonials = [
  {
    name: 'Ananya Rao',
    age: 28,
    treatment: 'Acne & Scars',
    condition: 'Cystic Acne & Scarring',
    conditionSlug: 'acne-pimples',
    rating: 5,
    text: "I struggled with severe cystic acne for over six years and lost all confidence. Dr. Divya didn't just give me topical creams; she designed a customized treatment plan combining US FDA-approved laser therapies. My skin is completely clear now, and the deep scars have faded by 90%. She is truly a lifesaver!",
    period: '3 months treatment plan',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Rohan Malhotra',
    age: 34,
    treatment: 'Hair Restoration',
    condition: 'Male Pattern Baldness',
    conditionSlug: 'hair-loss',
    rating: 5,
    text: "After noticed significant thinning on my crown, I consulted Dr. Divya. Her approach to hair restoration is highly scientific. We did a combination of growth factor therapy and targeted medical care. The density change in 4 months has been incredible. There's no guesswork—everything is clinically backed.",
    period: '4 months treatment plan',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Meera Krishnan',
    age: 45,
    treatment: 'Anti-Aging',
    condition: 'Fine Lines & Volume Loss',
    conditionSlug: 'melasma',
    rating: 5,
    text: "I wanted a natural rejuvenation without looking 'frozen.' Dr. Divya was incredibly meticulous. She explained the science of aging and recommended a subtle, non-surgical lifting treatment. The results are exceptionally natural—my friends tell me I look refreshed and radiant, but nobody can tell I had a treatment!",
    period: 'Single session & maintenance',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Dr. Sandeep Kumar',
    age: 39,
    treatment: 'Clinical Derm',
    condition: 'Chronic Eczema',
    conditionSlug: 'eczema',
    rating: 5,
    text: "As a fellow medical practitioner, I am extremely particular about clinical guidelines. Dr. Divya's diagnostic approach to my chronic eczema was absolutely stellar. She stays up-to-date with global dermatological research and prescribed a highly modern, steroid-free management regimen that keeps me flare-free.",
    period: 'Ongoing skin management',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Priyanka Sen',
    age: 24,
    treatment: 'Acne & Scars',
    condition: 'Hormonal Acne & Pigmentation',
    conditionSlug: 'acne-pimples',
    rating: 5,
    text: "Dr. Divya Sharma's clinic has the most advanced lasers I've seen in Bangalore. I underwent a treatment plan for my stubborn pigmentation and hormonal breakout scars. The staff is professional, the clinic is clinical yet relaxing, and the results speak for themselves. Highly recommend her clinic!",
    period: '2 months treatment plan',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Vikram Sethi',
    age: 41,
    treatment: 'Hair Restoration',
    condition: 'Diffuse Hair Thinning',
    conditionSlug: 'hair-loss',
    rating: 5,
    text: "I was skeptical about non-surgical hair treatments, but the dermoscopy scan showed active miniaturization that Dr. Divya reversed with GFC therapy. Within three sessions, the shedding stopped completely and my hair shaft diameter doubled. Genuinely ethical practice with real results.",
    period: '4 months treatment plan',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [conditionsMap, setConditionsMap] = useState<Record<string, ConditionData>>({});
  const [expandedBA, setExpandedBA] = useState<Record<string, boolean>>({});

  const loadConditions = () => {
    const list = getConditions();
    const map: Record<string, ConditionData> = {};
    list.forEach((c) => {
      map[c.slug] = c;
    });
    setConditionsMap(map);
  };

  useEffect(() => {
    loadConditions();
    const handleUpdate = () => loadConditions();
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, []);

  const toggleBA = (name: string) => {
    setExpandedBA((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const filteredTestimonials = activeCategory === 'All'
    ? testimonials
    : testimonials.filter((t) => t.treatment === activeCategory);

  return (
    <section className="bg-gradient-to-b from-[#faf7f3] via-white to-[#faf7f3] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent mb-3 inline-block"
          >
            Patient Stories & Clinical Outcomes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-[1.15]"
          >
            <span className="font-serif italic font-normal text-foreground/90 block">
              Real Transformations,
            </span>
            <span className="font-sans font-bold text-foreground block">
              Clinically Proven Results.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed"
          >
            Read genuine feedback from patients treated by Dr. Divya Sharma. Every story reflects our evidence-based, zero-steroid approach.
          </motion.p>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20 scale-105'
                    : 'bg-white hover:bg-brand-accent/5 text-foreground/80 border border-brand-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredTestimonials.map((testimonial) => {
              const condition = conditionsMap[testimonial.conditionSlug];
              const hasBeforeAfter = condition?.beforeAfterPair;
              const isShowingBA = expandedBA[testimonial.name];

              return (
                <motion.div
                  key={testimonial.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-3xl p-8 border border-brand-accent/10 shadow-sm hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-accent/10 pointer-events-none group-hover:text-brand-accent/15 transition-colors" />

                  <div>
                    {/* Star Rating & Before/After Toggle */}
                    <div className="flex items-center justify-between gap-1 mb-4">
                      <div className="flex text-amber-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                        ))}
                      </div>

                      {hasBeforeAfter && (
                        <button
                          type="button"
                          onClick={() => toggleBA(testimonial.name)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            isShowingBA
                              ? 'bg-brand-accent text-white'
                              : 'bg-brand-accent/10 hover:bg-brand-accent hover:text-white text-brand-accent'
                          }`}
                        >
                          <SplitSquareVertical className="w-3 h-3" />
                          <span>{isShowingBA ? 'Hide B/A' : 'View B/A Case'}</span>
                        </button>
                      )}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-sm text-foreground/85 leading-relaxed italic relative z-10 mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Before / After Slider (When toggled on) */}
                    {isShowingBA && condition?.beforeAfterPair && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 pt-2 border-t border-border"
                      >
                        <span className="text-[10px] font-bold text-brand-accent block mb-1 uppercase tracking-wider">
                          Verified Case: {condition.beforeAfterPair.title}
                        </span>
                        <div className="rounded-xl overflow-hidden shadow-sm">
                          <BeforeAfterSlider
                            beforeImage={condition.beforeAfterPair.beforeImage}
                            afterImage={condition.beforeAfterPair.afterImage}
                            className="h-44 sm:h-48"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Patient Profile */}
                  <div className="border-t border-brand-accent/5 pt-6 mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden border border-brand-accent/10 relative bg-brand-accent/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-wider mt-0.5">
                          {testimonial.treatment} • Age {testimonial.age}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[9px] bg-brand-accent/5 text-brand-accent font-bold px-2 py-1 rounded">
                        {testimonial.period}
                      </span>
                      <p className="text-[10px] text-foreground/40 mt-1 font-semibold italic">{testimonial.condition}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-white rounded-3xl p-8 md:p-12 border border-brand-accent/10 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Ready for your own skin transformation?</h3>
            <p className="text-xs md:text-sm text-foreground/70 mt-1">Book your clinical consultation with Dr. Divya Sharma today.</p>
          </div>
          <a
            href="#chatbot"
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-accent/90 transition-all duration-300 shadow-md shadow-brand-accent/10 shrink-0"
          >
            Start Your Journey <ChevronRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
