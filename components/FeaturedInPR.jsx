"use client";

import React from "react";
import styles from "./FeaturedInPR.module.css";

// Media & Press Publications Data
export const prArticlesData = [
  {
    id: "lokmat-times",
    publication: "LOKMAT TIMES",
    logoType: "lokmat",
    headline:
      "DizitalAdda Partners with Industry Leaders to Empower Students with Cutting-Edge Marketing & AI Skills",
    date: "Media Coverage",
    url: "https://www.lokmattimes.com",
  },
  {
    id: "the-himalayan",
    publication: "The Himalayan",
    logoType: "himalayan",
    headline:
      "DizitalAdda strives to become a prominent facilitator for the entire digital marketing ecosystem in Delhi NCR",
    date: "Press Release",
    url: "https://thehimalayantimes.com",
  },
  {
    id: "tech-bullion",
    publication: "TechBullion",
    logoType: "techbullion",
    headline:
      "Future Of Digital Marketing & AI: Trend Predictions by Dr. Gulshan Kumar, Founder of DizitalAdda",
    date: "Industry Feature",
    url: "https://techbullion.com",
  },
  {
    id: "business-standard",
    publication: "Business Standard",
    logoType: "business-standard",
    headline:
      "DizitalAdda's Practical Training & 97% Placement Track Record Helps Career Aspirants Accelerate Their Growth",
    date: "Special Report",
    url: "https://www.business-standard.com",
  },
];

// High-fidelity vector logos for each media outlet
function PublicationLogo({ type }) {
  if (type === "lokmat") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 800,
            fontSize: "19px",
            letterSpacing: "0.04em",
            color: "#111827",
            lineHeight: 1,
          }}
        >
          LOKMAT
        </span>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="#dc2626"
          aria-hidden="true"
        >
          <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8Z" />
        </svg>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "17px",
            letterSpacing: "0.08em",
            color: "#111827",
            lineHeight: 1,
          }}
        >
          TIMES
        </span>
      </div>
    );
  }

  if (type === "himalayan") {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "4px 8px",
          background: "#e0f2fe",
          borderRadius: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 800,
            fontSize: "17px",
            color: "#0369a1",
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          The Himalayan
        </span>
      </div>
    );
  }

  if (type === "techbullion") {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "#0f172a",
            color: "#38bdf8",
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: "15px",
            lineHeight: 1,
          }}
        >
          T
        </div>
        <span
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            color: "#0f172a",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          TechBullion
        </span>
      </div>
    );
  }

  if (type === "business-standard") {
    return (
      <span
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: 800,
          fontSize: "20px",
          color: "#dc2626",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        Business Standard
      </span>
    );
  }

  return <strong>Media Coverage</strong>;
}

export default function FeaturedInPR({ articles = prArticlesData }) {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-in-heading"
      id="featured-in"
    >
      <div className={styles.container}>
        {/* ================= HEADER ("Featured In") ================= */}
        <header className={styles.header}>
          <h2 id="featured-in-heading" className={styles.heading}>
            Featured <span className={styles.headingHighlight}>In</span>
          </h2>
          <p className={styles.subtext}>
            Leading national news publications and digital media portals covering DizitalAdda&apos;s educational milestones, career impact, and industry insights.
          </p>
        </header>

        {/* ================= 4 PR BROWSER CARDS GRID ================= */}
        <div className={styles.grid} role="list">
          {articles.map((item) => (
            <a
              key={item.id}
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.outerCard}
              role="listitem"
              aria-label={`Read coverage in ${item.publication}: ${item.headline}`}
            >
              {/* Inner White Browser Card */}
              <div className={styles.innerCard}>
                {/* 3 Mac-style Window Dots (Red, Yellow, Green) */}
                <div className={styles.macDots} aria-hidden="true">
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>

                {/* Media Publication Logo */}
                <div className={styles.logoWrap}>
                  {item.logoSrc ? (
                    <img
                      src={item.logoSrc}
                      alt={item.publication}
                      className={styles.publicationLogo}
                      loading="lazy"
                    />
                  ) : (
                    <PublicationLogo type={item.logoType} />
                  )}
                </div>

                {/* Article Headline Snippet */}
                <p className={styles.headline}>
                  {item.headline}
                </p>

                {/* Bottom Card Footer */}
                <div className={styles.cardFooter}>
                  <span className={styles.dateTag}>{item.date}</span>
                  <span className={styles.readLink}>
                    Read article ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
