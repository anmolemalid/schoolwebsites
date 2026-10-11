import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";

export const metadata: Metadata = {
  title: t.meta.pages.curriculum.title,
  description: t.meta.pages.curriculum.description,
};

export default function CurriculumPage() {
  const learningAreas = t.curriculum.wholeChild.learningAreas;
  const classPrograms = t.curriculum.classStructure.programs;

  return (
    <div className="curriculum-page">
      {/* Full Width Curriculum Hero Banner Image with Overlay Breadcrumb */}
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
                  <span>📚</span>
                  <span>{t.nav.curriculum}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center flex-wrap gap-1 banner-breadcrumb-chips">
                  <a
                    href="#whole-child"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🌱</span>
                    <span>Whole-Child</span>
                  </a>

                  <a
                    href="#learning-levels"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎓</span>
                    <span>Learning Levels</span>
                  </a>

                  <a
                    href="#contact-cta"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>💬</span>
                    <span>Enquire</span>
                  </a>
                </div>
              </nav>

              {/* Curriculum Level Badge on Right of Banner */}
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
                  <span>Playgroup to Class V</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/slider/hero_banner_4_mobile.jpg"
          />
          <img
            src="/assets/slider/hero_banner_4.jpg"
            alt="Rising Star Academy Curriculum & Holistic Development"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* Whole-Child Development Section */}
      <section id="whole-child" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.curriculum.wholeChild.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.curriculum.wholeChild.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              {t.curriculum.wholeChild.subheading}
            </p>
          </div>

          {/* 6 Whole-Child Learning Area Cards */}
          <div className="row g-4">
            {learningAreas.map((area: any, idx: number) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between transition-all"
                  style={{
                    borderTop: `4px solid ${area.accentBorder}`,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div>
                    <div className="fs-1 mb-3">{area.icon}</div>
                    <h3 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {area.title}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Wise Learning Levels Section */}
      <section id="learning-levels" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.curriculum.classStructure.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.curriculum.classStructure.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              {t.curriculum.classStructure.subheading}
            </p>
          </div>

          <div className="row g-4">
            {classPrograms.map((prog: any, idx: number) => (
              <div key={idx} className="col-md-6">
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fw-bold mb-0 text-primary fs-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {prog.level}
                    </h3>
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">{prog.age}</span>
                  </div>
                  <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>{prog.desc}</p>
                  <h6 className="fw-bold text-dark mb-2 small text-uppercase" style={{ letterSpacing: "0.5px" }}>{t.curriculum.classStructure.keyFocusLabel}</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {prog.focus.map((item: string, fIdx: number) => (
                      <span key={fIdx} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                        ✨ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Know More? Section */}
      <section id="contact-cta" className="py-5" style={{ backgroundColor: "#ffffff" }}>
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
                    <span>PERSONALIZED ACADEMIC GUIDANCE</span>
                  </div>

                  {/* Heading */}
                  <h2 className="display-6 fw-bold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.curriculum.ctaBanner.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="lead text-white text-opacity-90 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "600px" }}>
                    {t.curriculum.ctaBanner.subtitle}
                  </p>

                  {/* Trust / Benefit Chips */}
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                    <span className="cta-feature-chip">
                      <span>🎯</span>
                      <span>Age-Wise Milestones</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🏫</span>
                      <span>Campus Tour & Walkthrough</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>👨‍👩‍👧</span>
                      <span>Friendly Counselor Session</span>
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
                      Get In Touch Directly
                    </div>
                    <div className="text-white fw-bold fs-5 mb-3">
                      Book a Visit or Ask Any Question
                    </div>

                    {/* Primary & Secondary Action Buttons */}
                    <div className="d-grid gap-2 mb-3">
                      <Link
                        href="/contact"
                        className="btn cta-btn-gold btn-lg rounded-pill text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ letterSpacing: "0.5px", fontSize: "0.95rem" }}
                      >
                        <span>📞 {t.curriculum.ctaBanner.talkButton}</span>
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
                        <span>🎒 {t.curriculum.ctaBanner.admissionsButton}</span>
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
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I want to know more about the curriculum and admissions at Rising Kids School.")}`}
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
