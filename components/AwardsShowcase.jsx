"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./AwardsShowcase.module.css";

// 4 Modern Photo-First Award Cards Data (with distinct images)
export const awardsData = [
  {
    id: "indian-icon-award",
    image: "/assets/img/kiran-bedi.webp",
    badge: "Presented by Dr. Kiran Bedi",
    title: "Indian Icon Award",
    subtitle: "Excellence in Practical Digital Education • 2024",
    recipient: "Dr. Gulshan Kumar (Founder, DizitalAdda)",
    icon: "🏆",
  },
  {
    id: "bharat-business-award",
    image: "/assets/img/aslin grover.webp",
    badge: "Presented by Ashneer Grover",
    title: "Bharat Business Award",
    subtitle: "Innovation in EdTech & Career Training • 2024",
    recipient: "Dr. Gulshan Kumar & DizitalAdda Team",
    icon: "⭐",
  },
  {
    id: "excellence-skill-training",
    image: "/courses/images/gulshan/Gulshan.webp",
    badge: "Education Leadership Summit",
    title: "Excellence in Skill Training",
    subtitle: "Best Digital Marketing Institute • 2023–24",
    recipient: "Dr. Gulshan Kumar (Founder, DizitalAdda)",
    icon: "🎓",
  },
  {
    id: "national-youth-employability",
    image: "/assets/img/gulshan-kumar-award.webp",
    badge: "National Skill Leadership",
    title: "National Youth Employability Award",
    subtitle: "Career Launch & Placement Support • 2024",
    recipient: "DizitalAdda Institute",
    icon: "🏅",
  },
];

export default function AwardsShowcase({ data = awardsData }) {
  const [selectedAward, setSelectedAward] = useState(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedAward(null);
      }
    };
    if (selectedAward) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedAward]);

  return (
    <section
      className={styles.section}
      aria-labelledby="awards-section-title"
      id="awards-recognitions"
    >
      <div className={styles.container}>
        {/* ================= HEADER ================= */}
        <SectionHeader
          align="center"
          id="awards-section-title"
          label="Prestigious Recognitions"
          title={<>Awards &amp; Industry <span className="highlight">Recognitions</span></>}
          description="DizitalAdda ki practical training, live projects model aur student placements ko Bharat ke prominent national leaders aur dignitaries ne sammanit kiya hai."
        />

        {/* ================= 4-COLUMN PHOTO-FIRST GRID ================= */}
        <div className={styles.awardsGrid} role="list">
          {data.map((award) => (
            <article
              key={award.id}
              className={styles.card}
              onClick={() => setSelectedAward(award)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedAward(award);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View award: ${award.title} (${award.badge})`}
            >
              {/* Full Fill Image (object-top to keep faces & heads uncropped) */}
              <img
                src={award.image}
                alt={`${award.title} - ${award.badge}`}
                className={styles.awardImage}
                loading="lazy"
                decoding="async"
              />

              {/* Top-Right Expand Icon Button */}
              <div className={styles.expandButton} aria-hidden="true">
                <svg viewBox="0 0 24 24" className={styles.expandIcon}>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>

              {/* Bottom 45% Gradient Overlay with 3 Minimal Elements */}
              <div className={styles.overlay}>
                {/* a) Top Pill Badge */}
                <div className={styles.pillBadge}>
                  <span className={styles.pillIcon} aria-hidden="true">
                    {award.icon}
                  </span>
                  <span>{award.badge}</span>
                </div>

                {/* b) Award Title */}
                <h3 className={styles.awardTitle}>{award.title}</h3>

                {/* c) 1-Line Subtitle */}
                <p className={styles.awardSubtitle}>{award.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= INTERACTIVE LIGHTBOX MODAL ================= */}
      {selectedAward && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedAward(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Award Preview Modal"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setSelectedAward(null)}
              aria-label="Close award preview (Escape)"
              type="button"
            >
              ✕
            </button>

            <div className={styles.lightboxImageWrap}>
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className={styles.lightboxImage}
              />
            </div>

            <div className={styles.lightboxDetails}>
              <h3 className={styles.lightboxTitle}>{selectedAward.title}</h3>
              <p className={styles.lightboxPresenter}>
                {selectedAward.badge} • {selectedAward.subtitle}
              </p>
              <p className={styles.lightboxRecipient}>
                Awarded to: {selectedAward.recipient}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
