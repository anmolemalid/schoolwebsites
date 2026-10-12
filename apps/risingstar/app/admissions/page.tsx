"use client";

import { useState } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";
import AdmissionsSessionBanner from "../components/AdmissionsSessionBanner";

const feeColorMap = [
  "bg-primary-subtle text-primary border border-primary border-opacity-25",
  "bg-primary-subtle text-primary border border-primary border-opacity-25",
  "bg-warning-subtle text-dark border border-warning border-opacity-50",
  "bg-success-subtle text-success border border-success border-opacity-25",
  "bg-info-subtle text-dark border border-info border-opacity-25",
  "bg-purple-subtle text-purple border border-purple border-opacity-25",
  "bg-secondary-subtle text-secondary border border-secondary border-opacity-25",
  "bg-warning-subtle text-dark border border-warning border-opacity-50",
];

const cardFeeStyles = [
  { badgeColor: "bg-primary-subtle text-primary border-primary", icon: "📝", iconBg: "#e7f1ff", iconColor: "#0056b3" },
  { badgeColor: "bg-danger-subtle text-danger border-danger", icon: "🎓", iconBg: "#ffebee", iconColor: "#d32f2f" },
  { badgeColor: "bg-warning-subtle text-dark border-warning", icon: "🏫", iconBg: "#fff8e1", iconColor: "#f57f17" },
  { badgeColor: "bg-success-subtle text-success border-success", icon: "📚", iconBg: "#e8f5e9", iconColor: "#2e7d32" },
  { badgeColor: "bg-info-subtle text-dark border-info", icon: "🎒", iconBg: "#e1f5fe", iconColor: "#0288d1" },
  { badgeColor: "bg-purple-subtle text-purple border-purple", icon: "🎨", iconBg: "#f3e5f5", iconColor: "#7b1fa2" },
  { badgeColor: "bg-secondary-subtle text-secondary border-secondary", icon: "📑", iconBg: "#eceff1", iconColor: "#455a64" },
  { badgeColor: "bg-warning-subtle text-dark border-warning", icon: "🚌", iconBg: "#fff9c4", iconColor: "#fbc02d" },
];

