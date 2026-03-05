'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  loginLink?: string;
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: LucideIcon;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  loginLink,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-background font-sans",
        className,
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>

        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {loginLink && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <a
                href={loginLink}
                className="text-sm font-bold tracking-widest text-foreground transition-all hover:opacity-70 border-b-2 border-brand-accent pb-0.5"
              >
                LOGIN
              </a>
            </motion.div>
          )}

          {/* Mobile Hamburger */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-1.5 md:hidden p-1"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </motion.button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-background shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-border">
                <span className="text-lg font-bold tracking-wider">{logoText}</span>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-foreground/60" />
                </button>
              </div>
              <nav className="flex flex-col gap-2 p-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block py-3 text-base border-b border-border/40">
                      {link.label}
                    </span>
                  </NavLink>
                ))}
                {loginLink && (
                  <a
                    href={loginLink}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-4 block py-3 text-sm font-bold tracking-widest text-foreground border-b-2 border-brand-accent w-fit"
                  >
                    LOGIN
                  </a>
                )}
              </nav>
              <div className="mt-auto p-6 flex items-center gap-4 border-t border-border">
                {socialLinks.map((link, index) => (
                  <SocialIcon key={index} href={link.href} icon={link.icon} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Layout ── */}
      <div className="md:hidden flex flex-col items-center w-full flex-grow px-6 pb-28">
        {/* Circle + Image */}
        <div className="relative flex justify-center items-end w-full mt-4" style={{ height: 320 }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-brand-accent"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-72 w-auto object-cover object-top"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/763c26/ffffff?text=Dr.+Divya`;
            }}
          />
          {/* Overlay text on circle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-0"
          >
            <span className="text-3xl font-extrabold text-white/90 leading-none drop-shadow">
              {overlayText.part1}<br />{overlayText.part2}
            </span>
          </motion.div>
        </div>

        {/* Mobile text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm leading-relaxed text-foreground/70 max-w-sm mx-auto">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-semibold text-foreground underline decoration-brand-accent underline-offset-2"
          >
            Read More
          </a>
        </motion.div>

        {/* Mobile Social + Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 flex items-center justify-between w-full max-w-sm"
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.href} icon={link.icon} />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground/60">{locationText}</span>
        </motion.div>
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden md:grid relative w-full max-w-7xl flex-grow grid-cols-3 items-center px-12 pb-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-30 pl-4"
        >
          <p className="max-w-[240px] text-sm leading-relaxed text-foreground/90 font-medium">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-6 inline-block text-sm font-bold tracking-widest text-foreground uppercase border-b-2 border-brand-accent pb-1 hover:opacity-70 transition-opacity"
          >
            Explore Treatments
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative flex justify-center items-end h-full w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[500px] w-[500px] lg:h-[650px] lg:w-[650px] rounded-full bg-brand-accent"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-20 h-auto w-[26rem] lg:w-[35rem] object-cover -mb-12 drop-shadow-2xl max-w-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/763c26/ffffff?text=Dr.+Divya`;
            }}
          />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-10 flex items-center justify-start -ml-4 lg:-ml-12"
        >
          <h1 className="text-[clamp(4rem,7vw,7.5rem)] lg:text-[clamp(5rem,8vw,9.5rem)] font-extrabold text-white leading-[0.85] tracking-tight whitespace-nowrap" style={{ textShadow: '0 4px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}>
            {overlayText.part1}
            <br />
            <span className="ml-4 md:ml-8">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Desktop Footer Elements */}
      <footer className="hidden md:flex z-30 w-full max-w-7xl items-center justify-between px-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
