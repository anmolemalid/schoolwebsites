import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";

export const metadata: Metadata = {
  title: t.meta.pages.about.title,
  description: t.meta.pages.about.description,
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
                  <span>{t.nav.aboutUs}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center gap-1 banner-breadcrumb-chips">
                  <a
                    href="#welcome"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📖</span>
                    <span>Our Story</span>
                  </a>

                  <a
                    href="#vision-mission"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎯</span>
                    <span>Vision & Mission</span>
                  </a>

                  <a
                    href="#beyond-academics"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🌟</span>
                    <span>Holistic Growth</span>
                  </a>

                  <a
                    href="#about-cta"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎒</span>
                    <span>Admissions</span>
                  </a>
                </div>
              </nav>

              {/* Franchise Badge on Right of Banner (Shown on >= 1024px) */}
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
                  <span>Est. 2018 | Rising Kids Franchise</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Banner Image (Mobile portrait vs Desktop landscape) */}
        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/slider/hero_banner_2_mobile.jpg"
          />
          <img
            src="/assets/slider/hero_banner_2.jpg"
            alt="Rising Kids School - About Us - A Nurturing Space for Confident, Curious and Compassionate Learners"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* Welcome & Story Section */}
      <section className="py-5" id="welcome">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative p-2 bg-white rounded-4 shadow-sm border">
                <img
                  src="/assets/school-banner.jpg"
                  alt="Rising Kids School Campus"
                  className="img-fluid rounded-4 w-100 object-fit-cover"
                  style={{ maxHeight: "420px" }}
                />
                <div className="position-absolute bottom-0 start-0 m-3 p-3 bg-white rounded-3 shadow border text-center">
                  <strong className="d-block text-primary fs-5">{t.school.gradeSpan}</strong>
                  <small className="text-muted fw-bold">{t.school.medium} | {t.school.system.replace("Co-Education", "Co-Ed")}</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="badge-pill-kids mb-2">{t.about.welcome.tag}</span>
              <h2 className="display-6 fw-bold mb-3" style={{ color: "var(--primary-royal)" }}>
                {t.about.welcome.heading}
              </h2>
              <p className="text-muted fs-5 mb-3">
                {t.about.welcome.paragraph1}
              </p>
              <p className="text-muted mb-4">
                {t.about.welcome.paragraph2}
              </p>

              {/* Vision, Mission, Values & Community Cards */}
              <div className="row g-3" id="vision-mission">
                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary fw-bold"
                        style={{ width: "36px", height: "36px", fontSize: "1.1rem" }}
                      >
                        🏆
                      </span>
                      <h5 className="fw-bold mb-0 text-primary">{t.about.vision.title}</h5>
                    </div>
                    <p className="small text-muted mb-0">{t.about.vision.description}</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-success-subtle text-success fw-bold"
                        style={{ width: "36px", height: "36px", fontSize: "1.1rem" }}
                      >
                        🎯
                      </span>
                      <h5 className="fw-bold mb-0 text-success">{t.about.mission.title}</h5>
                    </div>
                    <p className="small text-muted mb-0">{t.about.mission.description}</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-warning-subtle text-warning fw-bold"
                        style={{ width: "36px", height: "36px", fontSize: "1.1rem" }}
                      >
                        💡
                      </span>
                      <h5 className="fw-bold mb-0 text-warning">{t.about.values.title}</h5>
                    </div>
                    <p className="small text-muted mb-0">{t.about.values.description}</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-4 bg-white border shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold"
                        style={{
                          width: "36px",
                          height: "36px",
                          fontSize: "1.1rem",
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
                    <p className="small text-muted mb-0">{t.about.community.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Academics Section */}
      <section className="py-5 border-top border-bottom" id="beyond-academics" style={{ backgroundColor: "#fff9e8" }}>
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
                <p className="text-muted small mb-0">
                  {t.about.holisticCards[0].description}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-blue mx-auto">🤝</div>
                <h4 className="fw-bold mb-3">{t.about.holisticCards[1].title}</h4>
                <p className="text-muted small mb-0">
                  {t.about.holisticCards[1].description}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-green mx-auto">🎯</div>
                <h4 className="fw-bold mb-3">{t.about.holisticCards[2].title}</h4>
                <p className="text-muted small mb-0">
                  {t.about.holisticCards[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luminous Interactive Admissions & Campus Visit CTA */}
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
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    ❤️ Safe & Nurturing
                  </span>
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    🌱 Play-Based Learning
                  </span>
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    💡 Holistic Growth
                  </span>
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    🎓 Academic Excellence
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
                        href="/admissions"
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
                        href={`https://wa.me/${t.school.contacts.phonePrimary.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I want to know more about Rising Kids School and admissions.")}`}
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
