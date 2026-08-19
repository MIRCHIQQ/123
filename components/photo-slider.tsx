"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PhotoSliderProps = {
  slides: {
    image: string;
    title: string;
    caption: string;
  }[];
};

const AUTO_PLAY_INTERVAL = 5000;

export function PhotoSlider({ slides }: PhotoSliderProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);
  };

  const handlePrev = () => {
    goTo(current - 1);
    restartTimer();
  };

  const handleNext = () => {
    goTo(current + 1);
    restartTimer();
  };

  const handleDot = (index: number) => {
    goTo(index);
    restartTimer();
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-sm">
      <div className="relative aspect-[21/9] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              index === current ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">
                {slide.caption}
              </p>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-3xl">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handlePrev}
        aria-label="Предыдущий слайд"
        className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/35"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Следующий слайд"
        className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/35"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDot(index)}
            aria-label={`Слайд ${index + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              index === current
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
}
