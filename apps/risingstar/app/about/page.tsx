import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";
import SchoolTimeline from "../components/SchoolTimeline";

export const metadata: Metadata = {
  title: `${t.meta.pages.about.title} | Govt. Recognized & Affiliated`,
  description: `${t.meta.pages.about.description} Govt. Recognized & Affiliated with UDISE+ code, PRASHAST teacher registration, Student PEN & APAAR number. Celebrating 8 years of excellence.`,
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Full Width About Us Hero Banner Image with Overlay Breadcrumb */}
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
                  backgroundColor: "rgba(7, 28, 62, 0.92)",
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
                  <span>{t.nav.aboutUs}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center gap-1 banner-breadcrumb-chips">
                  <a
                    href="#core-pillars"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>💖</span>
                    <span>5 Core Pillars</span>
                  </a>

                  <a
                    href="#govt-recognition"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🏛️</span>
                    <span>Govt. Recognition</span>
                  </a>

                  <a
                    href="#student-benefits"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🆔</span>
                    <span>PRASHAST, PEN & APAAR</span>
                  </a>

                  <a
                    href="#growth-ladder"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📚</span>
                    <span>Learning Ladder</span>
                  </a>

                  <a
                    href="#desk-messages"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🖋️</span>
                    <span>Leadership Desk</span>
                  </a>

                  <a
                    href="#journey-timeline"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>⏳</span>
                    <span>8-Year Journey</span>
                  </a>

                  <Link
                    href="/#contact-section"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎒</span>
                    <span>Enquire Now</span>
                  </Link>
                </div>
              </nav>

              {/* 8-Year Legacy Badge on Right of Banner */}
              <div className="banner-breadcrumb-right-badge">
                <span
                  className="badge px-3 py-2 rounded-pill fw-bold text-white shadow-sm d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "rgba(0, 74, 144, 0.90)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 210, 0, 0.6)",
                    fontSize: "0.85rem",
                  }}
                >
                  <span className="spinner-grow spinner-grow-sm text-warning" role="status" style={{ width: "0.6rem", height: "0.6rem" }}></span>
                  <span>Est. 2018 | 8 Years of Excellence</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Banner Image */}
        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/slider/hero_banner_2_mobile.jpg"
          />
          <img
            src="/assets/slider/hero_banner_2.jpg"
            alt="Rising Kids School - About Us - Govt. Recognized Preschool and Primary School in New Vijay Nagar, Ghaziabad"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>



      {/* -------------------------------------------------------------------
         SECTION 2: 5 CORE PILLARS RIBBON (FROM INFOGRAPHIC)
         ------------------------------------------------------------------- */}
      <section
        id="core-pillars"
        className="py-5 border-top border-bottom"
        style={{ backgroundColor: "#fffdf5" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">OUR FOUNDATIONAL PILLARS</span>
            <h2
              className="display-6 fw-bold mb-3"
              style={{ color: "var(--primary-royal)", fontFamily: "'Poppins', sans-serif" }}
            >
              5 Pillars of Child Excellence
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              Every day at Rising Kids School is guided by these five core commitments to ensure each child blossoms into a confident, compassionate learner.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {t.about.corePillars.map((pillar, idx) => (
              <div key={idx} className="col-sm-6 col-lg">
                <div
                  className="p-4 rounded-4 bg-white border shadow-sm text-center h-100 d-flex flex-column align-items-center justify-content-between transition-all"
                  style={{ minHeight: "220px" }}
                >
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm mb-3 fs-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: `${pillar.color}15`,
                      border: `2.5px solid ${pillar.color}`,
                    }}
                  >
                    {pillar.icon}
                  </span>

                  <div>
                    <h5 className="fw-bold text-dark fs-6 mb-2">{pillar.title}</h5>
                    <p className="text-muted small mb-0" style={{ lineHeight: 1.5 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 3: GOVERNMENT RECOGNITION & ALIGNMENT
         ------------------------------------------------------------------- */}
      <section
        id="govt-recognition"
        className="py-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">{t.about.govtRecognition.tag}</span>
            <h2
              className="display-6 fw-bold mb-3"
              style={{ color: "var(--primary-royal)", fontFamily: "'Poppins', sans-serif" }}
            >
              {t.about.govtRecognition.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5" style={{ lineHeight: 1.6 }}>
              {t.about.govtRecognition.subtitle}
            </p>
          </div>

          {/* Two Top Flagship Cloud Cards inspired by graphic */}
          <div className="row g-4 mb-4">
            <div className="col-lg-6">
              <div
                className="p-4 p-md-5 rounded-4 shadow-sm h-100 position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                  border: "2px solid #93c5fd",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center bg-white text-primary shadow-sm fs-2"
                    style={{ width: "64px", height: "64px", border: "2px solid #3b82f6" }}
                  >
                    🏛️
                  </span>
                  <div>
                    <span className="badge bg-primary text-white fw-bold px-2 py-1 rounded-pill small mb-1">
                      UP GOVERNMENT
                    </span>
                    <h3 className="fw-bold fs-4 text-dark mb-0">
                      Government Recognized & Affiliated
                    </h3>
                  </div>
                </div>
                <p className="text-dark mb-0 fs-5" style={{ lineHeight: 1.65 }}>
                  Recognized by the Government of Uttar Pradesh and affiliated with the relevant educational board, we follow all formal schooling guidelines.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="p-4 p-md-5 rounded-4 shadow-sm h-100 position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                  border: "2px solid #fcd34d",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center bg-white text-dark shadow-sm fs-2"
                    style={{ width: "64px", height: "64px", border: "2px solid #f59e0b" }}
                  >
                    ☀️
                  </span>
                  <div>
                    <span className="badge bg-warning text-dark fw-bold px-2 py-1 rounded-pill small mb-1">
                      NATIONAL POLICIES
                    </span>
                    <h3 className="fw-bold fs-4 text-dark mb-0">
                      Aligned with National Education System
                    </h3>
                  </div>
                </div>
                <p className="text-dark mb-0 fs-5" style={{ lineHeight: 1.65 }}>
                  We follow all educational policies and digital initiatives as per Government guidelines, ensuring every child is a part of the formal schooling system.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Recognition & Policy Cards Grid */}
          <div className="row g-4">
            {t.about.govtRecognition.cards.map((card, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="policy-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary fs-3"
                      style={{ width: "52px", height: "52px" }}
                    >
                      {card.icon}
                    </span>
                    <span className="badge bg-warning-subtle text-dark border border-warning px-2 py-1 rounded-pill fw-bold small">
                      {card.badge}
                    </span>
                  </div>

                  <h4
                    className="fw-bold fs-5 text-dark mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {card.title}
                  </h4>

                  <p className="text-muted small mb-0" style={{ lineHeight: 1.65 }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 4: DIGITAL INITIATIVES: PRASHAST, PEN & APAAR
         ------------------------------------------------------------------- */}
      <section
        id="student-benefits"
        className="py-5 border-top border-bottom"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">{t.about.studentBenefits.tag}</span>
            <h2
              className="display-6 fw-bold mb-3"
              style={{ color: "var(--primary-royal)", fontFamily: "'Poppins', sans-serif" }}
            >
              {t.about.studentBenefits.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5" style={{ lineHeight: 1.6 }}>
              {t.about.studentBenefits.subtitle}
            </p>
          </div>

          {/* 3 Core Cards from the Infographic (PRASHAST, PEN, APAAR) */}
          <div className="row g-4 mb-4">
            {/* 1. PRASHAST Card */}
            <div className="col-lg-4">
              <div className="student-benefit-card p-4 p-md-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-danger-subtle text-danger border border-danger fw-bold px-3 py-1 rounded-pill small">
                    {t.about.studentBenefits.prashast.badge}
                  </span>
                  <span className="text-muted small fw-bold">NCERT / MoE</span>
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center fs-2 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
                      border: "2px solid #ef4444",
                    }}
                  >
                    📖
                  </span>
                  <div>
                    <h3 className="fw-bold fs-4 text-dark mb-0">
                      {t.about.studentBenefits.prashast.title}
                    </h3>
                    <small className="text-danger fw-bold">
                      {t.about.studentBenefits.prashast.tagline}
                    </small>
                  </div>
                </div>

                <p className="text-dark fw-medium mb-3" style={{ lineHeight: 1.6 }}>
                  {t.about.studentBenefits.prashast.description}
                </p>

                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 pt-3 border-top">
                  {t.about.studentBenefits.prashast.benefits.map((b, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-danger fw-bold">✓</span>
                      <span className="text-muted small">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Student PEN Card */}
            <div className="col-lg-4">
              <div className="student-benefit-card p-4 p-md-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-primary fw-bold text-white px-3 py-1 rounded-pill small">
                    {t.about.studentBenefits.pen.badge}
                  </span>
                  <span className="text-muted small fw-bold">UDISE+ Code</span>
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center fs-2 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                      border: "2px solid #3b82f6",
                    }}
                  >
                    🪪
                  </span>
                  <div>
                    <h3 className="fw-bold fs-4 text-dark mb-0">
                      {t.about.studentBenefits.pen.title}
                    </h3>
                    <small className="text-primary fw-bold">
                      {t.about.studentBenefits.pen.subtitle}
                    </small>
                  </div>
                </div>

                <p className="text-dark fw-medium mb-3" style={{ lineHeight: 1.6 }}>
                  {t.about.studentBenefits.pen.description}
                </p>

                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 pt-3 border-top">
                  {t.about.studentBenefits.pen.benefits.map((b, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-primary fw-bold">✓</span>
                      <span className="text-muted small">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. APAAR Number Card */}
            <div className="col-lg-4">
              <div className="student-benefit-card p-4 p-md-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-success fw-bold text-white px-3 py-1 rounded-pill small">
                    {t.about.studentBenefits.apaar.badge}
                  </span>
                  <span className="text-muted small fw-bold">NEP 2020</span>
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center fs-2 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
                      border: "2px solid #22c55e",
                    }}
                  >
                    📜
                  </span>
                  <div>
                    <h3 className="fw-bold fs-4 text-dark mb-0">
                      {t.about.studentBenefits.apaar.title}
                    </h3>
                    <small className="text-success fw-bold">
                      DigiLocker Integrated
                    </small>
                  </div>
                </div>

                <p className="text-dark fw-medium mb-3" style={{ lineHeight: 1.6 }}>
                  {t.about.studentBenefits.apaar.description}
                </p>

                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 pt-3 border-top">
                  {t.about.studentBenefits.apaar.benefits.map((b, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <span className="text-success fw-bold">✓</span>
                      <span className="text-muted small">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 5: THE 5 LEARNING PROGRESSION MILESTONES (FROM GRAPHIC BOOK STACK)
         ------------------------------------------------------------------- */}
      <section
        id="growth-ladder"
        className="py-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">LEARNING PROGRESSION</span>
            <h2
              className="display-6 fw-bold mb-3"
              style={{ color: "var(--primary-royal)", fontFamily: "'Poppins', sans-serif" }}
            >
              Learn • Play • Explore • Grow • Shine
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              Our structured pedagogical continuum guides children through every step of early childhood and primary schooling.
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {t.about.growthLadder.map((step, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg">
                <div
                  className="p-3 p-md-4 rounded-4 text-center h-100 shadow-sm transition-all"
                  style={{
                    backgroundColor: "#ffffff",
                    border: `2.5px solid ${step.color}`,
                  }}
                >
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mx-auto mb-2 shadow-sm"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: step.color,
                      fontSize: "1.1rem",
                    }}
                  >
                    {step.step}
                  </div>
                  <h4 className="fw-bold fs-5 mb-1" style={{ color: step.color }}>
                    {step.label}
                  </h4>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.45 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION: MESSAGES FROM THE DESK (FOUNDER & BRANCH HEAD)
         ------------------------------------------------------------------- */}
      <section
        id="desk-messages"
        className="py-5 border-top border-bottom"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">{t.about.deskMessages.tag}</span>
            <h2
              className="display-6 fw-bold mb-3"
              style={{ color: "var(--primary-royal)", fontFamily: "'Poppins', sans-serif" }}
            >
              {t.about.deskMessages.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5" style={{ lineHeight: 1.6 }}>
              {t.about.deskMessages.subtitle}
            </p>
          </div>

          <div className="row g-4 g-lg-5">
            {/* 1. Founder's Message Card */}
            <div className="col-lg-6">
              <div
                className="p-4 p-md-5 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  border: "2px solid rgba(255, 210, 0, 0.45)",
                  boxShadow: "0 12px 36px rgba(7, 28, 62, 0.08)",
                }}
              >
                {/* Decorative Top Accent Line */}
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "5px",
                    background: "linear-gradient(90deg, #ffd200 0%, #ffaa00 100%)",
                  }}
                />

                <div>
                  {/* Leadership Header with Crest & Badges */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold shadow"
                        style={{
                          width: "68px",
                          height: "68px",
                          background: "linear-gradient(135deg, #071c3e 0%, #004a90 100%)",
                          border: "3px solid #ffd200",
                          fontSize: "1.75rem",
                        }}
                      >
                        🏛️
                      </div>
                      <div>
                        <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill small mb-1">
                          {t.about.deskMessages.founder.badge}
                        </span>
                        <h3 className="fw-bold fs-4 text-dark mb-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {t.about.deskMessages.founder.name}
                        </h3>
                        <small className="text-muted fw-semibold">
                          {t.about.deskMessages.founder.role}
                        </small>
                      </div>
                    </div>

                    <span
                      className="d-none d-sm-inline-block text-warning text-opacity-25"
                      style={{ fontSize: "3.5rem", lineHeight: 1, fontFamily: "serif" }}
                    >
                      “
                    </span>
                  </div>

                  {/* Inspiring Pull-Quote */}
                  <div
                    className="p-3 rounded-3 mb-4 position-relative"
                    style={{
                      background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                      borderLeft: "4px solid #f59e0b",
                    }}
                  >
                    <p className="mb-0 fst-italic fw-medium text-dark" style={{ lineHeight: 1.6, fontSize: "0.98rem" }}>
                      &ldquo;{t.about.deskMessages.founder.quote}&rdquo;
                    </p>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="text-muted mb-4 d-flex flex-column gap-3" style={{ lineHeight: 1.7, fontSize: "0.96rem" }}>
                    {t.about.deskMessages.founder.paragraphs.map((p, idx) => (
                      <p key={idx} className="mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Highlights Pill Row */}
                  <div className="d-flex flex-wrap gap-2 pt-3 border-top mb-4">
                    {t.about.deskMessages.founder.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="badge px-3 py-2 rounded-pill fw-semibold"
                        style={{
                          backgroundColor: "#fef3c7",
                          color: "#92400e",
                          border: "1px solid #fde68a",
                          fontSize: "0.82rem",
                        }}
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Formal Sign-off */}
                  <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                    <div>
                      <small className="text-muted d-block">With warm regards & dedication,</small>
                      <strong className="text-dark fs-6 d-block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {t.about.deskMessages.founder.name}
                      </strong>
                      <span className="small text-muted">{t.about.deskMessages.founder.role}</span>
                    </div>
                    <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small fw-bold">
                      Est. 2018
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Branch Head's Message Card */}
            <div className="col-lg-6">
              <div
                className="p-4 p-md-5 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  border: "2px solid rgba(14, 165, 233, 0.4)",
                  boxShadow: "0 12px 36px rgba(7, 28, 62, 0.08)",
                }}
              >
                {/* Decorative Top Accent Line */}
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "5px",
                    background: "linear-gradient(90deg, #0ea5e9 0%, #10b981 100%)",
                  }}
                />

                <div>
                  {/* Leadership Header with Crest & Badges */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold shadow"
                        style={{
                          width: "68px",
                          height: "68px",
                          background: "linear-gradient(135deg, #0f766e 0%, #0284c7 100%)",
                          border: "3px solid #38bdf8",
                          fontSize: "1.75rem",
                        }}
                      >
                        🎓
                      </div>
                      <div>
                        <span className="badge bg-info-subtle text-dark border border-info fw-bold px-3 py-1 rounded-pill small mb-1">
                          {t.about.deskMessages.branchHead.badge}
                        </span>
                        <h3 className="fw-bold fs-4 text-dark mb-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {t.about.deskMessages.branchHead.name}
                        </h3>
                        <small className="text-muted fw-semibold">
                          {t.about.deskMessages.branchHead.role}
                        </small>
                      </div>
                    </div>

                    <span
                      className="d-none d-sm-inline-block text-info text-opacity-25"
                      style={{ fontSize: "3.5rem", lineHeight: 1, fontFamily: "serif" }}
                    >
                      “
                    </span>
                  </div>

                  {/* Inspiring Pull-Quote */}
                  <div
                    className="p-3 rounded-3 mb-4 position-relative"
                    style={{
                      background: "linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)",
                      borderLeft: "4px solid #0ea5e9",
                    }}
                  >
                    <p className="mb-0 fst-italic fw-medium text-dark" style={{ lineHeight: 1.6, fontSize: "0.98rem" }}>
                      &ldquo;{t.about.deskMessages.branchHead.quote}&rdquo;
                    </p>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="text-muted mb-4 d-flex flex-column gap-3" style={{ lineHeight: 1.7, fontSize: "0.96rem" }}>
                    {t.about.deskMessages.branchHead.paragraphs.map((p, idx) => (
                      <p key={idx} className="mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Highlights Pill Row */}
                  <div className="d-flex flex-wrap gap-2 pt-3 border-top mb-4">
                    {t.about.deskMessages.branchHead.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="badge px-3 py-2 rounded-pill fw-semibold"
                        style={{
                          backgroundColor: "#e0f2fe",
                          color: "#0369a1",
                          border: "1px solid #bae6fd",
                          fontSize: "0.82rem",
                        }}
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Formal Sign-off */}
                  <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                    <div>
                      <small className="text-muted d-block">In partnership for your child&apos;s growth,</small>
                      <strong className="text-dark fs-6 d-block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {t.about.deskMessages.branchHead.name}
                      </strong>
                      <span className="small text-muted">{t.about.deskMessages.branchHead.role}</span>
                    </div>
                    <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small fw-bold">
                      Campus Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 6: 8-YEAR JOURNEY IN TIMELINE VIEW (2018 - 2026)
         ------------------------------------------------------------------- */}
      <section
        id="journey-timeline"
        className="py-5 border-top border-bottom"
        style={{ backgroundColor: "#fffdf5" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">{t.about.timeline.tag}</span>
            <h2
              className="display-6 fw-bold mb-3"
              style={{ color: "var(--primary-royal)", fontFamily: "'Poppins', sans-serif" }}
            >
              {t.about.timeline.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5" style={{ lineHeight: 1.6 }}>
              {t.about.timeline.subtitle}
            </p>
          </div>

          {/* Interactive Timeline Component with Phase Filtering */}
          <SchoolTimeline
            items={t.about.timeline.items}
            filterLabels={{
              all: t.about.timeline.filterAll,
              phase1: t.about.timeline.filterPhase1,
              phase2: t.about.timeline.filterPhase2,
            }}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 7: VISION, MISSION, VALUES & COMMUNITY
         ------------------------------------------------------------------- */}
      <section className="py-5" id="vision-mission" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">FOUNDATIONAL GUIDING PRINCIPLES</span>
            <h2 className="display-6 fw-bold mb-3" style={{ color: "var(--primary-royal)" }}>
              Vision, Mission & Guiding Ethics
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              Our core pillars ensure that every child experiences intellectual stimulation, character fortitude, and warm emotional support every single day.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 bg-white border shadow-sm h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary fw-bold"
                    style={{ width: "44px", height: "44px", fontSize: "1.3rem" }}
                  >
                    🏆
                  </span>
                  <h5 className="fw-bold mb-0 text-primary">{t.about.vision.title}</h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.vision.description}
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 bg-white border shadow-sm h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center bg-success-subtle text-success fw-bold"
                    style={{ width: "44px", height: "44px", fontSize: "1.3rem" }}
                  >
                    🎯
                  </span>
                  <h5 className="fw-bold mb-0 text-success">{t.about.mission.title}</h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.mission.description}
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 bg-white border shadow-sm h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center bg-warning-subtle text-warning fw-bold"
                    style={{ width: "44px", height: "44px", fontSize: "1.3rem" }}
                  >
                    💡
                  </span>
                  <h5 className="fw-bold mb-0 text-warning">{t.about.values.title}</h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.values.description}
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 bg-white border shadow-sm h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    className="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "44px",
                      height: "44px",
                      fontSize: "1.3rem",
                      backgroundColor: "rgba(111, 66, 193, 0.12)",
                      color: "var(--secondary-grape)",
                    }}
                  >
                    🤝
                  </span>
                  <h5 className="fw-bold mb-0" style={{ color: "var(--secondary-grape)" }}>
                    {t.about.community.title}
                  </h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.community.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 8: BEYOND ACADEMICS - HOLISTIC CHILD GROWTH
         ------------------------------------------------------------------- */}
      <section
        className="py-5 border-top border-bottom"
        id="beyond-academics"
        style={{ backgroundColor: "#fff9e8" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">{t.about.moreThanAcademics.tag}</span>
            <h2 className="display-5 fw-bold mb-3">{t.about.moreThanAcademics.heading}</h2>
            <p className="text-muted col-md-7 mx-auto">
              {t.about.moreThanAcademics.description}
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-yellow mx-auto">🌟</div>
                <h4 className="fw-bold mb-3">{t.about.holisticCards[0].title}</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.holisticCards[0].description}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-blue mx-auto">🤝</div>
                <h4 className="fw-bold mb-3">{t.about.holisticCards[1].title}</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.holisticCards[1].description}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-green mx-auto">🎯</div>
                <h4 className="fw-bold mb-3">{t.about.holisticCards[2].title}</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: 1.65 }}>
                  {t.about.holisticCards[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
         SECTION 9: LUMINOUS ADMISSIONS & CAMPUS VISIT CTA
         ------------------------------------------------------------------- */}
      <section id="about-cta" className="py-5" style={{ backgroundColor: "transparent" }}>
        <div className="container">
          <div className="curriculum-cta-card p-4 p-md-5 rounded-4 text-white position-relative overflow-hidden shadow-lg">
            {/* Soft decorative background glows */}
            <div
              className="position-absolute"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 210, 0, 0.22) 0%, rgba(255, 210, 0, 0) 70%)",
                top: "-70px",
                right: "-60px",
                pointerEvents: "none",
              }}
            />
            <div
              className="position-absolute"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0, 168, 255, 0.2) 0%, rgba(0, 168, 255, 0) 70%)",
                bottom: "-60px",
                left: "-50px",
                pointerEvents: "none",
              }}
            />

            <div className="row align-items-center g-4 position-relative z-2">
              <div className="col-lg-7 text-center text-lg-start">
                <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill small mb-3">
                  🌟 {t.about.heroBox.title}
                </span>
                <h3 className="display-6 fw-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Join the Rising Kids School Family
                </h3>
                <p className="lead text-white text-opacity-90 mb-4" style={{ fontSize: "1.08rem" }}>
                  {t.about.heroBox.description}
                </p>

                {/* Highlights tags */}
                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4">
                  <span
                    className="badge px-3 py-2 rounded-pill"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    🏛️ Govt. Recognized
                  </span>
                  <span
                    className="badge px-3 py-2 rounded-pill"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    📋 PRASHAST & UDISE+
                  </span>
                  <span
                    className="badge px-3 py-2 rounded-pill"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    🆔 Student PEN & APAAR
                  </span>
                  <span
                    className="badge px-3 py-2 rounded-pill"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    ⏳ 8 Years of Trust
                  </span>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="text-center text-lg-end">
                  <div
                    className="p-4 rounded-4 d-inline-block w-100 shadow-sm"
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
                      Start Your Child&apos;s Journey Today
                    </div>

                    {/* Primary & Secondary Action Buttons */}
                    <div className="d-grid gap-2 mb-3">
                      <Link
                        href="/#contact-section"
                        className="btn cta-btn-gold btn-lg rounded-pill text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem" }}
                      >
                        <span>🎒 {t.about.heroBox.button}</span>
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
                        <span>📍 Visit School Campus</span>
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
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I want to know more about Rising Kids School admissions and government recognition.")}`}
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
