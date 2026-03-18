'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Star } from 'lucide-react';

const galleryItems = [
  {
    title: "Advanced Acne Treatment",
    desc: "3-month transformation using custom medical lasers.",
    before: "https://placehold.co/600x400/763c26/ffffff?text=Acne+Before",
    after: "https://placehold.co/600x400/faf7f3/763c26?text=Acne+After",
    category: "Clinical",
    review: {
      text: "Thank you so much, Dr. Divya Ma’am, for curing my acne in such a short time. Your treatment was extremely effective, and your guidance made the whole process easy and comfortable.",
      name: "Mayookh K",
      location: "Verified Patient"
    }
  },
  {
    title: "Natural Hair Regrowth",
    after: "https://placehold.co/600x400/faf7f3/763c26?text=Hair+Result",
    before: "https://placehold.co/600x400/763c26/ffffff?text=Hair+Before",
    desc: "PRP & Hair Transplant combination therapy.",
    category: "Trichology",
    review: {
      text: "I visited Dr. Divya mam for a hair loss problem. She gave treatment for 1 month, and I can see new hair growth. I'm very satisfied with the treatment and results.",
      name: "Geeverghese M B",
      location: "Verified Patient"
    }
  },
  {
    title: "Anti-Aging Results",
    desc: "US FDA approved fillers and skin tightening.",
    after: "https://placehold.co/600x400/faf7f3/763c26?text=Aging+Result",
    before: "https://placehold.co/600x400/763c26/ffffff?text=Aging+Before",
    category: "Cosmetic",
    review: {
      text: "Dr. Divya is a soft-spoken and good doctor. Had laser toning done for uneven skin tone. Had great experience there. Do recommend whoever is facing any skin or hair related issues.",
      name: "Swati Das",
      location: "Verified Patient"
    }
  }
];

export const GallerySlider = () => {
  const [index, setIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleInteraction = () => setAutoPlay(false);

  const next = () => {
    handleInteraction();
    setIndex((prev) => (prev + 1) % galleryItems.length);
  };
  const prev = () => {
    handleInteraction();
    setIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="bg-white py-24 px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-4">Visible Results</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Proof of <br /><span className="text-brand-accent italic font-serif">Clinical Excellence</span></h3>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-brand-accent/20 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-brand-accent/20 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Slider UI */}
          <div className="lg:col-span-3">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/2] rounded-[2rem] overflow-hidden bg-brand-accent/5 group shadow-2xl"
              onClick={handleInteraction}
            >
              {/* After Image */}
              <Image src={galleryItems[index].after} alt={galleryItems[index].title} fill className="object-cover" />
              
              {/* Before Image (Cropped by slider) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden" 
                style={{ width: `${sliderPos}%`, borderRight: '2px solid white' }}
              >
                <div className="absolute inset-0 w-[500%] h-full">
                  <Image src={galleryItems[index].before} alt="Before" fill className="object-cover max-w-none" />
                </div>
                <span className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest z-10">Before</span>
              </div>
              
              <span className="absolute top-6 right-6 px-4 py-2 bg-brand-accent/80 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest">After</span>

              {/* Slider Controller */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPos}
                onChange={(e) => {
                  handleInteraction();
                  setSliderPos(Number(e.target.value));
                }}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30"
              />
              <div 
                className="absolute top-0 bottom-0 pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-brand-accent">
                   <div className="flex gap-0.5">
                     <span className="w-0.5 h-4 bg-brand-accent rounded-full" />
                     <span className="w-0.5 h-4 bg-brand-accent rounded-full" />
                   </div>
                </div>
              </div>
              
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <motion.div
              key={`info-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 bg-brand-accent/10 text-brand-accent text-xs font-bold rounded-full uppercase tracking-widest">{galleryItems[index].category}</span>
              <h4 className="text-3xl font-bold mt-6 mb-4">{galleryItems[index].title}</h4>
              <p className="text-foreground/60 leading-relaxed text-lg">
                {galleryItems[index].desc}
              </p>
            </motion.div>
            
            <motion.div 
              key={`review-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 bg-brand-accent/[0.03] rounded-3xl border border-brand-accent/5 flex flex-col"
            >
              <div className="flex gap-1 mb-5 text-[#FDB022]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="italic text-foreground/80 leading-relaxed mb-6">&quot;{galleryItems[index].review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-lg">
                  {galleryItems[index].review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{galleryItems[index].review.name}</p>
                  <p className="text-xs opacity-40 uppercase tracking-widest font-medium">{galleryItems[index].review.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
