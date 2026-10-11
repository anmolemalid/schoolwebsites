"use client";

import { useState } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";

export default function GalleryPage() {
  const galleryItems = t.gallery.campusLife.items;
  const campusHighlights = t.gallery.campusExperience.highlights;

  const [filter, setFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = galleryItems.filter(
    (item: any) => filter === "all" || item.category === filter
  );

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
                className="d-inline-flex align-items-center flex-wrap gap-2 px-3 py-2 rounded-pill shadow-lg"
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
                <span className="text-white text-opacity-30 d-none d-sm-inline mx-1">|</span>

                {/* Interactive Section Jump Chips */}
                <div className="d-none d-sm-inline-flex align-items-center gap-1">
                  <a
                    href="#photo-gallery"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🖼️</span>
                    <span>Photos & Videos</span>
                  </a>

                  <a
                    href="#campus-life"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>✨</span>
                    <span>Campus Life</span>
                  </a>

                  <a
                    href="#book-tour"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎒</span>
                    <span>Book Tour</span>
                  </a>
                </div>
              </nav>

              {/* Moments to Remember Badge on Right of Banner */}
              <div className="d-none d-lg-block">
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
                  <span>Moments to Remember</span>
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
                  onClick={() => setLightboxImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 45, 98, 0.95) 0%, rgba(0, 45, 98, 0.4) 70%, transparent 100%)",
                    }}
                  >
                    <h5 className="fw-bold text-white mb-1 fs-6">{item.title}</h5>
                    <p className="small text-white text-opacity-75 mb-1" style={{ fontSize: "0.8rem", lineHeight: 1.3 }}>
                      {item.desc}
                    </p>
                    <span className="badge bg-warning text-dark rounded-pill px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      {t.gallery.campusLife.tapToView}
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 9999,
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="position-relative bg-white rounded-4 p-2 shadow-lg"
            style={{ maxWidth: "900px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 p-2 bg-white rounded-circle shadow"
              aria-label="Close"
              onClick={() => setLightboxImage(null)}
            ></button>
            <img
              src={lightboxImage}
              alt="Expanded Preview"
              className="w-100 rounded-3"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
