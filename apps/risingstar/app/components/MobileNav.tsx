"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "../lib/i18n";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const getLinkStyle = (path: string) => {
    if (isActive(path)) {
      return {
        backgroundColor: "var(--yellow-sunshine, #ffd200)",
        color: "var(--navy-topbar, #0b3b78)",
        borderRadius: "8px",
        padding: "0.6rem 1rem",
        fontWeight: 700,
      };
    }
    return {};
  };

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
        className={`hamburger-btn d-lg-none ${isOpen ? "d-none" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.header.menuToggle}
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
        {/* Drawer Top Header */}
        <div className="mobile-nav-header d-flex justify-content-between align-items-center bg-white p-3 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <img src="/assets/finallogo.png" alt="Logo" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
            <div>
              <span className="fw-bold brand-title-mockup fs-6 d-block leading-tight">{t.school.name.toUpperCase()}</span>
              <small className="brand-tagline-mockup">{t.school.tagline.toUpperCase()}</small>
            </div>
          </div>
          <button
            className="btn-close"
            onClick={() => setIsOpen(false)}
            aria-label={t.header.closeMenu}
          />
        </div>

        {/* Drawer Links */}
        <div className="mobile-nav-links p-3">
          <Link
            href="/"
            className="mobile-nav-link"
            style={getLinkStyle("/")}
            onClick={handleLinkClick}
          >
            <span className="me-2">🏠</span>
            {t.nav.home}
          </Link>

          <Link
            href="/about"
            className="mobile-nav-link"
            style={getLinkStyle("/about")}
            onClick={handleLinkClick}
          >
            <span className="me-2">👤</span>
            {t.nav.aboutUs}
          </Link>

          <Link
            href="/curriculum"
            className="mobile-nav-link"
            style={getLinkStyle("/curriculum")}
            onClick={handleLinkClick}
          >
            <span className="me-2">📖</span>
            {t.nav.curriculum}
          </Link>

          <Link
            href="/admissions"
            className="mobile-nav-link"
            style={getLinkStyle("/admissions")}
            onClick={handleLinkClick}
          >
            <span className="me-2">📝</span>
            {t.nav.admissions}
          </Link>

          <Link
            href="/facilities"
            className="mobile-nav-link"
            style={getLinkStyle("/facilities")}
            onClick={handleLinkClick}
          >
            <span className="me-2">🛝</span>
            {t.nav.facilities}
          </Link>

          <Link
            href="/gallery"
            className="mobile-nav-link"
            style={getLinkStyle("/gallery")}
            onClick={handleLinkClick}
          >
            <span className="me-2">🖼️</span>
            {t.nav.gallery}
          </Link>

          <Link
            href="/events"
            className="mobile-nav-link"
            style={getLinkStyle("/events")}
            onClick={handleLinkClick}
          >
            <span className="me-2">🗓️</span>
            {t.nav.events}
          </Link>

          <Link
            href="/contact"
            className="mobile-nav-link"
            style={getLinkStyle("/contact")}
            onClick={handleLinkClick}
          >
            <span className="me-2">📞</span>
            {t.nav.contactUs}
          </Link>
        </div>

        {/* Drawer Bottom Info Box */}
        <div className="p-3 mt-auto" style={{ backgroundColor: "var(--navy-topbar)", color: "#ffffff" }}>
          <div className="small mb-2">
            <strong>📞 {t.contact.info.phoneTitle}:</strong><br />
            {t.school.contacts.phoneDisplay}
          </div>
          <div className="small mb-2">
            <strong>✉️ {t.contact.info.emailTitle}:</strong><br />
            {t.school.contacts.email}
          </div>
          <div className="small">
            <strong>📍 {t.contact.info.campusAddressTitle}:</strong><br />
            {t.school.location.fullAddress}
          </div>
        </div>
      </nav>
    </>
  );
}
