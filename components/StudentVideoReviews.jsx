"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import PortraitVideoCard from "./PortraitVideoCard";
import styles from "./StudentVideoReviews.module.css";

// Editable Student Video Reviews Data Array
export const studentVideoReviewsData = [
  {
    id: "review-1",
    name: "Abhinav Sharma",
    course: "Advanced Digital Marketing",
    videoId: "KFWyifEYWyU",
  },
  {
    id: "review-2",
    name: "Shiv Kalra",
    course: "Expert Digital Marketing",
    videoId: "5Ky9myAg6a8",
  },
  {
    id: "review-3",
    name: "Tulika Biswas",
    course: "Digital Marketing for Professionals",
    videoId: "0Y0wxv9Hrvc",
  },
  {
    id: "review-4",
    name: "Sapna Verma",
    course: "Advanced Digital Marketing",
    videoId: "93nJRCQduxg",
  },
];

export default function StudentVideoReviews({
  data = studentVideoReviewsData,
}) {
  // Only one video plays at a time across the site
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleTogglePlay = (id) => {
    if (activeVideoId === id) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(id);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("da-video-play", { detail: { id } }));
      }
    }
  };

  // Sync with global single video playback
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleGlobalPlay = (e) => {
      if (e.detail?.id !== activeVideoId) {
        setActiveVideoId(null);
      }
    };

    window.addEventListener("da-video-play", handleGlobalPlay);
    return () => window.removeEventListener("da-video-play", handleGlobalPlay);
  }, [activeVideoId]);

  return (
    <section
      className={styles.section}
      aria-labelledby="student-reviews-heading"
      id="student-video-reviews"
    >
      <div className={styles.container}>
        {/* ================= SECTION HEADER ================= */}
        <div className={styles.header}>
          <SectionHeader
            align="left"
            id="student-reviews-heading"
            label="Video Testimonials"
            title="In Our Students' Own Words"
            description="Real stories from graduates who accelerated their careers and achieved measurable success with DizitalAdda."
            className={styles.headerLeft}
          />

          <div className={styles.headerRight}>
            <div className={styles.statItem}>
              <div className={styles.statRow}>
                <span className={styles.statValue}>4.9</span>
                <span className={styles.stars} aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
              <span className={styles.statLabel}>Course Rating</span>
            </div>

            <div className={styles.statDivider} aria-hidden="true" />

            <div className={styles.statItem}>
              <span className={styles.statValue}>1,200+</span>
              <span className={styles.statLabel}>Placed students</span>
            </div>
          </div>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className={styles.cardsGrid} role="list">
          {data.map((student) => {
            const cardId = student.id || student.videoId || student.name;
            return (
              <PortraitVideoCard
                key={cardId}
                item={student}
                isPlaying={activeVideoId === cardId}
                onTogglePlay={() => handleTogglePlay(cardId)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
