"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
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
  subtext = "Hear from students who started from scratch and built real careers in digital marketing, AI, and cybersecurity.",
  rating = "4.9",
  studentsCount = "1,200+",
  avatars = defaultAvatars,
}) {
  return (
    <div className={styles.srHeader}>
      <SectionHeader
        align="center"
        id="student-reviews-title"
        label={chipText}
        title={
          <>
            {headingMain} <span className="highlight">{headingHighlight}</span>
          </>
        }
        description={subtext}
      >
        {/* Social Proof Row (Avatars + Stars + 4.9 Score) */}
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
      </SectionHeader>
    </div>
  );
}
