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
      {/* Royal Blue Hero Banner */}
      <section className="page-blue-banner">
        <div className="container position-relative z-2">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-7 text-center text-lg-start">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2" style={{ fontSize: "0.88rem" }}>
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-white text-opacity-75 text-decoration-none">
                      {t.nav.home}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                    {t.nav.aboutUs}
                  </li>
                </ol>
              </nav>

              {/* Kicker & Title */}
              <div className="page-blue-banner-kicker">{t.about.kicker}</div>
              <h1 className="page-blue-banner-title">{t.about.banner.title}</h1>
              <p className="page-blue-banner-subtitle mb-3">
                {t.school.gradeSpan} &nbsp;|&nbsp; {t.school.system} &nbsp;|&nbsp; {t.school.medium} &nbsp;|&nbsp; {t.school.recognition}
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
              <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-25 shadow-sm text-center text-white d-inline-block w-100" style={{ maxWidth: "340px" }}>
                <div className="fw-bold fs-5 text-warning mb-1">{t.about.heroBox.title}</div>
                <div className="small mb-3 text-white text-opacity-90">{t.about.heroBox.description}</div>
                <Link href="/admissions" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>{t.about.heroBox.button}</span>
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

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <h5 className="fw-bold mb-1 text-primary">{t.about.vision.title}</h5>
                    <p className="small text-muted mb-0">{t.about.vision.description}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <h5 className="fw-bold mb-1 text-success">{t.about.mission.title}</h5>
                    <p className="small text-muted mb-0">{t.about.mission.description}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <h5 className="fw-bold mb-1 text-warning">{t.about.values.title}</h5>
                    <p className="small text-muted mb-0">{t.about.values.description}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <h5 className="fw-bold mb-1 text-purple" style={{ color: "var(--secondary-grape)" }}>{t.about.community.title}</h5>
                    <p className="small text-muted mb-0">{t.about.community.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Academics Section */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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
    </div>
  );
}
