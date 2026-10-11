import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";

export const metadata: Metadata = {
  title: t.meta.pages.events.title,
  description: t.meta.pages.events.description,
};

export default function EventsPage() {
  const eventList = t.events.calendar.items;
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
                  <span>🎉</span>
                  <span>{t.nav.events}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 d-none d-sm-inline mx-1">|</span>

                {/* Interactive Section Jump Chips */}
                <div className="d-none d-sm-inline-flex align-items-center gap-1">
                  <a
                    href="#upcoming-events"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📅</span>
                    <span>Calendar</span>
                  </a>

                  <a
                    href="#event-benefits"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🌟</span>
                    <span>Why Events</span>
                  </a>

                  <a
                    href="#join-events"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>🎒</span>
                    <span>Join Events</span>
                  </a>
                </div>
              </nav>

              {/* Annual Events Badge on Right of Banner */}
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
                  <span>Annual Events & Fests</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/events_banner_mobile.jpg"
          />
          <img
            src="/assets/events_banner.jpg"
            alt="Rising Kids School Our Events - Educational Tours, Annual Day, Sports Day"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* Events Grid Section */}
      <section id="upcoming-events" className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.events.calendar.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.events.calendar.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              {t.events.calendar.subheading}
            </p>
          </div>

          {/* 6 Event Cards */}
          <div className="row g-4">
            {eventList.map((evt: any, idx: number) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between transition-all"
                  style={{
                    borderTop: `4px solid ${evt.accentBorder}`,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="fs-1">{evt.icon}</div>
                      <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small fw-bold">
                        {evt.date}
                      </span>
                    </div>
                    <h3 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {evt.title}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                      {evt.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Through Events Section on Warm Cream */}
      <section id="event-benefits" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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
      <section id="join-events" className="py-5" style={{ backgroundColor: "#ffffff" }}>
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

                  {/* Trust / Benefit Chips */}
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                    <span className="cta-feature-chip">
                      <span>🎤</span>
                      <span>100% Stage Exposure</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🎉</span>
                      <span>Festivals & Celebrations</span>
                    </span>
                    <span className="cta-feature-chip">
                      <span>🏃‍♂️</span>
                      <span>Sports Day & Field Trips</span>
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
