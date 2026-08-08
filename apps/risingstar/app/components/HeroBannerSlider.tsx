"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { t } from "../lib/i18n";

export interface HeroSlide {
  id: number;
  image: string;
  tag: string;
  tagIcon: string;
  title: string;
  subtitle: string;
  badgeColor: "coral" | "blue" | "green" | "yellow" | "purple" | "orange";
  highlights: string[];
  ctaLink?: string;
}

export default function HeroBannerSlider() {
  const slides = t.heroSlider.slides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  // Auto-play timer with progress update
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalTime = 5000; // 5 seconds per slide
    const stepTime = 50;
    const progressIncrement = (stepTime / intervalTime) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepTime);

    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, goToNext]);

  return (
    <div
      className="hero-slider-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Rising Kids School interactive banner gallery"
    >
      {/* Decorative Floating Badges */}
      <div className="slider-floating-badge badge-top-right">
        <span className="badge-icon">🛡️</span>
        <div className="badge-text">
          <strong>{t.heroSliderBadges.safeTitle}</strong>
          <small>{t.heroSliderBadges.safeSub}</small>
        </div>
      </div>

      <div className="slider-floating-badge badge-bottom-left">
        <span className="badge-icon">⭐</span>
        <div className="badge-text">
          <strong>{t.heroSliderBadges.ratioTitle}</strong>
          <small>{t.heroSliderBadges.ratioSub}</small>
        </div>
      </div>

      {/* Main Slider Display */}
      <div className="hero-slider-main">
        {/* Top Progress Bar */}
        <div className="slider-progress-bar-container">
          <div
            className="slider-progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slides Viewport */}
        <div className="hero-slides-viewport">
          {slides.map((slide: any, idx: number) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`hero-slide-item ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
              >
                {/* Image Container with Ken-Burns animation */}
                <div className="hero-slide-img-box">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="hero-slide-img"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="hero-slide-overlay" />
                </div>

                {/* Content Overlay */}
                <div className="hero-slide-caption">
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                    <span className={`slide-tag-pill tag-${slide.badgeColor}`}>
                      <span>{slide.tagIcon}</span> {slide.tag}
                    </span>
                    <span className="slide-counter-pill">
                      {idx + 1} / {totalSlides}
                    </span>
                  </div>

                  <h3 className="slide-title text-white" style={{ color: "#ffffff" }}>
                    {slide.title}
                  </h3>
                  <p className="slide-subtitle text-white" style={{ color: "#ffffff" }}>
                    {slide.subtitle}
                  </p>

                  {/* Highlight Chips */}
                  <div className="slide-highlights d-flex flex-wrap gap-2 mb-3">
                    {slide.highlights.map((highlight: string, hIdx: number) => (
                      <span key={hIdx} className="highlight-chip">
                        ✨ {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Slide Quick Action */}
                  <div className="d-flex align-items-center gap-2">
                    <a
                      href={slide.ctaLink || "#gallery"}
                      className="btn btn-sm btn-slide-action rounded-pill px-3 py-1 fw-bold"
                    >
                      {t.heroSliderBadges.exploreCta}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <button
          className="slider-nav-btn prev-btn"
          onClick={goToPrev}
          aria-label="Previous slide"
          title="Previous photo"
        >
          ‹
        </button>
        <button
          className="slider-nav-btn next-btn"
          onClick={goToNext}
          aria-label="Next slide"
          title="Next photo"
        >
          ›
        </button>

        {/* Pause/Play and Dot Indicators */}
        <div className="slider-indicators-bar">
          <button
            className="slider-play-toggle"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause auto slide" : "Play auto slide"}
            title={isPlaying ? "Pause auto slide" : "Play auto slide"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <div className="slider-dots-group">
            {slides.map((_: any, idx: number) => (
              <button
                key={idx}
                className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Thumbnail Quick Jump Strip */}
      <div className="slider-thumbnail-strip" role="tablist" aria-label="Slide thumbnail strip">
        {slides.map((slide: any, idx: number) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            className={`slider-thumb-btn ${idx === currentIndex ? "active" : ""}`}
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={slide.title}
          >
            <img
              src={slide.image}
              alt=""
              className="slider-thumb-img"
              loading="lazy"
            />
            <span className="slider-thumb-label">
              <span>{slide.tagIcon}</span> {slide.title.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
