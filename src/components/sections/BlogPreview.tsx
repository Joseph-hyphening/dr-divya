'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

const articles = [
  {
    title: "Summer Skin Care: Expert Tips to Prevent Pigmentation",
    category: "Skin Care",
    date: "Mar 10, 2024",
    image: "/clinic-lounge.png"
  },
  {
    title: "Understanding Hair Loss: When to See a Surgeon?",
    category: "Trichology",
    date: "Feb 28, 2024",
    image: "/laser-treatment.png"
  },
  {
    title: "Top 5 Benefits of US FDA Approved Laser Facials",
    category: "Aesthetics",
    date: "Feb 15, 2024",
    image: "/clinic-lounge.png"
  }
];

export const BlogPreview = () => {
  return (
    <section className="bg-white py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-4">Education Hub</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Latest from <br /><span className="text-brand-accent italic font-serif">The Authority</span></h3>
          </div>
          <button className="text-brand-accent font-bold tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
            VIEW ALL ARTICLES <ArrowRight className="h-5 w-5" />
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 relative">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Tag className="h-3 w-3" />
                  {article.category}
                </div>
              </div>
              <div className="px-4">
                <p className="text-xs font-bold text-brand-accent/40 uppercase tracking-widest mb-3">{article.date}</p>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-brand-accent transition-colors">{article.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
