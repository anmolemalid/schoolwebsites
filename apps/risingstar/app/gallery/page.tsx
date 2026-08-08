"use client";

import { useState } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";

const galleryItems = [
  {
    id: 1,
    title: "Preschool & Kindergarten Classroom",
    desc: "Nurturing learning environment with bilingual educational wall charts and colorful desks.",
    category: "classroom",
    image: "/images/gallery/1.png",
  },
  {
    id: 2,
    title: "Music, Rhythm & Activity Hall",
    desc: "Children playing tambourines and percussion instruments with joyful singing.",
    category: "activities",
    image: "/images/gallery/2.png",
  },
  {
    id: 3,
    title: "Montessori Nursery Activity Tables",
    desc: "Low wooden activity tables with shape sorters, puzzles, and sensory kits.",
    category: "indoor",
    image: "/images/gallery/3.png",
  },
  {
    id: 4,
    title: "Outdoor Swings & Play Lawn",
    desc: "Lush green grass lawn, safe swings, slides, and morning physical sports.",
    category: "outdoor",
    image: "/images/gallery/4.avif",
  },
  {
    id: 5,
    title: "Early Phonics & Guided Reading",
    desc: "Teacher guided reading sessions building English & Hindi vocabulary.",
    category: "classroom",
    image: "/images/gallery/5.jpg",
  },
  {
    id: 6,
    title: "Smart IT & Computer Lab",
    desc: "Individual computer stations with educational headsets and STEM modules.",
    category: "classroom",
    image: "/images/gallery/6.jpg",
  },
  {
    id: 7,
    title: "Joyful & Confident Learners",
    desc: "Encouraging curiosity, moral values, and public speaking confidence.",
    category: "classroom",
    image: "/images/gallery/7.jpg",
  },
  {
    id: 8,
    title: "Sensory Toys & Block Building",
    desc: "Building fine motor skills and spatial logic using safe block toys.",
    category: "indoor",
    image: "/images/gallery/8.avif",
  },
  {
    id: 9,
    title: "Outdoor Climbing & Sports Lawn",
    desc: "Active playground equipment ensuring physical coordination and teamwork.",
    category: "outdoor",
    image: "/images/gallery/9.avif",
  },
  {
    id: 10,
    title: "Creative Arts, Painting & Origami",
    desc: "Watercolor painting, origami crafts, and creative drawing workshops.",
    category: "activities",
    image: "/images/gallery/10.jpg",
  },
  {
    id: 11,
    title: "Student Group Photograph",
    desc: "Happy students at Rising Kids School.",
    category: "classroom",
    image: "/assets/students.jpg",
  },
  {
    id: 12,
    title: "Rising Kids School Campus",
    desc: "School campus at C-47, Sector 9, New Vijay Nagar, Ghaziabad.",
    category: "outdoor",
    image: "/assets/school-banner.jpg",
  },
];

const campusHighlights = [
  {
    icon: "🌟",
    title: "Safe & Sanitized Campus",
    desc: "Air-conditioned smart rooms, CCTV surveillance, clean washrooms, and sanitized learning resources.",
  },
  {
    icon: "🤝",
    title: "Loving & Qualified Educators",
    desc: "Passionate teachers trained in early childhood education, patient guidance, and motherly care.",
  },
  {
    icon: "🎯",
    title: "Joyful Hands-On Learning",
    desc: "Activity-based curriculum fostering creativity, curiosity, and strong foundational knowledge.",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <div className="gallery-page">
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
                    Gallery
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">Moments of Joy &amp; Achievements</div>
              <h1 className="page-blue-banner-title">School Photo Gallery</h1>
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
                <div className="fw-bold fs-5 text-warning mb-1">Campus Life</div>
                <div className="small mb-3 text-white text-opacity-90">Experience our joyful classrooms, celebrations &amp; play lawns.</div>
                <Link href="/contact" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>Book Campus Tour</span>
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

      {/* Main Gallery Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              CAMPUS LIFE
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Explore Play &amp; Learn Spaces
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              Step inside our bright, air-conditioned classrooms, IT lab, library, art room, and green play lawns in Vijay Nagar. Click any photo to enlarge.
            </p>

            {/* Category Filter Pills */}
            <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "all" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                All Spaces ({galleryItems.length})
              </button>
              <button
                onClick={() => setFilter("classroom")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "classroom" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                Classrooms &amp; IT Lab 🏫
              </button>
              <button
                onClick={() => setFilter("activities")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "activities" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                Arts &amp; Music 🎨
              </button>
              <button
                onClick={() => setFilter("indoor")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "indoor" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                Indoor Sensory Zone 🧸
              </button>
              <button
                onClick={() => setFilter("outdoor")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-bold ${
                  filter === "outdoor" ? "btn-primary shadow" : "btn-light border text-dark"
                }`}
              >
                Outdoor Play Lawn ⚽
              </button>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="row g-4">
            {filtered.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div
                  className="rounded-4 overflow-hidden shadow-sm border position-relative"
                  style={{
                    height: "280px",
                    cursor: "pointer",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onClick={() => setLightboxImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 45, 98, 0.95) 0%, rgba(0, 45, 98, 0.4) 70%, transparent 100%)",
                    }}
                  >
                    <h5 className="fw-bold text-white mb-1 fs-6">{item.title}</h5>
                    <p className="small text-white text-opacity-75 mb-1" style={{ fontSize: "0.8rem", lineHeight: 1.3 }}>
                      {item.desc}
                    </p>
                    <span className="badge bg-warning text-dark rounded-pill px-2 py-1" style={{ fontSize: "0.72rem" }}>
                      🔍 Tap to view
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights on Warm Cream */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              CAMPUS EXPERIENCE
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Experience Rising Kids in Person
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              A warm, welcoming, and safe learning environment where every child feels cherished, inspired, and motivated.
            </p>
          </div>

          <div className="row g-4">
            {campusHighlights.map((hl, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100 text-center">
                  <div className="fs-1 mb-2">{hl.icon}</div>
                  <h4 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {hl.title}
                  </h4>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.5 }}>
                    {hl.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Visit? Action Banner */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5 rounded-4 text-white text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 shadow-sm"
            style={{ backgroundColor: "#004a90", border: "2px solid #ffd200" }}
          >
            <div>
              <h2 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to explore our campus?
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                Book a personalized campus tour and meet our educators in New Vijay Nagar, Ghaziabad.
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                Book Campus Tour
              </Link>
              <Link
                href="/admissions"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <span>Admissions Open</span>
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 9999,
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="position-relative bg-white rounded-4 p-2 shadow-lg"
            style={{ maxWidth: "900px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 p-2 bg-white rounded-circle shadow"
              aria-label="Close"
              onClick={() => setLightboxImage(null)}
            ></button>
            <img
              src={lightboxImage}
              alt="Expanded Preview"
              className="w-100 rounded-3"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
