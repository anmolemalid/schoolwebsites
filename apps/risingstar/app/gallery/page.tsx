"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { t } from "../lib/i18n";

export default function GalleryPage() {
  const galleryItems = t.gallery.campusLife.items;
  const campusHighlights = t.gallery.campusExperience.highlights;

  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const featuredVideosList = (t.gallery as any).featuredVideos?.videos || [];
  const [selectedFeaturedId, setSelectedFeaturedId] = useState<string>("jdQgN4pCCoE");
  const [autoPlayVideo, setAutoPlayVideo] = useState<boolean>(false);
  const [playlistFilter, setPlaylistFilter] = useState<string>("all");
  const activeFeaturedVideo =
    featuredVideosList.find((v: any) => v.id === selectedFeaturedId) ||
    featuredVideosList[0] ||
    {};

  const displayedPlaylist = featuredVideosList.filter((v: any) =>
    playlistFilter === "all" ? true : v.type === playlistFilter
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = galleryItems.filter(
    (item: any) =>
      filter === "all" ||
      (filter === "videos" ? item.isVideo : item.category === filter)
  );

  const currentIndex = activeItem
    ? filtered.findIndex((it: any) => it.title === activeItem.title && it.image === activeItem.image)
    : -1;

  const goToPrev = useCallback(() => {
    if (filtered.length === 0) return;
    if (currentIndex <= 0) {
      setActiveItem(filtered[filtered.length - 1]);
    } else {
      setActiveItem(filtered[currentIndex - 1]);
    }
  }, [currentIndex, filtered]);

  const goToNext = useCallback(() => {
    if (filtered.length === 0) return;
    if (currentIndex >= filtered.length - 1) {
      setActiveItem(filtered[0]);
    } else {
      setActiveItem(filtered[currentIndex + 1]);
    }
  }, [currentIndex, filtered]);

  useEffect(() => {
    if (!activeItem) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
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
  }, [activeItem, goToPrev, goToNext]);

  return (
    <div className="gallery-page">
      {/* Full Width Gallery Hero Banner Image with Overlay Breadcrumb */}
      <section className="position-relative w-100 overflow-hidden bg-white border-bottom no-print hero-banner-slider-section">
        {/* Interactive Floating Breadcrumb Pill on Banner Image */}
        <div
          className="position-absolute top-0 start-0 w-100 px-2 px-md-3"
          style={{ zIndex: 10, paddingTop: "1rem", paddingBottom: "0.5rem" }}
        >
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <nav
                aria-label="breadcrumb"
                className="d-inline-flex align-items-center flex-wrap gap-2 px-3 py-2 rounded-pill shadow-lg banner-breadcrumb-pill"
                style={{
                  backgroundColor: "rgba(7, 28, 62, 0.90)",
                  backdropFilter: "blur(12px)",
                  border: "1.5px solid rgba(255, 210, 0, 0.6)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35), 0 0 16px rgba(255, 210, 0, 0.25)",
                }}
              >
                {/* Home Link with Interactive Hover */}
                <Link
                  href="/"
                  className="text-white text-decoration-none fw-bold d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill banner-breadcrumb-link"
                >
                  <span>🏠</span>
                  <span>{t.nav.home}</span>
                </Link>

                <span className="text-warning fw-bold" style={{ fontSize: "0.85rem" }}>▸</span>

                {/* Current Page Active Badge */}
                <span
                  className="badge text-dark fw-bold px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1 shadow-sm"
                  style={{
                    fontSize: "0.85rem",
                    background: "linear-gradient(135deg, #ffd200 0%, #ffaa00 100%)",
                    border: "1px solid #ffffff",
                  }}
                >
                  <span>📸</span>
                  <span>{t.nav.gallery}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center gap-1 banner-breadcrumb-chips">
                  <a
                    href="#photo-gallery"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🖼️</span>
                    <span>{t.gallery.breadcrumbChips.photoGallery}</span>
                  </a>

                  <a
                    href="#campus-life"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>✨</span>
                    <span>{t.gallery.breadcrumbChips.campusLife}</span>
                  </a>

                  <a
                    href="#featured-video"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎬</span>
                    <span>{t.gallery.breadcrumbChips.videosPrefix} ({featuredVideosList.length})</span>
                  </a>

                  <a
                    href="#book-tour"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎒</span>
                    <span>{t.gallery.breadcrumbChips.bookTour}</span>
                  </a>
                </div>
              </nav>

              {/* Moments to Remember Badge on Right of Banner (Shown on >= 1024px) */}
              <div className="banner-breadcrumb-right-badge">
                <span
                  className="badge px-3 py-2 rounded-pill fw-bold text-white shadow-sm d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "rgba(0, 74, 144, 0.88)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 210, 0, 0.5)",
                    fontSize: "0.85rem",
                  }}
                >
                  <span className="spinner-grow spinner-grow-sm text-warning" role="status" style={{ width: "0.6rem", height: "0.6rem" }}></span>
                  <span>{t.gallery.breadcrumbChips.momentsToRemember}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/gallery_banner_mobile.jpg"
          />
          <img
            src="/assets/gallery_banner.jpg"
            alt="Rising Kids School Moments to Remember - Photos & Videos"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* Main Gallery Section */}
      <section id="photo-gallery" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.gallery.campusLife.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.gallery.campusLife.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              {t.gallery.campusLife.subheading}
            </p>

            {/* Category Filter Pills */}
            <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "all" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                {t.gallery.campusLife.filterLabels.all} ({galleryItems.length})
              </button>
              <button
                onClick={() => setFilter("classroom")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "classroom" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                {t.gallery.campusLife.filterLabels.classroom}
              </button>
              <button
                onClick={() => setFilter("activities")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "activities" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                {t.gallery.campusLife.filterLabels.activities}
              </button>
              <button
                onClick={() => setFilter("indoor")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "indoor" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                {t.gallery.campusLife.filterLabels.indoor}
              </button>
              <button
                onClick={() => setFilter("outdoor")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "outdoor" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                {t.gallery.campusLife.filterLabels.outdoor}
              </button>
              {(t.gallery.campusLife.filterLabels as any)?.videos && (
                <button
                  onClick={() => setFilter("videos")}
                  className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                    filter === "videos" ? "btn-danger shadow" : "btn-light border text-dark"
                  }`}
                >
                  {(t.gallery.campusLife.filterLabels as any).videos} ({galleryItems.filter((i: any) => i.isVideo).length})
                </button>
              )}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="row g-4">
            {filtered.map((item: any) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div
                  className="rounded-4 overflow-hidden shadow-sm border position-relative"
                  style={{
                    height: "280px",
                    cursor: "pointer",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onClick={() => setActiveItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />

                  {/* YouTube Video Badge */}
                  {item.isVideo && (
                    <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 2 }}>
                      <span
                        className="badge rounded-pill px-2.5 py-1.5 fw-bold d-inline-flex align-items-center gap-1 shadow"
                        style={{
                          backgroundColor: "#ff0000",
                          color: "#ffffff",
                          fontSize: "0.75rem",
                          letterSpacing: "0.3px",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#ffffff">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>{item.isShort ? "⚡ Short" : "YouTube Video"}</span>
                      </span>
                    </div>
                  )}

                  {/* Play Button Overlay for Videos */}
                  {item.isVideo && (
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
                        style={{
                          width: "56px",
                          height: "56px",
                          backgroundColor: "rgba(255, 0, 0, 0.92)",
                          border: "2.5px solid #ffffff",
                          boxShadow: "0 8px 30px rgba(255, 0, 0, 0.7), 0 0 15px rgba(0, 0, 0, 0.4)",
                          transition: "transform 0.25s ease",
                        }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" style={{ marginLeft: "3px" }}>
                          <polygon points="6 4 20 12 6 20 6 4" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 45, 98, 0.95) 0%, rgba(0, 45, 98, 0.4) 70%, transparent 100%)",
                      zIndex: 2,
                    }}
                  >
                    <h5 className="fw-bold text-white mb-1 fs-6">{item.title}</h5>
                    <p className="small text-white text-opacity-75 mb-1" style={{ fontSize: "0.8rem", lineHeight: 1.3 }}>
                      {item.desc}
                    </p>
                    <span
                      className={`badge ${item.isVideo ? "bg-danger text-white" : "bg-warning text-dark"} rounded-pill px-2.5 py-1`}
                      style={{ fontSize: "0.72rem" }}
                    >
                      {item.isVideo ? (item.isShort ? "⚡ Watch Short" : "▶ Watch Video") : t.gallery.campusLife.tapToView}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights on Warm Cream */}
      <section id="campus-life" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.gallery.campusExperience.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.gallery.campusExperience.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              {t.gallery.campusExperience.subheading}
            </p>
          </div>

          <div className="row g-4">
            {campusHighlights.map((hl: any, idx: number) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100 text-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(0, 74, 144, 0.08)",
                      border: "2px solid rgba(0, 74, 144, 0.15)",
                      fontSize: "1.75rem",
                    }}
                  >
                    {hl.icon}
                  </div>
                  <h4 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {hl.title}
                  </h4>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.5 }}>
                    {hl.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In-Page Video Section */}
      <section id="featured-video" className="py-5 border-top border-bottom" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-4">
            <span
              className="badge px-3 py-1.5 rounded-pill fw-bold small mb-2 d-inline-flex align-items-center gap-1 shadow-sm"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.08)",
                border: "1.5px solid rgba(255, 0, 0, 0.35)",
                color: "#ff0000",
                fontSize: "0.82rem",
                letterSpacing: "0.5px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>{(t.gallery as any).featuredVideos?.tag}</span>
            </span>
            <h2
              className="display-6 fw-bold mb-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#071c3e",
                letterSpacing: "-0.5px",
              }}
            >
              {(t.gallery as any).featuredVideos?.heading}
            </h2>
            <p
              className="col-md-8 mx-auto mb-0 fs-5"
              style={{
                color: "#475569",
                lineHeight: 1.6,
              }}
            >
              {(t.gallery as any).featuredVideos?.subheading}
            </p>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 col-xl-9">
              {/* Main Hero Video Player Card */}
              <div
                className="rounded-4 overflow-hidden p-2 p-md-3 bg-white"
                style={{
                  border: "2.5px solid #ffd200",
                  boxShadow: "0 20px 50px rgba(0, 45, 98, 0.12)",
                }}
              >
                {/* 16:9 Responsive Video Frame */}
                <div
                  className="rounded-3 overflow-hidden position-relative w-100 bg-black shadow-sm"
                  style={{
                    aspectRatio: "16 / 9",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <iframe
                    key={activeFeaturedVideo.id}
                    className="w-100 h-100 border-0"
                    src={`https://www.youtube.com/embed/${activeFeaturedVideo.id}?autoplay=${autoPlayVideo ? 1 : 0}&rel=0`}
                    title={activeFeaturedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* Video Info & Channel Bar */}
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 mt-1">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="badge rounded-pill px-2.5 py-1 text-white fw-bold small d-inline-flex align-items-center gap-1 shadow-sm"
                        style={{ backgroundColor: "#ff0000" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>{activeFeaturedVideo.tag}</span>
                      </span>
                      <h4
                        className="fw-bold mb-0 fs-5"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#071c3e",
                        }}
                      >
                        {activeFeaturedVideo.title}
                      </h4>
                    </div>
                    <p
                      className="small mb-0"
                      style={{
                        maxWidth: "620px",
                        lineHeight: 1.5,
                        color: "#475569",
                        fontSize: "0.88rem",
                      }}
                    >
                      {activeFeaturedVideo.desc}
                    </p>
                  </div>

                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <a
                      href={activeFeaturedVideo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-danger rounded-pill fw-bold px-3 py-2 d-inline-flex align-items-center gap-2 shadow-sm text-decoration-none"
                      style={{
                        backgroundColor: "#ff0000",
                        color: "#ffffff",
                        border: "2px solid #ff0000",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#ffffff">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span style={{ color: "#ffffff", fontWeight: 700 }}>
                        {(t.gallery as any).featuredVideos?.watchOnYoutube}
                      </span>
                      <span style={{ color: "#ffffff" }}>↗</span>
                    </a>

                    <a
                      href="https://www.youtube.com/@RisingKids-rl8xe"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm rounded-pill fw-bold px-3 py-2 text-decoration-none shadow-sm d-inline-flex align-items-center gap-2"
                      style={{
                        backgroundColor: "#071c3e",
                        color: "#ffffff",
                        border: "2px solid #071c3e",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffd200">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span style={{ color: "#ffffff", fontWeight: 700 }}>
                        {(t.gallery as any).featuredVideos?.channelBadge}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Video Playlist Hub with Filter Pills */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <h5 className="fw-bold mb-0 text-dark d-flex align-items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span>📺</span>
                  <span>{(t.gallery as any).featuredVideos?.libraryTitle || "School Video Library"} ({featuredVideosList.length})</span>
                </h5>

                {/* Filter Pills */}
                <div className="d-flex align-items-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => setPlaylistFilter("all")}
                    className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${
                      playlistFilter === "all" ? "btn-danger shadow-sm text-white" : "btn-light border text-dark"
                    }`}
                    style={{ fontSize: "0.8rem" }}
                  >
                    {(t.gallery as any).featuredVideos?.filters?.all || "All"} ({featuredVideosList.length})
                  </button>
                  <button
                    onClick={() => setPlaylistFilter("celebrations")}
                    className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${
                      playlistFilter === "celebrations" ? "btn-danger shadow-sm text-white" : "btn-light border text-dark"
                    }`}
                    style={{ fontSize: "0.8rem" }}
                  >
                    {(t.gallery as any).featuredVideos?.filters?.celebrations || "Events & Stage 🎭"} ({featuredVideosList.filter((v: any) => v.type === "celebrations").length})
                  </button>
                  <button
                    onClick={() => setPlaylistFilter("shorts")}
                    className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${
                      playlistFilter === "shorts" ? "btn-danger shadow-sm text-white" : "btn-light border text-dark"
                    }`}
                    style={{ fontSize: "0.8rem" }}
                  >
                    {(t.gallery as any).featuredVideos?.filters?.shorts || "Activity Shorts ⚡"} ({featuredVideosList.filter((v: any) => v.type === "shorts").length})
                  </button>
                </div>
              </div>

              <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                {displayedPlaylist.map((video: any) => {
                  const isPlaying = video.id === selectedFeaturedId;
                  return (
                    <div key={video.id} className="col">
                      <div
                        onClick={() => {
                          setSelectedFeaturedId(video.id);
                          setAutoPlayVideo(true);
                        }}
                        className={`h-100 rounded-3 overflow-hidden bg-white border position-relative transition-all ${
                          isPlaying ? "shadow" : "shadow-sm"
                        }`}
                        style={{
                          cursor: "pointer",
                          borderColor: isPlaying ? "#ffd200" : "#e2e8f0",
                          borderWidth: isPlaying ? "2.5px" : "1px",
                          backgroundColor: isPlaying ? "#fffdf5" : "#ffffff",
                          transform: isPlaying ? "translateY(-3px)" : "none",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {/* Video Thumbnail with Aspect 16/9 */}
                        <div className="position-relative w-100" style={{ aspectRatio: "16 / 9" }}>
                          <img
                            src={video.thumb}
                            alt={video.title}
                            className="w-100 h-100 object-fit-cover"
                          />
                          {/* Play / Now Playing Status Badge */}
                          <div
                            className="position-absolute top-0 start-0 m-1.5"
                            style={{ zIndex: 2 }}
                          >
                            {isPlaying ? (
                              <span
                                className="badge rounded-pill px-2 py-1 fw-bold text-white shadow-sm"
                                style={{ backgroundColor: "#ff0000", fontSize: "0.68rem" }}
                              >
                                {(t.gallery as any).featuredVideos?.nowPlaying || "Playing ▶"}
                              </span>
                            ) : (
                              <span
                                className="badge rounded-pill px-2 py-0.5 fw-bold text-dark shadow-sm"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", fontSize: "0.68rem" }}
                              >
                                {video.tag}
                              </span>
                            )}
                          </div>

                          {/* Hover Play Icon Overlay */}
                          {!isPlaying && (
                            <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 2 }}>
                              <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                  width: "36px",
                                  height: "36px",
                                  backgroundColor: "rgba(0, 0, 0, 0.65)",
                                  color: "#ffffff",
                                }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" style={{ marginLeft: "2px" }}>
                                  <polygon points="6 4 20 12 6 20 6 4" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Title & Tag */}
                        <div className="p-2.5">
                          <h6
                            className="fw-bold mb-1 line-clamp-2"
                            style={{
                              fontSize: "0.82rem",
                              lineHeight: 1.35,
                              color: isPlaying ? "#071c3e" : "#334155",
                            }}
                          >
                            {video.title}
                          </h6>
                          <span
                            className="text-muted d-block small"
                            style={{ fontSize: "0.72rem" }}
                          >
                            {isPlaying ? ((t.gallery as any).featuredVideos?.watchingNow || "▶ Watching Now") : ((t.gallery as any).featuredVideos?.tapToWatch || "Tap to Watch")}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Want to Visit? Action Banner */}
      <section id="book-tour" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="curriculum-cta-card p-4 p-md-5 text-white">
            {/* Ambient Background Glow Elements */}
            <div className="curriculum-cta-glow-1"></div>
            <div className="curriculum-cta-glow-2"></div>

            <div className="position-relative z-1">
              <div className="row align-items-center g-4">
                {/* Left Content Column */}
                <div className="col-lg-7 text-center text-lg-start">
                  {/* Top Badge */}
                  <div
                    className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3"
                    style={{
                      backgroundColor: "rgba(255, 210, 0, 0.15)",
                      border: "1px solid rgba(255, 210, 0, 0.5)",
                      color: "#ffd200",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    <span>✨</span>
                    <span>SEE THE JOY OF LEARNING IN PERSON</span>
                  </div>

                  {/* Heading */}
                  <h2 className="display-6 fw-bold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.gallery.actionBanner.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="lead text-white text-opacity-90 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px" }}>
                    {t.gallery.actionBanner.subtitle}
                  </p>

                  {/* Trust / Benefit Chips */}
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                    <span className="cta-feature-chip">
                      <span>🎨</span>
                      <span>Art & Creative Work</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🎭</span>
                      <span>Annual Day Celebrations</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🏆</span>
                      <span>Sports & Activity Days</span>
                    </span>
                  </div>
                </div>

                {/* Right Action Hub Column */}
                <div className="col-lg-5">
                  <div
                    className="p-4 rounded-4 shadow-lg text-center"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1.5px solid rgba(255, 255, 255, 0.18)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <div className="small text-warning fw-bold text-uppercase mb-2" style={{ letterSpacing: "1px" }}>
                      Experience Campus Life
                    </div>
                    <div className="text-white fw-bold fs-5 mb-3">
                      Schedule a Friendly Guided Tour
                    </div>

                    {/* Primary & Secondary Action Buttons */}
                    <div className="d-grid gap-2 mb-3">
                      <Link
                        href="/contact"
                        className="btn cta-btn-gold btn-lg rounded-pill text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem" }}
                      >
                        <span>🏫 {t.gallery.actionBanner.tourButton}</span>
                        <span
                          className="rounded-circle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "22px", height: "22px", backgroundColor: "rgba(0,0,0,0.12)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </Link>

                      <Link
                        href="/admissions"
                        className="btn btn-outline-light btn-lg rounded-pill fw-bold text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem", borderWidth: "1.5px" }}
                      >
                        <span>🎒 {t.gallery.actionBanner.admissionsButton}</span>
                        <span
                          className="rounded-circle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "22px", height: "22px", backgroundColor: "rgba(255,255,255,0.15)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </Link>
                    </div>

                    {/* Instant Direct Links: Phone & WhatsApp */}
                    <div className="pt-2 border-top border-white border-opacity-15 d-flex flex-wrap align-items-center justify-content-center gap-2">
                      <a
                        href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`}
                        className="cta-phone-pill"
                        title="Call School Helpline"
                      >
                        <span className="spinner-grow spinner-grow-sm text-success" role="status" style={{ width: "0.5rem", height: "0.5rem" }}></span>
                        <span>{t.school.contacts.phonePrimary}</span>
                      </a>

                      <a
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I saw the school gallery and would like to schedule a campus tour for my child.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-whatsapp-pill"
                        title="Chat on WhatsApp"
                      >
                        <span>💬 WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Full Viewport Lightbox Modal (Portaled directly to body) */}
      {mounted && activeItem && typeof document !== "undefined"
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
              onClick={() => setActiveItem(null)}
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.title}
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
                  <span
                    className="badge text-dark fw-bold px-3 py-2 rounded-pill shadow-sm"
                    style={{
                      fontSize: "0.85rem",
                      background: "linear-gradient(135deg, #ffd200 0%, #ffaa00 100%)",
                      boxShadow: "0 4px 15px rgba(255, 210, 0, 0.35)",
                    }}
                  >
                    📸 Campus Life
                  </span>
                  <span
                    className="badge text-white px-3 py-2 rounded-pill shadow-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {(t.gallery as any).lightbox?.photoOf || "Photo"} {currentIndex + 1} {(t.gallery as any).lightbox?.of || "of"} {filtered.length}
                  </span>
                </div>

                {/* Right Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="btn btn-warning rounded-pill fw-bold px-3 py-2 d-inline-flex align-items-center gap-2 shadow-lg"
                  style={{
                    fontSize: "0.92rem",
                    border: "2px solid #ffffff",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                    pointerEvents: "auto",
                    cursor: "pointer",
                  }}
                  aria-label="Close Fullscreen View"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>{(t.gallery as any).lightbox?.close || "Close"}</span>
                </button>
              </div>

              {/* Prev Photo Floating Button */}
              {filtered.length > 1 && (
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
                  title="Previous photo (Left Arrow)"
                  aria-label="Previous photo"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* Central Full Viewport Hero Image / Video Container */}
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-5"
                onClick={() => setActiveItem(null)}
              >
                {activeItem.isVideo && activeItem.youtubeId ? (
                  <div
                    className="w-100 d-flex flex-column align-items-center justify-content-center"
                    style={{
                      maxWidth: activeItem.isShort ? "400px" : "940px",
                      zIndex: 10000002,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="w-100 rounded-4 overflow-hidden shadow-lg position-relative"
                      style={{
                        aspectRatio: activeItem.isShort ? "9 / 16" : "16 / 9",
                        maxHeight: activeItem.isShort ? "70vh" : "auto",
                        border: "2px solid rgba(255, 210, 0, 0.65)",
                        boxShadow: "0 25px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(255, 0, 0, 0.4)",
                        backgroundColor: "#000000",
                      }}
                    >
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${activeItem.youtubeId}?autoplay=1&rel=0`}
                        title={activeItem.title}
                        className="w-100 h-100 border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-4 shadow-lg d-block"
                    style={{
                      maxWidth: "96vw",
                      maxHeight: "86vh",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 25px 70px rgba(0, 0, 0, 0.85), 0 0 50px rgba(0, 74, 144, 0.4)",
                      animation: "fadeIn 0.25s ease-out",
                    }}
                  />
                )}
              </div>

              {/* Next Photo Floating Button */}
              {filtered.length > 1 && (
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
                  title="Next photo (Right Arrow)"
                  aria-label="Next photo"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                  {activeItem.isVideo && (
                    <span className="badge bg-danger text-white rounded-pill px-2.5 py-0.5 small fw-bold">
                      {activeItem.isShort ? ((t.gallery as any).lightbox?.youtubeShort || "⚡ YouTube Short") : ((t.gallery as any).lightbox?.youtubeVideo || "🎬 YouTube Video")}
                    </span>
                  )}
                  <h5 className="fw-bold text-white mb-0 fs-6">{activeItem.title}</h5>
                </div>
                <p className="text-white text-opacity-85 small mb-1" style={{ fontSize: "0.82rem", lineHeight: 1.4 }}>
                  {activeItem.desc}
                </p>
                {activeItem.videoUrl && (
                  <a
                    href={activeItem.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-danger rounded-pill fw-bold d-inline-flex align-items-center gap-1.5 mt-1 px-3 py-1 text-decoration-none shadow-sm"
                    style={{ fontSize: "0.78rem" }}
                  >
                    <span>▶</span>
                    <span>{activeItem.isShort ? ((t.gallery as any).lightbox?.watchOnShorts || "Watch on YouTube Shorts") : ((t.gallery as any).lightbox?.watchOnYouTube || "Watch on YouTube")}</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
