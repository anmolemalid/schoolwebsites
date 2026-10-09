"use client";

import { useState, useEffect, useRef } from "react";
import { t } from "../lib/i18n";

export default function MobileQuickFlipFab() {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const phoneUrl = `tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`;
  const whatsappUrl = `https://wa.me/${t.school.contacts.whatsapp}`;
  const mapsUrl = t.school.location.mapsUrl;

  return (
    <div ref={fabRef} className="mobile-quick-flip-container d-md-none">
      {/* Backdrop overlay when open */}
      {isOpen && (
        <div
          className="mobile-fab-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Expanded Quick Options List */}
      <div className={`fab-options-wrapper ${isOpen ? "is-open" : ""}`}>
        {/* Option 1: Call Us */}
        <a
          href={phoneUrl}
          className="fab-action-btn fab-call-btn"
          onClick={() => setIsOpen(false)}
        >
          <span className="fab-action-text">{t.floatingActions.callUs}</span>
          <span className="fab-action-icon call-icon">📞</span>
        </a>

        {/* Option 2: WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-action-btn fab-wa-btn"
          onClick={() => setIsOpen(false)}
        >
          <span className="fab-action-text">{t.floatingActions.whatsapp}</span>
          <span className="fab-action-icon wa-icon">💬</span>
        </a>

        {/* Option 3: Direction */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-action-btn fab-map-btn"
          onClick={() => setIsOpen(false)}
        >
          <span className="fab-action-text">{t.floatingActions.direction}</span>
          <span className="fab-action-icon map-icon">📍</span>
        </a>
      </div>

      {/* Highlighted FAB Button Container with Badge Tag */}
      <div className="d-flex align-items-center gap-2">
        <button
          type="button"
          onClick={toggleOpen}
          className={`fab-flip-trigger ${isOpen ? "is-active" : ""}`}
          aria-label="Quick Contact Action Menu"
          aria-expanded={isOpen}
        >
          <div className="fab-flip-inner">
            <span className="fab-flip-front d-flex align-items-center justify-content-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.848-.432-1.393-.578-2.302-1.996-2.37-2.087-.07-.091-.564-.75-.564-1.429 0-.679.356-.995.485-1.132.13-.137.284-.17.378-.17.094 0 .188.001.272.005.087.004.204-.033.319.243.118.283.407.994.442 1.066.036.072.06.157.012.253-.049.096-.073.156-.145.241-.073.084-.153.188-.218.253-.073.072-.15.15-.065.295.085.146.377.621.81 1.006.559.497 1.031.65 1.177.722.146.073.231.06.316-.037.086-.097.369-.43.467-.577.097-.146.195-.122.327-.073.133.048.847.399.993.472.145.073.242.109.278.17.037.061.037.352-.107.757zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.438 5.176L2 22l4.982-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.71 0-3.303-.523-4.623-1.419l-.331-.223-2.955.775.789-2.88-.242-.385A7.954 7.954 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </span>
            <span className="fab-flip-back">✕</span>
          </div>
        </button>

        {/* Visible "Quick Contact" Badge Label when closed */}
        {!isOpen && (
          <button
            type="button"
            onClick={toggleOpen}
            className="fab-badge-pill border-0 text-start"
          >
            <span>Let's Connect</span>
            <span className="ms-1">▸</span>
          </button>
        )}
      </div>
    </div>
  );
}
