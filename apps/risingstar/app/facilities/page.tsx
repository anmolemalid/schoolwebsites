import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";

export const metadata: Metadata = {
  title: t.meta.pages.facilities.title,
  description: t.meta.pages.facilities.description,
};

export default function FacilitiesPage() {
  const facilityItems = t.facilities.highlights.items;
  const safetyStandards = t.facilities.safetyStandards.items;

  const facilityVisuals = [
    {
      // 0: Smart Learning Classrooms
      iconSvg: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="13" rx="2" fill="#fef3c7" />
          <path d="M8 21h8" />
          <path d="M12 16v5" />
          <polygon points="10 7 15 9.5 10 12 10 7" fill="#d97706" />
          <circle cx="19" cy="6" r="1.5" fill="#f59e0b" stroke="none" />
        </svg>
      ),
      bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      borderColor: "rgba(245, 158, 11, 0.45)",
      shadowColor: "rgba(245, 158, 11, 0.22)",
      accentColor: "#d97706",
      tag: "Audio-Visual Smart",
      tagBg: "rgba(245, 158, 11, 0.12)",
      tagColor: "#92400e",
    },
    {
      // 1: Computer & IT Lab
      iconSvg: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" fill="#dbeafe" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 9l2 2-2 2" />
          <path d="M12 13h3" />
        </svg>
      ),
      bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      borderColor: "rgba(2, 132, 199, 0.45)",
      shadowColor: "rgba(2, 132, 199, 0.22)",
      accentColor: "#0284c7",
      tag: "Digital Literacy",
      tagBg: "rgba(2, 132, 199, 0.12)",
      tagColor: "#0369a1",
    },
    {
      // 2: 24x7 CCTV & Safe Campus
      iconSvg: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#fee2e2" />
          <circle cx="12" cy="11" r="3" fill="#dc2626" />
          <path d="M12 8a3 3 0 0 1 3 3" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      ),
      bgGradient: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
      borderColor: "rgba(239, 68, 68, 0.45)",
      shadowColor: "rgba(239, 68, 68, 0.22)",
      accentColor: "#dc2626",
      tag: "100% Monitored",
      tagBg: "rgba(239, 68, 68, 0.12)",
      tagColor: "#991b1b",
    },
    {
      // 3: Van & Bus Transport
      iconSvg: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16a1 1 0 0 1 1 1v9H3V7a1 1 0 0 1 1-1z" fill="#dcfce7" />
          <line x1="3" y1="11" x2="21" y2="11" />
          <circle cx="7" cy="18" r="2" fill="#16a34a" />
          <circle cx="17" cy="18" r="2" fill="#16a34a" />
          <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z" />
        </svg>
      ),
      bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      borderColor: "rgba(22, 163, 74, 0.45)",
      shadowColor: "rgba(22, 163, 74, 0.22)",
      accentColor: "#16a34a",
      tag: "Door-to-Door Routes",
      tagBg: "rgba(22, 163, 74, 0.12)",
      tagColor: "#166534",
    },
    {
      // 4: School Library & Story Corner
      iconSvg: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#cffafe" />
          <path d="M9 7h6" />
          <path d="M9 11h4" />
        </svg>
      ),
      bgGradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
      borderColor: "rgba(8, 145, 178, 0.45)",
      shadowColor: "rgba(8, 145, 178, 0.22)",
      accentColor: "#0891b2",
      tag: "Story & Picture Books",
      tagBg: "rgba(8, 145, 178, 0.12)",
      tagColor: "#155e75",
    },
    {
      // 5: Outdoor Play Lawn & Swings
      iconSvg: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h3l7 14h4" />
          <circle cx="16" cy="7" r="3" fill="#ede9fe" />
          <line x1="5" y1="10" x2="10" y2="10" />
          <line x1="5" y1="15" x2="13" y2="15" />
        </svg>
      ),
      bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
      borderColor: "rgba(124, 58, 237, 0.45)",
      shadowColor: "rgba(124, 58, 237, 0.22)",
      accentColor: "#7c3aed",
      tag: "Active Play & Sports",
      tagBg: "rgba(124, 58, 237, 0.12)",
      tagColor: "#5b21b6",
    },
  ];

  return (
    <div className="facilities-page">
      {/* Full Width Facilities Hero Banner Image with Overlay Breadcrumb */}
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
                  <span>🏫</span>
                  <span>{t.nav.facilities}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 d-none d-sm-inline mx-1">|</span>

                {/* Interactive Section Jump Chips */}
                <div className="d-none d-sm-inline-flex align-items-center gap-1">
                  <a
                    href="#campus-amenities"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎯</span>
                    <span>Highlights</span>
                  </a>

                  <a
                    href="#safety-standards"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🛡️</span>
                    <span>Safety</span>
                  </a>

                  <a
                    href="#visit-campus"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📍</span>
                    <span>Visit Campus</span>
                  </a>
                </div>
              </nav>

              {/* Facility Highlights Badge on Right of Banner */}
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
                  <span>Modern Safe Campus</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/slider/hero_banner_5_mobile.jpg"
          />
          <img
            src="/assets/slider/hero_banner_5.jpg"
            alt="Rising Star Academy Campus & World-Class Facilities"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* Facilities Grid Section */}
      <section id="campus-amenities" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.facilities.highlights.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.facilities.highlights.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              {t.facilities.highlights.subheading}
            </p>
          </div>

          {/* 6 Facility Cards */}
          <div className="row g-4">
            {facilityItems.map((item: any, idx: number) => {
              const visual = facilityVisuals[idx] || facilityVisuals[0];
              return (
                <div key={idx} className="col-md-6 col-lg-4">
                  <div
                    className="p-4 bg-white facility-card-enhanced h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                    style={{
                      borderTop: `4px solid ${visual.accentColor}`,
                    }}
                  >
                    <div>
                      {/* Top Row: Attractive Illustrated Icon Badge + Category Tag */}
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <div
                          className="facility-icon-badge shadow-sm"
                          style={{
                            background: visual.bgGradient,
                            border: `2px solid ${visual.borderColor}`,
                            boxShadow: `0 8px 22px ${visual.shadowColor}`,
                          }}
                        >
                          {visual.iconSvg}
                        </div>

                        <span
                          className="badge px-3 py-2 rounded-pill fw-bold"
                          style={{
                            backgroundColor: visual.tagBg,
                            color: visual.tagColor,
                            fontSize: "0.78rem",
                            letterSpacing: "0.4px",
                          }}
                        >
                          {visual.tag}
                        </span>
                      </div>

                      <h3
                        className="fw-bold fs-5 text-dark mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted small mb-0" style={{ lineHeight: 1.65 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Hygiene Standards on Warm Cream */}
      <section id="safety-standards" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.facilities.safetyStandards.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.facilities.safetyStandards.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              {t.facilities.safetyStandards.subheading}
            </p>
          </div>

          <div className="row g-4">
            {safetyStandards.map((std: any, idx: number) => (
              <div key={idx} className="col-md-6 col-lg-3">
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
                    {std.icon}
                  </div>
                  <h4 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {std.title}
                  </h4>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.5 }}>
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Visit Campus? Action Banner */}
      <section id="visit-campus" className="py-5" style={{ backgroundColor: "#ffffff" }}>
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
                    <span>SAFE & STIMULATING LEARNING ENVIRONMENT</span>
                  </div>

                  {/* Heading */}
                  <h2 className="display-6 fw-bold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.facilities.actionBanner.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="lead text-white text-opacity-90 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px" }}>
                    {t.facilities.actionBanner.subtitle}
                  </p>

                  {/* Trust / Benefit Chips */}
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                    <span className="cta-feature-chip">
                      <span>📹</span>
                      <span>24/7 CCTV & Security Guard</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🚌</span>
                      <span>Safe Van & Bus Transport</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🚰</span>
                      <span>Pure RO Drinking Water</span>
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
                      Plan A School Visit
                    </div>
                    <div className="text-white fw-bold fs-5 mb-3">
                      Experience Our Modern Campus
                    </div>

                    {/* Primary & Secondary Action Buttons */}
                    <div className="d-grid gap-2 mb-3">
                      <Link
                        href="/contact"
                        className="btn cta-btn-gold btn-lg rounded-pill text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem" }}
                      >
                        <span>🏫 {t.facilities.actionBanner.visitButton}</span>
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
                        <span>🎒 {t.facilities.actionBanner.admissionsButton}</span>
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
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I would like to visit the campus and see the facilities at Rising Kids School.")}`}
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
