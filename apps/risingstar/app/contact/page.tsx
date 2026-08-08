"use client";

import { useState } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
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
                    {t.nav.contactUs}
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">{t.contact.banner.kicker}</div>
              <h1 className="page-blue-banner-title">{t.contact.banner.title}</h1>
              <p className="page-blue-banner-subtitle mb-3">
                {t.contact.banner.subtitle}
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
                <div className="fw-bold fs-5 text-warning mb-1">{t.contact.heroBox.title}</div>
                <div className="small mb-3 text-white text-opacity-90">{t.contact.heroBox.description}</div>
                <a href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`} className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>{t.contact.heroBox.button}</span>
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

      {/* Main Contact Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row g-4 justify-content-center">

            {/* Get In Touch Card */}
            <div className="col-lg-5">
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between">
                <div>
                  <h2 className="fw-bold mb-4" style={{ color: "#004a90", fontFamily: "'Poppins', sans-serif" }}>
                    {t.contact.getInTouch.heading}
                  </h2>

                  <div className="mb-4">
                    <p className="fw-bold mb-1 text-dark fs-6">{t.contact.getInTouch.addressLabel}</p>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                      {t.school.location.fullAddress}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="fw-bold mb-1 text-dark fs-6">{t.contact.getInTouch.phoneLabel}</p>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                      {t.school.contacts.phonePrimary}<br />
                      {t.school.contacts.phoneSecondary}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="fw-bold mb-1 text-dark fs-6">{t.contact.getInTouch.emailLabel}</p>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                      {t.school.contacts.email}
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 pt-3 flex-wrap">
                  <a
                    href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`}
                    className="btn btn-lg px-4 rounded-pill fw-bold text-white text-uppercase shadow-sm"
                    style={{ backgroundColor: "#004a90", letterSpacing: "0.5px" }}
                  >
                    {t.contact.getInTouch.callButton}
                  </a>
                  <a
                    href={`https://wa.me/${t.school.contacts.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow-sm"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    {t.contact.getInTouch.whatsappButton}
                  </a>
                </div>
              </div>
            </div>

            {/* Send Enquiry Card */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm h-100">
                <h2 className="fw-bold mb-4" style={{ color: "#004a90", fontFamily: "'Poppins', sans-serif" }}>
                  {t.contact.sendEnquiry.heading}
                </h2>

                {submitted ? (
                  <div className="text-center py-5">
                    <div className="fs-1 text-success mb-3">🎉</div>
                    <h3 className="fw-bold text-success mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {t.contact.sendEnquiry.successHeading}
                    </h3>
                    <p className="text-muted fs-5 mb-4">
                      {t.contact.sendEnquiry.successMessage}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-dark"
                    >
                      {t.contact.sendEnquiry.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={t.contact.sendEnquiry.namePlaceholder}
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={t.contact.sendEnquiry.phonePlaceholder}
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={t.contact.sendEnquiry.emailPlaceholder}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <textarea
                        className="form-control rounded-3 fs-6"
                        rows={4}
                        placeholder={t.contact.sendEnquiry.messagePlaceholder}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-lg fw-bold rounded-pill text-white text-uppercase shadow-sm"
                      style={{ backgroundColor: "#004a90", letterSpacing: "0.5px" }}
                    >
                      {t.contact.sendEnquiry.submitButton}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Find Us Section on Warm Cream */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container text-center">
          <div className="mb-4">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              {t.contact.findUs.tag}
            </span>
            <h2 className="display-5 fw-bold text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.contact.findUs.heading}
            </h2>
            <p className="text-muted col-md-7 mx-auto fs-5">
              {t.contact.findUs.address}
            </p>
          </div>

          <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm col-lg-8 mx-auto text-center">
            <div className="fs-1 mb-2">🗺️</div>
            <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.contact.findUs.cardTitle}
            </h3>
            <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
              {t.contact.findUs.cardDesc}
            </p>
            <a
              href={t.school.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold text-dark text-uppercase shadow"
              style={{ letterSpacing: "0.5px" }}
            >
              {t.contact.findUs.button}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
