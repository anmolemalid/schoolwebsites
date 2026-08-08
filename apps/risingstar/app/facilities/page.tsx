import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";

export const metadata: Metadata = {
  title: t.meta.pages.facilities.title,
  description: t.meta.pages.facilities.description,
};

const facilityItems = [
  {
    icon: "📖",
    title: "Smart Learning Classrooms",
    desc: "Air-conditioned rooms with child-safe wooden furniture, interactive audiovisual smart screens, and colorful soft wall cushioning.",
    accentBorder: "#ffd200",
  },
  {
    icon: "💻",
    title: "Computer & IT Lab",
    desc: "Dedicated computers with educational learning software, headsets, and age-appropriate early coding & typing logic modules.",
    accentBorder: "#004a90",
  },
  {
    icon: "🛡️",
    title: "24x7 CCTV & Safe Campus",
    desc: "Continuous camera surveillance in all classrooms, entry gates, corridors, and play lawns with verified security personnel.",
    accentBorder: "#ef4444",
  },
  {
    icon: "🚌",
    title: "GPS Van & Bus Transport",
    desc: "Clean, well-maintained school vans with real-time GPS tracking covering Vijay Nagar, Pratap Vihar, and Siddharth Vihar.",
    accentBorder: "#22c55e",
  },
  {
    icon: "📚",
    title: "School Library & Story Corner",
    desc: "Rich collection of picture storybooks, bilingual readers, encyclopedia, and quiet reading nooks fostering early literacy.",
    accentBorder: "#06b6d4",
  },
  {
    icon: "⚽",
    title: "Outdoor Play Lawn & Swings",
    desc: "Lush grassy play lawn with safe rubberized swings, slides, climbers, and morning sports activities for physical development.",
    accentBorder: "#8b5cf6",
  },
];

const safetyStandards = [
  {
    icon: "💧",
    title: "RO Purified Water",
    desc: "100% pure drinking water with multi-stage filtration checked daily for child health.",
  },
  {
    icon: "🧼",
    title: "Sanitized Restrooms",
    desc: "Child-friendly, low-height washrooms cleaned and disinfected multiple times every day.",
  },
  {
    icon: "🩺",
    title: "First-Aid Ready",
    desc: "Equipped medical room and trained staff for immediate care and doctor-on-call support.",
  },
  {
    icon: "🚸",
    title: "Gated Security",
    desc: "Single-point gated access with visitor badge protocol and child pickup verification.",
  },
];

export default function FacilitiesPage() {
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
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                    Facilities
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">Safe, Smart &amp; Joyful Environment</div>
              <h1 className="page-blue-banner-title">Our School Facilities</h1>
              <p className="page-blue-banner-subtitle mb-3">
                Play Group to Class V &nbsp;|&nbsp; Co-Education &nbsp;|&nbsp; English Medium &nbsp;|&nbsp; Govt. Recognized
              </p>

              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill">
                  ⭐ A Proud Hello Kids Franchise
                </span>
                <span className="badge bg-white text-primary fw-bold px-3 py-2 rounded-pill">
                  📍 New Vijay Nagar, Ghaziabad
                </span>
              </div>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-25 shadow-sm text-center text-white d-inline-block w-100" style={{ maxWidth: "320px" }}>
                <div className="fw-bold fs-5 text-warning mb-1">Campus Tour</div>
                <div className="small mb-3 text-white text-opacity-90">Experience our classrooms, play lawns &amp; IT lab in person.</div>
                <Link href="/contact" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>Book Campus Visit</span>
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
              CAMPUS HIGHLIGHTS
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Designed for Young Learners
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              We provide state-of-the-art facilities that spark curiosity and keep children safe, healthy, and happy every single day.
            </p>
          </div>

          {/* 6 Facility Cards */}
          <div className="row g-4">
            {facilityItems.map((item, idx) => (
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
              CARE &amp; SAFETY
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Health &amp; Hygiene Standards
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              Ensuring the highest levels of child well-being, cleanliness, and security across the entire school campus.
            </p>
          </div>

          <div className="row g-4">
            {safetyStandards.map((std, idx) => (
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
                Want to see our campus in person?
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                Book a personalized walk-through tour with our principal and coordinator.
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                Book Campus Visit
              </Link>
              <Link
                href="/admissions"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <span>Admissions</span>
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
