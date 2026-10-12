"use client";

import Link from "next/link";
import { t } from "../lib/i18n";

export default function AdmissionsSessionBanner() {
  const sessionInfo = t.admissions.sessionDetails;

  return (
    <section className="admissions-session-banner-section py-4 py-lg-5 no-print" style={{ backgroundColor: "#f0f6fc" }}>
      <div className="container">
        {/* Main Banner Container */}
        <div
          className="rounded-4 overflow-hidden shadow-lg p-3 p-sm-4 p-md-5 text-white position-relative"
          style={{
            background: "linear-gradient(135deg, #071c3e 0%, #004a90 55%, #0062a4 100%)",
            border: "2px solid rgba(255, 210, 0, 0.45)",
            boxShadow: "0 20px 45px rgba(7, 28, 62, 0.22)",
          }}
        >
          {/* Subtle Background Accent Pattern */}
          <div
            className="position-absolute top-0 end-0 p-4 opacity-10 d-none d-md-block"
            style={{ pointerEvents: "none" }}
          >
            <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          {/* Section Header */}
          <div className="text-center mb-4 position-relative" style={{ zIndex: 2 }}>
            <span
              className="badge px-3 py-2 rounded-pill fw-bold small mb-2 d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: "rgba(255, 210, 0, 0.2)",
                color: "#ffd200",
                border: "1.2px solid rgba(255, 210, 0, 0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span>📢</span>
              <span>{sessionInfo?.tag || "ADMISSION & SESSION SCHEDULE"}</span>
            </span>
            <h2
              className="display-6 fw-bold mb-2 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {sessionInfo?.heading || "Academic Session & Batch Details"}
            </h2>
            <p className="text-white text-opacity-75 col-md-8 mx-auto fs-6 mb-0">
              {sessionInfo?.subheading || "Important timelines for parents planning admissions for session 2027-28."}
            </p>
          </div>

          {/* Two Prominent Detail Cards */}
          <div className="row g-3 g-md-4 position-relative" style={{ zIndex: 2 }}>
            {/* Card 1: All Classes Session Schedule */}
            <div className="col-lg-6">
              <div
                className="h-100 p-3 p-sm-4 rounded-4 d-flex flex-column"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <span
                    className="badge rounded-pill px-3 py-1.5 fw-bold small shadow-sm"
                    style={{ backgroundColor: "#ffd200", color: "#071c3e" }}
                  >
                    {sessionInfo?.allClassesBadge || "🏫 All Classes"}
                  </span>
                  <span
                    className="badge rounded-pill px-2.5 py-1.5 small fw-semibold text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    {sessionInfo?.allClassesSpan || "Playgroup – Class V"}
                  </span>
                </div>

                <h3 className="fs-5 fw-bold mb-3 text-white">
                  {sessionInfo?.allClasses?.title || "Academic Session Schedule"}
                </h3>

                {/* Main Highlight Callout */}
                <div
                  className="p-3 rounded-3 mb-3"
                  style={{
                    backgroundColor: "rgba(255, 210, 0, 0.15)",
                    border: "1.5px solid #ffd200",
                  }}
                >
                  <div className="d-flex align-items-start gap-2">
                    <span className="fs-4 flex-shrink-0">🗓️</span>
                    <div>
                      <div className="fw-bold text-warning fs-5" style={{ letterSpacing: "0.2px" }}>
                        {sessionInfo?.allClasses?.highlight || "Session start from October to April for all classes"}
                      </div>
                      <div className="text-white text-opacity-75 small mt-1">
                        {sessionInfo?.registrationOpen || "Registration & admissions open for current academic term"}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-white text-opacity-75 small mb-0 mt-auto leading-relaxed">
                  {sessionInfo?.allClasses?.desc ||
                    "Admissions and curriculum session start from October to April across all grades (Playgroup, Nursery, L.K.G, U.K.G, and Class I to V)."}
                </p>
              </div>
            </div>

            {/* Card 2: Playgroup Class Admission Batches */}
            <div className="col-lg-6">
              <div
                className="h-100 p-3 p-sm-4 rounded-4 d-flex flex-column"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <span
                    className="badge rounded-pill px-3 py-1.5 fw-bold small text-white shadow-sm"
                    style={{ backgroundColor: "#2e7d32" }}
                  >
                    {sessionInfo?.playgroupBadge || "👶 Playgroup Admissions"}
                  </span>
                  <span className="badge bg-success-subtle text-success border border-success border-opacity-25 px-2.5 py-1.5 rounded-pill small fw-bold">
                    {sessionInfo?.twoBatchesBadge || "2 Flexible Batches"}
                  </span>
                </div>

                <h3 className="fs-5 fw-bold mb-3 text-white">
                  {sessionInfo?.playgroup?.title || "Playgroup Class Admissions"}
                </h3>

                {/* Main Highlight Callout with Two Batches */}
                <div
                  className="p-3 rounded-3 mb-3"
                  style={{
                    backgroundColor: "rgba(46, 125, 50, 0.25)",
                    border: "1.5px solid #4caf50",
                  }}
                >
                  <div className="fw-bold text-white fs-5 mb-2 d-flex align-items-center gap-2">
                    <span>🎒</span>
                    <span>{sessionInfo?.playgroup?.highlight || "Playgroup class admission in two batches:"}</span>
                  </div>

                  <div className="row g-2 mt-1">
                    <div className="col-12 col-sm-6">
                      <div
                        className="p-2 px-3 rounded-3 d-flex align-items-center gap-2"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          border: "1px solid rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        <span className="fs-5 flex-shrink-0">🌱</span>
                        <div>
                          <div className="fw-bold text-warning small">{sessionInfo?.batch1Title || "Batch 1"}</div>
                          <div className="fw-bold text-white fs-6">{sessionInfo?.batch1Intake || "April Intake"}</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div
                        className="p-2 px-3 rounded-3 d-flex align-items-center gap-2"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          border: "1px solid rgba(255, 255, 255, 0.35)",
                        }}
                      >
                        <span className="fs-5 flex-shrink-0">☀️</span>
                        <div>
                          <div className="fw-bold text-warning small">{sessionInfo?.batch2Title || "Batch 2"}</div>
                          <div className="fw-bold text-white fs-6">{sessionInfo?.batch2Intake || "July Intake"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-white text-opacity-75 small mb-0 mt-auto leading-relaxed">
                  {sessionInfo?.playgroup?.desc ||
                    "Early childhood admissions are scheduled in two flexible batches for toddler convenience."}
                </p>
              </div>
            </div>
          </div>

          {/* Action Callouts Strip */}
          <div
            className="mt-4 pt-3 border-top border-white border-opacity-25 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start position-relative"
            style={{ zIndex: 2 }}
          >
            <div className="d-flex align-items-center gap-2 text-white text-opacity-90 small">
              <span className="fs-5">ℹ️</span>
              <span>{sessionInfo?.needHelp || "Need help selecting the right class or batch? Connect with our admission desk."}</span>
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 w-100 w-md-auto">
              <Link
                href="/admissions#enquiry"
                className="btn btn-warning rounded-pill fw-bold text-dark px-4 py-2 shadow-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
                style={{ fontSize: "0.92rem" }}
              >
                <span>{sessionInfo?.applyEnquiryNow || "📝 Apply / Enquiry Now"}</span>
              </Link>
              <a
                href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`}
                className="btn btn-outline-light rounded-pill fw-bold px-3 py-2 d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1 flex-sm-grow-0"
                style={{ fontSize: "0.92rem" }}
              >
                <span>📞 {t.school.contacts.phonePrimary}</span>
              </a>
              <a
                href={`tel:${t.school.contacts.phoneSecondary.replace(/\s/g, "")}`}
                className="btn btn-outline-light rounded-pill fw-bold px-3 py-2 d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1 flex-sm-grow-0"
                style={{ fontSize: "0.92rem" }}
              >
                <span>📞 {t.school.contacts.phoneSecondary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
