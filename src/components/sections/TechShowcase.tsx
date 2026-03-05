'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, Award } from 'lucide-react';

const techItems = [
  {
    title: "US FDA Approved Lasers",
    desc: "Gold-standard technology for safe and efficient treatment across all skin types.",
    icon: Zap,
    image: "/laser-treatment.png"
  },
  {
    title: "AI-Driven Skin Analysis",
    desc: "Precision diagnostics using advanced imaging to track clinical progress accurately.",
    icon: Cpu
  },
  {
    title: "Sterile Clinical Environment",
    desc: "NABH accredited standards ensuring zero-infection hospitality at every step.",
    icon: ShieldCheck
  },
  {
    title: "Award Winning Excellence",
    desc: "Recognized as the best dermatology clinic in Bangalore (Whitefield Research Council).",
    icon: Award
  }
];

export const TechShowcase = () => {
  return (
    <section className="bg-foreground text-background py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-4">Precision 🤝 Care</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Advanced <br /> Clinical Technology</h3>
          </div>
          <p className="text-background/60 text-lg leading-relaxed max-w-lg">
            We invest in technologies that offer the highest level of safety and efficacy. 
            All our equipments are US FDA approved and operated by highly trained medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <item.icon className="h-10 w-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-background/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
