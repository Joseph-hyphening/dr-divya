'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  badge?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After Treatment',
  badge,
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <div className={`relative overflow-hidden rounded-2xl select-none group ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full h-80 sm:h-96 cursor-ew-resize bg-muted"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Full width behind) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
            {afterLabel}
          </span>
        </div>

        {/* BEFORE IMAGE (Clipped on top) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-full" style={{ width: containerRef.current?.clientWidth || '100%' }}>
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider z-10">
            {beforeLabel}
          </span>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-brand-accent shadow-xl flex items-center justify-center border border-brand-accent/20">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-3l3 3m0 0l-3 3"
              />
            </svg>
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
