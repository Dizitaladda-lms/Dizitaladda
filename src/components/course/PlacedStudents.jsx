"use client";

import React from "react";

/**
 * PlacedStudents Component (Photos Only Marquee)
 * Desktop: Two rows moving in opposite directions (Left-to-Right & Right-to-Left).
 * Mobile: Single row with 120px square cards.
 * Pauses on hover (desktop) & on touch (mobile).
 * Respects prefers-reduced-motion by switching to static wrapping grid.
 */
export default function PlacedStudents({ placed }) {
  if (!placed || placed.length === 0) return null;

  // Split into two rows for desktop opposite direction marquees
  const half = Math.ceil(placed.length / 2);
  const row1 = placed.slice(0, half);
  const row2 = placed.slice(half);

  // Fallback student photo
  const fallbackPhoto = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ede9fe'/%3E%3Ccircle cx='75' cy='60' r='30' fill='%23c084fc'/%3E%3Cpath d='M30 140 C30 100 120 100 120 140 Z' fill='%23a855f7'/%3E%3C/svg%3E`;

  const renderCard = (st, idx) => (
    <div key={idx} className="dz-placed-card">
      <img
        src={st.photo || fallbackPhoto}
        alt={`${st.name} placed at ${st.company}`}
        width={150}
        height={150}
        className="dz-placed-img"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = fallbackPhoto;
        }}
      />
      <div className="dz-placed-overlay">
        <span className="dz-placed-name">{st.name}</span>
        <span className="dz-placed-company">{st.company}</span>
      </div>
    </div>
  );

  return (
    <section className="dz-section dz-section-lavender" id="placements" aria-labelledby="placed-heading">
      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="placed-heading">
            Our Students, <span className="dz-gradient-text">Now Placed</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            DizitalAdda alumni are working across India&apos;s leading tech, analytics, and consulting firms.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 (Left-to-Right / Right-to-Left loop) */}
      <div className="dz-placed-marquee-wrap" aria-label="Placed students marquee row 1">
        <div className="dz-placed-track">
          {row1.concat(row1).concat(row1).map((st, idx) => renderCard(st, `r1-${idx}`))}
        </div>
      </div>

      {/* Marquee Row 2 (Moving opposite direction for rich desktop feel) */}
      {row2.length > 0 && (
        <div
          className="dz-placed-marquee-wrap"
          style={{ marginTop: "14px" }}
          aria-label="Placed students marquee row 2"
        >
          <div className="dz-placed-track dz-placed-track-reverse">
            {row2.concat(row2).concat(row2).map((st, idx) => renderCard(st, `r2-${idx}`))}
          </div>
        </div>
      )}
    </section>
  );
}
