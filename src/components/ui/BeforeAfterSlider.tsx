'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  badge?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = '/process/step-01-dermoscopy.jpg',
  afterImage = '/process/step-03-laser-suite.jpg',
  beforeLabel = 'Before',
  afterLabel = 'After Treatment',
  badge,
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    setContainerWidth(el.clientWidth);

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect) {
            setContainerWidth(entry.contentRect.width);
          }
        }
      });
      observer.observe(el);
      return () => observer.disconnect();
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const safeBefore = (beforeImage && beforeImage.trim().length > 0) ? beforeImage.trim() : '/process/step-01-dermoscopy.jpg';
  const safeAfter = (afterImage && afterImage.trim().length > 0) ? afterImage.trim() : '/process/step-03-laser-suite.jpg';

  const isBeforeExternal = safeBefore.startsWith('http://') || safeBefore.startsWith('https://');
  const isAfterExternal = safeAfter.startsWith('http://') || safeAfter.startsWith('https://');

  return (
    <div className={`relative select-none overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl cursor-ew-resize bg-muted shadow-inner"
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* AFTER IMAGE (Base background layer) */}
        <div className="absolute inset-0 h-full w-full">
          {isAfterExternal ? (
            <img
              src={safeAfter}
              alt={afterLabel}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <Image
              src={safeAfter}
              alt={afterLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider z-10">
            {afterLabel}
          </span>
        </div>

        {/* BEFORE IMAGE (Clipped on top) */}
        <div
          className="absolute inset-0 h-full overflow-hidden z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="relative h-full"
            style={{ width: containerWidth ? `${containerWidth}px` : '100vw' }}
          >
            {isBeforeExternal ? (
              <img
                src={safeBefore}
                alt={beforeLabel}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <Image
                src={safeBefore}
                alt={beforeLabel}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider z-20">
            {beforeLabel}
          </span>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-brand-accent shadow-xl flex items-center justify-center border border-brand-accent/20">
            <ChevronsLeftRight className="w-4 h-4 text-brand-accent stroke-[2.5]" />
          </div>
        </div>

        {/* OPTIONAL BADGE */}
        {badge && (
          <div className="absolute top-3 left-3 z-30 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-brand-accent/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wide shadow-md">
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="py-2 text-center text-xs text-muted-foreground font-medium">
        Drag slider left or right to compare results
      </div>
    </div>
  );
};
