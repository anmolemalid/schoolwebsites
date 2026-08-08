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

  return (
    <div className="facilities-page">
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
                    {t.nav.facilities}
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">{t.facilities.banner.kicker}</div>
              <h1 className="page-blue-banner-title">{t.facilities.banner.title}</h1>
              <p className="page-blue-banner-subtitle mb-3">
                {t.facilities.banner.subtitle}
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
                <div className="fw-bold fs-5 text-warning mb-1">{t.facilities.heroBox.title}</div>
                <div className="small mb-3 text-white text-opacity-90">{t.facilities.heroBox.description}</div>
                <Link href="/contact" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>{t.facilities.heroBox.button}</span>
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

      {/* Facilities Grid Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
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
            {facilityItems.map((item: any, idx: number) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between transition-all"
                  style={{
                    borderTop: `4px solid ${item.accentBorder}`,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div>
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h3 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Hygiene Standards on Warm Cream */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100 text-center">
                  <div className="fs-1 mb-2">{std.icon}</div>
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
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5 rounded-4 text-white text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 shadow-sm"
            style={{ backgroundColor: "#004a90", border: "2px solid #ffd200" }}
          >
            <div>
              <h2 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.facilities.actionBanner.title}
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                {t.facilities.actionBanner.subtitle}
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                {t.facilities.actionBanner.visitButton}
              </Link>
              <Link
                href="/admissions"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <span>{t.facilities.actionBanner.admissionsButton}</span>
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
