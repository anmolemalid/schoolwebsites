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
                    {t.nav.events}
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">{t.events.banner.kicker}</div>
              <h1 className="page-blue-banner-title">{t.events.banner.title}</h1>
              <p className="page-blue-banner-subtitle mb-3">
                {t.events.banner.subtitle}
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
                <div className="fw-bold fs-5 text-warning mb-1">{t.events.heroBox.title}</div>
                <div className="small mb-3 text-white text-opacity-90">{t.events.heroBox.description}</div>
                <Link href="/contact" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>{t.events.heroBox.button}</span>
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

      {/* Events Grid Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
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
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100 text-center">
                  <div className="fs-1 mb-2">{item.icon}</div>
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
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5 rounded-4 text-white text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 shadow-sm"
            style={{ backgroundColor: "#004a90", border: "2px solid #ffd200" }}
          >
            <div>
              <h2 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.events.actionBanner.title}
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                {t.events.actionBanner.subtitle}
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                href="/admissions"
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                {t.events.actionBanner.enquireButton}
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <span>{t.events.actionBanner.contactButton}</span>
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
    </div>
  );
}