export default function AdmissionsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feeViewMode, setFeeViewMode] = useState<"table" | "cards">("table");

  const officialFeeSchedule = (t.admissions.officialFeeSchedule || []).map((item, idx) => ({
    ...item,
    badgeColor: feeColorMap[idx] || feeColorMap[0],
  }));

  const cardsFeeSchedule = (t.admissions.cardsFeeSchedule || []).map((item, idx) => ({
    ...item,
    ...(cardFeeStyles[idx] || cardFeeStyles[0]),
  }));
  const [formData, setFormData] = useState({
    kidName: "",
    dob: "",
    enquiryFor: "",
    parentName: "",
    motherOccupation: "",
    fatherOccupation: "",
    address: "",
    phone: "",
    motherEmail: "",
    fatherEmail: "",
    sources: [] as string[],
    otherSource: "",
  });

  const handleSourceToggle = (source: string) => {
    setFormData((prev) => {
      const exists = prev.sources.includes(source);
      return {
        ...prev,
        sources: exists
          ? prev.sources.filter((s) => s !== source)
          : [...prev.sources, source],
      };
    });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "admission",
          data: formData,
        }),
      });
    } catch (err) {
      console.error("Failed to send admission email:", err);
    } finally {
      setSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      kidName: "",
      dob: "",
      enquiryFor: "",
      parentName: "",
      motherOccupation: "",
      fatherOccupation: "",
      address: "",
      phone: "",
      motherEmail: "",
      fatherEmail: "",
      sources: [],
      otherSource: "",
    });
    setFormSubmitted(false);
  };

  return (
    <div className="admissions-page">
      {/* Full Width Admissions Hero Banner Image with Overlay Breadcrumb */}
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
                  className="text-white text-decoration-none fw-bold d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill transition-all"
                  style={{
                    fontSize: "0.88rem",
                    transition: "all 0.2s ease-in-out",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
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
                  <span>🎒</span>
                  <span>{t.nav.admissions}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center gap-1 banner-breadcrumb-chips">
                  <a
                    href="#fee-structure"
                    className="text-white text-decoration-none small px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1"
                    style={{
                      fontSize: "0.8rem",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffd200";
                      e.currentTarget.style.color = "#071c3e";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span>💰</span>
                    <span>{t.admissions.breadcrumbChips.feeStructure}</span>
                  </a>

                  <a
                    href="#process"
                    className="text-white text-decoration-none small px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1"
                    style={{
                      fontSize: "0.8rem",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffd200";
                      e.currentTarget.style.color = "#071c3e";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span>📋</span>
                    <span>{t.admissions.breadcrumbChips.process}</span>
                  </a>

                  <a
                    href="#enquiry"
                    className="text-white text-decoration-none small px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1"
                    style={{
                      fontSize: "0.8rem",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffd200";
                      e.currentTarget.style.color = "#071c3e";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span>📝</span>
                    <span>{t.admissions.breadcrumbChips.enquiry}</span>
                  </a>
                </div>
              </nav>

              {/* Admission Open Badge on Right of Banner (Shown on >= 1024px) */}
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
                  <span>{t.admissions.breadcrumbChips.sessionOpenBadge}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/slider/hero_banner_3_mobile.jpg"
          />
          <img
            src="/assets/slider/hero_banner_3.jpg"
            alt="Rising Kids School Admissions Open"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>



      {/* Academic Session & Playgroup Batches Details Banner */}
      <AdmissionsSessionBanner />

      {/* Simple Process / How admission works */}
      <section id="process" className="py-5 border-top border-bottom no-print" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.admissions.process.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.admissions.process.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto fs-5">
              {t.admissions.process.subheading}
            </p>
          </div>

          <div className="row g-4">
            {t.admissions.process.steps.map((step: any, idx: number) => (
              <div key={idx} className="col-md-4">
                <div className="card-kids h-100 text-center p-4 bg-white rounded-4 border shadow-sm">
                  <div className="fs-1 mb-3">{step.num}</div>
                  <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section id="fee-structure" className="py-5 no-print" style={{ backgroundColor: "#f8fbff" }}>
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-2 rounded-pill fw-bold small mb-2 d-inline-flex align-items-center gap-1">
              <span>💳</span>
              <span>{t.admissions.feeSection.tag}</span>
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.admissions.feeSection.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              {t.admissions.feeSection.subheading}
            </p>
          </div>

          {/* View Mode Toggle Switch */}
          <div className="d-flex justify-content-center mb-4">
            <div
              className="bg-white p-1 rounded-pill shadow-sm d-inline-flex border"
              style={{ maxWidth: "100%" }}
            >
              <button
                type="button"
                onClick={() => setFeeViewMode("table")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold d-inline-flex align-items-center gap-2 ${
                  feeViewMode === "table" ? "btn-primary shadow-sm" : "btn-light text-muted"
                }`}
                style={
                  feeViewMode === "table"
                    ? { backgroundColor: "#004a90", borderColor: "#004a90", color: "#ffffff" }
                    : {}
                }
              >
                <span>📋</span>
                <span>{t.admissions.feeSection.viewTable}</span>
              </button>
              <button
                type="button"
                onClick={() => setFeeViewMode("cards")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold d-inline-flex align-items-center gap-2 ${
                  feeViewMode === "cards" ? "btn-primary shadow-sm" : "btn-light text-muted"
                }`}
                style={
                  feeViewMode === "cards"
                    ? { backgroundColor: "#004a90", borderColor: "#004a90", color: "#ffffff" }
                    : {}
                }
              >
                <span>🎴</span>
                <span>{t.admissions.feeSection.viewCards}</span>
              </button>
            </div>
          </div>

          {/* Table View (Matching User Photo With Clean Blue Dividers) */}
          {feeViewMode === "table" && (
            <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden mb-5">
              <div
                className="p-3 p-md-4 text-white d-flex flex-wrap justify-content-between align-items-center gap-2"
                style={{ backgroundColor: "#004a90", borderBottom: "3px solid #ffd200" }}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4">📜</span>
                  <div>
                    <h3 className="h5 fw-bold mb-0 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {t.admissions.feeSection.tableTitle}
                    </h3>
                    <small className="text-white text-opacity-80">
                      {t.admissions.feeSection.tableSubtitle}
                    </small>
                  </div>
                </div>
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">
                  {t.admissions.feeSection.sessionBadge}
                </span>
              </div>

              <div className="p-2 p-md-4">
                {/* Desktop & Tablet View: Structured Table */}
                <div className="table-responsive d-none d-md-block">
                  <table className="table align-middle mb-0" style={{ borderCollapse: "separate", borderSpacing: "0" }}>
                    <thead>
                      <tr style={{ borderBottom: "2.5px solid #004a90" }}>
                        <th className="py-3 px-3 text-uppercase small fw-bold" style={{ color: "#004a90", width: "60px" }}>
                          {t.admissions.feeSection.colSn}
                        </th>
                        <th className="py-3 px-3 text-uppercase small fw-bold" style={{ color: "#004a90", width: "260px" }}>
                          {t.admissions.feeSection.colFeeHead}
                        </th>
                        <th className="py-3 px-3 text-uppercase small fw-bold" style={{ color: "#004a90", width: "180px" }}>
                          {t.admissions.feeSection.colFrequency}
                        </th>
                        <th className="py-3 px-3 text-uppercase small fw-bold" style={{ color: "#004a90" }}>
                          {t.admissions.feeSection.colCoverage}
                        </th>
                        <th className="py-3 px-3 text-uppercase small fw-bold text-end" style={{ color: "#004a90", width: "120px" }}>
                          {t.admissions.feeSection.colStatus}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {officialFeeSchedule.map((item, idx) => (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: "2px solid #004a90",
                            transition: "background-color 0.2s ease",
                          }}
                          className="fee-table-row"
                        >
                          <td className="py-3 px-3 fw-bold text-muted small">{item.sn}</td>
                          <td className="py-3 px-3">
                            <span
                              className="fw-bold d-block"
                              style={{
                                color: "#004a90",
                                fontSize: "1.12rem",
                                fontFamily: "'Poppins', sans-serif",
                                letterSpacing: "0.2px",
                              }}
                            >
                              {item.title}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="small text-dark fw-semibold d-inline-block">
                              {item.frequency}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-muted small" style={{ lineHeight: 1.5 }}>
                            {item.desc}
                          </td>
                          <td className="py-3 px-3 text-end">
                            <span className={`badge rounded-pill px-2 py-1 fw-bold small ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile View: Clean Card-Based List */}
                <div className="d-md-none d-flex flex-column gap-2 p-1">
                  {officialFeeSchedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-3 bg-white border shadow-sm position-relative"
                      style={{
                        borderLeft: "4px solid #004a90 !important",
                      }}
                    >
                      <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="badge rounded-pill text-white fw-bold d-inline-flex align-items-center justify-content-center"
                            style={{
                              backgroundColor: "#004a90",
                              fontSize: "0.75rem",
                              minWidth: "26px",
                              height: "26px",
                            }}
                          >
                            {item.sn}
                          </span>
                          <span
                            className="fw-bold text-dark"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: "1rem",
                              color: "#004a90",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>
                        <span className={`badge rounded-pill px-2 py-1 fw-bold small flex-shrink-0 ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      <div className="mb-2 d-flex flex-wrap align-items-center gap-1">
                        <span className="text-muted small fw-semibold">{t.admissions.feeSection.frequencyLabel}</span>
                        <span className="badge bg-light text-dark border px-2 py-1 small fw-semibold">
                          📅 {item.frequency}
                        </span>
                      </div>

                      <div className="p-2 rounded bg-light bg-opacity-75 border border-light-subtle">
                        <span className="text-muted small d-block" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Cards View */}
          {feeViewMode === "cards" && (
            <div className="row g-4 mb-5">
              {cardsFeeSchedule.map((fee: any, idx: number) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="card h-100 border-0 rounded-4 shadow-sm p-4 text-start transition-all"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e9ecef",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 14px 28px rgba(0, 74, 144, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                        style={{
                          width: "56px",
                          height: "56px",
                          backgroundColor: fee.iconBg,
                          fontSize: "1.75rem",
                        }}
                      >
                        {fee.icon}
                      </div>
                      <span
                        className={`badge rounded-pill border px-2 py-1 fw-bold ${fee.badgeColor}`}
                        style={{ fontSize: "0.72rem" }}
                      >
                        {fee.badge}
                      </span>
                    </div>

                    <h3
                      className="fw-bold fs-5 text-dark mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {fee.title}
                    </h3>

                    <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                      {fee.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}


        </div>
      </section>

      {/* Enquiry Form Section Matching Official School Enquiry Slip */}
      <section className="py-5" style={{ backgroundColor: "#f3f7fb" }} id="enquiry">
        <div className="container">
          <div className="text-center mb-4 no-print">
            <span className="badge bg-success-subtle text-success border border-success px-3 py-1 rounded-pill fw-bold small mb-2 d-inline-flex align-items-center gap-1">
              <span>📝</span>
              <span>{t.admissions.slipForm.tag}</span>
            </span>
            <h2 className="display-5 fw-bold text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.admissions.slipForm.heading}
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              {t.admissions.slipForm.subheading}
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9" style={{ maxWidth: "860px" }}>
              {/* Paper-styled Enquiry Form Container */}
              <div
                id="printable-enquiry-slip"
                className="bg-white rounded-4 shadow-lg border overflow-hidden p-3 p-md-5 position-relative"
                style={{
                  borderColor: "#d9e2ec",
                  boxShadow: "0 20px 45px rgba(0, 74, 144, 0.08)",
                }}
              >
                {/* Form Letterhead Header */}
                <div className="border-bottom pb-3 mb-4">
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 text-center text-sm-start">
                    <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                      <img
                        src="/assets/finallogo.png"
                        alt="Rising Kids School Logo"
                        className="school-letterhead-logo"
                        style={{ height: "64px", width: "auto", objectFit: "contain" }}
                      />
                      <div>
                        <h3
                          className="fw-bold mb-1 school-letterhead-title"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#004a90",
                            fontSize: "1.55rem",
                            letterSpacing: "0.3px",
                          }}
                        >
                          {t.admissions.slipForm.letterheadTitle}
                        </h3>
                        <p className="mb-0 text-muted small" style={{ lineHeight: 1.4 }}>
                          {t.admissions.slipForm.letterheadAddress}
                        </p>
                        <p className="mb-0 text-muted small" style={{ lineHeight: 1.4 }}>
                          <span>{t.admissions.slipForm.letterheadPh} </span>
                          <a href="tel:8826239341" className="text-decoration-none text-muted fw-semibold">8826239341</a>,{" "}
                          <a href="tel:8826239346" className="text-decoration-none text-muted fw-semibold">8826239346</a>
                          <span className="d-none d-md-inline"> | </span>
                          <span className="d-block d-md-inline">
                            {t.admissions.slipForm.letterheadEmail} <a href="mailto:inforisingkidsschool@gmail.com" className="text-decoration-none text-primary">inforisingkidsschool@gmail.com</a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="text-center text-sm-end">
                      <div className="badge bg-light text-dark border px-3 py-2 rounded-pill small fw-semibold shadow-sm">
                        <span>{t.admissions.slipForm.dateLabel} </span>
                        <span suppressHydrationWarning>{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                      </div>
                    </div>
                  </div>

                  {/* Form Title Banner with Green Border Matching Physical Slip */}
                  <div
                    className="text-center py-2 px-3 mt-3 rounded-2 shadow-sm"
                    style={{
                      backgroundColor: "#e8f5e9",
                      border: "2px solid #2e7d32",
                    }}
                  >
                    <h4
                      className="fw-bold mb-0 text-uppercase"
                      style={{
                        color: "#2e7d32",
                        letterSpacing: "3px",
                        fontSize: "1.2rem",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {t.admissions.slipForm.bannerTitle}
                    </h4>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-5">
                    <div className="fs-1 text-success mb-3">🎉</div>
                    <h3 className="fw-bold text-success mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {t.admissions.slipForm.successTitle}
                    </h3>
                    <p className="text-muted mb-4 fs-5 col-md-10 mx-auto">
                      {t.admissions.slipForm.successText1} <strong>{formData.kidName || "your child"}</strong> {t.admissions.slipForm.successText2} <strong>{formData.enquiryFor || "Rising Kids"}</strong>{t.admissions.slipForm.successText3} <strong>{formData.phone}</strong> {t.admissions.slipForm.successText4}
                    </p>

                    <div className="card bg-light border-0 p-4 rounded-4 mb-4 text-start col-md-8 mx-auto">
                      <h6 className="fw-bold text-dark border-bottom pb-2 mb-3">{t.admissions.slipForm.summaryHeading}</h6>
                      <div className="row g-2 small">
                        <div className="col-sm-6"><strong>{t.admissions.slipForm.summaryKidName}</strong> {formData.kidName || "—"}</div>
                        <div className="col-sm-6"><strong>{t.admissions.slipForm.summaryDob}</strong> {formData.dob || "—"}</div>
                        <div className="col-sm-6"><strong>{t.admissions.slipForm.summaryEnquiryFor}</strong> {formData.enquiryFor || "—"}</div>
                        <div className="col-sm-6"><strong>{t.admissions.slipForm.summaryParentName}</strong> {formData.parentName || "—"}</div>
                        <div className="col-sm-6"><strong>{t.admissions.slipForm.summaryPhone}</strong> {formData.phone || "—"}</div>
                        <div className="col-sm-6"><strong>{t.admissions.slipForm.summaryAddress}</strong> {formData.address || "—"}</div>
                        <div className="col-12 pt-1 border-top mt-2">
                          <strong>{t.admissions.slipForm.summaryReferral}</strong>{" "}
                          {formData.sources.length > 0
                            ? formData.sources
                                .map((s) => (s === "Other" && formData.otherSource ? `Other (${formData.otherSource})` : s))
                                .join(", ")
                            : t.admissions.slipForm.summaryDirect}
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center gap-3 no-print">
                      <button
                        onClick={resetForm}
                        className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-dark"
                      >
                        {t.admissions.slipForm.submitAnother}
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold"
                      >
                        {t.admissions.slipForm.printConfirmation}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                      <span className="small text-muted fw-semibold">{t.admissions.slipForm.fillAccurately}</span>
                      <span className="small fw-bold" style={{ color: "#b91c1c" }}>{t.admissions.slipForm.mandatoryNotice}</span>
                    </div>

                    {/* Row 1: Kids Name */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#2e7d32", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.kidName} <span className="text-warning ms-1" style={{ fontSize: "1.1rem", lineHeight: 0.8 }}>*</span> :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="text"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.kidNamePlaceholder}
                          required
                          value={formData.kidName}
                          onChange={(e) => setFormData({ ...formData, kidName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 2: Date Of Birth */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <label
                          htmlFor="dob-input"
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm mb-0"
                          style={{ backgroundColor: "#004a90", fontSize: "0.88rem", cursor: "pointer" }}
                        >
                          {t.admissions.slipForm.dob} <span className="text-warning ms-1" style={{ fontSize: "1.1rem", lineHeight: 0.8 }}>*</span> :
                        </label>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          id="dob-input"
                          type="date"
                          className="form-control rounded-2 fs-6 py-2"
                          style={{ cursor: "pointer" }}
                          required
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          onClick={(e) => {
                            try {
                              if ("showPicker" in e.currentTarget) {
                                e.currentTarget.showPicker();
                              }
                            } catch (err) {
                              // Ignore if blocked by browser
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 3: Enquiry For */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#2e7d32", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.enquiryFor} <span className="text-warning ms-1" style={{ fontSize: "1.1rem", lineHeight: 0.8 }}>*</span> :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <select
                          className="form-select rounded-2 fs-6 py-2"
                          required
                          value={formData.enquiryFor}
                          onChange={(e) => setFormData({ ...formData, enquiryFor: e.target.value })}
                        >
                          <option value="">{t.admissions.slipForm.selectGrade}</option>
                          {t.admissions.slipForm.grades.map((grade: string) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Mother's/ Father's Name */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#004a90", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.parentName} <span className="text-warning ms-1" style={{ fontSize: "1.1rem", lineHeight: 0.8 }}>*</span> :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="text"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.parentNamePlaceholder}
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 5: Mother's Occupation */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#2e7d32", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.motherOccupation} :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="text"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.motherOccupationPlaceholder}
                          value={formData.motherOccupation}
                          onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 6: Father's Occupation */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#004a90", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.fatherOccupation} :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="text"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.fatherOccupationPlaceholder}
                          value={formData.fatherOccupation}
                          onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 7: Address */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#2e7d32", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.address} <span className="text-warning ms-1" style={{ fontSize: "1.1rem", lineHeight: 0.8 }}>*</span> :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <textarea
                          rows={2}
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.addressPlaceholder}
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    {/* Row 8: Phone */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#004a90", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.phone} <span className="text-warning ms-1" style={{ fontSize: "1.1rem", lineHeight: 0.8 }}>*</span> :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.phonePlaceholder}
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 9: E-Mail Mother */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#2e7d32", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.motherEmail} :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="email"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.motherEmailPlaceholder}
                          value={formData.motherEmail}
                          onChange={(e) => setFormData({ ...formData, motherEmail: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 10: Father Email */}
                    <div className="row g-2 align-items-center form-row-slip mb-3 mb-md-2">
                      <div className="col-12 col-md-3 badge-col mb-1 mb-md-0">
                        <span
                          className="badge d-inline-flex d-md-flex align-items-center px-3 py-2 text-white fw-bold rounded-2 badge-slip shadow-sm"
                          style={{ backgroundColor: "#004a90", fontSize: "0.88rem" }}
                        >
                          {t.admissions.slipForm.fatherEmail} :
                        </span>
                      </div>
                      <div className="col-12 col-md-9 input-col">
                        <input
                          type="email"
                          className="form-control rounded-2 fs-6 py-2"
                          placeholder={t.admissions.slipForm.fatherEmailPlaceholder}
                          value={formData.fatherEmail}
                          onChange={(e) => setFormData({ ...formData, fatherEmail: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 11: How Did You Know About Rising Kids School ? */}
                    <div className="border rounded-3 p-3 mt-3 referral-box" style={{ backgroundColor: "#f9fcf9", borderColor: "#c8e6c9" }}>
                      <div
                        className="p-2 px-3 rounded-2 text-white fw-bold mb-3 d-flex align-items-center gap-2 referral-title shadow-sm"
                        style={{ backgroundColor: "#2e7d32", fontSize: "0.88rem" }}
                      >
                        <span>📢</span>
                        <span>{t.admissions.slipForm.referralTitle}</span>
                      </div>

                      <div className="row g-2 g-md-3 px-1">
                        {t.admissions.slipForm.referralOptions.map((srcOption: string, idx: number) => (
                          <div key={idx} className="col-12 col-sm-6 col-md-4 referral-item">
                            <label
                              htmlFor={`src-${idx}`}
                              className="w-100 bg-white border rounded-2 px-3 py-2 d-flex align-items-center gap-2 mb-0 shadow-sm transition-all"
                              style={{
                                cursor: "pointer",
                                borderColor: formData.sources.includes(srcOption) ? "#2e7d32" : "#e2e8f0",
                                backgroundColor: formData.sources.includes(srcOption) ? "#f0fdf4" : "#ffffff",
                              }}
                            >
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                id={`src-${idx}`}
                                checked={formData.sources.includes(srcOption)}
                                onChange={() => handleSourceToggle(srcOption)}
                                style={{ width: "1.15rem", height: "1.15rem", cursor: "pointer", flexShrink: 0 }}
                              />
                              <span className="small fw-semibold text-dark">
                                {srcOption}
                              </span>
                            </label>
                          </div>
                        ))}

                        <div className="col-12 col-sm-6 col-md-4 referral-item">
                          <label
                            htmlFor="src-other"
                            className="w-100 bg-white border rounded-2 px-3 py-2 d-flex align-items-center gap-2 mb-0 shadow-sm transition-all"
                            style={{
                              cursor: "pointer",
                              borderColor: formData.sources.includes("Other") ? "#2e7d32" : "#e2e8f0",
                              backgroundColor: formData.sources.includes("Other") ? "#f0fdf4" : "#ffffff",
                            }}
                          >
                            <input
                              className="form-check-input mt-0"
                              type="checkbox"
                              id="src-other"
                              checked={formData.sources.includes("Other")}
                              onChange={() => handleSourceToggle("Other")}
                              style={{ width: "1.15rem", height: "1.15rem", cursor: "pointer", flexShrink: 0 }}
                            />
                            <span className="small fw-semibold text-dark">
                              {t.admissions.slipForm.referralOther}
                            </span>
                          </label>
                        </div>

                        {formData.sources.includes("Other") && (
                          <div className="col-12 mt-2">
                            <input
                              type="text"
                              className="form-control rounded-2 fs-6 py-2"
                              placeholder={t.admissions.slipForm.otherPlaceholder}
                              value={formData.otherSource}
                              onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Decorative Pattern Matching Physical Form */}
                    <div className="d-flex justify-content-center align-items-center gap-2 my-3 decorative-dashes">
                      <div style={{ height: "5px", width: "35px", backgroundColor: "#2e7d32", borderRadius: "2px" }}></div>
                      <div style={{ height: "5px", width: "45px", backgroundColor: "#004a90", borderRadius: "2px" }}></div>
                      <div style={{ height: "5px", width: "30px", backgroundColor: "#2e7d32", borderRadius: "2px" }}></div>
                      <div style={{ height: "5px", width: "40px", backgroundColor: "#004a90", borderRadius: "2px" }}></div>
                      <div style={{ height: "5px", width: "35px", backgroundColor: "#2e7d32", borderRadius: "2px" }}></div>
                      <div style={{ height: "5px", width: "45px", backgroundColor: "#004a90", borderRadius: "2px" }}></div>
                    </div>

                    {/* Signatures Strip visible on print */}
                    <div className="d-none d-print-flex justify-content-between align-items-center signatures-strip pt-1 px-2">
                      <div>
                        <span>{t.admissions.slipForm.parentSign} </span>
                        <span>____________________</span>
                      </div>
                      <div>
                        <span>{t.admissions.slipForm.inchargeSign} </span>
                        <span>____________________</span>
                      </div>
                    </div>

                    {/* Submit Actions */}
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3 no-print">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn btn-lg fw-bold rounded-pill text-white px-5 py-3 shadow d-inline-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: "#004a90",
                          letterSpacing: "0.5px",
                          transition: "all 0.25s ease",
                          cursor: submitting ? "not-allowed" : "pointer",
                          opacity: submitting ? 0.8 : 1,
                        }}
                      >
                        {submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span>{t.admissions.slipForm.submittingText}</span>
                          </>
                        ) : (
                          <span>{t.admissions.slipForm.submitButton}</span>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="btn btn-outline-secondary btn-lg fw-bold rounded-pill px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2"
                      >
                        <span>{t.admissions.slipForm.printForm}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
