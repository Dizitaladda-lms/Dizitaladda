"use client";

import React, { useState, useEffect } from "react";
import styles from "./AwardsShowcase.module.css";

// Editable Awards and Recognitions Data
export const awardsData = [
  {
    id: "indian-icon-award",
    image: "/assets/img/kiran-bedi.webp",
    guestTag: "Presented by Dr. Kiran Bedi",
    title: "Indian Icon Award",
    category: "Excellence in Practical Digital Education",
    recipient: "Dr. Gulshan Kumar (Founder, DizitalAdda)",
    presentedBy: "Dr. Kiran Bedi (First Woman IPS & Former Lt. Governor)",
    citation: "25,000+ students ko live projects aur real skills se empower karne ke liye sammanit kiya gaya.",
    year: "National Award 2024",
  },
  {
    id: "bharat-business-award",
    image: "/assets/img/aslin grover.webp",
    guestTag: "Presented by Ashneer Grover",
    title: "Bharat Business Award",
    category: "Innovation in EdTech & Career Training",
    recipient: "Dr. Gulshan Kumar & DizitalAdda Team",
    presentedBy: "Ashneer Grover (Entrepreneur & Former Shark Tank India Judge)",
    citation: "Real agency workflows aur live client budget training model ke liye industry recognition.",
    year: "Business Excellence 2024",
  },
  {
    id: "excellence-edtech-award",
    image: "/courses/images/gulshan/Gulshan.webp",
    guestTag: "Education Leadership Summit",
    title: "Excellence in Skill Training",
    category: "Best Digital Marketing Institute",
    recipient: "Dr. Gulshan Kumar (Founder, DizitalAdda)",
    presentedBy: "The Hotel School & Education Leadership Forum",
    citation: "97% placement track record aur industry-aligned syllabus deliver karne ke liye sammanit kiya gaya.",
    year: "EdTech Honors 2023-24",
  },
  {
    id: "msme-skill-award",
    image: "/locations/Award-1.webp",
    guestTag: "National Skill Leadership",
    title: "National Youth Employability Award",
    category: "Career Launch & Placement Support",
    recipient: "DizitalAdda Institute",
    presentedBy: "National Skill & MSME Development Summit",
    citation: "Students, college dropouts aur working professionals ko high-income skills me place karane ka samman.",
    year: "Industry Honor 2024",
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
        <header className={styles.header}>
          <span className={styles.badge}>Prestigious Recognitions</span>
          <h2 id="awards-section-title" className={styles.heading}>
            Awards &amp; Industry{" "}
            <span className={styles.headingGradient}>Recognitions</span>
          </h2>
          <p className={styles.subtext}>
            DizitalAdda ki practical training, live projects model aur student placements ko Bharat ke prominent national leaders aur dignitaries ne sammanit kiya hai.
          </p>
        </header>

        {/* ================= AWARDS CARDS GRID ================= */}
        <div className={styles.awardsGrid} role="list">
          {data.map((award) => (
            <article
              key={award.id}
              className={styles.card}
              role="listitem"
            >
              {/* Award Photo with Zoom Trigger */}
              <div
                className={styles.imageWrap}
                onClick={() => setSelectedAward(award)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedAward(award);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full ceremony image of ${award.title}`}
              >
                <span className={styles.guestPill}>{award.guestTag}</span>
                <img
                  src={award.image}
                  alt={`${award.title} presented to ${award.recipient}`}
                  className={styles.awardImage}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.zoomButton} aria-hidden="true">
                  🔍 Click to Enlarge
                </div>
              </div>

              {/* Card Body: Kis chiz ka award hai + Kise mila hai */}
              <div className={styles.cardBody}>
                {/* 1. Kis chiz ka award hai */}
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.awardCategory}>{award.category}</p>

                {/* 2. Kise mila hai & Kisne diya hai */}
                <div className={styles.detailsBox}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Kise Mila:</span>
                    <span className={`${styles.detailValue} ${styles.recipientValue}`}>
                      {award.recipient}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Kisne Diya:</span>
                    <span className={styles.detailValue}>
                      {award.presentedBy}
                    </span>
                  </div>
                </div>

                {/* Citation */}
                <p className={styles.citation}>{award.citation}</p>

                {/* Footer Tag */}
                <div className={styles.cardFooter}>
                  <span className={styles.yearTag}>{award.year}</span>
                  <span className={styles.verifiedBadge}>
                    <span className={styles.greenDot} aria-hidden="true" />
                    Verified Award
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX ZOOM MODAL ================= */}
      {selectedAward && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedAward(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Award Ceremony Preview"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setSelectedAward(null)}
              aria-label="Close award preview"
              type="button"
            >
              ✕
            </button>
            <img
              src={selectedAward.image}
              alt={selectedAward.title}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCaption}>
              <h4 className={styles.lightboxTitle}>
                {selectedAward.title} – {selectedAward.category}
              </h4>
              <p className={styles.lightboxSub}>
                Presented by {selectedAward.presentedBy} to {selectedAward.recipient}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
