"use client";

import { useState, useEffect } from "react";
import { type Locale } from "../lib/i18n";

interface LanguageSwitcherProps {
  variant?: "topbar" | "mobile";
  className?: string;
  onLanguageChange?: (lang: Locale) => void;
}

export default function LanguageSwitcher({
  variant = "topbar",
  className = "",
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read from cookie first, fallback to localStorage
    const match = document.cookie.match(/(?:^|; )school_lang=([^;]*)/);
    if (match && (match[1] === "hi" || match[1] === "en")) {
      setCurrentLang(match[1] as Locale);
    } else {
      try {
        const stored = localStorage.getItem("school_lang");
        if (stored === "hi" || stored === "en") {
          setCurrentLang(stored as Locale);
        }
      } catch {}
    }
  }, []);

  const switchLanguage = (newLang: Locale) => {
    if (newLang === currentLang) return;
    setCurrentLang(newLang);

    // Persist to document.cookie (1-year expiry) so server components receive it
    if (typeof document !== "undefined") {
      document.cookie = `school_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      try {
        localStorage.setItem("school_lang", newLang);
      } catch {}
    }

    if (onLanguageChange) {
      onLanguageChange(newLang);
    }

    // Refresh page to load translations cleanly across server and client
    window.location.reload();
  };

  if (!mounted) {
    // Render placeholder to avoid hydration layout shift
    if (variant === "topbar") {
      return (
        <div className={`d-inline-flex align-items-center ${className}`} style={{ minWidth: "96px", height: "28px" }} />
      );
    }
    return (
      <div className={`p-3 border-bottom ${className}`} style={{ minHeight: "68px" }} />
    );
  }

  if (variant === "mobile") {
    return (
      <div className={`mobile-language-switcher p-3 border-bottom ${className}`} style={{ backgroundColor: "#f8fbff" }}>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center gap-2">
            <span className="fs-5" role="img" aria-label="Globe">🌐</span>
            <div>
              <div className="fw-bold text-dark small" style={{ lineHeight: 1.2 }}>
                {currentLang === "hi" ? "भाषा चुनें" : "Select Language"}
              </div>
              <small className="text-muted" style={{ fontSize: "0.72rem" }}>
                English / हिंदी
              </small>
            </div>
          </div>
          <div
            className="btn-group btn-group-sm rounded-pill p-1 shadow-sm bg-white border"
            style={{ borderColor: "#d0d7de" }}
          >
            <button
              type="button"
              onClick={() => switchLanguage("en")}
              className={`btn btn-sm rounded-pill px-3 py-1 fw-bold transition-all ${
                currentLang === "en" ? "btn-primary shadow-sm" : "btn-light text-muted"
              }`}
              style={
                currentLang === "en"
                  ? {
                      backgroundColor: "#004a90",
                      borderColor: "#004a90",
                      color: "#ffffff",
                      fontSize: "0.82rem",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "#4a5568",
                      fontSize: "0.82rem",
                      border: "none",
                    }
              }
              aria-label="Switch to English"
            >
              English
            </button>
            <button
              type="button"
              onClick={() => switchLanguage("hi")}
              className={`btn btn-sm rounded-pill px-3 py-1 fw-bold transition-all ${
                currentLang === "hi" ? "btn-primary shadow-sm" : "btn-light text-muted"
              }`}
              style={
                currentLang === "hi"
                  ? {
                      backgroundColor: "#004a90",
                      borderColor: "#004a90",
                      color: "#ffffff",
                      fontSize: "0.82rem",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "#4a5568",
                      fontSize: "0.82rem",
                      border: "none",
                    }
              }
              aria-label="हिंदी में बदलें"
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default: "topbar" variant for desktop top bar
  return (
    <div className={`language-switcher-topbar d-inline-flex align-items-center ${className}`}>
      <div
        className="btn-group btn-group-sm rounded-pill p-1 shadow-sm d-inline-flex align-items-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          border: "1.2px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(6px)",
        }}
      >
        <span
          className="px-1 text-white opacity-90 small d-flex align-items-center"
          title="Change Language / भाषा बदलें"
          style={{ fontSize: "0.85rem" }}
        >
          🌐
        </span>
        <button
          type="button"
          onClick={() => switchLanguage("en")}
          className={`btn btn-sm rounded-pill px-2 py-0 fw-bold transition-all`}
          style={
            currentLang === "en"
              ? {
                  backgroundColor: "var(--yellow-sunshine, #ffd200)",
                  color: "#071c3e",
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  fontWeight: 800,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }
              : {
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  border: "none",
                  opacity: 0.85,
                }
          }
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => switchLanguage("hi")}
          className={`btn btn-sm rounded-pill px-2 py-0 fw-bold transition-all`}
          style={
            currentLang === "hi"
              ? {
                  backgroundColor: "var(--yellow-sunshine, #ffd200)",
                  color: "#071c3e",
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  fontWeight: 800,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }
              : {
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  border: "none",
                  opacity: 0.85,
                }
          }
          aria-label="हिंदी में बदलें"
        >
          हिंदी
        </button>
      </div>
    </div>
  );
}
