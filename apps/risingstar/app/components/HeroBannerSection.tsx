"use client";

import Link from "next/link";
import { t } from "../lib/i18n";

export default function HeroBannerSection() {
  return (
    <>
      {/* =========================================================================
          1. MOBILE & TABLET HERO BANNER (Active on screens < 992px)
             Matches the user-provided mobile banner design screenshot exactly
             Full-width kids image + Vertical Blue-to-White gradient background
          ========================================================================= */}
      <section
        className="d-block d-lg-none position-relative overflow-hidden pt-4 pb-4"
        style={{
          background: "linear-gradient(180deg, #002d62 0%, #003e85 32%, #0b5aa5 55%, #e9f2fb 80%, #ffffff 100%)",
        }}
      >
        {/* Yellow Paper Airplane Doodle with Dotted Trail */}
        <div
          className="position-absolute"
          style={{
            top: "10px",
            right: "12px",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 80 C 25 75, 40 85, 55 60 C 65 45, 60 30, 48 38 C 40 45, 50 60, 68 45"
              stroke="#ffd200"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M62 48 L92 14 L42 36 L62 48 Z M92 14 L68 56 L62 48 Z"
              fill="#ffd200"
              stroke="#ffd200"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Faint Doodles in Background */}
        <div
          className="position-absolute"
          style={{ top: "25%", right: "8px", opacity: 0.25, pointerEvents: "none" }}
        >
          <span style={{ fontSize: "1.3rem", color: "#ffffff" }}>🌸</span>
        </div>
        <div
          className="position-absolute"
          style={{ top: "30%", left: "8px", opacity: 0.25, pointerEvents: "none" }}
        >
          <span style={{ fontSize: "1.2rem", color: "#ffd200" }}>⭐</span>
        </div>

        {/* Top Text Content in Padded Container */}
        <div className="container px-3 position-relative z-2" style={{ maxWidth: "540px" }}>
          {/* Cursive Kicker */}
          <div
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "2.1rem",
              fontWeight: 700,
              color: "#ffd200",
              lineHeight: 1.1,
              marginBottom: "0.2rem",
            }}
          >
            Where Young Minds
          </div>

          {/* Bold Condensed Headline */}
          <h1
            className="fw-bold mb-2 text-uppercase"
            style={{
              fontFamily: "'Oswald', 'Impact', sans-serif",
              fontSize: "calc(2.3rem + 1.2vw)",
              lineHeight: 1.02,
              letterSpacing: "0.5px",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#ffffff", display: "block" }}>LEARN, GROW &amp;</span>
            <span style={{ color: "#ffd200", display: "block" }}>SHINE TOGETHER</span>
          </h1>

          {/* Dotted Accent Line */}
          <div
            style={{
              width: "100%",
              height: "2px",
              borderBottom: "2px dotted #ffd200",
              margin: "0.6rem 0 0.6rem 0",
              opacity: 0.85,
            }}
          />

          {/* Subheading: Play Group to Class V */}
          <div
            className="fw-bold mb-2"
            style={{
              fontSize: "1.2rem",
              color: "#ffffff",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Play Group to Class V
          </div>

          {/* 3 Icons Line: Co-Education | English Medium | Govt. Recognized */}
          <div
            className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2"
            style={{ fontSize: "0.86rem", color: "#ffffff", fontWeight: 600 }}
          >
            <div className="d-flex align-items-center gap-1">
              <span style={{ color: "#ffd200", fontSize: "1.1rem" }}>👥</span>
              <span>Co-Education</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <span style={{ color: "#ffd200", fontSize: "1.1rem" }}>📖</span>
              <span>English Medium</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <span style={{ color: "#ffd200", fontSize: "1.1rem" }}>🛡️</span>
              <span>Govt. Recognized</span>
            </div>
          </div>
        </div>

        {/* Full-Width Kids Image with Asymmetric Right-Leaning Arch Curve & Yellow Border on Top */}
        <div
          className="w-100 my-0 position-relative text-center overflow-hidden"
          style={{
            borderRadius: "55% 45% 0 0 / 95px 95px 0 0",
            border: "3.5px solid #ffd200",
            borderBottom: "none",
          }}
        >
          <img
            src="/assets/hero_kids_thumbs_up.png"
            alt="Rising Kids School Students Thumbs Up"
            className="w-100 h-auto d-block mx-auto"
            style={{
              maxHeight: "460px",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              borderRadius: "55% 45% 0 0 / 95px 95px 0 0",
            }}
            onError={(e) => {
              // Fallback to banner.png if hero_kids_thumbs_up is not available
              (e.target as HTMLImageElement).src = "/assets/banner.png";
            }}
          />
        </div>

        {/* Floating White Admissions Card */}
        <div className="container px-3 position-relative z-2" style={{ maxWidth: "540px", marginTop: "-28px" }}>
          <div
            className="bg-white rounded-4 p-3 shadow-lg text-center position-relative"
            style={{
              borderRadius: "22px",
              boxShadow: "0 12px 30px rgba(0, 45, 98, 0.22)",
              color: "#002d62",
              border: "1px solid rgba(0, 45, 98, 0.08)",
            }}
          >
            {/* Top row: Megaphone + ADMISSIONS OPEN 2026-27 */}
            <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
              {/* Exact Announcement Megaphone Icon Vector */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(-10deg)", flexShrink: 0 }}
                >
                  {/* Soundwave Rays radiating from mouth */}
                  <path d="M74 14 L80 8" stroke="#d90429" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M85 24 L95 20" stroke="#f77f00" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M87 38 L97 38" stroke="#f77f00" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M82 50 L91 56" stroke="#d90429" strokeWidth="4.5" strokeLinecap="round" />

                  {/* Red Handle & Grip */}
                  <path
                    d="M27 60 L34 82 C 34 84, 30 87, 25 86 L20 81 C 17 78, 18 73, 23 60 Z"
                    fill="#d90429"
                    stroke="#9b111e"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path d="M26 66 L31 80" stroke="#ffd200" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

                  {/* Golden hinge joint */}
                  <rect x="23" y="52" width="16" height="12" rx="3" fill="#ffc72c" stroke="#b08900" strokeWidth="2.5" />

                  {/* Yellow/Cream Main Cone */}
                  <path
                    d="M27 34 L72 17 C 74 16, 76 17, 76 20 L76 66 C 76 69, 74 70, 72 69 L27 52 C 24 51, 23 48, 23 45 L23 41 C 23 38, 24 35, 27 34 Z"
                    fill="#fff3b0"
                    stroke="#b08900"
                    strokeWidth="2.8"
                    strokeLinejoin="round"
                  />
                  {/* Shading/Highlights on cone */}
                  <path
                    d="M27 37 L70 23 L70 38 L27 46 Z"
                    fill="#ffffff"
                    opacity="0.8"
                  />
                  <path
                    d="M27 46 L70 38 L70 63 L27 50 Z"
                    fill="#ffd166"
                    opacity="0.85"
                  />

                  {/* Red Front Mouth Ring (Speaker Opening) */}
                  <ellipse
                    cx="74"
                    cy="43"
                    rx="7.5"
                    ry="24"
                    fill="#d90429"
                    stroke="#9b111e"
                    strokeWidth="3"
                  />
                  {/* Dark inner hole */}
                  <ellipse
                    cx="74"
                    cy="43"
                    rx="3.5"
                    ry="17"
                    fill="#590d22"
                  />

                  {/* Back Red Cap */}
                  <path
                    d="M23 37 C 16 39, 16 47, 23 49 Z"
                    fill="#d90429"
                    stroke="#9b111e"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              {/* Admission Text */}
              <div className="text-start">
                <div
                  className="fw-bold text-uppercase"
                  style={{
                    color: "#002d62",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    letterSpacing: "0.5px",
                    lineHeight: 1.1,
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  ADMISSIONS OPEN
                </div>
                <div
                  className="fw-bold"
                  style={{
                    color: "#d90429",
                    fontSize: "1.65rem",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: "1px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  2026-27
                </div>
              </div>
            </div>

            {/* Tagline: Safe | Caring | Creative | Future Ready */}
            <div
              className="text-muted fw-bold small mb-3"
              style={{
                fontSize: "0.84rem",
                letterSpacing: "0.2px",
                color: "#495057",
              }}
            >
              Safe &nbsp;|&nbsp; Caring &nbsp;|&nbsp; Creative &nbsp;|&nbsp; Future Ready
            </div>

            {/* ENQUIRE NOW Button with Arrow Icon */}
            <Link
              href="/admissions"
              className="btn w-100 fw-bold d-flex align-items-center justify-content-center gap-2 py-2 px-3 text-uppercase text-decoration-none shadow-sm"
              style={{
                backgroundColor: "#ffc72c",
                color: "#002d62",
                borderRadius: "50px",
                fontSize: "1.05rem",
                fontWeight: 900,
                letterSpacing: "0.5px",
                border: "none",
              }}
            >
              <span>ENQUIRE NOW</span>
              <span
                className="rounded-circle d-inline-flex align-items-center justify-content-center text-white"
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "#002d62",
                  marginLeft: "4px",
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DESKTOP HERO BANNER (Active on screens >= 992px)
             Unchanged exact desktop layout
          ========================================================================= */}
      <section className="hero-banner-exact-container position-relative overflow-hidden d-none d-lg-flex">
        {/* Background Banner Image Layer with /assets/banner.png */}
        <div
          className="hero-banner-bg position-absolute top-0 start-0 w-100 h-100"
          style={{
            zIndex: 1,
          }}
        />

        <div className="container-fluid px-3 px-lg-5 py-3 py-lg-0 position-relative w-100" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-2 g-lg-3 hero-banner-content-row">

            {/* =========================================================
                1. LEFT COLUMN: Text, Cursive Kicker, Headline, Badges
                ========================================================= */}
            <div className="col-12 col-lg-4 text-center text-lg-start position-relative z-3 ps-lg-3 pe-lg-2">
              {/* Cursive Yellow Kicker */}
              <div
                className="mb-1"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "calc(1.8rem + 0.6vw)",
                  fontWeight: 700,
                  color: "#ffd200",
                  lineHeight: 1.1,
                  textShadow: "0 2px 6px rgba(0,0,0,0.45)",
                }}
              >
                Where Young Minds
              </div>

              {/* Big Bold Headline */}
              <h1
                className="fw-bold mb-0 text-uppercase"
                style={{
                  fontFamily: "'Oswald', 'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "calc(2.1rem + 1.1vw)",
                  lineHeight: 1.04,
                  letterSpacing: "0.5px",
                  fontWeight: 800,
                  textShadow: "0 3px 10px rgba(0,0,0,0.45)",
                }}
              >
                <span style={{ color: "#ffffff", display: "block" }}>LEARN, GROW &amp;</span>
                <span style={{ color: "#ffd200", display: "block" }}>SHINE TOGETHER</span>
              </h1>

              {/* Yellow Horizontal Accent Line */}
              <div
                className="mx-auto mx-lg-0"
                style={{
                  width: "100%",
                  maxWidth: "340px",
                  height: "2px",
                  backgroundColor: "#ffd200",
                  margin: "0.55rem 0 0.55rem 0",
                }}
              />

              {/* Subheading: Play Group to Class V */}
              <div
                className="text-white fw-bold mb-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "0.2px",
                  textShadow: "0 2px 5px rgba(0,0,0,0.35)",
                }}
              >
                Play Group to Class V
              </div>

              {/* Features: Co-Education | English Medium | Govt. Recognized */}
              <div
                className="text-white small mb-2 mb-lg-0"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "0.3px",
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                Co-Education &nbsp;|&nbsp; English Medium &nbsp;|&nbsp; Govt. Recognized
              </div>
            </div>

            {/* =========================================================
                2. CENTER COLUMN: Transparent Space for 3 Smiling Kids in Arch from banner.png
                ========================================================= */}
            <div className="col-12 col-lg-4 text-center position-relative z-2">
              <div style={{ minHeight: "380px" }}></div>
            </div>

            {/* =========================================================
                3. RIGHT COLUMN: ADMISSIONS OPEN 2026-27 Badge, Checklist, Button
                ========================================================= */}
            <div className="col-12 col-lg-4 position-relative z-3 pe-lg-3 d-flex justify-content-center justify-content-lg-end">
              <div
                className="admissions-exact-box d-flex flex-column align-items-center text-center"
                style={{ maxWidth: "340px", width: "100%" }}
              >

                {/* Admissions Open Badge Card */}
                <div className="text-center mb-2 mx-auto mx-lg-0" style={{ maxWidth: "260px" }}>
                  {/* Top Red Bar: ADMISSIONS */}
                  <div
                    className="text-white fw-bold d-block text-uppercase mx-auto"
                    style={{
                      backgroundColor: "#d90429",
                      padding: "0.3rem 1.2rem",
                      borderRadius: "10px 10px 0 0",
                      letterSpacing: "1.5px",
                      fontSize: "1.05rem",
                      fontWeight: 900,
                      fontFamily: "'Poppins', sans-serif",
                      width: "88%",
                    }}
                  >
                    ADMISSIONS
                  </div>

                  {/* Middle Yellow Plaque: OPEN */}
                  <div
                    className="fw-bold d-block text-center mx-auto"
                    style={{
                      backgroundColor: "#ffd200",
                      color: "#0b3b78",
                      fontFamily: "'Poppins', 'Montserrat', sans-serif",
                      fontSize: "2.7rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      padding: "0.22rem 1rem",
                      borderRadius: "8px",
                      letterSpacing: "1.5px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                      width: "100%",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    OPEN
                  </div>

                  {/* Bottom Red Bar: 2026-27 */}
                  <div
                    className="text-white fw-bold d-block mx-auto"
                    style={{
                      backgroundColor: "#d90429",
                      padding: "0.25rem 1.2rem",
                      borderRadius: "0 0 10px 10px",
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      letterSpacing: "1px",
                      fontFamily: "'Poppins', sans-serif",
                      width: "88%",
                    }}
                  >
                    2026-27
                  </div>
                </div>

                {/* Checklist */}
                <ul className="list-unstyled mb-2 text-start ps-1 ps-lg-2" style={{ color: "#ffffff" }}>
                  <li className="d-flex align-items-center mb-1 fw-semibold" style={{ fontSize: "0.94rem", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                    <span
                      className="rounded-circle me-2 d-inline-flex align-items-center justify-content-center fw-bold shadow-sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffd200",
                        color: "#0b3b78",
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    Safe &amp; Caring Environment
                  </li>
                  <li className="d-flex align-items-center mb-1 fw-semibold" style={{ fontSize: "0.94rem", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                    <span
                      className="rounded-circle me-2 d-inline-flex align-items-center justify-content-center fw-bold shadow-sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffd200",
                        color: "#0b3b78",
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    Smart Learning Classrooms
                  </li>
                  <li className="d-flex align-items-center mb-1 fw-semibold" style={{ fontSize: "0.94rem", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                    <span
                      className="rounded-circle me-2 d-inline-flex align-items-center justify-content-center fw-bold shadow-sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffd200",
                        color: "#0b3b78",
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    Activity Based Learning
                  </li>
                  <li className="d-flex align-items-center mb-2 fw-semibold" style={{ fontSize: "0.94rem", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                    <span
                      className="rounded-circle me-2 d-inline-flex align-items-center justify-content-center fw-bold shadow-sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffd200",
                        color: "#0b3b78",
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    Overall Personality Development
                  </li>
                </ul>

                {/* Yellow Enquire Now Button */}
                <div className="ps-1 ps-lg-2">
                  <Link
                    href="/admissions"
                    className="btn fw-bold py-2 px-4 rounded-pill text-decoration-none d-inline-flex align-items-center justify-content-center shadow-lg"
                    style={{
                      backgroundColor: "#ffd200",
                      color: "#0b3b78",
                      fontSize: "1rem",
                      fontWeight: 900,
                      letterSpacing: "0.5px",
                      boxShadow: "0 4px 15px rgba(255, 193, 7, 0.45)",
                      border: "none",
                      gap: "0.5rem",
                      minWidth: "190px",
                    }}
                  >
                    <span>ENQUIRE NOW</span>
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center text-white"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#0b3b78",
                        marginLeft: "4px",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
