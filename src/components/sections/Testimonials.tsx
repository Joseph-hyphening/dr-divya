'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';

const categories = ['All', 'Acne & Scars', 'Hair Restoration', 'Anti-Aging', 'Clinical Derm'];

const testimonials = [
  {
    name: 'Ananya Rao',
    age: 28,
    treatment: 'Acne & Scars',
    condition: 'Cystic Acne & Scarring',
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
    rating: 5,
    text: "Dr. Divya Sharma's clinic has the most advanced lasers I've seen in Bangalore. I underwent a treatment plan for my stubborn pigmentation and hormonal breakout scars. The staff is professional, the clinic is clinical yet relaxing, and the results speak for themselves. Highly recommend her clinic!",
    period: '2 months treatment plan',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Vikram Aditya',
    age: 31,
    treatment: 'Hair Restoration',
    condition: 'Severe Hair Fall & Alopecia',
    rating: 5,
    text: "I was extremely skeptical about hair treatments after trying multiple clinics with zero results. Dr. Divya was honest and gave me realistic expectations. The targeted clinical scalp therapies she performed have stopped my active hair fall completely and initiated healthy new regrowth. Exceptional doctor.",
    period: '6 months treatment plan',
    avatar: 'https://i.pravatar.cc/150?img=13',
  }
];

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTestimonials = activeCategory === 'All'
    ? testimonials
    : testimonials.filter(t => t.treatment === activeCategory);

  return (
    <section className="py-24 bg-[#faf7f3] relative overflow-hidden" id="testimonials">
      {/* Background embellishments */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-accent/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-4"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#3a2218] tracking-tight leading-tight"
          >
            Real Transformations.<br /><em>Clinically Proven</em> Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed"
          >
            Read honest feedback from patients who underwent fully scientific, FDA-approved dermatological and hair restoration plans.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/15 scale-105'
                  : 'bg-white hover:bg-brand-accent/5 text-foreground/80 border border-brand-accent/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 border border-brand-accent/10 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-brand-accent/20 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-8 text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors duration-300">
                  <Quote size={40} className="fill-current" />
                </div>

                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-sm text-foreground/85 leading-relaxed italic relative z-10 mb-6">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="border-t border-brand-accent/5 pt-6 mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border border-brand-accent/10 relative bg-brand-accent/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#3a2218]">{testimonial.name}</h4>
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
            ))}
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
            <h3 className="text-xl md:text-2xl font-bold text-[#3a2218]">Ready for your own skin transformation?</h3>
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
