"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "../lib/i18n";

export default function DesktopNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="desktop-nav align-items-center gap-1 gap-xl-2 navigation-links d-none d-lg-flex">
      <Link
        href="/about"
        className={`nav-link-mockup nav-link-about ${isActive("/about") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">🏫</span>
        <span>{t.nav.aboutUs}</span>
      </Link>
      <Link
        href="/admissions"
        className={`nav-link-mockup nav-link-admissions ${isActive("/admissions") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">🎒</span>
        <span>{t.nav.admissions}</span>
        <span className="nav-open-badge ms-1">{t.nav.openBadge}</span>
      </Link>
      <Link
        href="/curriculum"
        className={`nav-link-mockup nav-link-curriculum ${isActive("/curriculum") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">📚</span>
        <span>{t.nav.curriculum}</span>
      </Link>
      <Link
        href="/facilities"
        className={`nav-link-mockup nav-link-facilities ${isActive("/facilities") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">🛝</span>
        <span>{t.nav.facilities}</span>
      </Link>
      <Link
        href="/gallery"
        className={`nav-link-mockup nav-link-gallery ${isActive("/gallery") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">🎨</span>
        <span>{t.nav.gallery}</span>
      </Link>
      <Link
        href="/events"
        className={`nav-link-mockup nav-link-events ${isActive("/events") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">🎈</span>
        <span>{t.nav.events}</span>
      </Link>
      <Link
        href="/contact"
        className={`nav-link-mockup nav-link-contact ${isActive("/contact") ? "nav-link-mockup-active" : ""}`}
      >
        <span className="nav-icon me-1">📞</span>
        <span>{t.nav.contactUs}</span>
      </Link>
    </nav>
  );
}
