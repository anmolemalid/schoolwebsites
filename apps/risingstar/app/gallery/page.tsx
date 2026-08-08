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
      {/* Royal Blue Hero Banner */}
      <section className="page-blue-banner">
        <div className="container position-relative z-2">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-8 text-center text-lg-start">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2" style={{ fontSize: "0.88rem" }}>
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-white text-opacity-75 text-decoration-none">
                      {t.nav.home}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                    {t.nav.gallery}
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">{t.gallery.banner.kicker}</div>
              <h1 className="page-blue-banner-title">{t.gallery.banner.title}</h1>
              <p className="page-blue-banner-subtitle mb-3">
                {t.gallery.banner.subtitle}
              </p>

              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill">
                  {t.about.franchiseBadge}
                </span>
                <span className="badge bg-white text-primary fw-bold px-3 py-2 rounded-pill">
                  {t.about.locationBadge}
                </span>
              </div>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-25 shadow-sm text-center text-white d-inline-block w-100" style={{ maxWidth: "320px" }}>
                <div className="fw-bold fs-5 text-warning mb-1">{t.gallery.heroBox.title}</div>
                <div className="small mb-3 text-white text-opacity-90">{t.gallery.heroBox.description}</div>
                <Link href="/contact" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>{t.gallery.heroBox.button}</span>
                  <span className="rounded-circle d-inline-flex align-items-center justify-content-center text-dark" style={{ width: "20px", height: "20px", backgroundColor: "rgba(0,0,0,0.1)", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
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
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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
                  <div className="fs-1 mb-2">{hl.icon}</div>
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
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5 rounded-4 text-white text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 shadow-sm"
            style={{ backgroundColor: "#004a90", border: "2px solid #ffd200" }}
          >
            <div>
              <h2 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.gallery.actionBanner.title}
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                {t.gallery.actionBanner.subtitle}
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                {t.gallery.actionBanner.tourButton}
              </Link>
              <Link
                href="/admissions"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <span>{t.gallery.actionBanner.admissionsButton}</span>
                <span className="rounded-circle d-inline-flex align-items-center justify-content-center text-white" style={{ width: "20px", height: "20px", backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </Link>
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
