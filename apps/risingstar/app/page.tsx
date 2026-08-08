"use client";

import { useState } from "react";
import Link from "next/link";
import HeroBannerSlider from "./components/HeroBannerSlider";
import HeroBannerSection from "./components/HeroBannerSection";
import { t } from "./lib/i18n";

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="home-page position-relative">
      {/* ----------------------------------------------------
         1. HERO BANNER SECTION (Exact Prototype & Mockup Design)
         ---------------------------------------------------- */}
      <HeroBannerSection />

      {/* ----------------------------------------------------
         2. WHY CHOOSE US / 6 FEATURE CARDS
         ---------------------------------------------------- */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-warning-subtle text-dark fw-bold px-3 py-1 rounded-pill small mb-2 border border-warning">{t.home.whyChooseUs.tag}</span>
            <h2 className="fw-bold fs-3 text-dark">{t.home.whyChooseUs.heading}</h2>
          </div>

          <div className="row g-3 text-center justify-content-center">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="feature-tile-card">
                <div className="feature-icon-wrapper">{t.home.whyChooseUs.cards[0].icon}</div>
                <strong className="d-block text-dark small fw-bold">{t.home.whyChooseUs.cards[0].title}</strong>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="feature-tile-card">
                <div className="feature-icon-wrapper">{t.home.whyChooseUs.cards[1].icon}</div>
                <strong className="d-block text-dark small fw-bold">{t.home.whyChooseUs.cards[1].title}</strong>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="feature-tile-card">
                <div className="feature-icon-wrapper">{t.home.whyChooseUs.cards[2].icon}</div>
                <strong className="d-block text-dark small fw-bold">{t.home.whyChooseUs.cards[2].title}</strong>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="feature-tile-card">
                <div className="feature-icon-wrapper">{t.home.whyChooseUs.cards[3].icon}</div>
                <strong className="d-block text-dark small fw-bold">{t.home.whyChooseUs.cards[3].title}</strong>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="feature-tile-card">
                <div className="feature-icon-wrapper">{t.home.whyChooseUs.cards[4].icon}</div>
                <strong className="d-block text-dark small fw-bold">{t.home.whyChooseUs.cards[4].title}</strong>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="feature-tile-card">
                <div className="feature-icon-wrapper">{t.home.whyChooseUs.cards[5].icon}</div>
                <strong className="d-block text-dark small fw-bold">{t.home.whyChooseUs.cards[5].title}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
         3. ABOUT RISING KIDS SCHOOL SECTION
         ---------------------------------------------------- */}
      <section className="py-5 bg-light" id="about">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            {/* Left Photo of Building Gate */}
            <div className="col-lg-5">
              <div className="rounded-4 overflow-hidden shadow border p-2 bg-white">
                <img
                  src="/assets/school_building_front.png"
                  alt="Rising Kids School Building Gate"
                  className="w-100 rounded-3 object-fit-cover"
                  style={{ maxHeight: "380px" }}
                />
              </div>
            </div>

            {/* Right About Text */}
            <div className="col-lg-7">
              <span className="about-kicker d-block mb-1">{t.home.aboutSection.kicker}</span>
              <h2 className="about-title-mockup mb-3">
                {t.home.aboutSection.title}
              </h2>
              <p className="text-muted fs-6 mb-4 leading-relaxed">
                {t.home.aboutSection.description}
              </p>

              {/* 3 Columns for Vision, Mission, Values */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="about-icon-circle">🏆</div>
                  <h6 className="fw-bold text-dark mb-1">{t.home.aboutSection.vision.title}</h6>
                  <p className="small text-muted mb-0">
                    {t.home.aboutSection.vision.description}
                  </p>
                </div>

                <div className="col-md-4">
                  <div className="about-icon-circle">🏫</div>
                  <h6 className="fw-bold text-dark mb-1">{t.home.aboutSection.mission.title}</h6>
                  <p className="small text-muted mb-0">
                    {t.home.aboutSection.mission.description}
                  </p>
                </div>

                <div className="col-md-4">
                  <div className="about-icon-circle">🎯</div>
                  <h6 className="fw-bold text-dark mb-1">{t.home.aboutSection.values.title}</h6>
                  <p className="small text-muted mb-0">
                    {t.home.aboutSection.values.description}
                  </p>
                </div>
              </div>

              <Link href="/about" className="btn-navy-pill">
                {t.home.aboutSection.readMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
         4. QUICK ACCESS 4-CARD CREAM SECTION (Painted Hands Girl)
         ---------------------------------------------------- */}
      <section className="quick-access-cream-bg py-2 border-top border-bottom position-relative">
        {/* Subtle Background Yellow Doodles */}
        <div className="cream-doodle-star d-none d-lg-block">
          <svg width="34" height="34" viewBox="0 0 45 45" fill="none">
            <path
              d="M22.5 2 L28 16 L43 18 L32 29 L35 44 L22.5 36 L10 44 L13 29 L2 18 L17 16 Z"
              stroke="#ffd200"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="cream-doodle-pencil d-none d-lg-block">
          <svg width="40" height="40" viewBox="0 0 55 55" fill="none">
            <g transform="rotate(45 27 27)">
              <rect x="12" y="22" width="28" height="10" rx="1.5" stroke="#ffd200" strokeWidth="2.2" />
              <polygon points="40,22 50,27 40,32" stroke="#ffd200" strokeWidth="2.2" fill="none" />
              <line x1="46" y1="25" x2="46" y2="29" stroke="#ffd200" strokeWidth="1.8" />
              <line x1="20" y1="22" x2="20" y2="32" stroke="#ffd200" strokeWidth="1.8" />
            </g>
          </svg>
        </div>

        <div className="cream-doodle-flower d-none d-lg-block">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 20 C 12 10, 5 18, 15 25 C 5 32, 12 40, 20 25 C 28 40, 35 32, 25 25 C 35 18, 28 10, 20 20 Z"
              stroke="#ffd200"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container-fluid px-3 px-lg-4 py-1 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-2 g-lg-3">
            
            {/* 4 Feature Cards Grid */}
            <div className="col-12 col-lg-9 col-xl-9">
              <div className="row g-2 g-xl-3 row-cols-1 row-cols-sm-2 row-cols-md-4">
                
                {/* 1. ADMISSIONS OPEN CARD */}
                <div className="col">
                  <div className="quick-feature-card">
                    <div className="quick-card-title">{t.home.quickAccess.admissionsCard.title}</div>
                    <div className="quick-card-content">
                      <div className="quick-card-icon">
                        <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                          <rect x="8" y="24" width="48" height="32" rx="2" fill="#fff3c4" stroke="#002d62" strokeWidth="2" />
                          <rect x="12" y="28" width="8" height="9" rx="1" fill="#60a5fa" stroke="#002d62" strokeWidth="1.5" />
                          <rect x="12" y="41" width="8" height="9" rx="1" fill="#60a5fa" stroke="#002d62" strokeWidth="1.5" />
                          <rect x="44" y="28" width="8" height="9" rx="1" fill="#60a5fa" stroke="#002d62" strokeWidth="1.5" />
                          <rect x="44" y="41" width="8" height="9" rx="1" fill="#60a5fa" stroke="#002d62" strokeWidth="1.5" />
                          <rect x="25" y="16" width="14" height="40" fill="#fed7aa" stroke="#002d62" strokeWidth="2" />
                          <circle cx="32" cy="24" r="5" fill="#fef08a" stroke="#002d62" strokeWidth="1.5" />
                          <polyline points="32,21 32,24 35,24" stroke="#002d62" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M28 56 V45 Q32 40 36 45 V56 Z" fill="#002d62" />
                          <polygon points="4,24 32,5 60,24" fill="#ef4444" stroke="#002d62" strokeWidth="2" />
                          <line x1="32" y1="5" x2="32" y2="1" stroke="#002d62" strokeWidth="2" />
                          <polygon points="32,1 39,4 32,7" fill="#ef4444" />
                        </svg>
                      </div>
                      <p className="quick-card-desc">{t.home.quickAccess.admissionsCard.description}</p>
                    </div>
                    <div className="text-center mt-auto">
                      <Link href="/admissions" className="btn-quick-action">
                        {t.home.quickAccess.admissionsCard.button}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 2. ACADEMICS CARD */}
                <div className="col">
                  <div className="quick-feature-card">
                    <div className="quick-card-title">{t.home.quickAccess.academicsCard.title}</div>
                    <div className="quick-card-content">
                      <div className="quick-card-icon">
                        <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                          {/* Bottom Red Book */}
                          <path d="M12 48 L46 41 L54 46 L20 53 Z" fill="#f87171" stroke="#002d62" strokeWidth="1.8" />
                          <path d="M12 48 V52 L20 57 V53 Z" fill="#dc2626" stroke="#002d62" strokeWidth="1.8" />
                          <path d="M20 57 L54 50 V46 L20 53 Z" fill="#fef3c7" stroke="#002d62" strokeWidth="1.8" />
                          {/* Middle Yellow Book */}
                          <path d="M14 36 L48 29 L56 34 L22 41 Z" fill="#fde047" stroke="#002d62" strokeWidth="1.8" />
                          <path d="M14 36 V40 L22 45 V41 Z" fill="#ca8a04" stroke="#002d62" strokeWidth="1.8" />
                          <path d="M22 45 L56 38 V34 L22 41 Z" fill="#ffffff" stroke="#002d62" strokeWidth="1.8" />
                          {/* Top Teal Book */}
                          <path d="M10 24 L44 17 L52 22 L18 29 Z" fill="#06b6d4" stroke="#002d62" strokeWidth="1.8" />
                          <path d="M10 24 V28 L18 33 V29 Z" fill="#0891b2" stroke="#002d62" strokeWidth="1.8" />
                          <path d="M18 33 L52 26 V22 L18 29 Z" fill="#fef9c3" stroke="#002d62" strokeWidth="1.8" />
                        </svg>
                      </div>
                      <p className="quick-card-desc">{t.home.quickAccess.academicsCard.description}</p>
                    </div>
                    <div className="text-center mt-auto">
                      <Link href="/curriculum" className="btn-quick-action">
                        {t.home.quickAccess.academicsCard.button}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 3. OUR FACILITIES CARD */}
                <div className="col">
                  <div className="quick-feature-card">
                    <div className="quick-card-title">{t.home.quickAccess.facilitiesCard.title}</div>
                    <div className="quick-card-content">
                      <div className="quick-card-icon">
                        <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                          <line x1="16" y1="18" x2="10" y2="56" stroke="#002d62" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="22" y1="18" x2="16" y2="56" stroke="#002d62" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="14" y1="26" x2="20" y2="26" stroke="#002d62" strokeWidth="2" strokeLinecap="round" />
                          <line x1="12" y1="36" x2="18" y2="36" stroke="#002d62" strokeWidth="2" strokeLinecap="round" />
                          <line x1="11" y1="46" x2="17" y2="46" stroke="#002d62" strokeWidth="2" strokeLinecap="round" />
                          <polygon points="12,18 24,10 28,18" fill="#ef4444" stroke="#002d62" strokeWidth="2" />
                          <path d="M22 22 C 24 36, 32 46, 52 48" stroke="#002d62" strokeWidth="7" strokeLinecap="round" />
                          <path d="M22 22 C 24 36, 32 46, 52 48" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" />
                          <path d="M20 20 C 22 34, 30 44, 50 46" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="quick-card-desc">{t.home.quickAccess.facilitiesCard.description}</p>
                    </div>
                    <div className="text-center mt-auto">
                      <Link href="/facilities" className="btn-quick-action">
                        {t.home.quickAccess.facilitiesCard.button}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 4. GALLERY CARD */}
                <div className="col">
                  <div className="quick-feature-card">
                    <div className="quick-card-title">{t.home.quickAccess.galleryCard.title}</div>
                    <div className="quick-card-content">
                      <div className="quick-card-icon">
                        <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                          <g transform="rotate(-10 28 34)">
                            <rect x="14" y="14" width="30" height="36" rx="2" fill="#ffffff" stroke="#002d62" strokeWidth="2" />
                            <rect x="17" y="17" width="24" height="22" fill="#60a5fa" />
                            <circle cx="29" cy="26" r="5" fill="#fde047" />
                            <path d="M17 35 L23 29 L31 37 L36 32 L41 37 H17 Z" fill="#22c55e" />
                          </g>
                          <g transform="rotate(8 36 34)">
                            <rect x="22" y="16" width="30" height="36" rx="2" fill="#ffffff" stroke="#002d62" strokeWidth="2" />
                            <rect x="25" y="19" width="24" height="22" fill="#3b82f6" />
                            <circle cx="37" cy="27" r="4.5" fill="#f87171" />
                            <path d="M25 38 C 28 32, 34 32, 37 36 C 41 30, 46 32, 49 38 Z" fill="#fbbf24" />
                          </g>
                        </svg>
                      </div>
                      <p className="quick-card-desc">{t.home.quickAccess.galleryCard.description}</p>
                    </div>
                    <div className="text-center mt-auto">
                      <Link href="/gallery" className="btn-quick-action">
                        {t.home.quickAccess.galleryCard.button}
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Painted Hands Girl Graphic with Top Pop-Up Overflow */}
            <div className="col-12 col-lg-3 col-xl-3 text-center text-lg-end">
              <div className="position-relative d-inline-block">
                <img
                  src="/assets/painted_hands_girl.png"
                  alt="School Girl with Colorful Painted Hands Smiling"
                  className="img-fluid girl-popup-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
         5. UPCOMING EVENTS & BANNER SLIDER
         ---------------------------------------------------- */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Events Cards */}
            <div className="col-lg-5">
              <span className="badge bg-warning-subtle text-dark fw-bold px-3 py-1 rounded-pill small mb-2 border border-warning">{t.home.upcomingEvents.tag}</span>
              <h3 className="fw-bold fs-3 text-dark mb-4">{t.home.upcomingEvents.heading}</h3>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-3 text-center fw-bold" style={{ width: "60px" }}>
                    <div className="fs-5 leading-none">{t.home.upcomingEvents.events[0].day}</div>
                    <div className="small">{t.home.upcomingEvents.events[0].month}</div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{t.home.upcomingEvents.events[0].title}</h6>
                    <small className="text-muted">{t.home.upcomingEvents.events[0].description}</small>
                  </div>
                </div>

                <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-3 text-center fw-bold" style={{ width: "60px" }}>
                    <div className="fs-5 leading-none">{t.home.upcomingEvents.events[1].day}</div>
                    <div className="small">{t.home.upcomingEvents.events[1].month}</div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{t.home.upcomingEvents.events[1].title}</h6>
                    <small className="text-muted">{t.home.upcomingEvents.events[1].description}</small>
                  </div>
                </div>

                <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-3 text-center fw-bold" style={{ width: "60px" }}>
                    <div className="fs-5 leading-none">{t.home.upcomingEvents.events[2].day}</div>
                    <div className="small">{t.home.upcomingEvents.events[2].month}</div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{t.home.upcomingEvents.events[2].title}</h6>
                    <small className="text-muted">{t.home.upcomingEvents.events[2].description}</small>
                  </div>
                </div>
              </div>

              <Link href="/events" className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-dark">
                {t.home.upcomingEvents.viewAllButton}
              </Link>
            </div>

            {/* Right Campus Slider */}
            <div className="col-lg-7">
              <HeroBannerSlider />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
         6. ENQUIRY FORM & GOOGLE MAPS LOCATION
         ---------------------------------------------------- */}
      <section className="py-5 bg-light border-top" id="contact-section">
        <div className="container">
          <div className="row g-5">
            {/* Quick Enquiry Form */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm h-100">
                <span className="badge bg-warning-subtle text-dark fw-bold px-3 py-1 rounded-pill small mb-2 border border-warning">{t.home.quickEnquiry.tag}</span>
                <h3 className="fw-bold mb-3" style={{ color: "var(--navy-royal)" }}>{t.home.quickEnquiry.heading}</h3>
                <p className="text-muted small mb-4">{t.home.quickEnquiry.description}</p>

                {formSubmitted ? (
                  <div className="text-center py-4">
                    <div className="display-4 text-success mb-2">🎉</div>
                    <h5 className="fw-bold text-success">{t.home.quickEnquiry.form.successHeading}</h5>
                    <p className="text-muted small mb-3">{t.home.quickEnquiry.form.successMessage}</p>
                    <button onClick={() => setFormSubmitted(false)} className="btn btn-sm btn-outline-primary rounded-pill">
                      {t.home.quickEnquiry.form.submitAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control rounded-3" placeholder={t.home.quickEnquiry.form.parentName} required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" className="form-control rounded-3" placeholder={t.home.quickEnquiry.form.mobile} required />
                    </div>
                    <div className="col-12">
                      <select className="form-select rounded-3" defaultValue="Play Group">
                        <option value="Play Group">Class Seeking: Play Group</option>
                        <option value="Nursery">Class Seeking: Nursery</option>
                        <option value="LKG">Class Seeking: LKG</option>
                        <option value="UKG">Class Seeking: UKG</option>
                        <option value="Class 1-5">Class Seeking: Class I to V</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control rounded-3" rows={3} placeholder={t.home.quickEnquiry.form.message}></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-warning w-100 py-2 rounded-pill fw-bold text-dark">
                        {t.home.quickEnquiry.form.submitButton}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Google Maps Campus Location */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm h-100 text-center d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-warning-subtle text-dark fw-bold px-3 py-1 rounded-pill small mb-2 border border-warning">{t.home.campusLocation.tag}</span>
                  <h3 className="fw-bold mb-2" style={{ color: "var(--navy-royal)" }}>{t.home.campusLocation.heading}</h3>
                  <p className="text-muted small mb-4">{t.home.campusLocation.address}</p>
                </div>

                <div className="rounded-3 overflow-hidden border shadow-sm mb-3" style={{ height: "240px" }}>
                  <iframe
                    src={t.school.location.embedMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>

                <a
                  href={t.school.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-pill py-2 fw-bold text-decoration-none"
                >
                  {t.home.campusLocation.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
