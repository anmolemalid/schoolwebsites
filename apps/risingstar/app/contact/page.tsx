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
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">We Would Be Happy to Answer Your Questions</div>
              <h1 className="page-blue-banner-title">Contact Rising Kids School</h1>
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
                <div className="fw-bold fs-5 text-warning mb-1">Direct Helpdesk</div>
                <div className="small mb-3 text-white text-opacity-90">Instant assistance for admissions, timings &amp; visits.</div>
                <a href="tel:+918826239341" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>Call School</span>
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
                    Get in touch
                  </h2>

                  <div className="mb-4">
                    <p className="fw-bold mb-1 text-dark fs-6">📍 Address</p>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                      C-47, Sector 9, New Vijay Nagar, Ghaziabad (U.P.) 201009
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="fw-bold mb-1 text-dark fs-6">📞 Phone</p>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                      +91 8826239341<br />
                      +91 8826239346
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="fw-bold mb-1 text-dark fs-6">✉ Email</p>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                      inforisingkidsschool@gmail.com
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 pt-3 flex-wrap">
                  <a
                    href="tel:+918826239341"
                    className="btn btn-lg px-4 rounded-pill fw-bold text-white text-uppercase shadow-sm"
                    style={{ backgroundColor: "#004a90", letterSpacing: "0.5px" }}
                  >
                    Call School
                  </a>
                  <a
                    href="https://wa.me/918826239341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow-sm"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Send Enquiry Card */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm h-100">
                <h2 className="fw-bold mb-4" style={{ color: "#004a90", fontFamily: "'Poppins', sans-serif" }}>
                  Send an enquiry
                </h2>

                {submitted ? (
                  <div className="text-center py-5">
                    <div className="fs-1 text-success mb-3">🎉</div>
                    <h3 className="fw-bold text-success mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Thank you!
                    </h3>
                    <p className="text-muted fs-5 mb-4">
                      Your enquiry has been received. The school team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-dark"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="Phone Number"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <textarea
                        className="form-control rounded-3 fs-6"
                        rows={4}
                        placeholder="How can we help?"
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
                      Send Message
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
              FIND US
            </span>
            <h2 className="display-5 fw-bold text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              New Vijay Nagar, Ghaziabad
            </h2>
            <p className="text-muted col-md-7 mx-auto fs-5">
              C-47, Sector 9, New Vijay Nagar, Ghaziabad (U.P.) 201009
            </p>
          </div>

          <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm col-lg-8 mx-auto text-center">
            <div className="fs-1 mb-2">🗺️</div>
            <h3 className="fw-bold fs-4 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Campus Location &amp; Directions
            </h3>
            <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
              Easily accessible from Vijay Nagar, Pratap Vihar, and Siddharth Vihar. Open Google Maps for turn-by-turn navigation.
            </p>
            <a
              href={t.school.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold text-dark text-uppercase shadow"
              style={{ letterSpacing: "0.5px" }}
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
