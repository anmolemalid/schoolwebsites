import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";
import GenericCarousel from "../components/GenericCarousel";
import {
  educationalTourPhotos,
  picnicPhotos,
  annualDayPhotos,
  sportsDayPhotos,
  olympiadPhotos,
  csrRalliesPhotos,
} from "../data/eventsCarouselData";

export const metadata: Metadata = {
  title: t.meta.pages.events.title,
  description: t.meta.pages.events.description,
};

export default function EventsPage() {
  const eventBenefits = t.events.whyEvents.benefits;

  return (
    <div className="events-page">
      {/* Full Width Events Hero Banner Image with Overlay Breadcrumb */}
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
                  <span>🎉</span>
                  <span>{t.nav.events}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center flex-wrap gap-1 banner-breadcrumb-chips">
                  <a
                    href="#upcoming-events"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📅</span>
                    <span>Upcoming</span>
                  </a>

                  <a
                    href="#educational-tours"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🗺️</span>
                    <span>Tours</span>
                  </a>

                  <a
                    href="#picnics"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🧺</span>
                    <span>Picnics</span>
                  </a>

                  <a
                    href="#annual-day"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎭</span>
                    <span>Annual Day</span>
                  </a>

                  <a
                    href="#sports-day"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🏃</span>
                    <span>Sports Day</span>
                  </a>

                  <a
                    href="#olympiad"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🧠</span>
                    <span>Olympiad</span>
                  </a>

                  <a
                    href="#csr-rallies"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🌱</span>
                    <span>CSR Rallies</span>
                  </a>
                </div>
              </nav>

              {/* Annual Events Badge on Right of Banner (Shown on >= 1024px) */}
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
                  <span>Co-Curricular Excellence</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Events Banner: Mobile Portrait vs Desktop Wide Banner */}
        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/events_banner_mobile.jpg"
          />
          <img
            src="/assets/events_banner.jpg"
            alt="Rising Kids School Events - Educational Tours, Picnics, Annual Day, Sports Day, Olympiad, CSR Rallies"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* 6 Core Events Quick Matrix Strip */}
      <section className="py-4 border-bottom" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              CO-CURRICULAR CALENDAR
            </span>
            <h2 className="fw-bold fs-3 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our 6 Signature Event Pillars
            </h2>
            <p className="text-muted small col-md-7 mx-auto mb-0">
              At Rising Kids School, experiential learning and joyous celebrations shape confident, empathetic, and resilient future leaders.
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {/* 1. Educational Tours */}
            <div className="col-6 col-md-4 col-lg-2">
              <a href="#educational-tours" className="text-decoration-none">
                <div
                  className="p-3 bg-white rounded-4 text-center h-100 shadow-sm event-pillar-card d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                  style={{ borderTop: "4px solid #0284c7" }}
                >
                  <div
                    className="event-pillar-icon-box d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "62px",
                      height: "62px",
                      background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                      border: "2px solid rgba(2, 132, 199, 0.4)",
                      boxShadow: "0 8px 18px rgba(2, 132, 199, 0.22)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" fill="#bae6fd" stroke="#0284c7" />
                      <line x1="9" y1="3" x2="9" y2="18" stroke="#004a90" />
                      <line x1="15" y1="6" x2="15" y2="21" stroke="#004a90" />
                      <circle cx="15" cy="11" r="3" fill="#ffd200" stroke="#b45309" strokeWidth="1.5" />
                      <circle cx="15" cy="11" r="1" fill="#b45309" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <strong className="d-block text-dark small fw-bold mb-1">Educational Tours</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#e0f2fe", color: "#0369a1", fontSize: "0.72rem" }}>
                      Heritage & Visits
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* 2. Picnics */}
            <div className="col-6 col-md-4 col-lg-2">
              <a href="#picnics" className="text-decoration-none">
                <div
                  className="p-3 bg-white rounded-4 text-center h-100 shadow-sm event-pillar-card d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                  style={{ borderTop: "4px solid #16a34a" }}
                >
                  <div
                    className="event-pillar-icon-box d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "62px",
                      height: "62px",
                      background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
                      border: "2px solid rgba(22, 163, 74, 0.4)",
                      boxShadow: "0 8px 18px rgba(22, 163, 74, 0.22)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 11h16l-1.5 9a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 11z" fill="#d1fae5" stroke="#16a34a" />
                      <path d="M4 11l4-4h8l4 4" stroke="#16a34a" />
                      <path d="M12 7V3" stroke="#15803d" />
                      <path d="M9 3h6" stroke="#15803d" />
                      <line x1="4" y1="15" x2="20" y2="15" stroke="#15803d" strokeDasharray="2 2" />
                      <circle cx="12" cy="15" r="2" fill="#ffd200" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <strong className="d-block text-dark small fw-bold mb-1">Picnics</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#dcfce7", color: "#15803d", fontSize: "0.72rem" }}>
                      Outdoor Joy
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* 3. Annual Day */}
            <div className="col-6 col-md-4 col-lg-2">
              <a href="#annual-day" className="text-decoration-none">
                <div
                  className="p-3 bg-white rounded-4 text-center h-100 shadow-sm event-pillar-card d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                  style={{ borderTop: "4px solid #e11d48" }}
                >
                  <div
                    className="event-pillar-icon-box d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "62px",
                      height: "62px",
                      background: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
                      border: "2px solid rgba(225, 29, 72, 0.4)",
                      boxShadow: "0 8px 18px rgba(225, 29, 72, 0.22)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10s3-6 10-6 10 6 10 6-3 10-10 10-10-10-10-10z" fill="#ffe4e6" stroke="#e11d48" />
                      <circle cx="8" cy="10" r="1.5" fill="#e11d48" stroke="none" />
                      <circle cx="16" cy="10" r="1.5" fill="#e11d48" stroke="none" />
                      <path d="M8.5 14.5c1.5 1.5 5.5 1.5 7 0" stroke="#e11d48" />
                      <polygon points="12 2 13.5 5 17 5.5 14.5 8 15 11.5 12 10 9 11.5 9.5 8 7 5.5 10.5 5 12 2" fill="#ffd200" stroke="#d97706" strokeWidth="1" />
                    </svg>
                  </div>
                  <div>
                    <strong className="d-block text-dark small fw-bold mb-1">Annual Day</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#ffe4e6", color: "#be123c", fontSize: "0.72rem" }}>
                      100% Stage Play
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* 4. Sports Day */}
            <div className="col-6 col-md-4 col-lg-2">
              <a href="#sports-day" className="text-decoration-none">
                <div
                  className="p-3 bg-white rounded-4 text-center h-100 shadow-sm event-pillar-card d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                  style={{ borderTop: "4px solid #d97706" }}
                >
                  <div
                    className="event-pillar-icon-box d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "62px",
                      height: "62px",
                      background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                      border: "2px solid rgba(217, 119, 6, 0.4)",
                      boxShadow: "0 8px 18px rgba(217, 119, 6, 0.22)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" />
                      <path d="M18 9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" />
                      <path d="M4 3h16v6a8 8 0 0 1-16 0V3z" fill="#fef3c7" stroke="#d97706" />
                      <path d="M12 17v4" stroke="#b45309" strokeWidth="2.5" />
                      <path d="M8 21h8" stroke="#b45309" strokeWidth="2.5" />
                      <polygon points="12 6 13.2 8.5 16 8.8 14 10.8 14.5 13.5 12 12.2 9.5 13.5 10 10.8 8 8.8 10.8 8.5 12 6" fill="#ffd200" stroke="#b45309" strokeWidth="0.8" />
                    </svg>
                  </div>
                  <div>
                    <strong className="d-block text-dark small fw-bold mb-1">Sports Day</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#fef3c7", color: "#b45309", fontSize: "0.72rem" }}>
                      Track & Fitness
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* 5. Olympiad */}
            <div className="col-6 col-md-4 col-lg-2">
              <a href="#olympiad" className="text-decoration-none">
                <div
                  className="p-3 bg-white rounded-4 text-center h-100 shadow-sm event-pillar-card d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                  style={{ borderTop: "4px solid #0284c7" }}
                >
                  <div
                    className="event-pillar-icon-box d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "62px",
                      height: "62px",
                      background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                      border: "2px solid rgba(2, 132, 199, 0.4)",
                      boxShadow: "0 8px 18px rgba(2, 132, 199, 0.22)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a5 5 0 0 0-4.9 4 4.5 4.5 0 0 0-1.6 8.5A5 5 0 0 0 11 21.9V17h2v4.9a5 5 0 0 0 5.5-7.4 4.5 4.5 0 0 0-1.6-8.5A5 5 0 0 0 12 2z" fill="#dbeafe" stroke="#0284c7" />
                      <line x1="12" y1="7" x2="12" y2="13" stroke="#004a90" strokeWidth="2" />
                      <circle cx="12" cy="7" r="1.5" fill="#ffd200" stroke="#004a90" />
                      <circle cx="9" cy="11" r="1.5" fill="#ffd200" stroke="#004a90" />
                      <circle cx="15" cy="11" r="1.5" fill="#ffd200" stroke="#004a90" />
                      <line x1="9" y1="11" x2="12" y2="10" stroke="#004a90" />
                      <line x1="15" y1="11" x2="12" y2="10" stroke="#004a90" />
                    </svg>
                  </div>
                  <div>
                    <strong className="d-block text-dark small fw-bold mb-1">Olympiad</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#dbeafe", color: "#0369a1", fontSize: "0.72rem" }}>
                      Academic Logic
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* 6. CSR Rallies */}
            <div className="col-6 col-md-4 col-lg-2">
              <a href="#csr-rallies" className="text-decoration-none">
                <div
                  className="p-3 bg-white rounded-4 text-center h-100 shadow-sm event-pillar-card d-flex flex-column align-items-center justify-content-between position-relative overflow-hidden"
                  style={{ borderTop: "4px solid #7c3aed" }}
                >
                  <div
                    className="event-pillar-icon-box d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                    style={{
                      width: "62px",
                      height: "62px",
                      background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
                      border: "2px solid rgba(124, 58, 237, 0.4)",
                      boxShadow: "0 8px 18px rgba(124, 58, 237, 0.22)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 10a4 4 0 0 0-4-4c-2 0-3 2-3 4s2 4 7 8c5-4 7-6 7-8s-1-4-3-4a4 4 0 0 0-4 4z" fill="#ede9fe" stroke="#7c3aed" />
                      <path d="M12 18V9" stroke="#16a34a" strokeWidth="2.5" />
                      <path d="M12 9c0-3 3-5 5-5s1 3-1 5c-2 2-4 0-4 0z" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
                      <path d="M12 12c0-2-2-4-4-4s-1 2 1 4c1.5 1.5 3 0 3 0z" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <strong className="d-block text-dark small fw-bold mb-1">CSR Rallies</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#ede9fe", color: "#6d28d9", fontSize: "0.72rem" }}>
                      Social Care
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         UPCOMING EVENTS SECTION: DUSSEHRA, DIWALI, CHRISTMAS
         ------------------------------------------------------------------- */}
      <section id="upcoming-events" className="py-5 border-bottom" style={{ backgroundColor: "#fffbf2" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2 shadow-sm">
              🎉 UPCOMING CELEBRATIONS
            </span>
            <h2 className="display-6 fw-bold text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Upcoming School Events & Festivals
            </h2>
            <p className="lead text-muted col-md-8 mx-auto fs-6">
              Immersing young minds in joyful traditions, moral values, and cultural harmony through festive assemblies, theatrical role-play, and hands-on creative activities.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* 1. DUSSEHRA */}
            <div className="col-md-6 col-lg-4">
              <div
                className="bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between overflow-hidden position-relative transition-all feature-hover-card"
                style={{ borderTop: "5px solid #ff7700" }}
              >
                <div className="p-4">
                  {/* Top Header Badge & Date */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "rgba(255, 119, 0, 0.12)",
                        fontSize: "1.75rem",
                      }}
                    >
                      🏹
                    </span>
                    <span
                      className="badge px-3 py-2 rounded-pill fw-bold"
                      style={{
                        backgroundColor: "#fff2e6",
                        color: "#d95f00",
                        border: "1px solid rgba(255, 119, 0, 0.3)",
                        fontSize: "0.82rem",
                      }}
                    >
                      📅 October
                    </span>
                  </div>

                  <span className="badge bg-warning-subtle text-dark border border-warning px-2 py-1 rounded-pill small fw-bold mb-2">
                    Vijayadashami Assembly
                  </span>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Dussehra Celebration
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    Celebrating the eternal triumph of goodness, truth, and courage over negativity through lively role-play and creative crafts.
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <strong className="d-block small text-dark mb-2">Key Festivities:</strong>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: "0.83rem" }}>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-warning fw-bold">✦</span>
                        <span><strong>Ramleela Skits:</strong> Moral role-play enacting the timeless values of righteousness and courage.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-warning fw-bold">✦</span>
                        <span><strong>Eco Ravana Craft:</strong> Miniature effigy and puppet making using recyclable paper materials.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-warning fw-bold">✦</span>
                        <span><strong>Ethnic Dress Day:</strong> Traditional Indian wear celebration & festive shloka chanting.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-3 bg-light border-top d-flex align-items-center justify-content-between">
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    🎒 Playgroup to Class V
                  </span>
                  <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small fw-semibold">
                    Culture & Values
                  </span>
                </div>
              </div>
            </div>

            {/* 2. DIWALI */}
            <div className="col-md-6 col-lg-4">
              <div
                className="bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between overflow-hidden position-relative transition-all feature-hover-card"
                style={{ borderTop: "5px solid #ffd200" }}
              >
                <div className="p-4">
                  {/* Top Header Badge & Date */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "rgba(255, 210, 0, 0.18)",
                        fontSize: "1.75rem",
                      }}
                    >
                      🪔
                    </span>
                    <span
                      className="badge px-3 py-2 rounded-pill fw-bold"
                      style={{
                        backgroundColor: "#fffdf0",
                        color: "#997300",
                        border: "1px solid rgba(255, 210, 0, 0.5)",
                        fontSize: "0.82rem",
                      }}
                    >
                      📅 October / November
                    </span>
                  </div>

                  <span className="badge bg-warning text-dark px-2 py-1 rounded-pill small fw-bold mb-2">
                    Festival of Lights
                  </span>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Diwali & Diya Gala
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    Illuminating young hearts with love, harmony, environmental stewardship, and joyful classroom artistry.
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <strong className="d-block small text-dark mb-2">Key Festivities:</strong>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: "0.83rem" }}>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-warning fw-bold">✦</span>
                        <span><strong>Clay Diya Painting:</strong> Hand-decorating earthen lamps with vivid paints, mirrors & sparkles.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-warning fw-bold">✦</span>
                        <span><strong>Floral Rangoli Contests:</strong> Collaborative flower petal art developing color harmony and teamwork.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-warning fw-bold">✦</span>
                        <span><strong>Green Diwali Pledge:</strong> Pledging for clean air, kindness to animals, and zero-smoke celebrations.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-3 bg-light border-top d-flex align-items-center justify-content-between">
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    🎒 All Grades & Faculty
                  </span>
                  <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small fw-semibold">
                    Diya & Rangoli Gala
                  </span>
                </div>
              </div>
            </div>

            {/* 3. CHRISTMAS */}
            <div className="col-md-6 col-lg-4">
              <div
                className="bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between overflow-hidden position-relative transition-all feature-hover-card"
                style={{ borderTop: "5px solid #dc3545" }}
              >
                <div className="p-4">
                  {/* Top Header Badge & Date */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "rgba(220, 53, 69, 0.12)",
                        fontSize: "1.75rem",
                      }}
                    >
                      🎄
                    </span>
                    <span
                      className="badge px-3 py-2 rounded-pill fw-bold"
                      style={{
                        backgroundColor: "#fde8ea",
                        color: "#b02a37",
                        border: "1px solid rgba(220, 53, 69, 0.3)",
                        fontSize: "0.82rem",
                      }}
                    >
                      📅 December 24–25
                    </span>
                  </div>

                  <span className="badge bg-danger-subtle text-danger border border-danger px-2 py-1 rounded-pill small fw-bold mb-2">
                    Winter Carnival & Carols
                  </span>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Christmas Carnival
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    Welcoming the magical winter cheer with Santa Claus, twinkling fairy lights, harmonious carols, and the joy of giving.
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <strong className="d-block small text-dark mb-2">Key Festivities:</strong>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: "0.83rem" }}>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-danger fw-bold">✦</span>
                        <span><strong>Santa Claus Visit:</strong> Jolly laughs, jingling bells, surprise candy pouches, and photo memories.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-danger fw-bold">✦</span>
                        <span><strong>Tree Decoration:</strong> Adorning pine branches with stars, ribbons, stockings, and paper snowflakes.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span className="text-danger fw-bold">✦</span>
                        <span><strong>Carol Choir & Joy of Giving:</strong> Melodious choir singing and Secret Santa handmade cards exchange.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-3 bg-light border-top d-flex align-items-center justify-content-between">
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    🎒 Whole School Community
                  </span>
                  <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small fw-semibold">
                    Santa & Carols Choir
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 1: EDUCATIONAL TOURS
         ------------------------------------------------------------------- */}
      <section id="educational-tours" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
                1. EXPERIENTIAL LEARNING & HERITAGE
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Educational Tours & Field Visits
              </h2>
              <p className="lead text-primary fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                Expanding young horizons beyond textbook pages through structured experiential journeys.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                At Rising Kids School, learning is never confined to classroom walls. Our carefully planned educational field tours take children to architectural landmarks, planetariums, science museums, botanical gardens, and local craft centers. These journeys connect classroom lessons with real-world wonder, fostering acute observational skills, intellectual curiosity, and cultural pride.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🏛️</span>
                      <strong className="text-dark small">Heritage & History</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Visiting historic monuments and architectural gems to discover India&apos;s rich cultural tapestry firsthand.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🔬</span>
                      <strong className="text-dark small">Science & Planetariums</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Interactive science centers, galaxy dome shows, and nature labs that ignite a passion for discovery.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🛡️</span>
                      <strong className="text-dark small">100% Safe Supervision</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Full teacher and female attendant escort, certified first-aid kits, and real-time parent transit notifications.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">📝</span>
                      <strong className="text-dark small">Reflective Learning</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Post-tour classroom drawing worksheets, journaling, and group presentations to consolidate knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border text-white position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #004a90 0%, #071c3e 100%)",
                  border: "2px solid rgba(255, 210, 0, 0.4)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                    Annual Term Expedition
                  </span>
                  <span className="fs-3">🗺️</span>
                </div>
                <h4 className="fw-bold text-white mb-2">Tour Highlights</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  Every tour is integrated with our curriculum syllabus for Classes Nursery to V.
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Destinations:</strong> Heritage Monuments, Science City, Botanical Parks, Dairy & Farm Centers.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Ratio:</strong> 1 Teacher per 8 Students with dedicated support staff.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Skill Outcome:</strong> Inquiry-based thinking, group coordination, and observational acumen.</span>
                  </li>
                </ul>

                <Link
                  href="/admissions"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Inquire for Admission</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Educational Tours Horizontal Scrollable Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge="PHOTO MEMORIES"
            subBadge="Field Expeditions"
            title="Learning Through Exploration & Discovery"
            subtitle="Swipe or use controls to browse our students' real-world journeys across heritage, science, and nature."
            items={educationalTourPhotos}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 2: PICNICS
         ------------------------------------------------------------------- */}
      <section id="picnics" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fffdf5" }}>
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-7">
              <span className="badge bg-success-subtle text-success border border-success px-3 py-1 rounded-pill fw-bold small mb-2">
                2. JOYFUL OUTDOOR BONDING
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                School Picnics & Nature Excursions
              </h2>
              <p className="lead text-success fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                Unstructured outdoor joy, social bonding, and nature discovery in safe green spaces.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                Our annual picnics offer children a rejuvenating escape into fresh air and open lawns. Away from screens and desks, students bond with teachers and classmates through group picnic games, nature scavenger hunts, and shared tiffin baskets. Picnics develop lifelong values of sharing, mutual respect, table manners, and joy in collective play.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🌳</span>
                      <strong className="text-dark small">Lush Green Venues</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Carefully vetted open-air amusement and ecological parks with clean child-safe play equipment.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🥪</span>
                      <strong className="text-dark small">Community Meals & Sharing</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Encouraging table manners, healthy eating habits, and the joy of sharing snacks with friends.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🎈</span>
                      <strong className="text-dark small">Lively Group Games</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Parachute play, sack races, tug-of-war, musical statues, and frisbee on sprawling manicured grass.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🚌</span>
                      <strong className="text-dark small">Safe School Vans</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Comfortable transport driven by vetted drivers and accompanied by watchful class mentors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border text-white position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #198754 0%, #0d4e30 100%)",
                  border: "2px solid rgba(255, 210, 0, 0.4)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                    Winter Season Fun
                  </span>
                  <span className="fs-3">🧺</span>
                </div>
                <h4 className="fw-bold text-white mb-2">Picnic Experience</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  Organized every winter season across lush picnic destinations around NCR.
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Timing:</strong> November to February during sunny winter afternoons.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Food & Hydration:</strong> Hygienic fresh meals, fresh juices, and filtered mineral water.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Development:</strong> Social-emotional bonding, active outdoor wellness, and sensory relaxation.</span>
                  </li>
                </ul>

                <a
                  href="#join-events"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Connect with Rising Kids</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* School Picnics Photo Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge="OUTDOOR EXCURSIONS"
            subBadge="Picnic Memories"
            title="Sunny Picnics, Nature Play & Community Meals"
            subtitle="Catch glimpses of our joyful winter picnics, lawn games, and shared laughter in open parks."
            items={picnicPhotos}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 3: ANNUAL DAY
         ------------------------------------------------------------------- */}
      <section id="annual-day" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-danger-subtle text-danger border border-danger px-3 py-1 rounded-pill fw-bold small mb-2">
                3. GRAND STAGE SPECTACLE
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Annual Day & Cultural Celebration
              </h2>
              <p className="lead text-danger fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                Empowering 100% student stage participation, creative expression, and artistic excellence.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                The Grand Annual Function is the crowning cultural milestone of our academic year. At Rising Kids School, we champion a strict <strong>100% stage participation policy</strong> — ensuring every student from Playgroup to Class V performs before a proud audience of parents and mentors. From vibrant folk rhythms and theatrical value dramas to musical recitals, children shed inhibitions and discover unshakeable confidence.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🌟</span>
                      <strong className="text-dark small">100% Stage Time Policy</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      No child is left behind in the audience. Every single child performs under the auditorium lights.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">💃</span>
                      <strong className="text-dark small">Thematic Dance & Drama</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Traditional classical, patriotic dances, rhymes recitation, and value-packed theatrical skits.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🏆</span>
                      <strong className="text-dark small">Annual Prize Distribution</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Honoring academic toppers, 100% attendance achievers, star artists, and good citizens.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">👨‍👩‍👧‍👦</span>
                      <strong className="text-dark small">Family Celebration</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      A grand gathering with parents and grandparents celebrating the growth of our young stars.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border text-white position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #b02a37 0%, #58151c 100%)",
                  border: "2px solid rgba(255, 210, 0, 0.4)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                    Flagship Gala
                  </span>
                  <span className="fs-3">🎭</span>
                </div>
                <h4 className="fw-bold text-white mb-2">Stage Magic</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  Transforming shy voices into bold, expressive performers through professional stage training.
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Costumes:</strong> Thematic, colourful stage costumes curated for every age group.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Audio-Visual:</strong> Professional theatrical lighting, sound engineering, and HD video captures.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Outcome:</strong> Lifelong public-speaking confidence and expressive body language.</span>
                  </li>
                </ul>

                <Link
                  href="/admissions"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Inquire for Admission</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Annual Day Cultural Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge="CULTURAL GALA"
            subBadge="Stage Memories"
            title="100% Stage Participation, Dance & Theatrical Drama"
            subtitle="Relive the glittering performances, colourful thematic costumes, and proud moments of our annual function."
            items={annualDayPhotos}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 4: SPORTS DAY
         ------------------------------------------------------------------- */}
      <section id="sports-day" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fffdf5" }}>
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-7">
              <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
                4. PHYSICAL FITNESS & SPORTSMANSHIP
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Annual Sports Day & Athletic Meet
              </h2>
              <p className="lead text-primary fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                Building agility, resilience, healthy competition, and enduring sporting spirit.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                Sports Day at Rising Kids School celebrates the energetic spirit of our young athletes. Designed with age-tailored tracks, fun obstacle races, synchronized march pasts, and yoga demonstrations, the event teaches children that fitness is a joyful lifestyle and true victory lies in giving one&apos;s best and cheering for peers.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🏃</span>
                      <strong className="text-dark small">Track & Field Sprints</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      50m/100m dashes, baton relays, hoop hops, and agility obstacle courses tailored by grade.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🧘</span>
                      <strong className="text-dark small">Mass Drill & Yoga Display</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Synchronized dumbbell exercises, ribbon drills, and calming Surya Namaskar formations.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🥇</span>
                      <strong className="text-dark small">Medals & House Trophies</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Gold, Silver, and Bronze medals for winners alongside participation certificates for all.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🤝</span>
                      <strong className="text-dark small">Parent-Teacher Fun Races</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Delightful lemon-and-spoon and tug-of-war races with parents cheering on the field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border text-white position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
                  border: "2px solid rgba(255, 210, 0, 0.4)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                    Athletics & Agility
                  </span>
                  <span className="fs-3">🏆</span>
                </div>
                <h4 className="fw-bold text-white mb-2">Fit India Champions</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  Fostering gross motor skills, stamina, and healthy sportsmanship from Kindergarten upwards.
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Pre-Primary Races:</strong> Ball collection, frog jump, caterpillar race, beanbag toss.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Primary Events:</strong> 100m sprint, 4x50m relay, long jump, tug-of-war.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Core Values:</strong> Teamwork, resilience, sportsmanship, and personal best.</span>
                  </li>
                </ul>

                <a
                  href="#join-events"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Explore Sports Program</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sports Day Athletic Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge="FITNESS & AGILITY"
            subBadge="Sports Memories"
            title="Track Sprints, Agility Drills & Victory Celebrations"
            subtitle="Celebrating youthful stamina, synchronized yoga formations, and active sporting camaraderie."
            items={sportsDayPhotos}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 5: OLYMPIAD
         ------------------------------------------------------------------- */}
      <section id="olympiad" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-info-subtle text-dark border border-info px-3 py-1 rounded-pill fw-bold small mb-2">
                5. ACADEMIC EXCELLENCE & LOGICAL REASONING
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                National & International Olympiads
              </h2>
              <p className="lead text-primary fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                Cultivating critical thinking, mathematical acumen, and national competitive exposure.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                Rising Kids School actively prepares and registers primary students for prestigious national and international Olympiad examinations. Through Science (NSO), Mathematics (IMO), English (IEO), Cyber (NCO), and General Knowledge Olympiads, our learners develop sharp analytical faculties, out-of-the-box problem solving, and confidence to compete at higher levels.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">📐</span>
                      <strong className="text-dark small">Math & Science (IMO / NSO)</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Application-based numeric logic, pattern identification, and scientific aptitude questions.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">📖</span>
                      <strong className="text-dark small">English & Cyber (IEO / NCO)</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Advanced grammar, phonics mastery, reading comprehension, and digital technology concepts.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🏅</span>
                      <strong className="text-dark small">Certificates & Medals</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Merit certificates, national percentiles, and gold medals that boost academic self-esteem.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-light border h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">📚</span>
                      <strong className="text-dark small">Dedicated Mentorship</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Special teacher mentoring, conceptual worksheets, and previous-year mock test practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border text-white position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #03426a 100%)",
                  border: "2px solid rgba(255, 210, 0, 0.4)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                    Class I to Class V
                  </span>
                  <span className="fs-3">🧠</span>
                </div>
                <h4 className="fw-bold text-white mb-2">Olympiad Program</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  Building strong conceptual reasoning from the earliest formative school years.
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Subjects:</strong> Mathematics (IMO), Science (NSO), English (IEO), Cyber (NCO), GK (IGKO).</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Preparation:</strong> In-school weekly puzzle challenges and reasoning worksheets.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Benefit:</strong> Deep conceptual clarity eliminating fear of competitive assessments.</span>
                  </li>
                </ul>

                <Link
                  href="/curriculum"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Explore Academic Syllabus</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Academic Olympiads Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge="ACADEMIC MERIT"
            subBadge="Olympiad Stars"
            title="Analytical Thinking, Cyber Logic & National Contests"
            subtitle="Celebrating young minds solving complex puzzles, excelling in IT labs, and earning national medals."
            actionLink={{
              href: "/curriculum",
              label: "Explore Curriculum",
            }}
            items={olympiadPhotos}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 6: CSR RALLIES
         ------------------------------------------------------------------- */}
      <section id="csr-rallies" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fffdf5" }}>
        <div className="container">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-7">
              <span className="badge bg-purple-subtle text-purple border border-purple px-3 py-1 rounded-pill fw-bold small mb-2" style={{ backgroundColor: "rgba(111, 66, 193, 0.12)", color: "var(--secondary-grape)" }}>
                6. SOCIAL RESPONSIBILITY & COMMUNITY CARE
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                CSR Rallies & Social Initiatives
              </h2>
              <p className="lead fw-semibold mb-3" style={{ color: "var(--secondary-grape)", fontSize: "1.08rem" }}>
                &ldquo;Greener Tomorrow Together&rdquo; — Nurturing empathetic, eco-conscious global citizens.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                At Rising Kids School, moral and character education is given utmost priority. Through our dedicated CSR rallies and community awareness walks, children become champions of social causes. Whether it is sapling plantation, Swachh Bharat cleanliness rallies, anti-plastic drives, or kindness weeks, our students learn that they have the power to create a positive impact on the world around them.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🌳</span>
                      <strong className="text-dark small">Tree Plantation Drives</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      &ldquo;Greener Tomorrow Together&rdquo; — students plant saplings with teachers and adopt them to care for.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">♻️</span>
                      <strong className="text-dark small">Anti-Plastic Eco Walks</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Neighborhood slogan rallies promoting cloth bags, paper reuse, and eco-friendly home habits.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🧹</span>
                      <strong className="text-dark small">Swachh Vidyalaya & Civic Sense</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Teaching waste segregation (Wet/Dry bins), clean hands hygiene, and respect for public spaces.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🎁</span>
                      <strong className="text-dark small">Joy of Giving Drives</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Sharing books, toys, and winter garments with underprivileged children during festive seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 rounded-4 shadow-sm border text-white position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #6f42c1 0%, #381a70 100%)",
                  border: "2px solid rgba(255, 210, 0, 0.4)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                    Greener Tomorrow Together
                  </span>
                  <span className="fs-3">🌱</span>
                </div>
                <h4 className="fw-bold text-white mb-2">Social Awareness</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  Instilling heart-to-heart values of empathy, ecology, and civic mindfulness.
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Plantation Drives:</strong> Every child participates in planting and nurturing plants.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Civic Drives:</strong> Slogan placard walks raising community awareness on traffic & hygiene.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="text-warning fw-bold">✓</span>
                    <span><strong>Character Building:</strong> Empathy, humility, and environmental responsibility from childhood.</span>
                  </li>
                </ul>

                <a
                  href="#join-events"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Join Our School Family</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* CSR Rallies & Social Initiatives Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge="COMMUNITY ACTION"
            subBadge="Social Impact"
            title="Eco Awareness, Tricolor Rallies & Civic Pride"
            subtitle="Heartwarming memories of our young change-makers planting trees, rallying for cleanliness, and spreading kindness."
            items={csrRalliesPhotos}
          />
        </div>
      </section>

      {/* Growth Through Events Section */}
      <section id="event-benefits" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.events.whyEvents.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.events.whyEvents.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              {t.events.whyEvents.subheading}
            </p>
          </div>

          <div className="row g-4">
            {eventBenefits.map((item: any, idx: number) => (
              <div key={idx} className="col-md-4">
                <div
                  className="p-4 bg-white rounded-4 border shadow-sm h-100 text-center transition-all"
                  style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                >
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
                    {item.icon}
                  </div>
                  <h4 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Join? Action Banner */}
      <section id="join-events" className="py-5" style={{ backgroundColor: "transparent" }}>
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
                    <span>EXPERIENCE CO-CURRICULAR EXCELLENCE</span>
                  </div>

                  {/* Heading */}
                  <h2 className="display-6 fw-bold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.events.actionBanner.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="lead text-white text-opacity-90 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px" }}>
                    {t.events.actionBanner.subtitle}
                  </p>

                  {/* Feature Chips */}
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4">
                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      🗺️ Educational Tours
                    </span>
                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      🧺 Annual Picnics
                    </span>
                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      🎭 100% Stage Participation
                    </span>
                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      🏃 Active Sports
                    </span>
                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      🧠 Olympiads
                    </span>
                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                      🌱 CSR Rallies
                    </span>
                  </div>
                </div>

                {/* Right Interactive Action Card */}
                <div className="col-lg-5">
                  <div
                    className="p-4 rounded-4 text-center text-lg-start shadow-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1.5px solid rgba(255, 255, 255, 0.18)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <div className="small text-warning fw-bold text-uppercase mb-2" style={{ letterSpacing: "1px" }}>
                      Admissions Open 2027-28
                    </div>
                    <div className="text-white fw-bold fs-5 mb-3">
                      Give Your Child Every Opportunity
                    </div>

                    {/* Primary & Secondary Action Buttons */}
                    <div className="d-grid gap-2 mb-3">
                      <Link
                        href="/admissions"
                        className="btn cta-btn-gold btn-lg rounded-pill text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem" }}
                      >
                        <span>🎒 {t.events.actionBanner.enquireButton}</span>
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
                        href="/contact"
                        className="btn btn-outline-light btn-lg rounded-pill fw-bold text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem", borderWidth: "1.5px" }}
                      >
                        <span>💬 {t.events.actionBanner.contactButton}</span>
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
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I want to enquire about school events and admissions at Rising Kids School.")}`}
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
    </div>
  );
}
