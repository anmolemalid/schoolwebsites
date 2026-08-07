"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/images/slider/1.png",
    tagIcon: "🏫",
    tag: "Preschool & Primary School",
    title: "Rising Kids School, Vijay Nagar",
    subtitle: "Govt. recognized, nurturing English-medium school from Play Group to 5th Class in Sector 9, Ghaziabad.",
    badgeColor: "coral",
    highlights: ["1:10 Teacher Ratio", "Safe GPS Vans", "100% CCTV Monitored"],
    ctaLink: "#about"
  },
  {
    id: 2,
    image: "/images/slider/2.png",
    tagIcon: "👩‍🏫",
    tag: "Experienced Caring Teachers",
    title: "Interactive & Loving Classrooms",
    subtitle: "Dedicated educators guiding early phonics, bilingual discovery, and elementary math foundations.",
    badgeColor: "blue",
    highlights: ["Loving Environment", "Bilingual Phonics", "Air-Conditioned Rooms"],
    ctaLink: "#curriculum"
  },
  {
    id: 3,
    image: "/images/slider/3.png",
    tagIcon: "🎨",
    tag: "Creative Arts & Paper Crafts",
    title: "Vibrant Art Studio & Origami",
    subtitle: "Unleashing creative thinking with watercolor painting, origami, and tactile motor crafts.",
    badgeColor: "yellow",
    highlights: ["Color Exploration", "Origami & Paper Craft", "Fine Motor Development"],
    ctaLink: "#gallery"
  },
  {
    id: 4,
    image: "/images/slider/4.jpg",
    tagIcon: "🌟",
    tag: "Joyful & Confident Learners",
    title: "Where Every Child Shines Bright",
    subtitle: "Nurturing curiosity, strong moral values, public speaking, and self-confidence through joyful learning.",
    badgeColor: "green",
    highlights: ["Holistic Growth", "Moral Values", "Confidence Building"],
    ctaLink: "#about"
  },
  {
    id: 5,
    image: "/images/slider/5.png",
    tagIcon: "💻",
    tag: "Early IT & Smart Learning",
    title: "Smart IT & Digital Literacy Lab",
    subtitle: "Early computer discovery, interactive audio-visual modules, and STEM coding puzzles.",
    badgeColor: "blue",
    highlights: ["Individual Workstations", "Educational Headsets", "STEM Science Modules"],
    ctaLink: "#curriculum"
  },
  {
    id: 6,
    image: "/images/slider/6.png",
    tagIcon: "🧸",
    tag: "Montessori & Sensory Zone",
    title: "Sensory Play & Dice Mats",
    subtitle: "Tactile Montessori learning, giant plush dice, alphabet mats, and shape sorters.",
    badgeColor: "orange",
    highlights: ["Giant Plush Dice", "Alphabet Soft Mat", "Safe Toddler Slides"],
    ctaLink: "#gallery"
  },
  {
    id: 7,
    image: "/images/slider/7.png",
    tagIcon: "🧩",
    tag: "Indoor Play & Sensory Learning",
    title: "Play Group & Activity Room",
    subtitle: "Soft colorful mats, wooden puzzle blocks, and interactive learning kits.",
    badgeColor: "purple",
    highlights: ["Sensory Blocks", "Group Play", "Motor Skills"],
    ctaLink: "#gallery"
  },
  {
    id: 8,
    image: "/images/slider/8.jpg",
    tagIcon: "📖",
    tag: "Storytelling & Library Nook",
    title: "Joyful Reading & Phonics Nook",
    subtitle: "Bilingual illustrated storybooks, cozy reading circles, and English-Hindi vocabulary practice.",
    badgeColor: "green",
    highlights: ["Vibrant Picture Books", "Cozy Reading Rugs", "Teacher Guided Reading"],
    ctaLink: "#curriculum"
  },
  {
    id: 9,
    image: "/images/slider/9.avif",
    tagIcon: "⚽️",
    tag: "Outdoor Play & Sports",
    title: "Lush Green Play Grounds",
    subtitle: "Safe green grass lawns, slides, swings, and active physical play for kids.",
    badgeColor: "coral",
    highlights: ["Green Lawn", "Safe Swings & Slides", "Morning Exercises"],
    ctaLink: "#gallery"
  }
];

export default function HeroBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex];

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
          <strong>100% Safe</strong>
          <small>CCTV & GPS Vans</small>
        </div>
      </div>

      <div className="slider-floating-badge badge-bottom-left">
        <span className="badge-icon">⭐</span>
        <div className="badge-text">
          <strong>1:10 Ratio</strong>
          <small>Individual Care</small>
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
          {HERO_SLIDES.map((slide, idx) => {
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
                    {slide.highlights.map((highlight, hIdx) => (
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
                      Explore Space ➜
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
            {HERO_SLIDES.map((_, idx) => (
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
        {HERO_SLIDES.map((slide, idx) => (
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
