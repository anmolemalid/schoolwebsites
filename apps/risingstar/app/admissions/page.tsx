"use client";

import { useState } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";

export default function AdmissionsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    selectedClass: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="admissions-page">
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
                    {t.nav.admissions}
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">{t.admissions.banner.kicker}</div>
              <h1 className="page-blue-banner-title">{t.admissions.banner.title}</h1>
              <p className="page-blue-banner-subtitle mb-3">
                {t.admissions.banner.subtitle}
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
                <div className="fw-bold fs-5 text-warning mb-1">{t.admissions.helpdesk.title}</div>
                <div className="small mb-3 text-white text-opacity-90">{t.admissions.helpdesk.subtitle}</div>
                <a href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`} className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>{t.admissions.helpdesk.button}</span>
                  <span className="rounded-circle d-inline-flex align-items-center justify-content-center text-dark" style={{ width: "20px", height: "20px", backgroundColor: "rgba(0,0,0,0.1)", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give Your Child a Joyful Start Banner */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5 rounded-4 text-white text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 shadow-sm"
            style={{ backgroundColor: "#004a90", border: "2px solid #ffd200" }}
          >
            <div>
              <h2 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.admissions.joyfulStart.title}
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                {t.admissions.joyfulStart.subtitle}
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <a
                href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`}
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                {t.admissions.joyfulStart.callButton}
              </a>
              <a
                href={`https://wa.me/${t.school.contacts.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase"
                style={{ letterSpacing: "0.5px" }}
              >
                {t.admissions.joyfulStart.whatsappButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process / How admission works */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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

      {/* Enquiry / Request a call back */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }} id="enquiry">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.admissions.enquirySection.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.admissions.enquirySection.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto fs-5">
              {t.admissions.enquirySection.subheading}
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8" style={{ maxWidth: "700px" }}>
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm">
                {formSubmitted ? (
                  <div className="text-center py-4">
                    <div className="fs-1 text-success mb-3">🎉</div>
                    <h3 className="fw-bold text-success mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {t.admissions.enquirySection.form.successHeading}
                    </h3>
                    <p className="text-muted mb-4 fs-5">
                      {t.admissions.enquirySection.form.successMessagePrefix} <strong>{formData.selectedClass || t.admissions.enquirySection.form.defaultChild}</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-dark"
                    >
                      {t.admissions.enquirySection.form.submitAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={t.admissions.enquirySection.form.namePlaceholder}
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={t.admissions.enquirySection.form.phonePlaceholder}
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <select
                        className="form-select form-select-lg rounded-3 fs-6"
                        required
                        value={formData.selectedClass}
                        onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                      >
                        <option value="">{t.admissions.enquirySection.form.selectClassDefault}</option>
                        {t.admissions.enquirySection.form.classOptions.map((opt: string, idx: number) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <textarea
                        className="form-control rounded-3 fs-6"
                        rows={4}
                        placeholder={t.admissions.enquirySection.form.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-lg fw-bold rounded-pill text-white text-uppercase"
                      style={{ backgroundColor: "#004a90", letterSpacing: "0.5px" }}
                    >
                      {t.admissions.enquirySection.form.submitButton}
                    </button>
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
