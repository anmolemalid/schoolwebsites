"use client";

import { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { t } from "../lib/i18n";

export interface CarouselItem {
  id: string | number;
  image: string;
  title: string;
  tag?: string;
  desc?: string;
  category?: string;
}

export interface GenericCarouselProps {
  items: CarouselItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  subBadge?: string;
  actionLink?: {
    href: string;
    label: string;
  };
  aspectRatio?: string;
  itemWidth?: number;
  className?: string;
  showScrollHint?: boolean;
  hintText?: string;
  extraHeaderRight?: ReactNode;
}

export default function GenericCarousel({
  items,
  title,
  subtitle,
  badge,
  subBadge,
  actionLink,
  aspectRatio = "4/3",
  itemWidth = 320,
  className = "",
  showScrollHint = true,
  hintText,
  extraHeaderRight,
}: GenericCarouselProps) {
  const activeHintText = hintText || t.carousel.hintText;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activePhoto, setActivePhoto] = useState<CarouselItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        current.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll, items]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = Math.max(itemWidth + 20, 320);
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const currentIndex = activePhoto
    ? items.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const goToPrev = useCallback(() => {
    if (items.length === 0) return;
    if (currentIndex <= 0) {
      setActivePhoto(items[items.length - 1]);
    } else {
      setActivePhoto(items[currentIndex - 1]);
    }
  }, [currentIndex, items]);

  const goToNext = useCallback(() => {
    if (items.length === 0) return;
    if (currentIndex >= items.length - 1) {
      setActivePhoto(items[0]);
    } else {
      setActivePhoto(items[currentIndex + 1]);
    }
  }, [currentIndex, items]);

  // Lock body scroll and listen for keyboard controls (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!activePhoto) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activePhoto, goToPrev, goToNext]);

  if (!items || items.length === 0) {
    return null;
  }

  const hasHeader = Boolean(title || subtitle || badge || subBadge || actionLink || extraHeaderRight);

  return (
    <div className={`generic-carousel-wrapper ${className}`}>
      {/* Optional Top Header with Navigation Controls */}
      {hasHeader && (
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-3">
          <div>
            {(badge || subBadge) && (
              <div className="d-flex align-items-center gap-2 mb-2">
                {badge && (
                  <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small">
                    {badge}
                  </span>
                )}
                {subBadge && (
                  <span className="badge bg-warning text-dark fw-bold px-2 py-1 rounded-pill small">
                    {subBadge}
                  </span>
                )}
              </div>
            )}
            {title && (
              <h3
                className="fw-bold fs-4 text-dark mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {title}
              </h3>
            )}
            {subtitle && <p className="text-muted small mb-0">{subtitle}</p>}
          </div>

          {/* Action Buttons & Carousel Arrows */}
          <div className="d-flex align-items-center gap-2">
            {extraHeaderRight}

            {actionLink && (
              <Link
                href={actionLink.href}
                className="btn btn-outline-primary btn-sm rounded-pill fw-bold px-3 py-2 d-none d-md-inline-flex align-items-center gap-1"
              >
                <span>{actionLink.label}</span>
                <span>→</span>
              </Link>
            )}

            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`btn rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm ${
                canScrollLeft
                  ? "btn-navy-pill text-white"
                  : "btn-light text-muted border opacity-50"
              }`}
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: canScrollLeft ? "#004a90" : undefined,
                borderColor: canScrollLeft ? "rgba(255, 210, 0, 0.4)" : undefined,
                cursor: canScrollLeft ? "pointer" : "default",
              }}
              aria-label={t.carousel.scrollLeft}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`btn rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm ${
                canScrollRight
                  ? "btn-navy-pill text-white"
                  : "btn-light text-muted border opacity-50"
              }`}
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: canScrollRight ? "#004a90" : undefined,
                borderColor: canScrollRight ? "rgba(255, 210, 0, 0.4)" : undefined,
                cursor: canScrollRight ? "pointer" : "default",
              }}
              aria-label={t.carousel.scrollRight}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Horizontal Scrollable Carousel Track */}
      <div
        ref={scrollRef}
        className="tour-carousel-track"
        tabIndex={0}
        aria-label={title || "Photo Carousel"}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="tour-carousel-item"
            style={{ flex: `0 0 ${itemWidth}px`, width: `${itemWidth}px` }}
          >
            <div
              className="card-tour-photo rounded-4 overflow-hidden border shadow-sm h-100 bg-white cursor-pointer"
              onClick={() => setActivePhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePhoto(item);
                }
              }}
            >
              {/* Photo Area with Aspect Ratio & Tag */}
              <div
                className="position-relative overflow-hidden"
                style={{ aspectRatio }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100 object-fit-cover tour-img-hover"
                  loading="lazy"
                />
                {item.tag && (
                  <div className="tour-photo-pill">
                    <span>{item.tag}</span>
                  </div>
                )}

                {/* Click to Enlarge Magnifier Hint Icon */}
                <div
                  className="position-absolute top-0 end-0 m-2 p-1 rounded-circle bg-dark bg-opacity-60 text-white d-flex align-items-center justify-content-center shadow-sm"
                  style={{
                    width: "32px",
                    height: "32px",
                    backdropFilter: "blur(6px)",
                  }}
                  title={t.carousel.viewFullScreen}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </div>

              {/* Text Caption Area */}
              <div className="p-3">
                {item.category && (
                  <span
                    className="badge bg-light text-primary border small mb-2"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {item.category}
                  </span>
                )}
                <strong className="d-block text-dark small fw-bold mb-1">
                  {item.title}
                </strong>
                {item.desc && (
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.8rem", lineHeight: 1.5 }}
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Mobile Swipe / Expand Hint Bar */}
      {showScrollHint && (
        <div className="d-flex align-items-center justify-content-between mt-2 pt-1 text-muted small">
          <span style={{ fontSize: "0.78rem" }}>{activeHintText}</span>
          <span
            className="badge bg-light text-dark border px-2 py-1 rounded-pill"
            style={{ fontSize: "0.75rem" }}
          >
            {t.carousel.tapToEnlarge}
          </span>
        </div>
      )}

      {/* ===================================================================
          CINEMATIC FULL VIEWPORT LIGHTBOX MODAL (PORTALED DIRECTLY TO BODY)
          =================================================================== */}
      {mounted && activePhoto && typeof document !== "undefined"
        ? createPortal(
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 99999999,
                backgroundColor: "rgba(3, 10, 24, 0.97)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                userSelect: "none",
                overflow: "hidden",
              }}
              onClick={() => setActivePhoto(null)}
              role="dialog"
              aria-modal="true"
              aria-label={activePhoto.title}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const diffX = e.changedTouches[0].clientX - touchStartX.current;
                if (diffX > 50) {
                  goToPrev();
                } else if (diffX < -50) {
                  goToNext();
                }
                touchStartX.current = null;
              }}
            >
              {/* Floating Top Controls Header */}
              <div
                className="position-absolute top-0 start-0 end-0 p-3 p-md-4 d-flex align-items-center justify-content-between"
                style={{ zIndex: 10000001, pointerEvents: "none" }}
              >
                {/* Left Info Badges */}
                <div
                  className="d-flex align-items-center gap-2"
                  style={{ pointerEvents: "auto" }}
                >
                  {activePhoto.tag && (
                    <span
                      className="badge text-dark fw-bold px-3 py-2 rounded-pill shadow-sm"
                      style={{
                        fontSize: "0.85rem",
                        background:
                          "linear-gradient(135deg, #ffd200 0%, #ffaa00 100%)",
                        boxShadow: "0 4px 15px rgba(255, 210, 0, 0.35)",
                      }}
                    >
                      {activePhoto.tag}
                    </span>
                  )}
                  <span
                    className="badge text-white px-3 py-2 rounded-pill shadow-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {t.carousel.photoCounter
                      .replace("{current}", String(currentIndex + 1))
                      .replace("{total}", String(items.length))}
                  </span>
                </div>

                {/* Right Close Button */}
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="btn btn-warning rounded-pill fw-bold px-3 py-2 d-inline-flex align-items-center gap-2 shadow-lg"
                  style={{
                    fontSize: "0.92rem",
                    border: "2px solid #ffffff",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                    pointerEvents: "auto",
                    cursor: "pointer",
                  }}
                  aria-label={t.carousel.close}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>{t.carousel.close}</span>
                </button>
              </div>

              {/* Prev Photo Floating Button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="btn position-absolute start-0 top-50 translate-middle-y rounded-circle d-flex align-items-center justify-content-center shadow-lg ms-2 ms-md-4 text-white"
                  style={{
                    width: "56px",
                    height: "56px",
                    zIndex: 10000001,
                    backgroundColor: "rgba(7, 28, 62, 0.88)",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 210, 0, 0.75)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                    cursor: "pointer",
                  }}
                  title={t.carousel.prev}
                  aria-label={t.carousel.prev}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* Central Full Viewport Hero Image Container */}
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-5"
                onClick={() => setActivePhoto(null)}
              >
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-4 shadow-lg d-block"
                  style={{
                    maxWidth: "96vw",
                    maxHeight: "86vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow:
                      "0 25px 70px rgba(0, 0, 0, 0.85), 0 0 50px rgba(0, 74, 144, 0.4)",
                    animation: "fadeIn 0.25s ease-out",
                  }}
                />
              </div>

              {/* Next Photo Floating Button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="btn position-absolute end-0 top-50 translate-middle-y rounded-circle d-flex align-items-center justify-content-center shadow-lg me-2 me-md-4 text-white"
                  style={{
                    width: "56px",
                    height: "56px",
                    zIndex: 10000001,
                    backgroundColor: "rgba(7, 28, 62, 0.88)",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 210, 0, 0.75)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                    cursor: "pointer",
                  }}
                  title={t.carousel.next}
                  aria-label={t.carousel.next}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}

              {/* Bottom Floating Glassmorphic Caption Pill */}
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x mb-3 mb-md-4 px-3 py-2 rounded-4 text-center text-white shadow-lg"
                style={{
                  maxWidth: "760px",
                  width: "calc(100% - 2rem)",
                  backgroundColor: "rgba(7, 28, 62, 0.92)",
                  backdropFilter: "blur(16px)",
                  border: "1.5px solid rgba(255, 210, 0, 0.55)",
                  zIndex: 10000001,
                  pointerEvents: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="d-flex align-items-center justify-content-center gap-2 mb-1 flex-wrap">
                  {activePhoto.category && (
                    <span
                      className="badge bg-warning text-dark fw-bold px-2 py-1 rounded-pill small"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {activePhoto.category}
                    </span>
                  )}
                  <h5 className="fw-bold text-white mb-0 fs-6">
                    {activePhoto.title}
                  </h5>
                </div>
                {activePhoto.desc && (
                  <p
                    className="text-white text-opacity-85 small mb-0"
                    style={{ fontSize: "0.82rem", lineHeight: 1.4 }}
                  >
                    {activePhoto.desc}
                  </p>
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
