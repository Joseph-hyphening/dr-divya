'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dermatologist-examining-a-patients-face-with-a-magnifying-glass-23004-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Bangalore&apos;s Award-Winning <br />
            <span className="text-brand-accent italic font-serif">Dermatologist & Hair Expert</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-medium mb-10 opacity-90 tracking-wide uppercase">
            Gold Medalist MD | 12+ Years | US FDA Approved Technology
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
              BOOK CONSULTATION <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              VIRTUAL CONSULTATION <Play className="h-4 w-4 fill-current" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale brightness-200">
            <span className="text-sm font-bold tracking-widest uppercase">Member of IADVL</span>
            <span className="text-sm font-bold tracking-widest uppercase">Gold Medalist - RGUHS</span>
            <span className="text-sm font-bold tracking-widest uppercase">NABH Accredited Clinic</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/40 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
