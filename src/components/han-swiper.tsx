"use client";

import Image from "next/image";
import {
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// CSS for progress animation
const progressAnimationStyle = `
  @keyframes progressAnimation {
    from { width: 0%; }
    to { width: 100%; }
  }
  
  .progress-animation {
    animation-name: progressAnimation;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;

type HanSwiperProps = {
  slides: Array<string | { src: string; alt?: string }>;
  autoplayDelay?: number; // ms
  animationTime?: number; // ms (progress bar)
  onNext?: () => void;
  onPrev?: () => void;
};

export type HanSwiperRef = {
  handleNext: () => void;
  handlePrev: () => void;
};

const HanSwiper = forwardRef<HanSwiperRef, HanSwiperProps>(
  (
    { slides, autoplayDelay = 3000, animationTime = 3000, onNext, onPrev },
    ref
  ) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [count, setCount] = useState<number>(slides.length);
    const [progressWidth, setProgressWidth] = useState<string>("0%");
    const [animationDuration, setAnimationTime] =
      useState<number>(animationTime);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const sections = useMemo(() => Array.from({ length: count }), [count]);

    const calcPercent = (activeIndex: number, total: number) =>
      `${((activeIndex + 1) / total) * 100}%`;

    const handleNext = () => {
      swiperRef.current?.slideNext();
      onNext?.();
    };
    const handlePrev = () => {
      swiperRef.current?.slidePrev();
      onPrev?.();
    };

    useImperativeHandle(ref, () => ({
      handleNext,
      handlePrev,
    }));

    return (
      <div className="han-swiper relative w-full" aria-label="Image carousel">
        <style dangerouslySetInnerHTML={{ __html: progressAnimationStyle }} />
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            const total = swiper.params.loop
              ? swiper.slides.length - 2
              : swiper.slides.length;
            setCount(total);
            setProgressWidth(calcPercent(swiper.realIndex, total));

            // Set initial active index
            setActiveIndex(swiper.realIndex);

            // Listen for slide change to reset animation
            swiper.on("slideChange", () => {
              setActiveIndex(swiper.realIndex);
            });
          }}
          onSlideChange={(swiper) => {
            const total = swiper.params.loop
              ? swiper.slides.length - 2
              : swiper.slides.length;

            // Reset animation duration temporarily to make transitions instant when manually changing
            setAnimationTime(0);
            setProgressWidth(calcPercent(swiper.realIndex, total));

            // Restore animation duration after a short delay
            setTimeout(() => {
              setAnimationTime(autoplayDelay);
            }, 50);
          }}
          className="mt-4"
        >
        {/* Navigation buttons - Only show if there's more than one slide */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 rounded-full z-10 text-white"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 rounded-full z-10 text-white"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <figure className="w-full h-full flex items-center justify-center">
                <Image
                  src={typeof slide === 'string' ? slide : slide.src}
                  alt={typeof slide === 'string' ? "" : slide.alt || ""}
                  width={1400}
                  height={761}
                  className="md:h-[100svh] w-full h-[400px] object-cover"
                  aria-hidden="true"
                  loading="lazy"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Progress - Only show if there's more than one slide */}
        {slides.length > 1 && (
          <nav
            className="w-full flex justify-center absolute bottom-6"
            aria-label="Carousel pagination"
          >
            <div className="progress w-[90%] flex gap-1 z-10" role="tablist">
              {/* Instagram-style segmented progress bars */}
              {sections.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 bg-[#FFFFFF4D] overflow-hidden rounded-full"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Slide ${i + 1}`}
                >
                  <div
                    className={`h-full bg-white rounded-full ${
                      i < activeIndex
                        ? "w-full"
                        : i > activeIndex
                        ? "w-0"
                        : i === activeIndex
                        ? "progress-animation"
                        : ""
                    }`}
                    style={{
                      animationDuration: `${autoplayDelay}ms`,
                    }}
                  />
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    );
  }
);

HanSwiper.displayName = "HanSwiper";

export default HanSwiper;
