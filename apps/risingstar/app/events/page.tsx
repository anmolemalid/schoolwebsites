import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";
import GenericCarousel from "../components/GenericCarousel";

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
                    <span>{t.events.breadcrumbChips.upcoming}</span>
                  </a>

                  <a
                    href="#educational-tours"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🗺️</span>
                    <span>{t.events.breadcrumbChips.tours}</span>
                  </a>

                  <a
                    href="#picnics"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🧺</span>
                    <span>{t.events.breadcrumbChips.picnics}</span>
                  </a>

                  <a
                    href="#annual-day"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎭</span>
                    <span>{t.events.breadcrumbChips.annualDay}</span>
                  </a>

                  <a
                    href="#sports-day"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🏃</span>
                    <span>{t.events.breadcrumbChips.sportsDay}</span>
                  </a>

                  <a
                    href="#olympiad"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🧠</span>
                    <span>{t.events.breadcrumbChips.olympiad}</span>
                  </a>

                  <a
                    href="#csr-rallies"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🌱</span>
                    <span>{t.events.breadcrumbChips.csrRallies}</span>
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
                  <span>{t.events.breadcrumbChips.coCurricularBadge}</span>
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
            alt={`${t.school.name} - ${t.nav.events}`}
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* 6 Core Events Quick Matrix Strip */}
      <section className="py-4 border-bottom" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.events.pillarsStrip.tag}
            </span>
            <h2 className="fw-bold fs-3 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.events.pillarsStrip.heading}
            </h2>
            <p className="text-muted small col-md-7 mx-auto mb-0">
              {t.events.pillarsStrip.subheading}
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
                    <strong className="d-block text-dark small fw-bold mb-1">{t.events.pillarsStrip.toursTitle}</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#e0f2fe", color: "#0369a1", fontSize: "0.72rem" }}>
                      {t.events.pillarsStrip.toursTag}
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
                    <strong className="d-block text-dark small fw-bold mb-1">{t.events.pillarsStrip.picnicsTitle}</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#dcfce7", color: "#15803d", fontSize: "0.72rem" }}>
                      {t.events.pillarsStrip.picnicsTag}
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
                    <strong className="d-block text-dark small fw-bold mb-1">{t.events.pillarsStrip.annualDayTitle}</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#ffe4e6", color: "#be123c", fontSize: "0.72rem" }}>
                      {t.events.pillarsStrip.annualDayTag}
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
                    <strong className="d-block text-dark small fw-bold mb-1">{t.events.pillarsStrip.sportsDayTitle}</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#fef3c7", color: "#b45309", fontSize: "0.72rem" }}>
                      {t.events.pillarsStrip.sportsDayTag}
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
                    <strong className="d-block text-dark small fw-bold mb-1">{t.events.pillarsStrip.olympiadTitle}</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#dbeafe", color: "#0369a1", fontSize: "0.72rem" }}>
                      {t.events.pillarsStrip.olympiadTag}
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
                    <strong className="d-block text-dark small fw-bold mb-1">{t.events.pillarsStrip.csrRalliesTitle}</strong>
                    <span className="badge px-2 py-1 rounded-pill small" style={{ backgroundColor: "#ede9fe", color: "#6d28d9", fontSize: "0.72rem" }}>
                      {t.events.pillarsStrip.csrRalliesTag}
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
              🎉 {t.events.upcomingSection.tag}
            </span>
            <h2 className="display-6 fw-bold text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.events.upcomingSection.heading}
            </h2>
            <p className="lead text-muted col-md-8 mx-auto fs-6">
              {t.events.upcomingSection.subheading}
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
                      📅 {t.events.upcomingSection.dussehra.date}
                    </span>
                  </div>

                  <span className="badge bg-warning-subtle text-dark border border-warning px-2 py-1 rounded-pill small fw-bold mb-2">
                    {t.events.upcomingSection.dussehra.badge}
                  </span>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.events.upcomingSection.dussehra.title}
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    {t.events.upcomingSection.dussehra.desc}
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <strong className="d-block small text-dark mb-2">{t.events.upcomingSection.keyFestivitiesLabel}</strong>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: "0.83rem" }}>
                      {t.events.upcomingSection.dussehra.festivities.map((item, fIdx) => (
                        <li key={fIdx} className="d-flex align-items-start gap-2">
                          <span className="text-warning fw-bold">✦</span>
                          <span><strong>{item.label}</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-3 bg-light border-top d-flex align-items-center justify-content-between">
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    🎒 {t.events.upcomingSection.dussehra.footerGrade}
                  </span>
                  <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small fw-semibold">
                    {t.events.upcomingSection.dussehra.footerTag}
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
                      📅 {t.events.upcomingSection.diwali.date}
                    </span>
                  </div>

                  <span className="badge bg-warning text-dark px-2 py-1 rounded-pill small fw-bold mb-2">
                    {t.events.upcomingSection.diwali.badge}
                  </span>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.events.upcomingSection.diwali.title}
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    {t.events.upcomingSection.diwali.desc}
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <strong className="d-block small text-dark mb-2">{t.events.upcomingSection.keyFestivitiesLabel}</strong>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: "0.83rem" }}>
                      {t.events.upcomingSection.diwali.festivities.map((item, fIdx) => (
                        <li key={fIdx} className="d-flex align-items-start gap-2">
                          <span className="text-warning fw-bold">✦</span>
                          <span><strong>{item.label}</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-3 bg-light border-top d-flex align-items-center justify-content-between">
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    🎒 {t.events.upcomingSection.diwali.footerGrade}
                  </span>
                  <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small fw-semibold">
                    {t.events.upcomingSection.diwali.footerTag}
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
                      📅 {t.events.upcomingSection.christmas.date}
                    </span>
                  </div>

                  <span className="badge bg-danger-subtle text-danger border border-danger px-2 py-1 rounded-pill small fw-bold mb-2">
                    {t.events.upcomingSection.christmas.badge}
                  </span>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.events.upcomingSection.christmas.title}
                  </h3>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    {t.events.upcomingSection.christmas.desc}
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <strong className="d-block small text-dark mb-2">{t.events.upcomingSection.keyFestivitiesLabel}</strong>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted" style={{ fontSize: "0.83rem" }}>
                      {t.events.upcomingSection.christmas.festivities.map((item, fIdx) => (
                        <li key={fIdx} className="d-flex align-items-start gap-2">
                          <span className="text-danger fw-bold">✦</span>
                          <span><strong>{item.label}</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-3 bg-light border-top d-flex align-items-center justify-content-between">
                  <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                    🎒 {t.events.upcomingSection.christmas.footerGrade}
                  </span>
                  <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small fw-semibold">
                    {t.events.upcomingSection.christmas.footerTag}
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
                {t.events.educationalTours.badge}
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.educationalTours.title}
              </h2>
              <p className="lead text-primary fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                {t.events.educationalTours.lead}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                {t.events.educationalTours.desc}
              </p>

              <div className="row g-3">
                {t.events.educationalTours.features.map((feat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-4 bg-light border h-100">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fs-4">{feat.icon}</span>
                        <strong className="text-dark small">{feat.title}</strong>
                      </div>
                      <p className="small text-muted mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
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
                    {t.events.educationalTours.highlightsBadge}
                  </span>
                  <span className="fs-3">🗺️</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{t.events.educationalTours.highlightsTitle}</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  {t.events.educationalTours.highlightsSubtitle}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  {t.events.educationalTours.highlights.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-warning fw-bold">✓</span>
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/admissions"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>{t.events.educationalTours.button}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Educational Tours Horizontal Scrollable Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge={t.events.educationalTours.carousel.badge}
            subBadge={t.events.educationalTours.carousel.subBadge}
            title={t.events.educationalTours.carousel.title}
            subtitle={t.events.educationalTours.carousel.subtitle}
            items={t.events.photos.educationalTours}
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
                {t.events.picnics.badge}
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.picnics.title}
              </h2>
              <p className="lead text-success fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                {t.events.picnics.lead}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                {t.events.picnics.desc}
              </p>

              <div className="row g-3">
                {t.events.picnics.features.map((feat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fs-4">{feat.icon}</span>
                        <strong className="text-dark small">{feat.title}</strong>
                      </div>
                      <p className="small text-muted mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
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
                    {t.events.picnics.highlightsBadge}
                  </span>
                  <span className="fs-3">🧺</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{t.events.picnics.highlightsTitle}</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  {t.events.picnics.highlightsSubtitle}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  {t.events.picnics.highlights.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-warning fw-bold">✓</span>
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#join-events"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>{t.events.picnics.button}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* School Picnics Photo Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge={t.events.picnics.carousel.badge}
            subBadge={t.events.picnics.carousel.subBadge}
            title={t.events.picnics.carousel.title}
            subtitle={t.events.picnics.carousel.subtitle}
            items={t.events.photos.picnics}
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
                {t.events.annualDay.badge}
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.annualDay.title}
              </h2>
              <p className="lead text-danger fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                {t.events.annualDay.lead}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                {t.events.annualDay.desc}
              </p>

              <div className="row g-3">
                {t.events.annualDay.features.map((feat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-4 bg-light border h-100">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fs-4">{feat.icon}</span>
                        <strong className="text-dark small">{feat.title}</strong>
                      </div>
                      <p className="small text-muted mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
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
                    {t.events.annualDay.highlightsBadge}
                  </span>
                  <span className="fs-3">🎭</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{t.events.annualDay.highlightsTitle}</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  {t.events.annualDay.highlightsSubtitle}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  {t.events.annualDay.highlights.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-warning fw-bold">✓</span>
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/admissions"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>{t.events.annualDay.button}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Annual Day Cultural Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge={t.events.annualDay.carousel.badge}
            subBadge={t.events.annualDay.carousel.subBadge}
            title={t.events.annualDay.carousel.title}
            subtitle={t.events.annualDay.carousel.subtitle}
            items={t.events.photos.annualDay}
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
                {t.events.sportsDay.badge}
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.sportsDay.title}
              </h2>
              <p className="lead text-primary fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                {t.events.sportsDay.lead}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                {t.events.sportsDay.desc}
              </p>

              <div className="row g-3">
                {t.events.sportsDay.features.map((feat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fs-4">{feat.icon}</span>
                        <strong className="text-dark small">{feat.title}</strong>
                      </div>
                      <p className="small text-muted mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
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
                    {t.events.sportsDay.highlightsBadge}
                  </span>
                  <span className="fs-3">🏆</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{t.events.sportsDay.highlightsTitle}</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  {t.events.sportsDay.highlightsSubtitle}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  {t.events.sportsDay.highlights.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-warning fw-bold">✓</span>
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#join-events"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>{t.events.sportsDay.button}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sports Day Athletic Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge={t.events.sportsDay.carousel.badge}
            subBadge={t.events.sportsDay.carousel.subBadge}
            title={t.events.sportsDay.carousel.title}
            subtitle={t.events.sportsDay.carousel.subtitle}
            items={t.events.photos.sportsDay}
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
                {t.events.olympiad.badge}
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.olympiad.title}
              </h2>
              <p className="lead text-primary fw-semibold mb-3" style={{ fontSize: "1.08rem" }}>
                {t.events.olympiad.lead}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                {t.events.olympiad.desc}
              </p>

              <div className="row g-3">
                {t.events.olympiad.features.map((feat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-4 bg-light border h-100">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fs-4">{feat.icon}</span>
                        <strong className="text-dark small">{feat.title}</strong>
                      </div>
                      <p className="small text-muted mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
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
                    {t.events.olympiad.highlightsBadge}
                  </span>
                  <span className="fs-3">🧠</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{t.events.olympiad.highlightsTitle}</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  {t.events.olympiad.highlightsSubtitle}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  {t.events.olympiad.highlights.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-warning fw-bold">✓</span>
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/curriculum"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>{t.events.olympiad.button}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Academic Olympiads Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge={t.events.olympiad.carousel.badge}
            subBadge={t.events.olympiad.carousel.subBadge}
            title={t.events.olympiad.carousel.title}
            subtitle={t.events.olympiad.carousel.subtitle}
            actionLink={{
              href: "/curriculum",
              label: (t.events.olympiad.carousel as any).actionLabel || t.events.olympiad.button,
            }}
            items={t.events.photos.olympiad}
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
              <span className="badge border px-3 py-1 rounded-pill fw-bold small mb-2" style={{ backgroundColor: "rgba(111, 66, 193, 0.12)", color: "var(--secondary-grape)", borderColor: "rgba(111, 66, 193, 0.3)" }}>
                {t.events.csrRallies.badge}
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.csrRallies.title}
              </h2>
              <p className="lead fw-semibold mb-3" style={{ color: "var(--secondary-grape)", fontSize: "1.08rem" }}>
                {t.events.csrRallies.lead}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                {t.events.csrRallies.desc}
              </p>

              <div className="row g-3">
                {t.events.csrRallies.features.map((feat, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fs-4">{feat.icon}</span>
                        <strong className="text-dark small">{feat.title}</strong>
                      </div>
                      <p className="small text-muted mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
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
                    {t.events.csrRallies.highlightsBadge}
                  </span>
                  <span className="fs-3">🌱</span>
                </div>
                <h4 className="fw-bold text-white mb-2">{t.events.csrRallies.highlightsTitle}</h4>
                <p className="text-white text-opacity-80 small mb-4">
                  {t.events.csrRallies.highlightsSubtitle}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-3 small text-white text-opacity-90 mb-4">
                  {t.events.csrRallies.highlights.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-warning fw-bold">✓</span>
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#join-events"
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>{t.events.csrRallies.button}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* CSR Rallies & Social Initiatives Carousel */}
          <GenericCarousel
            className="mt-5 pt-4 border-top"
            badge={t.events.csrRallies.carousel.badge}
            subBadge={t.events.csrRallies.carousel.subBadge}
            title={t.events.csrRallies.carousel.title}
            subtitle={t.events.csrRallies.carousel.subtitle}
            items={t.events.photos.csrRallies}
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
                    <span>{t.events.actionBanner.tag}</span>
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
                    {t.events.actionBanner.chips.map((chip: string, cIdx: number) => (
                      <span
                        key={cIdx}
                        className="badge px-3 py-2 rounded-pill"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.12)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
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
                      {t.events.actionBanner.admissionsOpen}
                    </div>
                    <div className="text-white fw-bold fs-5 mb-3">
                      {t.events.actionBanner.opportunityTitle}
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
                        title={t.contact.breadcrumbChips.callHelpline || "Call School Helpline"}
                      >
                        <span className="spinner-grow spinner-grow-sm text-success" role="status" style={{ width: "0.5rem", height: "0.5rem" }}></span>
                        <span>{t.school.contacts.phonePrimary}</span>
                      </a>

                      <a
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(t.events.actionBanner.whatsAppMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-whatsapp-pill"
                        title={t.floatingActions.whatsappChat || "Chat on WhatsApp"}
                      >
                        <span>💬 {t.events.actionBanner.whatsAppText}</span>
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
