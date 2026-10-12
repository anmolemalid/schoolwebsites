"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

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
        <div className="mobile-nav-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <span className="mobile-drawer-title">
            {t.school.name.toUpperCase().replace(" SCHOOL", "")}
          </span>
          <button
            className="btn-close"
            onClick={() => setIsOpen(false)}
            aria-label={t.header.closeMenu}
          />
        </div>

        {/* Mobile Language Switcher on Hamburger Slider */}
        <LanguageSwitcher variant="mobile" />

        {/* Drawer Links */}
        <div className="mobile-nav-links p-3">
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
            href="/admissions"
            className="mobile-nav-link"
            style={getLinkStyle("/admissions")}
            onClick={handleLinkClick}
          >
            <span className="me-2">📝</span>
            {t.nav.admissions}
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
      </nav>
    </>
  );
}
