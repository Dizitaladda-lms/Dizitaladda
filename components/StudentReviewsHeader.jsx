"use client";

import React from "react";
import styles from "./StudentReviewsHeader.module.css";

// Sample placeholder avatars (initials + background colors)
const defaultAvatars = [
  { id: 1, initials: "AS", bg: "#8b5cf6" },
  { id: 2, initials: "SK", bg: "#ec4899" },
  { id: 3, initials: "TB", bg: "#3b82f6" },
  { id: 4, initials: "SV", bg: "#10b981" },
];

export default function StudentReviewsHeader({
  chipText = "What students say",
  headingMain = "Student",
  headingHighlight = "Reviews",
  subtext = "Hear from students who started their careers with us.",
  rating = "4.9",
  studentsCount = "1,200+",
  avatars = defaultAvatars,
}) {
  return (
    <div className={styles.srHeader}>
      <div className={styles.srInner}>
        {/* 1. Label Chip */}
        <div className={styles.srChip}>
          <span className={styles.srChipDot} aria-hidden="true" />
          <span>{chipText}</span>
        </div>

        {/* 2. Heading with Gradient Highlight on "Reviews" */}
        <h2 className={styles.srHeading}>
          {headingMain}
          <span className={styles.srHeadingHighlight}>{headingHighlight}</span>
        </h2>

        {/* 3. Decorative Hand-Drawn Wavy Line (Inline SVG) */}
        <svg
          className={styles.srWave}
          viewBox="0 0 240 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="srWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--sr-grad-start, #c026d3)" />
              <stop offset="100%" stopColor="var(--sr-grad-end, #7c3aed)" />
            </linearGradient>
          </defs>
          <path
            d="M4 11 C 42 3, 78 17, 120 9 C 162 2, 198 16, 236 8"
            stroke="url(#srWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* 4. Subtext */}
        <p className={styles.srSubtext}>{subtext}</p>

        {/* 5. Social Proof Row (Avatars + Stars + 4.9 Score) */}
        <div className={styles.srProof}>
          <div className={styles.srAvatars} aria-hidden="true">
            {avatars.map((av, index) => (
              <div
                key={av.id || index}
                className={styles.srAvatar}
                style={{ "--av-bg": av.bg }}
              >
                {av.src ? (
                  <img src={av.src} alt="" />
                ) : (
                  <span>{av.initials}</span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.srRating}>
            <span className={styles.srStars} aria-hidden="true">
              ★★★★★
            </span>
            <span className={styles.srScore}>{rating}</span>
            <span className={styles.srCount}>from {studentsCount} students</span>
          </div>
        </div>
      </div>
    </div>
  );
}
