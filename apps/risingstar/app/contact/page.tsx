"use client";

import { useState } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          data: form,
        }),
      });
    } catch (err) {
      console.error("Failed to send contact email:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setSubmitting(false);
    setSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* Full Width Contact Hero Banner Image with Overlay Breadcrumb */}
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
                  <span>📞</span>
                  <span>{t.nav.contactUs}</span>
                </span>

                {/* Divider for Quick Interactive Nav Jump Chips */}
                <span className="text-white text-opacity-30 mx-1 banner-breadcrumb-divider">|</span>

                {/* Interactive Section Jump Chips (Shown on >= 1024px) */}
                <div className="align-items-center flex-wrap gap-1 banner-breadcrumb-chips">
                  <a
                    href="#enquiry-form"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📝</span>
                    <span>Send Message</span>
                  </a>

                  <a
                    href="#campus-location"
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📍</span>
                    <span>Location Map</span>
                  </a>

                  <a
                    href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`}
                    className="text-decoration-none px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1 banner-nav-chip"
                  >
                    <span>📞</span>
                    <span>Call Helpline</span>
                  </a>
                </div>
              </nav>

              {/* Helpline Quick Badge on Right of Banner */}
              <div className="banner-breadcrumb-right-badge">
                <a
                  href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`}
                  className="badge px-3 py-2 rounded-pill fw-bold text-white shadow-sm d-inline-flex align-items-center gap-2 text-decoration-none"
                  style={{
                    backgroundColor: "rgba(0, 74, 144, 0.88)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 210, 0, 0.5)",
                    fontSize: "0.85rem",
                  }}
                >
                  <span className="spinner-grow spinner-grow-sm text-warning" role="status" style={{ width: "0.6rem", height: "0.6rem" }}></span>
                  <span>Helpline: {t.school.contacts.phonePrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <picture className="w-100 d-block">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/contact_banner_mobile.jpg"
          />
          <img
            src="/assets/contact_banner.jpg"
            alt="Rising Kids School Contact Us - We'd Love to Hear From You!"
            className="w-100 h-auto d-block hero-slider-img"
          />
        </picture>
      </section>

      {/* Main Contact Section */}
      <section id="enquiry-form" className="py-5" style={{ backgroundColor: "#ffffff" }}>
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
                      <a
                        href={t.school.location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-muted"
                        title="Open in Google Maps"
                      >
                        {t.school.location.fullAddress} ↗
                      </a>
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
                      onClick={resetForm}
                      className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-dark"
                    >
                      {t.contact.sendEnquiry.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div className="text-end small fw-bold" style={{ color: "#b91c1c" }}>
                      * Indicates mandatory fields
                    </div>

                    <div>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={`${t.contact.sendEnquiry.namePlaceholder} *`}
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={`${t.contact.sendEnquiry.phonePlaceholder} *`}
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder={`${t.contact.sendEnquiry.emailPlaceholder} (Optional)`}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <textarea
                        className="form-control rounded-3 fs-6"
                        rows={4}
                        placeholder={`${t.contact.sendEnquiry.messagePlaceholder} *`}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-lg fw-bold rounded-pill text-white text-uppercase shadow-sm d-flex align-items-center justify-content-center gap-2"
                      style={{
                        backgroundColor: "#004a90",
                        letterSpacing: "0.5px",
                        cursor: submitting ? "not-allowed" : "pointer",
                        opacity: submitting ? 0.8 : 1,
                      }}
                    >
                      {submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <span>{t.contact.sendEnquiry.submitButton}</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Find Us Section on Warm Cream */}
      <section id="campus-location" className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
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
