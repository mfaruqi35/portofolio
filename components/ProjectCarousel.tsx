"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  video?: string;
  images?: string[];
  fallbackImage: string;
  title: string;
}

export default function ProjectCarousel({ video, images, fallbackImage, title }: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Compile all media into a single array
  const mediaItems = [];
  if (video) mediaItems.push({ type: 'video', src: video });
  if (images && images.length > 0) {
    images.forEach(img => mediaItems.push({ type: 'image', src: img }));
  }
  if (mediaItems.length === 0) {
    mediaItems.push({ type: 'image', src: fallbackImage });
  }

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    
    // Fallbacks for extreme ends
    const isAtStart = container.scrollLeft <= 5;
    const isAtEnd = Math.abs(container.scrollWidth - container.clientWidth - container.scrollLeft) <= 5;
    
    const maxIndex = mediaItems.length - 1;

    let index = 0;

    if (isAtStart) {
      index = 0;
    } else if (isAtEnd) {
      index = maxIndex;
    } else {
      const children = Array.from(container.children) as HTMLElement[];
      const viewportCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let minDiff = Infinity;

      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const diff = Math.abs(childCenter - viewportCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      index = closestIndex;
    }

    if (index !== currentIndex) setCurrentIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const child = container.children[index] as HTMLElement;
    if (child) {
      container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const scrollNext = () => {
    if (currentIndex < mediaItems.length - 1) scrollToIndex(currentIndex + 1);
  };

  return (
    <div className="mb-10 w-full">
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {mediaItems.map((item, idx) => (
          <div
            key={idx}
            className="relative aspect-video w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-black/10 bg-neutral-200"
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={item.src}
                alt={`${title} media ${idx + 1}`}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {mediaItems.length > 1 && (
        <div className="hidden md:flex items-center justify-center gap-4 mt-6">
          <button 
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            className="flex shrink-0 items-center justify-center transition-colors hover:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={28} className="text-black" />
          </button>
          
          <div className="flex items-center justify-center gap-2">
            {mediaItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-bg-dark" : "w-2 border border-bg-dark hover:bg-neutral-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={scrollNext}
            disabled={currentIndex === mediaItems.length - 1}
            className="flex shrink-0 items-center justify-center transition-colors hover:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={28} className="text-black" />
          </button>
        </div>
      )}
    </div>
  );
}
