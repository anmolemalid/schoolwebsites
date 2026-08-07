"use client";

import { useState, useEffect } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`hamburger-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Drawer */}
      <nav className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <span className="fw-bold brand-text fs-5">Menu</span>
          <button
            className="mobile-nav-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#about" className="mobile-nav-link" onClick={handleLinkClick}>
            <span className="mobile-nav-icon">🧒</span>
            About Us
          </a>
          <a href="#curriculum" className="mobile-nav-link" onClick={handleLinkClick}>
            <span className="mobile-nav-icon">📖</span>
            Curriculum
          </a>
          <a href="#gallery" className="mobile-nav-link" onClick={handleLinkClick}>
            <span className="mobile-nav-icon">🎨</span>
            Spaces & Activities
          </a>
          <a href="#timeline" className="mobile-nav-link" onClick={handleLinkClick}>
            <span className="mobile-nav-icon">⏰</span>
            A Day in Life
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={handleLinkClick}>
            <span className="mobile-nav-icon">📞</span>
            Contact Us
          </a>
        </div>
        <div className="mobile-nav-footer">
          <a
            href="#admissions"
            className="btn btn-orange w-100 py-3 rounded-pill fw-bold"
            onClick={handleLinkClick}
          >
            Inquire Now
          </a>
          <a
            href="https://www.google.com/maps?q=28.643333,77.427889"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block text-muted small text-center mt-3 mb-0 text-decoration-none mobile-nav-map-link"
          >
            📍 Vijay Nagar, Ghaziabad
          </a>
        </div>
      </nav>
    </>
  );
}
