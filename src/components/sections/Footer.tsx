'use client';

import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-20 px-8 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/logo.svg" 
              alt="Dr. Divya's" 
              width={160} 
              height={37} 
              className="h-10 w-auto brightness-0 invert object-contain" 
            />
          </Link>
          <p className="max-w-md text-background/60 leading-relaxed">
            Pioneering the future of dermatology with a blend of clinical mastery and aesthetic artistry. 
            Gold medalist care, now accessible in Bangalore.
          </p>
          <div className="flex space-x-6 mt-8">
            <Instagram className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Facebook className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Twitter className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 opacity-40">Locations</h4>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
              <p className="text-sm text-background/80">
                AECS Layout, Whitefield <br />
                Bangalore, KA 560037
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 opacity-40">Contact</h4>
          <div className="space-y-4">
            <a href="tel:+919620638388" className="flex items-center space-x-4 hover:text-brand-accent transition-colors">
              <Phone className="h-5 w-5 text-brand-accent" />
              <span className="text-sm">+91 96206 38388</span>
            </a>
            <a href="mailto:info@drdivyasharma.com" className="flex items-center space-x-4 hover:text-brand-accent transition-colors">
              <Mail className="h-5 w-5 text-brand-accent" />
              <span className="text-sm">info@drdivyasharma.com</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-background/40">© 2026 Dr. Divya Skin & Hair Solutions. All rights reserved.</p>
        <div className="flex space-x-8 text-xs text-background/40">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
