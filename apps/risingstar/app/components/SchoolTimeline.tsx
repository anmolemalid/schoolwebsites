"use client";

import { useState } from "react";

export interface TimelineItem {
  year: string;
  icon: string;
  phase: number;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
}

interface SchoolTimelineProps {
  items: TimelineItem[];
  filterLabels: {
    all: string;
    phase1: string;
    phase2: string;
    yearPrefix?: string;
  };
  yearPrefix?: string;
}

export default function SchoolTimeline({ items, filterLabels, yearPrefix }: SchoolTimelineProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | 1 | 2>("all");

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    return item.phase === activeFilter;
  });

  return (
    <div className="school-timeline-container">
      {/* Interactive Phase Filter Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`btn rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 timeline-filter-btn ${
            activeFilter === "all" ? "active" : ""
          }`}
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            backgroundColor: activeFilter === "all" ? "#071c3e" : "#ffffff",
            color: activeFilter === "all" ? "#ffffff" : "#071c3e",
            border: activeFilter === "all" ? "2px solid #071c3e" : "2px solid #cbd5e1",
            boxShadow:
              activeFilter === "all"
                ? "0 4px 16px rgba(7, 28, 62, 0.25)"
                : "0 2px 6px rgba(0, 0, 0, 0.04)",
          }}
        >
          <span aria-hidden="true">⏳</span>
          <span
            className="timeline-btn-text"
            style={{
              color: activeFilter === "all" ? "#ffffff" : "#071c3e",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            {filterLabels.all}
          </span>
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: activeFilter === "all" ? "#ffd200" : "#e2e8f0",
              color: activeFilter === "all" ? "#071c3e" : "#0f172a",
              fontWeight: 700,
              fontSize: "0.82rem",
            }}
          >
            {items.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter(1)}
          className={`btn rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 timeline-filter-btn ${
            activeFilter === 1 ? "active" : ""
          }`}
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            backgroundColor: activeFilter === 1 ? "#071c3e" : "#ffffff",
            color: activeFilter === 1 ? "#ffffff" : "#071c3e",
            border: activeFilter === 1 ? "2px solid #071c3e" : "2px solid #cbd5e1",
            boxShadow:
              activeFilter === 1
                ? "0 4px 16px rgba(7, 28, 62, 0.25)"
                : "0 2px 6px rgba(0, 0, 0, 0.04)",
          }}
        >
          <span aria-hidden="true">🌱</span>
          <span
            className="timeline-btn-text"
            style={{
              color: activeFilter === 1 ? "#ffffff" : "#071c3e",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            {filterLabels.phase1}
          </span>
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: activeFilter === 1 ? "#ffd200" : "#e2e8f0",
              color: activeFilter === 1 ? "#071c3e" : "#0f172a",
              fontWeight: 700,
              fontSize: "0.82rem",
            }}
          >
            {items.filter((i) => i.phase === 1).length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter(2)}
          className={`btn rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 timeline-filter-btn ${
            activeFilter === 2 ? "active" : ""
          }`}
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            backgroundColor: activeFilter === 2 ? "#071c3e" : "#ffffff",
            color: activeFilter === 2 ? "#ffffff" : "#071c3e",
            border: activeFilter === 2 ? "2px solid #071c3e" : "2px solid #cbd5e1",
            boxShadow:
              activeFilter === 2
                ? "0 4px 16px rgba(7, 28, 62, 0.25)"
                : "0 2px 6px rgba(0, 0, 0, 0.04)",
          }}
        >
          <span aria-hidden="true">🏛️</span>
          <span
            className="timeline-btn-text"
            style={{
              color: activeFilter === 2 ? "#ffffff" : "#071c3e",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            {filterLabels.phase2}
          </span>
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: activeFilter === 2 ? "#ffd200" : "#e2e8f0",
              color: activeFilter === 2 ? "#071c3e" : "#0f172a",
              fontWeight: 700,
              fontSize: "0.82rem",
            }}
          >
            {items.filter((i) => i.phase === 2).length}
          </span>
        </button>
      </div>

      {/* Timeline Tree View */}
      <div className="timeline-kids">
        {filteredItems.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={item.year} className="timeline-kids-item">
              {/* Circular Center Badge */}
              <div
                className="timeline-kids-badge"
                title={`${yearPrefix || filterLabels.yearPrefix || "YEAR"} ${item.year}: ${item.title}`}
              >
                <span>{item.icon}</span>
              </div>

              {/* Card Container alternating Left / Right on Desktop */}
              <div
                className={`timeline-kids-card ${
                  isLeft ? "timeline-left" : "timeline-right"
                }`}
              >
                {/* Year Pill & Phase Subtitle */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                  <span
                    className="badge text-dark fw-bold px-3 py-1 rounded-pill shadow-sm"
                    style={{
                      background:
                        item.phase === 2
                          ? "linear-gradient(135deg, #ffd200 0%, #ffaa00 100%)"
                          : "linear-gradient(135deg, #a7f3d0 0%, #34d399 100%)",
                      fontSize: "0.85rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {(yearPrefix || filterLabels.yearPrefix || "YEAR")} {item.year}
                  </span>

                  <span
                    className="small fw-semibold"
                    style={{
                      color: item.phase === 2 ? "var(--primary-royal)" : "#059669",
                    }}
                  >
                    {item.subtitle}
                  </span>
                </div>

                {/* Milestone Heading */}
                <h4
                  className="fw-bold fs-5 text-dark mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h4>

                {/* Narrative Description */}
                <p className="text-muted small mb-3" style={{ lineHeight: 1.65 }}>
                  {item.description}
                </p>

                {/* Milestone Key Highlights Pill */}
                <div className="d-flex align-items-center gap-2 pt-2 border-top">
                  <span className="text-warning fw-bold" style={{ fontSize: "0.9rem" }}>
                    ⭐
                  </span>
                  <span className="text-dark small fw-semibold">
                    {item.highlight || item.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
