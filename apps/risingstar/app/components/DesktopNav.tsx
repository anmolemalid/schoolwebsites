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
    <nav className="desktop-nav align-items-center gap-2 navigation-links d-none d-lg-flex">
      <Link
        href="/"
        className={`nav-link-mockup ${isActive("/") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.home}
      </Link>
      <Link
        href="/about"
        className={`nav-link-mockup ${isActive("/about") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.aboutUs}
      </Link>
      <Link
        href="/curriculum"
        className={`nav-link-mockup ${isActive("/curriculum") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.curriculum}
      </Link>
      <Link
        href="/admissions"
        className={`nav-link-mockup ${isActive("/admissions") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.admissions}
      </Link>
      <Link
        href="/facilities"
        className={`nav-link-mockup ${isActive("/facilities") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.facilities}
      </Link>
      <Link
        href="/gallery"
        className={`nav-link-mockup ${isActive("/gallery") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.gallery}
      </Link>
      <Link
        href="/events"
        className={`nav-link-mockup ${isActive("/events") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.events}
      </Link>
      <Link
        href="/contact"
        className={`nav-link-mockup ${isActive("/contact") ? "nav-link-mockup-active" : ""}`}
      >
        {t.nav.contactUs}
      </Link>
    </nav>
  );
}
