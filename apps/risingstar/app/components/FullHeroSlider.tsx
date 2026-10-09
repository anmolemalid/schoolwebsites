"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface SlideItem {
  id: number;
  image: string;
  alt: string;
  link?: string;
}

const initialSlides: SlideItem[] = [
  {
    id: 1,
    image: "/assets/slider/hero_banner_1.jpg",
    alt: "Rising Kids School - Admissions Open Banner",
    link: "/admissions",
  },
  {
    id: 2,
    image: "/assets/slider/hero_banner_2.jpg",
    alt: "About Us - Govt Recognized & Affiliated Rising Kids School",
    link: "/about",
  },
  {
    id: 3,
    image: "/assets/slider/hero_banner_3.jpg",
    alt: "Rising Kids School Activity Banner",
    link: "/about",
  },
];

export default function FullHeroSlider() {
  const [slides, setSlides] = useState<SlideItem[]>(initialSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Dynamically load all hero_banner_* images from /api/banners
  useEffect(() => {
    async function loadDynamicBanners() {
      try {
        const res = await fetch("/api/banners");
        if (res.ok) {
          const data = await res.json();
          if (data.banners && data.banners.length > 0) {
            setSlides(data.banners);
          }
        }
      } catch (err) {
        // Fallback to initialSlides if API fetch fails
      }
    }
    loadDynamicBanners();
  }, []);

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, goToNext, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === 0) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (slides.length === 0) return null;

  return (
    <section className="position-relative w-100 overflow-hidden bg-white border-bottom">
      <div
        className="position-relative w-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Viewport Container */}
        <div
          className="d-flex w-100"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-100 flex-shrink-0 position-relative">
              {slide.link ? (
                <Link href={slide.link} className="d-block w-100 text-decoration-none">
                  <picture className="w-100 d-block">
                    <source
                      media="(max-width: 767px)"
                      srcSet={slide.image.replace(/\.(jpg|jpeg|png)$/i, "_mobile.$1")}
                    />
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-100 hero-slider-img d-block"
                    />
                  </picture>
                </Link>
              ) : (
                <picture className="w-100 d-block">
                  <source
                    media="(max-width: 767px)"
                    srcSet={slide.image.replace(/\.(jpg|jpeg|png)$/i, "_mobile.$1")}
                  />
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-100 hero-slider-img d-block"
                  />
                </picture>
              )}
            </div>
          ))}
        </div>

        {/* Previous Navigation Button */}
        {totalSlides > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            className="position-absolute top-50 start-0 translate-middle-y btn rounded-circle shadow-sm opacity-85 ms-2 ms-md-4 d-flex align-items-center justify-content-center border-0"
            style={{
              width: "44px",
              height: "44px",
              zIndex: 10,
              backgroundColor: "rgba(0, 45, 98, 0.85)",
              backdropFilter: "blur(4px)",
              color: "#ffffff",
            }}
            aria-label="Previous Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Next Navigation Button */}
        {totalSlides > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            className="position-absolute top-50 end-0 translate-middle-y btn rounded-circle shadow-sm opacity-85 me-2 me-md-4 d-flex align-items-center justify-content-center border-0"
            style={{
              width: "44px",
              height: "44px",
              zIndex: 10,
              backgroundColor: "rgba(0, 45, 98, 0.85)",
              backdropFilter: "blur(4px)",
              color: "#ffffff",
            }}
            aria-label="Next Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Slide Indicators Dots */}
        {totalSlides > 1 && (
          <div
            className="position-absolute bottom-0 start-50 translate-middle-x mb-2 mb-md-3 d-flex align-items-center gap-2 px-3 py-1 rounded-pill"
            style={{
              zIndex: 10,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
            }}
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="border-0 p-0 rounded-pill"
                style={{
                  width: idx === currentIndex ? "26px" : "9px",
                  height: "9px",
                  backgroundColor: idx === currentIndex ? "#ffd200" : "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.3s ease",
                }}
                aria-label={`Go to banner slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
